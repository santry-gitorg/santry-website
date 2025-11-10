# Santry Brand Colors Guide

This guide explains how to use and customize the Santry brand colors throughout your website.

## 📋 Table of Contents

- [Overview](#overview)
- [Color Palette](#color-palette)
- [Using Colors in CSS](#using-colors-in-css)
- [Using Colors in React/JavaScript](#using-colors-in-reactjavascript)
- [Customizing Brand Colors](#customizing-brand-colors)
- [Best Practices](#best-practices)

---

## Overview

The Santry website uses a centralized color system with two implementations:

1. **CSS Custom Properties** (in `src/index.css`) - For use in CSS files
2. **JavaScript Constants** (in `src/constants/colors.js`) - For use in React components

This ensures consistent branding across your entire website and makes it easy to update colors globally.

---

## Color Palette

### Primary Colors
Your main brand colors used throughout the site:
- **Primary**: `#646cff` (Main brand color)
- **Primary Dark**: `#535bf2` (Hover states, accents)
- **Primary Light**: `#747bff` (Light mode variations)

### Secondary Colors
Complementary colors for variety:
- **Secondary**: `#42b883`
- **Secondary Dark**: `#33a06f`
- **Secondary Light**: `#5cd0a3`

### Accent Colors
For calls-to-action and important highlights:
- **Accent**: `#ff6b6b`
- **Accent Dark**: `#ee5555`
- **Accent Light**: `#ff8888`

### Semantic Colors
For status messages and feedback:
- **Success**: `#10b981` (green)
- **Warning**: `#f59e0b` (amber)
- **Error**: `#ef4444` (red)
- **Info**: `#3b82f6` (blue)

### Neutral Colors
Text and backgrounds (automatically adjust for dark/light mode):
- **Text Primary**: High contrast text
- **Text Secondary**: Medium contrast text
- **Text Muted**: Low contrast text
- **Background Primary**: Main background
- **Background Secondary**: Cards, sections
- **Background Tertiary**: Elevated elements

---

## Using Colors in CSS

### Method 1: CSS Custom Properties (Recommended)

Use `var(--color-name)` to reference colors:

```css
.my-button {
  background-color: var(--color-primary);
  color: white;
  border: 1px solid var(--color-border);
}

.my-button:hover {
  background-color: var(--color-primary-dark);
}
```

### Available CSS Variables

```css
/* Primary Colors */
var(--color-primary)
var(--color-primary-dark)
var(--color-primary-light)

/* Secondary Colors */
var(--color-secondary)
var(--color-secondary-dark)
var(--color-secondary-light)

/* Accent Colors */
var(--color-accent)
var(--color-accent-dark)
var(--color-accent-light)

/* Text Colors */
var(--color-text-primary)
var(--color-text-secondary)
var(--color-text-muted)

/* Background Colors */
var(--color-bg-primary)
var(--color-bg-secondary)
var(--color-bg-tertiary)

/* Borders */
var(--color-border)
var(--color-border-light)

/* Semantic Colors */
var(--color-success)
var(--color-warning)
var(--color-error)
var(--color-info)

/* Shadows */
var(--shadow-sm)
var(--shadow-md)
var(--shadow-lg)
var(--shadow-xl)
```

---

## Using Colors in React/JavaScript

### Import the Colors

```jsx
import { colors } from '../constants/colors'
// or
import colors from '../constants/colors'
```

### Use in Inline Styles

```jsx
function MyComponent() {
  return (
    <div style={{ 
      backgroundColor: colors.primary,
      color: 'white',
      padding: '1rem'
    }}>
      Content
    </div>
  )
}
```

### Use in Styled Components or CSS-in-JS

```jsx
const buttonStyle = {
  backgroundColor: colors.primary,
  border: `2px solid ${colors.primaryDark}`,
  ':hover': {
    backgroundColor: colors.primaryDark
  }
}
```

---

## Customizing Brand Colors

### Step 1: Update CSS Variables

Open `src/index.css` and modify the color values in the `:root` section:

```css
:root {
  /* Change these values to your brand colors */
  --color-primary: #YOUR_PRIMARY_COLOR;
  --color-primary-dark: #YOUR_PRIMARY_DARK;
  --color-primary-light: #YOUR_PRIMARY_LIGHT;
  
  --color-secondary: #YOUR_SECONDARY_COLOR;
  --color-accent: #YOUR_ACCENT_COLOR;
  /* ... etc */
}
```

### Step 2: Update JavaScript Constants

Open `src/constants/colors.js` and update the values to match:

```javascript
export const colors = {
  primary: '#YOUR_PRIMARY_COLOR',
  primaryDark: '#YOUR_PRIMARY_DARK',
  primaryLight: '#YOUR_PRIMARY_LIGHT',
  // ... etc
}
```

### Step 3: Test Both Modes

Make sure to check your colors in both light and dark modes by changing your system preferences or adding the light mode media query in `index.css`.

---

## Best Practices

### ✅ Do's

- **Use CSS variables for all colors** - Don't hardcode hex values
- **Maintain consistency** - Use the same colors across similar elements
- **Consider accessibility** - Ensure sufficient contrast ratios (WCAG AA: 4.5:1 for text)
- **Test both modes** - Colors should work in light and dark mode
- **Use semantic colors** - Use `--color-success` for success messages, `--color-error` for errors, etc.

### ❌ Don'ts

- Don't hardcode color values like `#646cff` directly in your components
- Don't create inconsistent color variations - use the defined palette
- Don't forget to update both CSS and JavaScript constants when changing colors
- Don't use too many different colors - stick to the palette

### Accessibility Tips

```css
/* Good - High contrast */
.text {
  color: var(--color-text-primary);
  background: var(--color-bg-primary);
}

/* Bad - Low contrast */
.text {
  color: var(--color-text-muted);
  background: var(--color-bg-secondary);
}
```

### Example: Adding a New Color

If you need to add a new brand color:

1. Add to `src/index.css`:
```css
:root {
  --color-tertiary: #YOUR_COLOR;
}
```

2. Add to `src/constants/colors.js`:
```javascript
export const colors = {
  tertiary: '#YOUR_COLOR',
}
```

3. Use it:
```css
.my-element {
  background: var(--color-tertiary);
}
```

---

## Quick Reference

| Use Case | CSS | JavaScript |
|----------|-----|------------|
| Main brand color | `var(--color-primary)` | `colors.primary` |
| Hover states | `var(--color-primary-dark)` | `colors.primaryDark` |
| Body text | `var(--color-text-primary)` | N/A (use CSS) |
| Success message | `var(--color-success)` | `colors.success` |
| Card background | `var(--color-bg-secondary)` | N/A (use CSS) |
| Border | `var(--color-border)` | N/A (use CSS) |
| Shadow | `var(--shadow-md)` | N/A (use CSS) |

---

## Need Help?

If you're unsure which color to use:
- Buttons, links, CTAs → Primary colors
- Status messages → Semantic colors
- Text → Text colors (auto-adjusts for dark/light)
- Backgrounds → Background colors (auto-adjusts)
- Important highlights → Accent colors



