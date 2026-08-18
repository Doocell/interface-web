const fs = require('fs');
const path = require('path');

const pages = [
  'Home',
  'BukuPanduan',
  'Leaderboard',
  'QuestCollect',
  'Vote',
  'GameDescription',
  'Map',
  'FAQ',
  'InterfaceInfo'
];

const dir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

pages.forEach(page => {
  const content = `import React from 'react';

export default function ${page}() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">${page}</h1>
      <p>Placeholder content for ${page} page.</p>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(dir, `${page}.jsx`), content);
});

console.log('Pages created!');
