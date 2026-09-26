'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  CheckCircle,
  ArrowRight,
  Heart,
  Sparkles,
  HelpCircle,
  Calendar,
  ShieldCheck,
  UserCheck,
  Award,
  ListChecks,
  Compass,
  Laptop,
  CheckCircle2,
  Clock,
  Volume2
} from 'lucide-react';

export default function ArticleContentNeverReadQuranSister() {
  return (
    <article className="space-y-10 text-foreground/90 leading-relaxed font-normal">
      {/* Intro Overview Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 space-y-4 not-prose">
        <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest">
          <Heart className="h-4 w-4 fill-primary/20" />
          <span>Sisters Quran Journey Guide</span>
        </div>
        <p className="text-xl sm:text-2xl font-extrabold text-foreground leading-snug">
          Yes. You can start now.
        </p>
        <p className="text-sm sm:text-base text-muted-text leading-relaxed">
          If you are a Muslim woman who has never learned to read the Quran, you may feel embarrassed, nervous, or simply unsure about where to begin. Perhaps you learned other things growing up but never had the opportunity to learn Quran reading. Maybe you tried before and found Arabic letters difficult. Or perhaps life simply became busy.
        </p>
        <div className="p-4 rounded-2xl glass border border-primary/20 bg-background/50 text-foreground text-sm font-semibold flex items-center space-x-3">
          <Sparkles className="h-5 w-5 text-secondary shrink-0" />
          <span>Whatever your reason, being a beginner does not mean you are too late.</span>
        </div>
      </div>

      {/* Main Intro Paragraphs */}
      <div className="space-y-4 text-base text-muted-text">
        <p>
          Learning to read the Quran is a skill. Like any skill, it begins with the basics and develops through regular practice. You do not need to open the Quran and magically know how to read it. You need a clear starting point, patient instruction, and a learning routine that fits your life.
        </p>
        <p>
          The Quran itself encourages believers to recite what is manageable for them. Surah Al Muzzammil 73:20 tells believers to recite what is easy from the Quran.
        </p>
        <p className="text-lg font-bold text-foreground">
          So if you are asking, “Can I start learning Quran as an adult?” the answer is simple: <span className="text-primary font-black">yes, you can.</span>
        </p>
      </div>

      {/* Table of Contents */}
      <nav aria-label="Table of contents" className="p-6 sm:p-8 rounded-3xl glass border border-card-border space-y-4 not-prose my-8">
        <div className="flex items-center space-x-2.5 text-foreground font-extrabold text-base sm:text-lg">
          <Compass className="h-5 w-5 text-primary" />
          <span>Table of Contents</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium text-muted-text">
          <a href="#is-it-too-late" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">1.</span>
            <span>Is It Too Late to Learn Quran?</span>
          </a>
          <a href="#no-arabic-knowledge" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">2.</span>
            <span>What If I Do Not Know Arabic at All?</span>
          </a>
          <a href="#where-complete-beginner-starts" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">3.</span>
            <span>Where Should a Complete Beginner Start?</span>
          </a>
          <a href="#do-i-need-female-teacher" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">4.</span>
            <span>Do I Need a Female Quran Teacher?</span>
          </a>
          <a href="#feeling-embarrassed" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">5.</span>
            <span>What If I Feel Embarrassed About Not Knowing?</span>
          </a>
          <a href="#how-much-time" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">6.</span>
            <span>How Much Time Should I Spend Learning Quran?</span>
          </a>
          <a href="#using-transliteration" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">7.</span>
            <span>Should I Use Transliteration?</span>
          </a>
          <a href="#making-mistakes" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">8.</span>
            <span>What If I Make Mistakes While Reading?</span>
          </a>
          <a href="#learn-online-adult-sister" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">9.</span>
            <span>Can I Learn Quran Online as an Adult Sister?</span>
          </a>
          <a href="#first-learning-goal" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">10.</span>
            <span>What Should My First Quran Learning Goal Be?</span>
          </a>
          <a href="#simple-starting-plan" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">11.</span>
            <span>A Simple Starting Plan for Sisters (4 Weeks)</span>
          </a>
          <a href="#not-too-late" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">12.</span>
            <span>You Are Not Too Late</span>
          </a>
          <a href="#faqs" className="hover:text-primary transition-colors flex items-center space-x-1.5">
            <span className="text-primary font-bold">13.</span>
            <span>Frequently Asked Questions</span>
          </a>
        </div>
      </nav>

      {/* Section 1: Is It Too Late to Learn Quran? */}
      <section id="is-it-too-late" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <Heart className="h-7 w-7 text-primary" />
          <span>Is It Too Late to Learn Quran?</span>
        </h2>
        
        <p className="text-xl font-bold text-foreground">
          No.
        </p>

        <p className="text-base text-muted-text">
          There is no age at which learning the Quran becomes pointless. You may be starting at 20, 30, 40, 50, or later. Your starting point matters more than the age at which you begin.
        </p>

        <p className="text-base text-muted-text">
          You also do not need to compare yourself with someone who has been reading since childhood.
        </p>

        <p className="text-base text-muted-text">
          If another sister can read a full page comfortably while you are still learning Arabic letters, that does not make your journey less valuable. You are simply at a different stage.
        </p>

        {/* Hadith Callout Box */}
        <div className="p-6 rounded-3xl bg-secondary/10 border border-secondary/30 not-prose my-6 space-y-3">
          <div className="flex items-center space-x-2 text-secondary font-bold text-xs uppercase tracking-wider">
            <BookOpen className="h-4 w-4" />
            <span>Prophetic Encouragement</span>
          </div>
          <blockquote className="text-base sm:text-lg font-bold text-foreground italic">
            “The best among you are those who learn the Qur'an and teach it.”
          </blockquote>
          <p className="text-xs text-muted-text">
            — Narrated by Uthman ibn Affan (RA) in <strong>Sahih al Bukhari</strong> (Hadith 5027).
          </p>
        </div>

        <p className="text-base text-muted-text">
          Learning is therefore not something you should feel ashamed of. It is a meaningful part of developing your relationship with the Quran.
        </p>

        {/* PICTURE 1: Physical Quran on prayer rug */}
        <div className="my-8 not-prose">
          <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-card-border shadow-xl">
            <Image
              src="/blog/sister-never-read-quran-before-can-i-start-now/sister-quran-reading-prayer-rug.jpg"
              alt="Holy Quran open on a prayer mat for a sister beginning her Quran recitation journey"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <p className="text-xs text-center text-muted-text mt-3 italic">
            It is never too late to open the Holy Quran. Every step you take as a beginner brings immense spiritual closeness and reward.
          </p>
        </div>
      </section>

      {/* Section 2: What If I Do Not Know Arabic at All? */}
      <section id="no-arabic-knowledge" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <BookOpen className="h-7 w-7 text-primary" />
          <span>What If I Do Not Know Arabic at All?</span>
        </h2>
        
        <p className="text-base sm:text-lg font-semibold text-foreground">
          That is completely fine.
        </p>

        <p className="text-base text-muted-text">
          You do not need to speak Arabic before you begin learning Quran reading.
        </p>

        <p className="text-base text-muted-text">
          Reading the Quran and understanding the Arabic language are related but different skills. Your first goal can simply be learning how to recognize Arabic letters, understand their sounds, and combine them correctly.
        </p>

        <div className="p-6 rounded-3xl glass border border-primary/20 space-y-3 my-4 not-prose">
          <div className="flex items-center space-x-2 text-primary font-bold text-sm">
            <Sparkles className="h-4.5 w-4.5" />
            <span>The Power of Noorani Qaida for Beginners</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
            This is where a beginner resource such as <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida</Link> can help. Noorani Qaida introduces learners to Arabic letters, their sounds, vowel marks, connected letters, and basic reading patterns before they move into regular Quranic text. Current beginner guides commonly recommend this type of structured progression for people starting from the beginning.
          </p>
        </div>

        <p className="text-base text-muted-text">
          Think of it like learning the alphabet before reading a full book.
        </p>

        <p className="text-base text-muted-text">
          You would not expect someone who has never learned English letters to immediately read a complicated novel. Quran reading deserves the same patient foundation.
        </p>
      </section>

      {/* Section 3: Where Should a Complete Beginner Start? */}
      <section id="where-complete-beginner-starts" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <ListChecks className="h-7 w-7 text-primary" />
          <span>Where Should a Complete Beginner Start?</span>
        </h2>

        <p className="text-base text-muted-text">
          If you have never read the Quran before, do not worry about finishing Surahs quickly.
        </p>

        <p className="text-base font-semibold text-foreground">
          Start with the foundations. A practical beginner pathway looks like this:
        </p>

        {/* 5-Step Beginner Pathway Cards */}
        <div className="space-y-4 my-6 not-prose">
          {[
            {
              step: 'Step 1',
              title: 'Learn the Arabic Letters',
              desc: 'First, become familiar with the Arabic alphabet. Learn to recognize each letter and understand its basic sound. Some Arabic sounds may feel unfamiliar at first, especially if your first language does not contain similar sounds. That is normal. The goal at this stage is recognition and pronunciation, not speed.'
            },
            {
              step: 'Step 2',
              title: 'Learn How Letters Connect',
              desc: 'Arabic letters can appear in different forms depending on their position in a word (beginning, middle, end, or isolated). Once you recognize individual letters, you need to learn how they work together. This step helps you move from recognizing separate letters to reading simple combinations.'
            },
            {
              step: 'Step 3',
              title: 'Learn Basic Vowel Marks',
              desc: 'Next, you begin working with signs that affect pronunciation (Fathah, Kasrah, Dammah, Sukoon, and Tanween). A beginner course normally introduces basic vowel sounds and gradually builds toward more complex reading patterns. This is where consistent practice becomes important.'
            },
            {
              step: 'Step 4',
              title: 'Start Reading Simple Quranic Words',
              desc: 'Once your foundation becomes stronger, you can begin reading Quranic words and short passages. You may read slowly. That is perfectly acceptable. Accuracy comes before speed.'
            },
            {
              step: 'Step 5',
              title: 'Improve Pronunciation and Tajweed',
              desc: 'After developing basic reading ability, you can work on Tajweed and pronunciation. A teacher can listen to your recitation and identify mistakes that may be difficult for you to notice yourself. This is particularly useful for sounds that do not exist in English or other languages.'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 sm:p-6 rounded-3xl glass border border-card-border flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
              <span className="px-3 py-1 rounded-xl bg-primary/10 text-primary text-xs font-bold shrink-0">
                {item.step}
              </span>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Do I Need a Female Quran Teacher? */}
      <section id="do-i-need-female-teacher" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <UserCheck className="h-7 w-7 text-primary" />
          <span>Do I Need a Female Quran Teacher?</span>
        </h2>

        <p className="text-base text-muted-text">
          You do not have to learn in the same way as everyone else.
        </p>

        <p className="text-base text-muted-text">
          Some sisters prefer learning independently through books or recorded lessons. Others feel more comfortable with a teacher who can listen to their recitation and correct mistakes immediately.
        </p>

        <p className="text-base text-muted-text">
          For many adult sisters, a <Link href="/tutors" className="text-primary font-semibold hover:underline">female Quran teacher</Link> can provide a comfortable learning environment where they can ask questions and practice without feeling embarrassed.
        </p>

        <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20 space-y-3 my-4 not-prose">
          <div className="flex items-center space-x-2 text-primary font-bold text-sm">
            <ShieldCheck className="h-5 w-5" />
            <span>Dedicated Sisters Quran Program at OQTutor</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
            OQTutor offers online Quran classes with certified female teachers for sisters and children. Its female Quran teacher program includes beginner instruction through courses such as <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida</Link>, <Link href="/courses/quran-reading" className="text-primary font-semibold hover:underline">Quran Reading</Link>, <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed</Link>, and <Link href="/courses/hifz" className="text-primary font-semibold hover:underline">Hifz</Link>.
          </p>
        </div>

        <p className="text-base text-muted-text">
          If you are starting from zero, a private lesson can also make it easier to explain exactly what you already know and what you need to learn next.
        </p>

        <p className="text-base text-muted-text">
          You do not have to pretend that you know more than you do.
        </p>

        <p className="text-base sm:text-lg font-bold text-foreground">
          A good teacher needs your real starting point, not an impressive one.
        </p>
      </section>

      {/* Section 5: What If I Feel Embarrassed About Not Knowing? */}
      <section id="feeling-embarrassed" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <HelpCircle className="h-7 w-7 text-primary" />
          <span>What If I Feel Embarrassed About Not Knowing?</span>
        </h2>

        <p className="text-base text-muted-text">
          This may be one of the biggest obstacles.
        </p>

        <div className="p-5 rounded-2xl glass border border-card-border italic text-sm text-foreground/80 font-medium">
          “I am an adult. I should already know this.”
        </div>

        <p className="text-base text-muted-text">
          But that thought does not teach you anything. It only makes starting harder.
        </p>

        <p className="text-base text-muted-text">
          Everyone has a different learning history. Some people grew up attending Quran classes. Others did not have access to them. Some learned as children and forgot much of what they knew. Others are learning for the first time as adults.
        </p>

        <p className="text-base text-muted-text">
          Your previous experience does not determine what you can learn now.
        </p>

        <div className="p-6 rounded-3xl bg-secondary/10 border border-secondary/20 my-4 not-prose space-y-2">
          <p className="text-sm sm:text-base font-bold text-foreground">
            A Mindset Shift for Adult Learners:
          </p>
          <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
            Instead of asking, <em>“Why did I not learn this earlier?”</em> try asking, <strong className="text-primary">“What can I learn today?”</strong> That question leads somewhere useful.
          </p>
        </div>
      </section>

      {/* Section 6: How Much Time Should I Spend Learning Quran? */}
      <section id="how-much-time" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <Clock className="h-7 w-7 text-primary" />
          <span>How Much Time Should I Spend Learning Quran?</span>
        </h2>

        <p className="text-base text-muted-text">
          You do not need to begin with a huge study schedule.
        </p>

        <p className="text-base text-muted-text">
          A manageable routine is usually easier to maintain than an unrealistic one.
        </p>

        <p className="text-base text-muted-text">
          You could set aside a regular period for learning, depending on your personal schedule and teacher's recommendations. During that time, focus on one small skill instead of trying to master everything at once.
        </p>

        <p className="text-base text-muted-text">
          For example, one session might focus mainly on letter recognition. Another may involve connecting letters and reading simple combinations.
        </p>

        <p className="text-base text-muted-text">
          The important thing is to practise what you are learning.
        </p>

        <p className="text-base text-muted-text">
          Quran 73:20 specifically mentions reciting what is easy, which supports a gradual approach rather than treating Quran recitation as a race.
        </p>

        <p className="text-base sm:text-lg font-semibold text-foreground">
          Your goal is not to impress anyone with speed. Your goal is to become comfortable reading correctly.
        </p>
      </section>

      {/* Section 7: Should I Use Transliteration? */}
      <section id="using-transliteration" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <Volume2 className="h-7 w-7 text-primary" />
          <span>Should I Use Transliteration?</span>
        </h2>

        <p className="text-base text-muted-text">
          Transliteration can sometimes help a beginner understand how a word may sound, but it should not become a replacement for learning the Arabic script.
        </p>

        <p className="text-base text-muted-text">
          Arabic contains sounds that English spelling cannot represent perfectly. That is one reason beginner Quran programs focus on learning the Arabic letters and their correct pronunciation.
        </p>

        <p className="text-base text-muted-text">
          If you depend entirely on English letters, you may continue avoiding the actual Arabic reading skill you want to develop.
        </p>

        <p className="text-base text-muted-text">
          Use transliteration carefully as a temporary aid when appropriate, while continuing to learn Arabic script.
        </p>

        <p className="text-base sm:text-lg font-bold text-foreground">
          The long term goal should be to read the Quran directly from Arabic.
        </p>
      </section>

      {/* Section 8: What If I Make Mistakes While Reading? */}
      <section id="making-mistakes" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <CheckCircle className="h-7 w-7 text-primary" />
          <span>What If I Make Mistakes While Reading?</span>
        </h2>

        <p className="text-base sm:text-lg font-bold text-foreground">
          You probably will. And that is part of learning.
        </p>

        <p className="text-base text-muted-text">
          A beginner may confuse letters, pause in the wrong place, pronounce a sound incorrectly, or need several attempts to read a word.
        </p>

        <p className="text-base text-muted-text">
          Do not treat every mistake as evidence that you cannot learn. Treat it as information.
        </p>

        <p className="text-base text-muted-text">
          If a teacher corrects your pronunciation, repeat it. If you struggle with a particular letter, practise it again. If a reading pattern feels difficult, slow down and work through it.
        </p>

        <div className="p-5 rounded-2xl glass border border-emerald-500/20 bg-emerald-500/5 text-foreground text-sm font-semibold flex items-center space-x-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
          <span>Learning becomes easier when mistakes become part of the process instead of something you fear.</span>
        </div>
      </section>

      {/* Section 9: Can I Learn Quran Online as an Adult Sister? */}
      <section id="learn-online-adult-sister" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <Laptop className="h-7 w-7 text-primary" />
          <span>Can I Learn Quran Online as an Adult Sister?</span>
        </h2>

        <p className="text-base sm:text-lg font-bold text-foreground">
          Yes.
        </p>

        <p className="text-base text-muted-text">
          Online Quran learning can give adult sisters access to private lessons without requiring them to travel to a physical classroom.
        </p>

        <p className="text-base text-muted-text">
          OQTutor describes its adult Quran classes as private one on one sessions designed around the student's starting level and learning needs. Its female Quran teacher program is specifically presented for sisters, children, and teenagers.
        </p>

        <p className="text-base text-muted-text">
          This type of learning can be useful if your schedule changes frequently or if you feel more comfortable learning from home.
        </p>

        <p className="text-base text-muted-text">
          The important part is not whether the class happens online or in person. The important part is whether the learning approach gives you clear instruction, opportunities to practise, and useful correction.
        </p>

        {/* PICTURE 2: Digital Quran on Tablet next to plant */}
        <div className="my-8 not-prose">
          <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-card-border shadow-xl">
            <Image
              src="/blog/sister-never-read-quran-before-can-i-start-now/online-quran-tablet-study.jpg"
              alt="Digital tablet displaying Surah Al-Kahf on a study stand next to a green plant for sisters online Quran learning"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <p className="text-xs text-center text-muted-text mt-3 italic">
            Online Quran classes allow sisters to learn in privacy and comfort from home on a tablet or computer with qualified female teachers.
          </p>
        </div>
      </section>

      {/* Section 10: What Should My First Quran Learning Goal Be? */}
      <section id="first-learning-goal" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <Award className="h-7 w-7 text-primary" />
          <span>What Should My First Quran Learning Goal Be?</span>
        </h2>

        <p className="text-base text-muted-text">
          Do not make your first goal “I want to finish the Quran.” That is a long term objective.
        </p>

        <p className="text-base font-semibold text-foreground">
          Start smaller. Your first goal might be:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 not-prose">
          {[
            'Recognize Arabic letters confidently.',
            'Pronounce the basic sounds correctly.',
            'Understand how letters connect.',
            'Read simple combinations.',
            'Begin reading Quranic words.',
            'Develop more accurate pronunciation.',
            'Gradually learn Tajweed.'
          ].map((goal, idx) => (
            <div key={idx} className="p-4 rounded-2xl glass border border-card-border flex items-center space-x-3">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                {idx + 1}
              </span>
              <span className="text-xs sm:text-sm text-foreground font-medium">{goal}</span>
            </div>
          ))}
        </div>

        <p className="text-base text-muted-text">
          Small achievements matter. The first time you recognize a letter without help, read a combination correctly, or complete a short passage that once looked impossible, you have made real progress.
        </p>
      </section>

      {/* Section 11: A Simple Starting Plan for Sisters */}
      <section id="simple-starting-plan" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <Calendar className="h-7 w-7 text-primary" />
          <span>A Simple Starting Plan for Sisters</span>
        </h2>

        <p className="text-base text-muted-text">
          If you are completely new, keep your first steps simple.
        </p>

        {/* 4-Week Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
          <div className="p-5 sm:p-6 rounded-3xl glass border border-card-border space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm sm:text-base text-foreground">Week One: Arabic Letters</h3>
              <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">Week 1</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Focus on recognizing letters and learning their sounds. Do not worry about reading quickly.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl glass border border-card-border space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm sm:text-base text-foreground">Week Two: Letter Combinations</h3>
              <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">Week 2</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Begin working with connected letters and simple reading patterns. Repeat difficult combinations until they become familiar.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl glass border border-card-border space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm sm:text-base text-foreground">Week Three: Reading Confidence</h3>
              <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">Week 3</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Start reading short combinations and simple Quranic words with guidance. Ask your teacher to correct pronunciation where necessary.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl glass border border-card-border space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm sm:text-base text-foreground">Week Four: Foundation Building</h3>
              <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">Week 4</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Keep practising and gradually introduce more Quranic reading. Connect vowels and short verses steadily.
            </p>
          </div>
        </div>

        <p className="text-base text-muted-text">
          Your exact pace may be faster or slower. There is no reliable single timeline that applies to every learner. OQTutor also notes that progress varies according to starting level, lesson frequency, and home practice.
        </p>

        <p className="text-base sm:text-lg font-semibold text-foreground">
          The important thing is steady learning rather than comparing your progress with someone else's.
        </p>
      </section>

      {/* Section 12: You Are Not Too Late */}
      <section id="not-too-late" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <Sparkles className="h-7 w-7 text-primary" />
          <span>You Are Not Too Late</span>
        </h2>

        <p className="text-base text-muted-text">
          If you have never read the Quran before, you may feel like you have missed your chance.
        </p>

        <p className="text-xl font-extrabold text-foreground">
          You have not.
        </p>

        <p className="text-base text-muted-text">
          You can begin with one letter. Then another. Then a sound. Then a word. Eventually, the page that once looked unfamiliar starts becoming readable.
        </p>

        {/* Quran Verse Box */}
        <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20 not-prose my-6 space-y-3">
          <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider">
            <Heart className="h-4 w-4" />
            <span>Divine Reassurance</span>
          </div>
          <p className="text-base sm:text-lg font-semibold text-foreground leading-relaxed">
            The Quran reminds believers not to despair of Allah's mercy. Surah Az Zumar 39:53 tells believers not to despair of Allah's mercy and describes Him as Forgiving and Merciful.
          </p>
        </div>

        <p className="text-base text-muted-text">
          So do not let embarrassment become the reason you never begin.
        </p>

        <p className="text-base text-muted-text">
          You do not need to know everything before taking the first lesson. You only need to take the first step.
        </p>
      </section>

      {/* Section 13: Ready to Start Learning Quran? */}
      <section id="ready-to-start" className="space-y-4 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <BookOpen className="h-7 w-7 text-primary" />
          <span>Ready to Start Learning Quran?</span>
        </h2>

        <p className="text-base text-muted-text">
          If you are a sister who has never read the Quran, begin with the basics and give yourself permission to learn slowly.
        </p>

        <p className="text-base text-muted-text">
          A structured <strong>Noorani Qaida</strong> course can help you build the reading foundation before moving into regular Quran recitation. With guidance from a suitable teacher, you can work on letters, pronunciation, reading, and eventually Tajweed according to your level.
        </p>

        <p className="text-base text-muted-text">
          OQTutor provides online Quran learning options for adult students and female learners, including private lessons with female Quran teachers.
        </p>

        <p className="text-base sm:text-lg font-bold text-foreground">
          You do not need to wait until you feel ready. Sometimes, the lesson is what makes you ready.
        </p>

        {/* CTA Banner Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-secondary/15 border border-primary/30 text-center space-y-4 not-prose my-8">
          <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-1">
            <Heart className="h-6 w-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
            Start Your Quran Reading Journey with a Female Teacher
          </h3>
          <p className="text-xs sm:text-sm text-muted-text max-w-xl mx-auto">
            Book a free 1-on-1 trial class with certified female Quran teachers at OQTutor. Experience patient, supportive instruction in total comfort and privacy.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-free-trial"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300"
            >
              <span>Book Free Trial Class</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </Link>
            <Link
              href="/courses/noorani-qaida"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full glass border border-card-border hover:border-primary text-foreground text-sm font-semibold transition-all duration-300"
            >
              <span>Explore Noorani Qaida</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 14: Frequently Asked Questions */}
      <section id="faqs" className="space-y-6 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-2">
          <HelpCircle className="h-7 w-7 text-primary" />
          <span>Frequently Asked Questions</span>
        </h2>

        <div className="space-y-4 not-prose">
          {[
            {
              q: 'Can I start learning Quran as an adult woman?',
              a: 'Yes. There is no age limit to learning the Quran. Many adult sisters begin with zero Arabic knowledge and learn step by step with patient instruction.'
            },
            {
              q: 'Do I need to speak or understand Arabic before reading Quran?',
              a: 'No. Quran reading is a phonetic skill. You start with Arabic letter recognition and sounds through Noorani Qaida without needing to speak conversational Arabic.'
            },
            {
              q: 'Can I request a female Quran teacher for my lessons?',
              a: 'Yes. OQTutor provides certified female Quran teachers (Alimas and Qariahs) for sisters and children, offering a comfortable, private 1-on-1 learning environment.'
            },
            {
              q: 'How long does it take for a beginner sister to learn to read Quran?',
              a: 'With consistent 1-on-1 lessons and short daily practice, most beginners complete the foundational Qaida within 3 to 5 months and start reading Quranic passages independently.'
            },
            {
              q: 'What if I feel nervous or embarrassed about making mistakes?',
              a: 'Mistakes are a completely normal and necessary part of the learning journey. A dedicated teacher provides gentle correction and helps you build confidence one step at a time.'
            },
            {
              q: 'Should I use English transliteration to read Quran?',
              a: 'Transliteration can be used briefly as an introductory aid, but it cannot represent unique Arabic phonetics accurately. The recommended approach is learning Arabic letters directly.'
            }
          ].map((faq, idx) => (
            <div key={idx} className="p-5 rounded-2xl glass border border-card-border space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-foreground flex items-start space-x-2">
                <span className="text-primary font-black">Q:</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 15: Sources & References */}
      <section id="sources" className="space-y-3 scroll-mt-24 pt-4 border-t border-card-border">
        <h2 className="text-lg font-bold text-foreground tracking-tight">
          Sources &amp; References
        </h2>
        <ul className="space-y-2 text-xs text-muted-text list-disc list-inside">
          <li>
            <strong>Sahih al-Bukhari</strong>, Hadith 5027: The virtue of learning and teaching the Holy Quran.
          </li>
          <li>
            <strong>Quran.com</strong>, Surah Al-Muzzammil 73:20: Instruction to recite what is easy from the Quran.
          </li>
          <li>
            <strong>Quran.com</strong>, Surah Az-Zumar 39:53: Divine reassurance never to despair of Allah's mercy.
          </li>
        </ul>

        {/* Author Bio Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 not-prose mt-8">
          <div className="relative h-20 w-20 rounded-2xl overflow-hidden border-2 border-primary/30 shrink-0">
            <Image
              src="/tutor-fatima.jpg"
              alt="Ustadha Fatima Al-Zahra - Senior Female Quran Teacher at OQTutor"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h3 className="font-bold text-lg text-foreground">Ustadha Fatima Al-Zahra</h3>
              <span className="text-[11px] font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                Author &amp; Senior Female Scholar
              </span>
            </div>
            <p className="text-xs text-secondary font-medium">Senior Female Quran &amp; Tajweed Scholar • Alimiyyah Degree Graduate</p>
            <p className="text-xs text-muted-text leading-relaxed">
              Ustadha Fatima Al-Zahra is a certified female Quran and Tajweed teacher at OQTutor with over 7 years of experience teaching adult sisters, new Muslims, and young girls from around the world. She specializes in supportive, step-by-step Noorani Qaida instruction and helping adult beginners build recitation confidence from zero.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
