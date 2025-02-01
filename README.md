# RandAO Component Library

[![npm version](https://img.shields.io/npm/v/@randaotoken/component-library.svg)](https://www.npmjs.com/package/@randaotoken/component-library)
[![License](https://img.shields.io/npm/l/@randaotoken/component-library.svg)](https://github.com/RandAOLabs/component-library/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/RandAOLabs/component-library/publish.yml?branch=main)](https://github.com/RandAOLabs/component-library/actions)
[![npm downloads](https://img.shields.io/npm/dm/@randaotoken/component-library.svg)](https://www.npmjs.com/package/@randaotoken/component-library)

A modern, minimalist React component library with a bold monospace aesthetic, built for RandAO projects.

## Documentation

- [Component Documentation](https://randaolabs.github.io/component-library/)
- [GitHub Repository](https://github.com/RandAOLabs/component-library)
- [npm Package](https://www.npmjs.com/package/@randaotoken/component-library)
- [Issue Tracker](https://github.com/RandAOLabs/component-library/issues)

## Features

- 🎨 Minimalist design with bold monospace typography
- 🌓 Seamless light/dark theme switching
- 📦 TypeScript support with source maps
- 🎯 Zero runtime dependencies
- ⚡ Built with Vite
- 🔄 System theme detection & persistence
- 💫 Smooth transitions & animations

## Quick Links

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Theme System](#theme-system)
- [Development](#development)
- [Browser Support](#browser-support)

## Installation

```bash
npm install @randaotoken/component-library
```

[![NPM](https://nodei.co/npm/@randaotoken/component-library.png)](https://nodei.co/npm/@randaotoken/component-library/)

## Usage

First, wrap your application with the ThemeProvider:

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

Then use components with automatic theme support:

```tsx
import { Button, useTheme } from '@randaotoken/component-library';

function Example() {
  const { theme, setTheme } = useTheme();

  return (
    <Button 
      variant="primary"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </Button>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and states.

```tsx
// Primary button
<Button variant="primary">Primary</Button>

// Secondary button
<Button variant="secondary">Secondary</Button>

// Outline button
<Button variant="outline">Outline</Button>

// Different sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// States
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>

// With icons
<Button startIcon={<Icon />}>With Icon</Button>
```

## Theme System

The library includes a comprehensive theme system that:

- Automatically detects system color scheme preference
- Persists theme choice in localStorage
- Provides smooth transitions between themes
- Uses CSS variables for easy customization

### Using Theme Hooks

```tsx
// Access current theme
const { theme } = useTheme();

// Toggle theme
const toggleTheme = useThemeToggle();

// Set theme directly
const { setTheme } = useTheme();
setTheme('dark');
```

## Development

1. Clone the repository
   ```bash
   git clone https://github.com/RandAOLabs/component-library.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

4. Build the library
   ```bash
   npm run build
   ```

5. Generate documentation
   ```bash
   npm run docs
   ```

## Browser Support

- Chrome
- Firefox
- Safari
- Edge
- Opera

## Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/RandAOLabs/component-library/blob/main/CONTRIBUTING.md) for details.

## Security

For security issues, please see our [Security Policy](https://github.com/RandAOLabs/component-library/security/policy).

## License

MIT © RandAO Labs

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/RandAOLabs">RandAO Labs</a></sub>
</div>
