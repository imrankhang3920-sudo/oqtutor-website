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
  ChevronDown
} from 'lucide-react';

export default function ArticleContentTafseerIbnKathirVsJalalayn() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaq === idx ? null : idx);
  };
  const setOpenFaqIdx = (idx: number | null) => setOpenFaq(idx);

  const faqs = [
    {
      q: "Can a beginner read Tafseer Ibn Kathir on their own?",
      a: "While English abridgments (like the Darussalam edition) are accessible, studying Ibn Kathir without a qualified teacher often overwhelms beginners with extensive Hadith chains (Isnad), historical context (Asbab al-Nuzul), and theological debates. Guided study in a structured online Tafseer course ensures you extract actionable spiritual lessons without confusion."
    },
    {
      q: "Why is Tafseer Al-Jalalayn so popular in traditional madrasas?",
      a: "Tafseer Al-Jalalayn is prized for its extreme linguistic economy. The two Jalals (Al-Mahalli and Al-Suyuti) crafted an exegesis where the commentary word count matches the Quranic text almost word-for-word. It is the premier text for mastering classical Arabic syntax (I'rab), root vocabulary, and concise verse summaries."
    },
    {
      q: "Should I start with Tafseer Ibn Kathir or Tafseer Al-Jalalayn?",
      a: "For general English-speaking learners seeking stories, context, and spiritual inspiration, an abridged Tafseer Ibn Kathir guided by a teacher is ideal. For students who already know intermediate Arabic or want rapid word-for-word grammatical clarity, Al-Jalalayn is unmatched. Our online Quran Tafseer classes often combine both methodologies."
    },
    {
      q: "Are both of these Tafseers considered authentic by Sunni scholars?",
      a: "Yes, both Tafseer Ibn Kathir and Tafseer Al-Jalalayn represent foundational, universally respected works within mainstream Sunni scholarship and have been taught across Islamic universities like Al-Azhar, Madinah, and traditional Darul Ulooms for centuries."
    }
  ];

  return (
    <article className="space-y-10 text-foreground/90 leading-relaxed font-normal">
      {/* Reviewer Meta Badge */}
      <div className="p-4 sm:p-5 rounded-2xl bg-foreground/[0.02] border border-card-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-text">
        <div className="flex items-center space-x-2">
          <UserCheck className="h-4 w-4 text-primary shrink-0" />
          <span>
            Reviewed by <strong className="text-foreground font-semibold">Sheikh Rizwan Qureshi</strong>, M.A. Islamic Studies &amp; Senior Tafseer Scholar at OQTutor
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-muted-text/80">
          <Calendar className="h-3.5 w-3.5" />
          <span>Published: October 12, 2026</span>
        </div>
      </div>

      {/* Quick Answer Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 space-y-4 not-prose">
        <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest">
          <Sparkles className="h-4 w-4 fill-primary/20" />
          <span>Quick Summary for Beginners</span>
        </div>
        <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">
          <strong>Tafseer Ibn Kathir</strong> is best for learners who want rich historical background, Prophetic Hadith narrations, and stories of the Prophets (Tafseer bi&apos;l-Ma&apos;thur). <strong>Tafseer Al-Jalalayn</strong> is best for students who want concise, word-by-word grammatical definitions and rapid textual clarity. If you are learning Quran exegesis online, studying with a certified scholar in structured <Link href="/courses/tafseer" className="text-primary font-bold hover:underline">online Quran Tafseer classes</Link> gives you the ideal balance of both classical works.
        </p>
      </div>

      {/* Lead Paragraph */}
      <div className="space-y-4 text-base sm:text-lg text-muted-text">
        <p>
          When students transition from simply reciting the Quran to understanding its profound meanings, they inevitably encounter two of the most celebrated titles in Islamic literature: <strong className="text-foreground font-semibold">Tafseer Ibn Kathir</strong> and <strong className="text-foreground font-semibold">Tafseer Al-Jalalayn</strong>.
        </p>
        <p>
          Both titles grace the bookshelves of scholars from Cairo to London. Yet their pedagogical approaches could hardly be more different. One is an expansive multi-volume encyclopedia of transmitted traditions (Hadith), while the other is a laser-focused, single-volume linguistic masterwork where virtually every word counts.
        </p>
        <p>
          If you are embarking on your journey to understand the Quran, which classical commentary should you study first? How do their methodologies differ, and how can an ordinary student make sense of them? This comprehensive guide breaks down the historical background, strengths, limitations, and practical recommendations for modern learners.
        </p>
      </div>

      {/* Featured Cover / Desk Image */}
      <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[500px]">
          <Image
            src="/blog/how-to-learn-quran-tafseer-online/quran-tafseer-study-desk-lamp.jpg"
            alt="Classical Quran Tafseer study desk with open Mushaf and Islamic commentary texts"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
        <div className="p-4 bg-secondary/5 border-t border-card-border text-xs sm:text-sm text-center text-muted-text">
          <span>Comparing classical exegesis: Tafseer Ibn Kathir and Tafseer Al-Jalalayn form the foundational twin pillars of Quranic comprehension.</span>
        </div>
      </div>

      {/* Table of Contents */}
      <nav aria-label="Table of contents" className="p-6 sm:p-8 rounded-3xl glass border border-card-border space-y-4 not-prose my-8">
        <div className="flex items-center space-x-2.5 text-foreground font-extrabold text-base sm:text-lg">
          <Compass className="h-5 w-5 text-primary" />
          <span>Table of Contents</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium text-muted-text">
          <a href="#what-is-tafseer-ibn-kathir" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">1.</span>
            <span>What Is Tafseer Ibn Kathir? (Tafseer bi&apos;l-Ma&apos;thur)</span>
          </a>
          <a href="#what-is-tafseer-al-jalalayn" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">2.</span>
            <span>What Is Tafseer Al-Jalalayn? (Linguistic Precision)</span>
          </a>
          <a href="#head-to-head-comparison" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">3.</span>
            <span>Head-to-Head Comparison: 6 Key Differences</span>
          </a>
          <a href="#case-study-fatiha" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">4.</span>
            <span>Case Study: Surah Al-Fatiha in Both Exegeses</span>
          </a>
          <a href="#why-self-study-fails" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">5.</span>
            <span>The Pitfalls of Self-Study Without a Qualified Scholar</span>
          </a>
          <a href="#how-oqtutor-teaches-both" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">6.</span>
            <span>How OQTutor Combines Both in Online Classes</span>
          </a>
        </div>
      </nav>

      {/* SECTION 1: What is Tafseer Ibn Kathir */}
      <section id="what-is-tafseer-ibn-kathir" className="space-y-5 pt-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">The Transmitted Tradition</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            1. What Is Tafseer Ibn Kathir? The Gold Standard of Tafseer bi&apos;l-Ma&apos;thur
          </h2>
        </div>

        <p>
          Authored by the eminent 8th-century Damascene scholar <strong className="text-foreground">Al-Hafiz Imad al-Din Ibn Kathir (d. 774 AH / 1373 CE)</strong>, <em>Tafsir al-Qur&apos;an al-Azim</em> is universally recognized as the most authoritative compilation of <strong>Tafseer bi&apos;l-Ma&apos;thur</strong> (interpretation based on transmitted evidence).
        </p>

        <p>
          Imam Ibn Kathir was a master historian and Hadith scholar who studied under giants such as Ibn Taymiyyah and Al-Mizzi. His methodology follows a strict, disciplined hierarchy of verification:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 not-prose">
          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm">
              <CheckCircle className="h-4 w-4" />
              <span>1. Quran Explained by the Quran</span>
            </div>
            <p className="text-xs text-muted-text">
              Where an ayah is brief in one chapter, Ibn Kathir cross-references other Surahs where Allah explains the matter in greater detail.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm">
              <CheckCircle className="h-4 w-4" />
              <span>2. Explanation by the Sunnah</span>
            </div>
            <p className="text-xs text-muted-text">
              He cites authentic narrations from Sahih al-Bukhari, Sahih Muslim, and the Musnad of Imam Ahmad demonstrating how the Prophet (pbuh) practiced and explained the verse.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm">
              <CheckCircle className="h-4 w-4" />
              <span>3. Commentary of the Sahabah</span>
            </div>
            <p className="text-xs text-muted-text">
              He documents how companions who witnessed revelation firsthand—especially Abdullah ibn Abbas and Abdullah ibn Mas&apos;ud—understood its direct context.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm">
              <CheckCircle className="h-4 w-4" />
              <span>4. Statements of the Tabi&apos;in</span>
            </div>
            <p className="text-xs text-muted-text">
              He compiles insights from pioneering students of the companions like Mujahid, Qatadah, and Al-Hasan al-Basri.
            </p>
          </div>
        </div>

        <p>
          One of Ibn Kathir&apos;s greatest scholarly contributions was his critical defense of Islamic orthodoxy against unreliable <em>Isra&apos;iliyyat</em> (Judeo-Christian folkloric tales that had crept into historical commentaries). He meticulously pointed out weak narrations, ensuring that readers received authentic, verified theology.
        </p>
      </section>

      {/* SECTION 2: What is Tafseer Al-Jalalayn */}
      <section id="what-is-tafseer-al-jalalayn" className="space-y-5 pt-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">The Linguistic Masterpiece</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            2. What Is Tafseer Al-Jalalayn? The Masterwork of Conciseness
          </h2>
        </div>

        <p>
          <em>Tafseer Al-Jalalayn</em> (&ldquo;The Commentary of the Two Jalals&rdquo;) was written by two extraordinary Egyptian scholars in the 15th and 16th centuries: <strong className="text-foreground">Jalal al-Din al-Mahalli (d. 864 AH)</strong> and his brilliant student, the encyclopedic polymath <strong className="text-foreground">Jalal al-Din al-Suyuti (d. 911 AH)</strong>.
        </p>

        <p>
          Imam al-Mahalli began writing the commentary starting from Surah Al-Kahf to Surah An-Nas, and completed Surah Al-Fatiha before passing away. Decades later, Imam al-Suyuti completed the remaining portion from Surah Al-Baqarah to Surah Al-Isra in the exact same remarkably concise style in just 40 days.
        </p>

        <p>
          Legend has it that scholars counted the words of the Quran and the words of Al-Jalalayn and found them virtually identical in volume. The characteristics of Al-Jalalayn include:
        </p>

        <ul className="space-y-2.5 text-sm sm:text-base text-muted-text list-disc list-inside">
          <li><strong>Direct synonym replacement:</strong> Obscure classical words are immediately paired with simpler classical Arabic equivalents.</li>
          <li><strong>Grammatical parsing (I&apos;rab):</strong> It quickly resolves syntactical ambiguities, implied pronouns, and ellipsis (Mahdhoof).</li>
          <li><strong>Variant recitations (Qira&apos;at):</strong> It briefly notes differences in canonical recitations where they add meaning.</li>
          <li><strong>Concise legal indicators:</strong> Brief hints to Shafi&apos;i jurisprudential rulings without drawn-out debates.</li>
        </ul>
      </section>

      {/* SECTION 3: Head-to-Head Comparison Table */}
      <section id="head-to-head-comparison" className="space-y-6 pt-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">At a Glance</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            3. Head-to-Head Comparison: Tafseer Ibn Kathir vs. Tafseer Al-Jalalayn
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-card-border overflow-x-auto not-prose">
          <table className="w-full text-xs sm:text-sm text-left">
            <thead>
              <tr className="border-b border-card-border text-muted-text">
                <th className="py-3 px-4 font-semibold">Evaluation Criteria</th>
                <th className="py-3 px-4 font-semibold text-primary">Tafseer Ibn Kathir</th>
                <th className="py-3 px-4 font-semibold text-secondary">Tafseer Al-Jalalayn</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border/60 text-muted-text">
              <tr>
                <td className="py-3.5 px-4 font-medium text-foreground">Primary Methodology</td>
                <td className="py-3.5 px-4 font-semibold text-primary">Tafseer bi&apos;l-Ma&apos;thur (Hadith &amp; Transmitted Traditions)</td>
                <td className="py-3.5 px-4 font-semibold text-secondary">Linguistic, Grammatical &amp; Synonym Clarification</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-foreground">Volume &amp; Scope</td>
                <td className="py-3.5 px-4">Extensive multi-volume encyclopedia (4 to 10 volumes in Arabic)</td>
                <td className="py-3.5 px-4">Extremely concise single volume</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-foreground">Asbab al-Nuzul (Occasions of Revelation)</td>
                <td className="py-3.5 px-4">Deep, historical narrative context with multiple chains</td>
                <td className="py-3.5 px-4">Ultra-brief 1-sentence pointers to the event</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-foreground">Language Complexity</td>
                <td className="py-3.5 px-4">Accessible classical Arabic; heavily translated into English</td>
                <td className="py-3.5 px-4">Dense classical Arabic idioms requiring grammatical grounding</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-foreground">Best For Beginners?</td>
                <td className="py-3.5 px-4 text-foreground font-semibold">Yes — when using an abridged version or guided by a tutor</td>
                <td className="py-3.5 px-4 text-foreground font-semibold">Best alongside an instructor who can unpack the brevity</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-foreground">Impact on Daily Salah</td>
                <td className="py-3.5 px-4">Gives emotional depth, stories, and moral reflection</td>
                <td className="py-3.5 px-4">Gives exact word-for-word semantic clarity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: Case Study on Surah Al-Fatiha */}
      <section id="case-study-fatiha" className="space-y-5 pt-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">Real-World Case Study</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            4. Practical Case Study: How Each Commentary Explains Surah Al-Fatiha
          </h2>
        </div>

        <p>
          To understand how their methods play out in practice, let us examine how both commentaries treat the final ayah of Surah Al-Fatiha (1:7):
        </p>

        <div className="p-6 rounded-2xl bg-foreground/[0.03] border border-card-border text-center space-y-2 my-4 not-prose">
          <p className="text-xl sm:text-2xl font-serif text-foreground font-bold tracking-wide" dir="rtl">
            صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
          </p>
          <p className="text-xs sm:text-sm text-muted-text italic">
            &ldquo;The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
          <div className="glass p-6 sm:p-7 rounded-3xl border border-primary/30 bg-primary/[0.02] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              Ibn Kathir&apos;s Treatment
            </span>
            <h3 className="text-base font-bold text-foreground">The Hadith &amp; Thematic Exposition</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Ibn Kathir spends multiple pages on this single verse. He identifies &ldquo;those whom You have favored&rdquo; by cross-referencing Surah An-Nisa (4:69) to explain that they are the Prophets, the truthful (Siddiqin), the martyrs (Shuhada), and the righteous (Salihin).
            </p>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              He then cites the authentic Hadith from the Musnad of Imam Ahmad and Sunan al-Tirmidhi where the Prophet (pbuh) specifically identified <em>Al-Maghdubi &apos;alayhim</em> as the Jews (who possessed divine knowledge but neglected action) and <em>Ad-Dallin</em> as the Christians (who worshiped without knowledge, falling into misguidance).
            </p>
          </div>

          <div className="glass p-6 sm:p-7 rounded-3xl border border-secondary/30 bg-secondary/[0.02] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full">
              Al-Jalalayn&apos;s Treatment
            </span>
            <h3 className="text-base font-bold text-foreground">The Rapid Linguistic Definition</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Al-Jalalayn covers the entire verse in just three lines of Arabic. He specifies that <em>Sirat</em> is in the accusative case (Mansub) as a substitution (Badal) for the path in the preceding ayah.
            </p>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              He notes that &ldquo;those upon whom You have bestowed favor&rdquo; refers to the believers through divine guidance. He adds a brief note that &ldquo;those who evoked anger&rdquo; are the Jews and &ldquo;those who are astray&rdquo; are the Christians, before concluding with the Sunnah rule that it is recommended for the reciter to say &ldquo;Ameen&rdquo; after reciting it.
            </p>
          </div>
        </div>

        <p className="pt-2">
          Notice how both works arrive at the same authentic conclusion, but Ibn Kathir builds your theological and historical conviction through textual evidence, while Al-Jalalayn equips you with instant linguistic clarity so your brain understands the Arabic during prayer.
        </p>
      </section>

      {/* Callout to Course */}
      <div className="p-7 sm:p-9 rounded-3xl bg-primary/10 border border-primary/20 space-y-4 not-prose my-6">
        <h3 className="text-xl font-bold text-foreground">Want to Master Both Methodologies with a Qualified Mentor?</h3>
        <p className="text-sm text-muted-text leading-relaxed">
          At OQTutor, our certified Islamic scholars guide students through the complementary treasures of Ibn Kathir and Al-Jalalayn. Discover our tailored <Link href="/courses/tafseer" className="text-primary font-bold hover:underline">online Quran Tafseer classes</Link> with 1-on-1 private lessons or collaborative group cohorts.
        </p>
        <Link
          href="/book-free-trial"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider transition-all"
        >
          <span>Book a Free Trial Session</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* SECTION 5: Why Self-Study Fails */}
      <section id="why-self-study-fails" className="space-y-5 pt-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Scholarly Safeguards</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            5. The Pitfalls of Self-Studying Classical Tafseer Without a Teacher
          </h2>
        </div>

        <p>
          In our digital era, thousands of Muslims download PDF copies of Tafseer Ibn Kathir onto tablets or e-readers with good intentions. Unfortunately, self-study often stalls within a few weeks due to three predictable hurdles:
        </p>

        <div className="space-y-4 not-prose">
          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-1.5">
            <h4 className="text-sm font-bold text-foreground flex items-center space-x-2">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
              <span>Information Overload &amp; Academic Burnout</span>
            </h4>
            <p className="text-xs sm:text-sm text-muted-text pl-8">
              Unabridged classical works contain hundreds of pages detailing obscure Hadith narrators and historical disputes that are irrelevant to a beginner&apos;s daily spiritual life. Without a scholar to highlight what matters, students quickly lose momentum.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-1.5">
            <h4 className="text-sm font-bold text-foreground flex items-center space-x-2">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
              <span>Misapplying Historical Verses Out of Context</span>
            </h4>
            <p className="text-xs sm:text-sm text-muted-text pl-8">
              Certain verses in Surah At-Tawbah or Surah Al-Anfal address specific battlefields and military alliances in 7th-century Arabia. Readers lacking Asbab al-Nuzul often misapply them to peaceful personal interactions in modern Western societies.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-1.5">
            <h4 className="text-sm font-bold text-foreground flex items-center space-x-2">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
              <span>Inability to Ask Nuanced Personal Questions</span>
            </h4>
            <p className="text-xs sm:text-sm text-muted-text pl-8">
              A book cannot answer back. When an ayah sparks difficult questions regarding family rights, personal grief, or faith struggles, only an interactive live mentor can provide compassionate, authentic clarification.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: How OQTutor Teaches Both */}
      <section id="how-oqtutor-teaches-both" className="space-y-5 pt-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">The Balanced Approach</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            6. How OQTutor Teaches Classical Tafseer in Online Classes
          </h2>
        </div>

        <p>
          At OQTutor, our academic faculty has developed a synchronized methodology that synthesizes the best of both classical traditions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-4">
          <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Volume2 className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-foreground">1. Al-Jalalayn for Vocabulary</h4>
            <p className="text-xs text-muted-text leading-relaxed">
              We begin with concise root word definitions and linguistic grammar so you immediately understand each Arabic word you recite.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
            <div className="h-10 w-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center">
              <Layers className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-foreground">2. Ibn Kathir for Context</h4>
            <p className="text-xs text-muted-text leading-relaxed">
              Next, the scholar shares screen notes highlighting the authentic Hadith narrations and historical Asbab al-Nuzul from Ibn Kathir.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Sparkles className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-foreground">3. Tadabbur for Daily Life</h4>
            <p className="text-xs text-muted-text leading-relaxed">
              We conclude each lesson with personal application: how this verse guides your character, family ethics, worship, and emotional peace.
            </p>
          </div>
        </div>

        <p>
          Whether you choose private <Link href="/courses/tafseer" className="text-primary font-bold hover:underline">1-on-1 Tafseer mentorship</Link> or join a small interactive group Halaqah, our faculty ensures you progress steadily through <Link href="/blog/why-studying-juz-amma-tafseer-essential-guide" className="text-primary font-bold hover:underline">Juz Amma</Link> and key flagship Surahs with joy and clarity.
        </p>
      </section>

      {/* FAQ SECTION */}
      <section className="space-y-6 pt-6 not-prose">
        <h3 className="text-2xl font-extrabold text-foreground">Frequently Asked Questions</h3>
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

      {/* FINAL ENROLLMENT BANNER */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-secondary/15 border border-primary/20 text-center space-y-4 not-prose shadow-xl my-8">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
          Explore Classical Exegesis
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
          Study Tafseer Ibn Kathir &amp; Al-Jalalayn Online
        </h3>
        <p className="text-xs sm:text-sm text-muted-text max-w-xl mx-auto leading-relaxed">
          Join our dedicated <Link href="/courses/tafseer" className="text-primary font-bold hover:underline">online Quran Tafseer course</Link> with certified scholars from Al-Azhar and IIUI. Experience personalized 1-on-1 mentorship or collaborative small group classes today.
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
            View Tafseer Course Details
          </Link>
        </div>
      </div>

    </article>
  );
}
