import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Mission from '@/components/Mission';
import { Heart, Shield, Award, Sparkles, ChevronDown, HelpCircle, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'About OQTutor | Our Mission & Online Quran Academy Values',
  description: 'Discover the mission and values behind OQTutor. We make structured online Quran learning accessible and engaging for Muslim families worldwide.',
  keywords: ['online quran academy mission', 'about oqtutor', 'quran learning principles', 'islamic tutoring values'],
  alternates: {
    canonical: 'https://www.oqtutor.com/about',
  },
  openGraph: {
    url: 'https://www.oqtutor.com/about',
  },
};

export default async function AboutPage() {
  const dbData = readDB();

  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://oqtutor.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://oqtutor.com/about"
      }
    ]
  };

  // FAQ Schema for GSC Enhancements
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who teaches at OQTutor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OQTutor classes are taught by certified male and female scholars who hold authentic certifications (Sanad/Ijazah). Many are native Arabic speakers and bilingual educators specializing in Tajweed, Hifz, and child-friendly pedagogy."
        }
      },
      {
        "@type": "Question",
        "name": "Is OQTutor certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our senior tutors hold Ijazah certifications in Hafs 'an 'Asim and other classical modes of recitation. Each teacher goes through a rigorous vetting process to verify their credentials and teaching suitability."
        }
      },
      {
        "@type": "Question",
        "name": "How are classes scheduled?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer complete 24/7 flexibility. You can book, modify, or reschedule classes to fit your family's routine, regardless of whether you live in the UK, Europe, or the United States."
        }
      }
    ]
  };

  const coreValues = [
    { name: 'Authenticity & Trust', desc: 'All recitation parameters conform strictly to authentic classical Tajweed rules as transmitted by native scholars.', icon: Shield },
    { name: 'Excellence in Pedagogy', desc: 'We utilize interactive virtual whiteboards, customized revision schedules, and engaging games for young learners.', icon: Award },
    { name: 'Patience & Support', desc: 'Our tutors are trained to teach with kindness, encouraging students to build confidence and love for the Quran.', icon: Heart },
    { name: 'Accessible Learning', desc: 'Flexible hourly sessions available 24/7, making it easy for busy European families to learn from the safety of home.', icon: Sparkles },
  ];

  const tutorsPreview = dbData.tutors.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} />

      <main className="flex-grow bg-background">
        
        {/* Header Hero */}
        <section className="relative py-20 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
          <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Learn Our Story
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              About Online Quran Tutor
            </h1>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-base sm:text-lg text-muted-text max-w-3xl mx-auto leading-relaxed">
              We are a dedicated global team of native Arabic scholars and certified tutors committed to bringing premium Quranic, Tajweed, and Islamic studies to Muslim families worldwide.
            </p>
          </div>
        </section>

        {/* Detailed Staggered About and Mission */}
        <About data={dbData.about} mode="about" />
        <Mission data={dbData.mission} mode="about" />

        {/* Our Story Section */}
        <section className="py-20 border-t border-card-border bg-foreground/[0.005]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Our Story
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  How OQTutor Began
                </h2>
                <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
                
                <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  <p>
                    OQTutor was founded in 2021 by a team of UK-based Muslim professionals and educators who shared a common challenge. Raising children in Western cities meant balancing busy school routines with the desire to pass on a deep, authentic relationship with the Holy Quran. 
                  </p>
                  <p>
                    The local options were often impractical—long evening commutes to crowded mosques, group classrooms where individual pronunciation mistakes went unchecked, or a lack of qualified female teachers. We knew there had to be a better way to support families in the UK and Europe.
                  </p>
                  <p>
                    Our solution was to build a bridge: connecting certified scholars and native speakers directly with students through high-quality, one-to-one virtual classrooms. Over the years, we have expanded our tutoring approach to serve families across borders, including specialized programs like our dedicated <Link href="/locations/usa" className="text-primary hover:underline font-semibold">USA Quran classes</Link>.
                  </p>
                  <p>
                    We regularly publish articles, guides, and tips for parents on our <Link href="/blog" className="text-primary hover:underline font-semibold">educational blog</Link> to help keep children motivated. Our platform exists to ensure that no matter where you live, high-quality, patient spiritual education is always within reach.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative">
                    <Image
                      src="/tutor-ahmed.jpg"
                      alt="OQTutor Founding Story"
                      width={450}
                      height={320}
                      className="w-full rounded-2xl object-cover h-[320px] shadow-inner"
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 border-t border-card-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Our Foundation</h2>
              <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Our Core Islamic Values
              </p>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-text">
                Every class we deliver is guided by core principles that prioritize high-quality spiritual education and student well-being.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div key={idx} className="glass p-8 rounded-3xl border-card-border hover:shadow-lg transition-all duration-300">
                    <div className="p-3.5 rounded-2xl bg-primary/10 text-primary w-fit mb-6">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{val.name}</h3>
                    <p className="text-xs text-muted-text leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Meet the Team Preview */}
        <section className="py-20 border-t border-card-border bg-foreground/[0.005]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Our Tutors</h2>
              <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Meet a Few of Our Scholars
              </p>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-text">
                Every OQTutor instructor is certified, vetted, and dedicated to providing patient, personalized instruction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tutorsPreview.map((tutor) => (
                <div key={tutor.id} className="glass rounded-3xl border-card-border overflow-hidden hover:translate-y-[-6px] hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                  <div className="relative h-60 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                    <Image
                      src={tutor.photo}
                      alt={tutor.name}
                      fill
                      sizes="(max-w-7xl) 33vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {tutor.name}
                      </h3>
                      <span className="text-[10px] uppercase font-semibold text-secondary tracking-wider block mb-4">
                        {tutor.specialization}
                      </span>
                      <p className="text-xs text-muted-text leading-relaxed font-normal line-clamp-3 mb-6">
                        {tutor.bio}
                      </p>
                    </div>
                    
                    <div className="border-t border-card-border/60 pt-4 flex items-center justify-between text-xs text-muted-text">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-secondary text-secondary" />
                        <span className="font-bold text-foreground">{tutor.rating}.0</span>
                        <span>({tutor.reviewsCount} reviews)</span>
                      </div>
                      <span className="font-semibold text-foreground bg-foreground/5 px-2.5 py-1 rounded-lg border border-card-border/50">
                        {tutor.experience}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/tutors"
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <span>View All Tutors &amp; Bios</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 border-t border-card-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Common Questions</h2>
              <p className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
                Frequently Asked Questions
              </p>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, idx) => (
                <details
                  key={idx}
                  className="group border border-card-border/60 rounded-2xl glass p-5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-foreground cursor-pointer select-none list-none">
                    <span>{faq.name}</span>
                    <span className="ml-4 shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="mt-3 text-xs sm:text-sm text-muted-text leading-relaxed font-normal border-t border-card-border/40 pt-3">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer data={dbData.contact} />
    </>
  );
}
