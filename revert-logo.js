const fs = require('fs');
const path = require('path');

const targetDirs = ['./sections', './app', './'];

const replacements = {
    '/logo.png': '/logo.svg',
};

// Files to skip
const skipFiles = ['.git', 'node_modules', '.next', '.DS_Store', 'package-lock.json', 'theme-replace.js', 'theme-refine.js', 'rebrand.js', 'update-logo.js'];

function processDirectory(directory) {
    if (!fs.existsSync(directory)) return;
    const files = fs.readdirSync(directory);
    for (const file of files) {
        if (skipFiles.includes(file)) continue;
        
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.json') || fullPath.endsWith('.md')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            for (const [key, value] of Object.entries(replacements)) {
                if (content.includes(key)) {
                    content = content.split(key).join(value);
                    modified = true;
                }
            }
            
            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

targetDirs.forEach(processDirectory);
console.log('Reverted logo update.');
