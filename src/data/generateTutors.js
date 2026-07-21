const fs = require('fs');
const path = require('path');

const pakistaniCities = ["Lahore", "Islamabad", "Karachi", "Rawalpindi", "Peshawar", "Faisalabad", "Multan", "Quetta", "Gujranwala", "Sialkot"];
const bangladeshiCities = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Comilla", "Mymensingh", "Barisal"];
const indianCities = ["Hyderabad", "Lucknow", "Delhi", "Mumbai", "Kozhikode", "Bangalore", "Bhopal", "Aligarh"];

const photosMale = [
  "/tutor-ahmed.jpg",
  "/tutor-irfan.jpg",
  "/tutor-bilal.jpg",
  "/tutor-khaled.jpg"
];

const photosFemale = [
  "/tutor-female-icon.jpg",
  "/tutor-female-icon-2.jpg",
  "/tutor-female-icon-3.jpg",
  "/tutor-female-icon-4.jpg"
];

const tutors = [];

// 25 Tutors from Pakistan
const pakData = [
  { name: "Qari Muhammad Imran", gender: "male", spec: "Hifz Program, Advanced Tajweed", edu: "B.A. in Islamic Studies, Jamia Ashrafia Lahore" },
  { name: "Qaria Sumaira Younis", gender: "female", spec: "Noorani Qaida, Kids Islamic Studies", edu: "Alimah Degree, Jamia Hafsa Islamabad" },
  { name: "Qari Hafiz Irfan", gender: "male", spec: "Quran Translation & Tafseer", edu: "M.A. in Quranic Sciences, International Islamic University Islamabad" },
  { name: "Ustadha Aiman Shafeeq", gender: "female", spec: "Hifz-ul-Quran & Sisters Classes", edu: "Shahadat-ul-Alimiyyah, Jamia Binoria Karachi" },
  { name: "Qari Ikram Bilal", gender: "male", spec: "Noorani Qaida, Basic Tajweed", edu: "Diploma in Qira'at, Darul Uloom Karachi" },
  { name: "Ustadha Sumaira Khan", gender: "female", spec: "Kids Quran Memorization & Hifz", edu: "B.A. in Arabic Literature, Punjab University" },
  { name: "Sheikh Muhammad Ahmad", gender: "male", spec: "Islamic Studies & Seerah", edu: "Master's in Usul-ud-Din, IIUI Islamabad" },
  { name: "Qaria Rimshah Noor", gender: "female", spec: "Advanced Tajweed & Sisters Classes", edu: "Alimah Fazilah & Tajweed Specialist" },
  { name: "Qari Usman Ghani", gender: "male", spec: "Quran Reading & Tajweed Rules", edu: "Hafiz & Qari Degree, Jamia Naeemia Lahore" },
  { name: "Ustadha Maryam Siddiqui", gender: "female", spec: "Noorani Qaida & Daily Duas", edu: "B.S. Islamic Studies, Riphah University Rawalpindi" },
  { name: "Qari Tariq Jameel Al-Hafiz", gender: "male", spec: "Hifz Revision & Retention", edu: "Shahadat-ul-Alimiyyah, Jamia Tur Rasheed Karachi" },
  { name: "Qaria Sadia Parveen", gender: "female", spec: "Tajweed for Beginners & Kids", edu: "Alimah Course, Jamia Syeda Fatima Peshawar" },
  { name: "Sheikh Bilal Hassan", gender: "male", spec: "Quranic Arabic & Grammar", edu: "M.A. Arabic Language, Peshawar University" },
  { name: "Ustadha Zainab Bibi", gender: "female", spec: "Kids Hifz & Character Building", edu: "Hafiza & Alimah Degree, Multan" },
  { name: "Qari Hamza Farooq", gender: "male", spec: "Noorani Qaida & Quran Reading", edu: "Qira'at Certificate, Jamia Islamia Faisalabad" },
  { name: "Qaria Bushra Rashid", gender: "female", spec: "Sisters Tajweed & Quran Reading", edu: "Alimah Course, Jamia Fatima-tuz-Zahra Gujranwala" },
  { name: "Sheikh Asadullah Khan", gender: "male", spec: "Quran Translation & Daily Fiqh", edu: "M.Phil Islamic Studies, GCU Lahore" },
  { name: "Ustadha Hina Malik", gender: "female", spec: "Kids Noorani Qaida & Islamic Stories", edu: "B.Ed & Alimah Degree, Sialkot" },
  { name: "Qari Zubair Ahmed", gender: "male", spec: "Hifz Program & Sabqi Revision", edu: "Alim Course, Jamia Farooqia Karachi" },
  { name: "Qaria Aisha Rehman", gender: "female", spec: "Advanced Tajweed & Pronunciation", edu: "Master's in Islamic Studies, IIUI" },
  { name: "Sheikh Rizwan Qureshi", gender: "male", spec: "Quranic Tafseer & Seerah", edu: "M.A. Islamic Studies, Quetta University" },
  { name: "Ustadha Nabila Kausar", gender: "female", spec: "Noorani Qaida & Basic Prayer Rules", edu: "Alimah Degree, Jamia Imdadia Faisalabad" },
  { name: "Qari Saad Tariq", gender: "male", spec: "Tajweed Rules & Makharij Articulation", edu: "Qari Course, Wafaq-ul-Madaris Al-Arabia" },
  { name: "Ustadha Farhat Naz", gender: "female", spec: "Kids Quran Reading & Duas", edu: "B.A. Islamic Studies, Rawalpindi" },
  { name: "Sheikh Khurram Shahzad", gender: "male", spec: "Adult Quran Reading & Tajweed", edu: "M.A. Islamic Culture, Punjab University" }
];

pakData.forEach((item, index) => {
  const isMale = item.gender === 'male';
  tutors.push({
    id: `tutor-${index + 1}`,
    name: item.name,
    experience: `${5 + (index % 8)} Years`,
    languages: isMale ? ["English", "Urdu", "Arabic"] : ["English", "Urdu"],
    specialization: item.spec,
    photo: isMale ? photosMale[index % photosMale.length] : photosFemale[index % photosFemale.length],
    gender: item.gender,
    country: "Pakistan",
    city: pakistaniCities[index % pakistaniCities.length],
    countryFlag: "🇵🇰",
    rating: index % 2 === 0 ? 5.0 : 4.9,
    reviewsCount: 60 + (index * 5),
    isOnline: index % 2 === 0,
    isAvailableToday: index % 3 !== 0,
    subjects: item.spec.split('&').map(s => s.trim()),
    studentsTaught: 120 + (index * 8),
    lessonsCompleted: 2400 + (index * 150),
    responseTime: index % 2 === 0 ? "< 15 mins" : "< 30 mins",
    nextAvailableSlot: index % 2 === 0 ? "Today at 4:00 PM EST" : "Tomorrow at 10:00 AM EST",
    bio: `${item.name} is a highly dedicated ${item.gender === 'male' ? 'Qari and Islamic scholar' : 'Qaria and female instructor'} based in ${pakistaniCities[index % pakistaniCities.length]}, Pakistan. With over ${5 + (index % 8)} years of teaching experience, ${item.gender === 'male' ? 'he' : 'she'} has successfully guided hundreds of students in Western countries to recite the Holy Quran with proper Tajweed and spiritual devotion.`,
    education: item.edu,
    ijazahCertifications: [
      `Ijazah in Hafs 'an 'Asim`,
      `Sanad in Tajweed Rules from Wafaq-ul-Madaris`,
      `Verified OQTutor Senior Instructor Badge`
    ],
    teachingStyle: "Interactive, patient, and methodical. Utilizes color-coded digital Mushafs, step-by-step repetition, and positive reinforcement to build student confidence.",
    reviewsList: [
      {
        studentName: "Amir Khan",
        location: "Dallas, USA",
        rating: 5,
        date: "1 week ago",
        comment: `${item.name} is exceptional. My children look forward to every session!`
      },
      {
        studentName: "Farhana Begum",
        location: "London, UK",
        rating: 5,
        date: "3 weeks ago",
        comment: `Very punctual and extremely patient with beginners.`
      }
    ],
    faqs: [
      {
        question: `What age groups does ${item.name} teach?`,
        answer: `${item.name} teaches kids from age 4 and up, as well as adult students of all levels.`
      },
      {
        question: `Does ${item.name} provide homework?`,
        answer: `Yes, short daily practice assignments are provided after every lesson to reinforce learning.`
      }
    ]
  });
});

// 15 Tutors from Bangladesh
const bdData = [
  { name: "Mawlana Qari Hafizul Islam", gender: "male", spec: "Hifz Program & Tajweed", edu: "Master's in Islamic Studies, Aliah Madrasah Dhaka" },
  { name: "Ustadha Nasreen Sultana", gender: "female", spec: "Noorani Qaida & Kids Quran", edu: "Alimah Course, Jamia Shariyyah Malibagh Dhaka" },
  { name: "Qari Mahmudur Rahman", gender: "male", spec: "Quran Reading & Arabic Phonics", edu: "Kamil Degree, Chittagong Islamic University" },
  { name: "Ustadha Tasnim Akhtar", gender: "female", spec: "Tajweed & Sisters Quran Classes", edu: "Shahadat-ul-Alimiyyah, Sylhet" },
  { name: "Sheikh Tariqul Islam Al-Hafiz", gender: "male", spec: "Quran Translation & Tafseer", edu: "M.A. Islamic Studies, Rajshahi University" },
  { name: "Ustadha Sharmin Jahan", gender: "female", spec: "Noorani Qaida & Daily Duas", edu: "Alimah Degree, Comilla Islamic Center" },
  { name: "Qari Saidul Hassan", gender: "male", spec: "Hifz Revision & Qira'at", edu: "Qari Degree, Hathazari Madrasah Chittagong" },
  { name: "Ustadha Afroza Begum", gender: "female", spec: "Kids Quran & Islamic Etiquette", edu: "B.A. Islamic Studies, Khulna" },
  { name: "Sheikh Mizanur Rahman", gender: "male", spec: "Islamic Studies & Fiqh", edu: "Kamil Degree, Dhaka Aliah" },
  { name: "Ustadha Jesmin Akter", gender: "female", spec: "Tajweed Rules & Quran Reading", edu: "Alimah Degree, Mymensingh" },
  { name: "Qari Aminul Hoque", gender: "male", spec: "Noorani Qaida & Pronunciation", edu: "Shahadat-ul-Alimiyyah, Sylhet" },
  { name: "Ustadha Farhana Chowdhury", gender: "female", spec: "Kids Hifz & Daily Azkar", edu: "Alimah Fazilah, Chittagong" },
  { name: "Sheikh Nazmul Huda", gender: "male", spec: "Quranic Arabic & Grammar", edu: "M.A. Arabic, Dhaka University" },
  { name: "Ustadha Rabeya Khatun", gender: "female", spec: "Noorani Qaida & Basic Prayer", edu: "Alimah Degree, Barisal" },
  { name: "Qari Kazi Mustafizur Rahman", gender: "male", spec: "Tajweed & Quran Recitation", edu: "Qari & Hafiz Degree, Dhaka" }
];

bdData.forEach((item, index) => {
  const isMale = item.gender === 'male';
  tutors.push({
    id: `tutor-${25 + index + 1}`,
    name: item.name,
    experience: `${4 + (index % 7)} Years`,
    languages: ["English", "Bengali", "Arabic"],
    specialization: item.spec,
    photo: isMale ? photosMale[index % photosMale.length] : photosFemale[index % photosFemale.length],
    gender: item.gender,
    country: "Bangladesh",
    city: bangladeshiCities[index % bangladeshiCities.length],
    countryFlag: "🇧🇩",
    rating: index % 2 === 0 ? 5.0 : 4.9,
    reviewsCount: 45 + (index * 6),
    isOnline: index % 2 !== 0,
    isAvailableToday: true,
    subjects: item.spec.split('&').map(s => s.trim()),
    studentsTaught: 90 + (index * 7),
    lessonsCompleted: 1900 + (index * 140),
    responseTime: "< 20 mins",
    nextAvailableSlot: "Today at 5:00 PM EST",
    bio: `${item.name} is a renowned Quran instructor from ${bangladeshiCities[index % bangladeshiCities.length]}, Bangladesh. ${item.gender === 'male' ? 'He' : 'She'} brings deep scholarly expertise and a patient teaching method, helping Bengali and international students master Quran reading, Tajweed rules, and Islamic values.`,
    education: item.edu,
    ijazahCertifications: [
      `Ijazah in Tajweed & Quran Recitation`,
      `BEFOK National Islamic Education Certificate`,
      `OQTutor Verified Teacher Certification`
    ],
    teachingStyle: "Clear, encouraging, and interactive. Focuses heavily on phonetic accuracy, gentle corrections, and daily revision routines.",
    reviewsList: [
      {
        studentName: "Shafiqul Islam",
        location: "New York, USA",
        rating: 5,
        date: "2 weeks ago",
        comment: `${item.name} explains Tajweed concepts so clearly. Highly recommended for families in the US!`
      }
    ],
    faqs: [
      {
        question: `Can ${item.name} teach in Bengali and English?`,
        answer: `Yes, ${item.name} is fully bilingual and can explain rules in both English and Bengali.`
      }
    ]
  });
});

// 10 Tutors from India
const inData = [
  { name: "Qari Maulana Syed Owais", gender: "male", spec: "Advanced Tajweed & Hifz", edu: "Alim Degree, Darul Uloom Deoband" },
  { name: "Ustadha Fatima Anjum", gender: "female", spec: "Noorani Qaida & Kids Learning", edu: "Alimah Course, Jamia Nizamia Hyderabad" },
  { name: "Sheikh Hafiz Rizwan Ahmed", gender: "male", spec: "Quran Reading & Arabic", edu: "Fazilat Degree, Nadwatul Ulama Lucknow" },
  { name: "Ustadha Asma Naaz", gender: "female", spec: "Tajweed & Sisters Quran Classes", edu: "B.A. Islamic Studies, Jamia Millia Islamia Delhi" },
  { name: "Qari Mohammed Zeeshan", gender: "male", spec: "Hifz Program & Sabqi Revision", edu: "Qari Degree, Darul Uloom Hyderabad" },
  { name: "Ustadha Shabana Begum", gender: "female", spec: "Kids Hifz & Daily Duas", edu: "Alimah Fazilah, Mumbai" },
  { name: "Sheikh Abdul Qadir Al-Hafiz", gender: "male", spec: "Quran Translation & Tafseer", edu: "M.A. Arabic, Aligarh Muslim University" },
  { name: "Ustadha Shaheen Akhtar", gender: "female", spec: "Noorani Qaida & Basic Prayer", edu: "Alimah Degree, Kozhikode Kerala" },
  { name: "Qari Imran Hussain", gender: "male", spec: "Tajweed Articulation & Makharij", edu: "Fazilat Degree, Bhopal" },
  { name: "Ustadha Nida Shireen", gender: "female", spec: "Kids Quran & Islamic Ethics", edu: "B.A. Arabic, Bangalore University" }
];

inData.forEach((item, index) => {
  const isMale = item.gender === 'male';
  tutors.push({
    id: `tutor-${40 + index + 1}`,
    name: item.name,
    experience: `${6 + (index % 6)} Years`,
    languages: ["English", "Hindi", "Urdu"],
    specialization: item.spec,
    photo: isMale ? photosMale[index % photosMale.length] : photosFemale[index % photosFemale.length],
    gender: item.gender,
    country: "India",
    city: indianCities[index % indianCities.length],
    countryFlag: "🇮🇳",
    rating: 5.0,
    reviewsCount: 75 + (index * 8),
    isOnline: index % 2 === 0,
    isAvailableToday: true,
    subjects: item.spec.split('&').map(s => s.trim()),
    studentsTaught: 140 + (index * 10),
    lessonsCompleted: 3100 + (index * 200),
    responseTime: "< 15 mins",
    nextAvailableSlot: "Today at 6:30 PM EST",
    bio: `${item.name} is a distinguished Qari and educator from ${indianCities[index % indianCities.length]}, India. With academic credentials from premier Islamic institutes like ${item.edu.split(',')[1] || 'Darul Uloom'}, ${item.gender === 'male' ? 'he' : 'she'} specializes in delivering structured 1-on-1 Quran classes in fluent English, Hindi, and Urdu.`,
    education: item.edu,
    ijazahCertifications: [
      `Ijazah in Hafs 'an 'Asim & Tajweed Rules`,
      `Sanad from Recognized Islamic Seminary`,
      `OQTutor Certified Senior Teacher`
    ],
    teachingStyle: "Warm, energetic, and practical. Combines classical vocal techniques with modern screen-sharing whiteboard tools.",
    reviewsList: [
      {
        studentName: "Dr. Farooq Siddiqui",
        location: "Chicago, USA",
        rating: 5,
        date: "1 month ago",
        comment: `${item.name} is wonderful with my children. Great teaching methodology!`
      }
    ],
    faqs: [
      {
        question: `What language options does ${item.name} offer?`,
        answer: `${item.name} conducts classes in English, Hindi, and Urdu.`
      }
    ]
  });
});

console.log(`Generated ${tutors.length} tutors!`);

// Load existing db.json, update tutors key, and save back
const dbPath = path.join(__dirname, 'db.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
dbData.tutors = tutors;
fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2), 'utf8');

console.log("Successfully updated db.json with 50 tutors!");
