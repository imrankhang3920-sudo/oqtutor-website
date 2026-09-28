'use client';

import React from 'react';
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
  AlertTriangle,
  Lightbulb,
  GraduationCap,
  Users,
  Layers,
  Flame,
  Check,
  Calendar
} from 'lucide-react';

export default function ArticleContentWhyNooraniQaidaEssential() {
  return (
    <article className="space-y-10 text-foreground/90 leading-relaxed font-normal">
      {/* Intro Overview Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 space-y-4 not-prose">
        <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest">
          <BookOpen className="h-4 w-4 fill-primary/20" />
          <span>Foundational Quranic Education</span>
        </div>
        <p className="text-xl sm:text-2xl font-extrabold text-foreground leading-snug">
          Why Is Noorani Qaida Important for Learning to Read the Quran?
        </p>
        <p className="text-sm sm:text-base text-muted-text leading-relaxed">
          Noorani Qaida is important because it gives beginners the essential building blocks needed to read Arabic letters, understand vowel marks, join letters together, and develop accurate pronunciation before approaching the Quran. Without these foundational skills, new learners often struggle with letter recognition, mispronounce words, and find it difficult to progress smoothly to actual Quranic text.
        </p>
        <div className="p-4 rounded-2xl glass border border-primary/20 bg-background/50 text-foreground text-sm font-semibold flex items-center space-x-3">
          <Sparkles className="h-5 w-5 text-secondary shrink-0" />
          <span>Think of it as learning the alphabet and basic phonics before reading a full book. For anyone starting from zero, Noorani Qaida bridges the gap between not knowing any Arabic letters and being ready to tackle Quranic words with confidence.</span>
        </div>
      </div>

      {/* Table of Contents */}
      <nav aria-label="Table of contents" className="p-6 sm:p-8 rounded-3xl glass border border-card-border space-y-4 not-prose my-8">
        <div className="flex items-center space-x-2.5 text-foreground font-extrabold text-base sm:text-lg">
          <Compass className="h-5 w-5 text-primary" />
          <span>Table of Contents</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium text-muted-text">
          <a href="#what-is-noorani-qaida" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">1.</span>
            <span>What Is Noorani Qaida?</span>
          </a>
          <a href="#why-essential-before-quran" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">2.</span>
            <span>Why Is Noorani Qaida Important Before Reading the Quran?</span>
          </a>
          <a href="#skipping-the-basics" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">3.</span>
            <span>What Can Happen If a Beginner Skips the Basics?</span>
          </a>
          <a href="#is-it-only-for-children" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">4.</span>
            <span>Is Noorani Qaida Only for Children?</span>
          </a>
          <a href="#how-it-helps-children" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">5.</span>
            <span>How Noorani Qaida Helps Children Learn Quran</span>
          </a>
          <a href="#can-adults-start-from-zero" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">6.</span>
            <span>Can Adults Start Noorani Qaida From Zero?</span>
          </a>
          <a href="#what-students-learn" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">7.</span>
            <span>What Does a Student Usually Learn Through Noorani Qaida?</span>
          </a>
          <a href="#when-to-move-to-quran" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">8.</span>
            <span>When Should You Move From Noorani Qaida to Quran Reading?</span>
          </a>
          <a href="#qaida-vs-direct-quran" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">9.</span>
            <span>Noorani Qaida vs Directly Starting the Quran</span>
          </a>
          <a href="#effective-practice-tips" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">10.</span>
            <span>How to Make Noorani Qaida Practice More Effective</span>
          </a>
          <a href="#frequently-asked-questions" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">11.</span>
            <span>Frequently Asked Questions</span>
          </a>
          <a href="#start-your-journey" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">12.</span>
            <span>Start Your Quran Reading Journey With a Strong Foundation</span>
          </a>
        </div>
      </nav>

      {/* Section 1: What Is Noorani Qaida? */}
      <section id="what-is-noorani-qaida" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <GraduationCap className="h-7 w-7 text-primary" />
          <span>What Is Noorani Qaida?</span>
        </h2>
        
        <p className="text-base text-muted-text">
          Noorani Qaida is a foundational learning text widely used to teach the basics of Arabic reading and Quranic recitation. The name comes from the concept of <strong>&quot;Noor&quot; (light)</strong> and <strong>&quot;Qaida&quot; (foundation or principle)</strong>, reflecting its purpose as a guide that illuminates the path to reading. It consists of simple lessons that progress from individual letters to vowel marks, letter combinations, and eventually basic word reading.
        </p>

        {/* Highlight Image Display */}
        <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[520px]">
            <Image
              src="/blog/why-noorani-qaida-essential/noorani-qaida-essential-guide.jpg"
              alt="Authentic Noorani Qaida book showing Arabic alphabet letters and joined letter compound lessons (Murakkabat)"
              fill
              className="object-contain bg-slate-900/50 p-2 sm:p-4"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
          <div className="p-4 bg-secondary/5 border-t border-card-border text-xs sm:text-sm text-center text-muted-text">
            <span>The classic Noorani Qaida primer systematically progresses from single Arabic letters to compound shapes (Murakkabat), short vowels (Harakat), and full Quranic words.</span>
          </div>
        </div>

        <p className="text-base text-muted-text">
          This text has been used for decades across Muslim communities worldwide, particularly in Arab countries and increasingly in <Link href="/blog/best-online-quran-classes-for-beginners" className="text-primary hover:underline font-semibold">online Quran instruction</Link>. While not the only method available, it has proven effective for building structured reading skills. The lessons are designed to be taught alongside a live teacher who provides feedback on pronunciation and corrects errors early on.
        </p>
      </section>

      {/* Section 2: Why Is Noorani Qaida Important Before Reading the Quran? */}
      <section id="why-essential-before-quran" className="space-y-6 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <ShieldCheck className="h-7 w-7 text-primary" />
          <span>Why Is Noorani Qaida Important Before Reading the Quran?</span>
        </h2>

        <p className="text-base text-muted-text">
          Jumping directly into Quran reading without foundational preparation often leads to frustration, poor pronunciation habits, and slow progress. Noorani Qaida solves this by systematically building the skills needed for confident Quranic reading. Here is why this foundation matters.
        </p>

        {/* H3: Arabic Letter Recognition */}
        <div className="p-6 rounded-3xl bg-card border border-card-border space-y-3">
          <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
            <span className="flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary text-sm font-black">1</span>
            <span>It Builds Arabic Letter Recognition</span>
          </h3>
          <p className="text-base text-muted-text">
            The Arabic alphabet contains 28 letters, many of which look unfamiliar to non-Arabic speakers. Noorani Qaida teaches each letter individually, helping learners recognize them quickly and accurately. This matters because when reading the Quran, you need to identify letters rapidly to keep pace with meaning.
          </p>
          <p className="text-base text-muted-text">
            Recognizing letters fluently means you are not stopping to puzzle out each symbol. Instead, your brain can move forward to understanding words and meaning. Without this automatic letter recognition, every word becomes a slow decoding process.
          </p>
        </div>

        {/* H3: Basic Vowel Marks */}
        <div className="p-6 rounded-3xl bg-card border border-card-border space-y-3">
          <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
            <span className="flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary text-sm font-black">2</span>
            <span>It Teaches Basic Vowel Marks</span>
          </h3>
          <p className="text-base text-muted-text">
            Arabic uses three main vowel marks called <strong>&quot;Harakat&quot;</strong>: <strong>Fathah</strong> (short &apos;a&apos; sound), <strong>Kasrah</strong> (short &apos;i&apos; sound), and <strong>Dammah</strong> (short &apos;u&apos; sound). These marks tell you how to pronounce each letter. The Quran uses these marks, and understanding them is essential.
          </p>
          <p className="text-base text-muted-text">
            Noorani Qaida introduces these vowels gradually. Learners practice saying the same letter with different vowels, building muscle memory for correct pronunciation. This preparation makes reading Quranic text significantly easier because the marks are already familiar.
          </p>
        </div>

        {/* H3: How Letters Connect */}
        <div className="p-6 rounded-3xl bg-card border border-card-border space-y-3">
          <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
            <span className="flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary text-sm font-black">3</span>
            <span>It Teaches Learners How Letters Connect</span>
          </h3>
          <p className="text-base text-muted-text">
            Arabic letters change shape depending on their position in a word. The same letter looks different at the beginning, middle, or end of a word. Additionally, some letters connect to their neighbors while others stand alone.
          </p>
          <p className="text-base text-muted-text">
            Noorani Qaida provides extensive practice with letter joining (Murakkabat). Learners see how letters transform and connect, preparing them for real Quranic words where multiple letters flow together. Without this understanding, readers often stumble when encountering connected letter combinations.
          </p>
        </div>

        {/* H3: Pronunciation Awareness */}
        <div className="p-6 rounded-3xl bg-card border border-card-border space-y-3">
          <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
            <span className="flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary text-sm font-black">4</span>
            <span>It Develops Pronunciation Awareness</span>
          </h3>
          <p className="text-base text-muted-text">
            Some Arabic sounds do not exist in English or other languages. These sounds involve specific throat and mouth positions called <strong>&quot;Makharij&quot;</strong> in Arabic. Sounds like <strong>ع (Ain), ح (Ha), خ (Kha), ص (Sad), ض (Dad), ط (Tah), and ق (Qaf)</strong> require attention and practice.
          </p>
          <p className="text-base text-muted-text">
            Noorani Qaida introduces these sounds early so learners can practice them consistently. A live teacher can listen and correct mouth position and air flow. By the time students reach Quranic text, these unfamiliar sounds are becoming natural rather than completely foreign.
          </p>
        </div>

        {/* H3: Creates a Foundation for Tajweed */}
        <div className="p-6 rounded-3xl bg-card border border-card-border space-y-3">
          <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
            <span className="flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary text-sm font-black">5</span>
            <span>It Creates a Foundation for Tajweed</span>
          </h3>
          <p className="text-base text-muted-text">
            Tajweed is the science of proper Quranic recitation, covering rules about how letters connect, where to pause, how to emphasize certain sounds, and how to apply melodic patterns correctly. Tajweed rules make sense when learners already understand individual letters and basic pronunciation.
          </p>
          <p className="text-base text-muted-text">
            Noorani Qaida does not replace a complete <Link href="/courses/tajweed-rules" className="text-primary hover:underline font-semibold">Tajweed study</Link> course, but it provides essential groundwork. Beginners who skip foundational reading often find Tajweed lessons confusing because they are still learning how to pronounce individual letters while trying to grasp complex rules.
          </p>
        </div>
      </section>

      {/* Section 3: What Can Happen If a Beginner Skips the Basics? */}
      <section id="skipping-the-basics" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <AlertTriangle className="h-7 w-7 text-amber-500" />
          <span>What Can Happen If a Beginner Skips the Basics?</span>
        </h2>

        <p className="text-base text-muted-text">
          Starting Quran reading without foundational instruction often creates practical problems that slow progress.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
          <div className="p-5 rounded-2xl border border-card-border bg-card/60 space-y-2">
            <div className="flex items-center space-x-2 text-rose-500 font-bold text-sm">
              <span className="h-2 w-2 rounded-full bg-rose-500"></span>
              <span>Letter Shape Confusion</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text">
              Learners may confuse similar looking letters. Arabic has several pairs of letters that differ only slightly, such as Baa and Taa, or Seen and Sheen. Without deliberate practice distinguishing them, readers make consistent errors.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-card-border bg-card/60 space-y-2">
            <div className="flex items-center space-x-2 text-rose-500 font-bold text-sm">
              <span className="h-2 w-2 rounded-full bg-rose-500"></span>
              <span>Vowel Mark Errors</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text">
              Vowel mark confusion leads to inconsistent pronunciation. A learner might pronounce the same letter differently depending on the mark, struggling to develop reliable pronunciation habits. This inconsistency makes Quranic reading feel choppy and uncertain.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-card-border bg-card/60 space-y-2">
            <div className="flex items-center space-x-2 text-rose-500 font-bold text-sm">
              <span className="h-2 w-2 rounded-full bg-rose-500"></span>
              <span>Guessing at Unfamiliar Words</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text">
              Many beginners guess at unfamiliar words rather than sounding them out. They might skip difficult pronunciations or rush through sections they do not understand. This approach prevents real learning and creates bad habits that are harder to fix later.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-card-border bg-card/60 space-y-2">
            <div className="flex items-center space-x-2 text-rose-500 font-bold text-sm">
              <span className="h-2 w-2 rounded-full bg-rose-500"></span>
              <span>Frequent Stumbling & Frustration</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text">
              Without proper foundation, learners need to stop frequently while reading to figure out how to pronounce each word. This constant stopping breaks the flow of meaning and makes reading frustrating rather than rewarding.
            </p>
          </div>
        </div>

        <p className="text-base text-muted-text">
          It is important to note that learners with prior Arabic reading experience may not need to start from the very beginning. Someone who can already recognize letters but struggles with Quranic pronunciation might start at a different point. The key is matching the starting level to actual ability.
        </p>
      </section>

      {/* Section 4: Is Noorani Qaida Only for Children? */}
      <section id="is-it-only-for-children" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <Users className="h-7 w-7 text-primary" />
          <span>Is Noorani Qaida Only for Children?</span>
        </h2>

        <p className="text-xl font-bold text-foreground">
          No. Noorani Qaida is beneficial for anyone who cannot yet read Arabic fluently, regardless of age.
        </p>

        <p className="text-base text-muted-text">
          <strong>Children</strong> benefit from the structured, progressive approach. The lessons are designed for young learners, with clear progression and repetition that works well for developing brains. Many Quran schools introduce Noorani Qaida to children starting around age four or five.
        </p>

        <p className="text-base text-muted-text">
          <strong>Teenagers and adults</strong> can absolutely learn from Noorani Qaida. Starting later does not make it less effective. An adult learner who wants to read the Quran accurately is just as well served by foundational instruction as a child is.
        </p>

        <p className="text-base text-muted-text">
          <strong>New Muslims</strong> often begin with Noorani Qaida because they have no background in Arabic reading. Experienced practitioners of Islam who learned Quran orally but never learned to read Arabic also benefit from this text.
        </p>

        <div className="p-5 rounded-2xl glass border border-card-border text-sm text-foreground font-semibold flex items-center space-x-3">
          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
          <span>The appropriate starting point depends on current ability, not age. A teenager who can read Arabic fluently might not need Noorani Qaida at all. A sixty year old beginning from zero absolutely can learn it successfully.</span>
        </div>
      </section>

      {/* Section 5: How Noorani Qaida Helps Children Learn Quran */}
      <section id="how-it-helps-children" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <Sparkles className="h-7 w-7 text-secondary" />
          <span>How Noorani Qaida Helps Children Learn Quran</span>
        </h2>

        <p className="text-base text-muted-text">
          For children, Noorani Qaida provides a gentle, confidence building introduction to Quranic reading.
        </p>

        <div className="space-y-4 my-4">
          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <h3 className="font-bold text-foreground text-lg flex items-center space-x-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Structured Progression & Repetition With Variation</span>
            </h3>
            <p className="text-sm text-muted-text">
              The structured progression means children see letters they have learned before appearing in new contexts. This repetition with variation builds recognition without boredom. A child learns letter shapes, then sees those same letters joined together, then encounters them in actual Quranic words.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <h3 className="font-bold text-foreground text-lg flex items-center space-x-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Bite-Sized Lessons for Young Attention Spans</span>
            </h3>
            <p className="text-sm text-muted-text">
              Short lessons suit young attention spans. Rather than overwhelming a child with the entire Quran at once, Noorani Qaida breaks learning into manageable pieces. This approach builds confidence as children complete lessons and see their own progress.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <h3 className="font-bold text-foreground text-lg flex items-center space-x-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Interactive Sound Modeling & Ear Training</span>
            </h3>
            <p className="text-sm text-muted-text">
              Sound practice is central to children&apos;s learning. Hearing a teacher pronounce sounds correctly and practicing them repeatedly helps children develop accurate pronunciation naturally. This is especially important for sounds that do not exist in their native language.
            </p>
          </div>
        </div>

        <p className="text-base text-muted-text">
          Parents often see that children who complete Noorani Qaida move into <Link href="/courses/quran-reading" className="text-primary hover:underline font-semibold">Quran reading classes</Link> with far fewer struggles than children who skip it. The foundation prevents many common problems before they start.
        </p>
      </section>

      {/* Section 6: Can Adults Start Noorani Qaida From Zero? */}
      <section id="can-adults-start-from-zero" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <Brain className="h-7 w-7 text-primary" />
          <span>Can Adults Start Noorani Qaida From Zero?</span>
        </h2>

        <p className="text-xl font-bold text-foreground">
          Absolutely. Many adults successfully learn Noorani Qaida and go on to read the Quran beautifully.
        </p>

        <p className="text-base text-muted-text">
          Starting as an adult beginner is not embarrassing or unusual. Adults often bring discipline and motivation that accelerates their progress. An adult learner&apos;s brain works differently than a child&apos;s, but adult brains are perfectly capable of learning new languages and reading systems.
        </p>

        <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20 space-y-3">
          <div className="flex items-center space-x-2 text-primary font-bold text-sm">
            <Clock className="h-5 w-5" />
            <span>The Power of Manageable Consistency</span>
          </div>
          <p className="text-sm text-muted-text">
            The only real challenge is consistency. Adults juggle work, family, and other responsibilities, so finding regular practice time requires planning. But learners who commit to even 20 to 30 minutes a few times per week see noticeable progress.
          </p>
          <p className="text-sm font-semibold text-foreground">
            There is no age limit for learning. You will not find a rule saying &quot;students must be under 50&quot; or &quot;too late to start at 65.&quot; People in their seventies and eighties have successfully learned to read the Quran. The process looks the same regardless of starting age.
          </p>
        </div>
      </section>

      {/* Section 7: What Does a Student Usually Learn Through Noorani Qaida? */}
      <section id="what-students-learn" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <Layers className="h-7 w-7 text-primary" />
          <span>What Does a Student Usually Learn Through Noorani Qaida?</span>
        </h2>

        <p className="text-base text-muted-text">
          Noorani Qaida follows a clear progression that builds reading skills step by step:
        </p>

        <div className="relative border-l-2 border-primary/30 ml-4 pl-6 space-y-6 my-6 not-prose">
          <div className="relative">
            <span className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background"></span>
            <h3 className="font-bold text-foreground text-base sm:text-lg">1. Individual Arabic Alphabet (Huruf Mufradat)</h3>
            <p className="text-xs sm:text-sm text-muted-text mt-1">
              Lessons typically begin with the Arabic alphabet in isolation. Students learn each letter&apos;s name, shape, and sound. Early lessons use visual layout and repetition to make learning engaging and memorable.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background"></span>
            <h3 className="font-bold text-foreground text-base sm:text-lg">2. Basic Short Vowels (Harakat)</h3>
            <p className="text-xs sm:text-sm text-muted-text mt-1">
              Next, learners encounter the three basic vowel marks individually (Fathah, Kasrah, Dammah). They practice the same letter with each vowel mark, hearing the sound changes and practicing pronunciation.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background"></span>
            <h3 className="font-bold text-foreground text-base sm:text-lg">3. Tanween, Sukoon, and Shaddah</h3>
            <p className="text-xs sm:text-sm text-muted-text mt-1">
              Tanween is introduced, which adds a doubled vowel sound at the end of words. Sukoon, which indicates the absence of a vowel, comes next. Shaddah, which doubles and stresses a letter, is also practiced thoroughly.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background"></span>
            <h3 className="font-bold text-foreground text-base sm:text-lg">4. Compound Connected Letters (Huruf Murakkabat)</h3>
            <p className="text-xs sm:text-sm text-muted-text mt-1">
              Learners then encounter letters joined together, starting with simple two-letter combinations. Gradually, combinations become more complex, building toward actual words.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background"></span>
            <h3 className="font-bold text-foreground text-base sm:text-lg">5. Word Reading & Quranic Sentences</h3>
            <p className="text-xs sm:text-sm text-muted-text mt-1">
              By the end of Noorani Qaida, students can read simple Arabic words and basic sentences. They have developed pronunciation accuracy and letter recognition speed. Most importantly, they have built the confidence needed to approach Quranic text without overwhelming anxiety.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: When Should You Move From Noorani Qaida to Quran Reading? */}
      <section id="when-to-move-to-quran" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <CheckCircle className="h-7 w-7 text-primary" />
          <span>When Should You Move From Noorani Qaida to Quran Reading?</span>
        </h2>

        <p className="text-base text-muted-text">
          Readiness to <Link href="/courses/quran-reading" className="text-primary hover:underline font-semibold">begin Quran reading</Link> goes beyond simply reaching the last page of Noorani Qaida. Understanding matters more than completion speed.
        </p>

        <div className="p-6 rounded-3xl glass border border-card-border space-y-4 my-6 not-prose">
          <h3 className="font-bold text-foreground text-base sm:text-lg flex items-center space-x-2">
            <ListChecks className="h-5 w-5 text-primary" />
            <span>Key Signs of Readiness to Progress:</span>
          </h3>

          <ul className="space-y-3 text-xs sm:text-sm text-muted-text">
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Effortless Letter Recognition:</strong> Consistently recognizing letters without hesitation. When letters no longer require conscious decoding, the reader can focus on flow and meaning.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Automatic Letter Joining:</strong> Letter joining feels natural and automatic, not like a puzzle to solve on every word.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Instant Vowel Recognition:</strong> Looking at a vowel mark (Fathah, Kasrah, Dammah, Tanween) and instantly knowing the sound without thinking.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Independent Sounding Out:</strong> Attempting to sound out unfamiliar words using learned rules, rather than guessing or relying on the teacher for every syllable.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Consistent Makharij & Self-Correction:</strong> Applying Makharij articulation points and naturally self-correcting when noticing a pronunciation slip.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Receptiveness to Correction:</strong> Listening to teacher feedback, trying again willingly, and remembering corrections in subsequent passages.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 9: Noorani Qaida vs Directly Starting the Quran */}
      <section id="qaida-vs-direct-quran" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <Compass className="h-7 w-7 text-primary" />
          <span>Noorani Qaida vs Directly Starting the Quran</span>
        </h2>

        <p className="text-base text-muted-text">
          To help you decide the best learning pathway for yourself or your child, here is a breakdown comparing both methods:
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto my-6 rounded-3xl border border-card-border glass shadow-lg not-prose">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/15 text-foreground font-bold border-b border-card-border">
              <tr>
                <th className="p-4 sm:p-5 min-w-[160px]">Approach</th>
                <th className="p-4 sm:p-5 min-w-[260px]">What the Learner Experiences</th>
                <th className="p-4 sm:p-5 min-w-[240px]">Usually Suitable For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border text-muted-text">
              <tr className="hover:bg-primary/5 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-foreground align-top">
                  <div className="flex items-center space-x-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                    <span>Start with Noorani Qaida</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 align-top leading-relaxed text-xs sm:text-sm">
                  Systematic introduction to letters, vowels, and pronunciation. Structured progression. Clear milestones. Time to build accuracy. Teacher feedback on small, manageable sections.
                </td>
                <td className="p-4 sm:p-5 align-top leading-relaxed text-xs sm:text-sm">
                  Complete beginners. Non-Arabic speakers. Anyone building reading from zero. Learners prioritizing pronunciation accuracy.
                </td>
              </tr>
              <tr className="hover:bg-primary/5 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-foreground align-top">
                  <div className="flex items-center space-x-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-muted-text"></span>
                    <span>Start Directly with Quran</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 align-top leading-relaxed text-xs sm:text-sm">
                  Immediate exposure to Quranic text. Faster progression for some. Exposure to authentic language from day one.
                </td>
                <td className="p-4 sm:p-5 align-top leading-relaxed text-xs sm:text-sm">
                  Learners who read Arabic already. Students with prior Quranic background. Those seeking speed over foundational accuracy.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-muted-text">
          This comparison shows both approaches have merit. The best choice depends on your current ability. A complete beginner jumping to Quranic text faces significant challenges with unfamiliar letters, vowel marks, and pronunciation. Someone who already reads Arabic fluently may find Noorani Qaida unnecessary. The goal is matching the method to the learner, not forcing everyone through the same path.
        </p>
      </section>

      {/* Section 10: How to Make Noorani Qaida Practice More Effective */}
      <section id="effective-practice-tips" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <Lightbulb className="h-7 w-7 text-amber-500" />
          <span>How to Make Noorani Qaida Practice More Effective</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm">
              <Clock className="h-4 w-4" />
              <span>Daily Short Sessions</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text">
              Consistent practice is more valuable than occasional long sessions. Practicing 20 minutes daily outperforms practicing two hours once a week.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm">
              <Volume2 className="h-4 w-4" />
              <span>Read Aloud</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text">
              Read lessons aloud rather than silently. Hearing your own voice engages different parts of your brain and reinforces correct pronunciation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm">
              <Flame className="h-4 w-4" />
              <span>Focus on Difficult Sounds</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text">
              When you encounter difficult letters, practice them specifically. Spend extra time with sounds that feel unfamiliar or uncomfortable. Do not rush past struggle.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm">
              <Award className="h-4 w-4" />
              <span>Listen & Apply Feedback</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text">
              Listen carefully to your teacher&apos;s pronunciation and feedback. When a teacher corrects you, immediately try again using the guidance given.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm">
              <ShieldCheck className="h-4 w-4" />
              <span>Prioritize Mastery Over Speed</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text">
              Avoid rushing through pages. The goal is understanding, not simply finishing. A student who spends two weeks on one page, mastering it thoroughly, learns more than a student who rushes through ten pages carelessly.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-card-border space-y-2">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm">
              <Compass className="h-4 w-4" />
              <span>Regular Review</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text">
              Review previous lessons regularly. Bringing back earlier material prevents forgetting and reinforces skills as you learn new ones.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11: Frequently Asked Questions */}
      <section id="frequently-asked-questions" className="space-y-6 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <HelpCircle className="h-7 w-7 text-primary" />
          <span>Frequently Asked Questions</span>
        </h2>

        <div className="space-y-4 not-prose">
          <div className="p-6 rounded-3xl glass border border-card-border space-y-2">
            <h3 className="font-bold text-foreground text-base sm:text-lg">What is Noorani Qaida used for?</h3>
            <p className="text-sm text-muted-text leading-relaxed">
              Noorani Qaida teaches beginners to read Arabic letters, understand vowel marks, connect letters, and develop accurate pronunciation. It prepares students to read Quranic text fluently.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass border border-card-border space-y-2">
            <h3 className="font-bold text-foreground text-base sm:text-lg">Is Noorani Qaida necessary for beginners?</h3>
            <p className="text-sm text-muted-text leading-relaxed">
              For most complete beginners, yes. Noorani Qaida provides essential foundational skills. Learners with prior Arabic reading ability may not need it.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass border border-card-border space-y-2">
            <h3 className="font-bold text-foreground text-base sm:text-lg">Can adults learn Noorani Qaida?</h3>
            <p className="text-sm text-muted-text leading-relaxed">
              Absolutely. Adults successfully learn Noorani Qaida at any age. Consistency matters more than age.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass border border-card-border space-y-2">
            <h3 className="font-bold text-foreground text-base sm:text-lg">Should children learn Noorani Qaida before the Quran?</h3>
            <p className="text-sm text-muted-text leading-relaxed">
              Most Quran educators recommend Noorani Qaida for children starting from zero. It builds confidence and prevents bad pronunciation habits.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass border border-card-border space-y-2">
            <h3 className="font-bold text-foreground text-base sm:text-lg">How long does it take to learn Noorani Qaida?</h3>
            <p className="text-sm text-muted-text leading-relaxed">
              Completion time varies significantly. A child practicing daily might complete it in several months. An adult balancing other responsibilities might take six months to a year or longer. Consistency matters more than speed.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass border border-card-border space-y-2">
            <h3 className="font-bold text-foreground text-base sm:text-lg">Is Noorani Qaida the same as Tajweed?</h3>
            <p className="text-sm text-muted-text leading-relaxed">
              No. Noorani Qaida teaches basic letter recognition and pronunciation. Tajweed is the advanced science of proper Quranic recitation. Noorani Qaida builds the essential foundation for <Link href="/courses/tajweed-rules" className="text-primary hover:underline font-semibold">Tajweed study</Link>.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass border border-card-border space-y-2">
            <h3 className="font-bold text-foreground text-base sm:text-lg">Can I learn Noorani Qaida online?</h3>
            <p className="text-sm text-muted-text leading-relaxed">
              Yes. Online learning works well when taught with a live teacher who hears your pronunciation and provides feedback. Written materials alone are less effective for pronunciation learning.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass border border-card-border space-y-2">
            <h3 className="font-bold text-foreground text-base sm:text-lg">Do I need to memorize Noorani Qaida?</h3>
            <p className="text-sm text-muted-text leading-relaxed">
              No. Understanding and applying the lessons matters more than memorizing pages. You should recognize letters and apply vowel marks, not recite the text from memory.
            </p>
          </div>
        </div>
      </section>

      {/* Section 12: Conclusion & Call to Action */}
      <section id="start-your-journey" className="space-y-6 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <Award className="h-7 w-7 text-primary" />
          <span>Start Your Quran Reading Journey With a Strong Foundation</span>
        </h2>

        <p className="text-base text-muted-text">
          Learning to read the Quran is one of the most rewarding spiritual practices, but starting without proper foundation creates unnecessary difficulty. Noorani Qaida removes obstacles by building essential skills systematically. Whether you are a child discovering Arabic letters for the first time or an adult returning to learning after years away, foundational instruction gives you the tools to read accurately and with confidence.
        </p>

        <p className="text-base text-muted-text">
          If you or your child are starting from the beginning, structured Noorani Qaida instruction provides the foundation needed to move forward successfully. <strong>OQTutor</strong> offers one-on-one online Quran classes for children and adults with flexible scheduling. Our teachers provide personalized feedback on pronunciation and letter recognition, adapting to your learning pace.
        </p>

        {/* CTA Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 border-2 border-primary/30 shadow-2xl text-center space-y-6 not-prose my-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-black uppercase tracking-wider">
            <Sparkles className="h-4 w-4" />
            <span>Ready to Begin?</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-foreground">
            Master the Basics of Quran Reading with OQTutor
          </h3>

          <p className="text-sm sm:text-base text-muted-text max-w-xl mx-auto leading-relaxed">
            Explore our <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-bold">Noorani Qaida course</Link> or book a free trial lesson to see how our qualified tutors can guide your Quranic journey with patience and precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/book-free-trial"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <span>Book a Free Trial Lesson</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/courses"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass border border-card-border text-foreground font-bold text-base hover:bg-secondary/15 transition-all flex items-center justify-center space-x-2"
            >
              <span>Explore Our Courses</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
