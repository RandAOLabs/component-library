# Component Library

A modern React component library with TypeScript support, built with Vite.

## Features

- 🚀 Modern React components
- 📦 TypeScript support with source maps
- 🎨 Responsive design
- 📝 Auto-generated documentation from TSDoc comments
- ⚡ Built with Vite
- 🔄 Hot Module Replacement (HMR)

## Installation

```bash
npm install component-library
```

## Usage

```tsx
import { Button } from 'component-library';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('clicked')}>
      Click me
    </Button>
  );
}
```

## Available Components

### Button

A customizable button component with different variants.

```tsx
// Primary button
<Button variant="primary">Primary</Button>

// Secondary button
<Button variant="secondary">Secondary</Button>

// Outline button
<Button variant="outline">Outline</Button>

// Disabled button
<Button disabled>Disabled</Button>
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build the library:
   ```bash
   npm run build
   ```
5. Generate documentation:
   ```bash
   npm run docs
   ```

## Browser Support

- Chrome
- Firefox
- Safari
- Edge
- Opera

## License

MIT
