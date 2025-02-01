# Theme System

The RandAO Component Library includes a powerful theme system that provides seamless light and dark mode support with system preference detection.

## Features

- 🌓 Automatic system theme detection
- 💾 Theme persistence in localStorage
- 🔄 Smooth theme transitions
- 🎨 CSS variables for easy customization
- 📱 System preference updates

## Usage

### ThemeProvider

Wrap your application with the ThemeProvider:

```tsx
import { ThemeProvider } from '@randaotoken/component-library';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

### useTheme Hook

Access and control the current theme:

```tsx
import { useTheme } from '@randaotoken/component-library';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </Button>
  );
}
```

### useThemeToggle Hook

A convenient hook for toggling between themes:

```tsx
import { useThemeToggle } from '@randaotoken/component-library';

function ThemeToggleButton() {
  const toggleTheme = useThemeToggle();
  return (
    <Button onClick={toggleTheme}>
      Toggle Theme
    </Button>
  );
}
```

## CSS Variables

The theme system provides a set of CSS variables that you can use in your styles:

```css
/* Light theme (default) */
:root {
    --color-primary: #000000;
    --color-background: #ffffff;
    --color-text: #000000;
    --color-border: #e2e2e2;
    /* ... more variables */
}

/* Dark theme */
[data-theme='dark'] {
    --color-primary: #ffffff;
    --color-background: #000000;
    --color-text: #ffffff;
    --color-border: #333333;
    /* ... more variables */
}
```

## System Preference Detection

The theme system automatically detects the user's system preference using the `prefers-color-scheme` media query:

```typescript
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';
```

## Theme Persistence

Themes are automatically persisted in localStorage:

```typescript
// Get persisted theme
const theme = localStorage.getItem('component-library-theme');

// Set theme
localStorage.setItem('component-library-theme', 'dark');
```

## Custom Theme Integration

You can integrate the theme system with your own components:

```tsx
function CustomComponent() {
  const { theme } = useTheme();
  
  return (
    <div className={`custom-component custom-component--${theme}`}>
      Content
    </div>
  );
}
```

## Theme Transitions

All themed elements automatically get smooth transitions:

```css
* {
    transition: var(--theme-transition);
}
```

## Best Practices

1. Always use CSS variables for theming
2. Test components in both themes
3. Ensure sufficient contrast ratios
4. Consider system preference changes
5. Provide visual feedback during theme changes

## Examples

### Theme-Aware Component

```tsx
import { useTheme } from '@randaotoken/component-library';

function ThemedCard({ children }) {
  const { theme } = useTheme();
  
  return (
    <div className={`card card--${theme}`}>
      {children}
    </div>
  );
}
```

### Theme Toggle with Status

```tsx
function ThemeToggleWithStatus() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div>
      <Button
        variant="outline"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Current Theme: {theme}
      </Button>
    </div>
  );
}
```

### System Preference Sync

```tsx
function ThemeSync() {
  const { setTheme } = useTheme();
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [setTheme]);
  
  return null;
}
