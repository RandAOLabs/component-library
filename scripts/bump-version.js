#!/usr/bin/env node

import { execSync } from 'child_process';
import { platform } from 'os';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const VERSION_TYPES = ['patch', 'minor', 'major'];
const PACKAGE_JSON_PATH = join(process.cwd(), 'package.json');

function executeCommand(command) {
    try {
        return execSync(command, { stdio: 'inherit' });
    } catch (error) {
        console.error(`Error executing command: ${command}`);
        console.error(error.message);
        process.exit(1);
    }
}

function getCurrentBranch() {
    return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
}

function checkWorkingDirectory() {
    try {
        const status = execSync('git status --porcelain').toString();
        return status === '';
    } catch (error) {
        console.error('Error checking git status:', error.message);
        process.exit(1);
    }
}

function main() {
    // Check arguments
    const versionType = process.argv[2];
    if (!versionType || !VERSION_TYPES.includes(versionType)) {
        console.error(`Please provide version type: ${VERSION_TYPES.join(', ')}`);
        console.error('Usage: node bump-version.js <version-type>');
        process.exit(1);
    }

    // Ensure we're on the main branch
    const currentBranch = getCurrentBranch();
    if (currentBranch !== 'main') {
        console.error('Please switch to main branch first');
        process.exit(1);
    }

    // Ensure working directory is clean
    if (!checkWorkingDirectory()) {
        console.error('Working directory is not clean. Please commit or stash changes first.');
        process.exit(1);
    }

    // Pull latest changes
    console.log('Pulling latest changes...');
    executeCommand('git pull origin main');

    // Stage all changes
    console.log('Staging changes...');
    executeCommand('git add .');

    // Get current version from package.json
    const packageJson = JSON.parse(readFileSync(PACKAGE_JSON_PATH, 'utf8'));
    const currentVersion = packageJson.version;

    // Calculate new version
    const [major, minor, patch] = currentVersion.split('.').map(Number);
    let newVersion;
    switch (versionType) {
        case 'major':
            newVersion = `${major + 1}.0.0`;
            break;
        case 'minor':
            newVersion = `${major}.${minor + 1}.0`;
            break;
        case 'patch':
            newVersion = `${major}.${minor}.${patch + 1}`;
            break;
    }

    // Update version in package.json
    console.log(`Updating version to ${newVersion}...`);
    const updatedPackageJson = { ...packageJson, version: newVersion };
    writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(updatedPackageJson, null, 2) + '\n', 'utf8');

    // Stage package.json
    executeCommand('git add package.json');

    // Commit changes
    console.log('Committing changes...');
    executeCommand(`git commit -m "chore: bump version to ${newVersion}"`);

    // Create tag
    console.log('Creating tag...');
    executeCommand(`git tag v${newVersion}`);

    // Push changes and tags
    console.log('Pushing changes and tags...');
    executeCommand('git push && git push --tags');

    console.log(`Version bump complete! New version: ${newVersion}`);
}

main();
