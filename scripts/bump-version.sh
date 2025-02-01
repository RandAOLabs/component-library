#!/bin/bash

# Check if version type is provided
if [ -z "$1" ]; then
  echo "Please provide version type: patch, minor, or major"
  echo "Usage: ./bump-version.sh <version-type>"
  exit 1
fi

VERSION_TYPE=$1

# Ensure we're on the main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "Please switch to main branch first"
  exit 1
fi

# Ensure working directory is clean
if [ -n "$(git status --porcelain)" ]; then
  echo "Working directory is not clean. Please commit or stash changes first."
  exit 1
fi

# Pull latest changes
echo "Pulling latest changes..."
git pull origin main

# Bump version using npm version
# This will:
# 1. Update version in package.json
# 2. Create a commit with message "v{new-version}"
# 3. Create a tag
echo "Bumping $VERSION_TYPE version..."
npm version $VERSION_TYPE

# Push commit and tag
echo "Pushing changes and tags..."
git push && git push --tags

echo "Version bump complete!"
