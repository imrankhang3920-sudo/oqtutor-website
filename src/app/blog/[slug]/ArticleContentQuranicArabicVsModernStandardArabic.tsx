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
  ExternalLink,
  ChevronDown,
  TreePine,
  GitFork,
  BookText,
  BookmarkCheck,
  Languages,
  Zap,
  Target,
  Info
} from 'lucide-react';

export default function ArticleContentQuranicArabicVsModernStandardArabic() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Can I understand the Quran if I learn Modern Standard Arabic on a language app?',
      a: 'Language apps mostly teach MSA mixed with travel vocabulary. You will learn the alphabet and basic pronouns, but you may spend months on phrases that never appear in the Quran (like ordering coffee or booking hotel rooms). A structured 1-on-1 online Arabic course built around Quranic roots, Ayaat, and spiritual vocabulary is substantially more efficient if your primary goal is Quranic comprehension.'
    },
    {
      q: 'Do Arabs automatically understand Quranic Arabic?',
      a: 'Educated native speakers understand the general flow because they learn Fusha in school and hear it in formal media. However, everyday regional dialects (Ammiya) differ significantly from Classical Arabic in vocabulary, pronunciation, and verb conjugations. Consequently, even native Arab speakers formally study classical Quranic vocabulary, Nahw (syntax), and Tafsir to grasp the exact nuances of the sacred text.'
    },
    {
      q: 'Should my child learn Noorani Qaida or Arabic language first?',
      a: 'For young beginners (ages 4–10), always start with Noorani Qaida. It builds phonemic awareness, letter recognition, and reading confidence without overloading a child with complex grammar rules. Once your child reads connected Arabic script smoothly from the Mushaf, you can naturally introduce Quranic vocabulary, root words, and foundational Islamic studies alongside it.'
    },
    {
      q: 'How long does it take to learn Quranic Arabic online?',
      a: 'With two to three 1-on-1 sessions per week and about 15 minutes of daily review, most beginners can recognize a large share of recurring Quranic words and basic sentence structures within 4–6 months. Moving to full comprehension of Juz Amma and fluent morphological recognition typically takes 9–12 months of structured practice. Timelines vary depending on student age, prior recitation fluency, and daily revision.'
    }
  ];

  return (
    <article className="space-y-12 text-foreground/90 leading-relaxed font-normal">
      {/* Reviewer & Authorship Meta Badge */}
      <div className="p-4 sm:p-5 rounded-2xl bg-foreground/[0.02] border border-card-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-text">
        <div className="flex items-center space-x-2">
          <UserCheck className="h-4 w-4 text-primary shrink-0" />
          <span>
            By the <strong className="text-foreground font-semibold">OQTutor Team</strong> | Reviewed by a <strong className="text-foreground font-semibold">Certified OQTutor Instructor</strong>
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-muted-text/80">
          <Calendar className="h-3.5 w-3.5" />
          <span>Published: October 18, 2026</span>
        </div>
      </div>

      {/* Lead In Paragraph */}
      <div className="space-y-4 text-base sm:text-lg text-muted-text">
        <p className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
          If you want to understand the Quran without relying on translations, or help your child connect with their daily prayers, you have likely asked: <span className="text-primary">should I start with Quranic Arabic or Modern Standard Arabic (MSA)?</span>
        </p>
        <p>
          It is one of the most common questions our instructors receive at OQTutor from adult reverts, heritage speakers, and Muslim parents living in the West. Both branches share deep historical roots, yet each serves distinct learning objectives.
        </p>
      </div>

      {/* Quick Answer Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 space-y-4 not-prose shadow-sm">
        <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest">
          <Sparkles className="h-4 w-4 fill-primary/20" />
          <span>Quick Answer</span>
        </div>
        <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">
          <strong>Learn Quranic Arabic first</strong> if your goal is to understand the Quran, Salah, and Hadith. The 300 most frequent Quranic words make up roughly <strong>70% of the words on any page of the Mushaf</strong>. Choose <strong>Modern Standard Arabic (MSA) first</strong> if you want to read contemporary news, travel, conduct business, or work in the Arab world.
        </p>
        <div className="p-4 rounded-2xl glass border border-primary/20 bg-background/60 text-foreground text-sm font-semibold flex items-center space-x-3">
          <Languages className="h-5 w-5 text-primary shrink-0" />
          <span>
            Both share the same core grammar (Fusha), so starting with one gives you an immediate head start on the other. This guide breaks down the structural differences, compares learning timelines, and helps you choose the right starting point for yourself or your family.
          </span>
        </div>
      </div>

      {/* Hero Featured Image */}
      <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[500px]">
          <Image
            src="/blog/quranic-arabic-vs-modern-standard-arabic/quranic-arabic-vs-modern-standard-arabic-cover.png"
            alt="Adult Muslim learner studying Quranic Arabic online with an open Holy Quran on a wooden rehal stand, notebook, and live tutor on laptop"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 850px"
            priority
          />
        </div>
        <div className="p-4 bg-secondary/5 border-t border-card-border text-xs sm:text-sm text-center text-muted-text">
          <span>
            Studying Classical Quranic Arabic directly connects recitation in Salah with spiritual understanding, allowing students to grasp Ayahs word by word.
          </span>
        </div>
      </div>

      {/* Table of Contents */}
      <nav aria-label="Table of contents" className="p-6 sm:p-8 rounded-3xl glass border border-card-border space-y-4 not-prose my-8">
        <div className="flex items-center space-x-2.5 text-foreground font-extrabold text-base sm:text-lg">
          <Compass className="h-5 w-5 text-primary" />
          <span>Table of Contents</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium text-muted-text">
          <a href="#difference-fusha-classical-msa" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">1.</span>
            <span>Difference Between Fusha, Classical, and MSA</span>
          </a>
          <a href="#fusha-tree-infographic" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">2.</span>
            <span>The Fusha Language Tree (Visual Guide)</span>
          </a>
          <a href="#side-by-side-comparison" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">3.</span>
            <span>Side-by-Side Comparison Table</span>
          </a>
          <a href="#key-differences" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">4.</span>
            <span>3 Key Differences Every Beginner Should Know</span>
          </a>
          <a href="#decision-guide" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">5.</span>
            <span>Which Should You Learn First? A Decision Guide</span>
          </a>
          <a href="#4-step-roadmap" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">6.</span>
            <span>4-Step Roadmap to Mastering Quranic Arabic</span>
          </a>
          <a href="#frequently-asked-questions" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">7.</span>
            <span>Frequently Asked Questions</span>
          </a>
          <a href="#start-your-journey" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">8.</span>
            <span>Start Your Arabic and Quran Journey</span>
          </a>
        </div>
      </nav>

      {/* Section 1: Difference Between Fusha, Classical Arabic, and MSA */}
      <section id="difference-fusha-classical-msa" className="space-y-6 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <BookOpen className="h-7 w-7 text-primary" />
          <span>What Is the Difference Between Fusha, Classical Arabic, and MSA?</span>
        </h2>

        <p className="text-base sm:text-lg text-muted-text">
          Quranic Arabic and Modern Standard Arabic are <strong>not two separate languages</strong>. Both are recognized forms of <strong>Al-Fusha (الفصحى)</strong>, the formal, standardized, eloquent Arabic, as opposed to regional spoken dialects (known as <em>Ammiya</em> or <em>Darija</em>) such as Egyptian, Levantine, Moroccan, or Gulf Arabic.
        </p>

        <p className="text-base text-muted-text">
          Think of Fusha as the strong trunk of a grand tree with two primary branches spreading from the same linguistic foundation:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          {/* Classical / Quranic Arabic Card */}
          <div className="p-6 rounded-3xl bg-card border border-primary/20 shadow-sm space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <BookOpen className="w-24 h-24 text-primary" />
            </div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
              <span>Branch 1</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">
              1. Quranic (Classical) Arabic <span className="text-sm font-normal text-muted-text block mt-1">(فصحى التراث - Fusha al-Turath)</span>
            </h3>
            <p className="text-sm text-muted-text">
              Quranic Arabic is the divine language of the Holy Quran, revealed over 1,400 years ago. It forms the pristine standard of Classical Arabic—the language of the Prophetic Hadith, early Islamic jurisprudence, and classical scholarship.
            </p>
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm">
              <div className="flex items-start space-x-2">
                <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Core Focus:</strong> Spiritual, theological, legal, and historical vocabulary, profound rhetorical structures (<em>Balagha</em>), and complete vowel markings (<em>Tashkeel / Harakat</em>).</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Best For:</strong> Understanding verses directly during Tilawah and Taraweeh, studying <Link href="/courses/tafseer" className="text-primary hover:underline font-semibold">Quran Tafseer</Link>, and deepening Khushu (spiritual presence) in Salah.</span>
              </div>
            </div>
          </div>

          {/* MSA Card */}
          <div className="p-6 rounded-3xl bg-card border border-secondary/20 shadow-sm space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Globe className="w-24 h-24 text-secondary" />
            </div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-wider">
              <span>Branch 2</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">
              2. Modern Standard Arabic (MSA) <span className="text-sm font-normal text-muted-text block mt-1">(فصحى العصر - Fusha al-Asr)</span>
            </h3>
            <p className="text-sm text-muted-text">
              MSA was standardized throughout the 19th and 20th centuries during the Nahda (Arab Renaissance). It is the shared literary, journalistic, and diplomatic language across the 22 Arab League member nations today.
            </p>
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm">
              <div className="flex items-start space-x-2">
                <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Core Focus:</strong> Contemporary communication, digital media, journalism, diplomacy, and global affairs. In print and media, it is almost exclusively written without short vowel diacritics.</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Best For:</strong> Reading contemporary Arab publications, following Al Jazeera or BBC Arabic broadcasts, professional diplomacy, and travel across the Middle East and North Africa.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Infographic: Fusha Tree Diagram */}
      <section id="fusha-tree-infographic" className="space-y-6 scroll-mt-24 pt-4 border-t border-card-border">
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-card via-card/90 to-background border border-card-border shadow-lg space-y-8 not-prose">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <TreePine className="h-3.5 w-3.5" />
              <span>Linguistic Infographic</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              The Fusha Arabic Language Tree
            </h3>
            <p className="text-xs sm:text-sm text-muted-text">
              How Classical Quranic Arabic and Modern Standard Arabic emerge from the same trunk (Al-Fusha), distinctly separated from regional spoken dialects (Ammiya).
            </p>
          </div>

          {/* Visual Diagram Representation */}
          <div className="relative max-w-3xl mx-auto pt-4 pb-2" role="figure" aria-label="Infographic diagram of the Arabic language tree showing Al-Fusha as the central trunk splitting into Quranic Arabic and Modern Standard Arabic, contrasted against regional spoken dialects.">
            {/* Top Branches Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {/* Branch 1 Box */}
              <div className="p-5 rounded-2xl bg-primary/10 border-2 border-primary/30 shadow-sm text-center space-y-2 transform hover:-translate-y-1 transition-transform">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-sm shadow">
                  📖
                </div>
                <h4 className="text-base sm:text-lg font-bold text-foreground">
                  Quranic &amp; Classical Arabic
                </h4>
                <p className="text-xs text-primary font-semibold">فصحى التراث (Fusha al-Turath)</p>
                <ul className="text-xs text-muted-text space-y-1 text-left list-disc list-inside pt-2">
                  <li>Holy Quran &amp; Prophetic Sunnah</li>
                  <li>Fully voweled (Complete Tashkeel)</li>
                  <li>Spiritual, ethical &amp; Tafseer focus</li>
                  <li>Unchanging divine preservation</li>
                </ul>
              </div>

              {/* Branch 2 Box */}
              <div className="p-5 rounded-2xl bg-secondary/10 border-2 border-secondary/30 shadow-sm text-center space-y-2 transform hover:-translate-y-1 transition-transform">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold text-sm shadow">
                  🌍
                </div>
                <h4 className="text-base sm:text-lg font-bold text-foreground">
                  Modern Standard Arabic (MSA)
                </h4>
                <p className="text-xs text-secondary font-semibold">فصحى العصر (Fusha al-Asr)</p>
                <ul className="text-xs text-muted-text space-y-1 text-left list-disc list-inside pt-2">
                  <li>22 Arab League nations &amp; media</li>
                  <li>Generally unvoweled in print</li>
                  <li>Modern vocabulary (tech, politics)</li>
                  <li>Shared diplomatic language</li>
                </ul>
              </div>
            </div>

            {/* Connecting Fork lines */}
            <div className="hidden sm:flex justify-center items-center py-4 text-muted-text/40">
              <div className="w-1/2 h-8 border-b-2 border-x-2 border-card-border rounded-b-2xl -mt-2"></div>
            </div>

            {/* Central Trunk Box */}
            <div className="mt-4 sm:mt-0 p-5 rounded-2xl bg-gradient-to-r from-primary/15 via-foreground/5 to-secondary/15 border-2 border-foreground/20 text-center max-w-md mx-auto shadow-md">
              <div className="flex items-center justify-center space-x-2 text-foreground font-black text-lg sm:text-xl">
                <span>Al-Fusha (الفصحى)</span>
              </div>
              <p className="text-xs text-muted-text mt-1">
                The Standard Literary Trunk: Shared Grammar (<em>Nahw</em>) &amp; 3-Letter Root System (<em>Sarf</em>)
              </p>
            </div>

            {/* Contrast Callout at Bottom: Regional Dialects */}
            <div className="mt-8 p-4 rounded-xl bg-muted/40 border border-card-border text-xs text-muted-text flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center space-x-2.5">
                <Info className="h-4 w-4 text-amber-500 shrink-0" />
                <span>
                  <strong>Note on Regional Dialects (العامية - Ammiya):</strong> Spoken street dialects (Egyptian, Levantine, Gulf, Moroccan) operate separately from Fusha. They are informal spoken vernaculars without standardized written grammar.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Side-by-Side Comparison Table */}
      <section id="side-by-side-comparison" className="space-y-6 scroll-mt-24 pt-4 border-t border-card-border">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center space-x-2">
            <Layers className="h-7 w-7 text-primary" />
            <span>Side-by-Side Comparison</span>
          </h2>
          <p className="text-base text-muted-text">
            Compare key parameters including primary objectives, vocabulary breadth, grammar constructs, and realistic timelines:
          </p>
        </div>

        {/* Responsive Comparison Table */}
        <div className="overflow-x-auto my-6 rounded-3xl border border-card-border shadow-sm not-prose bg-card">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-foreground/[0.04] border-b border-card-border">
                <th className="p-4 sm:p-5 font-bold text-foreground w-1/4">Feature</th>
                <th className="p-4 sm:p-5 font-bold text-primary w-[37.5%] bg-primary/[0.04]">
                  Quranic (Classical) Arabic
                </th>
                <th className="p-4 sm:p-5 font-bold text-secondary w-[37.5%]">
                  Modern Standard Arabic (MSA)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border text-muted-text">
              <tr className="hover:bg-foreground/[0.01] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-foreground">Primary Goal</td>
                <td className="p-4 sm:p-5 bg-primary/[0.02] text-foreground font-medium">
                  Understanding the Quran, Salah, Duas, and Hadith
                </td>
                <td className="p-4 sm:p-5">
                  Reading, writing, and formal speaking across the modern Arab world
                </td>
              </tr>
              <tr className="hover:bg-foreground/[0.01] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-foreground">Core Vocabulary</td>
                <td className="p-4 sm:p-5 bg-primary/[0.02]">
                  About <strong>77,430 total word tokens</strong> in the Quran, constructed from approximately <strong>1,700–1,800 roots</strong>
                </td>
                <td className="p-4 sm:p-5">
                  Tens of thousands of active modern words (covering politics, technology, economy, diplomacy)
                </td>
              </tr>
              <tr className="hover:bg-foreground/[0.01] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-foreground">Vowel Markings (Tashkeel)</td>
                <td className="p-4 sm:p-5 bg-primary/[0.02]">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    Fully Voweled
                  </span>
                  <span className="block mt-1">Preserves exact divine pronunciation and morphological case endings</span>
                </td>
                <td className="p-4 sm:p-5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    Mostly Unvoweled
                  </span>
                  <span className="block mt-1">Unvoweled in newspapers, books, and signage beyond the absolute beginner stage</span>
                </td>
              </tr>
              <tr className="hover:bg-foreground/[0.01] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-foreground">Grammar (Nahw &amp; Sarf)</td>
                <td className="p-4 sm:p-5 bg-primary/[0.02]">
                  Fuller use of classical rhetorical constructions (<em>Balagha</em>), emphatic particle shifts, and classical dual forms
                </td>
                <td className="p-4 sm:p-5">
                  Identical foundational grammar rules, but with simpler, streamlined modern journalistic sentence structures
                </td>
              </tr>
              <tr className="hover:bg-foreground/[0.01] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-foreground">Skills Emphasis</td>
                <td className="p-4 sm:p-5 bg-primary/[0.02]">
                  Reading comprehension, root recognition, and active listening during prayer
                </td>
                <td className="p-4 sm:p-5">
                  Equal focus on all four language competencies: reading, writing, listening, and conversational speaking
                </td>
              </tr>
              <tr className="hover:bg-foreground/[0.01] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-foreground">Noticeable Results</td>
                <td className="p-4 sm:p-5 bg-primary/[0.02] text-foreground font-semibold">
                  About 4–6 months <span className="text-xs font-normal text-muted-text block">(due to rapid word recurrence in prayer)</span>
                </td>
                <td className="p-4 sm:p-5 text-foreground font-semibold">
                  About 9–18 months <span className="text-xs font-normal text-muted-text block">(a much broader vocabulary pool is required)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-text/80 italic">
          *Note: Timelines are realistic estimates and vary with lesson frequency, age, previous recitation proficiency, and dedicated daily practice.
        </p>
      </section>

      {/* Section 3: 3 Key Differences Every Beginner Should Know */}
      <section id="key-differences" className="space-y-8 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <Lightbulb className="h-7 w-7 text-primary" />
          <span>3 Key Differences Every Beginner Should Know</span>
        </h2>

        {/* Difference 1 */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center space-x-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-black">1</span>
            <span>Vocabulary Efficiency (The 80/20 Rule of the Quran)</span>
          </h3>
          <p className="text-base text-muted-text">
            This is the decisive factor for adult learners and busy parents. A typical introductory Modern Standard Arabic course spends its first months teaching words like <em>airport (مطار)</em>, <em>passport (جواز سفر)</em>, <em>coffee (قهوة)</em>, <em>engineer (مهندس)</em>, and <em>library (مكتبة)</em>. While helpful for a flight to Dubai or Cairo, <strong>none of these words appear in the Holy Quran</strong>.
          </p>
          <p className="text-base text-muted-text">
            In contrast, Quranic Arabic is exceptionally concentrated. Many sacred words repeat hundreds—or even thousands—of times:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 not-prose">
            <div className="p-5 rounded-2xl bg-card border border-primary/20 shadow-sm flex items-start space-x-3">
              <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-lg font-bold text-foreground">Top ~125 Words</p>
                <p className="text-xs sm:text-sm text-muted-text">
                  Account for roughly <strong>50%</strong> of the total words on any typical page of the Mushaf.
                </p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-secondary/20 shadow-sm flex items-start space-x-3">
              <Target className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-lg font-bold text-foreground">Top ~300 Words</p>
                <p className="text-xs sm:text-sm text-muted-text">
                  Account for roughly <strong>70%</strong> of the entire Quranic text across all 114 Surahs.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-muted/30 border border-card-border text-xs sm:text-sm text-muted-text flex items-center justify-between gap-3">
            <span>
              Linguistic frequency research verified via the statistical analysis of the Quranic Arabic Corpus (
              <a
                href="https://corpus.quran.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold inline-flex items-center space-x-1"
              >
                <span>corpus.quran.com</span>
                <ExternalLink className="h-3 w-3 ml-0.5 inline" />
              </a>
              ).
            </span>
          </div>

          <p className="text-base text-muted-text">
            If your goal is spiritual connection, starting with Quranic Arabic prevents learner burnout because you immediately recognize the words you study in your five daily prayers, Friday Khutbahs, and nightly recitation.
          </p>

          {/* Root words demonstration image */}
          <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[500px]">
              <Image
                src="/blog/quranic-arabic-vs-modern-standard-arabic/arabic-root-system-vocabulary-online-learning.png"
                alt="Young boy learning Arabic root words like ka-ta-ba with a certified online Quran teacher on a laptop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 850px"
              />
            </div>
            <div className="p-4 bg-secondary/5 border-t border-card-border text-xs sm:text-sm text-center text-muted-text">
              <span>
                Arabic morphology (Sarf) builds dozens of meaningful vocabulary words from a single 3-letter root (such as <em>k-t-b</em>: kataba, kutiba, kitab, kutub).
              </span>
            </div>
          </div>
        </div>

        {/* Difference 2 */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center space-x-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-black">2</span>
            <span>Grammar and Sentence Structure (Nahw &amp; Sarf)</span>
          </h3>
          <p className="text-base text-muted-text">
            Both branches share the exact same structural engine: <strong>Nahw (syntax)</strong> and <strong>Sarf (morphology)</strong> built around three-letter root words (such as <em>K-T-B</em> for writing, or <em>R-H-M</em> for mercy).
          </p>
          <p className="text-base text-muted-text">
            However, Quranic Arabic employs the fullest depth of classical rhetorical devices (<em>Balagha</em>). For instance, it frequently shifts word order to establish divine emphasis (<em>Hasr / Qasr</em>), such as in Surah Al-Fatiha: <em>&ldquo;Iyyaka na&apos;budu&rdquo;</em> (&ldquo;You alone we worship&rdquo; rather than the standard grammatical order &ldquo;We worship You&rdquo;). Emphatic verb endings (<em>Noon al-Tawkeed</em>) and dual grammatical forms (<em>huma</em>, <em>antuma</em>) appear far more regularly in the Quran than in modern news articles.
          </p>
          <p className="text-base text-muted-text">
            A dedicated Quranic Arabic curriculum teaches grammar through <strong>real Quranic Ayahs</strong> rather than contrived everyday textbook dialogs, allowing learners to understand the spiritual and theological reasoning behind grammatical shifts.
          </p>
        </div>

        {/* Difference 3 */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center space-x-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-black">3</span>
            <span>Pronunciation and Tashkeel (Diacritics)</span>
          </h3>
          <p className="text-base text-muted-text">
            In the Holy Quran, changing a single short vowel mark (<em>Fatha</em>, <em>Kasra</em>, or <em>Damma</em>) can dramatically change a word&apos;s grammatical case and theological meaning. This is why Quranic Arabic is inseparable from foundational phonetics (<Link href="/blog/why-noorani-qaida-essential" className="text-primary font-semibold hover:underline">Noorani Qaida</Link>) and the science of proper articulation (<Link href="/blog/beginners-guide-mastering-tajweed-rules" className="text-primary font-semibold hover:underline">Tajweed rules</Link>).
          </p>
          <p className="text-base text-muted-text">
            In Modern Standard Arabic, native speakers and intermediate students read text completely devoid of vowel markings, deducing grammatical roles from contextual clues. For beginners learning the Quran, complete Tashkeel ensures you never recite an error that alters the meaning of Allah&apos;s speech.
          </p>
        </div>
      </section>

      {/* Section 4: Which Should You Learn First? A Decision Guide */}
      <section id="decision-guide" className="space-y-6 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <GraduationCap className="h-7 w-7 text-primary" />
          <span>Which Should You Learn First? A Decision Guide</span>
        </h2>

        <p className="text-base text-muted-text">
          Use the criteria below to determine whether Quranic Arabic or Modern Standard Arabic aligns best with your personal goals:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
          {/* Box 1: Quranic First */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 space-y-4">
            <div className="flex items-center space-x-2 text-primary font-black text-lg">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
              <span>Choose Quranic Arabic First If:</span>
            </div>
            <ul className="space-y-3 text-sm text-foreground/90">
              <li className="flex items-start space-x-2.5">
                <Check className="h-4 w-4 text-primary shrink-0 mt-1" />
                <span>You can already read the Arabic script (or are completing <Link href="/courses/noorani-qaida" className="text-primary font-bold hover:underline">Noorani Qaida</Link>) and want to understand what you recite in prayer.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="h-4 w-4 text-primary shrink-0 mt-1" />
                <span>You are a busy working adult, student, or revert seeking the fastest, most direct route to comprehending Surah Al-Fatiha, Juz Amma, and daily Masnoon Duas.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="h-4 w-4 text-primary shrink-0 mt-1" />
                <span>You or your child are enrolled in <Link href="/courses/hifz" className="text-primary font-bold hover:underline">Hifz (memorization)</Link>. Understanding word meanings drastically improves retention and prevents confusing similar verses (<em>Mutashabihat</em>).</span>
              </li>
            </ul>
          </div>

          {/* Box 2: MSA First */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border-2 border-secondary/30 space-y-4">
            <div className="flex items-center space-x-2 text-secondary font-black text-lg">
              <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
              <span>Choose Modern Standard Arabic First If:</span>
            </div>
            <ul className="space-y-3 text-sm text-foreground/90">
              <li className="flex items-start space-x-2.5">
                <Check className="h-4 w-4 text-secondary shrink-0 mt-1" />
                <span>You want your child to become fully bilingual—capable of speaking, writing, and conversing in formal Arabic alongside modern academic subjects.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="h-4 w-4 text-secondary shrink-0 mt-1" />
                <span>You plan to relocate, study, conduct business, or travel throughout Arab nations and need practical conversational and reading skills.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="h-4 w-4 text-secondary shrink-0 mt-1" />
                <span>You intend to read contemporary Arabic non-fiction, political commentary, modern Islamic journals, and follow live Arab media lectures.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pro Tip Callout Card */}
        <div className="p-6 rounded-2xl glass border border-primary/20 bg-primary/5 space-y-2">
          <div className="flex items-center space-x-2 text-primary font-bold text-sm">
            <Sparkles className="h-4 w-4" />
            <span>Pro Tip from Our Instructors</span>
          </div>
          <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
            <strong>You do not have to choose forever.</strong> Because both varieties share the exact same root system and foundational grammar rules, starting with Quranic Arabic gives you an immense head start on MSA later—all while granting you the immediate spiritual blessing of understanding the words of Allah from your very first weeks of study.
          </p>
        </div>

        {/* Family Tutoring Image */}
        <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[500px]">
            <Image
              src="/blog/quranic-arabic-vs-modern-standard-arabic/family-father-son-quranic-arabic-learning.png"
              alt="Father and son studying Quranic Arabic online together with an experienced teacher on a laptop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 850px"
            />
          </div>
          <div className="p-4 bg-secondary/5 border-t border-card-border text-xs sm:text-sm text-center text-muted-text">
            <span>
              1-on-1 personalized tutoring allows families and individual learners to advance at their own pace, tailored specifically to their spiritual and linguistic objectives.
            </span>
          </div>
        </div>
      </section>

      {/* Section 5: The 4-Step Roadmap to Mastering Quranic Arabic */}
      <section id="4-step-roadmap" className="space-y-6 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <GitFork className="h-7 w-7 text-primary" />
          <span>The 4-Step Roadmap to Mastering Quranic Arabic</span>
        </h2>

        <p className="text-base text-muted-text">
          At OQTutor, our certified scholars employ a structured pedagogical progression so students never encounter overwhelming grammar rules before they can comfortably read:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
          {/* Step 1 */}
          <div className="p-6 rounded-3xl bg-card border border-card-border shadow-sm space-y-3 relative">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-black text-xs">Step 1</span>
              <BookOpen className="h-5 w-5 text-muted-text/50" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Master Script and Phonetics
            </h3>
            <p className="text-xs text-primary font-semibold">
              <Link href="/courses/noorani-qaida" className="hover:underline">Noorani Qaida Course</Link>
            </p>
            <p className="text-sm text-muted-text">
              Learn individual Arabic letters in their isolated and connected positions, vowel markings (Fatha, Kasra, Damma, Tanween), and pronounce them from their exact anatomical points of articulation (<em>Makharij</em>).
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-3xl bg-card border border-card-border shadow-sm space-y-3 relative">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-black text-xs">Step 2</span>
              <Volume2 className="h-5 w-5 text-muted-text/50" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Build Fluent Recitation
            </h3>
            <p className="text-xs text-primary font-semibold">
              <Link href="/courses/tajweed" className="hover:underline">Quran with Tajweed Rules</Link>
            </p>
            <p className="text-sm text-muted-text">
              Apply essential elongation (Madd), nasalization (Ghunnah), and stopping (Waqf) rules to read smoothly from the Mushaf without hesitation or phonetic stumbling.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-3xl bg-card border border-card-border shadow-sm space-y-3 relative">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-black text-xs">Step 3</span>
              <Languages className="h-5 w-5 text-muted-text/50" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              High-Frequency Words &amp; Roots
            </h3>
            <p className="text-xs text-primary font-semibold">
              <Link href="/courses/arabic" className="hover:underline">Online Arabic Language Course</Link>
            </p>
            <p className="text-sm text-muted-text">
              Master the top 300–500 most repeated Quranic words and understand how the 3-letter morphological root system unlocks hundreds of unfamiliar derivatives on sight.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-3xl bg-card border border-card-border shadow-sm space-y-3 relative">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-black text-xs">Step 4</span>
              <Brain className="h-5 w-5 text-muted-text/50" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Apply Grammar Through Juz Amma
            </h3>
            <p className="text-xs text-primary font-semibold">
              <Link href="/blog/online-quran-classes-usa-for-adults" className="hover:underline">Juz Amma &amp; Adult Tafseer</Link>
            </p>
            <p className="text-sm text-muted-text">
              Examine nouns, verbs, prepositions (Harf), and sentence patterns directly through the short Surahs recited every day during Salah.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Frequently Asked Questions */}
      <section id="frequently-asked-questions" className="space-y-6 scroll-mt-24 pt-4 border-t border-card-border">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center space-x-2">
            <HelpCircle className="h-7 w-7 text-primary" />
            <span>Frequently Asked Questions</span>
          </h2>
          <p className="text-base text-muted-text">
            Common questions answered by OQTutor certified instructors:
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
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 7: Final CTA Banner */}
      <section id="start-your-journey" className="pt-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-primary-hover text-white shadow-2xl relative overflow-hidden not-prose text-center sm:text-left">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10 max-w-2xl space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
              <span>Certified 1-on-1 Arabic &amp; Quran Tutors</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Start Your Arabic and Quran Journey Today
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Whether you want to understand every verse you recite in your prayers or give your child the lifelong gift of Arabic fluency, personalized guidance makes all the difference.
            </p>
            <p className="text-xs sm:text-sm text-white/80">
              At OQTutor, certified male and female scholars tailor each 30–40 minute session to your learning pace on Zoom or Google Meet. Flexible schedules for families across the USA, UK, Canada, Australia, and Singapore.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-start items-center">
              <Link
                href="/book-free-trial"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-secondary hover:bg-secondary-hover text-neutral-900 font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <span>Start Your 3-Day Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/courses"
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors text-center border border-white/20"
              >
                Browse All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
