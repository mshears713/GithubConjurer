# Packaging Guide - Orchard of Branches

**Version:** 1.0.0
**Target Platform:** Windows (primary), with future support for macOS and Linux

## Overview

This guide covers how to package Orchard of Branches for distribution as a standalone desktop application.

---

## Prerequisites

### Required Software
- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

### Required Assets
Before packaging, ensure the following assets exist:

#### Application Icons
The application requires icon files in various formats for different platforms:

**Windows:**
- `assets/icon.ico` - Windows icon file (256x256 recommended)
- Contains multiple sizes: 16x16, 24x24, 32x32, 48x48, 64x64, 128x128, 256x256

**macOS (future):**
- `assets/icon.icns` - macOS icon file
- Contains multiple resolutions for Retina displays

**Linux (future):**
- `assets/icon.png` - PNG icon file (512x512 recommended)

#### Creating Icons

**For Windows (.ico):**
1. Create a 256x256 PNG image with your application icon
2. Use a tool like [ICO Convert](https://icoconvert.com/) or [ImageMagick](https://imagemagick.org/)
3. Include multiple sizes in the same .ico file
4. Save as `assets/icon.ico`

**Icon Design Guidelines:**
- Use the orchard theme (tree, branches, leaves)
- Simple, recognizable design that works at small sizes
- Avoid text (hard to read at small sizes)
- Use colors from the app palette (greens, browns)
- Suggested icon: Stylized tree with visible branches

**Placeholder Creation:**
If you need a quick placeholder for testing:
```bash
# Create a simple 256x256 placeholder
# (Replace with actual icon design before production release)
```

---

## Package Configuration

The application is configured for packaging in `package.json` under the `build` section:

```json
"build": {
  "appId": "com.orchardkeeper.orchard-of-branches",
  "productName": "Orchard of Branches",
  "directories": {
    "output": "release"
  },
  "files": [
    "dist/**/*",
    "dist-electron/**/*"
  ],
  "win": {
    "target": ["nsis"],
    "icon": "assets/icon.ico"
  },
  "nsis": {
    "oneClick": false,
    "allowToChangeInstallationDirectory": true
  }
}
```

### Configuration Options

**appId:**
- Unique identifier for the application
- Format: reverse domain notation
- Current: `com.orchardkeeper.orchard-of-branches`

**productName:**
- Display name of the application
- Shown in installer and system
- Current: `Orchard of Branches`

**directories.output:**
- Where packaged files are output
- Current: `release/` directory

**files:**
- Which files to include in the package
- Includes all built frontend (`dist/`) and Electron (`dist-electron/`) code

**win.target:**
- Installer format for Windows
- Current: NSIS (Nullsoft Scriptable Install System)
- Creates `.exe` installer

**nsis options:**
- `oneClick: false` - Allows user to see installation options
- `allowToChangeInstallationDirectory: true` - User can choose install location

---

## Packaging Steps

### 1. Prepare for Packaging

**Update Version Number:**
```bash
# Edit package.json "version" field
# Follow semantic versioning: MAJOR.MINOR.PATCH
# Example: "0.1.0" → "1.0.0" for first release
```

**Verify Build:**
```bash
npm run build
```

This should complete without errors.

### 2. Add Application Icons

**Place icon files:**
```
assets/
  └── icon.ico    # Windows icon
```

**Verify icon exists:**
```bash
ls -l assets/icon.ico
```

### 3. Run Package Command

```bash
npm run package
```

This will:
1. Run `npm run build` (TypeScript → Vite → Electron)
2. Run `electron-builder` to create installer
3. Output to `release/` directory

### 4. Locate Packaged Application

After successful packaging, find your installer in:
```
release/
  └── Orchard of Branches Setup 1.0.0.exe
```

The exact filename will include the version number from `package.json`.

---

## Testing the Package

### Before Distribution
Test the packaged application thoroughly:

1. **Install on Clean Machine:**
   - Test on a Windows machine without development tools
   - Verify all features work as expected
   - Check that Git operations function correctly

2. **Installation Process:**
   - Run the installer
   - Verify installation directory selection works
   - Check Start Menu shortcuts are created
   - Ensure desktop shortcut is created (if configured)

3. **First Launch:**
   - Application launches without errors
   - UI renders correctly
   - No console errors
   - All tabs/views are accessible

4. **Core Functionality:**
   - Orchard map renders
   - Quests are accessible
   - Scenarios can be completed
   - Settings persist
   - Progress saves and loads

5. **Git Integration:**
   - Can browse local repositories
   - Repository visualization works
   - Basic Git operations function
   - Error handling for missing Git

6. **Uninstallation:**
   - Application can be uninstalled cleanly
   - User data handling (consider keeping saved progress)

---

## Distribution Checklist

Before distributing to users:

- [ ] Version number updated in `package.json`
- [ ] Application icon created and placed in `assets/icon.ico`
- [ ] Build succeeds without errors (`npm run build`)
- [ ] Package succeeds without errors (`npm run package`)
- [ ] Installer tested on clean Windows machine
- [ ] All core features verified working
- [ ] Git integration tested
- [ ] Settings and progress persistence verified
- [ ] Documentation updated (README, CHANGELOG)
- [ ] Known issues documented
- [ ] License information included

---

## Customizing the Installer

### Installer Appearance

**Change Installation Images:**
Edit `package.json` build section:
```json
"nsis": {
  "oneClick": false,
  "allowToChangeInstallationDirectory": true,
  "installerHeader": "assets/installer-header.bmp",
  "installerSidebar": "assets/installer-sidebar.bmp"
}
```

**Image Requirements:**
- `installer-header.bmp`: 150x57 pixels
- `installer-sidebar.bmp`: 164x314 pixels

### License Agreement

**Add License to Installer:**
1. Create `LICENSE.txt` in root directory
2. Update `package.json`:
```json
"nsis": {
  "license": "LICENSE.txt"
}
```

### Installation Options

**Desktop Shortcut:**
```json
"nsis": {
  "createDesktopShortcut": true
}
```

**Start Menu Folder:**
```json
"nsis": {
  "createStartMenuShortcut": true,
  "menuCategory": "Education"
}
```

---

## Advanced Packaging

### Code Signing (Recommended for Production)

**Why Sign:**
- Prevents "Unknown Publisher" warnings
- Users trust signed applications more
- Required for some distribution channels

**How to Sign:**
1. Obtain a code signing certificate
2. Configure in `package.json`:
```json
"win": {
  "target": ["nsis"],
  "icon": "assets/icon.ico",
  "certificateFile": "path/to/certificate.p12",
  "certificatePassword": "your-password"
}
```

⚠️ **Security:** Never commit certificates or passwords to version control!

### Auto-Updates (Future Enhancement)

**Implement Auto-Update:**
1. Set up update server
2. Configure `electron-updater`
3. Add update checking in main process
4. Publish releases to update server

```json
"publish": {
  "provider": "github",
  "owner": "your-username",
  "repo": "orchard-of-branches"
}
```

---

## Platform-Specific Packaging

### Windows

**Current Configuration:**
- Target: NSIS installer
- Output: `.exe` installer
- Icon: `.ico` format

**Testing:**
- Test on Windows 10 and Windows 11
- Verify on both x64 architectures

### macOS (Future)

**Configuration:**
```json
"mac": {
  "target": ["dmg"],
  "icon": "assets/icon.icns",
  "category": "public.app-category.education"
}
```

**Requirements:**
- Can only be built on macOS
- Requires Apple Developer account for signing

### Linux (Future)

**Configuration:**
```json
"linux": {
  "target": ["AppImage", "deb"],
  "icon": "assets/icon.png",
  "category": "Education"
}
```

**Formats:**
- AppImage: Universal Linux package
- deb: Debian/Ubuntu package

---

## Troubleshooting

### Common Packaging Issues

#### 1. "Cannot find module" errors
**Problem:** Missing dependencies in packaged app
**Solution:**
- Ensure all dependencies are in `dependencies` (not `devDependencies`)
- Check `files` array in build config includes all necessary files

#### 2. Icon not appearing
**Problem:** Application uses default Electron icon
**Solution:**
- Verify `assets/icon.ico` exists
- Check file path in `package.json` is correct
- Ensure icon file is valid (multiple sizes)

#### 3. Application won't launch after install
**Problem:** Packaged app crashes on startup
**Solution:**
- Check for hardcoded development paths
- Verify all assets are included in package
- Test build locally: `npm run build && electron .`

#### 4. Large Package Size
**Problem:** Installer is very large
**Solution:**
- Review `files` array - only include necessary files
- Remove unused dependencies
- Consider compressing assets

#### 5. Git Commands Not Working
**Problem:** Git operations fail in packaged app
**Solution:**
- Ensure Git is installed on target system
- Provide clear error messages if Git is missing
- Consider bundling portable Git (increases size)

---

## Build Optimization

### Reducing Package Size

**Remove Unnecessary Files:**
```json
"files": [
  "dist/**/*",
  "dist-electron/**/*",
  "!dist/**/*.map"  // Exclude source maps
]
```

**Compress Assets:**
- Optimize images before packaging
- Minify/compress any large data files
- Consider lazy-loading large assets

**Analyze Bundle:**
```bash
# Add to package.json scripts:
"analyze": "vite build --mode analyze"
```

---

## Distribution Methods

### 1. Direct Download
- Host installer on website
- Provide download link
- Include installation instructions

### 2. GitHub Releases
- Upload installer to GitHub Releases
- Tag version in Git
- Include release notes

### 3. Microsoft Store (Future)
- Requires Microsoft Store account
- Different packaging process (MSIX)
- Wider distribution reach

### 4. Other Distribution Platforms
- [itch.io](https://itch.io) - Indie game/app platform
- [Gumroad](https://gumroad.com) - Digital products platform
- [chocolatey](https://chocolatey.org) - Windows package manager

---

## Version Management

### Semantic Versioning

Follow [SemVer](https://semver.org/):
- **MAJOR** (1.x.x): Breaking changes
- **MINOR** (x.1.x): New features, backward compatible
- **PATCH** (x.x.1): Bug fixes, backward compatible

**Examples:**
- `0.1.0` → First beta release
- `1.0.0` → First stable release
- `1.1.0` → Add new feature (e.g., onboarding flow)
- `1.1.1` → Fix bug in onboarding

### Changelog

Maintain a `CHANGELOG.md` file:
```markdown
# Changelog

## [1.0.0] - 2025-11-22
### Added
- Initial release
- Quest system with 20+ quests
- Practice scenario system
- Achievement system with 10 achievements
- Settings panel with export/import
- NPC dialogue system

### Fixed
- Various bug fixes

## [Unreleased]
### Planned
- Onboarding flow
- Field guide reference
```

---

## Post-Release

### User Feedback
- Set up issue tracking (GitHub Issues)
- Provide support contact
- Monitor for bug reports

### Updates
- Plan regular update schedule
- Test updates thoroughly
- Consider implementing auto-update for seamless updates

### Metrics (Optional)
- Consider anonymous usage analytics
- Track crash reports (with user consent)
- Monitor performance metrics

---

## Resources

### Electron Builder Documentation
- [Electron Builder](https://www.electron.build/)
- [NSIS Options](https://www.electron.build/configuration/nsis)
- [Code Signing](https://www.electron.build/code-signing)

### Icon Creation Tools
- [ImageMagick](https://imagemagick.org/)
- [GIMP](https://www.gimp.org/)
- [Inkscape](https://inkscape.org/) (vector graphics)
- [ICO Convert](https://icoconvert.com/) (online converter)

### Distribution Platforms
- [GitHub Releases](https://docs.github.com/en/repositories/releasing-projects-on-github)
- [Microsoft Store](https://developer.microsoft.com/en-us/microsoft-store/)
- [itch.io](https://itch.io/docs/creators/getting-started)

---

## Quick Reference

### Essential Commands
```bash
# Build the application
npm run build

# Package for distribution
npm run package

# Clean build (if needed)
rm -rf dist dist-electron release
npm run package
```

### File Locations
- **Source:** `src/`
- **Build output:** `dist/` and `dist-electron/`
- **Packaged app:** `release/`
- **Icons:** `assets/`
- **Configuration:** `package.json` (build section)

---

**Document Version:** 1.0.0
**Last Updated:** 2025-11-22
**Platform:** Windows (Primary)
