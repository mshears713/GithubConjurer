/**
 * Git Service
 *
 * Provides safe wrappers around Git operations using child processes.
 * All operations return structured results with error handling.
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import * as path from 'path';
import {
  GitStatus,
  GitCommit,
  GitBranch,
  GitConfig,
  GitResult,
  FileChange,
} from './types';

const execAsync = promisify(exec);

/**
 * Execute a Git command in a specific directory
 */
async function execGit(
  repoPath: string,
  command: string
): Promise<{ stdout: string; stderr: string }> {
  try {
    const { stdout, stderr } = await execAsync(`git ${command}`, {
      cwd: repoPath,
      encoding: 'utf8',
    });
    return { stdout: stdout.trim(), stderr: stderr.trim() };
  } catch (error: unknown) {
    if (error instanceof Error && 'stdout' in error && 'stderr' in error) {
      return {
        stdout: (error as { stdout: string }).stdout || '',
        stderr: (error as { stderr: string }).stderr || error.message,
      };
    }
    throw error;
  }
}

/**
 * Check if a directory is a Git repository
 */
export async function isGitRepo(repoPath: string): Promise<GitResult<boolean>> {
  try {
    const { stderr } = await execGit(repoPath, 'rev-parse --git-dir');
    return {
      success: !stderr,
      data: !stderr,
    };
  } catch {
    return {
      success: true,
      data: false,
    };
  }
}

/**
 * Get repository status
 */
export async function getStatus(repoPath: string): Promise<GitResult<GitStatus>> {
  try {
    const { stdout, stderr } = await execGit(repoPath, 'status --porcelain=v1 --branch');

    if (stderr && !stderr.includes('On branch')) {
      return {
        success: false,
        error: stderr,
      };
    }

    const lines = stdout.split('\n');
    const branchLine = lines[0];
    const fileLines = lines.slice(1).filter(l => l.trim());

    // Parse branch info
    let branch = 'HEAD';
    let ahead = 0;
    let behind = 0;

    if (branchLine.startsWith('##')) {
      const branchInfo = branchLine.substring(3);
      const parts = branchInfo.split('...');
      branch = parts[0].split(' ')[0];

      if (parts.length > 1) {
        const tracking = parts[1];
        const aheadMatch = tracking.match(/ahead (\d+)/);
        const behindMatch = tracking.match(/behind (\d+)/);
        if (aheadMatch) ahead = parseInt(aheadMatch[1]);
        if (behindMatch) behind = parseInt(behindMatch[1]);
      }
    }

    const staged: FileChange[] = [];
    const unstaged: FileChange[] = [];
    const untracked: string[] = [];

    for (const line of fileLines) {
      const x = line[0];
      const y = line[1];
      const file = line.substring(3);

      if (x === '?') {
        untracked.push(file);
      } else {
        if (x !== ' ' && x !== '?') {
          staged.push(parseFileChange(x, file));
        }
        if (y !== ' ' && y !== '?') {
          unstaged.push(parseFileChange(y, file));
        }
      }
    }

    const clean = staged.length === 0 && unstaged.length === 0 && untracked.length === 0;

    return {
      success: true,
      data: {
        branch,
        staged,
        unstaged,
        untracked,
        ahead,
        behind,
        clean,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Parse file change status from git status porcelain output
 */
function parseFileChange(statusCode: string, file: string): FileChange {
  let status: FileChange['status'] = 'modified';

  switch (statusCode) {
    case 'A':
      status = 'added';
      break;
    case 'D':
      status = 'deleted';
      break;
    case 'R':
      status = 'renamed';
      break;
    case 'C':
      status = 'copied';
      break;
    case 'M':
    default:
      status = 'modified';
  }

  return { path: file, status };
}

/**
 * Get commit log
 */
export async function getLog(
  repoPath: string,
  limit = 50
): Promise<GitResult<GitCommit[]>> {
  try {
    const format = '%H%n%h%n%an%n%ae%n%at%n%P%n%D%n%s%n%b%n---END---';
    const { stdout, stderr } = await execGit(
      repoPath,
      `log --format="${format}" -n ${limit}`
    );

    if (stderr) {
      return {
        success: false,
        error: stderr,
      };
    }

    const commits: GitCommit[] = [];
    const commitBlocks = stdout.split('---END---\n').filter(b => b.trim());

    for (const block of commitBlocks) {
      const lines = block.split('\n');
      if (lines.length < 7) continue;

      const [hash, shortHash, author, email, timestamp, parents, refs, ...messageLines] = lines;

      commits.push({
        hash,
        shortHash,
        author,
        email,
        date: new Date(parseInt(timestamp) * 1000),
        message: messageLines.join('\n').trim(),
        parents: parents ? parents.split(' ') : [],
        refs: refs ? refs.split(', ').filter(r => r) : [],
      });
    }

    return {
      success: true,
      data: commits,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Get branches
 */
export async function getBranches(repoPath: string): Promise<GitResult<GitBranch[]>> {
  try {
    const { stdout, stderr } = await execGit(repoPath, 'branch -vv');

    if (stderr && !stderr.includes('fatal')) {
      return {
        success: false,
        error: stderr,
      };
    }

    const branches: GitBranch[] = [];
    const lines = stdout.split('\n').filter(l => l.trim());

    for (const line of lines) {
      const isCurrent = line.startsWith('*');
      const cleanLine = line.substring(isCurrent ? 2 : 2);
      const parts = cleanLine.trim().split(/\s+/);

      if (parts.length < 2) continue;

      const name = parts[0];
      const commitHash = parts[1];

      // Parse upstream info if present
      let upstream: string | undefined;
      if (cleanLine.includes('[') && cleanLine.includes(']')) {
        const upstreamMatch = cleanLine.match(/\[(.+?)\]/);
        if (upstreamMatch) {
          upstream = upstreamMatch[1].split(':')[0];
        }
      }

      branches.push({
        name,
        isCurrent,
        isDefault: name === 'main' || name === 'master',
        commitHash,
        upstream,
      });
    }

    return {
      success: true,
      data: branches,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Create a new branch
 */
export async function createBranch(
  repoPath: string,
  branchName: string
): Promise<GitResult<void>> {
  try {
    const { stderr } = await execGit(repoPath, `branch ${branchName}`);

    if (stderr && stderr.includes('fatal')) {
      return {
        success: false,
        error: stderr,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Switch to a branch
 */
export async function checkoutBranch(
  repoPath: string,
  branchName: string
): Promise<GitResult<void>> {
  try {
    const { stderr } = await execGit(repoPath, `checkout ${branchName}`);

    if (stderr && stderr.includes('error')) {
      return {
        success: false,
        error: stderr,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Delete a branch
 */
export async function deleteBranch(
  repoPath: string,
  branchName: string,
  force = false
): Promise<GitResult<void>> {
  try {
    const flag = force ? '-D' : '-d';
    const { stderr } = await execGit(repoPath, `branch ${flag} ${branchName}`);

    if (stderr && stderr.includes('error')) {
      return {
        success: false,
        error: stderr,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Stage files
 */
export async function stageFiles(
  repoPath: string,
  files: string[]
): Promise<GitResult<void>> {
  try {
    const fileList = files.map(f => `"${f}"`).join(' ');
    const { stderr } = await execGit(repoPath, `add ${fileList}`);

    if (stderr && stderr.includes('fatal')) {
      return {
        success: false,
        error: stderr,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Unstage files
 */
export async function unstageFiles(
  repoPath: string,
  files: string[]
): Promise<GitResult<void>> {
  try {
    const fileList = files.map(f => `"${f}"`).join(' ');
    const { stderr } = await execGit(repoPath, `reset HEAD ${fileList}`);

    if (stderr && stderr.includes('fatal')) {
      return {
        success: false,
        error: stderr,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Create a commit
 */
export async function commit(
  repoPath: string,
  message: string
): Promise<GitResult<string>> {
  try {
    const { stdout, stderr } = await execGit(repoPath, `commit -m "${message}"`);

    if (stderr && stderr.includes('fatal')) {
      return {
        success: false,
        error: stderr,
      };
    }

    // Extract commit hash from output
    const hashMatch = stdout.match(/\[.+\s([a-f0-9]{7,40})\]/);
    const hash = hashMatch ? hashMatch[1] : '';

    return {
      success: true,
      data: hash,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Get repository configuration
 */
export async function getConfig(repoPath: string): Promise<GitResult<GitConfig>> {
  try {
    const { stdout: userName } = await execGit(repoPath, 'config user.name');
    const { stdout: userEmail } = await execGit(repoPath, 'config user.email');
    const { stdout: defaultBranch } = await execGit(
      repoPath,
      'config init.defaultBranch'
    );

    return {
      success: true,
      data: {
        userName: userName || undefined,
        userEmail: userEmail || undefined,
        defaultBranch: defaultBranch || undefined,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Get repository name from path
 */
export function getRepoName(repoPath: string): string {
  return path.basename(repoPath);
}
