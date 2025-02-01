# Component Library

A modern React component library with TypeScript support and theming.

## Features

- 🎨 Customizable theming with light/dark mode support
- 📦 Tree-shakeable exports
- 🔍 Fully typed with TypeScript
- 📱 Responsive and accessible components
- 🎯 Zero runtime dependencies

## Installation

```bash
npm install @randaotoken/component-library
```

## Quick Start

```tsx
import { Button, ThemeProvider } from '@randaotoken/component-library';
import '@randaotoken/component-library/style.css';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

## Documentation

- [Components](docs/components.md) - Available components and usage
- [Theme System](docs/theme-system.md) - Theming and customization
- [Development](docs/development.md) - Contributing and development setup

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
