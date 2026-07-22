const fs = require('fs');
const path = require('path');

const brainDir = "C:\\Users\\dell\\.gemini\\antigravity\\brain\\fce8ab64-8946-4797-b21e-6a560508541c\\.user_uploaded";
const publicTutorsDir = path.join(__dirname, '../../public/tutors');

if (!fs.existsSync(publicTutorsDir)) {
  fs.mkdirSync(publicTutorsDir, { recursive: true });
}

// Uploaded image mapping
const uploads = [
  { name: "Qaria Sumaira Younis", src: "media__1784745563390.jpg", filename: "qaria_sumaira_younis.jpg" },
  { name: "Ustadha Aiman Shafeeq", src: "media__1784737530660.jpg", filename: "ustadha_aiman_shafeeq.jpg" },
  { name: "Ustadha Sumaira Khan", src: "media__1784737530749.jpg", filename: "ustadha_sumaira_khan.jpg" },
  { name: "Qaria Rimshah Noor", src: "media__1784737530895.jpg", filename: "qaria_rimshah_noor.jpg" },
  { name: "Ustadha Maryam Siddiqui", src: "media__1784749879871.jpg", filename: "ustadha_maryam_siddiqui.jpg" },
  { name: "Qaria Sadia Parveen", src: "media__1784749879949.jpg", filename: "qaria_sadia_parveen.jpg" },
  { name: "Ustadha Zainab Bibi", src: "media__1784749880320.png", filename: "ustadha_zainab_bibi.png" },
  { name: "Qaria Bushra Rashid", src: "media__1784749880439.jpg", filename: "qaria_bushra_rashid.jpg" },
  { name: "Qari Muhammad Imran", src: "media__1784749880615.jpg", filename: "qari_muhammad_imran.jpg" }
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

// Copy default placeholder to Ustadha Hina Malik
const defaultFemaleSrc = path.join(__dirname, '../../public/tutor-female-icon.jpg');
const HinaMalikDest = path.join(publicTutorsDir, 'ustadha_hina_malik.jpg');
if (fs.existsSync(defaultFemaleSrc)) {
  fs.copyFileSync(defaultFemaleSrc, HinaMalikDest);
  console.log(`Copied default placeholder tutor-female-icon.jpg -> ustadha_hina_malik.jpg`);
}

// Update db.json
const dbPath = path.join(__dirname, 'db.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

dbData.tutors.forEach(tutor => {
  const match = uploads.find(u => u.name.toLowerCase() === tutor.name.toLowerCase());
  if (match) {
    tutor.photo = `/tutors/${match.filename}`;
    console.log(`Updated photo for ${tutor.name} to /tutors/${match.filename}`);
  } else if (tutor.name === "Ustadha Hina Malik") {
    tutor.photo = `/tutors/ustadha_hina_malik.jpg`;
    console.log(`Updated photo for ${tutor.name} to /tutors/ustadha_hina_malik.jpg`);
  }
});

fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2), 'utf8');
console.log("Successfully updated db.json with user requested female tutor photos!");
