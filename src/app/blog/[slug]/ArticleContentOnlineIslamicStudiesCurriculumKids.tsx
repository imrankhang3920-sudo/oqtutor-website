'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  GraduationCap,
  Users,
  Layers,
  Clock,
  Heart,
  ChevronDown,
  ArrowRight,
  UserCheck,
  Calendar,
  MessageSquare,
  Compass,
  CheckCircle2
} from 'lucide-react';

export default function ArticleContentOnlineIslamicStudiesCurriculumKids() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'What language are online Islamic Studies classes taught in?',
      a: 'At OQTutor, all Online Islamic Studies lessons are taught in clear, fluent English by certified male and female tutors. Children memorize Quranic verses and Masnoon Duas in Arabic, while all explanations, stories, and discussions happen in English so kids living in the USA, UK, Canada, and Australia understand every word.',
      linkHref: '/courses/islamic-studies',
      linkText: 'Online Islamic Studies'
    },
    {
      q: 'Should my child finish Noorani Qaida before starting Islamic Studies?',
      a: 'No, your child does not need to wait. In fact, teaching basic Islamic manners, short oral Duas, and stories of the Prophets alongside Noorani Qaida keeps young beginners excited about their classes and prevents screen fatigue.',
      linkHref: '/courses/noorani-qaida',
      linkText: 'Noorani Qaida'
    },
    {
      q: 'How many days a week should a child take Islamic Studies?',
      a: 'Most families see excellent progress with two to three sessions per week. You can either book a dedicated Islamic Studies slot once or twice a week, or attach 10 to 15 minutes of Islamic Studies to the end of your child\'s regular Quran recitation classes.'
    },
    {
      q: 'Can I choose a male tutor for my son or a female tutor for my daughter?',
      a: 'Yes. Having a relatable role model is vital as children grow into their pre teen and teenage years. You can select a qualified male instructor for your son or a certified female instructor for your daughter according to your family\'s preference.'
    }
  ];

  return (
    <article className="space-y-12 text-foreground/90 leading-relaxed font-normal">
      {/* Authorship Badge */}
      <div className="p-4 sm:p-5 rounded-2xl bg-foreground/[0.02] border border-card-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-text">
        <div className="flex items-center space-x-2">
          <UserCheck className="h-4 w-4 text-primary shrink-0" />
          <span>
            Written by the <strong className="text-foreground font-semibold">OQTutor Editorial Team</strong>
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-muted-text/80">
          <Calendar className="h-3.5 w-3.5 text-secondary" />
          <span>Published: October 25, 2026</span>
        </div>
      </div>

      {/* Introduction Prose */}
      <div className="space-y-6 text-base sm:text-lg text-foreground/90">
        <p>
          Ask a seven year old Muslim child growing up in Texas, London, or Toronto to name the latest video game characters, and they will give you a thirty minute lecture with remarkable passion. Ask that same child why we wash our feet during Wudu or who built the Kaaba, and you might get a polite blink and a sudden request for a snack.
        </p>

        <p>
          Every parent wants their child to love Islam. Most families start by enrolling their kids in{' '}
          <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">
            Noorani Qaida
          </Link>{' '}
          or{' '}
          <Link href="/courses/quran-with-tajweed" className="text-primary font-semibold hover:underline">
            Quran with Tajweed
          </Link>{' '}
          classes. Teaching a child to read the Arabic script accurately is a massive achievement. However, reading the Quran without learning basic Islamic principles is like memorizing the manual of a car without ever learning how to drive it.
        </p>
      </div>

      {/* Quick Answer Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 space-y-4 shadow-sm not-prose">
        <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest">
          <Sparkles className="h-4 w-4 fill-primary/20" />
          <span>Quick Answer</span>
        </div>
        <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed">
          <strong>Quick Answer:</strong> A complete <strong>online Islamic Studies curriculum</strong> for children must cover six core subjects alongside Quran recitation. These six pillars are <strong>Aqeedah</strong> (Islamic belief and knowing Allah), <strong>Fiqh and Ibadah</strong> (practical Wudu, Salah, and the Five Pillars), <strong>Seerah and Qasas</strong> (the life of Prophet Muhammad ﷺ and stories of the Prophets), <strong>Daily Masnoon Duas and Hadith</strong>, <strong>Akhlaq and Adab</strong> (Islamic manners and character), and <strong>Juz Amma Tafsir</strong> (understanding the meaning of short Surahs).
        </p>
      </div>

      {/* Lead-in Paragraph */}
      <p className="text-base sm:text-lg text-foreground/90">
        Let us walk through what your child needs to learn at every age, backed by authentic Islamic scholarship and family research, so you can raise a confident young Muslim.
      </p>

      {/* Section: Why Quran Recitation Alone Is Not Enough for Kids in the West */}
      <section className="space-y-6 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center space-x-3">
          <BookOpen className="h-7 w-7 text-primary shrink-0" />
          <span>Why Quran Recitation Alone Is Not Enough for Kids in the West</span>
        </h2>

        <p className="text-base sm:text-lg text-foreground/90">
          Muslim children living in the United States, the United Kingdom, Canada, and Australia spend roughly thirty five hours a week in secular school environments. According to the <strong>Pew Research Center</strong>, Muslims make up roughly 1.1% of the total U.S. population, which means your child is often the only Muslim student in their classroom. When children sit in environments where their beliefs are never mentioned, they need more than robotic repetition of Arabic letters. They need context, logic, and heart.
        </p>

        <p className="text-base sm:text-lg text-foreground/90">
          Research published by the <strong>Yaqeen Institute for Islamic Research</strong> shows that young Muslims in Western countries retain their faith best when parents and teachers answer their questions openly and connect Islamic rituals to real life meaning. If a child knows how to pronounce every throat letter in Surah Al Fatiha but does not know what they are asking Allah for during prayer, their connection stays on the surface.
        </p>

        <p className="text-base sm:text-lg text-foreground/90">
          A structured{' '}
          <Link href="/courses/islamic-studies" className="text-primary font-semibold hover:underline">
            Islamic Studies course
          </Link>{' '}
          bridges this gap. It turns daily Islamic habits from chores into personal convictions. Instead of praying just because Mom or Dad is watching, your child learns who Allah is, why prayer brings peace to the human heart, and how the Prophet Muhammad ﷺ treated everyone around him with kindness and dignity.
        </p>
      </section>

      {/* Section: The 6 Core Pillars of an Online Islamic Studies Curriculum */}
      <section className="space-y-8 pt-4 border-t border-card-border">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center space-x-3">
            <Layers className="h-7 w-7 text-primary shrink-0" />
            <span>The 6 Core Pillars of an Online Islamic Studies Curriculum</span>
          </h2>

          {/* Mid-Article Image 1 */}
          <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card not-prose">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] max-h-[500px]">
              <Image
                src="/blog/online-islamic-studies-curriculum-for-kids/online-islamic-studies-for-kids-cover.jpg"
                alt="Young boy learning the steps of Wudu and Islamic Studies online with a male instructor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </div>

          <p className="text-base sm:text-lg text-foreground/90">
            When you review an <strong>online Islamic Studies curriculum</strong>, look past flashy brochures. A trustworthy program organizes lessons into six clear subjects that grow with your child.
          </p>
        </div>

        {/* Pillar 1 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-card-border shadow-sm space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            1. Aqeedah: Building a Logical and Loving Connection with Allah
          </h3>
          <p className="text-base text-foreground/90">
            Children are natural detectives. They ask big questions like &quot;Where is Allah?&quot; and &quot;Why did Allah create mosquitoes?&quot; Good Aqeedah lessons do not shut down curiosity. Instead, they introduce Allah through His creation, His mercy, and His Beautiful Names (<em>Asma ul Husna</em>).
          </p>
          <p className="text-base text-foreground/90">
            Students learn the <strong>Six Articles of Faith</strong> as outlined in the famous Hadith of Jibril recorded in <strong>Sahih Muslim (Hadith 8)</strong>. They study belief in Allah, His Angels, His Revealed Books, His Messengers, the Last Day, and Divine Decree (<em>Al Qadr</em>). When a child learns that <em>Ar Razzaq</em> (The Provider) feeds the birds in the sky and takes care of their family, faith becomes warm and comforting rather than scary.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-card-border shadow-sm space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            2. Fiqh and Ibadah: Practical Worship Without the Guesswork
          </h3>
          <p className="text-base text-foreground/90">
            Many adults still remember learning how to pray by standing next to an uncle at the mosque and copying his movements out of the corner of their eye. Your child deserves a clearer method.
          </p>
          <p className="text-base text-foreground/90">
            Practical Fiqh teaches the <strong>Five Pillars of Islam</strong> recorded in <strong>Sahih al Bukhari (Hadith 8)</strong>. In an online 1 on 1 class, a certified tutor walks your child through:
          </p>
          <ul className="space-y-3 pt-2 text-base text-foreground/90">
            <li className="flex items-start space-x-3">
              <span className="text-primary font-bold text-lg leading-none mt-1">•</span>
              <span>
                <strong>Taharah and Wudu:</strong> How to keep clothes and the body clean, what breaks Wudu, and the exact Sunnah steps of ablution.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary font-bold text-lg leading-none mt-1">•</span>
              <span>
                <strong>Step by Step Salah:</strong> The physical postures (<em>Qiyam, Ruku, Sujood</em>), the compulsory Arabic recitations, their English meanings, and how to fix mistakes in prayer.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary font-bold text-lg leading-none mt-1">•</span>
              <span>
                <strong>Ramadan, Zakat, and Hajj:</strong> Age appropriate lessons on why Muslims fast, how charity purifies wealth, and the history of the pilgrimage to Makkah.
              </span>
            </li>
          </ul>
        </div>

        {/* Pillar 3 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-card-border shadow-sm space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            3. Seerah and Stories of the Prophets (Qasas ul Anbiya)
          </h3>
          <p className="text-base text-foreground/90">
            Children love heroes. If we do not give them real heroes from Islamic history, Netflix and YouTube will happily fill the job opening.
          </p>
          <p className="text-base text-foreground/90">
            Allah tells us in the Quran in <strong>Surah Yusuf (12:111)</strong> that in the stories of the Prophets there is a profound lesson for people of understanding. A strong curriculum teaches the biography (<em>Seerah</em>) of Prophet Muhammad ﷺ from his childhood in Makkah to the establishment of Madinah. Kids also learn the true stories of Prophet Adam, Nuh, Ibrahim, Musa, Dawud, Sulayman, and Isa (peace be upon them all). They see how Prophet Ibrahim stood up for truth as a young boy and how Prophet Yusuf stayed patient and honest during hardship.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-card-border shadow-sm space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            4. Daily Masnoon Duas and Authentic Hadith
          </h3>
          <p className="text-base text-foreground/90">
            Islam is lived in the small moments between the five daily prayers. Memorizing short supplications from authentic collections like <strong>Hisnul Muslim (Fortress of the Muslim)</strong> helps kids remember Allah all day long.
          </p>
          <p className="text-base text-foreground/90">
            Children learn the Arabic wording and English meaning of daily Duas for waking up, eating meals, entering and leaving the home, using the washroom, traveling, visiting the sick, and thanking parents. Alongside Duas, tutors introduce short, practical statements of the Prophet ﷺ from <strong>Imam Nawawi’s Forty Hadith</strong>, focusing on honesty, clean intentions, and mercy toward animals and people.
          </p>
        </div>

        {/* Pillar 5 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-card-border shadow-sm space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            5. Akhlaq and Adab: Islamic Manners for the Digital Age
          </h3>
          <p className="text-base text-foreground/90">
            Every parent wants a child who says <em>Assalamu Alaikum</em> at the door, shares their toys, and speaks politely at the dinner table. In <strong>Sunan Abi Dawud (Hadith 4799)</strong>, the Prophet ﷺ taught that nothing is heavier on the believer&apos;s scale on the Day of Judgment than good character.
          </p>
          <p className="text-base text-foreground/90">
            In an <strong>online Islamic Studies curriculum</strong>, Akhlaq lessons reinforce what you already teach at home. Tutors cover respect for parents (<em>Birr al Walidayn</em> as commanded in <strong>Surah Al Isra 17:23</strong>), eating with the right hand, controlling anger, telling the truth even when it is hard, and digital manners like avoiding bullying or bad language online.
          </p>
        </div>

        {/* Pillar 6 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-card-border shadow-sm space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            6. Applied Tafsir of Juz Amma
          </h3>
          <p className="text-base text-foreground/90">
            As your child memorizes short Surahs in their{' '}
            <Link href="/courses/quran-reading" className="text-primary font-semibold hover:underline">
              Quran Reading
            </Link>{' '}
            or{' '}
            <Link href="/courses/hifz-ul-quran" className="text-primary font-semibold hover:underline">
              Hifz ul Quran
            </Link>{' '}
            sessions, Islamic Studies explains the stories behind those verses. When a child learns the story of the elephant army in <strong>Surah Al Fil</strong> or why <strong>Surah Al Falaq</strong> and <strong>Surah An Nas</strong> protect them before bed, their recitation comes alive.
          </p>
        </div>
      </section>

      {/* Section: Age by Age Curriculum Roadmap (Ages 4 to 16) */}
      <section className="space-y-8 pt-4 border-t border-card-border">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center space-x-3">
            <GraduationCap className="h-7 w-7 text-primary shrink-0" />
            <span>Age by Age Curriculum Roadmap (Ages 4 to 16)</span>
          </h2>

          {/* Mid-Article Image 2 */}
          <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card not-prose">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] max-h-[500px]">
              <Image
                src="/blog/online-islamic-studies-curriculum-for-kids/father-son-online-islamic-studies-salah.jpg"
                alt="Muslim father and young son learning step-by-step Salah prayer online with a certified male teacher"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </div>

          <p className="text-base sm:text-lg text-foreground/90">
            You would not teach algebra to a kindergartener, and you should not use the same Islamic syllabus for every child. Classical Islamic education follows the Prophetic timeline found in <strong>Sunan Abi Dawud (Hadith 495)</strong>, where the Prophet ﷺ instructed parents to command their children to pray at age seven and guide them with firmer accountability by age ten.
          </p>

          <p className="text-base sm:text-lg text-foreground/90">
            Below is how a smart curriculum adapts to your child&apos;s brain development.
          </p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-2xl border border-card-border shadow-sm my-6 not-prose">
          <table className="w-full text-left text-sm border-collapse min-w-[640px]">
            <thead className="bg-muted/50 border-b border-card-border text-foreground font-extrabold uppercase text-xs tracking-wider">
              <tr>
                <th className="p-4 sm:p-5">Age Group</th>
                <th className="p-4 sm:p-5">Learning Stage</th>
                <th className="p-4 sm:p-5">Primary Curriculum Topics</th>
                <th className="p-4 sm:p-5">Practical Milestone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border bg-card">
              <tr className="hover:bg-muted/20 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-primary whitespace-nowrap">Ages 4 to 6</td>
                <td className="p-4 sm:p-5 font-semibold text-foreground whitespace-nowrap">Wonder &amp; Habit</td>
                <td className="p-4 sm:p-5 text-foreground/80">
                  Knowing Allah as Creator, the 5 Pillars, 12 short daily Duas, saying Bismillah and Alhamdulillah, stories of Prophet Adam, Nuh, and Yunus.
                </td>
                <td className="p-4 sm:p-5 text-foreground font-medium">
                  Child recites daily meal and sleep Duas happily and loves hearing stories about Allah.
                </td>
              </tr>
              <tr className="hover:bg-muted/20 transition-colors bg-muted/[0.02]">
                <td className="p-4 sm:p-5 font-bold text-primary whitespace-nowrap">Ages 7 to 9</td>
                <td className="p-4 sm:p-5 font-semibold text-foreground whitespace-nowrap">The Prayer Stage</td>
                <td className="p-4 sm:p-5 text-foreground/80">
                  Complete Wudu and Salah training, memorizing Tashahhud and Durood, the 6 Articles of Faith, Makkan Seerah, manners with parents and siblings.
                </td>
                <td className="p-4 sm:p-5 text-foreground font-medium">
                  Child performs Wudu and prays a complete 2 or 4 Rakah Salah independently.
                </td>
              </tr>
              <tr className="hover:bg-muted/20 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-primary whitespace-nowrap">Ages 10 to 12</td>
                <td className="p-4 sm:p-5 font-semibold text-foreground whitespace-nowrap">Pre Teen Mastery</td>
                <td className="p-4 sm:p-5 text-foreground/80">
                  Rules of fasting in Ramadan, what invalidates Salah, Madinan Seerah, stories of the four Rightly Guided Caliphs, Tafsir of 15 Surahs from Juz Amma.
                </td>
                <td className="p-4 sm:p-5 text-foreground font-medium">
                  Child prays all 5 daily prayers on time and understands the meaning of the Surahs they recite.
                </td>
              </tr>
              <tr className="hover:bg-muted/20 transition-colors bg-muted/[0.02]">
                <td className="p-4 sm:p-5 font-bold text-primary whitespace-nowrap">Ages 13 to 16</td>
                <td className="p-4 sm:p-5 font-semibold text-foreground whitespace-nowrap">Teen Conviction</td>
                <td className="p-4 sm:p-5 text-foreground/80">
                  Fiqh of puberty and purification, halal and haram lifestyle choices, answering modern doubts about faith, peer pressure, social media ethics.
                </td>
                <td className="p-4 sm:p-5 text-foreground font-medium">
                  Teenager owns their Muslim identity with confidence and applies Islamic ethics in high school.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section: 1 on 1 Online Classes vs. Weekend Mosque School: What Works Best? */}
      <section className="space-y-6 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center space-x-3">
          <Users className="h-7 w-7 text-primary shrink-0" />
          <span>1 on 1 Online Classes vs. Weekend Mosque School: What Works Best?</span>
        </h2>

        <p className="text-base sm:text-lg text-foreground/90">
          Weekend Islamic schools at the local masjid are wonderful for making Muslim friends and eating samosas in the parking lot. However, a typical weekend school puts twenty children of different backgrounds into one room with a volunteer teacher for two hours on a Sunday morning. If your child misses two Sundays because of flu season or a family trip, they lose a whole month of lessons.
        </p>

        <p className="text-base sm:text-lg text-foreground/90">
          Here is why thousands of parents combine or replace weekend school with <strong>1 on 1 online Islamic Studies</strong>:
        </p>

        <ol className="space-y-4 pt-2 text-base text-foreground/90 list-decimal list-inside">
          <li className="pl-2">
            <strong>A Safe Space for Honest Questions:</strong> A twelve year old boy will rarely raise his hand in front of twenty classmates to ask a personal Fiqh question or admit he does not know how to do Wudu properly. In a private 1 on 1 session with a caring male tutor, he can ask anything without embarrassment.
          </li>
          <li className="pl-2">
            <strong>Combined Quran and Islamic Studies:</strong> Busy parents do not need to drive across town twice a week. At <strong>OQTutor</strong>, a 30 minute class can dedicate 20 minutes to <strong>Tajweed or Hifz</strong> and 10 minutes to <strong>Islamic Studies and Duas</strong>.
          </li>
          <li className="pl-2">
            <strong>Zero Commute and Custom Pacing:</strong> If your child masters the steps of Wudu in one week, the tutor moves forward immediately. If they need extra time on Tashahhud, the tutor slows down.
          </li>
        </ol>
      </section>

      {/* Section: How Parents Can Reinforce Online Lessons at Home */}
      <section className="space-y-6 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center space-x-3">
          <Heart className="h-7 w-7 text-secondary shrink-0" />
          <span>How Parents Can Reinforce Online Lessons at Home</span>
        </h2>

        <p className="text-base sm:text-lg text-foreground/90">
          Even the best online tutor only sees your child for a few hours each week. You can multiply their progress at home with three simple habits that take less than five minutes a day:
        </p>

        <ul className="space-y-3 pt-2 text-base text-foreground/90">
          <li className="flex items-start space-x-3">
            <span className="text-primary font-bold text-lg leading-none mt-1">•</span>
            <span>
              <strong>Let Your Child Lead One Prayer:</strong> Once your eight or nine year old learns the steps of Salah in class, ask them to pray beside you or lead the family in Maghrib prayer at home. Nothing builds confidence faster.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-primary font-bold text-lg leading-none mt-1">•</span>
            <span>
              <strong>Post the Weekly Dua on the Fridge:</strong> Ask your tutor which Masnoon Dua your child is learning that week. Write it on a sticky note and put it on the refrigerator or bathroom mirror so the whole family practices together.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-primary font-bold text-lg leading-none mt-1">•</span>
            <span>
              <strong>Play the Dinner Table Quiz Game:</strong> Instead of asking &quot;How was class?&quot; ask your child to teach <em>you</em> one fact they learned about the Prophet ﷺ during dinner. Kids love playing the role of the teacher.
            </span>
          </li>
        </ul>
      </section>

      {/* Section: Frequently Asked Questions (FAQ) */}
      <section className="space-y-6 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center space-x-2">
          <HelpCircle className="h-7 w-7 text-primary shrink-0" />
          <span>Frequently Asked Questions (FAQ)</span>
        </h2>

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
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-foreground/90 leading-relaxed border-t border-card-border/50 pt-4 bg-muted/10">
                    {idx === 0 ? (
                      <p>
                        At <strong>OQTutor</strong>, all{' '}
                        <Link href="/courses/islamic-studies" className="text-primary font-semibold hover:underline">
                          Online Islamic Studies
                        </Link>{' '}
                        lessons are taught in clear, fluent English by certified male and female tutors. Children memorize Quranic verses and Masnoon Duas in Arabic, while all explanations, stories, and discussions happen in English so kids living in the USA, UK, Canada, and Australia understand every word.
                      </p>
                    ) : idx === 1 ? (
                      <p>
                        No, your child does not need to wait. In fact, teaching basic Islamic manners, short oral Duas, and stories of the Prophets alongside{' '}
                        <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">
                          Noorani Qaida
                        </Link>{' '}
                        keeps young beginners excited about their classes and prevents screen fatigue.
                      </p>
                    ) : (
                      <p>{faq.a}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section: Help Your Child Build a Lifelong Love for Islam */}
      <section className="space-y-6 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Help Your Child Build a Lifelong Love for Islam
        </h2>

        <p className="text-base sm:text-lg text-foreground/90">
          Giving your child the ability to read the Quran and live by the Sunnah is one of the greatest gifts a parent can leave behind. In <strong>Sahih Muslim (Hadith 1631)</strong>, Prophet Muhammad ﷺ taught that when a person passes away, their deeds come to an end except for three things: ongoing charity, beneficial knowledge, or a righteous child who prays for them.
        </p>

        <p className="text-base sm:text-lg text-foreground/90">
          At <strong>OQTutor</strong>, we partner with parents across the <strong>USA, UK, Canada, and Australia</strong> to make Quran and Islamic Studies engaging, structured, and easy to fit into your family schedule.
        </p>

        <div className="pt-2">
          <p className="text-base sm:text-lg font-bold text-foreground">
            👉{' '}
            <Link href="/contact" className="text-primary hover:underline font-bold">
              Book Your Child’s Free 1 on 1 Trial Class Today
            </Link>{' '}
            and see how our personalized curriculum helps your child grow in knowledge and faith!
          </p>
        </div>
      </section>
    </article>
  );
}
