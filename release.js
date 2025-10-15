import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

// Get the version bump type from command line (patch, minor, major)
const bumpType = process.argv[2] || 'patch';

if (!['patch', 'minor', 'major'].includes(bumpType)) {
  console.error('Usage: bun run release [patch|minor|major]');
  console.error('Defaults to patch if not specified');
  process.exit(1);
}

console.log(`📦 Starting release process (${bumpType} version bump)...\n`);

// Read current versions
const shadersPackageJson = JSON.parse(readFileSync('packages/shaders/package.json', 'utf8'));
const currentVersion = shadersPackageJson.version;

// Parse version
const [major, minor, patch] = currentVersion.split('.').map(Number);

// Calculate new version
let newVersion;
if (bumpType === 'major') {
  newVersion = `${major + 1}.0.0`;
} else if (bumpType === 'minor') {
  newVersion = `${major}.${minor + 1}.0`;
} else {
  newVersion = `${major}.${minor}.${patch + 1}`;
}

console.log(`📌 Current version: ${currentVersion}`);
console.log(`📌 New version: ${newVersion}\n`);

// Update package.json files
console.log('📝 Updating package.json files...');
shadersPackageJson.version = newVersion;
writeFileSync('packages/shaders/package.json', JSON.stringify(shadersPackageJson, null, 2) + '\n');

const shadersReactPackageJson = JSON.parse(readFileSync('packages/shaders-react/package.json', 'utf8'));
shadersReactPackageJson.version = newVersion;
writeFileSync('packages/shaders-react/package.json', JSON.stringify(shadersReactPackageJson, null, 2) + '\n');

console.log('✅ Version updated in both packages\n');

// Git operations
console.log('📝 Creating git commit and tag...');
try {
  execSync('git add packages/*/package.json', { stdio: 'inherit' });
  execSync(`git commit -m "Publish ${newVersion}"`, { stdio: 'inherit' });
  execSync(`git tag v${newVersion}`, { stdio: 'inherit' });
  console.log('✅ Git commit and tag created\n');
} catch (error) {
  console.error('❌ Git operations failed');
  process.exit(1);
}

// Push to remote
console.log('📤 Pushing to remote...');
try {
  execSync('git push origin main', { stdio: 'inherit' });
  execSync(`git push origin v${newVersion}`, { stdio: 'inherit' });
  console.log('✅ Pushed to remote\n');
} catch (error) {
  console.error('❌ Push failed');
  process.exit(1);
}

// Build and publish
console.log('🏗️  Building and publishing packages...');
try {
  execSync('bun run clean', { stdio: 'inherit' });
  execSync('bun run build', { stdio: 'inherit' });
  execSync('bun run publish.js', { stdio: 'inherit' });
  console.log('\n✅ Build and publish complete\n');
} catch (error) {
  console.error('❌ Build or publish failed');
  process.exit(1);
}

console.log(`🎉 Successfully released version ${newVersion}!`);
