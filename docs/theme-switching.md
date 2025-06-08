# Theme Switching Functionality

This document explains the theme switching implementation in Mohit Chaudhari's portfolio site.

## Components

### 1. ThemeSwitcher Component

Located at `/components/ThemeSwitcher.tsx`, this is the core component that handles the theme switching logic.

**Features:**
- Toggles between light and dark mode
- Remembers user's preference using localStorage
- Respects user's system preference by default
- Shows a tooltip on hover (can be disabled with `hideTooltip` prop)
- Smooth transition animations for icon changes
- Yellow sun icon for dark mode, blue moon icon for light mode

**Props:**
- `hideTooltip` (optional): Boolean to hide the tooltip (default: false)

### 2. FloatingThemeButton Component

Located at `/components/FloatingThemeButton.tsx`, this component provides an additional access point for theme switching.

**Features:**
- Appears when the user scrolls down the page
- Positioned in the bottom right corner
- Uses the ThemeSwitcher component with the tooltip disabled
- Responsive positioning for different screen sizes
- Smooth entrance/exit animations

### 3. Theme Mode Indicator

Located in the HeroSection component, this provides a visual indicator of the current theme.

**Features:**
- Shows "🌙 Dark Mode" or "☀️ Light Mode" based on current theme
- Updates in real-time when theme changes
- Uses MutationObserver to detect theme changes on the HTML element

## Implementation Details

### Theme Storage

The theme preference is stored in localStorage with the key 'theme':
- 'light' for light mode
- 'dark' for dark mode
- If no preference is stored, the system preference is used

### CSS Implementation

- The theme is applied using Tailwind's dark mode by adding/removing the 'dark' class on the HTML element
- Smooth transitions are added by applying a 'theme-transition' class during theme changes

### Accessibility

- Theme toggle buttons have appropriate aria-labels
- Color contrast ratios meet WCAG standards
- Tooltips provide additional context

## Testing

Two test scripts are available in the `/tests` directory:

1. `theme-persistence.test.js`: Tests if the theme preference persists after page reload
2. `mobile-responsiveness.test.js`: Tests the theme switcher appearance on various device sizes

To run these tests, open the browser console and call:
- `testThemePersistence()`
- `testMobileResponsiveness()`

## Browser Compatibility

The theme switching functionality is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)
