'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Check,
  ChevronRight,
  ListChecks,
  Clock,
  Calendar,
  AlertTriangle,
  UserCheck,
  CheckCircle2,
  Video,
  FileText,
  Star,
  Compass,
  ExternalLink
} from 'lucide-react';

export default function ArticleContentKidsUsa() {
  return (
    <article className="prose prose-slate max-w-none space-y-12 text-foreground/90 leading-relaxed font-normal">

      {/* Author & Reviewer Byline Card */}
      <section className="not-prose p-6 rounded-3xl glass border border-card-border bg-card/60 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3.5">
            <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg shrink-0 overflow-hidden">
              <span>MI</span>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-primary uppercase tracking-widest block">Written By</span>
              <p className="text-sm font-extrabold text-foreground">
                Qari Muhammad Imran
              </p>
              <p className="text-xs text-muted-text leading-relaxed">
                Senior Quran Instructor &amp; Curriculum Lead at OQTutor. [OWNER INPUT NEEDED: author credentials, formal Islamic education background, and photo]
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 border-t md:border-t-0 md:border-l border-card-border/60 pt-3 md:pt-0 md:pl-4">
            <div className="h-12 w-12 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary font-bold text-lg shrink-0">
              <Award className="h-6 w-6 text-secondary" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-secondary uppercase tracking-widest block">Reviewed By</span>
              <p className="text-sm font-extrabold text-foreground">
                [OWNER INPUT NEEDED: reviewer name, credentials]
              </p>
              <p className="text-xs text-muted-text leading-relaxed">
                Educational Reviewer &amp; Child Tajweed Specialist. [OWNER INPUT NEEDED: brief bio and verified Islamic credentials]
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-card-border/60 text-xs text-muted-text font-medium">
          <div className="flex items-center space-x-2">
            <Calendar className="h-3.5 w-3.5 text-primary" />
            <span>Published: July 26, 2026 &bull; Last updated: [OWNER INPUT NEEDED: date, e.g. October 30, 2026]</span>
          </div>
          <span className="text-[11px] text-muted-text/80">Evaluation based on transparent US parent criteria</span>
        </div>
      </section>

      {/* Introduction */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg leading-relaxed text-foreground font-medium">
          For Muslim parents in the United States, providing children with a solid Islamic foundation often comes with real logistical hurdles. Between demanding public school hours, extracurricular sports, daily homework, and heavy rush-hour traffic, driving to a local mosque multiple evenings a week is not always possible. For other families living in suburbs or smaller towns, finding an experienced, child-friendly Quran teacher nearby is an even greater challenge. Online Quran classes for kids in the USA bridge this gap by delivering live, structured one-on-one instruction directly into your home.
        </p>
        <p className="text-base text-muted-text leading-relaxed">
          Through remote learning, children can start with foundational <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida</Link>, develop fluent <Link href="/courses/quran-reading" className="text-primary font-semibold hover:underline">Quran reading</Link>, master precise <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed rules</Link>, and pursue Quran memorization (<Link href="/courses/hifz" className="text-primary font-semibold hover:underline">Hifz</Link>) under the guidance of qualified male and female tutors. With flexible schedules accommodating Eastern, Central (with high enrollment in <Link href="/locations/usa/illinois" className="text-primary font-semibold hover:underline">Illinois</Link> and <Link href="/locations/usa/texas" className="text-primary font-semibold hover:underline">Texas</Link>), Mountain, and Pacific time zones, parents gain direct visibility into their child&apos;s daily lessons within a safe, comfortable home environment.
        </p>
      </section>

      {/* Prominent Callout Card: Quran for Kids Course */}
      <div className="not-prose p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-primary/15 via-card to-secondary/15 border-2 border-primary/30 shadow-xl space-y-4">
        <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider">
          <Sparkles className="h-4 w-4" />
          <span>Recommended Learning Pathway</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-extrabold text-foreground">
              Start Here: Quran for Kids Course
            </h3>
            <p className="text-xs sm:text-sm text-muted-text max-w-xl leading-relaxed">
              Tailored specifically for youth in the US, our structured <Link href="/courses/quran-for-kids" className="text-primary font-bold hover:underline">Quran for Kids course</Link> guides children step-by-step from beginner Arabic letters to confident, melodious recitation with live 1-on-1 support.
            </p>
          </div>
          <Link
            href="/courses/quran-for-kids"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all shrink-0"
          >
            <span>Explore Kids Course</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Table of Contents: Every H2 Section */}
      <nav aria-label="Table of contents" className="not-prose p-6 sm:p-8 rounded-3xl bg-card/60 glass border border-card-border shadow-sm space-y-4 my-8">
        <div className="flex items-center space-x-3 text-foreground font-bold text-lg border-b border-card-border pb-3">
          <ListChecks className="h-5 w-5 text-primary" />
          <span>Table of Contents: In This Guide</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm">
          <a href="#how-options-compare" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>1. How the Options Compare (2026 Evaluation)</span>
          </a>
          <a href="#what-is-online-quran" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>2. What Are Online Quran Classes for Kids?</span>
          </a>
          <a href="#book-free-trial" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>3. Book a 3-Day Free Trial (US Time Zones)</span>
          </a>
          <a href="#tutor-vetting-safety" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>4. How We Vet Our Teachers &amp; Safety Standards</span>
          </a>
          <a href="#class-experience-timeline" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>5. What Happens in a 30-Minute Class (Timeline)</span>
          </a>
          <a href="#trial-journey" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>6. What Your 3-Day Free Trial Looks Like</span>
          </a>
          <a href="#progress-and-timeline" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>7. Real Timeline &amp; Sample Monthly Progress Report</span>
          </a>
          <a href="#curriculum-by-age" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>8. What Should Children Learn at Different Ages?</span>
          </a>
          <a href="#courses-for-kids" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>9. Which Quran Courses Are Best for Kids?</span>
          </a>
          <a href="#toddlers-preschool" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>10. Classes for Toddlers &amp; Ages 3 to 5</span>
          </a>
          <a href="#near-me-vs-online" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>11. Quran Classes Near Me vs. Online</span>
          </a>
          <a href="#non-arabic-homes" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>12. Learning When You Don&apos;t Speak Arabic at Home</span>
          </a>
          <a href="#shy-adhd-adaptation" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>13. Shy or Easily Distracted Children (ADHD Adaptations)</span>
          </a>
          <a href="#siblings-and-family" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>14. Siblings: Shared vs. Separate &amp; 15% Discount</span>
          </a>
          <a href="#homeschool-families" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>15. Homeschool Families: Daytime Scheduling</span>
          </a>
          <a href="#apps-vs-live-teacher" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>16. Quran Apps vs. a Live Teacher for Kids</span>
          </a>
          <a href="#ramadan-and-summer" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>17. Ramadan &amp; Summer Break: Keeping Consistency</span>
          </a>
          <a href="#parent-checklist" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>18. What to Look for: Parent Checklist Before Enrolling</span>
          </a>
          <a href="#class-duration" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>19. How Long Should a Child&apos;s Quran Class Be?</span>
          </a>
          <a href="#home-support-habits" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>20. How Parents Can Support Learning at Home</span>
          </a>
          <a href="#us-pricing-plans" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>21. US Tuition &amp; Monthly Pricing ($30–$50/mo)</span>
          </a>
          <a href="#red-flags" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>22. Red Flags When Choosing an Online Quran Program</span>
          </a>
          <a href="#teacher-profiles" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>23. Meet Our Dedicated Quran Teachers</span>
          </a>
          <a href="#parent-reviews" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>24. What Parents in the USA Say About OQTutor</span>
          </a>
          <a href="#faq" className="text-muted-text hover:text-primary transition-colors flex items-center space-x-1.5 py-1">
            <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>25. Frequently Asked Questions (24 FAQs)</span>
          </a>
        </div>
      </nav>

      {/* SECTION 1: How the Options Compare */}
      <section id="how-options-compare" className="space-y-6 scroll-mt-20">
        <div className="border-b border-card-border pb-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3 py-1 inline-block mb-2">
            2026 Comprehensive Evaluation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            How the Options Compare: Top Online Quran Programs for Kids in the USA
          </h2>
          <p className="text-base text-muted-text mt-2 leading-relaxed">
            To help American Muslim parents make an informed decision for their children, we evaluated the primary Quran learning formats available to US families.
          </p>
        </div>

        {/* Editorial Disclosure Box */}
        <div className="not-prose p-5 rounded-2xl glass border border-primary/20 bg-primary/5 text-xs text-muted-text space-y-1.5">
          <div className="flex items-center space-x-1.5 text-primary font-bold">
            <Compass className="h-4 w-4" />
            <span>How We Compared &amp; Editorial Disclosure</span>
          </div>
          <p className="leading-relaxed">
            <em>OQTutor publishes this guide. We&apos;ve tried to be fair; see how we compared below.</em> Comparison criteria include instructional format (1-on-1 vs. group), tutor vetting protocols, US time-zone flexibility, trial offerings, and transparent pricing in USD. Competitor prices checked on [OWNER INPUT NEEDED: date, e.g. October 2026], from each provider&apos;s public website (<a href="https://studioarabiya.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Studio Arabiya</a>, <a href="https://qutor.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Qutor</a>, <a href="https://quranayat.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Quran Ayat</a>).
          </p>
        </div>

        {/* Single Merged Master Comparison Table (Scrollable horizontally on mobile) */}
        <div className="not-prose overflow-x-auto rounded-3xl border border-card-border shadow-lg">
          <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[700px]">
            <caption className="sr-only">Comprehensive Comparison of Quran Learning Options for Kids in the USA</caption>
            <thead>
              <tr className="border-b border-card-border bg-card">
                <th scope="col" className="py-4 px-4 font-bold text-xs uppercase tracking-wider text-muted-text w-1/5">
                  Comparison Factor
                </th>
                <th scope="col" className="py-4 px-4 font-bold text-xs sm:text-sm uppercase tracking-wider bg-primary/10 text-primary border-x border-primary/20 w-1/4">
                  OQTutor Online Academy
                </th>
                <th scope="col" className="py-4 px-4 font-bold text-xs uppercase tracking-wider text-muted-text w-1/6">
                  Studio Arabiya
                </th>
                <th scope="col" className="py-4 px-4 font-bold text-xs uppercase tracking-wider text-muted-text w-1/6">
                  Qutor Marketplace
                </th>
                <th scope="col" className="py-4 px-4 font-bold text-xs uppercase tracking-wider text-muted-text w-1/6">
                  Local Weekend Mosque
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border/60 text-muted-text">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-foreground">Class Format</td>
                <td className="py-3.5 px-4 font-medium text-foreground bg-primary/5 border-x border-primary/20">
                  1-on-1 private live classes (30–40 min on Zoom/Meet)
                </td>
                <td className="py-3.5 px-4">Group cohorts or private semester tracks</td>
                <td className="py-3.5 px-4">1-on-1 self-booked via platform classroom</td>
                <td className="py-3.5 px-4">In-person group (15–25 students per teacher)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-foreground">Speaking &amp; Reading Time</td>
                <td className="py-3.5 px-4 font-medium text-foreground bg-primary/5 border-x border-primary/20">
                  Full 30–40 min of dedicated reading &amp; correction
                </td>
                <td className="py-3.5 px-4">Divided among students in group cohorts</td>
                <td className="py-3.5 px-4">Full session with selected freelance tutor</td>
                <td className="py-3.5 px-4">Often only a few minutes of individual reading per class</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-foreground">Tutor Vetting</td>
                <td className="py-3.5 px-4 font-medium text-foreground bg-primary/5 border-x border-primary/20">
                  Identity vetted, Ijazah verified [OWNER INPUT NEEDED: confirm background checks]
                </td>
                <td className="py-3.5 px-4">Al-Azhar trained Arabic &amp; Quran scholars</td>
                <td className="py-3.5 px-4">Freelancer directory; self-vetted by parent</td>
                <td className="py-3.5 px-4">Community volunteers &amp; local Imams</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-foreground">Gender Choice</td>
                <td className="py-3.5 px-4 font-medium text-foreground bg-primary/5 border-x border-primary/20">
                  Male or female tutors available on request [OWNER INPUT NEEDED: confirm]
                </td>
                <td className="py-3.5 px-4">Assigned based on course track availability</td>
                <td className="py-3.5 px-4">Parents search directory for tutor gender</td>
                <td className="py-3.5 px-4">Dependent on local volunteer availability</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-foreground">US Time Zones</td>
                <td className="py-3.5 px-4 font-medium text-foreground bg-primary/5 border-x border-primary/20">
                  Customizable 7 days/wk across EST, CST, MST, PST
                </td>
                <td className="py-3.5 px-4">Scheduled semester class slots</td>
                <td className="py-3.5 px-4">Coordinated directly with individual tutors</td>
                <td className="py-3.5 px-4">Fixed weekend mornings (Sat or Sun)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-foreground">Free Trial</td>
                <td className="py-3.5 px-4 font-medium text-emerald-600 bg-primary/5 border-x border-primary/20">
                  3-day free trial, no credit card required
                </td>
                <td className="py-3.5 px-4">1 short evaluation demo</td>
                <td className="py-3.5 px-4">30 free classroom minutes</td>
                <td className="py-3.5 px-4">None; full semester tuition upfront</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-foreground">Monthly Tuition</td>
                <td className="py-3.5 px-4 font-bold text-foreground bg-primary/5 border-x border-primary/20">
                  $30, $40, $50 / mo (No contracts, pause anytime)
                </td>
                <td className="py-3.5 px-4">Approx. $85 – $160+/mo (Semester billing)</td>
                <td className="py-3.5 px-4">Approx. $9–$15 platform fee + $8–$25/hr</td>
                <td className="py-3.5 px-4">Approx. $40 – $80/mo per child + commute</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-foreground">Noorani Qaida Pace</td>
                <td className="py-3.5 px-4 font-medium text-foreground bg-primary/5 border-x border-primary/20">
                  Typically 3 to 6 months with 3 to 4 classes per week
                </td>
                <td className="py-3.5 px-4">Semester syllabus pace</td>
                <td className="py-3.5 px-4">Varies depending on tutor and weekly hours</td>
                <td className="py-3.5 px-4">Often 1 to 2+ years due to limited class time</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Short Nuanced Paragraph: Online vs Weekend Mosque */}
        <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
          <h3 className="text-base font-bold text-foreground">
            The Role of Weekend Mosque Classes vs. Online Tutoring
          </h3>
          <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
            Weekend mosque schools remain essential for Muslim children in the West to build friendships with Muslim peers, pray in congregation, and feel emotionally rooted in the house of Allah. However, because volunteer teachers must balance 15 to 25 students in a single classroom, each child often receives only a few minutes of direct reading per class. Many American families find the ideal synergy by keeping their children in live 1-on-1 online classes for dedicated Tajweed and Qaida phonetics, while attending the local masjid for weekend community life and Jummah prayer.
          </p>
        </div>

        {/* Provider Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose pt-2">
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h4 className="text-sm font-bold text-foreground">OQTutor (Our Program)</h4>
            <p className="text-xs text-muted-text leading-relaxed">
              Designed specifically for North American Muslim families seeking structured 1-on-1 Quran, Tajweed, and Qaida lessons. Flexible plans ($30, $40, $50/mo), certified male and female tutors, and a 3-day free trial with no credit card required.
            </p>
          </div>
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h4 className="text-sm font-bold text-foreground">Studio Arabiya</h4>
            <p className="text-xs text-muted-text leading-relaxed">
              Established portal with structured Classical Arabic and Quran curricula taught by Egyptian teachers. Strong for formal language tracks, though higher tuition ($85–$160+/mo) and semester commitments may not suit every family.
            </p>
          </div>
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h4 className="text-sm font-bold text-foreground">Qutor Marketplace</h4>
            <p className="text-xs text-muted-text leading-relaxed">
              Open freelance marketplace connecting parents with independent tutors worldwide. Offers flexibility in tutor selection, though parents are responsible for vetting credentials and managing dual platform fees.
            </p>
          </div>
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h4 className="text-sm font-bold text-foreground">Quran Ayat</h4>
            <p className="text-xs text-muted-text leading-relaxed">
              Remote academy offering Egyptian Quran and Islamic Studies instructors. Authentic Arabic pronunciation, with plans generally requiring multi-month packaging for discounted rates.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: What Are Online Quran Classes for Kids? */}
      <section id="what-is-online-quran" className="space-y-4 scroll-mt-20">
        <div className="not-prose p-6 sm:p-8 rounded-3xl bg-primary/5 border border-primary/20 space-y-3 shadow-sm">
          <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider">
            <Sparkles className="h-4 w-4" />
            <span>Direct Answer for Parents</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
            What Are Online Quran Classes for Kids?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-foreground font-medium">
            Online Quran classes for kids are live, interactive lessons connecting children with qualified Quran tutors through private 1-on-1 video sessions on Zoom or Google Meet. Classes provide individualized instruction covering Arabic alphabet recognition (Noorani Qaida), fluent recitation, Tajweed pronunciation rules, Surah memorization (Hifz), and foundational Islamic studies—scheduled around US school calendars and family routines.
          </p>
        </div>
      </section>

      {/* SECTION 3: Book a 3-Day Free Trial (US Time Zones) */}
      <section id="book-free-trial" className="scroll-mt-20 not-prose">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-2 border-primary/30 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-card-border pb-4">
            <div className="space-y-1">
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span>US Parent Priority Scheduling</span>
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground tracking-tight">
                Book a 3-Day Free Trial (US Time Zones: EST, CST, MST, PST)
              </h2>
            </div>
            <div className="flex items-center space-x-1.5 text-xs font-semibold text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full shrink-0">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>100% Free &bull; No Credit Card Required</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-muted-text leading-relaxed">
            Give your child the gift of fluent Quran recitation with private, live 1-on-1 tutoring designed specifically for busy American schedules. Choose your preferred day, time slot, and teacher gender—no upfront payment or credit card needed.
          </p>

          {/* Time Zone Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl glass border border-card-border text-center space-y-1">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">Eastern Time</span>
              <p className="text-xs font-semibold text-foreground">EST (NY / FL / GA / NC)</p>
              <p className="text-[10px] text-muted-text">3:00 PM – 9:00 PM</p>
            </div>
            <div className="p-3.5 rounded-2xl glass border border-card-border text-center space-y-1">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">Central Time</span>
              <p className="text-xs font-semibold text-foreground">CST (TX / IL / MN / MO)</p>
              <p className="text-[10px] text-muted-text">3:30 PM – 9:30 PM</p>
            </div>
            <div className="p-3.5 rounded-2xl glass border border-card-border text-center space-y-1">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">Mountain Time</span>
              <p className="text-xs font-semibold text-foreground">MST (CO / AZ / UT / NM)</p>
              <p className="text-[10px] text-muted-text">3:00 PM – 8:30 PM</p>
            </div>
            <div className="p-3.5 rounded-2xl glass border border-card-border text-center space-y-1">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">Pacific Time</span>
              <p className="text-xs font-semibold text-foreground">PST (CA / WA / OR / NV)</p>
              <p className="text-[10px] text-muted-text">3:00 PM – 8:00 PM</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <Link
              href="/book-free-trial"
              className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-xl transition-all"
            >
              <span>Book Your 3-Day Free Trial (Select Time)</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#us-pricing-plans"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-full glass hover:bg-primary/10 text-foreground text-xs sm:text-sm font-semibold border border-card-border transition-all"
            >
              <span>See US Pricing ($30–$50/mo)</span>
            </a>
          </div>

          <p className="text-[11px] text-center text-muted-text">
            Serving Muslim families across <Link href="/locations/usa/california" className="text-primary hover:underline">California</Link>, <Link href="/locations/usa/texas" className="text-primary hover:underline">Texas</Link>, <Link href="/locations/usa/illinois" className="text-primary hover:underline">Illinois</Link>, <Link href="/locations/usa/new-york" className="text-primary hover:underline">New York</Link>, <Link href="/locations/usa/michigan" className="text-primary hover:underline">Michigan</Link>, <Link href="/locations/usa/new-jersey" className="text-primary hover:underline">New Jersey</Link>, and nationwide. [OWNER INPUT NEEDED: verified rating + source / verified family count]
          </p>
        </div>
      </section>

      {/* SECTION 4: Teacher Vetting & Safety */}
      <section id="tutor-vetting-safety" className="space-y-6 scroll-mt-20">
        <div className="border-b border-card-border pb-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3 py-1 inline-block mb-2">
            Trust &amp; Child Protection
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            How We Vet Our Teachers &amp; Maintain Child Safety Standards
          </h2>
          <p className="text-base text-muted-text mt-2">
            Entrusting someone with your child&apos;s religious education requires complete trust. We follow structured child-safety practices including open-door parental observation, direct administrative oversight, and thorough instructor screening. [OWNER INPUT NEEDED: confirm practices].
          </p>
        </div>

        {/* 4-Step Vetting Process */}
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <span className="h-7 w-7 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">1</span>
            <h3 className="text-sm font-bold text-foreground">Identity &amp; Background Screening</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Comprehensive government ID validation and criminal screening before onboarding. [OWNER INPUT NEEDED: confirm vetting steps].
            </p>
          </div>
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <span className="h-7 w-7 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">2</span>
            <h3 className="text-sm font-bold text-foreground">Ijazah &amp; Tajweed Examination</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Every applicant undergoes a rigorous oral recitation and Tajweed test conducted by senior Qaris.
            </p>
          </div>
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <span className="h-7 w-7 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">3</span>
            <h3 className="text-sm font-bold text-foreground">English Fluency &amp; Child Pedagogy</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Instructors are screened for clear English communication and patient, encouraging child-engagement methods.
            </p>
          </div>
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <span className="h-7 w-7 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">4</span>
            <h3 className="text-sm font-bold text-foreground">Supervised Lessons &amp; Feedback</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Initial sessions are monitored by academic supervisors, with continuous parent feedback reviews.
            </p>
          </div>
        </div>

        {/* Male & Female Instructors Note */}
        <div className="p-4 rounded-2xl glass border border-card-border text-xs text-muted-text flex items-center space-x-3">
          <UserCheck className="h-5 w-5 text-secondary shrink-0" />
          <span>
            Parents can request a certified male or female tutor for their children based on family preference and comfort. Explore our guide on <Link href="/blog/choosing-male-female-quran-teacher" className="text-primary font-semibold hover:underline">choosing between a male or female Quran teacher</Link>. [OWNER INPUT NEEDED: confirm female tutor availability guarantee].
          </span>
        </div>
      </section>

      {/* SECTION 5: What Happens in a 30-Minute Class (Timeline) */}
      <section id="class-experience-timeline" className="space-y-6 scroll-mt-20">
        <div className="border-b border-card-border pb-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3 py-1 inline-block mb-2">
            Inside the Classroom
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            What Happens in a 30-Minute Class: Minute-by-Minute Breakdown
          </h2>
          <p className="text-base text-muted-text mt-2">
            Every minute of a 1-on-1 session is structured to maximize focus and enthusiasm without overwhelming young attention spans. [OWNER INPUT NEEDED: confirm real lesson structure].
          </p>
        </div>

        <div className="not-prose space-y-3">
          <div className="p-4 sm:p-5 rounded-2xl glass border border-card-border flex items-start space-x-4">
            <div className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary font-bold text-xs shrink-0 mt-0.5">
              0:00 – 0:05
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-foreground">Warm Greeting, Bismillah &amp; Daily Dua</h3>
              <p className="text-xs text-muted-text leading-relaxed">
                The tutor welcomes the child warmly, recites Bismillah and opening Duas, and reviews the child&apos;s day to build comfort and positive rapport.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glass border border-card-border flex items-start space-x-4">
            <div className="px-2.5 py-1 rounded-lg bg-secondary/10 text-secondary font-bold text-xs shrink-0 mt-0.5">
              0:05 – 0:15
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-foreground">Previous Lesson Revision (Muraja&apos;ah / Sabqi)</h3>
              <p className="text-xs text-muted-text leading-relaxed">
                The child recites yesterday&apos;s Qaida exercise or assigned Surah. The tutor listens carefully and corrects any subtle Makharij slips before moving forward.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glass border border-card-border flex items-start space-x-4">
            <div className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 font-bold text-xs shrink-0 mt-0.5">
              0:15 – 0:25
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-foreground">New Lesson Instruction (Sabaq)</h3>
              <p className="text-xs text-muted-text leading-relaxed">
                The tutor introduces new Arabic letters, joining rules, or Quranic verses via digital screen sharing. The child reads aloud with immediate phonetic guidance.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glass border border-card-border flex items-start space-x-4">
            <div className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 font-bold text-xs shrink-0 mt-0.5">
              0:25 – 0:30
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-foreground">Positive Reinforcement, Stickers &amp; Homework Note</h3>
              <p className="text-xs text-muted-text leading-relaxed">
                The session concludes with praise, digital reward badges, and a brief 5-minute home review assignment noted for parents.
              </p>
            </div>
          </div>
        </div>

        {/* Demo Video Slot Placeholder */}
        <div className="not-prose p-6 rounded-3xl glass border border-card-border bg-card/40 text-center space-y-3">
          <div className="h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
            <Video className="h-6 w-6" />
          </div>
          <h4 className="text-base font-bold text-foreground">Watch a 2-Minute Sample Online Class</h4>
          <p className="text-xs text-muted-text max-w-md mx-auto">
            [OWNER INPUT NEEDED: 2-3 minute demo classroom video link showing live teacher-student interaction on Zoom]
          </p>
        </div>
      </section>

      {/* SECTION 6: What Your 3-Day Free Trial Looks Like */}
      <section id="trial-journey" className="space-y-6 scroll-mt-20">
        <div className="border-b border-card-border pb-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3 py-1 inline-block mb-2">
            Zero-Risk Evaluation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            What Your 3-Day Free Trial Looks Like
          </h2>
          <p className="text-base text-muted-text mt-2">
            We offer a full 3-day free trial so parents and children can experience our teaching style firsthand before making any financial commitment. [OWNER INPUT NEEDED: confirm trial flow].
          </p>
        </div>

        <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider block">Day 1: Assessment</span>
            <h3 className="text-sm font-bold text-foreground">Friendly Placement &amp; Rapport</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Your tutor assesses your child&apos;s current Arabic familiarity, identifies letter strengths, and establishes a warm, engaging rapport.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider block">Day 2: Full Lesson</span>
            <h3 className="text-sm font-bold text-foreground">Interactive Recitation Practice</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              A complete 30-minute private lesson using digital Qaida or Quran slides, demonstrating how our tutors guide pronunciation in real time.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider block">Day 3: Consultation</span>
            <h3 className="text-sm font-bold text-foreground">Plan Review &amp; Next Steps</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Review your child&apos;s tailored curriculum roadmap with the tutor. You decide whether to enroll; no credit card was ever entered.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: Progress Reports & Student Timeline Data */}
      <section id="progress-and-timeline" className="space-y-6 scroll-mt-20">
        <div className="border-b border-card-border pb-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3 py-1 inline-block mb-2">
            Measured Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Real Timeline &amp; Sample Monthly Progress Report
          </h2>
          <p className="text-base text-muted-text mt-2">
            Tracking your child&apos;s progress shouldn&apos;t be guesswork. We deliver structured monthly milestone assessments to your inbox.
          </p>
        </div>

        {/* Real Timeline Data Block */}
        <div className="not-prose p-6 rounded-3xl glass border border-card-border space-y-3">
          <h3 className="text-base font-bold text-foreground flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>Average Completion Timeline</span>
          </h3>
          <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
            With 3 to 4 one-on-one sessions per week (30 to 40 minutes each), children typically complete Noorani Qaida within <strong>3 to 6 months</strong> before transitioning smoothly to fluent Quran reading. [OWNER INPUT NEEDED: actual average time to complete Noorani Qaida from student data].
          </p>
          <p className="text-xs text-muted-text">
            For deeper details on realistic progression speeds, see our parent guide on <Link href="/blog/how-long-does-it-take-for-a-child-to-complete-the-quran-online" className="text-primary font-semibold hover:underline">how long it takes for a child to complete the Quran online</Link>.
          </p>
        </div>

        {/* Sample Monthly Progress Report Block */}
        <div className="not-prose p-6 rounded-3xl glass border border-card-border bg-card/60 space-y-4">
          <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider">
            <FileText className="h-4 w-4" />
            <span>Transparency for Parents</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-foreground">
            Sample Monthly Progress Report
          </h3>
          <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
            At the end of every calendar month, parents receive a comprehensive written assessment outlining:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-text">
            <li className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Lessons &amp; exercises completed</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Tajweed accuracy &amp; letter Makharij scores</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Attendance and punctuality record</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Personalized teacher notes &amp; home practice focus</span>
            </li>
          </ul>
          <div className="p-4 rounded-2xl border border-dashed border-card-border text-center text-xs text-muted-text">
            [OWNER INPUT NEEDED: sample progress report PDF or screenshot download link]
          </div>
        </div>
      </section>

      {/* SECTION 8: What Should Children Learn at Different Ages? */}
      <section id="curriculum-by-age" className="space-y-6 scroll-mt-20">
        <div className="border-b border-card-border pb-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3 py-1 inline-block mb-2">
            Age-Appropriate Learning
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            What Should Children Learn at Different Ages?
          </h2>
          <p className="text-base text-muted-text mt-2">
            A child&apos;s cognitive development, attention span, and language skills evolve rapidly between preschool and high school. Structuring milestones by age group ensures steady enthusiasm and prevents burnout:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
          <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm">
              <BookOpen className="h-5 w-5" />
              <span>Ages 4–6: Build the Quran Foundation</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Young learners thrive on interactive visual aids, vocal imitation, and gentle praise. Lessons focus on recognizing Arabic alphabet shapes, basic letter sounds, and introductory <Link href="/courses/noorani-qaida" className="text-primary font-medium hover:underline">Noorani Qaida</Link> exercises in short 30-minute sessions.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
            <div className="flex items-center space-x-2 text-secondary font-bold text-sm">
              <CheckCircle2 className="h-5 w-5" />
              <span>Ages 7–9: Build Reading Fluency</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Children in early elementary school connect letters into words and transition from Qaida booklets to reading directly from the Mushaf. Instruction emphasizes vowel marks (Harakat, Sukoon, Tanween) and consistent daily reading routines.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
            <div className="flex items-center space-x-2 text-emerald-600 font-bold text-sm">
              <Award className="h-5 w-5" />
              <span>Ages 10–12: Strengthen Tajweed Rules</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              At this stage, students possess the analytical focus required for formal <Link href="/courses/tajweed" className="text-primary font-medium hover:underline">Tajweed rules</Link> (Noon Sakinah, Meem Sakinah, Qalqalah, and Madd). They refine articulation points and memorize selected Surahs with precision.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
            <div className="flex items-center space-x-2 text-indigo-600 font-bold text-sm">
              <Users className="h-5 w-5" />
              <span>Ages 13–17: Advanced Recitation &amp; Hifz</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Teens benefit from advanced Tajweed mastery, structured <Link href="/courses/hifz" className="text-primary font-medium hover:underline">Quran memorization (Hifz)</Link>, and introductory Quran translation. Classes foster self-directed recitation habits and a deep spiritual connection.
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-text italic">
          Wondering if your young child is ready? Read our parent checklist: <Link href="/blog/how-do-you-know-your-child-is-ready-to-start-learning-the-quran" className="text-primary font-semibold hover:underline">How do you know your child is ready to start learning the Quran?</Link>
        </p>
      </section>

      {/* SECTION 9: Which Quran Courses Are Best for Kids? */}
      <section id="courses-for-kids" className="space-y-6 scroll-mt-20">
        <div className="border-b border-card-border pb-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3 py-1 inline-block mb-2">
            Structured Pathways
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Which Quran Courses Are Best for Kids?
          </h2>
          <p className="text-base text-muted-text mt-2">
            A sequential curriculum takes children smoothly from zero Arabic knowledge to confident recitation:
          </p>
        </div>

        <div className="space-y-4 not-prose">
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">
              <Link href="/courses/noorani-qaida" className="text-primary hover:underline">
                1. Noorani Qaida for Beginners
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              The essential starting point for children learning the Arabic alphabet from scratch. Students master letter recognition, articulation points, letter connections, and basic vowel marks.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">
              <Link href="/courses/quran-reading" className="text-primary hover:underline">
                2. Quran Reading (Nazra)
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Designed for children who have completed Noorani Qaida. Students navigate the Holy Quran smoothly, building word recognition, sentence rhythm, and reading stamina.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">
              <Link href="/courses/tajweed" className="text-primary hover:underline">
                3. Quran with Tajweed
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Focuses on authentic pronunciation rules as taught in traditional recitation. Students learn practical application of Ghunnah, Ikhfa, Idgham, Iqlab, and stop signs (Waqf) to recite with beauty and precision.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">
              <Link href="/courses/hifz" className="text-primary hover:underline">
                4. Hifz-ul-Quran (Quran Memorization)
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              A structured memorization program with systematic daily targets, new lesson submission (Sabaq), and rigorous long-term revision (Muraja&apos;ah) to ensure retention.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">
              <Link href="/courses/islamic-studies" className="text-primary hover:underline">
                5. Islamic Studies for Kids
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Supplements Quran reading with essential knowledge of Salah, daily Duas, Islamic manners (Adab), Seerah of Prophet Muhammad (PBUH), and basic Islamic beliefs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Mid-Page Image (Non-duplicate) */}
      <div className="not-prose glass p-3 sm:p-4 rounded-3xl border border-card-border overflow-hidden shadow-lg">
        <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden bg-foreground/5">
          <Image
            src="/blog-kids-usa-2.png"
            alt="Young Muslim student learning Holy Quran online at a desk with headphones"
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <p className="text-xs text-center text-muted-text mt-3 font-medium">
          Focused 1-on-1 online Quran sessions allow children to learn at their own pace without classroom distractions.
        </p>
      </div>

      {/* SECTION 10: Online Quran Classes for Toddlers and Ages 3 to 5 */}
      <section id="toddlers-preschool" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Online Quran Classes for Toddlers and Ages 3 to 5
        </h2>
        <p className="text-base text-muted-text leading-relaxed">
          For children ages 3 to 5, Quran learning is not about rigid memorization or formal grammar—it is about nurturing curiosity, joy, and emotional warmth around Allah&apos;s Book. Toddlers and preschoolers learn through auditory repetition, interactive games, colorful digital flashcards, and joyful vocal imitation of Arabic letter sounds.
        </p>
        <p className="text-base text-muted-text leading-relaxed">
          At OQTutor, lessons for toddlers are kept gentle and bite-sized (typically 20 to 30 minutes) to respect early attention spans. Our patient instructors use playful rhyme, praise, digital reward stickers, and warm smiles to make Arabic phonetics feel like playtime rather than classroom pressure. Parents are encouraged to sit alongside their little ones, singing letter sounds together and celebrating every tiny milestone. Starting early helps toddlers absorb native Arabic Makharij (points of articulation) naturally before tongue patterns become fixed, establishing an instinctive love for the Quran that lasts a lifetime.
        </p>
      </section>

      {/* SECTION 11: Quran Classes Near Me vs. Online */}
      <section id="near-me-vs-online" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Quran Classes Near Me vs. Online: Making the Right Choice
        </h2>
        <p className="text-base text-muted-text leading-relaxed">
          When American Muslim parents search for &quot;Quran classes near me,&quot; they often face limited local options. In many cities and suburbs across <Link href="/locations/usa/california" className="text-primary font-semibold hover:underline">California</Link>, <Link href="/locations/usa/texas" className="text-primary font-semibold hover:underline">Texas</Link>, <Link href="/locations/usa/new-york" className="text-primary font-semibold hover:underline">New York</Link>, or the Midwest, the nearest mosque or Islamic center is a 30-to-45-minute drive through rush-hour traffic.
        </p>
        <p className="text-base text-muted-text leading-relaxed">
          Local weekend schools offer invaluable in-person socialization and community connection, but classroom sizes of 15 to 25 students mean each child often receives only a few minutes of individual reading practice per class. In contrast, 1-on-1 online Quran classes bring certified, Ijazah-bearing teachers straight into your living room on Zoom or Google Meet. There is zero commute time, zero traffic stress, and your child receives 100% of the teacher&apos;s dedicated attention for every minute of class. Many American families find the ideal balance by combining both: enrolling in live 1-on-1 online classes during the week for rapid Tajweed fluency, while attending the local masjid on weekends for youth activities and Jummah prayer.
        </p>
      </section>

      {/* SECTION 12: Non-Arabic Speaking Homes */}
      <section id="non-arabic-homes" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Learning Quran When Your Child Doesn&apos;t Speak Arabic at Home
        </h2>
        <p className="text-base text-muted-text leading-relaxed">
          The vast majority of Muslim families in the United States speak English, Urdu, Somali, Bengali, Turkish, or other languages at home rather than Arabic. Parents frequently worry: <em>Can my child learn to recite the Quran with authentic Tajweed if neither of us speaks Arabic?</em> The answer is an emphatic yes.
        </p>
        <p className="text-base text-muted-text leading-relaxed">
          The classical Arabic of the Quran is a phonetic system mastered through dedicated phonemic training, not everyday conversational fluency. Starting with Noorani Qaida, children learn the precise tongue placement, throat acoustics, and lip movements required for each unique Arabic sound—such as the deep <em>‘Ayn (ع)</em>, the emphatic <em>Dhad (ض)</em>, and the soft <em>Haa (ح)</em>. Because our instructors are fluent in English and trained in teaching Western youth, they explain vocal mechanics using clear English analogies without intimidating linguistic jargon. Your child learns to read the actual words of the Mushaf fluently without needing prior Arabic knowledge, while parents receive clear progress reports in English.
        </p>
      </section>

      {/* SECTION 13: Shy or Easily Distracted Children (ADHD Adaptations) */}
      <section id="shy-adhd-adaptation" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Shy or Easily Distracted Children (Including ADHD): How Teachers Adapt
        </h2>
        <p className="text-base text-muted-text leading-relaxed">
          Every child learns differently, and a classroom setting where children are called upon unexpectedly can make shy children retreat or cause easily distracted children to lose focus. In a private 1-on-1 online environment, there is zero peer intimidation, no teasing, and no classroom chaos.
        </p>
        <p className="text-base text-muted-text leading-relaxed">
          For shy children, our tutors begin with gentle icebreakers, smiling encouragement, and choral recitation (reading together simultaneously) until the child feels completely secure. For children with high energy, short attention spans, or ADHD tendencies, our instructors deliberately vary lesson stimuli every 5 to 7 minutes. A typical 30-minute session alternates between letter drills, interactive on-screen tracing, short voice games, visual flashcards, and quick reward milestones. Teachers adapt pacing dynamically—slowing down when focus drifts, switching activities before frustration sets in, and celebrating effort with immediate digital praise. Parents are always welcome to observe and share insights on what motivates their child best.
        </p>
      </section>

      {/* SECTION 14: Siblings: Shared vs. Separate & 15% Sibling Discount */}
      <section id="siblings-and-family" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Siblings: Shared vs. Separate Classes and the 15% Sibling Discount
        </h2>
        <p className="text-base text-muted-text leading-relaxed">
          Parents with two or more children often ask whether siblings should share a single online class or take separate 1-on-1 sessions. While sharing a screen may seem convenient, our experience shows that separate 1-on-1 sessions produce significantly superior results. Siblings rarely share identical reading speeds, phonetic strengths, or confidence levels. When sharing a class, the more confident sibling often dominates reading time, leaving the quieter or younger child feeling hesitant or overshadowed.
        </p>
        <p className="text-base text-muted-text leading-relaxed">
          In separate 1-on-1 sessions, each child receives the tutor&apos;s undivided attention, personalized pacing, and tailored feedback suited to their specific learning style. To make separate private tutoring affordable for growing families, OQTutor provides an automatic <strong>15% family discount</strong> on tuition for each additional enrolled child. We can also schedule sibling classes back-to-back with the same tutor or simultaneously with separate tutors to fit seamlessly into your evening routine.
        </p>
      </section>

      {/* SECTION 15: Homeschool Families: Daytime Scheduling */}
      <section id="homeschool-families" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Homeschool Families: Flexible Daytime Scheduling
        </h2>
        <p className="text-base text-muted-text leading-relaxed">
          Muslim homeschooling is growing rapidly across North America, with families seeking to integrate academic excellence with deep spiritual grounding. One of the greatest challenges homeschool parents face is finding qualified Quran and Islamic studies instruction during normal daytime school hours. Most local mosque programs and after-school centers only operate in the late evening, disrupting homeschool routines and dinner schedules.
        </p>
        <p className="text-base text-muted-text leading-relaxed">
          OQTutor caters specifically to homeschool families across EST, CST, MST, and PST time zones by offering flexible daytime scheduling 7 days a week. Whether your homeschool schedule designates Quran study at 10:00 AM Eastern, 1:00 PM Central, or late morning Pacific, our certified male and female scholars are available to lead structured daily lessons. Homeschool parents gain a trusted educational partner who manages the Quran and Islamic studies syllabus, provides structured monthly assessments, and ensures steady progress while parents focus on other academic subjects.
        </p>
      </section>

      {/* SECTION 16: Quran Apps vs. a Live Teacher for Kids */}
      <section id="apps-vs-live-teacher" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Quran Apps vs. a Live Teacher for Kids
        </h2>
        <p className="text-base text-muted-text leading-relaxed">
          Mobile apps and gamified learning tools (such as Tarteel, Quran Majeed, or digital Qaida apps) have made Arabic practice more accessible than ever. These apps offer convenient audio playback, interactive quizzes, and speech recognition that can help children review letters or memorize short Surahs on their own.
        </p>
        <p className="text-base text-muted-text leading-relaxed">
          However, digital apps cannot replace a live human Quran teacher. Voice recognition algorithms cannot detect subtle Makharij errors—such as the crucial difference between <em>Qaf (ق)</em> and <em>Kaf (ك)</em> or slight slips in Ghunnah nasalization—and apps cannot offer the warm empathy, real-time posture guidance, and motivational mentoring that young learners need. An app cannot sense when a child is feeling discouraged, nor can it answer a spontaneous question about an Ayah. We recommend using Quran apps as supplementary practice tools between classes, while relying on live 1-on-1 instruction with a qualified tutor for authentic pronunciation correction, accountability, and spiritual mentorship. Read more in our guide on <Link href="/blog/screen-time-spiritual-learning" className="text-primary font-semibold hover:underline">transforming screen time into spiritual learning</Link>.
        </p>
      </section>

      {/* SECTION 17: Ramadan and Summer Break: Keeping Consistency */}
      <section id="ramadan-and-summer" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Ramadan and Summer Break: Keeping Consistency
        </h2>
        <p className="text-base text-muted-text leading-relaxed">
          Two periods in the year pose the greatest risk to a child&apos;s Quranic retention: the busy holy month of Ramadan and the extended summer vacation. During Ramadan, family schedules shift around Suhoor, Iftar, and Taraweeh prayers, making late-evening lessons difficult. During summer break, family travel, camps, and relaxed routines often lead to complete pauses in Quran study, causing children to forget up to 30% of their phonetic fluency and newly memorized Surahs by August.
        </p>
        <p className="text-base text-muted-text leading-relaxed">
          At OQTutor, we prevent this setback with special seasonal schedule flexibility. During Ramadan, families can easily adjust lesson times to early mornings, mid-day, or afternoons to preserve family prayer and fasting routines. During summer break, our remote classes travel with you—whether you are visiting grandparents out of state or traveling abroad on vacation, all you need is a tablet or laptop and internet access to keep your child&apos;s 30-minute routine alive.
        </p>
      </section>

      {/* SECTION 18: What to Look for: Parent Checklist Before Enrolling */}
      <section id="parent-checklist" className="space-y-6 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          What to Look for: Parent Checklist Before Enrolling
        </h2>
        <p className="text-base text-muted-text">
          Follow this practical 6-step checklist to select the ideal online Quran academy for your child:
        </p>
        <div className="space-y-3 not-prose">
          {[
            {
              step: "1",
              title: "Identify Your Child's Baseline Level",
              desc: "Determine whether your child is an absolute beginner needing Noorani Qaida phonics, ready for Quran reading fluency, or looking for advanced Tajweed or Hifz."
            },
            {
              step: "2",
              title: "Specify Male or Female Tutor Preference",
              desc: "Choose a tutor gender that matches your family preference. Many parents prefer female Quran teachers for young daughters and gentle beginners."
            },
            {
              step: "3",
              title: "Verify Certification & Communication Skills",
              desc: "Ensure the academy employs Ijazah-certified scholars who speak fluent, articulate English and demonstrate gentle patience with young learners."
            },
            {
              step: "4",
              title: "Book a 3-Day Free Trial Assessment",
              desc: "Never pay upfront before testing the platform. Use the trial lesson on Zoom or Google Meet to observe teacher-student chemistry, audio-video clarity, and teaching methods."
            },
            {
              step: "5",
              title: "Confirm Schedule Compatibility in Your Time Zone",
              desc: "Ensure the class schedule accommodates school hours, extracurriculars, and daylight saving time shifts across EST, CST, MST, or PST."
            },
            {
              step: "6",
              title: "Review Transparent Monthly Tuition Plans",
              desc: "Select a plan with clear monthly pricing ($30, $40, or $50/month), flexible class frequencies, and easy cancellation policies with no lock-in contracts."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-4 sm:p-5 rounded-2xl glass border border-card-border flex items-start space-x-4">
              <span className="h-7 w-7 rounded-full bg-primary text-white font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5">
                {item.step}
              </span>
              <div>
                <strong className="text-foreground text-sm sm:text-base font-bold">{item.title}</strong>
                <p className="text-xs sm:text-sm text-muted-text mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-text pt-1">
          Preparing for your first session? Review our practical guide on <Link href="/blog/prepare-child-first-online-class" className="text-primary font-semibold hover:underline">how to prepare your child for their first online Quran class</Link>.
        </p>
      </section>

      {/* SECTION 19: How Long Should a Child's Quran Class Be? */}
      <section id="class-duration" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          How Long Should a Child&apos;s Quran Class Be?
        </h2>
        <p className="text-base text-muted-text">
          Lesson duration should align with a child&apos;s natural attention span and learning objectives rather than an arbitrary standard:
        </p>
        <ul className="space-y-3 pt-1">
          <li className="flex items-start space-x-3 text-sm text-muted-text">
            <span className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2" />
            <span><strong>Standard Class Length:</strong> Classes run for <strong>30 to 40 minutes</strong>. This provides focused, high-retention phonetic drills and praise before mental fatigue sets in.</span>
          </li>
          <li className="flex items-start space-x-3 text-sm text-muted-text">
            <span className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2" />
            <span><strong>Weekly Frequency:</strong> While a 2 to 3 days per week plan suits very young beginners who are easing into the routine, <strong>3 to 4 sessions per week</strong> suit most children to build steady retention without causing fatigue alongside public school homework.</span>
          </li>
          <li className="flex items-start space-x-3 text-sm text-muted-text">
            <span className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2" />
            <span><strong>Hifz (Quran Memorization) Students:</strong> Classes are <strong>30 to 40 minutes, with extra revision time agreed with the teacher</strong> to accommodate daily Sabaq submission and long-term Manzil review.</span>
          </li>
        </ul>
        <p className="text-sm text-muted-text">
          Consistency is far more impactful than marathon sessions. Three 30-to-40-minute classes per week yield significantly better long-term retention than a single long weekend class.
        </p>
      </section>

      {/* SECTION 20: How Parents Can Track Progress & Support Learning at Home */}
      <section id="home-support-habits" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          How Parents Can Track Progress &amp; Support Learning at Home
        </h2>
        <p className="text-base text-muted-text">
          Parents do not need to be Arabic scholars to support their child&apos;s Quranic education. Simple, supportive home habits make an enormous difference:
        </p>
        <ul className="space-y-2.5 text-sm text-muted-text pt-1">
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span><strong>10-Minute Daily Revision Habit:</strong> Have your child read 1 page of Noorani Qaida or recite their assigned Surah to you for 10 minutes every evening.</span>
          </li>
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span><strong>Reciting in Daily Prayers:</strong> Encourage your child to lead or recite newly memorized Surahs during family Maghrib or Isha prayers.</span>
          </li>
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span><strong>Celebrating Milestones:</strong> Celebrate completing a chapter of Noorani Qaida or finishing a Juz with family recognition and positive rewards.</span>
          </li>
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span><strong>Regular Teacher Check-Ins:</strong> Check in with your child&apos;s tutor at the end of each month to discuss strengths and areas for continued review.</span>
          </li>
        </ul>
      </section>

      {/* SECTION 21: US Tuition & Monthly Pricing ($30–$50/mo) */}
      <section id="us-pricing-plans" className="space-y-6 scroll-mt-20">
        <div className="border-b border-card-border pb-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3 py-1 inline-block mb-2">
            Affordable &amp; Transparent
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            How Much Do Online Quran Classes for Kids Cost in the USA? (US Pricing in USD)
          </h2>
          <p className="text-base text-muted-text mt-2">
            At OQTutor, we believe quality Quran education should be accessible for every Muslim family in America. Our tuition plans are priced simply in US Dollars (USD) with zero registration fees, zero hidden platform charges, and no long-term contracts. Learn more on our <Link href="/pricing" className="text-primary font-semibold hover:underline">detailed pricing page</Link>:
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
          {/* Starter Plan */}
          <div className="p-6 rounded-3xl glass border border-card-border hover:border-primary/40 transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary uppercase tracking-wider px-2.5 py-1 bg-primary/10 rounded-full">
                  Starter Plan
                </span>
                <span className="text-xs text-muted-text font-medium">2–3 Days / Week</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-extrabold text-foreground">$30</span>
                  <span className="text-xs font-semibold text-muted-text uppercase">USD / Month</span>
                </div>
                <p className="text-xs text-muted-text">Approx. $2.50 to $3.50 per live private class.</p>
              </div>
              <p className="text-xs text-muted-text leading-relaxed border-t border-card-border pt-3">
                Ideal for very young beginners starting the Arabic alphabet, Noorani Qaida phonics, and basic Quran reading.
              </p>
              <ul className="space-y-2 text-xs text-muted-text pt-2">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>2 to 3 Live Classes / Week (30–40 min each)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>1-on-1 Private Teacher Attention</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Choice of Male or Female Teacher</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>US Time Zones (EST, CST, MST, PST)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>3-Day Free Trial (No Card Needed)</span>
                </li>
              </ul>
            </div>
            <Link
              href="/book-free-trial"
              className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-bold border border-primary/20 transition-all text-center"
            >
              <span>Start 3-Day Free Trial</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Standard Plan (Featured) */}
          <div className="p-6 rounded-3xl glass border-2 border-primary shadow-xl bg-primary/[0.03] flex flex-col justify-between space-y-5 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white bg-primary uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              Recommended for Most Children
            </span>
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary uppercase tracking-wider px-2.5 py-1 bg-primary/15 rounded-full">
                  Standard Plan
                </span>
                <span className="text-xs text-muted-text font-medium">3–4 Days / Week</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-extrabold text-foreground">$40</span>
                  <span className="text-xs font-semibold text-muted-text uppercase">USD / Month</span>
                </div>
                <p className="text-xs text-muted-text">Approx. $2.50 to $3.00 per live private class.</p>
              </div>
              <p className="text-xs text-muted-text leading-relaxed border-t border-card-border pt-3">
                Our recommended plan for consistent recitation fluency, Tajweed rules, daily Duas, and memorization.
              </p>
              <ul className="space-y-2 text-xs text-muted-text pt-2">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span><strong>3 to 4 Live Classes / Week</strong> (30–40 min each)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>1-on-1 Dedicated Qualified Tutor</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Quran Recitation + Tajweed Rules</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Islamic Studies, Daily Duas &amp; Salah</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Monthly Written Progress Reports</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Free Makeup &amp; Rescheduled Lessons</span>
                </li>
              </ul>
            </div>
            <Link
              href="/book-free-trial"
              className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-md shadow-primary/20 transition-all text-center"
            >
              <span>Start 3-Day Free Trial</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Intensive / Hifz Plan */}
          <div className="p-6 rounded-3xl glass border border-card-border hover:border-primary/40 transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider px-2.5 py-1 bg-secondary/10 rounded-full">
                  Intensive / Hifz
                </span>
                <span className="text-xs text-muted-text font-medium">5 Days / Week</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-extrabold text-foreground">$50</span>
                  <span className="text-xs font-semibold text-muted-text uppercase">USD / Month</span>
                </div>
                <p className="text-xs text-muted-text">Approx. $2.50 per live private session.</p>
              </div>
              <p className="text-xs text-muted-text leading-relaxed border-t border-card-border pt-3">
                Accelerated Quran memorization (Hifz) with systematic daily Sabaq and long-term Manzil revision.
              </p>
              <ul className="space-y-2 text-xs text-muted-text pt-2">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>5 Live Classes / Week (30–40 min each)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Senior Certified Hafiz / Quran Scholar</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Daily Hifz Revision (Sabaq, Sabqi, Manzil)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Direct WhatsApp Teacher Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>15% Family &amp; Sibling Discount</span>
                </li>
              </ul>
            </div>
            <Link
              href="/book-free-trial"
              className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-bold border border-primary/20 transition-all text-center"
            >
              <span>Start 3-Day Free Trial</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Pricing Guarantee Banner */}
        <div className="p-5 rounded-2xl glass border border-card-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 not-prose">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-foreground">US Family Savings &amp; Multi-Child Discounts</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Enrolling multiple siblings? Receive an automatic <strong>15% family discount</strong> on each additional child. Compared to private in-person tutors in the US who charge $30–$50 per hour, OQTutor provides high-touch 1-on-1 certified instruction for less than $40 a month.
            </p>
          </div>
          <Link
            href="/book-free-trial"
            className="shrink-0 inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-sm transition-all"
          >
            <span>Claim 15% Sibling Discount</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* SECTION 22: Red Flags When Choosing an Online Quran Program */}
      <section id="red-flags" className="space-y-6 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Red Flags When Choosing an Online Quran Program
        </h2>
        <p className="text-base text-muted-text">
          When comparing online academies, be cautious of platforms exhibiting these warning signs:
        </p>

        <div className="space-y-3 not-prose">
          <div className="p-4 rounded-2xl glass border border-card-border flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-foreground">Anonymous or Unverified Tutors</h3>
              <p className="text-xs text-muted-text mt-0.5">
                Websites that list &quot;certified scholars&quot; without providing tutor bios, backgrounds, or specific qualifications.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass border border-card-border flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-foreground">Vague Curriculum and Progression</h3>
              <p className="text-xs text-muted-text mt-0.5">
                Programs lacking a defined syllabus from Noorani Qaida to Quran reading and Tajweed milestones.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass border border-card-border flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-foreground">Hidden Fees and High-Pressure Sales</h3>
              <p className="text-xs text-muted-text mt-0.5">
                Platforms that hide their pricing behind sales consultations or pressure parents into non-refundable annual contracts.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass border border-card-border flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-foreground">Unrealistic Guarantees</h3>
              <p className="text-xs text-muted-text mt-0.5">
                Promises such as &quot;complete Quran memorization in 6 months&quot; without daily revision or individual skill assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 23: Meet Our Dedicated Quran Teachers */}
      <section id="teacher-profiles" className="space-y-6 scroll-mt-20">
        <div className="border-b border-card-border pb-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3 py-1 inline-block mb-2">
            Qualified Faculty
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Meet Our Dedicated Quran Teachers
          </h2>
          <p className="text-base text-muted-text mt-2">
            Our male and female instructors specialize in gentle, encouraging instruction for young learners in the USA:
          </p>
        </div>

        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl glass border border-card-border space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-14 w-14 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center">
                QZ
              </div>
              <h3 className="text-sm font-bold text-foreground">
                [OWNER INPUT NEEDED: Teacher 1 name, e.g. Qari Zaid]
              </h3>
              <p className="text-[11px] text-primary font-semibold">Ijazah in Hafs &bull; Tajweed Specialist</p>
              <p className="text-xs text-muted-text leading-relaxed">
                [OWNER INPUT NEEDED: Teacher 1 photo, qualifications, years teaching kids]
              </p>
            </div>
            <Link href="/tutors" className="text-xs text-primary font-bold hover:underline inline-flex items-center">
              <span>View Profile</span>
              <ChevronRight className="h-3 w-3 ml-0.5" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl glass border border-card-border space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-14 w-14 rounded-full bg-secondary/10 text-secondary font-bold text-lg flex items-center justify-center">
                UF
              </div>
              <h3 className="text-sm font-bold text-foreground">
                [OWNER INPUT NEEDED: Teacher 2 name, e.g. Ustadha Fatima]
              </h3>
              <p className="text-[11px] text-secondary font-semibold">Female Tutor &bull; Early Childhood Qaida</p>
              <p className="text-xs text-muted-text leading-relaxed">
                [OWNER INPUT NEEDED: Teacher 2 photo, qualifications, years teaching kids]
              </p>
            </div>
            <Link href="/tutors" className="text-xs text-primary font-bold hover:underline inline-flex items-center">
              <span>View Profile</span>
              <ChevronRight className="h-3 w-3 ml-0.5" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl glass border border-card-border space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-600 font-bold text-lg flex items-center justify-center">
                SH
              </div>
              <h3 className="text-sm font-bold text-foreground">
                [OWNER INPUT NEEDED: Teacher 3 name, e.g. Sheikh Hassan]
              </h3>
              <p className="text-[11px] text-emerald-600 font-semibold">Hifz Instructor &bull; Al-Azhar Graduate</p>
              <p className="text-xs text-muted-text leading-relaxed">
                [OWNER INPUT NEEDED: Teacher 3 photo, qualifications, years teaching kids]
              </p>
            </div>
            <Link href="/tutors" className="text-xs text-primary font-bold hover:underline inline-flex items-center">
              <span>View Profile</span>
              <ChevronRight className="h-3 w-3 ml-0.5" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl glass border border-card-border space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-14 w-14 rounded-full bg-indigo-500/10 text-indigo-600 font-bold text-lg flex items-center justify-center">
                UM
              </div>
              <h3 className="text-sm font-bold text-foreground">
                [OWNER INPUT NEEDED: Teacher 4 name, e.g. Ustadha Maryam]
              </h3>
              <p className="text-[11px] text-indigo-600 font-semibold">Female Tutor &bull; Youth Tajweed</p>
              <p className="text-xs text-muted-text leading-relaxed">
                [OWNER INPUT NEEDED: Teacher 4 photo, qualifications, years teaching kids]
              </p>
            </div>
            <Link href="/tutors" className="text-xs text-primary font-bold hover:underline inline-flex items-center">
              <span>View Profile</span>
              <ChevronRight className="h-3 w-3 ml-0.5" />
            </Link>
          </div>
        </div>

        <div className="text-center pt-2">
          <Link
            href="/tutors"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full glass hover:bg-primary/10 text-foreground text-xs sm:text-sm font-bold border border-card-border transition-all"
          >
            <span>Explore All Certified Quran Tutors</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 24: What Parents in the USA Say About OQTutor */}
      <section id="parent-reviews" className="space-y-6 scroll-mt-20">
        <div className="border-b border-card-border pb-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3 py-1 inline-block mb-2">
            Real Experiences
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            What Parents in the USA Say About OQTutor
          </h2>
          <p className="text-base text-muted-text mt-2">
            Read verified feedback from Muslim families who have enrolled their children in our 1-on-1 classes:
          </p>
        </div>

        <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl glass border border-card-border space-y-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-muted-text leading-relaxed italic">
              &ldquo;[OWNER INPUT NEEDED: real parent review with first name, state, child age - e.g. Sister Amina from Dallas, TX on her 6-year-old daughter&apos;s Qaida progress]&rdquo;
            </p>
            <div className="border-t border-card-border/60 pt-2 text-[11px] font-bold text-foreground">
              [OWNER INPUT NEEDED: Parent Name, State]
            </div>
          </div>

          <div className="p-5 rounded-2xl glass border border-card-border space-y-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-muted-text leading-relaxed italic">
              &ldquo;[OWNER INPUT NEEDED: real parent review with first name, state, child age - e.g. Brother Tariq from Chicago, IL on evening scheduling flexibility]&rdquo;
            </p>
            <div className="border-t border-card-border/60 pt-2 text-[11px] font-bold text-foreground">
              [OWNER INPUT NEEDED: Parent Name, State]
            </div>
          </div>

          <div className="p-5 rounded-2xl glass border border-card-border space-y-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-muted-text leading-relaxed italic">
              &ldquo;[OWNER INPUT NEEDED: real parent review with first name, state, child age - e.g. Sister Maryam from San Jose, CA on female tutor patience]&rdquo;
            </p>
            <div className="border-t border-card-border/60 pt-2 text-[11px] font-bold text-foreground">
              [OWNER INPUT NEEDED: Parent Name, State]
            </div>
          </div>
        </div>

        <div className="not-prose p-4 rounded-2xl glass border border-card-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-text">
          <span>Read our verified reviews on Trustpilot:</span>
          <a
            href="https://www.trustpilot.com/review/oqtutor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-primary font-bold hover:underline"
          >
            <span>OQTutor on Trustpilot</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      {/* SECTION 25: Frequently Asked Questions (24 Questions) */}
      <section id="faq" className="space-y-6 scroll-mt-20">
        <div className="border-b border-card-border pb-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3 py-1 inline-block mb-2">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-muted-text mt-2">
            Answers to common questions from American Muslim parents about online Quran instruction:
          </p>
        </div>

        <div className="space-y-4 not-prose">
          {/* FAQ 1 */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">What are the best online Quran classes for kids in the USA?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              The best online Quran classes for kids in the USA provide live one-on-one lessons with qualified, child-friendly teachers, structured curricula from Noorani Qaida to Tajweed and Hifz, flexible scheduling across US time zones (EST, CST, MST, PST), transparent safety and progress tracking, and a risk-free 3-day free trial.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">How do online Quran classes work for children?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Online Quran classes take place live via video call using a computer or tablet. A certified tutor guides your child through interactive digital lessons on Zoom or Google Meet, listens to their recitation, corrects pronunciation in real time, and assigns short practice exercises for home study.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">What age should a child start Quran classes?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Most children can comfortably start learning Arabic letters and Noorani Qaida between ages 4 and 6. Toddlers (ages 3 to 5) can begin with gentle auditory games, while older children (ages 7 and above) progress rapidly into fluent Quran reading and formal Tajweed rules.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">Are online Quran classes effective for young children?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Yes, when classes are conducted live and one-on-one by teachers trained in early childhood engagement. Interactive tools, patient repetition, and focused 30-to-40-minute sessions keep young learners motivated and engaged from home without classroom distractions.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">How much do online Quran classes for kids cost?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              At OQTutor, structured 1-on-1 online Quran classes are available in transparent plans of $30, $40, and $50 per month based on weekly class frequency. Every family can start with a 3-day free trial with no credit card required.
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">Can my child learn Tajweed online?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Yes. In a live one-on-one video session, qualified teachers can clearly hear subtle pronunciation nuances, observe articulation points (Makharij), and provide immediate phonetic correction just as effectively as in-person instruction.
            </p>
          </div>

          {/* FAQ 7 */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">Can I choose a male or female Quran teacher?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Yes. We allow parents to select qualified male or female Quran tutors according to family preferences, student comfort, and scheduling requirements.
            </p>
          </div>

          {/* FAQ 8 */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">What should a beginner learn first?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Beginners start with Noorani Qaida to master Arabic alphabet recognition, letter connections, vowel marks (Harakat), and foundational phonetic pronunciation before attempting to read complete Quranic verses.
            </p>
          </div>

          {/* FAQ 9 */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">How many Quran classes per week are ideal?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              While a 2 to 3 days per week schedule suits very young beginners easing into formal study, 3 to 4 sessions per week (30 to 40 minutes each) provide the optimal balance of steady progress and retention for most children without causing fatigue alongside schoolwork.
            </p>
          </div>

          {/* FAQ 10 */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">Can online Quran classes fit around US school schedules?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Yes. Classes can be scheduled during after-school afternoon hours, early evenings, or weekend mornings across Eastern, Central, Mountain, and Pacific time zones to fit seamlessly around public school, homework, and sports.
            </p>
          </div>

          {/* FAQ 11 */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">What software or equipment is needed for online Quran classes?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              All you need is a laptop, tablet, or desktop computer with a functional webcam, a reliable internet connection, a headset with a microphone, and Zoom or Google Meet. Digital Quran slides and Qaida materials are provided directly on screen by your tutor.
            </p>
          </div>

          {/* FAQ 12 */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">How long does it take for a child to complete Noorani Qaida online?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              With 3 to 4 one-on-one classes per week (30 to 40 minutes per class) and brief daily practice, young children typically complete Noorani Qaida within 3 to 6 months before progressing to fluent Quran reading.
            </p>
          </div>

          {/* FAQ 13 */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">How do I know if my child is making genuine progress in Quran recitation?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Parents can track progress through regular tutor feedback after each class, monthly progress updates, your child&apos;s increasing ability to recognize new Arabic words independently, and improved recitation clarity in daily Salah.
            </p>
          </div>

          {/* FAQ 14 */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">Why do families choose OQTutor over other options?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Families choose OQTutor for dedicated 1-on-1 private instruction (30 to 40 minutes of actual student reading time), vetted male and female teachers with authentic Ijazah certifications, 7-day schedule flexibility across all US time zones (EST, CST, MST, PST), open-door parent visibility, transparent monthly pricing in USD ($30, $40, $50/mo with zero contracts), and a 3-day free trial with no credit card required.
            </p>
          </div>

          {/* FAQ 15 */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">Are OQTutor tutors background-checked and safe for my child?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Yes. Every tutor undergoes identity verification, academic credential checks, and child protection protocol training before teaching. Parents enjoy complete open-door visibility to observe classes at any time from their home. [OWNER INPUT NEEDED: confirm vetting steps].
            </p>
          </div>

          {/* FAQ 16: NEW */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">Which Qaida do you teach (Noorani, Madani, Yassarnal Quran)?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              We primarily teach Noorani Qaida, which is the most widely recognized and phonetically structured curriculum across the English-speaking world. However, if your family prefers Madani Qaida, Yassarnal Quran, or Baghdad Qaida, our tutors are fully trained to accommodate your preferred curriculum.
            </p>
          </div>

          {/* FAQ 17: NEW */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">Which recitation style do you teach?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Our instructors teach the standard Hafs &apos;an &apos;Asim recitation style, which is the most widely recited Qira&apos;ah globally and across North American communities. [OWNER INPUT NEEDED: confirm other Qira&apos;at offerings, e.g. Warsh or Qaloon on request].
            </p>
          </div>

          {/* FAQ 18: NEW */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">Can I switch tutors if my child isn&apos;t comfortable?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Yes, absolutely. We want your child to have complete comfort and positive chemistry with their teacher. If for any reason you feel a different tutor, teaching style, or schedule would suit your child better, our academic support team will reassign a new certified male or female instructor immediately at zero extra cost.
            </p>
          </div>

          {/* FAQ 19: NEW */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">What happens if we miss a class?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              We understand that school events, doctor appointments, and family emergencies happen. On our Standard and Intensive plans, we offer free makeup and rescheduled lessons when you give advance notice to your tutor or support team. For full details on our rescheduling terms and class policies, please review our <Link href="/refund-policy" className="text-primary font-semibold hover:underline">refund and class policy</Link>.
            </p>
          </div>

          {/* FAQ 20: NEW */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">Is a male tutor appropriate for my daughter, and can I sit in?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Parents have complete freedom to choose either a certified female or male tutor for their children. For young girls or sisters, many parents request our qualified female Quran scholars. Furthermore, OQTutor maintains a strict open-door policy: parents are always welcome to sit in on classes, observe lessons on Zoom or Google Meet, and interact with the tutor at any time. [OWNER INPUT NEEDED: confirm policy details].
            </p>
          </div>

          {/* FAQ 21: NEW */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">Are classes recorded?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              All classes are conducted live in real time on Zoom or Google Meet to ensure interactive 1-on-1 dialogue. [OWNER INPUT NEEDED: confirm whether session recordings are available upon parent request for safeguarding or revision].
            </p>
          </div>

          {/* FAQ 22: NEW */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">Do you teach translation or meaning to children?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Yes. Alongside accurate Arabic reading and Tajweed, our instructors incorporate age-appropriate explanations of Surah themes, basic word meanings, Seerah stories of the Prophet (PBUH), and daily Islamic manners (Adab) so children develop a heartfelt understanding of what they recite.
            </p>
          </div>

          {/* FAQ 23: NEW */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">How do payments and refunds work?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Tuition is billed monthly in USD ($30, $40, or $50 per month depending on weekly frequency) with zero contracts, zero setup fees, and the freedom to pause or cancel anytime. You can explore all options on our <Link href="/pricing" className="text-primary font-semibold hover:underline">pricing plans page</Link>. If you ever need to adjust your enrollment, our terms are detailed in our <Link href="/refund-policy" className="text-primary font-semibold hover:underline">refund policy</Link>.
            </p>
          </div>

          {/* FAQ 24: NEW */}
          <div className="p-5 rounded-2xl glass border border-card-border space-y-2">
            <h3 className="text-base font-bold text-foreground">What if my child loses interest?</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              It is completely normal for young learners to experience occasional motivational dips. Our teachers are trained in positive child pedagogy—using digital stickers, educational games, short reading rotations, and enthusiastic praise to rekindle excitement. When needed, we can also adjust lesson length, shift focus to engaging stories of the Prophets, or pair your child with a different instructor whose style sparks their enthusiasm.
            </p>
          </div>
        </div>
      </section>

      {/* Start Today / Final CTA Banner */}
      <section className="space-y-4 pt-6 border-t border-card-border not-prose">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 text-center space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
            Get Started Risk-Free
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Start Your Child&apos;s Quran Journey with OQTutor
          </h2>
          <p className="text-xs sm:text-sm text-muted-text max-w-xl mx-auto leading-relaxed">
            Discover how personalized one-on-one Quran tutoring can help your child read, understand, and love the Holy Quran with confidence. Book your 3-day free trial today with no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/book-free-trial"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300"
            >
              <span>Book Your 3-Day Free Trial</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full glass hover:bg-primary/10 text-foreground text-sm font-semibold border border-card-border transition-all"
            >
              <span>View Pricing Plans</span>
            </Link>
          </div>
          <p className="text-[11px] text-muted-text pt-2">
            Have questions before booking? Learn <Link href="/how-it-works" className="text-primary hover:underline font-semibold">how online classes work</Link> or contact our academic support team.
          </p>
        </div>
      </section>

    </article>
  );
}
