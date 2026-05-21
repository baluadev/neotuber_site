const fs = require('fs');
const path = require('path');

const targetDirs = ['./sections', './app', './components'];

const replacements = {
    'bg-white': 'bg-charcoal',
    'bg-gray-50': 'bg-charcoal-dark',
    'bg-gray-100': 'bg-charcoal-light',
    'bg-gray-200': 'bg-charcoal-lighter',
    'bg-gray-900': 'bg-charcoal-dark',
    'text-gray-900': 'text-white',
    'text-gray-800': 'text-gray-100',
    'text-gray-700': 'text-gray-200',
    'text-gray-600': 'text-gray-300',
    'text-gray-500': 'text-gray-400',
    'text-gray-100': 'text-gray-800',
    'border-gray-100': 'border-charcoal-light',
    'border-gray-200': 'border-charcoal-lighter',
    'border-gray-800': 'border-charcoal-light',
    'from-red-50': 'from-charcoal-dark',
    'to-red-50': 'to-charcoal-dark',
    'bg-blue-600': 'bg-primary-500',
    'bg-blue-500': 'bg-primary-400',
    'bg-blue-700': 'bg-primary-600',
    'text-blue-600': 'text-primary-500',
    'text-blue-500': 'text-primary-400',
    'ring-blue-500': 'ring-primary-500',
    'hover:bg-blue-700': 'hover:bg-primary-600',
    'hover:bg-blue-50': 'hover:bg-charcoal-light hover:text-primary-500',
    'hover:text-blue-600': 'hover:text-primary-500',
    'bg-blue-50': 'bg-primary-500/10 text-primary-500',
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
                // simple replace all
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
console.log('Done replacement.');
