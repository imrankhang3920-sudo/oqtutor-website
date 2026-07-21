const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

dbData.tutors.forEach(tutor => {
  if (tutor.photo.includes('?v=')) {
    const base = tutor.photo.split('?')[0];
    tutor.photo = `${base}?v=2`;
  }
});

fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2), 'utf8');
console.log("Fixed hydration by setting deterministic photo versioning ?v=2 in db.json!");
