# Assets Directory

This directory contains all static assets used in the Santry website.

## Structure

```
assets/
├── logos/       # Company logos (SVG, PNG)
├── images/      # General images (photos, backgrounds, etc.)
└── icons/       # Icon files
```

## Usage

To use assets in your React components:

```jsx
import logo from './assets/logos/santry-logo.svg'
import heroImage from './assets/images/hero-background.jpg'

function MyComponent() {
  return (
    <div>
      <img src={logo} alt="Santry Logo" />
      <img src={heroImage} alt="Hero Background" />
    </div>
  )
}
```

## Recommended File Formats

- **Logos**: SVG (preferred for scalability) or PNG with transparent background
- **Images**: JPG for photos, PNG for graphics with transparency, WebP for optimized web delivery
- **Icons**: SVG (preferred) or PNG

## File Naming Convention

Use lowercase with hyphens:
- ✅ `santry-logo.svg`
- ✅ `hero-background.jpg`
- ✅ `team-photo-01.png`
- ❌ `SantryLogo.svg`
- ❌ `hero_background.jpg`



