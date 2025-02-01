# Development Guide

## Getting Started

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

## Project Structure

```
component-library/
├── src/
│   ├── components/     # React components
│   │   ├── base/      # Base components
│   │   └── Button/    # Button component
│   ├── theme/         # Theme system
│   └── example/       # Example app
├── docs/              # Documentation
└── dist/             # Built files
```

## Development Workflow

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   This will start a local server at http://localhost:5173 with hot reload.

3. **Make Changes**
   - Follow TypeScript best practices
   - Add JSDoc comments
   - Update tests if needed
   - Update documentation

4. **Test Your Changes**
   - Check browser compatibility
   - Verify theme switching
   - Test responsive design

5. **Build and Document**
   ```bash
   npm run build      # Build the library
   npm run docs       # Generate documentation
   ```

6. **Commit Changes**
   Follow [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

## Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use CSS variables for theming
- Keep components modular
- Write clear documentation

## Building for Production

```bash
npm run build
```

This will:
- Generate ES and UMD bundles
- Create TypeScript declaration files
- Generate source maps
- Output to `dist/` directory

## Documentation

We use TypeDoc for API documentation:
```bash
npm run docs
```

Document your code with JSDoc comments:
```typescript
/**
 * Component description
 * @param props - Props description
 * @returns JSX element
 */
```

## Version Control

- Use feature branches
- Follow conventional commits
- Keep commits focused
- Write clear commit messages

## Tips

- Use the example app for testing
- Check browser console for errors
- Test both light and dark themes
- Verify responsive behavior
- Keep bundle size in mind
