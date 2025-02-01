# Development Guide

## Setup

```bash
# Clone the repository
git clone https://github.com/RandAOLabs/component-library.git

# Install dependencies
npm install
```

## Development Commands

- `npm run dev` - Start development server for example app
- `npm run storybook` - Start Storybook documentation server
- `npm run build` - Build library for production
- `npm run build-storybook` - Build static Storybook site
- `npm run docs` - Generate API documentation
- `npm run lint` - Run ESLint

## Development Workflow

1. **Component Development**
   - Create new components in `src/components/[ComponentName]`
   - Follow the existing component structure:
     ```
     ComponentName/
     ├── ComponentName.tsx
     ├── ComponentName.css
     ├── ComponentName.stories.tsx
     └── index.ts
     ```

2. **Documentation**
   - Add Storybook stories for new components
   - Include examples of all component props and variants
   - Write clear prop descriptions in component interfaces
   - Update relevant markdown documentation in `docs/`

3. **Testing**
   - Test components in Storybook
   - Verify theme compatibility (light/dark modes)
   - Check responsive behavior
   - Ensure accessibility standards are met

4. **Code Style**
   - Follow TypeScript best practices
   - Use CSS custom properties for theming
   - Keep components modular and reusable
   - Document props with JSDoc comments

## Project Structure

```
component-library/
├── .storybook/          # Storybook configuration
├── docs/                # Documentation
├── src/
│   ├── components/      # React components
│   ├── theme/           # Theme system
│   └── example/         # Example app
└── package.json
```

## Git Workflow

1. Create a feature branch:
   ```bash
   git checkout -b feature/component-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: add new component"
   ```

3. Push changes and create a pull request:
   ```bash
   git push origin feature/component-name
   ```

## Release Process

1. Update version in `package.json`
2. Build and test:
   ```bash
   npm run build
   npm run build-storybook
   ```
3. Create git tag:
   ```bash
   git tag vX.Y.Z
   git push origin vX.Y.Z
   ```
4. Publish to npm:
   ```bash
   npm publish
   ```

## Best Practices

- Keep components focused and single-purpose
- Use TypeScript for type safety
- Follow semantic versioning
- Write clear commit messages
- Document all public APIs
- Consider accessibility in design and implementation
- Test across different browsers and devices
