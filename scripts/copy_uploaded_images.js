const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../public/blog/weekend-quran');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const sourceFiles = [
  {
    src: 'C:\\Users\\dell\\.gemini\\antigravity-ide\\brain\\689f82c9-1c3c-47ac-969b-f7ff80eabcc5\\media__1786339746434.jpg',
    dest: path.join(targetDir, 'weekend-quran-class-1.jpg')
  },
  {
    src: 'C:\\Users\\dell\\.gemini\\antigravity-ide\\brain\\689f82c9-1c3c-47ac-969b-f7ff80eabcc5\\media__1786339746986.jpg',
    dest: path.join(targetDir, 'weekend-quran-class-2.jpg')
  },
  {
    src: 'C:\\Users\\dell\\.gemini\\antigravity-ide\\brain\\689f82c9-1c3c-47ac-969b-f7ff80eabcc5\\media__1786339747343.jpg',
    dest: path.join(targetDir, 'weekend-quran-class-3.jpg')
  }
];

sourceFiles.forEach(({ src, dest }) => {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${src} -> ${dest}`);
  } else {
    console.error(`Source file not found: ${src}`);
  }
});
