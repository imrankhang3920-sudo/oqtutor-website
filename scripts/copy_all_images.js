const fs = require('fs');
const path = require('path');

const weekendQuranDir = path.join(__dirname, '../public/blog/weekend-quran');
if (!fs.existsSync(weekendQuranDir)) {
  fs.mkdirSync(weekendQuranDir, { recursive: true });
}

const sourceFiles = [
  {
    src: 'C:\\Users\\dell\\.gemini\\antigravity-ide\\brain\\689f82c9-1c3c-47ac-969b-f7ff80eabcc5\\media__1786339746434.jpg',
    fallbackSrc: path.join(__dirname, '../public/online-quran-classes-usa.jpg'),
    dest: path.join(weekendQuranDir, 'weekend-quran-class-1.jpg')
  },
  {
    src: 'C:\\Users\\dell\\.gemini\\antigravity-ide\\brain\\689f82c9-1c3c-47ac-969b-f7ff80eabcc5\\media__1786339746986.jpg',
    fallbackSrc: path.join(__dirname, '../public/quran-tajweed.jpg'),
    dest: path.join(weekendQuranDir, 'weekend-quran-class-2.jpg')
  },
  {
    src: 'C:\\Users\\dell\\.gemini\\antigravity-ide\\brain\\689f82c9-1c3c-47ac-969b-f7ff80eabcc5\\media__1786339747343.jpg',
    fallbackSrc: path.join(__dirname, '../public/interactive-one-on-one.jpg'),
    dest: path.join(weekendQuranDir, 'weekend-quran-class-3.jpg')
  },
  {
    src: 'C:\\Users\\dell\\.gemini\\antigravity-ide\\brain\\aece3d16-9452-4687-b3f1-e1ceef8b9228\\media__1786587063474.jpg',
    fallbackSrc: path.join(__dirname, '../public/quran-hifz.jpg'),
    dest: path.join(__dirname, '../public/Hifz_Quran_classes.jpeg')
  },
  {
    src: 'C:\\Users\\dell\\.gemini\\antigravity-ide\\brain\\aece3d16-9452-4687-b3f1-e1ceef8b9228\\media__1786587064000.jpg',
    fallbackSrc: path.join(__dirname, '../public/quran-reading.jpg'),
    dest: path.join(__dirname, '../public/Online_Hifz_Quran_classes.jpeg')
  },
  {
    src: 'C:\\Users\\dell\\.gemini\\antigravity-ide\\brain\\aece3d16-9452-4687-b3f1-e1ceef8b9228\\media__1786587064137.jpg',
    fallbackSrc: path.join(__dirname, '../public/adult-quran-memorization.jpg'),
    dest: path.join(__dirname, '../public/Join_Hifz_Quran_course.jpeg')
  },
  {
    src: 'C:\\Users\\dell\\.gemini\\antigravity-ide\\brain\\e55aff35-3bc1-436b-a6c1-2fe8408ea8d8\\media__1786708406659.jpg',
    fallbackSrc: path.join(__dirname, '../public/parents-role.jpg'),
    dest: path.join(__dirname, '../public/choosing-online-quran-tutor-us-parents.jpg')
  }
];

sourceFiles.forEach(({ src, fallbackSrc, dest }) => {
  if (fs.existsSync(src)) {
    try {
      fs.copyFileSync(src, dest);
      console.log(`Successfully copied ${src} -> ${dest}`);
    } catch (err) {
      console.error(`Failed copying ${src}:`, err);
    }
  } else if (fallbackSrc && fs.existsSync(fallbackSrc) && (!fs.existsSync(dest) || fs.statSync(dest).size === 0)) {
    try {
      fs.copyFileSync(fallbackSrc, dest);
      console.log(`Copied fallback ${fallbackSrc} -> ${dest}`);
    } catch (err) {
      console.error(`Failed copying fallback ${fallbackSrc}:`, err);
    }
  } else {
    console.warn(`Neither source nor fallback found for: ${dest}`);
  }
});
