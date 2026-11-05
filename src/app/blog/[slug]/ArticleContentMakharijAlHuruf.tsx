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
  BookmarkCheck,
  Languages,
  Zap,
  Target,
  Info
} from 'lucide-react';

export default function ArticleContentMakharijAlHuruf() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'What is the hardest Arabic letter for English speakers to pronounce?',
      a: 'Most native English speakers find Ayn (ع) from the middle of the throat and Daad (ض) from the sides of the tongue the most challenging at first. In fact, Arabic is famously called Lughat al Daad (the Language of Daad) because that specific side tongue articulation is unique to Arabic. With guided exercises, students usually master both within a few weeks.'
    },
    {
      q: 'Does poor pronunciation invalidate my Salah (prayer)?',
      a: 'Islamic scholars distinguish between two types of mistakes in recitation: Lahn Jali (major, obvious errors) and Lahn Khafi (minor, subtle errors). Swapping one letter for another in Surah Al Fatiha (such as turning An\'amta with an Ayn into An\'amta with a Hamzah) is a major error that changes the meaning. However, if a beginner or new Muslim is actively trying their best to learn, Allah is Most Merciful. In Sahih Muslim (Hadith 798), the Prophet ﷺ promised that a person who stumbles and struggles while reciting the Quran receives a double reward.'
    },
    {
      q: 'Can adults still fix their Makharij after years of reading the old way?',
      a: 'Yes, 100 percent. Whether you are twenty five or sixty five, your tongue is a muscle that responds to training. Many students in our Arabic Language and Hifz ul Quran programs unlearn decades old pronunciation habits in just four to eight weeks of focused 1 on 1 coaching.'
    },
    {
      q: 'What is the best age for kids to learn proper Makharij al Huruf?',
      a: 'Ages 4 to 8 are the golden window for phonetics. Young children have remarkable neuroplasticity and can mimic throat and heavy letters effortlessly when they learn Noorani Qaida from a qualified tutor right from the start.'
    }
  ];

  return (
    <article className="space-y-12 text-foreground/90 leading-relaxed font-normal">
      {/* Reviewer and Authorship Meta Badge */}
      <div className="p-4 sm:p-5 rounded-2xl bg-foreground/[0.02] border border-card-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-text">
        <div className="flex items-center space-x-2">
          <UserCheck className="h-4 w-4 text-primary shrink-0" />
          <span>
            By the <strong className="text-foreground font-semibold">OQTutor Editorial Team</strong> | Reviewed by a <strong className="text-foreground font-semibold">Certified Tajweed Scholar</strong>
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-muted-text/80">
          <Calendar className="h-3.5 w-3.5" />
          <span>Published: November 5, 2026</span>
        </div>
      </div>

      {/* Lead In Paragraph */}
      <div className="space-y-4 text-base sm:text-lg text-muted-text">
        <p className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
          If you grew up speaking English in Chicago, London, or Sydney, your throat has lived a very peaceful and relaxed life. English speakers produce almost every consonant at the front of the mouth using the lips, teeth, and the tip of the tongue. Then you open your first <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">Noorani Qaida</Link> lesson, meet the letter <em>Ayn</em> (ع) or <em>Qaaf</em> (ق), and suddenly your vocal cords feel like they are doing gymnastics without a warmup.
        </p>
        <p>
          Do not worry. Every non Arab beginner goes through this exact phase. You are not bad at languages. You are simply waking up vocal muscles that English never asked you to use.
        </p>
      </div>

      {/* Quick Answer Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 space-y-4 not-prose shadow-sm">
        <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest">
          <Sparkles className="h-4 w-4 fill-primary/20" />
          <span>Quick Answer</span>
        </div>
        <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">
          <strong>Makharij al Huruf</strong> (points of articulation) refers to the seventeen specific anatomical locations in the throat, tongue, lips, nose, and mouth where Arabic letters originate, as codified by classical scholars like <strong>Imam Ibn al Jazari</strong>. To master the two hardest categories for English speakers, you must learn <strong>Al Halq</strong> (the six throat letters divided into bottom, middle, and top throat zones) and <strong>Al Isti&apos;la</strong> (the seven permanently heavy letters summarized in the classical phrase <em>Khussa Daghtin Qidh</em>, which require raising the back of the tongue toward the soft palate).
        </p>
        <div className="p-4 rounded-2xl glass border border-primary/20 bg-background/60 text-foreground text-sm font-semibold flex items-center space-x-3">
          <Volume2 className="h-5 w-5 text-primary shrink-0" />
          <span>
            Let us break down the exact anatomy of these letters, why swapping them changes the meaning of the Quran, and how you can train your tongue and throat in minutes a day.
          </span>
        </div>
      </div>

      {/* Hero Featured Image */}
      <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[500px]">
          <Image
            src="/blog/mastering-makharij-al-huruf-heavy-and-throat-arabic-letters/certified-tajweed-tutor-teaching-young-boy-makharij.webp"
            alt="Certified male Tajweed tutor teaching a young boy Makharij al Huruf and throat letter pronunciation online"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 850px"
            priority
          />
        </div>
        <div className="p-4 bg-secondary/5 border-t border-card-border text-xs sm:text-sm text-center text-muted-text">
          <span>
            Certified Tajweed instruction ensures accurate pronunciation of throat and heavy Arabic letters through real time 1 on 1 coaching.
          </span>
        </div>
      </div>

      {/* Table of Contents */}
      <nav aria-label="Table of contents" className="p-6 sm:p-8 rounded-3xl glass border border-card-border space-y-4 not-prose my-8">
        <div className="flex items-center space-x-2.5 text-foreground font-extrabold text-base sm:text-lg">
          <Compass className="h-5 w-5 text-primary" />
          <span>Table of Contents</span>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-muted-text">
          <li>
            <a href="#why-exact-pronunciation-matters" className="hover:text-primary transition-colors flex items-center space-x-2">
              <ChevronDown className="h-3.5 w-3.5 text-secondary -rotate-90 shrink-0" />
              <span>1. Why Exact Pronunciation Matters</span>
            </a>
          </li>
          <li>
            <a href="#5-major-areas-makharij" className="hover:text-primary transition-colors flex items-center space-x-2">
              <ChevronDown className="h-3.5 w-3.5 text-secondary -rotate-90 shrink-0" />
              <span>2. 5 Major Areas of Makharij al Huruf</span>
            </a>
          </li>
          <li>
            <a href="#mastering-al-halq-throat-letters" className="hover:text-primary transition-colors flex items-center space-x-2">
              <ChevronDown className="h-3.5 w-3.5 text-secondary -rotate-90 shrink-0" />
              <span>3. Mastering Al Halq: 6 Throat Letters</span>
            </a>
          </li>
          <li>
            <a href="#mastering-7-heavy-letters" className="hover:text-primary transition-colors flex items-center space-x-2">
              <ChevronDown className="h-3.5 w-3.5 text-secondary -rotate-90 shrink-0" />
              <span>4. Mastering the 7 Heavy Letters</span>
            </a>
          </li>
          <li>
            <a href="#side-by-side-comparison" className="hover:text-primary transition-colors flex items-center space-x-2">
              <ChevronDown className="h-3.5 w-3.5 text-secondary -rotate-90 shrink-0" />
              <span>5. Heavy vs. Light Lookalike Pairs</span>
            </a>
          </li>
          <li>
            <a href="#3-practical-at-home-drills" className="hover:text-primary transition-colors flex items-center space-x-2">
              <ChevronDown className="h-3.5 w-3.5 text-secondary -rotate-90 shrink-0" />
              <span>6. 3 Practical At Home Drills</span>
            </a>
          </li>
          <li>
            <a href="#why-youtube-not-enough" className="hover:text-primary transition-colors flex items-center space-x-2">
              <ChevronDown className="h-3.5 w-3.5 text-secondary -rotate-90 shrink-0" />
              <span>7. Why YouTube Videos Are Not Enough</span>
            </a>
          </li>
          <li>
            <a href="#frequently-asked-questions" className="hover:text-primary transition-colors flex items-center space-x-2">
              <ChevronDown className="h-3.5 w-3.5 text-secondary -rotate-90 shrink-0" />
              <span>8. Frequently Asked Questions (FAQ)</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Section 1: Why Exact Letter Pronunciation Matters in Quran Recitation */}
      <section id="why-exact-pronunciation-matters" className="space-y-6 scroll-mt-24">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
            <Volume2 className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Why Exact Letter Pronunciation Matters in Quran Recitation
          </h2>
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-muted-text">
          In English, if someone pronounces the word &quot;water&quot; with a British accent, a Texas drawl, or a New York accent, the meaning stays identical. You still get a glass of water.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-muted-text">
          Classical Arabic works on a much stricter phonetic system. Changing the exit point (<em>Makhraj</em>) of a single letter frequently changes the entire root word and flips the meaning of a Quranic verse.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-muted-text">
          Consider two famous examples that every <Link href="/courses/quran-with-tajweed" className="text-primary hover:underline font-semibold">Quran with Tajweed</Link> teacher corrects in week one:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
          <div className="p-6 rounded-3xl glass border border-card-border space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-card-border">
              <h3 className="font-bold text-base text-foreground">1. Qalb (قَلْب) vs. Kalb (كَلْب)</h3>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">Meaning Shift</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              When you pronounce the word with a deep, heavy <strong>Qaaf (ق)</strong> from the very back of the tongue, <em>Qalb</em> means <strong>&quot;heart.&quot;</strong> If you slip into an English habit and pronounce it with a light <strong>Kaaf (ك)</strong>, the word becomes <em>Kalb</em>, which means <strong>&quot;dog.&quot;</strong> Imagine reciting a verse about a pure heart in prayer and accidentally swapping those two sounds.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass border border-card-border space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-card-border">
              <h3 className="font-bold text-base text-foreground">2. Alim (عَلِيم) vs. Alim (أَلِيم)</h3>
              <span className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">Theological Accuracy</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Pronounced with a deep middle throat <strong>Ayn (ع)</strong>, <em>Alim</em> means <strong>&quot;All Knowing,&quot;</strong> one of the majestic names of Allah. If you replace that <em>Ayn</em> with a soft <strong>Hamzah (أ)</strong> from the bottom of the throat, the word turns into <em>Alim</em>, which means <strong>&quot;painful&quot;</strong> (as in a painful punishment).
            </p>
          </div>
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-muted-text">
          In his foundational 15th century treatise <strong>Muqaddimah al Jazariyyah</strong>, the great scholar of Quranic sciences <strong>Imam Muhammad ibn al Jazari</strong> wrote that before a reciter starts reading, they must first know the articulation points (<em>Makharij</em>) and characteristics (<em>Sifat</em>) of the letters so they can speak the purest language. When we give every letter its rightful place, we protect both the beauty and the exact meaning of Allah&apos;s words.
        </p>
      </section>

      {/* Section 2: What Are the 5 Major Areas of Makharij al Huruf? */}
      <section id="5-major-areas-makharij" className="space-y-6 scroll-mt-24">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-2xl bg-secondary/10 text-secondary">
            <Layers className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            What Are the 5 Major Areas of Makharij al Huruf?
          </h2>
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-muted-text">
          According to the majority scholarly view established by the grammarian <strong>Al Khalil ibn Ahmad al Farahidi</strong> and affirmed by <strong>Imam Ibn al Jazari</strong>, the Arabic alphabet uses <strong>17 specific articulation points</strong> grouped into <strong>5 major vocal regions</strong>:
        </p>

        <div className="space-y-3 not-prose my-6">
          {[
            {
              title: 'Al Jawf (The Empty Space of the Mouth and Throat)',
              desc: 'Produces the three long vowel sounds (Madd letters: Alif, Waw, and Ya).'
            },
            {
              title: 'Al Halq (The Throat)',
              desc: 'Produces six distinct guttural consonants across three levels.'
            },
            {
              title: 'Al Lisan (The Tongue)',
              desc: 'The busiest muscle in Arabic, containing 10 articulation points that produce 18 different letters.'
            },
            {
              title: 'Ash Shafatan (The Two Lips)',
              desc: 'Produces four letters (Fa, Ba, Meem, and Waw).'
            },
            {
              title: 'Al Khayshoom (The Nasal Passage)',
              desc: 'Produces the Ghunnah (nasal resonance) attached to the letters Noon and Meem.'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-4 sm:p-5 rounded-2xl glass border border-card-border flex items-start space-x-3.5">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm sm:text-base text-foreground mb-0.5">{item.title}</h4>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-muted-text">
          For native English speakers and Western children, the lips and the front of the tongue come naturally. The real challenge happens in <strong>Al Halq (the throat)</strong> and at the <strong>back of Al Lisan (the heavy letters)</strong>. Let us tackle both step by step.
        </p>
      </section>

      {/* Section 3: Mastering Al Halq: The 6 Throat Letters Made Simple */}
      <section id="mastering-al-halq-throat-letters" className="space-y-6 scroll-mt-24">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
            <Volume2 className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Mastering Al Halq: The 6 Throat Letters Made Simple
          </h2>
        </div>

        {/* Mid-Article Image 1 */}
        <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card not-prose">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[500px]">
            <Image
              src="/blog/mastering-makharij-al-huruf-heavy-and-throat-arabic-letters/adult-learner-practicing-arabic-throat-letters.jpg"
              alt="Adult male Muslim learner practicing Arabic throat letters and Tajweed rules on a laptop with an online instructor"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 850px"
            />
          </div>
          <div className="p-4 bg-secondary/5 border-t border-card-border text-xs sm:text-sm text-center text-muted-text">
            <span>
              Live 1 on 1 instruction allows teachers to observe throat placement and correct subtle Makharij mistakes in real time.
            </span>
          </div>
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-muted-text">
          English only has one true throat letter: the soft letter &quot;H&quot; in words like <em>house</em> or <em>hello</em>. Arabic has six throat letters, neatly organized into three floors like an apartment building.
        </p>

        {/* 1. Bottom of Throat */}
        <div className="p-6 rounded-3xl glass border border-card-border space-y-3 not-prose">
          <h3 className="text-lg font-bold text-foreground">
            1. The Bottom of the Throat (Aqsa al Halq): ء and هـ
          </h3>
          <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
            Located at the deepest part of the throat near the vocal cords and chest:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-muted-text">
            <li className="flex items-start space-x-2">
              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong>Hamzah (ء):</strong> Produced by briefly closing the vocal cords and releasing air sharply. You actually make this exact sound in English without realizing it! It is the tiny pause in the middle of the expression <em>&quot;uh oh.&quot;</em>
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong>Haa (هـ):</strong> A soft, breathy sound from the chest area, identical to the English &quot;H&quot; in <em>hat</em>. Just make sure it comes cleanly from the bottom of the throat without scraping.
              </span>
            </li>
          </ul>
        </div>

        {/* 2. Middle of Throat */}
        <div className="p-6 rounded-3xl glass border border-card-border space-y-3 not-prose">
          <h3 className="text-lg font-bold text-foreground">
            2. The Middle of the Throat (Wasat al Halq): ع and ح
          </h3>
          <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
            This is the zone that requires the most practice for beginners. Both sounds happen by gently narrowing the epiglottis in the center of your throat:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-muted-text">
            <li className="flex items-start space-x-2">
              <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
              <span>
                <strong>Haa (ح):</strong> A sharp, warm, whispery sound with zero vocal cord vibration. Imagine you are standing outside on a freezing winter morning in Michigan or Toronto, and you breathe warm air onto your cold hands or fog up a pair of glasses. That smooth, friction filled exhale is <strong>ح</strong>.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
              <span>
                <strong>Ayn (ع):</strong> The voiced twin of <strong>ح</strong>. Use the exact same middle throat muscles, but turn on your voice box. A helpful trick from our tutors is to start saying the letter <strong>ح</strong>, hold the constriction in the middle of your throat, and immediately hum a vowel sound (<em>Aa, Ee, Oo</em>). Avoid squeezing your nose; <em>Ayn</em> belongs strictly in the throat.
              </span>
            </li>
          </ul>
        </div>

        {/* 3. Top of Throat */}
        <div className="p-6 rounded-3xl glass border border-card-border space-y-3 not-prose">
          <h3 className="text-lg font-bold text-foreground">
            3. The Top of the Throat (Adna al Halq): غ and خ
          </h3>
          <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
            Located at the highest part of the throat right where it meets the soft palate (the root of the mouth):
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-muted-text">
            <li className="flex items-start space-x-2">
              <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Khaa (خ):</strong> A dry, scraping sound similar to the Scottish word <em>&quot;Loch&quot;</em> or the sound someone makes when clearing a tickle at the top of their throat.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Ghayn (غ):</strong> The voiced twin of <strong>خ</strong>. If you have ever gargled warm salt water in the morning, you already know how to pronounce <strong>غ</strong>. It is a smooth, vibrating gargle at the very top of the throat, similar to the French &quot;R&quot; in <em>Paris</em>.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: Mastering the 7 Heavy Letters (Huruf al Isti'la) */}
      <section id="mastering-7-heavy-letters" className="space-y-6 scroll-mt-24">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-2xl bg-secondary/10 text-secondary">
            <Award className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Mastering the 7 Heavy Letters (Huruf al Isti&apos;la)
          </h2>
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-muted-text">
          Have you ever listened to a skilled Qari recite in Makkah and wondered why their voice sounds so rich, echoing, and full? That fullness comes from <strong>Tafkheem</strong> (heaviness), which is produced through an anatomical action called <strong>Isti&apos;la</strong> (elevation).
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-muted-text">
          In classical Tajweed, seven letters are permanently heavy under all circumstances. Scholars combined these seven letters into a famous memory phrase: <strong>خُصَّ ضَغْطٍ قِظْ (Khussa Daghtin Qidh)</strong>.
        </p>

        <div className="p-5 rounded-2xl glass border border-secondary/30 bg-secondary/[0.03] text-foreground font-semibold text-sm sm:text-base text-center not-prose">
          The seven heavy letters are: <strong>خ (Khaa), ص (Saad), ض (Daad), غ (Ghayn), ط (Taa), ق (Qaaf), and ظ (Dhaa)</strong>.
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">
            How to Create a Heavy Sound Without Puckering Your Lips
          </h3>
          <p className="text-base sm:text-lg leading-relaxed text-muted-text">
            Here is the number one mistake beginners make when trying to sound heavy: <strong>they round their lips into an &quot;O&quot; shape.</strong>
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-muted-text">
            In authentic Tajweed, you only round your lips when pronouncing the letter <em>Waw</em> (و) or the short vowel <em>Dammah</em> (ُ). If you pucker your lips on a heavy letter with a <em>Fathah</em> (like <em>Qaala</em>), the sound becomes muffled and unnatural.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-muted-text">
            Instead, heaviness happens entirely <strong>inside your mouth</strong>:
          </p>

          <div className="space-y-3 not-prose my-4">
            <div className="p-4 rounded-2xl glass border border-card-border flex items-start space-x-3">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
              <p className="text-xs sm:text-sm text-muted-text">
                <strong>Drop your lower jaw slightly</strong> to create vertical space inside your mouth cavity.
              </p>
            </div>
            <div className="p-4 rounded-2xl glass border border-card-border flex items-start space-x-3">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
              <p className="text-xs sm:text-sm text-muted-text">
                <strong>Raise the back of your tongue</strong> (<em>Aqsa al Lisan</em>) up toward the soft roof of your mouth, just like you do when you yawn or swallow a spoonful of peanut butter.
              </p>
            </div>
            <div className="p-4 rounded-2xl glass border border-card-border flex items-start space-x-3">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
              <p className="text-xs sm:text-sm text-muted-text">
                <strong>Let the sound bounce off the roof of the mouth</strong> so it echoes inside the oral cavity rather than escaping flatly out the front.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Side by Side Comparison: Heavy vs. Light Lookalike Pairs */}
      <section id="side-by-side-comparison" className="space-y-6 scroll-mt-24">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
            <Layers className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Side by Side Comparison: Heavy vs. Light Lookalike Pairs
          </h2>
        </div>

        {/* Mid-Article Image 2 */}
        <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card not-prose">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[500px]">
            <Image
              src="/blog/mastering-makharij-al-huruf-heavy-and-throat-arabic-letters/muslim-father-son-learning-heavy-light-letters.jpg"
              alt="Muslim father and son learning heavy and light Arabic letters in a 1 on 1 online Quran Tajweed class"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 850px"
            />
          </div>
          <div className="p-4 bg-secondary/5 border-t border-card-border text-xs sm:text-sm text-center text-muted-text">
            <span>
              Practicing heavy letters alongside their light counterparts builds auditory discernment and precise tongue elevation.
            </span>
          </div>
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-muted-text">
          The easiest way to train your ear and tongue is to practice heavy letters right next to their light counterparts. Notice how the tip of your tongue touches almost the same spot, while the back of your tongue does the heavy lifting:
        </p>

        {/* Responsive Comparison Table */}
        <div className="overflow-x-auto my-8 rounded-3xl border border-card-border shadow-md not-prose bg-card">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
            <thead>
              <tr className="bg-foreground/[0.04] border-b border-card-border text-foreground font-bold">
                <th className="p-3.5 sm:p-4">Heavy Letter (Isti&apos;la)</th>
                <th className="p-3.5 sm:p-4">Light Twin (Istifal)</th>
                <th className="p-3.5 sm:p-4">Where the Sound Changes</th>
                <th className="p-3.5 sm:p-4">Common Quranic Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border/60 text-muted-text">
              <tr className="hover:bg-foreground/[0.015] transition-colors">
                <td className="p-3.5 sm:p-4 font-bold text-foreground">ق (Qaaf)</td>
                <td className="p-3.5 sm:p-4 font-semibold text-primary">ك (Kaaf)</td>
                <td className="p-3.5 sm:p-4"><strong>Qaaf</strong> hits the soft fleshy palate at the very back; <strong>Kaaf</strong> hits the hard palate slightly forward with air.</td>
                <td className="p-3.5 sm:p-4"><em>Khalaqa</em> (He created) vs. <em>Malik</em> (King)</td>
              </tr>
              <tr className="hover:bg-foreground/[0.015] transition-colors">
                <td className="p-3.5 sm:p-4 font-bold text-foreground">ص (Saad)</td>
                <td className="p-3.5 sm:p-4 font-semibold text-primary">س (Seen)</td>
                <td className="p-3.5 sm:p-4">Both whistle behind the lower teeth, but <strong>Saad</strong> lifts the back of the tongue for a deep, hollow echo.</td>
                <td className="p-3.5 sm:p-4"><em>As Sirat</em> (The Path) in Surah Al Fatiha</td>
              </tr>
              <tr className="hover:bg-foreground/[0.015] transition-colors">
                <td className="p-3.5 sm:p-4 font-bold text-foreground">ط (Taa)</td>
                <td className="p-3.5 sm:p-4 font-semibold text-primary">ت (Taa)</td>
                <td className="p-3.5 sm:p-4">Both touch the upper gum line, but <strong>ط</strong> is heavy and explosive with zero breathiness, while <strong>ت</strong> is light and airy.</td>
                <td className="p-3.5 sm:p-4"><em>At Tammah</em> (The Overwhelming Calamity)</td>
              </tr>
              <tr className="hover:bg-foreground/[0.015] transition-colors">
                <td className="p-3.5 sm:p-4 font-bold text-foreground">ظ (Dhaa)</td>
                <td className="p-3.5 sm:p-4 font-semibold text-primary">ذ (Dhal)</td>
                <td className="p-3.5 sm:p-4">Both place the tongue tip gently under the upper front teeth; <strong>ظ</strong> raises the back of the tongue for fullness.</td>
                <td className="p-3.5 sm:p-4"><em>Adh Dhalimeen</em> (The Wrongdoers)</td>
              </tr>
              <tr className="hover:bg-foreground/[0.015] transition-colors">
                <td className="p-3.5 sm:p-4 font-bold text-foreground">ض (Daad)</td>
                <td className="p-3.5 sm:p-4 font-semibold text-primary">د (Daal)</td>
                <td className="p-3.5 sm:p-4"><strong>Daad</strong> presses the sides of the tongue against the upper molars; <strong>Daal</strong> uses only the tongue tip behind the front teeth.</td>
                <td className="p-3.5 sm:p-4"><em>Walad Dalleen</em> at the end of Surah Al Fatiha</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: 3 Practical At Home Drills to Train Your Tongue and Throat */}
      <section id="3-practical-at-home-drills" className="space-y-6 scroll-mt-24">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-2xl bg-secondary/10 text-secondary">
            <Brain className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            3 Practical At Home Drills to Train Your Tongue and Throat
          </h2>
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-muted-text">
          You do not need an hour a day to fix your <strong>Makharij al Huruf</strong>. Like physical therapy, short daily repetitions build muscle memory fastest.
        </p>

        <div className="space-y-4 not-prose my-6">
          <div className="p-6 rounded-3xl glass border border-card-border space-y-2">
            <h3 className="font-bold text-base sm:text-lg text-foreground">
              1. The Cold Glass Test for Haa (ح) vs. Haa (هـ)
            </h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Hold the palm of your hand two inches in front of your mouth. Say <strong>هـ</strong> (like <em>hello</em>). You will feel a puff of air, and your throat stays wide open. Now whisper <strong>ح</strong> by narrowing the middle of your throat as if fogging up a mirror. You should feel a warm stream of air and hear a crisp friction sound. Repeat <em>&quot;Ha, Hee, Hoo&quot;</em> five times before starting your daily <Link href="/courses/quran-reading" className="text-primary hover:underline font-semibold">Quran Reading</Link> practice.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass border border-card-border space-y-2">
            <h3 className="font-bold text-base sm:text-lg text-foreground">
              2. The &quot;Alif&quot; Mirror Check for Heavy Letters
            </h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Sit in front of a mirror or open your laptop camera. Recite the seven heavy letters with a long Alif: <em>Khaa, Saa, Daa, Ghaa, Taa, Qaa, Dhaa</em>. Watch your lips closely. Your mouth should open vertically (up and down), never rounding into a circle. If your lips pucker, relax your face and focus on lifting the back of your tongue instead.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass border border-card-border space-y-2">
            <h3 className="font-bold text-base sm:text-lg text-foreground">
              3. The Sukoon Echo Test
            </h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              According to <strong>Imam Ibn al Jazari</strong>, the easiest way to locate the exact exit point (<em>Makhraj</em>) of any Arabic letter is to place a <em>Sukoon</em> (resting sign) on the letter and put a <em>Hamzah</em> before it. For example, say <strong>أَقْ (Aq)</strong>, <strong>أَعْ (A&apos;)</strong>, <strong>أَطْ (At)</strong>, or <strong>أَغْ (Agh)</strong>. Where the sound stops dead in your throat or mouth is that letter&apos;s true home.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Why You Cannot Master Makharij from YouTube Videos Alone */}
      <section id="why-youtube-not-enough" className="space-y-6 scroll-mt-24">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
            <Globe className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Why You Cannot Master Makharij from YouTube Videos Alone
          </h2>
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-muted-text">
          Reading diagrams and watching recorded videos gives you a fantastic mental map. However, your own ears hear your voice through bone conduction inside your skull, which means your pronunciation sounds different to you than it does to a listener.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-muted-text">
          Throughout fourteen centuries of Islamic history, the Quran has been passed down through <strong>Talaqqi</strong> (face to face oral transmission). Even the Prophet Muhammad ﷺ reviewed the Quran orally with the Angel Jibril every Ramadan, as recorded in <strong>Sahih al Bukhari (Hadith 4997)</strong>.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-muted-text">
          When you study in a live 1 on 1 online class, a certified tutor watches your jaw placement, listens to the resonance of your throat letters, and gives you instant feedback the second a heavy <em>Saad</em> slips into a light <em>Seen</em>. What takes six months of guessing on your own often clicks in two or three live sessions with a skilled teacher.
        </p>
      </section>

      {/* Section 8: Frequently Asked Questions (FAQ) */}
      <section id="frequently-asked-questions" className="space-y-6 scroll-mt-24">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-2xl bg-secondary/10 text-secondary">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Frequently Asked Questions (FAQ)
          </h2>
        </div>

        <div className="space-y-4 not-prose my-6">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl glass border border-card-border overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-foreground flex items-center justify-between gap-4 hover:bg-foreground/[0.02]"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-muted-text leading-relaxed border-t border-card-border/40">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 9: Perfect Your Recitation with a Certified 1 on 1 Tajweed Tutor */}
      <section className="space-y-6 my-12 not-prose">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-secondary/15 border border-primary/30 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Master Quran Phonetics</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight max-w-2xl mx-auto leading-tight">
            Perfect Your Recitation with a Certified 1 on 1 Tajweed Tutor
          </h2>

          <p className="text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
            There is nothing quite like the feeling of reciting Surah Al Fatiha or your favorite Surah in prayer and hearing every heavy letter and throat sound flow clearly and effortlessly.
          </p>

          <p className="text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
            At <strong>OQTutor</strong>, our certified male and female instructors specialize in helping children and adults across the <strong>USA, UK, Canada, and Australia</strong> master <strong>Makharij al Huruf</strong> and <strong>Tajweed</strong> in a warm, encouraging 1 on 1 environment. No pressure, no judgment, just clear step by step coaching tailored to your voice.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Book Your Free 1 on 1 Trial Class Today</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Relevant Related Courses Links */}
      <section className="space-y-4 pt-6 border-t border-card-border not-prose">
        <h3 className="font-bold text-base sm:text-lg text-foreground">
          Recommended Learning Paths
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs sm:text-sm">
          <Link
            href="/courses/noorani-qaida"
            className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary/40 hover:text-primary transition-all flex items-center justify-between group"
          >
            <span className="font-semibold text-foreground group-hover:text-primary">Noorani Qaida Course</span>
            <ArrowRight className="h-4 w-4 text-muted-text group-hover:text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/courses/quran-with-tajweed"
            className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary/40 hover:text-primary transition-all flex items-center justify-between group"
          >
            <span className="font-semibold text-foreground group-hover:text-primary">Quran with Tajweed</span>
            <ArrowRight className="h-4 w-4 text-muted-text group-hover:text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/courses/quran-reading"
            className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary/40 hover:text-primary transition-all flex items-center justify-between group"
          >
            <span className="font-semibold text-foreground group-hover:text-primary">Quran Reading</span>
            <ArrowRight className="h-4 w-4 text-muted-text group-hover:text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/courses/arabic-language"
            className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary/40 hover:text-primary transition-all flex items-center justify-between group"
          >
            <span className="font-semibold text-foreground group-hover:text-primary">Arabic Language</span>
            <ArrowRight className="h-4 w-4 text-muted-text group-hover:text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/courses/hifz-ul-quran"
            className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary/40 hover:text-primary transition-all flex items-center justify-between group"
          >
            <span className="font-semibold text-foreground group-hover:text-primary">Hifz ul Quran</span>
            <ArrowRight className="h-4 w-4 text-muted-text group-hover:text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary/40 hover:text-primary transition-all flex items-center justify-between group"
          >
            <span className="font-semibold text-foreground group-hover:text-primary">Contact / Book Trial</span>
            <ArrowRight className="h-4 w-4 text-muted-text group-hover:text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </article>
  );
}

