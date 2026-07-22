import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Tutors from '@/components/Tutors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Online Quran Classes for Kids in USA | Certified Tutors – OQTutor",
    description: "Enroll your child in online Quran classes for kids in USA with certified male & female tutors. Flexible US time zones, one-on-one classes, 3 free trial classes.",
    alternates: {
      canonical: "https://www.oqtutor.com/online-quran-classes-usa",
    },
  };
}

export default async function USAQuranClassesPage() {
  const dbData = readDB();
  
  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  // Custom Hero Data matching USA specs
  const customHeroData = {
    title: "Online Quran Classes for Kids in USA",
    subtitle: "Looking for trusted online Quran classes for kids in USA? OQTutor connects Muslim families across America with certified, experienced Quran tutors who make learning the Quran engaging, structured, and easy for children. From Noorani Qaida to Tajweed and Hifz, our one-on-one online classes are designed around US family schedules, so your child can learn from home without compromising school or extracurricular commitments.",
    ctaText: "Book Free Trial",
    ctaLink: "/contact",
    whatsappText: dbData.hero.whatsappText,
    whatsappNumber: dbData.hero.whatsappNumber,
    backgroundImage: dbData.hero.backgroundImage || "/hero-bg.jpg",
  };

  return (
    <>
      <Navbar adminLoggedIn={adminLoggedIn} />
      
      <main className="flex-grow">
        {/* Reuse Hero component */}
        <Hero data={customHeroData} />

        {/* Detailed USA Quran Classes Sections */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          {/* Decorative backgrounds */}
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Text column */}
              <div className="lg:col-span-7 space-y-10">
                
                {/* Section 1 */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                    Quran Classes for Children Aged 4–12 in the USA
                  </h2>
                  <div className="h-1 w-16 bg-secondary rounded-full" />
                  <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                    Every child learns differently, which is why our online Quran classes for kids in USA are tailored by age and learning level. Younger children start with Noorani Qaida to build strong Arabic letter recognition and pronunciation, while older kids progress into Quran reading, <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">Tajweed</Link>, and memorization (<Link href="/courses/hifz" className="text-primary hover:underline font-semibold">Hifz</Link>). Each class is one-on-one, so your child gets the tutor's full attention every session.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                    Certified Female Quran Tutors for Kids in USA
                  </h2>
                  <div className="h-1 w-16 bg-secondary rounded-full" />
                  <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                    Many American Muslim parents prefer a female tutor for their daughters. OQTutor offers <Link href="/tutors" className="text-primary hover:underline font-semibold">certified female Quran tutors</Link> experienced in teaching young girls Tajweed, Quran reading, and Islamic Studies in a comfortable, patient learning environment.
                  </p>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                    Flexible Class Timings for US Time Zones
                  </h2>
                  <div className="h-1 w-16 bg-secondary rounded-full" />
                  <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                    We understand that families across the USA span multiple time zones — EST, CST, MST, and PST. Our tutors offer 24/7 scheduling, so you can book classes at a time that fits your child's school routine, whether that's after school, evenings, or weekends.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                    Tajweed and Quran Memorization (Hifz) for Beginners
                  </h2>
                  <div className="h-1 w-16 bg-secondary rounded-full" />
                  <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                    Beyond basic reading, many parents in the USA want their children to master correct pronunciation (<Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">Tajweed</Link>) or begin memorizing the Quran (<Link href="/courses/hifz" className="text-primary hover:underline font-semibold">Hifz</Link>). Our structured curriculum guides children step by step, from foundational reading to advanced Tajweed rules and full Hifz memorization, with regular progress reports sent to parents.
                  </p>
                </div>

              </div>

              {/* Image & Highlights column */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-8">
                {/* Image */}
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white">
                    <Image
                      src="/about-boy.png"
                      alt="online Quran classes for kids in USA - child learning Quran on laptop"
                      width={450}
                      height={350}
                      loading="lazy"
                      className="w-full rounded-2xl object-contain h-[320px] md:h-[350px]"
                    />
                  </div>
                </div>

                {/* Key Benefits Card */}
                <div className="glass p-6 rounded-3xl border-card-border shadow-lg max-w-md w-full bg-foreground/[0.01]">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Why American Muslim Families Choose OQTutor
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "One-on-one live classes, not group sessions",
                      "Certified male and female tutors with Islamic Studies backgrounds",
                      "Interactive virtual classroom with video and audio",
                      "Personalized syllabus based on your child's pace",
                      "3 free trial classes before you commit",
                      "24/7 flexible scheduling across all US time zones"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-muted-text font-normal">
                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Tutors Section */}
        <Tutors data={dbData.tutors.slice(0, 4)} />

        {/* Closing CTA Banner */}
        <section className="py-12 md:py-16 bg-background relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative glass border border-primary/20 rounded-3xl p-8 md:p-12 text-center overflow-hidden bg-primary/5 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                Start Your Quran Learning Journey Today
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
                Give your child the best start with the most trusted online Quran classes for kids in USA. Book 3 free trial classes today and see the OQTutor difference for yourself.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact"
                  className="flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm"
                >
                  <span>Book Free Trial Class</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <Contact data={dbData.contact} />
      </main>

      <Footer data={dbData.contact} />
    </>
  );
}
