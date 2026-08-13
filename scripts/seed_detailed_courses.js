const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../src/data/db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const detailedCourses = [
  {
    "id": "course-1",
    "title": "Noorani Qaida",
    "slug": "noorani-qaida",
    "description": "The foundational course for beginners. Learn Arabic alphabet pronunciation, rules of phonetics, and basic reading skills.",
    "icon": "BookOpen",
    "image": "/noorani-qaida.jpg",
    "duration": "2-3 Months",
    "suitableFor": "Kids & Adults",
    "overview": "Learn Arabic alphabet, correct pronunciation (Makharij), and how to connect letters to read complete sentences. This course is the essential starting point for proper Quran recitation.",
    "learningOutcomes": [
      "Pronounce Arabic alphabet with correct articulation points",
      "Understand basic phonics rules and signs (Fathah, Kasrah, Dammah)",
      "Recognize compound letters and symbols",
      "Read basic Quranic words and short sentences with correct flow"
    ],
    "classStructure": "One-on-One, 30 min classes, 3 to 5 times per week.",
    "recommendedAge": "Ages 4 and above",
    "seoTitle": "Learn Noorani Qaida Online | Foundational Arabic Phonics Course",
    "metaDescription": "Learn Noorani Qaida online with qualified tutors. Master Arabic letters pronunciation, Makharij rules, and basic reading from home. Sign up for 3 free trials.",
    "focusKeyword": "Learn Noorani Qaida Online",
    "secondaryKeywords": ["Noorani Qaida for kids", "Arabic letters pronunciation", "Makharij rules", "online Qaida classes"],
    "whoShouldJoin": "This course is designed specifically for absolute beginners of all ages, including young children from age 4 and adults who are starting to read the Arabic script for the first time.",
    "benefits": [
      "Provides the ultimate building block for authentic Quran recitation",
      "Interactive digital Qaida materials customized for kids",
      "1-on-1 focus ensures correct letter sound recognition from day one",
      "Builds high confidence before moving to full Quran reading"
    ],
    "curriculumSteps": [
      { "title": "Arabic Alphabet Recognition", "description": "Mastering the individual shapes, names, and variations of all 28 Arabic letters in written form." },
      { "title": "Correct Articulation (Makharij)", "description": "Training the throat and tongue positions to vocalize throat and mouth letters accurately." },
      { "title": "Vowel Movements (Harakat)", "description": "Studying short vowels (Fathah, Kasrah, Dammah) and long vowels (Madd letters)." },
      { "title": "Joint Letter Formations", "description": "Learning how letters change shapes when joined together in words and sentences." }
    ],
    "teachingMethod": "We utilize interactive visual boards, colorful flashcards, and step-by-step repetition to make learning fun for children and highly structured for adults.",
    "faqs": [
      { "question": "How long does it take to complete Noorani Qaida?", "answer": "On average, a young student takes about 2 to 3 months to complete the Qaida, depending on class frequency and individual learning pace." },
      { "question": "Can adults join this Qaida course?", "answer": "Yes! We have custom versions of Noorani Qaida tailored for adult beginners who wish to learn correct Arabic pronunciation from scratch." }
    ]
  },
  {
    "id": "course-2",
    "title": "Learn Quran Reading",
    "slug": "quran-reading",
    "description": "Transition from foundation to reading the Holy Quran with proper flow and connection of letters.",
    "icon": "BookOpen",
    "image": "/quran-reading.jpg",
    "duration": "6-12 Months",
    "suitableFor": "All Ages",
    "overview": "For students who have completed Noorani Qaida and want to read the Holy Quran with fluency, rhythm, and confidence under the guidance of native Quran scholars.",
    "learningOutcomes": [
      "Read the Holy Quran with native fluency and proper rhythm",
      "Understand primary connection and pausing symbols",
      "Improve general pronunciation accuracy",
      "Build daily recitation habits and love for the Quran"
    ],
    "classStructure": "One-on-One, 30 min classes, 3 to 5 times per week.",
    "recommendedAge": "Ages 6 and above",
    "seoTitle": "Learn Quran Reading Online | Read Holy Quran Fluently",
    "metaDescription": "Develop native fluency in reading the Holy Quran. Study letter connection, pauses symbols, and recite smoothly with expert tutors. Book 3 free trial sessions.",
    "focusKeyword": "Learn Quran Reading",
    "secondaryKeywords": ["online Quran reading", "read Quran fluently", "Quran reading for beginners", "kids Quran reading classes"],
    "whoShouldJoin": "Perfect for students who already know the Arabic letters (or finished Noorani Qaida) and want to transition into reciting full verses of the Holy Quran.",
    "benefits": [
      "One-on-one session pacing customized to the student's personal reading speed",
      "Immediate corrections to prevent reading habits with incorrect vowel pronunciation",
      "Systematic progress tracking chapter by chapter",
      "Flexible schedule that easily integrates into busy family routines"
    ],
    "curriculumSteps": [
      { "title": "Connecting Verses", "description": "Learning rules to bridge words together smoothly without stuttering or stopping." },
      { "title": "Pausing Rules (Waqf)", "description": "Identifying punctuation symbols in the Quran that dictate where to stop and resume reading." },
      { "title": "Short Surah Reading", "description": "Applying letter rules by reading Juz Amma (30th Chapter) with correct rhythm." },
      { "title": "Fluent Quran Recitation", "description": "Progressive reading of the rest of the Quran chapters with increasing speed and comfort." }
    ],
    "teachingMethod": "Our tutors guide students word-by-word, focusing on ear training, pronunciation, and progressive reading cards that boost confidence.",
    "faqs": [
      { "question": "What is the next step after finishing Quran Reading?", "answer": "The next step is the Quran with Tajweed course, where students master advanced recitation rules and classical phonetics." },
      { "question": "Can I read at my own pace?", "answer": "Absolutely. Since all classes are one-on-one, your teacher will adapt completely to your preferred comfort and learning speed." }
    ]
  },
  {
    "id": "course-3",
    "title": "Quran with Tajweed",
    "slug": "quran-with-tajweed",
    "description": "Master the rules of Tajweed (pronunciation and articulation). Learn characteristics of letters, stopping rules, and elongation.",
    "icon": "Volume2",
    "image": "/quran-tajweed.jpg",
    "duration": "6-8 Months",
    "suitableFor": "Intermediate",
    "overview": "Learn the theoretical and practical rules of Tajweed. Train your tongue to avoid hidden mistakes and recite the Quran exactly the way it was revealed to Prophet Muhammad (PBUH).",
    "learningOutcomes": [
      "Understand all primary Tajweed rules (Ghunnah, Ikhfa, Idghaam, Qalqalah)",
      "Identify and apply stopping (Waqf) and elongation (Madd) rules",
      "Eliminate mistakes in vowel sounds and letter characteristics",
      "Recite with authentic classical Arabic articulation"
    ],
    "classStructure": "One-on-One, 30 min classes, 3 to 5 times per week.",
    "recommendedAge": "Ages 8 and above",
    "seoTitle": "Learn Quran Online with Tajweed – One-on-One Live Classes",
    "metaDescription": "Learn Quran online with Tajweed from certified teachers. Private, one-on-one Quran classes for beginners focused on correct pronunciation, recitation, and Tajweed rules. Book a free trial class today.",
    "focusKeyword": "Quran with Tajweed",
    "secondaryKeywords": ["online Tajweed classes", "learn Tajweed rules", "Tajweed teacher online", "Tajweed for sisters"],
    "whoShouldJoin": "Designed for intermediate readers who can already read the Quran but want to correct recitation errors, learn phonetics rules, and match beautiful, classical recitations.",
    "benefits": [
      "Direct guidance from scholars holding authentic academic Ijazah",
      "Deep understanding of classical Arabic vowel rules",
      "Confidence to lead prayers and recite beautifully in public",
      "Flexible, customized syllabus tailored to your current level"
    ],
    "curriculumSteps": [
      { "title": "Noon and Meem Sakinah Rules", "description": "Mastering nasalization (Ghunnah), concealment (Ikhfa), and absorption (Idghaam) rules." },
      { "title": "Echoing Sounds (Qalqalah)", "description": "Learning how and when to bounce specific letters when they carry a stillness sign (Sukun)." },
      { "title": "Elongation Rules (Madd)", "description": "Understanding short and long breath expansions over specific vowel configurations." },
      { "title": "Practical Application", "description": "Live reading of selected Quranic chapters under strict teacher supervision and certification." }
    ],
    "teachingMethod": "We combine theoretical explanation slides with heavy practical drilling during live class recitation, showing mouth positions via high-definition video call.",
    "faqs": [
      { "question": "Why is Tajweed important?", "answer": "Tajweed preserves the authentic pronunciation of Quranic Arabic, protecting the reader from changing the meanings of Allah's words." },
      { "question": "Do female teachers teach sisters?", "answer": "Yes, we have certified female scholars who teach Tajweed classes exclusively for sisters and kids." }
    ]
  },
  {
    "id": "course-4",
    "title": "Quran Memorization (Hifz)",
    "slug": "hifz-quran",
    "description": "Memorize the Holy Quran step-by-step under the guidance of Huffaz with modern memorization and revision techniques.",
    "icon": "Heart",
    "image": "/quran-hifz.jpg",
    "duration": "Flexible (Custom pace)",
    "suitableFor": "Intermediate & Advanced",
    "overview": "A systematic, step-by-step course to memorize parts or the entirety of the Holy Quran. Led by expert Huffaz utilizing modern revision trackers and memory retention techniques.",
    "learningOutcomes": [
      "Memorize selected Surahs or the entire Quran with Tajweed",
      "Establish a solid revision schedule (Manzil and Sabqi)",
      "Master memory retention and mental discipline skills",
      "Receive standard graduation certificate on Hifz completion"
    ],
    "classStructure": "One-on-One customized sessions, 3 to 7 times per week.",
    "recommendedAge": "Ages 7 and above",
    "seoTitle": "Online Hifz Classes | Memorize Quran Online step-by-step",
    "metaDescription": "Memorize the Holy Quran online with certified Huffaz tutors. Structured revision trackers, flexible schedules, and customized Hifz plans. Start with 3 free trials.",
    "focusKeyword": "Hifz Quran",
    "secondaryKeywords": ["online Hifz classes", "memorize Quran online", "Quran memorization for kids", "Hifz program online"],
    "whoShouldJoin": "Aimed at intermediate to advanced students who can recite the Quran fluently with basic Tajweed rules and are committed to memorizing pages or the entire Book of Allah.",
    "benefits": [
      "Custom-tailored memorization plans adapted to the student's memory capability",
      "Systematic revision models (Sabqi, Sabqee, Manzil) to prevent forgetting",
      "Constant encouragement and spiritual companionship from Huffaz teachers",
      "Progress dashboards to track pages memorized and memorization quality"
    ],
    "curriculumSteps": [
      { "title": "New Memorization (Sabq)", "description": "Daily memorizing of new verses under teacher guidance to ensure correct recitation." },
      { "title": "Recent Revision (Sabqi)", "description": "Revising the last 5-10 pages memorized to solidify recent neural memory connections." },
      { "title": "Old Revision (Manzil)", "description": "Reviewing older parts of the Quran to ensure long-term retention and fluent recall." },
      { "title": "Hifz Assessment", "description": "Regular oral examinations to check memory strength and award Quran graduation certificates." }
    ],
    "teachingMethod": "Our teachers use interactive memorization grids, audio recording reviews, and progressive daily checklists to maintain motivation.",
    "faqs": [
      { "question": "Can I memorize only a few short Surahs?", "answer": "Yes! We have short-term Hifz programs for memorizing Juz Amma, selected Surahs (like Ya-Sin, Al-Mulk, Kahf), or full Hifz." },
      { "question": "How long does full Hifz take?", "answer": "It varies. With 5 classes per week, dedicated students usually complete the entire Quran memorization in 2 to 4 years." }
    ]
  },
  {
    "id": "course-9",
    "title": "Online Quran Classes for Kids",
    "slug": "online-quran-classes-for-kids",
    "description": "Fun, interactive, and child-friendly online Quran classes designed specifically to keep young minds engaged.",
    "icon": "Users",
    "image": "/mission-call.jpg",
    "duration": "Ongoing",
    "suitableFor": "Kids (Ages 4-15)",
    "overview": "Provide your children with a strong spiritual foundation. Our child-friendly pedagogy uses digital boards, points rewards, and patient certified teachers to teach Quran with fun.",
    "learningOutcomes": [
      "Recite Quran with proper basic Tajweed rules confidently",
      "Memorize short Surahs for daily prayers (Salah)",
      "Develop solid moral values and basic Islamic manners",
      "Love the process of learning the Holy Quran"
    ],
    "classStructure": "One-on-One, 30 min classes, 2 to 5 times per week.",
    "recommendedAge": "Ages 4 to 15",
    "seoTitle": "Online Quran Classes for Kids | Child-Friendly Quran Academy",
    "metaDescription": "Sign up your children for online Quran classes. Patient male and female teachers, game-based learning, weekly reports, and flexible schedules. Try 3 free classes.",
    "focusKeyword": "Quran Classes for Kids",
    "secondaryKeywords": ["online Quran academy for kids", "kids Quran teacher", "learn Quran for kids", "child-friendly Quran classes"],
    "whoShouldJoin": "Perfect for Muslim parents living in the UK, Europe, or the West who want their children to learn Quran reading, Tajweed, and Islamic etiquette from qualified, patient teachers.",
    "benefits": [
      "Patient male and female scholars trained in kids psychology",
      "Weekly progress updates and monthly report cards emailed to parents",
      "Interactive slides, educational games, and positive reward charts",
      "Classes fit easily around school schedules and weekend activities"
    ],
    "curriculumSteps": [
      { "title": "Arabic Foundations", "description": "Interactive alphabet phonics and correct articulation exercises." },
      { "title": "Basic Quran Reading", "description": "Connecting letter blocks and reading short Quranic phrases with flow." },
      { "title": "Salah & Dua Memorization", "description": "Learning daily prayers, Wudu steps, and basic Islamic manners." },
      { "title": "Short Surah Hifz", "description": "Memorizing the last 15 Surahs of the Quran with beautiful Tajweed." }
    ],
    "teachingMethod": "We use colorful digital slides, reward milestones, and short interactive sessions (30 mins) to prevent fatigue and maintain interest.",
    "faqs": [
      { "question": "What is the best age for kids to start?", "answer": "We recommend starting from 4 or 5 years old. Our introductory lessons are highly visual to keep them focused." },
      { "question": "Can I sit with my child during class?", "answer": "Yes, parents are welcome to sit in and watch their child's progress, especially during the free trial classes." }
    ]
  },
  {
    "id": "course-10",
    "title": "Online Quran Classes for Adults",
    "slug": "online-quran-classes-for-adults",
    "description": "Flexible, private one-on-one Quran reading and Tajweed lessons tailored for busy working professionals and adults.",
    "icon": "UserCheck",
    "image": "/tutor-ahmed.jpg",
    "duration": "Flexible (Custom pace)",
    "suitableFor": "Adults (Ages 16+)",
    "overview": "It is never too late to learn. Our adults course respects your busy schedule, providing completely private, one-on-one sessions that focus on reading correction, Tajweed, or memorization.",
    "learningOutcomes": [
      "Correct hidden recitation mistakes in daily prayers",
      "Understand the translation and meanings of key Surahs",
      "Recite the Quran with complete Tajweed and confidence",
      "Flexible schedule adjustment to accommodate work travel"
    ],
    "classStructure": "One-on-One private sessions, 24/7 flexible bookings.",
    "recommendedAge": "Ages 16 and above",
    "seoTitle": "Online Quran Classes for Adults | Private 1-on-1 Lessons",
    "metaDescription": "Learn Quran online as an adult. Private, flexible, one-on-one classes with certified scholars. Choose male or female teachers. Sign up for 3 free trials.",
    "focusKeyword": "Quran Classes for Adults",
    "secondaryKeywords": ["online Quran teacher for adults", "adult Quran reading", "private Quran tutor", "learn Tajweed for adults"],
    "whoShouldJoin": "Designed for adult Muslims, busy professionals, converts, and university students who want to improve their Quran reading, learn Tajweed, or study Tafseer at their own pace.",
    "benefits": [
      "100% private one-on-one learning environment for maximum comfort",
      "Flexible schedules that operate 24/7—book morning, evening, or weekend classes",
      "Customize the curriculum: focus on reading speed, deep Tajweed, or memorization",
      "Choose qualified male or female scholars holding authentic degrees"
    ],
    "curriculumSteps": [
      { "title": "Current Level Evaluation", "description": "Assessing your current reading speed and identifying pronunciation gaps." },
      { "title": "Pronunciation Correction", "description": "Fixing common mistakes in vowels and letter lengths in daily Surahs." },
      { "title": "Tajweed Rules Application", "description": "Applying rules of Waqf, Qalqalah, and Ghunnah to everyday recitation." },
      { "title": "Tafseer & Translation", "description": "Studying the context and spiritual meanings of the verses you recite." }
    ],
    "teachingMethod": "We focus on a conversational, respectful teaching approach, correcting errors gently and matching class sessions to your career availability.",
    "faqs": [
      { "question": "I am a complete beginner, is that okay?", "answer": "Yes! Many of our adult students start from the absolute basics. We support you patiently step-by-step." },
      { "question": "Can I cancel or reschedule a class?", "answer": "Yes, you can reschedule any class with a 12-hour notice, fitting perfectly with business trips or family plans." }
    ]
  },
  {
    "id": "course-5",
    "title": "Islamic Studies",
    "slug": "islamic-studies",
    "description": "Basic Islamic beliefs, pillars of Islam, Duas, Hadith, prophetic stories, and character building for young minds.",
    "icon": "Compass",
    "image": "/islamic-studies.jpg",
    "duration": "Ongoing",
    "suitableFor": "Kids & Adults",
    "overview": "A comprehensive Islamic Studies syllabus designed to build solid character, learn general Fiqh, Islamic history, pillars of faith, and daily ethics.",
    "learningOutcomes": [
      "Learn the pillars of Islam and article of faith (Aqeedah)",
      "Study the life of Prophet Muhammad (PBUH) and other prophets",
      "Understand basic rules of clean habits and Fiqh",
      "Build daily Islamic moral values, ethics, and character"
    ],
    "classStructure": "One-on-One or custom family classes, 2 to 3 times per week.",
    "recommendedAge": "Ages 5 and above",
    "seoTitle": "Online Islamic Studies Classes | Learn Fiqh & Seerah",
    "metaDescription": "Study Islamic history, Seerah of the Prophet (PBUH), Fiqh, and Hadith online. Comprehensive curriculum designed for kids and adults. Start with 3 free trials.",
    "focusKeyword": "Islamic Studies",
    "secondaryKeywords": ["online Islamic studies", "Islamic studies for kids", "learn Fiqh online", "Islamic history course"],
    "whoShouldJoin": "Ideal for families and individuals living in Western countries who want to learn core Islamic knowledge, prophetic stories, clean habits, and moral values.",
    "benefits": [
      "Structured syllabus combining beliefs, history, ethics, and practice",
      "Qualified teachers presenting topics in clear, modern English",
      "Helps children establish a solid Muslim identity in a modern world",
      "Can be combined with regular Quran reading classes"
    ],
    "curriculumSteps": [
      { "title": "Aqeedah & Beliefs", "description": "Understanding the six articles of faith and the oneness of Allah (Tawheed)." },
      { "title": "Seerah & History", "description": "Exploring the biography of Prophet Muhammad (PBUH) and stories of other prophets." },
      { "title": "Fiqh (Rules of Worship)", "description": "Learning how to perform Wudu, pray Salah, fast in Ramadan, and general clean habits." },
      { "title": "Akhlaq (Manners & Ethics)", "description": "Fostering respect for parents, honesty, charity, and daily community etiquette." }
    ],
    "teachingMethod": "We present history and ethics using interactive storybooks, video illustrations, worksheets, and engaging quizzes.",
    "faqs": [
      { "question": "Is this course only for kids?", "answer": "No. We have advanced versions of this course covering Fiqh and Seerah tailored for adult students." },
      { "question": "Can I combine this with Quran classes?", "answer": "Yes, many parents choose a combined package of 15 mins Quran reading and 15 mins Islamic Studies." }
    ]
  },
  {
    "id": "course-6",
    "title": "Daily Duas Course",
    "slug": "daily-duas",
    "description": "Learn essential daily Duas and prayers for protection, eating, sleeping, and regular life tasks.",
    "icon": "FileText",
    "image": "/daily-duas.jpg",
    "duration": "2 Months",
    "suitableFor": "All Ages",
    "overview": "Learn and memorize essential daily supplications (Duas) from the Quran and Sunnah to protect yourself and remember Allah throughout the day.",
    "learningOutcomes": [
      "Memorize supplications for waking up, sleeping, eating, and traveling",
      "Understand the translation and spiritual benefits of each Dua",
      "Apply prayers in daily routines to increase blessings",
      "Learn morning and evening protection prayers (Azkar)"
    ],
    "classStructure": "One-on-One, 30 min classes, 2 to 3 times per week.",
    "recommendedAge": "Ages 4 and above",
    "seoTitle": "Learn Daily Duas Online | Supplications from Quran & Sunnah",
    "metaDescription": "Memorize daily Duas, morning & evening Azkar, and prayers for protection online. Under certified tutors, with translations. Book 3 free trial classes.",
    "focusKeyword": "Daily Duas",
    "secondaryKeywords": ["learn daily Duas online", "Duas for protection", "Islamic prayers for kids", "masnoon Duas"],
    "whoShouldJoin": "Perfect for children and adults who want to practice remembrance of Allah in their daily life, from waking up to sleeping, and learn daily protection supplications.",
    "benefits": [
      "Memorize correct Arabic pronunciation with authentic Tajweed",
      "Includes English translation and explanation of spiritual meanings",
      "Practical tips to build daily habits of Azkar and remembrance",
      "Taught in structured, easy-to-memorize visual slides"
    ],
    "curriculumSteps": [
      { "title": "Routine Duas", "description": "Memorizing prayers for eating, entering/leaving home, sleeping, and waking up." },
      { "title": "Protection Prayers", "description": "Learning the morning and evening protection Azkar (Ayat al-Kursi, the 3 Quls)." },
      { "title": "Social Duas", "description": "Studying supplications for visiting the sick, traveling, and thanking others." },
      { "title": "Duas from the Quran", "description": "Memorizing short, powerful prophetic prayers found directly in the Holy Quran." }
    ],
    "teachingMethod": "We use audio repetition, colorful dua charts, and interactive flashcards with English translation to make memorization effortless.",
    "faqs": [
      { "question": "Are translations included in classes?", "answer": "Yes. We focus heavily on ensuring the student understands the word-by-word translation of every Dua." },
      { "question": "Can toddlers join this course?", "answer": "Yes, we teach short and simple Duas to children as young as 4 years old using engaging audio rhymes." }
    ]
  },
  {
    "id": "course-7",
    "title": "Salah & Prayer Course",
    "slug": "salah-course",
    "description": "Master how to perform Wudu and pray Salah correctly step-by-step with proper translations.",
    "icon": "Users",
    "image": "/quran-salah.jpg",
    "duration": "1 Month",
    "suitableFor": "Beginners",
    "overview": "Learn the absolute essentials of Wudu (ablution), Salah (prayers), and how to perform them with correct physical postures, Arabic recitations, and translation.",
    "learningOutcomes": [
      "Learn step-by-step physical postures of Wudu and Salah",
      "Memorize the Arabic recitations for all parts of prayers",
      "Understand translation and meanings of what is recited in Salah",
      "Perform prayers independently with complete confidence"
    ],
    "classStructure": "One-on-One intensive sessions, 3 times per week.",
    "recommendedAge": "Ages 5 and above",
    "seoTitle": "Learn How to Pray Salah Online | Step-by-Step Prayer Course",
    "metaDescription": "Learn the correct method of praying Salah and performing Wudu online. Step-by-step physical postures, Arabic recitation, and translation. Get 3 free trials.",
    "focusKeyword": "Learn How to Pray Salah",
    "secondaryKeywords": ["online Salah course", "learn Wudu step by step", "Salah for beginners", "kids prayer classes"],
    "whoShouldJoin": "Specifically designed for young children who are starting to establish daily prayers and new converts or adult beginners who want to correct their prayer postures and recitations.",
    "benefits": [
      "Detailed step-by-step visual training of all physical positions (Ruku, Sujud)",
      "Word-by-word correction of Tashahhud and Surahs recited in Salah",
      "Helps students understand what they are saying to build concentration (Khushu)",
      "Private, patient environment that welcomes all questions without hesitation"
    ],
    "curriculumSteps": [
      { "title": "Ablution Steps (Wudu)", "description": "Mastering the physical sequence, rules, and daily prayers of Wudu purification." },
      { "title": "Salah Postures", "description": "Learning correct standing (Qiyam), bowing (Ruku), and prostrating (Sajdah) shapes." },
      { "title": "Prayer Recitations", "description": "Memorizing Al-Fatiha, Sana, Tashahhud, and Durood with proper pronunciation." },
      { "title": "Full Prayer Practice", "description": "Live, step-by-step execution of a full prayer under strict teacher review and feedback." }
    ],
    "teachingMethod": "We use high-definition video demonstrations, animated character slides, and live practice where the student demonstrates positions.",
    "faqs": [
      { "question": "Does this course teach all 5 daily prayers?", "answer": "Yes! We cover the structures of Fajr, Dhuhr, Asr, Maghrib, and Isha, including obligatory and Sunnah units." },
      { "question": "Is this a long-term course?", "answer": "No, this is an intensive 1-month course designed to establish the foundations. Many students transition to Quran reading after." }
    ]
  },
  {
    "id": "course-8",
    "title": "Arabic Language Course",
    "slug": "arabic-language",
    "description": "Learn how to read, write, and understand general Arabic script to connect with the Quranic language.",
    "icon": "BookOpen",
    "image": "/arabic-reading.jpg",
    "duration": "4-6 Months",
    "suitableFor": "Kids & Adults",
    "overview": "Go beyond basic phonics. Learn to read standard Arabic scripts, identify grammar rules, and comprehend key Quranic vocabulary.",
    "learningOutcomes": [
      "Read classical Quranic Arabic scripts without phonics indicators",
      "Identify root words and primary vocabulary of the Holy Quran",
      "Recognize basic Arabic noun patterns and verb conjugations",
      "Translate short verses of the Quran independently"
    ],
    "classStructure": "One-on-One, 30 min classes, 3 to 4 times per week.",
    "recommendedAge": "Ages 7 and above",
    "seoTitle": "Learn Quranic Arabic Online | Arabic Language Course",
    "metaDescription": "Learn classical Quranic Arabic online. Study root words, vocabulary, basic grammar, and translate verses independently. Sign up for 3 free trials.",
    "focusKeyword": "Learn Quranic Arabic",
    "secondaryKeywords": ["online Arabic course", "classical Arabic reading", "Quranic vocabulary", "Arabic language online"],
    "whoShouldJoin": "Designed for students who can read the Quran but want to understand the language, build vocabulary, learn basic grammar, and translate verses directly.",
    "benefits": [
      "Connect deeply with the Holy Quran by understanding the direct meanings",
      "Taught by native Arabic speakers holding academic language degrees",
      "Builds a strong foundation in classical Arabic grammar (Nahw and Sarf)",
      "Private one-on-one lessons that progress at your preferred level of speed"
    ],
    "curriculumSteps": [
      { "title": "Vocabulary Building", "description": "Memorizing high-frequency nouns, pronouns, and verbs used in the Quran." },
      { "title": "Root Words Study", "description": "Learning how to trace Arabic words back to their three-letter root forms." },
      { "title": "Arabic Grammar (Nahw)", "description": "Understanding basic sentence structures, subject-predicate, and declensions." },
      { "title": "Translation Practice", "description": "Applying rules by translating short verses of Juz Amma and daily prayers." }
    ],
    "teachingMethod": "We use modern interactive dialogue slides, sentence matching exercises, grammar grids, and real Quranic text translation worksheets.",
    "faqs": [
      { "question": "Does this course teach modern conversational Arabic?", "answer": "Our main focus is on Classical/Quranic Arabic (Fusha). However, basic modern conversation patterns are introduced." },
      { "question": "How large is the vocabulary we learn?", "answer": "You will study over 300 of the most frequently repeated words in the Quran, covering about 50% of the text's vocabulary." }
    ]
  }
];

db.courses = detailedCourses;
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Successfully seeded detailed courses in db.json!');
