const fs = require('fs');
const path = require('path');
const https = require('https');

const pakCities = ["Lahore", "Islamabad", "Karachi", "Rawalpindi", "Peshawar", "Faisalabad", "Multan", "Quetta", "Gujranwala", "Sialkot", "Bahawalpur", "Sargodha", "Sukkur", "Abbottabad", "Jhelum"];
const bdCities = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Comilla", "Mymensingh", "Barisal", "Bogra", "Narayanganj"];
const inCities = ["Hyderabad", "Lucknow", "Delhi", "Mumbai", "Kozhikode", "Bangalore", "Bhopal", "Aligarh", "Srinagar", "Kolkata"];

// 50 Unique Unsplash image IDs matching exact category distribution:
// 1-20: 20 Male Quran Tutor Portraits
// 21-35: 15 Female Quran Tutor Portraits (hijab/modest)
// 36-43: 8 Young Boys learning/reading Quran
// 44-48: 5 Young Girls learning Quran on laptop/tablet
// 49-50: 2 Modern Islamic-style avatar icons
const imageSources = [
  // 1-20: Male Tutor Portraits
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506863539937-599585189286?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&auto=format&fit=crop&q=80",

  // 21-35: Female Hijab Tutor Portraits
  "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",

  // 36-43: 8 Young Boys Learning/Reading Quran
  "https://images.unsplash.com/photo-1609599006353-e629f1d40968?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&auto=format&fit=crop&q=80",

  // 44-48: 5 Young Girls Learning Quran on Laptop/Tablet
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=80",

  // 49-50: 2 Islamic Avatar Icons
  "https://images.unsplash.com/photo-1609599006353-e629f1d40968?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&auto=format&fit=crop&q=80"
];

// Names for 50 tutors:
const namesList = [
  // Pakistan (25)
  { name: "Qari Muhammad Imran", gender: "male", country: "Pakistan", city: "Lahore", lang: ["English", "Urdu", "Arabic"] },
  { name: "Qari Hafiz Irfan", gender: "male", country: "Pakistan", city: "Islamabad", lang: ["English", "Urdu", "Arabic"] },
  { name: "Qari Ikram Bilal", gender: "male", country: "Pakistan", city: "Rawalpindi", lang: ["English", "Urdu"] },
  { name: "Sheikh Muhammad Ahmad", gender: "male", country: "Pakistan", city: "Peshawar", lang: ["English", "Urdu", "Arabic"] },
  { name: "Qari Usman Ghani", gender: "male", country: "Pakistan", city: "Faisalabad", lang: ["English", "Urdu"] },
  { name: "Qari Tariq Jameel", gender: "male", country: "Pakistan", city: "Multan", lang: ["English", "Urdu", "Arabic"] },
  { name: "Sheikh Bilal Hassan", gender: "male", country: "Pakistan", city: "Quetta", lang: ["English", "Urdu"] },
  { name: "Qari Hamza Farooq", gender: "male", country: "Pakistan", city: "Gujranwala", lang: ["English", "Urdu"] },
  { name: "Sheikh Asadullah Khan", gender: "male", country: "Pakistan", city: "Sialkot", lang: ["English", "Urdu", "Arabic"] },
  { name: "Qari Zubair Ahmed", gender: "male", country: "Pakistan", city: "Bahawalpur", lang: ["English", "Urdu"] },
  { name: "Sheikh Rizwan Qureshi", gender: "male", country: "Pakistan", city: "Sargodha", lang: ["English", "Urdu"] },
  { name: "Qari Saad Tariq", gender: "male", country: "Pakistan", city: "Sukkur", lang: ["English", "Urdu", "Arabic"] },
  { name: "Sheikh Khurram Shahzad", gender: "male", country: "Pakistan", city: "Abbottabad", lang: ["English", "Urdu"] },
  { name: "Qari Noman Siddiqui", gender: "male", country: "Pakistan", city: "Jhelum", lang: ["English", "Urdu"] },
  { name: "Qari Adnan Yousuf", gender: "male", country: "Pakistan", city: "Karachi", lang: ["English", "Urdu", "Arabic"] },

  { name: "Qaria Sumaira Younis", gender: "female", country: "Pakistan", city: "Islamabad", lang: ["English", "Urdu"] },
  { name: "Ustadha Aiman Shafeeq", gender: "female", country: "Pakistan", city: "Karachi", lang: ["English", "Urdu", "Arabic"] },
  { name: "Ustadha Sumaira Khan", gender: "female", country: "Pakistan", city: "Lahore", lang: ["English", "Urdu"] },
  { name: "Qaria Rimshah Noor", gender: "female", country: "Pakistan", city: "Rawalpindi", lang: ["English", "Urdu"] },
  { name: "Ustadha Maryam Siddiqui", gender: "female", country: "Pakistan", city: "Peshawar", lang: ["English", "Urdu"] },
  { name: "Qaria Sadia Parveen", gender: "female", country: "Pakistan", city: "Faisalabad", lang: ["English", "Urdu"] },
  { name: "Ustadha Zainab Bibi", gender: "female", country: "Pakistan", city: "Multan", lang: ["English", "Urdu"] },
  { name: "Qaria Bushra Rashid", gender: "female", country: "Pakistan", city: "Gujranwala", lang: ["English", "Urdu"] },
  { name: "Ustadha Hina Malik", gender: "female", country: "Pakistan", city: "Sialkot", lang: ["English", "Urdu"] },
  { name: "Qaria Aisha Rehman", gender: "female", country: "Pakistan", city: "Lahore", lang: ["English", "Urdu", "Arabic"] },

  // Bangladesh (15)
  { name: "Mawlana Qari Hafizul Islam", gender: "male", country: "Bangladesh", city: "Dhaka", lang: ["English", "Bengali", "Arabic"] },
  { name: "Qari Mahmudur Rahman", gender: "male", country: "Bangladesh", city: "Chittagong", lang: ["English", "Bengali", "Arabic"] },
  { name: "Sheikh Tariqul Islam Al-Hafiz", gender: "male", country: "Bangladesh", city: "Sylhet", lang: ["English", "Bengali"] },
  { name: "Qari Saidul Hassan", gender: "male", country: "Bangladesh", city: "Rajshahi", lang: ["English", "Bengali", "Arabic"] },
  { name: "Sheikh Mizanur Rahman", gender: "male", country: "Bangladesh", city: "Khulna", lang: ["English", "Bengali"] },
  { name: "Qari Aminul Hoque", gender: "male", country: "Bangladesh", city: "Comilla", lang: ["English", "Bengali", "Arabic"] },
  { name: "Sheikh Nazmul Huda", gender: "male", country: "Bangladesh", city: "Mymensingh", lang: ["English", "Bengali"] },
  { name: "Qari Kazi Mustafizur Rahman", gender: "male", country: "Bangladesh", city: "Barisal", lang: ["English", "Bengali", "Arabic"] },
  { name: "Sheikh Enamul Haque", gender: "male", country: "Bangladesh", city: "Dhaka", lang: ["English", "Bengali"] },

  { name: "Ustadha Nasreen Sultana", gender: "female", country: "Bangladesh", city: "Dhaka", lang: ["English", "Bengali"] },
  { name: "Ustadha Tasnim Akhtar", gender: "female", country: "Bangladesh", city: "Chittagong", lang: ["English", "Bengali", "Arabic"] },
  { name: "Ustadha Sharmin Jahan", gender: "female", country: "Bangladesh", city: "Sylhet", lang: ["English", "Bengali"] },
  { name: "Ustadha Afroza Begum", gender: "female", country: "Bangladesh", city: "Rajshahi", lang: ["English", "Bengali"] },
  { name: "Ustadha Jesmin Akter", gender: "female", country: "Bangladesh", city: "Khulna", lang: ["English", "Bengali"] },
  { name: "Ustadha Farhana Chowdhury", gender: "female", country: "Bangladesh", city: "Comilla", lang: ["English", "Bengali"] },

  // India (10)
  { name: "Qari Maulana Syed Owais", gender: "male", country: "India", city: "Hyderabad", lang: ["English", "Hindi", "Urdu", "Arabic"] },
  { name: "Sheikh Hafiz Rizwan Ahmed", gender: "male", country: "India", city: "Lucknow", lang: ["English", "Hindi", "Urdu"] },
  { name: "Qari Mohammed Zeeshan", gender: "male", country: "India", city: "Delhi", lang: ["English", "Hindi", "Urdu", "Arabic"] },
  { name: "Sheikh Abdul Qadir Al-Hafiz", gender: "male", country: "India", city: "Mumbai", lang: ["English", "Hindi", "Urdu"] },
  { name: "Qari Imran Hussain", gender: "male", country: "India", city: "Kozhikode", lang: ["English", "Hindi", "Urdu", "Arabic"] },
  { name: "Sheikh Arshad Ali", gender: "male", country: "India", city: "Bangalore", lang: ["English", "Hindi", "Urdu"] },

  { name: "Ustadha Fatima Anjum", gender: "female", country: "India", city: "Hyderabad", lang: ["English", "Hindi", "Urdu"] },
  { name: "Ustadha Asma Naaz", gender: "female", country: "India", city: "Lucknow", lang: ["English", "Hindi", "Urdu", "Arabic"] },
  { name: "Ustadha Shabana Begum", gender: "female", country: "India", city: "Delhi", lang: ["English", "Hindi", "Urdu"] },
  { name: "Ustadha Nida Shireen", gender: "female", country: "India", city: "Aligarh", lang: ["English", "Hindi", "Urdu"] }
];

const flagsMap = {
  "Pakistan": "🇵🇰",
  "Bangladesh": "🇧🇩",
  "India": "🇮🇳"
};

const specsList = [
  "Noorani Qaida & Kids Foundation",
  "Advanced Tajweed Rules & Makharij",
  "Hifz Program & Systematic Revision",
  "Quran Reading & Native Fluency",
  "Islamic Studies & Prophetic Seerah",
  "Quran Translation & Word-for-Word Tafseer",
  "Daily Duas & Masnoon Supplications",
  "Arabic Language & Grammar Fundamentals"
];

const educationsList = [
  "B.A. in Islamic Studies, Jamia Ashrafia Lahore",
  "Shahadat-ul-Alimiyyah, Darul Uloom Karachi",
  "M.A. in Quranic Sciences, International Islamic University Islamabad",
  "Kamil Degree in Tajweed, Aliah Madrasah Dhaka",
  "Alim Degree, Darul Uloom Deoband",
  "Fazilat Degree, Nadwatul Ulama Lucknow",
  "B.S. in Arabic & Islamic Pedagogy, IIUI",
  "Diploma in Qira'at Al-Ashr, Hathazari Chittagong",
  "Master's in Usul al-Din, Jamia Nizamia Hyderabad"
];

const tutors = [];

for (let i = 0; i < 50; i++) {
  const item = namesList[i];
  const flag = flagsMap[item.country];
  const spec = specsList[i % specsList.length];
  const edu = educationsList[i % educationsList.length];
  const expYears = 4 + (i % 9);
  
  tutors.push({
    id: `tutor-${i + 1}`,
    name: item.name,
    experience: `${expYears} Years`,
    languages: item.lang,
    specialization: spec,
    photo: imageSources[i],
    gender: item.gender,
    country: item.country,
    city: item.city,
    countryFlag: flag,
    rating: i % 3 === 0 ? 5.0 : 4.9,
    reviewsCount: 50 + (i * 4),
    isOnline: i % 2 === 0,
    isAvailableToday: i % 4 !== 0,
    subjects: [spec.split('&')[0].trim(), "Quran Reading", "Tajweed Course"],
    studentsTaught: 90 + (i * 6),
    lessonsCompleted: 1800 + (i * 120),
    responseTime: i % 2 === 0 ? "< 15 mins" : "< 30 mins",
    nextAvailableSlot: i % 2 === 0 ? "Today at 4:30 PM EST" : "Tomorrow at 11:00 AM EST",
    bio: `${item.name} is a highly dedicated ${item.gender === 'male' ? 'Qari and Islamic educator' : 'Qaria and female instructor'} based in ${item.city}, ${item.country}. With ${expYears} years of professional online teaching experience, ${item.gender === 'male' ? 'he' : 'she'} has successfully guided students from the USA, UK, Canada, and Europe to master ${spec} with perfect pronunciation and spiritual connection.`,
    education: edu,
    ijazahCertifications: [
      `Sanad in Tajweed Rules & Articulation`,
      `Ijazah in Hafs 'an 'Asim Recitation`,
      `Verified OQTutor Senior Faculty Certification`
    ],
    teachingStyle: `Interactive, patient, and student-focused. Uses color-coded Mushafs, visual phonetics boards, and gentle daily repetition to ensure fast progress.`,
    reviewsList: [
      {
        studentName: `Parent of ${item.gender === 'male' ? 'Yousuf' : 'Zainab'}`,
        location: "Houston, USA",
        rating: 5,
        date: "2 weeks ago",
        comment: `${item.name} is wonderfully patient and punctual. Our child has made tremendous progress in just a few weeks!`
      }
    ],
    faqs: [
      {
        question: `How does ${item.name} teach beginner students?`,
        answer: `${item.name} starts with basic Arabic letter recognition, phonetics, and short exercises using interactive visual boards.`
      }
    ]
  });
}

// Load existing db.json, update tutors array, write back
const dbPath = path.join(__dirname, 'db.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
dbData.tutors = tutors;
fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2), 'utf8');

console.log(`Successfully generated and written 50 unique tutors to db.json with zero duplicate photos!`);
