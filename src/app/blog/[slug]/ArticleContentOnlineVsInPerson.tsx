'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Clock,
  Calendar,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Award,
  Users,
  UserCheck,
  CheckCircle2,
  ChevronDown,
  Laptop,
  Globe,
  Headphones,
  DollarSign,
  AlertTriangle,
  Heart,
  Car,
  Home,
  Check,
  GraduationCap,
  Layers,
  MapPin,
  Flame,
  Volume2
} from 'lucide-react';

export default function ArticleContentOnlineVsInPerson() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Q1. Can a complete beginner learn the Quran effectively through online classes?',
      a: 'Yes. In fact, 1-on-1 online sessions are ideal for beginners starting with Noorani Qaida because the teacher spends the entire lesson focused on your specific pronunciation and mouth positioning without classroom distractions.'
    },
    {
      q: 'Q2. How do I know if an online Quran teacher is qualified and trustworthy?',
      a: 'Always verify that the tutor holds a formal Ijazah, has experience teaching your specific age group, and speaks fluent English to explain rules clearly. Reputable platforms like OQTutor vet teachers rigorously and offer a free trial class so you can evaluate the tutor first.'
    },
    {
      q: 'Q3. Are in-person Quran classes better for young children than online ones?',
      a: 'It depends on the child. Some 4-to-6-year-olds thrive on the physical structure and peer energy of a classroom. However, many children who get distracted by noisy classmates actually focus much better in short, engaging 1-on-1 online lessons where the tutor uses visual whiteboards and interactive rewards.'
    },
    {
      q: 'Q4. What equipment or internet setup do I need for online Quran classes?',
      a: 'All you need is a stable internet connection, a tablet or computer with a webcam, a quiet space, and a simple headset with a microphone so your teacher can clearly hear every Tajweed nuance. Your teacher will display the digital Mushaf directly on your screen.'
    },
    {
      q: 'Q5. Is it possible to memorize the entire Quran (Hifz) through online classes?',
      a: 'Absolutely. Thousands of students complete their Hifz-ul-Quran entirely online. Because 1-on-1 sessions dedicate 100% of the class time to your new lesson (Sabaq), recent revision (Sabqi), and old revision (Manzil), online Hifz students often progress faster than students waiting in line in a crowded madrasah.'
    },
    {
      q: 'Q6. Can I request a female Quran teacher for myself or my daughter?',
      a: 'Yes. One of the biggest advantages of online learning with OQTutor is instant access to certified, experienced female Quran tutors—allowing sisters and young girls to learn comfortably from home.'
    },
    {
      q: 'Q7. Can adults who have never studied the Quran before join online classes?',
      a: 'Definitely. Most adult beginners and converts strongly prefer 1-on-1 online classes because they provide a private, judgment-free environment where you never have to feel self-conscious about learning alongside young children.'
    },
    {
      q: 'Q8. What happens if we need to miss or reschedule an online class?',
      a: 'Unlike traditional in-person classes where a missed day is lost forever, OQTutor allows you to easily reschedule sessions with advance notice, ensuring you or your child never fall behind during busy weeks, illnesses, or family travel.'
    }
  ];

  return (
    <article className="space-y-12 text-foreground/90 leading-relaxed font-normal">
      {/* Reviewer and Authorship Meta Badge */}
      <div className="p-4 sm:p-5 rounded-2xl bg-foreground/[0.02] border border-card-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-text">
        <div className="flex items-center space-x-2">
          <UserCheck className="h-4 w-4 text-primary shrink-0" />
          <span>
            By the <strong className="text-foreground font-semibold">OQTutor Editorial Team</strong> | Reviewed by <strong className="text-foreground font-semibold">Senior Quran &amp; Tajweed Scholars</strong>
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-muted-text/80">
          <Calendar className="h-3.5 w-3.5" />
          <span>Published: November 7, 2026</span>
        </div>
      </div>

      {/* Intro Lead */}
      <section className="space-y-5 text-base sm:text-lg text-muted-text">
        <p className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
          If you have been going back and forth on how to start—or restart—Quran lessons, you are not alone. It is one of the questions we hear most often from parents and adult learners alike: <em>Should we sign up for <Link href="/courses" className="text-primary hover:underline font-semibold">online Quran classes</Link>, or find a teacher at a local mosque and do it in person?</em>
        </p>
        <p>
          There is no single right answer. The best choice depends on your weekly schedule, where you live, your child’s personality (or your own learning style), and what you can realistically stick with over the long run.
        </p>
        <p>
          Instead of guessing, let’s walk through the real-world differences between online and in-person Quran education so you can choose the format that truly fits your household.
        </p>
      </section>

      {/* Quick Summary Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 space-y-4 not-prose shadow-sm">
        <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest">
          <Sparkles className="h-4 w-4 fill-primary/20" />
          <span>Core Takeaway</span>
        </div>
        <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">
          <strong>Online Quran classes</strong> provide dedicated 1-on-1 personalized attention, flexible scheduling, and access to certified global Ijazah scholars from the safety of home. <strong>In-person classes</strong> offer traditional mosque discipline, peer socialization, and physical community presence. For most busy modern families and adults seeking rapid Tajweed mastery, online 1-on-1 tutoring delivers superior recitation progress; a <strong>hybrid model</strong> that pairs online classes with weekend mosque activities provides the best of both worlds.
        </p>
      </div>

      {/* Quick Comparison Table */}
      <section className="space-y-6 not-prose">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-1.5 bg-primary rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Quick Comparison: Online vs. In-Person Quran Classes at a Glance
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-card-border glass shadow-lg">
          <table className="w-full text-left border-collapse text-sm sm:text-base">
            <thead>
              <tr className="border-b border-card-border bg-foreground/[0.04]">
                <th className="p-4 sm:p-5 font-extrabold text-foreground w-1/4">Feature</th>
                <th className="p-4 sm:p-5 font-extrabold text-primary w-3/8 bg-primary/5">
                  Online Quran Classes (1-on-1)
                </th>
                <th className="p-4 sm:p-5 font-extrabold text-secondary w-3/8">
                  In-Person Quran Classes (Mosque/Madrasah)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              <tr className="hover:bg-foreground/[0.01] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-foreground">Class Structure</td>
                <td className="p-4 sm:p-5 text-foreground/90 bg-primary/[0.02]">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Dedicated 1-on-1 focus:</strong> 100% teacher attention for the entire class.</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 text-muted-text">
                  Typically group-based (10–25 students per teacher; 4–5 min direct attention).
                </td>
              </tr>
              <tr className="hover:bg-foreground/[0.01] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-foreground">Scheduling</td>
                <td className="p-4 sm:p-5 text-foreground/90 bg-primary/[0.02]">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Flexible &amp; 24/7 availability:</strong> Easy rescheduling with advance notice.</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 text-muted-text">
                  Fixed days and times; missed classes are rarely made up.
                </td>
              </tr>
              <tr className="hover:bg-foreground/[0.01] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-foreground">Teacher Selection</td>
                <td className="p-4 sm:p-5 text-foreground/90 bg-primary/[0.02]">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <span>Global pool of certified male &amp; <Link href="/courses/female-quran-teacher" className="text-primary hover:underline font-semibold">female Ijazah tutors</Link>.</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 text-muted-text">
                  Limited strictly to whoever lives within driving distance.
                </td>
              </tr>
              <tr className="hover:bg-foreground/[0.01] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-foreground">Average Monthly Cost</td>
                <td className="p-4 sm:p-5 text-foreground/90 bg-primary/[0.02]">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <span><strong className="text-primary">$30 – $50/month</strong> (plus zero commute cost).</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 text-muted-text">
                  <strong>$50 – $150/month</strong> (plus gas, transit, registration fees, and materials).
                </td>
              </tr>
              <tr className="hover:bg-foreground/[0.01] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-foreground">Parent Visibility</td>
                <td className="p-4 sm:p-5 text-foreground/90 bg-primary/[0.02]">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>High visibility:</strong> Watch lessons live from your living room; digital logs.</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 text-muted-text">
                  Low; drop-off format with occasional periodic report cards.
                </td>
              </tr>
              <tr className="hover:bg-foreground/[0.01] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-foreground">Best For</td>
                <td className="p-4 sm:p-5 text-foreground/90 bg-primary/[0.02]">
                  <span className="font-semibold text-primary">Busy families, personalized Tajweed/Hifz, adult beginners, and converts.</span>
                </td>
                <td className="p-4 sm:p-5 text-muted-text font-medium">
                  Young kids needing peer socialization and local community bonding.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Featured Image 1 */}
      <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card not-prose">
        <div className="relative w-full aspect-[16/10] max-h-[520px]">
          <Image
            src="/blog/online-vs-in-person-quran-classes/online-vs-in-person-quran-classes-cover.jpg"
            alt="Two young Muslim children learning Noorani Qaida on a laptop screen with open Quranic Qaida book"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 850px"
            priority
          />
        </div>
        <div className="p-4 bg-secondary/5 border-t border-card-border text-xs sm:text-sm text-center text-muted-text">
          <span>
            Interactive digital learning paired with physical books enables 1-on-1 online tutors to pinpoint letters and teach Makharij with real-time feedback.
          </span>
        </div>
      </div>

      {/* Section 1: How Each Format Delivers Quranic Instruction */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3 flex items-center space-x-3">
          <span>How Each Format Delivers Quranic Instruction</span>
        </h2>

        <p className="text-base sm:text-lg text-muted-text">
          Strip away the setting, and both formats share the exact same spiritual goal: passing on accurate recitation, solid <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">Tajweed rules</Link>, and a deep love for the Quran from teacher to student. The difference lies entirely in how that instruction is delivered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
          {/* Online Delivery Card */}
          <div className="p-6 rounded-3xl glass border border-primary/20 space-y-4 shadow-sm bg-primary/[0.02]">
            <div className="flex items-center space-x-3 text-primary font-bold">
              <Laptop className="h-6 w-6" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">How 1-on-1 Online Quran Classes Work</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              In a modern online class, instruction happens live through a video call using an interactive digital Mushaf shared right on the screen. When a student recites, the teacher highlights the exact letter or word on the screen in real time, points out <strong>Makharij</strong> (articulation points) via webcam, and corrects pronunciation mistakes on the spot.
            </p>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              Most structured platforms also provide a parent portal or digital log where you can review attendance, homework notes, and <Link href="/courses/hifz" className="text-primary hover:underline font-semibold">Hifz memorization</Link> milestones—a level of organization many traditional setups simply do not have.
            </p>
          </div>

          {/* In-Person Delivery Card */}
          <div className="p-6 rounded-3xl glass border border-card-border space-y-4 shadow-sm">
            <div className="flex items-center space-x-3 text-secondary font-bold">
              <Home className="h-6 w-6" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">How Traditional In-Person Classes Operate</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              Whether it is a local mosque hall, a community halaqah, or an after-school madrasah, physical classes carry a distinct atmosphere. Sitting on the carpet alongside peers, hearing the hum of group recitation, and having the teacher physically present builds a classic sense of routine and discipline.
            </p>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              However, because most in-person programs operate as group classrooms, a teacher often divides a 60-minute session among 15 or more students. Your child may only get <strong>4 to 5 minutes of direct, individual recitation time</strong> with the teacher per day, spending the rest of the hour practicing independently.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Flexibility, Accessibility, and Finding the Right Teacher */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Flexibility, Accessibility, and Finding the Right Teacher
        </h2>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary shrink-0" />
            <span>Fitting Quran Study Into Busy Modern Schedules</span>
          </h3>
          <p className="text-base text-muted-text">
            If you are juggling work hours, school pickups, sports practices, or irregular shifts, online classes are far more forgiving. If a child wakes up sick or a work meeting runs late, a quick message allows you to reschedule the session for another day. With an in-person madrasah that runs strictly from 5:00 PM to 7:00 PM across town, missing a class simply means falling behind.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
            <Globe className="h-5 w-5 text-primary shrink-0" />
            <span>Overcoming Geographic Limitations</span>
          </h3>
          <p className="text-base text-muted-text">
            In-person classes only work if you are blessed to have a well-run Islamic center with qualified teachers near your home. Families living in smaller towns or suburbs across the <Link href="/locations/usa" className="text-primary hover:underline font-semibold">USA</Link>, <Link href="/locations/uk" className="text-primary hover:underline font-semibold">UK</Link>, <Link href="/locations/canada" className="text-primary hover:underline font-semibold">Canada</Link>, and <Link href="/locations/australia" className="text-primary hover:underline font-semibold">Australia</Link> often face a tough reality: either there is no local program available, or getting to one requires a 30-to-40-minute drive each way in rush-hour traffic. Online learning removes geography from the equation completely, connecting your home directly to top-tier scholars worldwide.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
            <span>Access to Certified Female Quran Tutors and Home Safety</span>
          </h3>
          <p className="text-base text-muted-text">
            For many families, safety and modesty are top priorities. Finding a qualified, certified female Quran teacher locally for young girls, teen sisters, or adult women can be surprisingly difficult. Online platforms make it effortless to pair female students with experienced, Ijazah-certified female scholars in the privacy of home.
          </p>
          <p className="text-base text-muted-text">
            For parents of young children, online learning also offers unmatched peace of mind. You do not have to drop your child off in an unfamiliar building; they can take their lesson right at the kitchen table or living room desk where you can passively hear every word of the interaction.
          </p>
        </div>
      </section>

      {/* Featured Image 2 */}
      <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card not-prose">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[500px]">
          <Image
            src="/blog/online-vs-in-person-quran-classes/girl-student-quran-lesson-online.jpg"
            alt="Young Muslim girl wearing hijab and headset taking a live online Quran lesson at home with laptop"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 850px"
          />
        </div>
        <div className="p-4 bg-secondary/5 border-t border-card-border text-xs sm:text-sm text-center text-muted-text">
          <span>
            Online learning connects young girls and adult sisters directly with certified female Quran teachers in the comfort and modesty of home.
          </span>
        </div>
      </div>

      {/* Section 3: Quality of Learning, Teacher Credentials, and Student Progress */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Quality of Learning, Teacher Credentials, and Student Progress
        </h2>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">How to Evaluate Qualified Quran Tutors</h3>
          <p className="text-base text-muted-text">
            Regardless of whether you choose online or in-person lessons, a teacher’s qualifications matter immensely. Look for three core credentials before committing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-4">
            <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
              <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                <Award className="h-5 w-5" />
                <span>1. Verified Ijazah</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                A formal certification proving an unbroken chain of recitation (Sanad) connecting back to the Prophet Muhammad (peace be upon him).
              </p>
            </div>

            <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
              <div className="flex items-center space-x-2 text-secondary font-bold text-sm">
                <Globe className="h-5 w-5" />
                <span>2. Fluent English</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                Especially for kids raised in Western countries, converts, and non-Arabic speakers, the teacher must explain complex Tajweed rules clearly in English.
              </p>
            </div>

            <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
              <div className="flex items-center space-x-2 text-emerald-600 font-bold text-sm">
                <Heart className="h-5 w-5" />
                <span>3. Age-Appropriate Style</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                Teaching <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">Noorani Qaida</Link> to an energetic 6-year-old requires different pedagogy than coaching an adult through advanced Tajweed.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">1-on-1 Attention vs. Group Pacing</h3>
          <p className="text-base text-muted-text">
            This is the single biggest factor affecting how fast a student progresses. In a 30-minute 1-on-1 online Quran class, <strong>100% of the teacher’s focus is on one student</strong>. Every subtle mistake in <em>Ghunnah</em> (nasalization), <em>Madd</em> (elongation), or heavy vs. light letters is caught immediately.
          </p>
          <p className="text-base text-muted-text">
            Furthermore, the curriculum moves at the student&apos;s exact pace—fast learners are never held back by the group, and students who need extra review on a difficult Surah never feel embarrassed or rushed.
          </p>
        </div>
      </section>

      {/* Section 4: Which Format Suits Your Age and Learning Stage? */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Which Format Suits Your Age and Learning Stage?
        </h2>

        <p className="text-base sm:text-lg text-muted-text">
          Not every learner needs the same environment. Here is how different age groups and backgrounds typically respond to each setup:
        </p>

        <div className="space-y-4 not-prose">
          {/* Young Children */}
          <div className="p-6 rounded-2xl glass border border-card-border space-y-2 hover:border-primary/30 transition-all">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-foreground flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Young Children (Ages 4–6)</span>
              </h3>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">Foundational</span>
            </div>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              At this stage, attention spans are short. Some children thrive in the lively, social atmosphere of an in-person class, while others get easily distracted by classmates. If going online at this age, short 20-to-30-minute 1-on-1 sessions with an engaging, kid-friendly tutor—and a parent sitting nearby for the first few weeks—work best.
            </p>
          </div>

          {/* School-Age Kids & Teens */}
          <div className="p-6 rounded-2xl glass border border-card-border space-y-2 hover:border-primary/30 transition-all">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-foreground flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-secondary" />
                <span>School-Age Kids &amp; Teens (Ages 7–17)</span>
              </h3>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary/10 text-secondary">School Pacing</span>
            </div>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              As schoolwork and extracurriculars pile up, 1-on-1 online sessions often become a lifesaver. Teens, in particular, appreciate getting focused instruction at home without feeling self-conscious in front of younger kids at the mosque.
            </p>
          </div>

          {/* Adults & Converts */}
          <div className="p-6 rounded-2xl glass border border-card-border space-y-2 hover:border-primary/30 transition-all">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-foreground flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-emerald-600" />
                <span>Adults, Beginners, and Converts</span>
              </h3>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600">Judgment-Free</span>
            </div>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              Walking into a local mosque class as an adult beginner can feel intimidating, especially when local classes are geared toward children. Online 1-on-1 classes provide a judgment-free, private space where adults and converts can ask questions freely, learn at their own pace, and schedule classes early in the morning or late after work.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Cost, Time, and Practical Considerations */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Cost, Time, and Practical Considerations
        </h2>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">Real Cost Breakdown: Tuition and Hidden Expenses</h3>
          <p className="text-base text-muted-text">
            At first glance, local mosque classes and online programs might appear similarly priced, but the total cost tells a different story:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-4">
            <div className="p-6 rounded-2xl glass border border-primary/20 bg-primary/[0.02] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Online Tuition</span>
                <span className="text-xl font-extrabold text-foreground">$30 – $50 / mo</span>
              </div>
              <p className="text-sm text-muted-text leading-relaxed">
                Includes dedicated 1-on-1 private tutoring, interactive digital software, and flexible scheduling. Transparent <Link href="/pricing" className="text-primary hover:underline font-semibold">pricing plans</Link> from $30/month with sibling discounts and <strong>$0 commute cost</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass border border-card-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">In-Person Madrasah</span>
                <span className="text-xl font-extrabold text-foreground">$50 – $150 / mo</span>
              </div>
              <p className="text-sm text-muted-text leading-relaxed">
                Mosque programs often add registration fees, physical workbooks, and uniforms. If hiring a private in-home tutor, rates in the US/UK reach <strong>$30 to $60 per hour</strong>.
              </p>
            </div>
          </div>

          {/* Commute Callout */}
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-foreground flex items-start space-x-3 not-prose">
            <Car className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-sm leading-relaxed">
              <strong className="text-foreground">The Hidden Cost of Commuting:</strong> Driving 25 minutes each way to a mosque four days a week adds up to nearly <strong>15 hours of driving per month</strong>, alongside significant fuel costs and wear on your family’s evening routine.
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">Equipment Needed for Each Setup</h3>
          <p className="text-base text-muted-text">
            In-person classes require very little setup at home—just a physical Mushaf, a notebook, and modest attire. For online classes, your success relies on four simple essentials:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-4">
            <div className="p-4 rounded-2xl glass border border-card-border flex items-start space-x-3">
              <Globe className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm text-muted-text">
                <strong className="text-foreground block">1. Stable Internet:</strong> High-speed connection for uninterrupted live video calling.
              </div>
            </div>
            <div className="p-4 rounded-2xl glass border border-card-border flex items-start space-x-3">
              <Laptop className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm text-muted-text">
                <strong className="text-foreground block">2. Screen with Webcam:</strong> A laptop, tablet, or desktop computer (screens larger than phones are much easier for reading Arabic text).
              </div>
            </div>
            <div className="p-4 rounded-2xl glass border border-card-border flex items-start space-x-3">
              <Headphones className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm text-muted-text">
                <strong className="text-foreground block">3. Headset with Mic:</strong> A simple headset so the teacher can hear subtle letter pronunciations clearly.
              </div>
            </div>
            <div className="p-4 rounded-2xl glass border border-card-border flex items-start space-x-3">
              <Home className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm text-muted-text">
                <strong className="text-foreground block">4. Quiet Study Corner:</strong> A distraction-free corner of the house for the duration of the lesson.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image 3 */}
      <div className="my-8 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card not-prose">
        <div className="relative w-full aspect-[16/10] max-h-[500px]">
          <Image
            src="/blog/online-vs-in-person-quran-classes/boy-learning-quran-online-headset.jpg"
            alt="Young Muslim boy wearing headset attending a 1-on-1 online Quran class on a laptop"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 850px"
          />
        </div>
        <div className="p-4 bg-secondary/5 border-t border-card-border text-xs sm:text-sm text-center text-muted-text">
          <span>
            A quiet space, a laptop, and a microphone headset ensure clear audio so tutors can correct phonetic subtleties in real time.
          </span>
        </div>
      </div>

      {/* Section 6: The Best of Both Worlds: The "Hybrid" Approach */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          The Best of Both Worlds: The &quot;Hybrid&quot; Approach
        </h2>

        <p className="text-base sm:text-lg text-muted-text">
          Many families assume they have to pick strictly between online and in-person learning, but one of the most effective strategies is combining both:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
          <div className="p-6 rounded-3xl glass border border-primary/20 space-y-3 bg-primary/[0.02]">
            <div className="flex items-center space-x-2 text-primary font-bold text-base">
              <Flame className="h-5 w-5" />
              <span>1-on-1 Online Classes (2–4 Days/Week)</span>
            </div>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              Use as your primary engine for Noorani Qaida, Tajweed mastery, and Hifz memorization, where individualized correction and rapid progress matter most.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass border border-secondary/20 space-y-3 bg-secondary/[0.02]">
            <div className="flex items-center space-x-2 text-secondary font-bold text-base">
              <Users className="h-5 w-5" />
              <span>Local Mosque / Weekend School</span>
            </div>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              Use for brotherhood and sisterhood, Islamic social identity, congregational prayers, and community youth events.
            </p>
          </div>
        </div>

        <p className="text-base text-muted-text">
          This hybrid model ensures your child builds lifelong Muslim friendships locally without sacrificing the quality and speed of their actual Quranic recitation.
        </p>
      </section>

      {/* Section 7: Common Pitfalls in Online Learning (And How to Avoid Them) */}
      <section className="space-y-6 not-prose">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Common Pitfalls in Online Learning (And How to Avoid Them)
        </h2>

        <p className="text-base text-muted-text">
          When someone has a poor experience with online Quran learning, it almost always comes down to one of three avoidable mistakes:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl glass border border-red-500/20 bg-red-500/[0.02] space-y-3">
            <div className="flex items-center space-x-2 text-red-500 font-bold text-sm">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <span>Pitfall 1: Group Calls</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              <strong>Mistake:</strong> Joining online group classes. Group video calls combine the worst of both worlds—no physical community, and no individual attention.
            </p>
            <p className="text-xs font-semibold text-primary">
              ✓ Fix: Always choose 1-on-1 live sessions.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass border border-amber-500/20 bg-amber-500/[0.02] space-y-3">
            <div className="flex items-center space-x-2 text-amber-600 font-bold text-sm">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <span>Pitfall 2: Bad Audio</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              <strong>Mistake:</strong> Relying on quiet laptop microphones. Tajweed relies on tiny phonetic nuances that speaker echo can blur.
            </p>
            <p className="text-xs font-semibold text-primary">
              ✓ Fix: Use a simple $15 headset with a dedicated mic.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass border border-blue-500/20 bg-blue-500/[0.02] space-y-3">
            <div className="flex items-center space-x-2 text-blue-500 font-bold text-sm">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <span>Pitfall 3: Casual Timing</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              <strong>Mistake:</strong> Treating flexible scheduling as &quot;optional&quot; scheduling. Irregular lessons slow down retention.
            </p>
            <p className="text-xs font-semibold text-primary">
              ✓ Fix: Lock in fixed recurring days and times on the family calendar.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Making the Right Choice for Your Family */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Making the Right Choice for Your Family
        </h2>

        <p className="text-base sm:text-lg text-muted-text">
          Before making your final decision, sit down and ask yourself four practical questions:
        </p>

        <div className="space-y-3 not-prose">
          <div className="p-4 sm:p-5 rounded-2xl glass border border-card-border flex items-start space-x-3.5">
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
              <strong>1. What is our primary goal right now?</strong> Is it mastering accurate Tajweed, completing Hifz, learning basic Arabic reading, or socializing with local Muslim peers?
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glass border border-card-border flex items-start space-x-3.5">
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
              <strong>2. How does my child learn best?</strong> Does my child thrive in a quiet 1-on-1 setting, or do they need classroom peer energy?
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glass border border-card-border flex items-start space-x-3.5">
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
              <strong>3. Can our schedule handle the commute?</strong> Can our weekly family schedule realistically handle the drive to a local Islamic center 3 to 5 days a week?
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glass border border-card-border flex items-start space-x-3.5">
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
              <strong>4. Do we have access to qualified scholars locally?</strong> Do we have access to a truly qualified, Ijazah-certified teacher within a 15-minute drive?
            </div>
          </div>
        </div>

        <p className="text-base text-muted-text">
          If you have a wonderful, uncrowded local program nearby and plenty of time to drive, in-person classes can be a blessing. However, if you want guaranteed 1-on-1 attention, certified male or female teachers, zero commute stress, and a pace tailored strictly to you or your child, online classes are the stronger path forward.
        </p>
      </section>

      {/* Primary CTA Banner */}
      <section className="my-10 not-prose">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-secondary/15 border border-primary/30 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Try It Live Risk-Free</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight max-w-2xl mx-auto leading-tight">
            Still Unsure? Experience a 1-on-1 Class Yourself
          </h2>

          <p className="text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
            The easiest way to know if online Quran learning works for your household is to see it in action. At <strong>OQTutor</strong>, we pair students of all ages across the <strong>USA, UK, Canada, and Australia</strong> with handpicked, Ijazah-certified male and female scholars for personalized 1-on-1 instruction in <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">Noorani Qaida</Link>, <Link href="/courses/quran-reading" className="text-primary hover:underline font-semibold">Quran Reading with Tajweed</Link>, <Link href="/courses/hifz" className="text-primary hover:underline font-semibold">Hifz-ul-Quran</Link>, and <Link href="/courses/islamic-studies" className="text-primary hover:underline font-semibold">Islamic Studies</Link>.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-free-trial"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Book Your Free 1-on-1 Trial Class Today</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center space-x-2 px-6 py-4 rounded-full glass hover:bg-primary/10 text-foreground text-sm sm:text-base font-semibold border border-card-border transition-all"
            >
              <span>Explore Courses</span>
            </Link>
          </div>
          <p className="text-xs text-muted-text">
            No credit card or upfront commitment required. Meet your tutor, test the interactive classroom, and get a personalized learning plan.
          </p>
        </div>
      </section>

      {/* Section 9: Frequently Asked Questions (FAQs) */}
      <section className="space-y-6 not-prose">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-1.5 bg-primary rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>

        <div className="space-y-4 my-6">
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

      {/* Recommended Learning Paths */}
      <section className="space-y-4 pt-6 border-t border-card-border not-prose">
        <h3 className="font-bold text-base sm:text-lg text-foreground">
          Recommended Learning Paths &amp; Resources
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
            href="/courses/tajweed"
            className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary/40 hover:text-primary transition-all flex items-center justify-between group"
          >
            <span className="font-semibold text-foreground group-hover:text-primary">Quran with Tajweed</span>
            <ArrowRight className="h-4 w-4 text-muted-text group-hover:text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/courses/hifz"
            className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary/40 hover:text-primary transition-all flex items-center justify-between group"
          >
            <span className="font-semibold text-foreground group-hover:text-primary">Online Hifz Memorization</span>
            <ArrowRight className="h-4 w-4 text-muted-text group-hover:text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/courses/female-quran-teacher"
            className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary/40 hover:text-primary transition-all flex items-center justify-between group"
          >
            <span className="font-semibold text-foreground group-hover:text-primary">Female Quran Teachers</span>
            <ArrowRight className="h-4 w-4 text-muted-text group-hover:text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/pricing"
            className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary/40 hover:text-primary transition-all flex items-center justify-between group"
          >
            <span className="font-semibold text-foreground group-hover:text-primary">Transparent Pricing Plans</span>
            <ArrowRight className="h-4 w-4 text-muted-text group-hover:text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/book-free-trial"
            className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary/40 hover:text-primary transition-all flex items-center justify-between group"
          >
            <span className="font-semibold text-foreground group-hover:text-primary">Book Free 1-on-1 Trial</span>
            <ArrowRight className="h-4 w-4 text-muted-text group-hover:text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </article>
  );
}

