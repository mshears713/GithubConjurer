# Content Ingestion Process

## Overview

The Orchard of Branches application uses a **build-time content transformation** approach. Markdown curriculum files are parsed during development and transformed into TypeScript modules that are bundled with the application. This ensures fast runtime performance and offline-first operation.

## Architecture

```
Markdown Files → Parser Script → Generated TypeScript → Bundled App
```

### Why Build-Time Instead of Runtime?

1. **Performance**: No file I/O or parsing at runtime
2. **Offline-First**: All content is bundled with the app
3. **Type Safety**: Generated TypeScript provides compile-time type checking
4. **Simplicity**: No dynamic file loading logic needed

## Directory Structure

### Source Content (Curriculum)

All curriculum content lives in numbered directories at the project root:

```
/01-getting-started/
  ├── what-is-github-desktop.md
  ├── installation.md
  └── initial-setup.md
/02-basic-concepts/
  ├── commits.md
  ├── git-vs-github.md
  ├── interface-tour.md
  └── repositories.md
... (and so on)
```

### Generated Content

The parser script generates:

```
/src/content/
  ├── types.ts                    # Type definitions (manual)
  └── generatedLessons.ts         # Auto-generated lesson data
```

## Parsing Script

**Location**: `scripts/parseMarkdown.ts`

**Run with**: `npm run parse-md`

### What It Does

1. **Reads** all `.md` files from curriculum directories
2. **Parses** frontmatter and content using `gray-matter`
3. **Extracts**:
   - Title (from frontmatter or filename)
   - Summary (from frontmatter or first paragraph)
   - Key concepts (from headings and bold text)
   - Raw markdown content
4. **Assigns** orchard zones based on directory
5. **Generates** TypeScript module with all lesson data

### Directory to Zone Mapping

| Directory | Orchard Zone | Description |
|-----------|--------------|-------------|
| `01-getting-started` | Inner Clearing | Introduction and setup |
| `02-basic-concepts` | Inner Clearing | Fundamental Git concepts |
| `03-creating-repos` | Trunk | Working with repositories |
| `04-making-changes` | Trunk | Commits, staging, pushing |
| `05-branches` | Canopy | Branching and merging |
| `06-collaboration` | Edge | Remote repos and collaboration |
| `07-advanced-features` | Conservatory | Advanced Git features |
| `08-best-practices` | Perimeter | Workflows and best practices |

## Lesson Data Model

Each parsed lesson becomes a `LessonData` object:

```typescript
interface LessonData {
  id: string;              // Auto-generated from directory + filename
  title: string;           // From frontmatter or filename
  sourceFile: string;      // Relative path to source .md file
  directory: string;       // Source directory
  summary: string;         // Brief description
  keyConcepts: string[];   // Array of key learning points
  rawMarkdown: string;     // Full markdown content
  zone: OrchardZone;       // Which orchard area this belongs to
  order: number;           // Zone ordering (1-6)
}
```

## Generated Module

The parser creates `src/content/generatedLessons.ts` with:

### Exports

- **`LESSONS`**: Array of all lesson data
- **`getLessonById(id)`**: Lookup function
- **`getLessonsByZone(zone)`**: Filter function
- **`getAllZones()`**: Get all unique zones in order

### Example Usage

```typescript
import { LESSONS, getLessonById } from '@content/generatedLessons';

// Get all lessons
const allLessons = LESSONS; // 30 lessons

// Find specific lesson
const lesson = getLessonById('getting-started-installation');

// Filter by zone
const beginnerLessons = getLessonsByZone(OrchardZone.InnerClearing);
```

## When to Re-parse

Run `npm run parse-md` whenever you:

1. Add new Markdown files to curriculum directories
2. Modify existing Markdown content
3. Change lesson titles or summaries
4. Update the zone mapping logic

**Important**: The generated file is committed to the repository. This allows the app to build even if content hasn't changed.

## Error Handling

The parser script includes:

- **File validation**: Warns if directories don't exist
- **Parse error handling**: Logs which file failed and why
- **Summary reporting**: Shows lesson count by zone
- **Clear logging**: Console output for each processed file

### Common Issues

**Issue**: Parser can't find Markdown files
**Solution**: Ensure you're running from project root and directories exist

**Issue**: Generated file has syntax errors
**Solution**: Check for special characters in Markdown that need escaping (quotes, backticks)

**Issue**: Lesson summary is too long
**Solution**: Add explicit `summary` frontmatter to control length

## Markdown Frontmatter (Optional)

You can add YAML frontmatter to Markdown files to override defaults:

```markdown
---
title: "Custom Lesson Title"
summary: "A concise summary for the lesson browser"
keyConcepts:
  - "Concept 1"
  - "Concept 2"
  - "Concept 3"
---

# Lesson Content Begins Here
...
```

If frontmatter is missing, the parser will:
- Use filename as title
- Extract summary from first paragraph
- Extract key concepts from headings/bold text

## Future Enhancements

Planned improvements to the content system:

1. **Quest Generation**: Auto-generate quest definitions from lessons
2. **Difficulty Levels**: Parse and assign difficulty ratings
3. **Prerequisites**: Define lesson dependencies
4. **Media Support**: Include images and diagrams
5. **Interactive Elements**: Mark sections for interactive tasks

## Maintenance

### Adding New Content

1. Create new `.md` file in appropriate directory
2. Run `npm run parse-md`
3. Verify in lesson browser UI
4. Commit both source and generated files

### Modifying Existing Content

1. Edit the source `.md` file
2. Run `npm run parse-md`
3. Review changes in lesson browser
4. Commit updates

### Reorganizing Content

If you need to move lessons between zones:

1. Move `.md` files to new directory
2. Update `DIRECTORY_TO_ZONE` mapping in parser if needed
3. Run `npm run parse-md`
4. Verify lesson zones in browser

---

**Last Updated**: Phase 1 completion
**Script Version**: 1.0.0
**Total Lessons**: 30 (as of initial parse)
