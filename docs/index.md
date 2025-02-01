# RandAO Component Library Documentation

Welcome to the RandAO Component Library documentation! This documentation will help you get started with using and contributing to our component library.

## 📚 Documentation Sections

| Section | Description |
|---------|-------------|
| [📖 Development Guide](./development.md) | How to set up and develop the library |
| [🤝 Contributing Guide](./contributing.md) | Guidelines for contributing to the project |
| [🔒 Security Policy](./security.md) | Security policies and reporting vulnerabilities |
| [📑 API Documentation](https://randaolabs.github.io/component-library/) | Component API documentation |

## 🚀 Quick Start

```bash
# Install the library
npm install @randaotoken/component-library

# Import and use components
import { Button, ThemeProvider } from '@randaotoken/component-library';
```

## 🎨 Theme System

Our component library comes with a built-in theme system that supports:

```tsx
// Wrap your app with ThemeProvider
import { ThemeProvider } from '@randaotoken/component-library';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}

// Use theme hooks in your components
import { useTheme } from '@randaotoken/component-library';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}
```

## 🧩 Components

Each component in our library follows these principles:

- 🎯 Focused and reusable
- 📱 Responsive by default
- 🌓 Theme-aware
- ♿ Accessible
- 🚀 Performance optimized

## 🛠 Development Tools

- TypeScript for type safety
- Vite for fast development
- TypeDoc for documentation
- GitHub Actions for CI/CD

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](./contributing.md) for details on:

- Setting up your development environment
- Making changes
- Submitting pull requests
- Code style guidelines

## 🔒 Security

For security-related matters, please review our [Security Policy](./security.md).

## 🔗 Useful Links

- [GitHub Repository](https://github.com/RandAOLabs/component-library)
- [npm Package](https://www.npmjs.com/package/@randaotoken/component-library)
- [Issue Tracker](https://github.com/RandAOLabs/component-library/issues)
- [API Documentation](https://randaolabs.github.io/component-library/)

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/RandAOLabs">RandAO Labs</a></sub>
</div>
