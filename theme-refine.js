const fs = require('fs');
const path = require('path');

const targetDirs = ['./sections', './components'];

const replacements = {
    'from-charcoal-dark0': 'from-primary-400',
    'to-red-600': 'to-primary-600',
    'from-red-500': 'from-primary-400',
    'text-red-500': 'text-primary-500',
    'bg-red-500': 'bg-primary-500',
    'text-blue-500': 'text-primary-500',
    'bg-blue-500': 'bg-primary-500',
    'text-gray-900': 'text-white',
    // Add glowing neon borders to cards or specific sections
    'border-charcoal-light': 'border-charcoal-light hover:border-primary-500/50 transition-colors',
    'shadow-lg': 'shadow-lg hover:shadow-primary-500/20',
};

function processDirectory(directory) {
    if (!fs.existsSync(directory)) return;
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
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
console.log('Done refinements.');
