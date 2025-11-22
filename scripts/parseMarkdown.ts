/**
 * Markdown Content Parser
 *
 * This script reads all Markdown curriculum files, parses them,
 * and generates TypeScript modules containing lesson data.
 *
 * Run with: npm run parse-md
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

interface ParsedLesson {
  id: string;
  title: string;
  sourceFile: string;
  directory: string;
  summary: string;
  keyConcepts: string[];
  rawMarkdown: string;
  zone: string;
  order: number;
}

// Map directories to orchard zones
const DIRECTORY_TO_ZONE: Record<string, string> = {
  '01-getting-started': 'inner-clearing',
  '02-basic-concepts': 'inner-clearing',
  '03-creating-repos': 'trunk',
  '04-making-changes': 'trunk',
  '05-branches': 'canopy',
  '06-collaboration': 'edge',
  '07-advanced-features': 'conservatory',
  '08-best-practices': 'perimeter',
};

const ZONE_ORDER: Record<string, number> = {
  'inner-clearing': 1,
  'trunk': 2,
  'canopy': 3,
  'edge': 4,
  'conservatory': 5,
  'perimeter': 6,
};

const ROOT_DIR = path.resolve(__dirname, '..');
const CONTENT_DIRS = [
  '01-getting-started',
  '02-basic-concepts',
  '03-creating-repos',
  '04-making-changes',
  '05-branches',
  '06-collaboration',
  '07-advanced-features',
  '08-best-practices',
];

/**
 * Extract a summary from markdown content (first paragraph)
 */
function extractSummary(markdown: string): string {
  const lines = markdown.split('\n').filter(line => line.trim());

  for (const line of lines) {
    // Skip headings and empty lines
    if (!line.startsWith('#') && line.trim().length > 20) {
      return line.trim().substring(0, 200);
    }
  }

  return 'A lesson about Git and GitHub Desktop';
}

/**
 * Extract key concepts from markdown (headings and bold text)
 */
function extractKeyConcepts(markdown: string): string[] {
  const concepts: string[] = [];
  const lines = markdown.split('\n');

  // Extract from headings
  for (const line of lines) {
    const headingMatch = line.match(/^#{2,3}\s+(.+)/);
    if (headingMatch) {
      concepts.push(headingMatch[1].trim());
    }

    // Extract bold text (potential key terms)
    const boldMatches = line.matchAll(/\*\*(.+?)\*\*/g);
    for (const match of boldMatches) {
      const term = match[1].trim();
      if (term.length > 3 && term.length < 50) {
        concepts.push(term);
      }
    }
  }

  // Return unique concepts, limited to top 8
  return [...new Set(concepts)].slice(0, 8);
}

/**
 * Generate a lesson ID from filename
 */
function generateLessonId(directory: string, filename: string): string {
  const name = filename.replace('.md', '');
  const dirPrefix = directory.split('-').slice(1).join('-'); // Remove number prefix
  return `${dirPrefix}-${name}`.toLowerCase();
}

/**
 * Parse a single Markdown file
 */
function parseMarkdownFile(filePath: string, directory: string): ParsedLesson | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content: markdown } = matter(content);

    const filename = path.basename(filePath);
    const id = generateLessonId(directory, filename);
    const title = frontmatter.title || filename.replace('.md', '').replace(/-/g, ' ');
    const zone = DIRECTORY_TO_ZONE[directory] || 'inner-clearing';

    return {
      id,
      title: title.charAt(0).toUpperCase() + title.slice(1),
      sourceFile: path.relative(ROOT_DIR, filePath),
      directory,
      summary: frontmatter.summary || extractSummary(markdown),
      keyConcepts: frontmatter.keyConcepts || extractKeyConcepts(markdown),
      rawMarkdown: markdown,
      zone,
      order: ZONE_ORDER[zone] || 1,
    };
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error);
    return null;
  }
}

/**
 * Parse all Markdown files in content directories
 */
function parseAllLessons(): ParsedLesson[] {
  const lessons: ParsedLesson[] = [];

  for (const dir of CONTENT_DIRS) {
    const dirPath = path.join(ROOT_DIR, dir);

    if (!fs.existsSync(dirPath)) {
      console.warn(`Directory not found: ${dirPath}`);
      continue;
    }

    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));

    console.log(`📁 Processing ${dir}: ${files.length} files`);

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const lesson = parseMarkdownFile(filePath, dir);

      if (lesson) {
        lessons.push(lesson);
        console.log(`  ✓ ${lesson.title}`);
      }
    }
  }

  return lessons;
}

/**
 * Generate TypeScript module from parsed lessons
 */
function generateTypescriptModule(lessons: ParsedLesson[]): string {
  const imports = `/**
 * Generated Lesson Data
 *
 * AUTO-GENERATED - DO NOT EDIT MANUALLY
 * Generated from Markdown curriculum files
 * Run 'npm run parse-md' to regenerate
 */

import { LessonData } from './types';
import { OrchardZone } from '@orchard/types';
`;

  const lessonsData = lessons.map(lesson => {
    return `  {
    id: '${lesson.id}',
    title: '${lesson.title}',
    sourceFile: '${lesson.sourceFile}',
    directory: '${lesson.directory}',
    summary: ${JSON.stringify(lesson.summary)},
    keyConcepts: ${JSON.stringify(lesson.keyConcepts)},
    rawMarkdown: ${JSON.stringify(lesson.rawMarkdown)},
    zone: OrchardZone.${lesson.zone.split('-').map((s: string) => s.charAt(0).toUpperCase() + s.slice(1)).join('')},
    order: ${lesson.order},
  }`;
  }).join(',\n');

  return `${imports}
export const LESSONS: LessonData[] = [
${lessonsData}
];

export const getLessonById = (id: string): LessonData | undefined => {
  return LESSONS.find(lesson => lesson.id === id);
};

export const getLessonsByZone = (zone: OrchardZone): LessonData[] => {
  return LESSONS.filter(lesson => lesson.zone === zone);
};

export const getAllZones = (): OrchardZone[] => {
  const zones = new Set(LESSONS.map(l => l.zone));
  return Array.from(zones).sort((a, b) => {
    const orderA = LESSONS.find(l => l.zone === a)?.order || 0;
    const orderB = LESSONS.find(l => l.zone === b)?.order || 0;
    return orderA - orderB;
  });
};
`;
}

/**
 * Main execution
 */
function main() {
  console.log('🌳 Orchard of Branches - Markdown Parser\n');
  console.log('Parsing curriculum files...\n');

  const lessons = parseAllLessons();

  console.log(`\n✓ Parsed ${lessons.length} lessons total`);
  console.log('\nGenerating TypeScript module...');

  const tsContent = generateTypescriptModule(lessons);
  const outputPath = path.join(ROOT_DIR, 'src', 'content', 'generatedLessons.ts');

  fs.writeFileSync(outputPath, tsContent, 'utf-8');

  console.log(`✓ Generated: ${path.relative(ROOT_DIR, outputPath)}`);

  // Generate summary report
  const zoneStats: Record<string, number> = {};
  for (const lesson of lessons) {
    zoneStats[lesson.zone] = (zoneStats[lesson.zone] || 0) + 1;
  }

  console.log('\n📊 Lessons by Zone:');
  for (const [zone, count] of Object.entries(zoneStats)) {
    console.log(`  ${zone}: ${count} lessons`);
  }

  console.log('\n🎉 Content parsing complete!\n');
}

// Run the script
main();
