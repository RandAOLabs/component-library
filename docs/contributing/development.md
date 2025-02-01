# Development Process

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
