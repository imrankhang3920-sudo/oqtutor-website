const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\dell\\.gemini\\antigravity-ide\\brain\\798212b6-021d-487a-b065-dd81c7272e54';
const destDir = 'c:\\Users\\dell\\OQTUTOR\\oqtutor-website\\public';

const filesToCopy = [
  { src: 'media__1786020518291.png', dest: 'female-teacher-blog-main.png' },
  { src: 'media__1786020517883.jpg', dest: 'female-teacher-blog-1.jpg' },
  { src: 'media__1786020517694.jpg', dest: 'female-teacher-blog-2.jpg' }
];

filesToCopy.forEach(item => {
  const srcPath = path.join(srcDir, item.src);
  const destPath = path.join(destDir, item.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${item.src} -> ${item.dest}`);
  } else {
    console.error(`File not found: ${srcPath}`);
  }
});
