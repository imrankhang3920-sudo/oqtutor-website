const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../src/data/db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const iconMappings = {
  "noorani-qaida": "GraduationCap",
  "quran-reading": "BookOpen",
  "quran-with-tajweed": "Volume2",
  "hifz-quran": "Heart",
  "online-quran-classes-for-kids": "Smile",
  "online-quran-classes-for-adults": "UserCheck",
  "islamic-studies": "Compass",
  "arabic-language": "Languages",
  "daily-duas": "Sparkles",
  "salah-course": "Users"
};

db.courses = db.courses.map(course => {
  if (iconMappings[course.slug]) {
    course.icon = iconMappings[course.slug];
  }
  return course;
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Successfully updated course icons in db.json!');
