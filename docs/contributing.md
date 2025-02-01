# Contributing to RandAO Component Library

We love your input! We want to make contributing to RandAO Component Library as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with GitHub
We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [GitHub Flow](https://guides.github.com/introduction/flow/index.html)
Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Development Process
1. Clone the repository
   ```bash
   git clone https://github.com/RandAOLabs/component-library.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a branch
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. Make your changes
   - Follow the existing code style
   - Add JSDoc comments for documentation
   - Keep components focused and reusable
   - Update examples if needed

5. Test your changes
   ```bash
   npm run dev     # Start development server
   npm run build   # Build the library
   npm run docs    # Generate documentation
   ```

6. Commit your changes
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

   We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `style:` for code style changes
   - `refactor:` for code refactoring
   - `test:` for adding tests
   - `chore:` for maintenance tasks

7. Push to your fork and submit a pull request
   ```bash
   git push origin feature/amazing-feature
   ```

## Versioning

We use [Semantic Versioning](https://semver.org/) for version management. The project includes a version bump script to help maintain consistent versioning:

- `npm run version:patch` - for backwards-compatible bug fixes
- `npm run version:minor` - for new features that are backwards-compatible
- `npm run version:major` - for breaking changes

The version bump script will:
1. Ensure you're on the main branch
2. Pull latest changes
3. Update version in package.json
4. Create a commit with the version change
5. Create a git tag
6. Push changes and tags

This will trigger the GitHub Actions workflow to build, test, and publish the new version.

## Component Guidelines

### Structure
- Each component should be in its own directory
- Include component file, styles, and tests
- Export through index.ts
- Use TypeScript interfaces for props

### Styling
- Use CSS variables for theming
- Follow BEM methodology
- Keep styles modular and scoped
- Support both light and dark themes

### Documentation
- Add JSDoc comments for components and functions
- Include usage examples
- Document props and return types
- Add notes about browser support if relevant

## Any contributions you make will be under the MIT Software License
In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using GitHub's [issue tracker](https://github.com/RandAOLabs/component-library/issues)
We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/RandAOLabs/component-library/issues/new); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## License
By contributing, you agree that your contributions will be licensed under its MIT License.
