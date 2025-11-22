# Application Assets

This directory contains assets required for packaging the Orchard of Branches application.

## Required Assets

### Application Icons

#### Windows
- **File:** `icon.ico`
- **Format:** ICO file with multiple sizes
- **Recommended sizes:** 16x16, 24x24, 32x32, 48x48, 64x64, 128x128, 256x256
- **Usage:** Windows application icon, taskbar icon, installer icon

#### macOS (Future)
- **File:** `icon.icns`
- **Format:** ICNS file with multiple resolutions
- **Usage:** macOS application bundle icon

#### Linux (Future)
- **File:** `icon.png`
- **Format:** PNG, 512x512 pixels
- **Usage:** Linux application icon

## Icon Design Guidelines

### Visual Theme
- **Primary elements:** Tree, branches, orchard imagery
- **Color palette:** Greens (#7a9b5a), browns (#8b7355), earth tones
- **Style:** Simple, clean, recognizable at small sizes
- **Avoid:** Text, fine details that don't scale well

### Design Specifications
1. **Simplicity:** Icon should be recognizable at 16x16 pixels
2. **Consistency:** Match application's visual design
3. **Uniqueness:** Distinctive from other development tools
4. **Scalability:** Vector-based design preferred, exported at multiple sizes

### Suggested Concepts
- Stylized tree with visible branches
- Tree with circular growth rings
- Orchard scene with multiple trees
- Single branch with leaves
- Seedling/sapling growing from soil

## Creating Icons

### Tools
- **Vector Design:** Inkscape, Adobe Illustrator, Figma
- **Raster Editing:** GIMP, Photoshop
- **Icon Conversion:** ImageMagick, ICO Convert

### Process
1. Create base design at high resolution (1024x1024 or vector)
2. Export to required formats and sizes
3. Test icon visibility at small sizes
4. Verify icon works on light and dark backgrounds

### Example: Creating Windows Icon
```bash
# Using ImageMagick (example with PNG source)
convert icon-256.png icon-128.png icon-64.png icon-48.png icon-32.png icon-24.png icon-16.png icon.ico
```

## Installation Images (Optional)

For customized installer appearance:

### Windows NSIS Installer
- **Header:** `installer-header.bmp` (150x57 pixels)
- **Sidebar:** `installer-sidebar.bmp` (164x314 pixels)
- **Format:** BMP

### Design Notes
- Header appears at top of installer window
- Sidebar appears on left side during installation
- Use brand colors and simple graphics
- Ensure text readability if included

## Placeholder Files

Before production release, replace placeholder files with production-quality assets:
- [ ] `icon.ico` - Production Windows icon
- [ ] `icon.icns` - Production macOS icon (when macOS support added)
- [ ] `icon.png` - Production Linux icon (when Linux support added)

## Asset Checklist

Before packaging for distribution:
- [ ] Windows icon created and tested (`icon.ico`)
- [ ] Icon displays correctly in Windows Explorer
- [ ] Icon displays correctly in Windows taskbar
- [ ] Icon displays correctly in installed application
- [ ] Icon works on both light and dark Windows themes
- [ ] Optional: Installer graphics created
- [ ] All assets optimized for size
- [ ] Asset licensing documented (if using third-party elements)

## References

See `docs/PACKAGING_GUIDE.md` for detailed packaging instructions.
