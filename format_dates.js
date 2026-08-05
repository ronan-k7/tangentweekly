const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'public', 'data');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

const monthNames = {
  '01': 'Jan.', '02': 'Feb.', '03': 'Mar.', '04': 'Apr.', '05': 'May', '06': 'Jun.',
  '07': 'Jul.', '08': 'Aug.', '09': 'Sept.', '10': 'Oct.', '11': 'Nov.', '12': 'Dec.'
};

let totalReplacements = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content.replace(/"date":\s*"(\d{4})-(\d{2})-(\d{2})"/g, (match, year, month, day) => {
    totalReplacements++;
    const m = monthNames[month] || 'Jan.';
    return `"date": "${m} ${day}, ${year}"`;
  });
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated dates in ${file}`);
  }
}
console.log(`Total dates replaced: ${totalReplacements}`);
