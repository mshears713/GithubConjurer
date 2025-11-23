import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import * as gitService from './gitService';

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 1000,
    minHeight: 700,
    title: 'Orchard of Branches',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
    autoHideMenuBar: true,
  });

  // Load the app
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

/**
 * IPC Handlers for Git Operations
 * All handlers call the gitService functions in the main process
 */
function setupGitIpcHandlers() {
  // Check if directory is a Git repository
  ipcMain.handle('git:isRepo', async (_event, repoPath: string) => {
    return await gitService.isGitRepo(repoPath);
  });

  // Get repository status
  ipcMain.handle('git:getStatus', async (_event, repoPath: string) => {
    return await gitService.getStatus(repoPath);
  });

  // Get commit log
  ipcMain.handle('git:getLog', async (_event, repoPath: string, limit?: number) => {
    return await gitService.getLog(repoPath, limit);
  });

  // Get branches
  ipcMain.handle('git:getBranches', async (_event, repoPath: string) => {
    return await gitService.getBranches(repoPath);
  });

  // Create a new branch
  ipcMain.handle('git:createBranch', async (_event, repoPath: string, branchName: string) => {
    return await gitService.createBranch(repoPath, branchName);
  });

  // Checkout a branch
  ipcMain.handle('git:checkoutBranch', async (_event, repoPath: string, branchName: string) => {
    return await gitService.checkoutBranch(repoPath, branchName);
  });

  // Delete a branch
  ipcMain.handle('git:deleteBranch', async (_event, repoPath: string, branchName: string, force?: boolean) => {
    return await gitService.deleteBranch(repoPath, branchName, force);
  });

  // Stage files
  ipcMain.handle('git:stageFiles', async (_event, repoPath: string, files: string[]) => {
    return await gitService.stageFiles(repoPath, files);
  });

  // Unstage files
  ipcMain.handle('git:unstageFiles', async (_event, repoPath: string, files: string[]) => {
    return await gitService.unstageFiles(repoPath, files);
  });

  // Create a commit
  ipcMain.handle('git:commit', async (_event, repoPath: string, message: string) => {
    return await gitService.commit(repoPath, message);
  });

  // Get repository configuration
  ipcMain.handle('git:getConfig', async (_event, repoPath: string) => {
    return await gitService.getConfig(repoPath);
  });

  // Get repository name
  ipcMain.handle('git:getRepoName', async (_event, repoPath: string) => {
    return gitService.getRepoName(repoPath);
  });
}

app.whenReady().then(() => {
  setupGitIpcHandlers();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
