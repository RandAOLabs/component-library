#!/usr/bin/env node

import { execSync } from 'child_process';
import { platform } from 'os';

const VERSION_TYPES = ['patch', 'minor', 'major'];

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

    // Bump version using npm version
    console.log(`Bumping ${versionType} version...`);
    executeCommand(`npm version ${versionType}`);

    // Push changes and tags
    console.log('Pushing changes and tags...');
    executeCommand('git push && git push --tags');

    console.log('Version bump complete!');
}

main();
