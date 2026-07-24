const fs = require('fs');
const path = require('path');

const brainDir = "C:\\Users\\dell\\.gemini\\antigravity\\brain\\fce8ab64-8946-4797-b21e-6a560508541c\\.user_uploaded";
const publicTutorsDir = path.join(__dirname, '../../public/tutors');

if (!fs.existsSync(publicTutorsDir)) {
  fs.mkdirSync(publicTutorsDir, { recursive: true });
}

// Uploaded image mapping
const uploads = [
  { name: "Qaria Sumaira Younis", src: "media__1784804803022.png", filename: "qaria_sumaira_younis.png" },
  { name: "Ustadha Aiman Shafeeq", src: "media__1784737530660.jpg", filename: "ustadha_aiman_shafeeq.jpg" },
  { name: "Ustadha Sumaira Khan", src: "media__1784737530749.jpg", filename: "ustadha_sumaira_khan.jpg" },
  { name: "Qaria Rimshah Noor", src: "media__1784737530895.jpg", filename: "qaria_rimshah_noor.jpg" },
  { name: "Ustadha Maryam Siddiqui", src: "media__1784749879871.jpg", filename: "ustadha_maryam_siddiqui.jpg" },
  { name: "Qaria Sadia Parveen", src: "media__1784749879949.jpg", filename: "qaria_sadia_parveen.jpg" },
  { name: "Ustadha Zainab Bibi", src: "media__1784749880320.png", filename: "ustadha_zainab_bibi.png" },
  { name: "Qaria Bushra Rashid", src: "media__1784749880439.jpg", filename: "qaria_bushra_rashid.jpg" },
  { name: "Qari Muhammad Imran", src: "media__1784826884755.jpg", filename: "qari_muhammad_imran.jpg" },
  { name: "Qaria Aisha Rehman", src: "media__1784788842092.png", filename: "qaria_aisha_rehman.png" },
  { name: "Ustadha Nasreen Sultana", src: "media__1784788842108.png", filename: "ustadha_nasreen_sultana.png" },
  { name: "Ustadha Tasnim Akhtar", src: "media__1784788842421.png", filename: "ustadha_tasnim_akhtar.png" },
  { name: "Ustadha Sharmin Jahan", src: "media__1784788842434.png", filename: "ustadha_sharmin_jahan.png" },
  { name: "Ustadha Afroza Begum", src: "media__1784788842925.png", filename: "ustadha_afroza_begum.png" },
  { name: "Ustadha Jesmin Akter", src: "media__1784792001925.png", filename: "ustadha_jesmin_akter.png" },
  { name: "Ustadha Farhana Chowdhury", src: "media__1784792002222.png", filename: "ustadha_farhana_chowdhury.png" },
  { name: "Ustadha Fatima Anjum", src: "media__1784792002277.png", filename: "ustadha_fatima_anjum.png" },
  { name: "Ustadha Asma Naaz", src: "media__1784792002360.png", filename: "ustadha_asma_naaz.png" },
  { name: "Ustadha Shabana Begum", src: "media__1784792002454.png", filename: "ustadha_shabana_begum.png" },
  { name: "Ustadha Nida Shireen", src: "media__1784804803062.png", filename: "ustadha_nida_shireen.png" },
  { name: "Qari Hafiz Irfan", src: "media__1784877362075.jpg", filename: "qari_hafiz_irfan.jpg" },
  { name: "Qari Saad Tariq", src: "media__1784804803266.png", filename: "qari_saad_tariq.png" },
  { name: "Sheikh Khurram Shahzad", src: "media__1784804803349.png", filename: "sheikh_khurram_shahzad.png" },
  { name: "Qari Noman Siddiqui", src: "media__1784826907833.jpg", filename: "qari_noman_siddiqui.jpg" },
  { name: "Qari Adnan Yousuf", src: "media__1784826907840.jpg", filename: "qari_adnan_yousuf.jpg" },
  { name: "Mawlana Qari Hafizul Islam", src: "media__1784826907859.jpg", filename: "mawlana_qari_hafizul_islam.jpg" },
  { name: "Qari Mahmudur Rahman", src: "media__1784826907987.jpg", filename: "qari_mahmudur_rahman.jpg" },
  { name: "Sheikh Tariqul Islam Al-Hafiz", src: "media__1784875304005.png", filename: "sheikh_tariqul_islam_al_hafiz.png" },
  { name: "Qari Saidul Hassan", src: "media__1784875304109.png", filename: "qari_saidul_hassan.png" },
  { name: "Sheikh Mizanur Rahman", src: "media__1784875304214.png", filename: "sheikh_mizanur_rahman.png" },
  { name: "Qari Aminul Hoque", src: "media__1784875304321.png", filename: "qari_aminul_hoque.png" },
  { name: "Sheikh Nazmul Huda", src: "media__1784875466712.png", filename: "sheikh_nazmul_huda.png" },
  { name: "Qari Kazi Mustafizur Rahman", src: "media__1784877399164.png", filename: "qari_kazi_mustafizur_rahman.png" },
  { name: "Sheikh Enamul Haque", src: "media__1784877399218.png", filename: "sheikh_enamul_haque.png" },
  { name: "Qari Maulana Syed Owais", src: "media__1784877399349.png", filename: "qari_maulana_syed_owais.png" }
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

// Copy backcover banner photo
const bannerSrc = path.join(brainDir, 'media__1784894014025.png');
const bannerDest = path.join(publicTutorsDir, 'tutor_banner.png');
if (fs.existsSync(bannerSrc)) {
  fs.copyFileSync(bannerSrc, bannerDest);
  console.log(`Copied tutor backcover photo media__1784894014025.png -> tutor_banner.png`);
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
