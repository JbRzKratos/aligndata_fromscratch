const fs = require('fs');
const path = require('path');

const slugs = [
  'healthcare', 'construction', 'automobile', 'aviation', 'technology', 
  'data-appending-service', 'professionals', 'industry', 
  'canadian-business', 'europe-business', 'asia-pacific-business'
];

const templatePath = path.join(__dirname, '../data/services/manufacturing.ts');
const templateStr = fs.readFileSync(templatePath, 'utf8');

slugs.forEach(slug => {
  const varName = slug.replace(/-([a-z])/g, g => g[1].toUpperCase()) + 'Data';
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  const content = templateStr
    .replace(/manufacturingData/g, varName)
    .replace(/Manufacturing/g, title)
    .replace(/manufacturing-industry-email-list/g, slug + '-email-list')
    .replace(/manufacturing/g, slug);
    
  fs.writeFileSync(path.join(__dirname, '../data/services/' + slug + '.ts'), content);
});
