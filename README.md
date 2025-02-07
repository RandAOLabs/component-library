# RandAOToken Component Library

[![npm version](https://img.shields.io/npm/v/@randaotoken/component-library.svg)](https://www.npmjs.com/package/@randaotoken/component-library)
[![npm downloads](https://img.shields.io/npm/dm/@randaotoken/component-library.svg)](https://www.npmjs.com/package/@randaotoken/component-library)
[![Build Status](https://github.com/RandAOLabs/component-library/actions/workflows/publish.yml/badge.svg)](https://github.com/RandAOLabs/component-library/actions/workflows/publish.yml)
[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://randaolabs.github.io/component-library)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A sleek modern React component library with TypeScript support and theming, optimized for Vite.

## Installation

```bash
npm install @randaotoken/component-library
```

## Usage

Import components directly from the library:

```tsx
import { Button, ThemeProvider } from '@randaotoken/component-library';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

### Vite Integration

This library is optimized for Vite and provides source files directly:
- TypeScript source with full type support
- CSS imports handled automatically by Vite
- Control-click navigation to component source
- Hot Module Replacement (HMR) support
- Source maps for debugging

### Note for Non-Vite Users

This library is designed to be used with Vite. While it may work with other build tools, we recommend using Vite for the best development experience.

## Available Components

```tsx
import {
  // Theme (required)
  ThemeProvider,
  
  // Components
  Button,
  Spinner,
  ThemeToggle,
  Tooltip,
  InfoIcon,
  Table,
  SocialIcons,
  ConnectWallet,
  
  // Hooks
  useTheme,
  useThemeToggle,
  useWallet
} from '@randaotoken/component-library';
```

## Documentation

- [Components](docs/components.md) - Available components and usage
- [Theme System](docs/theme-system.md) - Theming and customization
- [Development](docs/development.md) - Contributing and development setup

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
Made with ❤️ by the RandAO team
</div>
