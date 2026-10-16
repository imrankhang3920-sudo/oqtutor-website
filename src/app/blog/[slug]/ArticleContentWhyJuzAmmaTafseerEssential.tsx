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
  ListChecks,
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
  ChevronDown,
  Heart,
  Smile,
  Shield
} from 'lucide-react';

export default function ArticleContentWhyJuzAmmaTafseerEssential() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "Why do Islamic scholars recommend starting Tafseer with Juz Amma?",
      a: "Juz Amma contains the 37 short Surahs most commonly recited in daily Salah. By starting here, students immediately experience the practical reward of their studies five times a day during prayer. The Surahs are concise, rhythmically memorable, and focus on essential Islamic beliefs (Aqeedah) without complex legal debates."
    },
    {
      q: "How long does it take to complete the Tafseer of the entire 30th Juz?",
      a: "With consistent weekly lessons (2 to 3 sessions per week), a student typically completes an in-depth study of Juz Amma with word-for-word translation and historical context in 3 to 6 months. In our online Quran Tafseer classes, students can study at their own pace in 1-on-1 lessons or join a structured group cohort."
    },
    {
      q: "Is Juz Amma Tafseer suitable for children and teenagers?",
      a: "Yes, it is the ideal starting point for youth. The short Surahs of Juz Amma are packed with vivid imagery of the cosmos, inspiring stories of steadfast believers, and practical moral lessons on honesty, kindness to orphans, and sincerity that deeply resonate with young minds."
    },
    {
      q: "Can sisters learn Juz Amma Tafseer with a female scholar?",
      a: "Yes, absolutely. At OQTutor, sisters can study with certified female Islamic scholars (Alimahs) who hold formal university degrees in Islamic sciences and Ijazat in Quranic commentary, providing an intimate, comfortable, and supportive learning space."
    }
  ];

  return (
    <article className="space-y-10 text-foreground/90 leading-relaxed font-normal">
      {/* Reviewer Meta Badge */}
      <div className="p-4 sm:p-5 rounded-2xl bg-foreground/[0.02] border border-card-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-text">
        <div className="flex items-center space-x-2">
          <UserCheck className="h-4 w-4 text-primary shrink-0" />
          <span>
            Reviewed by <strong className="text-foreground font-semibold">Ustadha Amina Al-Azhari</strong>, Al-Azhar University Graduate &amp; Senior Female Tafseer Faculty at OQTutor
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-muted-text/80">
          <Calendar className="h-3.5 w-3.5" />
          <span>Published: October 15, 2026</span>
        </div>
      </div>

      {/* Quick Answer Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 space-y-4 not-prose">
        <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest">
          <Sparkles className="h-4 w-4 fill-primary/20" />
          <span>Quick Summary for Busy Learners</span>
        </div>
        <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">
          <strong>Juz Amma (the 30th Juz of the Quran)</strong> contains the 37 short Surahs Muslims recite most often in their daily prayers. Studying its Tafseer transforms routine mechanical recitation into deep prayer focus (<em>Khushu&apos;</em>), builds an unshakable foundation in Islamic creed (Tawheed &amp; Akhirah), and provides the fastest path to mastering high-frequency Quranic Arabic vocabulary. You can study it from home in structured <Link href="/courses/tafseer" className="text-primary font-bold hover:underline">online Quran Tafseer classes</Link>.
        </p>
      </div>

      {/* Lead Paragraph */}
      <div className="space-y-4 text-base sm:text-lg text-muted-text">
        <p>
          Ask any practicing Muslim what their biggest struggle in daily prayer is, and the answer is almost universal: <strong className="text-foreground font-semibold">&ldquo;My mind wanders during Salah.&rdquo;</strong>
        </p>
        <p>
          We stand on the prayer mat, recite Surah Al-Ikhlas, Surah Al-Falaq, or Surah Al-Kawthar, yet our hearts remain strangely detached. We vocalize Arabic phonetics, but our thoughts drift to emails, dinner plans, or tomorrow&apos;s meetings.
        </p>
        <p>
          The root cause is not a lack of piety; it is a lack of <em>comprehension</em>. You cannot be moved by words you do not truly understand. That is why traditional Islamic scholarship has always urged believers to begin their Quranic journey with <strong className="text-foreground font-semibold">Juz Amma Tafseer</strong>.
        </p>
        <p>
          In this guide, we explore the five transformative reasons why studying the 30th Juz is the single most practical spiritual investment any Muslim can make, and how learning it through modern <Link href="/courses/tafseer" className="text-primary font-bold hover:underline">1-on-1 and group Tafseer classes</Link> creates lifelong connection with Allah&apos;s book.
        </p>
      </div>

      {/* Featured Cover Image */}
      <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[500px]">
          <Image
            src="/quran-salah.jpg"
            alt="Muslim performing Salah with Holy Quran open on wooden rehal in serene mosque light"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
        <div className="p-4 bg-secondary/5 border-t border-card-border text-xs sm:text-sm text-center text-muted-text">
          <span>Transforming prayer: Understanding the 37 short chapters of Juz Amma unlocks true emotional focus (Khushu&apos;) in daily Salah.</span>
        </div>
      </div>

      {/* Table of Contents */}
      <nav aria-label="Table of contents" className="p-6 sm:p-8 rounded-3xl glass border border-card-border space-y-4 not-prose my-8">
        <div className="flex items-center space-x-2.5 text-foreground font-extrabold text-base sm:text-lg">
          <Compass className="h-5 w-5 text-primary" />
          <span>Table of Contents</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium text-muted-text">
          <a href="#what-makes-juz-amma-unique" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">1.</span>
            <span>What Makes Juz Amma Unique in the Quran?</span>
          </a>
          <a href="#transforming-salah" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">2.</span>
            <span>Unlocking True Khushu&apos; in Daily Prayer</span>
          </a>
          <a href="#foundation-of-aqeedah" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">3.</span>
            <span>The Bedrock of Islamic Creed (Aqeedah)</span>
          </a>
          <a href="#vocabulary-mastery" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">4.</span>
            <span>Rapid Word-for-Word Vocabulary Mastery</span>
          </a>
          <a href="#emotional-healing" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">5.</span>
            <span>Spiritual Solace &amp; Emotional Resilience</span>
          </a>
          <a href="#how-to-study-juz-amma" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">6.</span>
            <span>The 3-Tier Study Progression for Beginners</span>
          </a>
        </div>
      </nav>

      {/* SECTION 1: What makes Juz Amma Unique */}
      <section id="what-makes-juz-amma-unique" className="space-y-5 pt-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">The 30th Portion</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            1. What Makes Juz Amma Unique in the Quran?
          </h2>
        </div>

        <p>
          The Quran consists of 30 equal parts known as <em>Juz&apos;</em> (plural <em>Ajza&apos;</em>). While most Juz contain two or three lengthy Surahs, <strong>Juz Amma (Juz 30)</strong> spans a staggering <strong className="text-foreground">37 Surahs</strong>—from Surah An-Naba (Chapter 78) to Surah An-Nas (Chapter 114).
        </p>

        <p>
          Nearly all of these chapters were revealed during the early Makkan period, when the fledgling Muslim community faced severe persecution. As a result, the linguistic style of Juz Amma is unlike any other part of the Quran:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4 not-prose">
          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
              <Sparkles className="h-4 w-4" />
            </div>
            <h4 className="text-sm font-bold text-foreground">Urgent Rhythmic Cadence</h4>
            <p className="text-xs text-muted-text">
              Short, punchy verses with end-rhymes (Fawasil) that arrest the human ear and shatter complacency.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <div className="h-9 w-9 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center font-bold">
              <Compass className="h-4 w-4" />
            </div>
            <h4 className="text-sm font-bold text-foreground">Cosmic Imagery</h4>
            <p className="text-xs text-muted-text">
              Divine oaths sworn by the sun, the moon, constellations, dawn, and the night sky to prompt deep reflection on creation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
              <Heart className="h-4 w-4" />
            </div>
            <h4 className="text-sm font-bold text-foreground">Core Existential Questions</h4>
            <p className="text-xs text-muted-text">
              Addresses fundamental human questions: Why are we here? Where are we going? What happens after death?
            </p>
          </div>
        </div>

        <p>
          Because of their brevity and rhythm, these are the very first Surahs children memorize in Quran madrasas and reverts learn upon entering Islam. However, memorizing sounds without knowing their meanings leaves the spiritual engine switched off.
        </p>
      </section>

      {/* SECTION 2: Unlocking Khushu in Daily Prayer */}
      <section id="transforming-salah" className="space-y-5 pt-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">The Practical Heart</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            2. Unlocking True Khushu&apos; in Your Five Daily Prayers
          </h2>
        </div>

        <p>
          Every Muslim prays at least 17 Rak&apos;ahs of obligatory prayer daily. In almost every single Rak&apos;ah after Surah Al-Fatiha, we recite Surahs from Juz Amma. Consider the psychological difference between two worshipers:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 not-prose">
          <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-text bg-foreground/5 px-3 py-1 rounded-full">
              Worshiper A: Recitation Without Tafseer
            </span>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Recites Surah Al-Falaq from memory. Pronounces the words <em>&ldquo;Min sharri ghasiqin idha waqab&rdquo;</em> correctly according to Tajweed rules, but has no conscious idea what <em>ghasiq</em> or <em>waqab</em> means.
            </p>
            <div className="pt-2 text-xs text-secondary font-semibold">
              Result: Mind quickly wanders to mundane worldly distractions.
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border-2 border-primary/30 bg-primary/[0.02] space-y-3 shadow-md">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              Worshiper B: Recitation With Juz Amma Tafseer
            </span>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Knows that <em>ghasiq</em> refers to the pitch-black darkness when it spreads, and that this Surah was revealed when the Prophet (pbuh) was affected by black magic. Recites with genuine trembling and seeking active divine refuge.
            </p>
            <div className="pt-2 text-xs text-primary font-bold">
              Result: Profound emotional awe, tears, and transformative Khushu&apos;.
            </div>
          </div>
        </div>

        <p>
          When you learn the reasons of revelation (Asbab al-Nuzul) and classical interpretations of these Surahs, your prayer mat ceases to be a place of obligation and becomes an emotional sanctuary of peace.
        </p>
      </section>

      {/* Internal Course Promotion Card */}
      <div className="p-7 sm:p-9 rounded-3xl bg-secondary/10 border border-secondary/20 space-y-4 not-prose my-6">
        <h3 className="text-xl font-bold text-foreground">Ready to Transform Your Salah Forever?</h3>
        <p className="text-sm text-muted-text leading-relaxed">
          Our dedicated <Link href="/courses/tafseer" className="text-primary font-bold hover:underline">online Quran Tafseer course</Link> offers a structured 3-month Juz Amma track taught 1-on-1 by certified Islamic scholars. Experience live, interactive classes with screen-shared notes and word-for-word root analysis.
        </p>
        <Link
          href="/book-free-trial"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider transition-all"
        >
          <span>Book a Free 30-Minute Trial</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* SECTION 3: The Bedrock of Islamic Creed */}
      <section id="foundation-of-aqeedah" className="space-y-5 pt-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Spiritual Anchor</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            3. The Bedrock of Islamic Creed (Aqeedah &amp; the Afterlife)
          </h2>
        </div>

        <p>
          Modern living surrounds Muslims with materialism, secular skepticism, and moral ambiguity. In such an environment, how do we anchor our hearts and our children&apos;s faith?
        </p>

        <p>
          The answer lies directly in Juz Amma. The Makkan Surahs are pedagogical masterclasses in building unwavering faith:
        </p>

        <ul className="space-y-3 text-sm sm:text-base text-muted-text list-none pl-0">
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span><strong className="text-foreground">Pure Monotheism (Tawheed):</strong> Surah Al-Ikhlas (Chapter 112) is described by the Prophet (pbuh) as equivalent to one-third of the Quran because it purifies human conception of Allah from any partners, children, or likeness.</span>
          </li>
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span><strong className="text-foreground">Resurrection &amp; Accountability (Al-Qiyamah):</strong> Surahs like An-Naba, Al-Inshiqaq, and At-Takwir remove the illusion of worldly permanence, reminding us that every deed, whether the weight of an atom of good or evil, will be presented before Allah.</span>
          </li>
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span><strong className="text-foreground">Protection from the Unseen:</strong> Surah Al-Falaq and Surah An-Nas shield believers from malice, jealousy (Hasad), and the insidious whisperings of Shaytan.</span>
          </li>
        </ul>
      </section>

      {/* SECTION 4: Rapid Vocabulary Mastery */}
      <section id="vocabulary-mastery" className="space-y-5 pt-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">Linguistic Acceleration</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            4. Rapid Word-for-Word Vocabulary Mastery
          </h2>
        </div>

        <p>
          Many adults believe they must spend years studying complex Arabic grammar before they can understand the Quran. This is a common misconception!
        </p>

        <p>
          Classical Arabic is built around trilateral roots (3-letter roots). By studying the word-for-word translation of Juz Amma, you naturally absorb over <strong className="text-foreground">70% of the recurring vocabulary</strong> used across the entire Quran. Words like <em>Al-Ard</em> (the earth), <em>As-Sama&apos;</em> (the heaven), <em>Al-Hisab</em> (the reckoning), <em>Al-Jannah</em> (paradise), and <em>An-Nar</em> (the fire) appear constantly.
        </p>

        <p>
          In our <Link href="/courses/tafseer" className="text-primary font-bold hover:underline">online Quran Tafseer classes</Link>, tutors deconstruct every word on a digital interactive whiteboard. You do not just memorize definitions; you see how Arabic roots derive into multiple meanings, making your Quranic vocabulary expand exponentially within weeks.
        </p>
      </section>

      {/* SECTION 5: Spiritual Solace in Hardship */}
      <section id="emotional-healing" className="space-y-5 pt-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Emotional Balm</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            5. Spiritual Solace &amp; Emotional Resilience
          </h2>
        </div>

        <p>
          When you feel abandoned, anxious, or overwhelmed by life&apos;s difficulties, no literature on earth provides solace like the middle chapters of Juz Amma:
        </p>

        <div className="space-y-4 not-prose my-4">
          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <h4 className="text-base font-bold text-foreground">Surah Ad-Duha (Chapter 93)</h4>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Revealed when revelation paused for six months and the polytheists mocked the Prophet (pbuh), claiming Allah had forsaken him. Allah revealed: <em>&ldquo;Your Lord has not forsaken you, nor is He displeased.&rdquo;</em> Studying this Surah cures modern feelings of isolation and despair.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <h4 className="text-base font-bold text-foreground">Surah Ash-Sharh (Chapter 94)</h4>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Provides the timeless divine promise: <em>&ldquo;Indeed, with hardship comes ease.&rdquo;</em> Notice the grammar: the word &lsquo;hardship&rsquo; is definite (Al-&apos;Usr) while &lsquo;ease&rsquo; is indefinite (Yusra)—meaning one single hardship can never overcome two eases.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <h4 className="text-base font-bold text-foreground">Surah Al-Kawthar (Chapter 108)</h4>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              The shortest chapter in the Quran, consisting of just three verses. Revealed when the Prophet&apos;s infant son passed away and enemies called him <em>Abtar</em> (cut off without legacy). Allah answered by granting him Al-Kawthar (abundance in this world and the Hereafter).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: The 3-Tier Study Progression */}
      <section id="how-to-study-juz-amma" className="space-y-5 pt-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">Structured Pathway</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            6. The Recommended 3-Tier Study Progression for Beginners
          </h2>
        </div>

        <p>
          If you are starting today, how should you tackle the 37 Surahs of Juz Amma? At OQTutor, our scholars follow a pedagogically proven 3-tier sequence:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-4">
          <div className="glass p-6 rounded-2xl border border-primary/30 space-y-3">
            <div className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
              Stage 1 (Weeks 1–4)
            </div>
            <h4 className="text-base font-bold text-foreground">The Four Quls &amp; Short Surahs</h4>
            <p className="text-xs text-muted-text leading-relaxed">
              Surah Ad-Duha to Surah An-Nas (Surahs 93–114). Focus on word-for-word translation, divine solace, pure Tawheed, and daily Adhkar protections.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
            <div className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full inline-block">
              Stage 2 (Weeks 5–8)
            </div>
            <h4 className="text-base font-bold text-foreground">Oaths, Soul &amp; Moral Struggle</h4>
            <p className="text-xs text-muted-text leading-relaxed">
              Surah Al-A&apos;la to Surah Al-Layl (Surahs 87–92). Focus on the purification of the soul (Tazkiyah), generosity, social justice, and care for orphans.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
            <div className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
              Stage 3 (Weeks 9–12)
            </div>
            <h4 className="text-base font-bold text-foreground">The Cosmic Makkan Epics</h4>
            <p className="text-xs text-muted-text leading-relaxed">
              Surah An-Naba to Surah At-Tariq (Surahs 78–86). Deep dive into resurrection, cosmic dissolution, divine power, and eternal life in the Akhirah.
            </p>
          </div>
        </div>

        <p>
          By following this natural progression, students never feel overwhelmed. Each week builds upon the vocabulary and concepts learned in the previous session.
        </p>
      </section>

      {/* Comparison: 1-on-1 vs Group Classes */}
      <div className="p-8 rounded-3xl bg-card border border-card-border space-y-4 not-prose my-8">
        <h3 className="text-xl font-bold text-foreground">Study Juz Amma: Private 1-on-1 or Small Group Halaqah?</h3>
        <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
          At OQTutor, you can choose the learning format that suits your personality and routine. In our <Link href="/courses/tafseer" className="text-primary font-bold hover:underline">1-on-1 online Quran Tafseer classes</Link>, you progress at your exact pace with male scholars or female Alimahs, asking private questions freely. In our small group classes (3 to 5 students), you enjoy collaborative discussions with peers and family cohorts at budget-friendly rates.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/courses/tafseer"
            className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Explore Tafseer Course &amp; Syllabus
          </Link>
          <Link
            href="/book-free-trial"
            className="px-6 py-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Register for Free Trial
          </Link>
        </div>
      </div>

      {/* FAQ Accordion */}
      <section className="space-y-6 pt-6 not-prose">
        <h3 className="text-2xl font-extrabold text-foreground">Frequently Asked Questions About Juz Amma</h3>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="rounded-2xl border border-card-border bg-card overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                >
                  <span className="text-xs sm:text-sm font-bold pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-muted-text border-t border-card-border/50">
                    <p className="pt-3 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Conversion Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-secondary/15 border border-primary/20 text-center space-y-4 not-prose shadow-xl my-8">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
          Transform Your Relationship with Allah&apos;s Book
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
          Start Your Juz Amma Tafseer Journey Today
        </h3>
        <p className="text-xs sm:text-sm text-muted-text max-w-xl mx-auto leading-relaxed">
          Do not spend another prayer reciting without knowing the meaning. Book a free 30-minute trial session in our <Link href="/courses/tafseer" className="text-primary font-bold hover:underline">online Quran Tafseer course</Link> and connect with certified scholars today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
          <Link
            href="/book-free-trial"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
          >
            Book Free Trial Session
          </Link>
          <Link
            href="/courses/tafseer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border text-xs font-bold uppercase tracking-wider transition-all"
          >
            View Full Tafseer Syllabus
          </Link>
        </div>
      </div>

    </article>
  );
}
