import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { readDB } from '@/data/db';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Clock, Calendar, BookOpen, CheckCircle, ArrowRight, UserCheck, Star, ShieldCheck, Heart } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const dbData = readDB();
  const blog = dbData.blogs?.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    return {
      title: 'Blog Article | OQTutor',
      description: 'Online Quran Learning Articles and Guides.',
    };
  }

  return {
    title: `${blog.title} | OQTutor`,
    description: blog.description,
    keywords: [
      'Online Quran Classes USA',
      'Learn Quran Online USA',
      'Online Quran Academy USA',
      'Quran Classes for Kids USA',
      'Online Quran Tutor USA',
      'Female Quran Teacher USA',
      'Online Tajweed Classes',
      'Online Hifz Classes',
      'Noorani Qaida Online'
    ],
    alternates: {
      canonical: `https://www.oqtutor.com/blog/${blog.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const dbData = readDB();
  const blog = dbData.blogs?.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  const isUSABlog = resolvedParams.slug === 'online-quran-classes-usa';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.description,
    "publisher": {
      "@type": "Organization",
      "name": "OQTutor Online Quran Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.oqtutor.com/logo.jpg"
      }
    },
    "mainEntityOfPage": `https://www.oqtutor.com/blog/${blog.slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Navbar />

      <main className="flex-grow bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-4">
              {blog.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              {blog.title}
            </h1>
            <div className="h-1 w-24 bg-secondary mx-auto mt-6 mb-6 rounded-full" />
            <div className="flex items-center justify-center space-x-6 text-xs text-muted-text font-medium">
              <span className="flex items-center space-x-1.5">
                <Clock className="h-4 w-4 text-primary" />
                <span>{blog.readTime}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>Published July 2026</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <BookOpen className="h-4 w-4 text-emerald-500" />
                <span>By OQTutor Senior Scholars</span>
              </span>
            </div>
          </div>

          {/* Body Article Content */}
          <div className="glass p-6 sm:p-12 rounded-3xl border border-card-border shadow-xl space-y-8 text-foreground/90 leading-relaxed text-base">
            {isUSABlog ? (
              <ArticleContentUSA />
            ) : (
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-foreground font-medium">
                  {blog.description}
                </p>
                <p>
                  At <Link href="/" className="text-primary hover:underline font-semibold">OQTutor Online Quran Academy</Link>, we provide authentic one-on-one <Link href="/courses" className="text-primary hover:underline font-semibold">online Quran classes</Link> for Muslim families across the United States, United Kingdom, Canada, and Australia. Our team of certified male and <Link href="/tutors" className="text-primary hover:underline font-semibold">female Quran teachers</Link> specializes in personalized instruction for kids, adults, and new Muslims.
                </p>
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-3">
                  <h3 className="text-lg font-bold text-foreground">Ready to Begin Your Quran Learning Journey?</h3>
                  <p className="text-sm text-muted-text">
                    Experience the difference of personalized private tutoring. Book a <Link href="/contact" className="text-primary hover:underline font-semibold">free trial Quran class</Link> with our experienced tutors today.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md transition-all"
                  >
                    <span>Book Free Trial Class</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer data={dbData.contact} />
    </>
  );
}

function ArticleContentUSA() {
  return (
    <article className="prose prose-slate max-w-none space-y-8 text-foreground/90 leading-relaxed font-normal">
      
      {/* Introduction */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Introduction
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-muted-text">
          Living in the United States brings incredible opportunities for Muslim families, but it also presents unique cultural challenges when raising children with strong Islamic values. Finding a qualified local Qari or Qaria who lives nearby, matches your busy family schedule, and teaches with modern pedagogical techniques can feel nearly impossible. This is why enrolling in high-quality <Link href="/courses" className="text-primary font-semibold hover:underline">Online Quran Classes USA</Link> has quickly become the preferred choice for thousands of Muslim households across Texas, California, New York, Florida, Illinois, and nationwide.
        </p>
        <p className="text-base leading-relaxed text-muted-text">
          Through modern virtual classrooms, interactive whiteboards, and flexible scheduling, your entire family can now <Link href="/" className="text-primary font-semibold hover:underline">learn Quran online</Link> from the comfort, safety, and convenience of your home. Whether you want your child to master basic Arabic phonetics, perfect their Tajweed, or embark on a sacred memorization journey, choosing a professional <Link href="/" className="text-primary font-semibold hover:underline">Online Quran Academy USA</Link> ensures authentic spiritual education without compromising your daily routines.
        </p>
      </section>

      {/* Why More Families in the USA Choose Online Quran Classes */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Why More Families in the USA Choose Online Quran Classes
        </h2>
        <p className="text-base text-muted-text">
          American Muslim parents juggle demanding work schedules, school drop-offs, and extracurricular activities daily. Traveling back and forth during peak evening traffic to a distant Islamic center or local weekend Madrasa often leads to student burnout and inconsistent attendance.
        </p>
        <p className="text-base text-muted-text">
          Signing up for <Link href="/courses/quran-for-kids" className="text-primary font-semibold hover:underline">Quran classes for kids USA</Link> removes the commute entirely. Your child logs into a secure, one-on-one session right from their tablet or computer at home. Furthermore, online learning platforms pair your family with certified, English-fluent <Link href="/tutors" className="text-primary font-semibold hover:underline">online Quran tutors USA</Link> who understand Western educational environments and know how to keep young minds motivated.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-foreground/[0.02] border border-card-border flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-foreground">Zero Commute Stress</h4>
              <p className="text-xs text-muted-text mt-1">Save hours every week by attending live 1-on-1 classes directly from home.</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-foreground/[0.02] border border-card-border flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-foreground">100% Native English Tutors</h4>
              <p className="text-xs text-muted-text mt-1">Teachers communicate smoothly with American kids without language barriers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Online Quran Classes */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Benefits of Online Quran Classes
        </h2>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-primary inline-block" />
            <span>One-on-One Learning</span>
          </h3>
          <p className="text-base text-muted-text">
            Traditional group classroom environments force teachers to divide their attention among 15 to 20 students. Quiet children often get left behind, while advanced students grow bored. With specialized <Link href="/courses" className="text-primary font-semibold hover:underline">one-on-one Quran classes</Link>, the teacher devotes 100% of their focus exclusively to your child. Pronunciation errors are corrected immediately in real-time, resulting in up to three times faster progress.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-secondary inline-block" />
            <span>Flexible Timings</span>
          </h3>
          <p className="text-base text-muted-text">
            Whether your family resides in Eastern (EST), Central (CST), Mountain (MST), or Pacific (PST) time zones, online academies operate around the clock. You pick the exact days and session lengths that fit your schedule—before school, after dinner, or on weekends.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
            <span>Qualified Male & Female Teachers</span>
          </h3>
          <p className="text-base text-muted-text">
            Every student learns differently. Female adult students and young girls often prefer studying with a certified <Link href="/tutors" className="text-primary font-semibold hover:underline">female Quran teacher USA</Link> for added comfort, privacy, and personal connection. Online academies give you full access to both male and female Al-Azhar certified scholars.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-amber-500 inline-block" />
            <span>Interactive Online Lessons</span>
          </h3>
          <p className="text-base text-muted-text">
            Modern <Link href="/" className="text-primary font-semibold hover:underline">online Quran learning</Link> utilizes digital screen sharing, color-coded Tajweed Mushafs, audio repetition tools, and educational games. These interactive resources transform recitation practice into an enjoyable experience that keeps young children engaged.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-purple-500 inline-block" />
            <span>Affordable Learning</span>
          </h3>
          <p className="text-base text-muted-text">
            Hiring a private in-person tutor in metropolitan areas like New York or Los Angeles can cost $35 to $50 per hour. Online Quran academies offer <Link href="/pricing" className="text-primary font-semibold hover:underline">affordable pricing plans</Link> with family discounts, making top-tier Islamic education accessible without straining your budget.
          </p>
        </div>
      </section>

      {/* Courses Offered at OQTutor */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Courses Offered at OQTutor
        </h2>
        <p className="text-base text-muted-text">
          At OQTutor, we offer structured, step-by-step curricula tailored for learners of all ages and proficiency levels:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 glass rounded-2xl border border-card-border space-y-2">
            <h3 className="text-lg font-bold text-foreground">
              <Link href="/courses/noorani-qaida" className="hover:text-primary transition-colors">
                Noorani Qaida Online Course
              </Link>
            </h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Designed for absolute beginners and young children. Teaches Arabic alphabet recognition, letter shapes, vowel marks (Harakat), and basic word blending.
            </p>
          </div>

          <div className="p-5 glass rounded-2xl border border-card-border space-y-2">
            <h3 className="text-lg font-bold text-foreground">
              <Link href="/courses/quran-reading" className="hover:text-primary transition-colors">
                Quran Reading Course (Nazra)
              </Link>
            </h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Helps students transition from Qaida to reading full verses of the Holy Quran fluently with correct rhythm, pace, and vocal confidence.
            </p>
          </div>

          <div className="p-5 glass rounded-2xl border border-card-border space-y-2">
            <h3 className="text-lg font-bold text-foreground">
              <Link href="/courses/tajweed" className="hover:text-primary transition-colors">
                Online Tajweed Classes
              </Link>
            </h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Master classical pronunciation rules, including Makharij (exit points), Ghunnah, Ikhfa, Madd, and Qalqalah to <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">learn Quran with Tajweed</Link> accurately.
            </p>
          </div>

          <div className="p-5 glass rounded-2xl border border-card-border space-y-2">
            <h3 className="text-lg font-bold text-foreground">
              <Link href="/courses/hifz" className="hover:text-primary transition-colors">
                Online Hifz Classes & Memorization
              </Link>
            </h3>
            <p className="text-xs text-muted-text leading-relaxed">
              A structured <Link href="/courses/hifz" className="text-primary font-semibold hover:underline">Quran memorization classes</Link> program guided by certified Huffaz with daily revision strategies (Sabaq, Sabaqi, and Manzil).
            </p>
          </div>

          <div className="p-5 glass rounded-2xl border border-card-border space-y-2">
            <h3 className="text-lg font-bold text-foreground">Quran Translation & Tafseer</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Deepen your spiritual connection by understanding word-for-word translation, historical context, and practical life lessons from the divine verses.
            </p>
          </div>

          <div className="p-5 glass rounded-2xl border border-card-border space-y-2">
            <h3 className="text-lg font-bold text-foreground">
              <Link href="/courses/islamic-studies" className="hover:text-primary transition-colors">
                Online Islamic Studies
              </Link>
            </h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Comprehensive guidance covering Daily Duas, Hadith, Seerah of Prophet Muhammad (PBUH), Pillars of Islam, Wudu, and daily Salah etiquette.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose OQTutor */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Why Choose OQTutor
        </h2>
        <p className="text-base text-muted-text">
          Selecting the <Link href="/" className="text-primary font-semibold hover:underline">best online Quran academy</Link> requires careful evaluation of tutor credentials and safety protocols. At <Link href="/about" className="text-primary font-semibold hover:underline">OQTutor</Link>, we take immense pride in setting gold-standard benchmarks for American families:
        </p>
        <ul className="space-y-3 pt-2">
          <li className="flex items-start space-x-3 text-sm text-muted-text">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span><strong className="text-foreground">Certified Native Scholars:</strong> Our tutors hold Ijazah certificates and degrees from renowned institutions like Al-Azhar University.</span>
          </li>
          <li className="flex items-start space-x-3 text-sm text-muted-text">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span><strong className="text-foreground">Customized Lesson Plans:</strong> We adapt class pace according to each student's learning capability and target goals.</span>
          </li>
          <li className="flex items-start space-x-3 text-sm text-muted-text">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span><strong className="text-foreground">Regular Monthly Progress Reports:</strong> Parents receive detailed monthly updates tracking attendance, revision scores, and homework progress.</span>
          </li>
          <li className="flex items-start space-x-3 text-sm text-muted-text">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span><strong className="text-foreground">Risk-Free Trial:</strong> We invite every new family to test our teaching quality with a zero-obligation <Link href="/contact" className="text-primary font-semibold hover:underline">free trial Quran class</Link>.</span>
          </li>
        </ul>
      </section>

      {/* Online Quran Classes for Kids */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Online Quran Classes for Kids
        </h2>
        <p className="text-base text-muted-text">
          Children learn best when lessons are positive, encouraging, and interactive. Our instructors utilize positive reinforcement, reward charts, and patience to help young learners build genuine love for the Words of Allah SWT. Parents are welcome to observe classes or review session recordings anytime, ensuring complete safety and peace of mind.
        </p>
      </section>

      {/* Online Quran Classes for Adults */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Online Quran Classes for Adults
        </h2>
        <p className="text-base text-muted-text">
          It is never too late to start your Quran journey. Whether you are a busy working professional looking for <Link href="/courses/quran-for-adults" className="text-primary font-semibold hover:underline">Quran lessons for adults</Link>, a revert learning Arabic pronunciation for the first time, or an elder refining your Tajweed, our adult classes offer a welcoming, non-judgmental atmosphere tailored to your schedule.
        </p>
      </section>

      {/* Female Quran Teachers */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Female Quran Teachers
        </h2>
        <p className="text-base text-muted-text">
          We understand that modesty, privacy, and personal comfort are paramount for Muslim sisters and young daughters. OQTutor maintains a dedicated staff of qualified, English-fluent <Link href="/tutors" className="text-primary font-semibold hover:underline">female Quran teachers</Link> who provide gentle, high-quality instruction in a private virtual space.
        </p>
      </section>

      {/* How Online Quran Classes Work */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          How Online Quran Classes Work
        </h2>
        <p className="text-base text-muted-text">Getting started with OQTutor is simple and straightforward:</p>
        <ol className="space-y-4 pt-2">
          <li className="flex items-start space-x-3 text-sm text-muted-text">
            <span className="h-6 w-6 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
            <div>
              <strong className="text-foreground">Book Your Free Trial:</strong> Fill out our quick 30-second form on <Link href="/contact" className="text-primary font-semibold hover:underline">Contact Us</Link> to select your preferred time slot.
            </div>
          </li>
          <li className="flex items-start space-x-3 text-sm text-muted-text">
            <span className="h-6 w-6 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
            <div>
              <strong className="text-foreground">Initial Assessment:</strong> Join your live 1-on-1 trial session where our senior tutor evaluates your current reading level and goals.
            </div>
          </li>
          <li className="flex items-start space-x-3 text-sm text-muted-text">
            <span className="h-6 w-6 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
            <div>
              <strong className="text-foreground">Customized Schedule & Plan:</strong> Pick a weekly schedule that fits your routine and receive a personalized learning roadmap.
            </div>
          </li>
          <li className="flex items-start space-x-3 text-sm text-muted-text">
            <span className="h-6 w-6 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
            <div>
              <strong className="text-foreground">Interactive Live Classes:</strong> Attend regular live video sessions with your assigned male or female tutor.
            </div>
          </li>
          <li className="flex items-start space-x-3 text-sm text-muted-text">
            <span className="h-6 w-6 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
            <div>
              <strong className="text-foreground">Track Progress:</strong> Receive monthly progress reports and certificates as you advance through courses.
            </div>
          </li>
        </ol>
      </section>

      {/* Tips for Success */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Tips for Success
        </h2>
        <p className="text-base text-muted-text">
          To maximize your learning outcomes when studying the Quran online, consider these practical tips:
        </p>
        <ul className="space-y-2 text-sm text-muted-text list-disc pl-5">
          <li><strong>Practice Daily:</strong> Dedicate 15 to 20 minutes outside of class for daily recitation practice.</li>
          <li><strong>Stay Consistent:</strong> Regular short sessions yield far better results than infrequent long cramming sessions.</li>
          <li><strong>Revise Past Lessons:</strong> Always review your previous lesson before starting new verses.</li>
          <li><strong>Ask Questions Freely:</strong> Take advantage of 1-on-1 classes to ask your tutor for clarification on tricky pronunciation rules.</li>
          <li><strong>Create a Quiet Space:</strong> Set up a distraction-free learning corner equipped with headphones and a tablet or laptop.</li>
        </ul>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight border-b border-card-border pb-3">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-2xl glass border border-card-border space-y-1">
            <h3 className="text-base font-bold text-foreground">How do online Quran classes work for beginners?</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Beginners start with our <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida Online</Link> course, where certified tutors teach basic Arabic letters, phonetics, and vowel signs step-by-step using interactive visual whiteboards.
            </p>
          </div>

          <div className="p-4 rounded-2xl glass border border-card-border space-y-1">
            <h3 className="text-base font-bold text-foreground">Can I request a female Quran teacher for my daughter?</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Yes, absolutely. We have qualified, English-fluent <Link href="/tutors" className="text-primary font-semibold hover:underline">female Quran teachers</Link> available for female students and young children.
            </p>
          </div>

          <div className="p-4 rounded-2xl glass border border-card-border space-y-1">
            <h3 className="text-base font-bold text-foreground">What equipment do I need for online Quran lessons?</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              All you need is a computer, laptop, or tablet with a stable internet connection, a webcam, and a pair of headphones.
            </p>
          </div>

          <div className="p-4 rounded-2xl glass border border-card-border space-y-1">
            <h3 className="text-base font-bold text-foreground">What time zones do you support in the United States?</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              We operate 24/7 and support all US time zones, including EST, CST, MST, and PST.
            </p>
          </div>

          <div className="p-4 rounded-2xl glass border border-card-border space-y-1">
            <h3 className="text-base font-bold text-foreground">How much do online Quran classes cost in the USA?</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Our tuition plans are highly affordable with no long-term contracts. Check our <Link href="/pricing" className="text-primary font-semibold hover:underline">pricing plans</Link> for detailed pricing tier options.
            </p>
          </div>

          <div className="p-4 rounded-2xl glass border border-card-border space-y-1">
            <h3 className="text-base font-bold text-foreground">How do I sign up for a free trial class?</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Simply visit our <Link href="/contact" className="text-primary font-semibold hover:underline">Contact Us</Link> page, choose your preferred day and time, and submit the trial request form.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="space-y-4 pt-4 border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Conclusion
        </h2>
        <p className="text-base text-muted-text">
          Learning the Quran is a lifelong spiritual journey that brings peace, barakah, and guidance into your household. With <Link href="/" className="text-primary font-semibold hover:underline">OQTutor Online Quran Academy</Link>, your family can master Tajweed, Quran reading, and Hifz from the comfort of home under the direct mentorship of certified scholars.
        </p>
        <p className="text-base text-muted-text">
          Take the first step today. Experience our world-class teaching quality firsthand by booking your zero-risk <Link href="/contact" className="text-primary font-semibold hover:underline">free trial Quran class</Link>.
        </p>
        
        <div className="pt-6">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
              Book Your Free Trial Quran Class Today
            </h3>
            <p className="text-xs sm:text-sm text-muted-text max-w-xl mx-auto">
              Join hundreds of Muslim families across the United States learning Quran online with certified male and female tutors.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <span>Claim Your Free Trial Class</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
