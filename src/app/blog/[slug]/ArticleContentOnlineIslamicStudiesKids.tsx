'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  CheckCircle,
  ArrowRight,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Award,
  Compass,
  CheckCircle2,
  Clock,
  Volume2,
  Brain,
  Lightbulb,
  GraduationCap,
  Users,
  Layers,
  Check,
  Calendar,
  UserCheck,
  Globe,
  ChevronDown,
  BookText,
  BookmarkCheck,
  Heart,
  Shield,
  Star,
  School,
  Moon,
  Sun,
  MessageSquare,
  Smile,
  Activity,
  Zap,
  MapPin,
  Laptop
} from 'lucide-react';

export default function ArticleContentOnlineIslamicStudiesKids() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'At what age should a child start formal Islamic Studies classes?',
      a: 'Children can start structured, story-based Islamic Studies at age 4 or 5, alongside their Noorani Qaida lessons. The Prophet ﷺ taught that children should be told to pray when they reach seven (Abu Dawud), which makes ages 6-7 an ideal time to begin practical Wudu and Salah lessons.'
    },
    {
      q: 'Do kids need to know Arabic to take Online Islamic Studies?',
      a: 'No. Our Islamic Studies classes are taught in clear English so children in Western countries can understand the concepts, ask questions comfortably, and apply what they learn. Duas and Salah recitations are memorized in Arabic, with English meanings.'
    },
    {
      q: 'How is Islamic Studies combined with online Quran classes?',
      a: 'You don\'t need to book a separate course. A standard 30-40 minute Quran session can give the first 20-25 minutes to Noorani Qaida, Tajweed, or Hifz, and the final 10-15 minutes to Duas, Salah training, Seerah, and Islamic manners. Dedicated 30-40 minute Islamic Studies sessions are also available for deeper study.'
    },
    {
      q: 'How are the classes held?',
      a: 'Classes are live and 1-on-1 on Zoom or Google Meet, so all your child needs is a device with a camera and a stable internet connection.'
    },
    {
      q: 'Can I request a female Islamic Studies teacher for my daughter?',
      a: 'Yes. We have experienced male and female teachers, so girls, teenage sisters, and mothers can learn fiqh and Islamic Studies in a comfortable and private environment.'
    }
  ];

  return (
    <article className="space-y-12 text-foreground/90 leading-relaxed font-normal">
      {/* Reviewer & Authorship Meta Badge */}
      <div className="p-4 sm:p-5 rounded-2xl bg-foreground/[0.02] border border-card-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-text">
        <div className="flex items-center space-x-2">
          <UserCheck className="h-4 w-4 text-primary shrink-0" />
          <span>
            Written by the <strong className="text-foreground font-semibold">OQTutor Team</strong> | Reviewed by <strong className="text-foreground font-semibold">Sheikh Muhammad Imran</strong>, Alimiyyah Graduate &amp; Senior Islamic Studies Educator
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-muted-text/80">
          <Calendar className="h-3.5 w-3.5 text-secondary" />
          <span>Published: October 20, 2026</span>
        </div>
      </div>

      {/* Lead Paragraph */}
      <div className="space-y-5 text-base sm:text-lg text-muted-text">
        <p className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
          For Muslim parents raising children in the <span className="text-primary font-extrabold">USA, UK, Canada, Australia, Europe, and Singapore</span>, teaching kids to read the Holy Quran is usually the first priority.
        </p>
        <p>
          Yet many parents eventually notice a common gap: a child may recite Arabic fluently, but still not know how to pray Salah properly, why we fast in Ramadan, or how to handle peer pressure with a confident Muslim identity.
        </p>
      </div>

      {/* Quick Answer Callout Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 space-y-4 not-prose shadow-sm">
        <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest">
          <Sparkles className="h-4 w-4 fill-primary/20" />
          <span>Quick Answer</span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-foreground">
          What Does a Complete Online Islamic Studies Curriculum Cover?
        </h2>
        <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">
          A well-rounded online Islamic Studies curriculum for kids goes beyond Quran recitation and covers six foundational pillars:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-background/80 border border-primary/15 flex items-start space-x-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold">1</span>
            <span className="text-sm font-semibold text-foreground"><strong>Aqeedah</strong>: Islamic beliefs, Tawheed &amp; love for Allah</span>
          </div>
          <div className="p-3.5 rounded-xl bg-background/80 border border-primary/15 flex items-start space-x-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold">2</span>
            <span className="text-sm font-semibold text-foreground"><strong>Fiqh &amp; Ibadah</strong>: Step-by-step Wudu, Salah &amp; 5 Pillars</span>
          </div>
          <div className="p-3.5 rounded-xl bg-background/80 border border-primary/15 flex items-start space-x-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold">3</span>
            <span className="text-sm font-semibold text-foreground"><strong>Seerah &amp; Stories</strong>: Prophets &amp; young Sahaba</span>
          </div>
          <div className="p-3.5 rounded-xl bg-background/80 border border-primary/15 flex items-start space-x-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold">4</span>
            <span className="text-sm font-semibold text-foreground"><strong>Duas &amp; Hadith</strong>: 40+ daily Masnoon supplications</span>
          </div>
          <div className="p-3.5 rounded-xl bg-background/80 border border-primary/15 flex items-start space-x-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold">5</span>
            <span className="text-sm font-semibold text-foreground"><strong>Akhlaq &amp; Adab</strong>: Prophetic manners &amp; digital etiquette</span>
          </div>
          <div className="p-3.5 rounded-xl bg-background/80 border border-primary/15 flex items-start space-x-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold">6</span>
            <span className="text-sm font-semibold text-foreground"><strong>Kid-Friendly Tafsir</strong>: Meaning of Juz Amma short Surahs</span>
          </div>
        </div>
        <p className="text-sm text-muted-text pt-2">
          In this guide, we break down what a structured Islamic Studies syllabus looks like, share an age-by-age roadmap (ages 4 to 16), and show how to pair Islamic Studies with your child&apos;s Quran classes.
        </p>
      </div>

      {/* Section 1: Why Recitation Alone Isn't Enough */}
      <section id="why-quran-recitation-alone-isnt-enough" className="space-y-6 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center space-x-3">
          <BookOpen className="h-7 w-7 text-primary shrink-0" />
          <span>Why Quran Recitation Alone Isn&apos;t Enough for Kids Growing Up in the West</span>
        </h2>
        
        <p className="text-base sm:text-lg text-muted-text">
          Learning <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida</Link> and reading the <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Quran with Tajweed</Link> gives your child the ability to read the Book of Allah accurately. Without dedicated Islamic Studies, however, children can start to see Quran class as a reading exercise rather than a complete way of life.
        </p>

        <p className="text-base sm:text-lg text-muted-text">
          Children in non-Muslim-majority countries spend roughly <strong>30 to 35 hours a week in secular schools</strong>, where they absorb many messages that differ from what they learn at home. A structured 1-on-1 Islamic Studies curriculum helps your child:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 not-prose my-6">
          <div className="p-6 rounded-2xl bg-card border border-card-border shadow-sm space-y-3 hover:border-primary/40 transition-all">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Build Strong Faith (Iman)</h3>
            </div>
            <p className="text-sm text-muted-text leading-relaxed">
              Understand who Allah is and why we worship Him, with warm, wise answers to their natural questions in a safe, judgment-free environment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-card-border shadow-sm space-y-3 hover:border-primary/40 transition-all">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-secondary/15 text-secondary-dark">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Practice Islam Independently</h3>
            </div>
            <p className="text-sm text-muted-text leading-relaxed">
              Move from blindly copying parents during prayer to knowing the steps, rulings, and spiritual meanings of <Link href="/courses/salah-course" className="text-primary font-semibold hover:underline">Wudu and Salah</Link> on their own.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-card-border shadow-sm space-y-3 hover:border-primary/40 transition-all">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Develop Prophetic Character (Akhlaq)</h3>
            </div>
            <p className="text-sm text-muted-text leading-relaxed">
              Learn honesty, gratitude, kindness to neighbors, and respect for parents through real examples from the Sunnah of Prophet Muhammad ﷺ.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-card-border shadow-sm space-y-3 hover:border-primary/40 transition-all">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Feel Confident in Their Muslim Identity</h3>
            </div>
            <p className="text-sm text-muted-text leading-relaxed">
              Connect with the history of the Prophets and the Companions (Sahaba) so they feel proud, resilient, and unapologetic about their faith in secular classrooms.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-secondary/10 border border-secondary/30 text-sm sm:text-base text-foreground/90 space-y-2">
          <p>
            <strong>The Role of Parents:</strong> Parents also play an irreplaceable part. Our guide on <Link href="/blog/role-parents-islamic-education-west" className="text-primary font-bold hover:underline">the role of parents in Islamic education in non-Muslim countries</Link> explains how home and class can reinforce each other, and a good tutor builds on what you already teach at home.
          </p>
          <p>
            If your child struggles with focus, our post on <Link href="/blog/tips-keep-kids-motivated-online-quran" className="text-primary font-bold hover:underline">motivating children in online Quran classes</Link> has practical tips you can start using today.
          </p>
        </div>
      </section>

      {/* Section 2: The 6 Core Pillars */}
      <section id="the-6-core-pillars" className="space-y-8 scroll-mt-24 pt-4 border-t border-card-border">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center space-x-3">
            <Layers className="h-7 w-7 text-primary shrink-0" />
            <span>The 6 Core Pillars of a Complete Online Islamic Studies Curriculum</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-text">
            When evaluating an online Islamic academy for your child, look for a syllabus that balances heart-softening stories with practical daily worship across these six foundational subjects.
          </p>
        </div>

        {/* In-content image 1 */}
        <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card">
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] max-h-[500px]">
            <Image
              src="/blog/online-islamic-studies-for-kids/islamic-studies-pillars-tutor.jpg"
              alt="Online Islamic studies tutor teaching young student the 5 pillars of Islam and Quran on Zoom"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <div className="p-4 bg-secondary/5 border-t border-card-border text-xs sm:text-sm text-center text-muted-text">
            <span>Live 1-on-1 tutors use interactive slides, visual cards, and engaging discussions to make core Islamic pillars easy for children to understand.</span>
          </div>
        </div>

        {/* Pillar 1 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-card-border shadow-sm space-y-4 hover:border-primary/40 transition-all">
          <div className="flex items-center space-x-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-white text-base font-extrabold shadow-md">1</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Aqeedah (Islamic Beliefs &amp; Knowing Allah)
            </h3>
          </div>
          <p className="text-base text-muted-text">
            Aqeedah is the foundation of a child&apos;s faith. Rather than starting with dry theological terms, a great curriculum introduces Allah through His creation, His boundless mercy, and His Beautiful Names (<em className="text-foreground font-medium">Asma ul-Husna</em>).
          </p>
          <div className="p-4 rounded-2xl bg-foreground/[0.03] border border-card-border/60 text-sm">
            <strong className="text-foreground block mb-1">Key topics covered:</strong>
            <p className="text-muted-text">
              The Six Articles of Faith (Iman): belief in Allah and His Oneness (Tawheed), the Angels (Mala&apos;ikah), the Revealed Books (Kutub), the Prophets and Messengers (Rusul), the Day of Judgment (Yawm al-Qiyamah), and Divine Decree (Qadr).
            </p>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-card-border shadow-sm space-y-4 hover:border-primary/40 transition-all">
          <div className="flex items-center space-x-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-white text-base font-extrabold shadow-md">2</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Fiqh &amp; Ibadah (Practical Worship &amp; Pillars of Islam)
            </h3>
          </div>
          <p className="text-base text-muted-text">
            Children learn best by doing. Fiqh for kids focuses on the Five Pillars of Islam and the everyday rulings of purification and prayer, taught in line with your family&apos;s madhab where possible.
          </p>
          <div className="p-4 rounded-2xl bg-foreground/[0.03] border border-card-border/60 text-sm">
            <strong className="text-foreground block mb-1">Key topics covered:</strong>
            <p className="text-muted-text">
              Cleanliness (Taharah), step-by-step Wudu (ablution) and Tayammum, the conditions and actions of the five daily Salah, what breaks Wudu and Salah, fasting in Ramadan, Zakat basics, and the spiritual journey of Hajj.
            </p>
          </div>
          <div className="pt-1">
            <Link href="/courses/salah-course" className="inline-flex items-center space-x-2 text-primary font-bold text-sm hover:underline">
              <span>Explore our dedicated Salah Course for Kids</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-card-border shadow-sm space-y-4 hover:border-primary/40 transition-all">
          <div className="flex items-center space-x-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-white text-base font-extrabold shadow-md">3</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Seerah &amp; Stories of the Prophets (Qasas ul-Anbiya)
            </h3>
          </div>
          <p className="text-base text-muted-text">
            Children naturally love stories. Teaching the life of Prophet Muhammad ﷺ (Seerah) and the stories of earlier Prophets, from Adam, Nuh, and Ibrahim to Musa and Isa (peace be upon them all), anchors moral lessons in unforgettable narratives.
          </p>
          <div className="p-4 rounded-2xl bg-foreground/[0.03] border border-card-border/60 text-sm">
            <strong className="text-foreground block mb-1">Key topics covered:</strong>
            <p className="text-muted-text">
              The birth and youth of the Prophet ﷺ in Makkah, the revelation of the Quran, patience during persecution, the Hijrah to Madinah, stories of inspiring young Companions such as Ali ibn Abi Talib (RA), Anas ibn Malik (RA), and Mus&apos;ab ibn Umayr (RA), and lessons from the Prophets mentioned in the Holy Quran.
            </p>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-card-border shadow-sm space-y-4 hover:border-primary/40 transition-all">
          <div className="flex items-center space-x-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-white text-base font-extrabold shadow-md">4</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Daily Masnoon Duas &amp; Short Hadith
            </h3>
          </div>
          <p className="text-base text-muted-text">
            Memorizing short supplications connects a child to Allah from the moment they wake up until they go to sleep, turning everyday moments into acts of remembrance (Dhikr).
          </p>
          <div className="p-4 rounded-2xl bg-foreground/[0.03] border border-card-border/60 text-sm">
            <strong className="text-foreground block mb-1">Key topics covered:</strong>
            <p className="text-muted-text">
              40+ essential Masnoon Duas (waking up, before and after eating, entering and leaving the home and washroom, traveling, seeking knowledge, and Duas for parents), alongside short, easy Hadith from <em className="text-foreground font-medium">Arba&apos;een An-Nawawi</em> on pure intentions (Niyyah), truthfulness, and kindness.
            </p>
          </div>
          <div className="pt-1">
            <Link href="/courses/daily-duas" className="inline-flex items-center space-x-2 text-primary font-bold text-sm hover:underline">
              <span>View our Daily Duas &amp; Memorization Syllabus</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Pillar 5 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-card-border shadow-sm space-y-4 hover:border-primary/40 transition-all">
          <div className="flex items-center space-x-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-white text-base font-extrabold shadow-md">5</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Akhlaq &amp; Adab (Islamic Manners &amp; Character Building)
            </h3>
          </div>
          <p className="text-base text-muted-text">
            In Islam, good character weighs heavily on the scale of deeds. An effective online tutor reinforces the moral values and courtesies you teach at home.
          </p>
          <div className="p-4 rounded-2xl bg-foreground/[0.03] border border-card-border/60 text-sm">
            <strong className="text-foreground block mb-1">Key topics covered:</strong>
            <p className="text-muted-text">
              Respecting parents (<em className="text-foreground font-medium">Birr al-Walidayn</em>), speaking truthfully, the Islamic greeting (Assalamu Alaikum), eating and sleeping etiquette, controlling anger, choosing righteous friends, and handling modern challenges like excessive screen time, digital etiquette, and peer bullying.
            </p>
          </div>
        </div>

        {/* Pillar 6 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-card-border shadow-sm space-y-4 hover:border-primary/40 transition-all">
          <div className="flex items-center space-x-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-white text-base font-extrabold shadow-md">6</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Kid-Friendly Tafsir of Juz Amma
            </h3>
          </div>
          <p className="text-base text-muted-text">
            As children memorize short Surahs in <Link href="/courses/hifz" className="text-primary font-semibold hover:underline">Hifz-ul-Quran</Link> or <Link href="/courses/quran-reading" className="text-primary font-semibold hover:underline">Quran reading classes</Link>, Islamic Studies bridges the gap by explaining the meaning, stories, and context behind what they recite.
          </p>
          <div className="p-4 rounded-2xl bg-foreground/[0.03] border border-card-border/60 text-sm">
            <strong className="text-foreground block mb-1">Key topics covered:</strong>
            <p className="text-muted-text">
              The meaning and reason for revelation (<em className="text-foreground font-medium">Asbab an-Nuzul</em>) behind Surah Al-Fatiha, Al-Ikhlas, Al-Falaq, An-Nas, and the rest of the 30th Juz, making daily prayers deeply meaningful.
            </p>
          </div>
          <div className="pt-1">
            <Link href="/blog/why-studying-juz-amma-tafseer-essential-guide" className="inline-flex items-center space-x-2 text-primary font-bold text-sm hover:underline">
              <span>Read: Why Studying Juz Amma Tafseer Is Essential</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Age-by-Age Breakdown */}
      <section id="age-by-age-breakdown" className="space-y-8 scroll-mt-24 pt-4 border-t border-card-border">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center space-x-3">
            <GraduationCap className="h-7 w-7 text-primary shrink-0" />
            <span>Age-by-Age Breakdown: What to Teach Your Child at Every Stage</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-text">
            A 5-year-old and a 13-year-old cannot learn from the same syllabus. At OQTutor, our Islamic Studies curriculum adapts dynamically to four distinct developmental stages:
          </p>
        </div>

        {/* In-content image 2 */}
        <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card">
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] max-h-[500px]">
            <Image
              src="/blog/online-islamic-studies-for-kids/father-son-online-islamic-studies-salah.jpg"
              alt="Muslim father and son learning step-by-step Salah together with online Islamic studies tutor"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <div className="p-4 bg-secondary/5 border-t border-card-border text-xs sm:text-sm text-center text-muted-text">
            <span>Parental involvement, combined with patient 1-on-1 online instruction, builds lifelong prayer habits and Islamic character.</span>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-2xl border border-card-border shadow-sm not-prose">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 border-b border-card-border text-foreground font-extrabold uppercase text-xs tracking-wider">
              <tr>
                <th className="p-4 sm:p-5">Age Group</th>
                <th className="p-4 sm:p-5">Learning Stage</th>
                <th className="p-4 sm:p-5">Core Curriculum Focus</th>
                <th className="p-4 sm:p-5">Expected Milestones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border bg-card">
              <tr className="hover:bg-muted/20 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-primary whitespace-nowrap">Ages 4–6</td>
                <td className="p-4 sm:p-5 font-semibold text-foreground whitespace-nowrap">Early Foundations<br/><span className="text-xs text-muted-text font-normal">(Love &amp; Habit)</span></td>
                <td className="p-4 sm:p-5 text-muted-text">
                  Knowing Allah as our Creator and Provider; the 5 Pillars of Islam through stories, rhymes, and vocal-only nasheeds; 10–15 short daily Duas; basic manners (Bismillah, right hand); stories of Prophets Adam, Nuh, and Yunus (AS).
                </td>
                <td className="p-4 sm:p-5 text-foreground font-medium">
                  Says Bismillah and Alhamdulillah naturally, knows the 5 Pillars, and loves stories about the Prophet ﷺ.
                </td>
              </tr>
              <tr className="hover:bg-muted/20 transition-colors bg-muted/[0.02]">
                <td className="p-4 sm:p-5 font-bold text-primary whitespace-nowrap">Ages 7–9</td>
                <td className="p-4 sm:p-5 font-semibold text-foreground whitespace-nowrap">The Prayer Age<br/><span className="text-xs text-muted-text font-normal">(Practical Worship)</span></td>
                <td className="p-4 sm:p-5 text-muted-text">
                  Step-by-step Wudu and Salah training; Tashahhud, Durood, and Dua Qunoot; the 6 Articles of Faith; the Makkan period of the Seerah; manners with parents, siblings, and teachers.
                </td>
                <td className="p-4 sm:p-5 text-foreground font-medium">
                  Performs Wudu and prays a complete 2-, 3-, or 4-Rakah Salah independently, with understanding.
                </td>
              </tr>
              <tr className="hover:bg-muted/20 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-primary whitespace-nowrap">Ages 10–12</td>
                <td className="p-4 sm:p-5 font-semibold text-foreground whitespace-nowrap">Pre-Teen Mastery<br/><span className="text-xs text-muted-text font-normal">(Responsibility &amp; Depth)</span></td>
                <td className="p-4 sm:p-5 text-muted-text">
                  Rules of fasting, Zakat basics, and correcting mistakes in Salah (Sujood as-Sahw); the Madinan period of the Seerah and the Khulafa al-Rashidun; Tafsir of Juz Amma Surahs; 20+ Hadith with practical application.
                </td>
                <td className="p-4 sm:p-5 text-foreground font-medium">
                  Prays the five daily prayers consistently, practices fasting, and understands the meaning of the Surahs they recite.
                </td>
              </tr>
              <tr className="hover:bg-muted/20 transition-colors bg-muted/[0.02]">
                <td className="p-4 sm:p-5 font-bold text-primary whitespace-nowrap">Ages 13–16</td>
                <td className="p-4 sm:p-5 font-semibold text-foreground whitespace-nowrap">Teen Identity<br/><span className="text-xs text-muted-text font-normal">(Conviction &amp; Ethics)</span></td>
                <td className="p-4 sm:p-5 text-muted-text">
                  Answering modern doubts and strengthening Aqeedah; fiqh of puberty, halal and haram lifestyle, and modesty (Haya); Islamic history and role models; peer pressure, social media ethics, and resilience through Tawakkul.
                </td>
                <td className="p-4 sm:p-5 text-foreground font-medium">
                  Feels confident in their Muslim identity, understands adult fiqh obligations, and applies Islamic ethics independently.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Assessment Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-primary/10 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6 not-prose">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              Not sure which stage fits your child?
            </h3>
            <p className="text-sm sm:text-base text-muted-text">
              Start a 3-day free trial and our senior scholar will assess your child&apos;s level, reading background, and learning goals in the first class.
            </p>
          </div>
          <Link
            href="/book-free-trial"
            className="shrink-0 px-6 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            Start Free Trial Assessment
          </Link>
        </div>
      </section>

      {/* Section 4: 1-on-1 vs Sunday School */}
      <section id="online-vs-sunday-school" className="space-y-6 scroll-mt-24 pt-4 border-t border-card-border">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center space-x-3">
            <Users className="h-7 w-7 text-primary shrink-0" />
            <span>1-on-1 Online Islamic Studies vs. Weekend Sunday School: Which Is Better?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-text">
            Many families enroll their children in mosque weekend schools, which are wonderful for community bonding. However, weekend schools often place 15 to 25 children of varying levels in one classroom for only a couple of hours a week.
          </p>
          <p className="text-base sm:text-lg text-muted-text">
            That is why many families across the USA, UK, Canada, and Australia pair—or replace—weekend school with <strong>1-on-1 online Islamic Studies</strong>:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-6">
          <div className="p-6 rounded-3xl bg-card border border-card-border shadow-sm space-y-3 hover:border-primary/40 transition-all">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Personalized Pacing &amp; Safe Questions
            </h3>
            <p className="text-sm text-muted-text leading-relaxed">
              Shy children and teens often hesitate to ask sensitive questions in a crowded room. In a private session with a dedicated male or female tutor, your child gets the teacher&apos;s full attention and can ask anything openly.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-card border border-card-border shadow-sm space-y-3 hover:border-primary/40 transition-all">
            <div className="p-3 rounded-2xl bg-secondary/20 text-secondary-dark w-fit">
              <Laptop className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Integrated Quran + Islamic Studies
            </h3>
            <p className="text-sm text-muted-text leading-relaxed">
              Instead of driving to multiple classes, your child can spend 20–25 minutes on Tajweed or Hifz and 10–15 minutes on Islamic Studies and Duas in the same 30–40 minute session, maximizing learning efficiency.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-card border border-card-border shadow-sm space-y-3 hover:border-primary/40 transition-all">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 w-fit">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Zero Commute &amp; Flexible Times
            </h3>
            <p className="text-sm text-muted-text leading-relaxed">
              Whether your family is balancing sports, secular school homework, or changing daylight saving hours, private online classes fit directly into your weekly family schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section id="frequently-asked-questions" className="space-y-6 scroll-mt-24 pt-4 border-t border-card-border">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center space-x-2">
            <HelpCircle className="h-7 w-7 text-primary" />
            <span>Frequently Asked Questions (FAQ)</span>
          </h2>
          <p className="text-base text-muted-text">
            Answers to common questions from parents considering online Islamic Studies for their children:
          </p>
        </div>

        <div className="space-y-4 my-6 not-prose">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-card-border bg-card overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-foreground hover:text-primary transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-text transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-muted-text leading-relaxed border-t border-card-border/50 pt-4 bg-muted/10">
                    <p>{faq.a}</p>
                    {idx === 4 && (
                      <p className="mt-2">
                        <Link href="/courses/female-quran-teacher" className="text-primary font-bold hover:underline">
                          Learn more about our certified female Quran &amp; Islamic studies teachers &rarr;
                        </Link>
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section id="start-your-childs-journey" className="pt-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-primary-hover text-white shadow-2xl relative overflow-hidden not-prose text-center sm:text-left">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10 max-w-2xl space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
              <span>Sadaqah Jariyah for Your Family</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Give Your Child the Gift of Complete Islamic Knowledge
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Teaching your child to read the Quran is a tremendous blessing. Helping them understand, love, and live by Islam may be a source of ongoing reward (<strong>Sadaqah Jariyah</strong>) for your family in this life and the Hereafter.
            </p>
            <p className="text-xs sm:text-sm text-white/80">
              At OQTutor, our structured Islamic Studies course is designed for kids and teens growing up in the USA, UK, Canada, Australia, Europe, and Singapore. With interactive lessons and caring 1-on-1 teachers, we make learning about Allah and His Messenger ﷺ the highlight of your child&apos;s week.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-start items-center">
              <Link
                href="/book-free-trial"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-secondary hover:bg-secondary-hover text-neutral-900 font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <span>👉 Start Your Child&apos;s 3-Day Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/courses/islamic-studies"
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors text-center border border-white/20"
              >
                Explore Islamic Studies Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
