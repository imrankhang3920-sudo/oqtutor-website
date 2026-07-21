const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const targetNames = [
  "Qaria Sumaira Younis",
  "Ustadha Aiman Shafeeq",
  "Ustadha Sumaira Khan",
  "Qaria Rimshah Noor"
];

dbData.tutors.forEach(tutor => {
  if (targetNames.some(t => t.toLowerCase() === tutor.name.toLowerCase())) {
    const base = tutor.photo.split('?')[0];
    tutor.photo = `${base}?v=${Date.now()}`;
    console.log(`Updated cache buster for ${tutor.name}: ${tutor.photo}`);
  }
});

fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2), 'utf8');
console.log("Updated db.json with cache busters!");
