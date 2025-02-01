# Versioning

We use [Semantic Versioning](https://semver.org/) for version management. Version numbers follow the format MAJOR.MINOR.PATCH:

- MAJOR version for incompatible API changes
- MINOR version for backwards-compatible new features
- PATCH version for backwards-compatible bug fixes

## Version Bump Script

The project includes a version bump script to help maintain consistent versioning. You can use the following npm commands:

```bash
npm run version:patch  # for backwards-compatible bug fixes
npm run version:minor  # for new features that are backwards-compatible
npm run version:major  # for breaking changes
```

The version bump script will:
1. Ensure you're on the main branch
2. Pull latest changes
3. Update version in package.json
4. Create a commit with the version change
5. Create a git tag
6. Push changes and tags

## Automated Publishing

When a new version tag is pushed, our GitHub Actions workflow automatically:
1. Builds the library
2. Runs tests
3. Generates documentation
4. Publishes to npm
5. Deploys updated documentation

## Version History

To view the version history and changelog:
1. Check the git tags: `git tag -l`
2. View specific version details: `git show v1.2.3`
3. Browse releases on GitHub: [Releases page](https://github.com/RandAOLabs/component-library/releases)
