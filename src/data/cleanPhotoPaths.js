const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

dbData.tutors.forEach(tutor => {
  if (tutor.photo.includes('?')) {
    tutor.photo = tutor.photo.split('?')[0];
    console.log(`Cleaned photo path for ${tutor.name}: ${tutor.photo}`);
  }
});

fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2), 'utf8');
console.log("Successfully cleaned all photo paths in db.json!");
