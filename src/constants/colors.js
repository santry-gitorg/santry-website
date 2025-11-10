/**
 * Santry Brand Colors
 * These colors match the CSS variables defined in index.css
 * Use these when you need to reference colors in JavaScript/React
 */

export const colors = {
  // Primary Colors
  primary: '#C3D350',      // Pear
  primaryDark: '#a8b83d',  // Darker pear
  primaryLight: '#d4e066', // Lighter pear
  
  // Secondary Colors
  secondary: '#496F5D',      // Hooker's green
  secondaryDark: '#3a5a4a',  // Darker green
  secondaryLight: '#5c8670', // Lighter green
  
  // Accent Colors
  accent: '#C3D350',       // Pear
  accentDark: '#a8b83d',
  accentLight: '#d4e066',
  
  // Brand Colors
  richBlack: '#001524',    // Rich black
  smokyBlack: '#0C0601',   // Smoky black
  white: '#FFFFFF',        // White
  
  // Semantic Colors
  success: '#496F5D',      // Hooker's green
  warning: '#C3D350',      // Pear
  error: '#ff6b6b',
  info: '#5c8670',
}

/**
 * Usage example:
 * 
 * import { colors } from './constants/colors'
 * 
 * <div style={{ backgroundColor: colors.primary }}>
 *   Content
 * </div>
 */

export default colors

