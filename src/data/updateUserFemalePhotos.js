const fs = require('fs');
const path = require('path');

const brainDir = "C:\\Users\\dell\\.gemini\\antigravity\\brain\\fce8ab64-8946-4797-b21e-6a560508541c\\.user_uploaded";
const publicTutorsDir = path.join(__dirname, '../../public/tutors');

if (!fs.existsSync(publicTutorsDir)) {
  fs.mkdirSync(publicTutorsDir, { recursive: true });
}

// Uploaded image mapping
const uploads = [
  { name: "Qaria Sumaira Younis", src: "media__1784737530607.jpg", filename: "qaria_sumaira_younis.jpg" },
  { name: "Ustadha Aiman Shafeeq", src: "media__1784737530660.jpg", filename: "ustadha_aiman_shafeeq.jpg" },
  { name: "Ustadha Sumaira Khan", src: "media__1784737530749.jpg", filename: "ustadha_sumaira_khan.jpg" },
  { name: "Qaria Rimshah Noor", src: "media__1784737530895.jpg", filename: "qaria_rimshah_noor.jpg" }
];

uploads.forEach(item => {
  const sourcePath = path.join(brainDir, item.src);
  const destPath = path.join(publicTutorsDir, item.filename);
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${item.src} -> ${item.filename}`);
  } else {
    console.warn(`Source file not found: ${sourcePath}`);
  }
});

// Update db.json
const dbPath = path.join(__dirname, 'db.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

dbData.tutors.forEach(tutor => {
  const match = uploads.find(u => u.name.toLowerCase() === tutor.name.toLowerCase());
  if (match) {
    tutor.photo = `/tutors/${match.filename}`;
    console.log(`Updated photo for ${tutor.name} to /tutors/${match.filename}`);
  }
});

fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2), 'utf8');
console.log("Successfully updated db.json with user requested female tutor photos!");
