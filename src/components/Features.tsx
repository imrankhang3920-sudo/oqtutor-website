import React from 'react';
import { Award, Users, Clock, UserCheck, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Features({ data }: { data?: any[] }) {
  const features = [
    {
      id: "feat-1",
      title: "Certified Tutors",
      description: "Learn from qualified male and female Quran tutors with years of online teaching experience.",
      icon: Award,
      link: "/tutors",
      cta: "Learn More →"
    },
    {
      id: "feat-2",
      title: "Male & Female Tutors Available",
      description: "Choose a tutor that matches your family's preference and learning style.",
      icon: Users,
      link: "/tutors",
      cta: "Meet Our Tutors →"
    },
    {
      id: "feat-3",
      title: "One-on-One Personalized Lessons",
      description: "Every student receives personalized one-on-one Quran classes designed for their learning pace.",
      icon: UserCheck,
      link: "/courses",
      cta: "View Courses →"
    },
    {
      id: "feat-4",
      title: "Progress Reports & Tracking",
      description: "Receive regular progress reports so parents can monitor every student's improvement.",
      icon: TrendingUp,
      link: "/about",
      cta: "How It Works →"
    },
    {
      id: "feat-5",
      title: "Free Trial, No Commitment",
      description: "Book a free trial class today and experience our teaching before enrolling.",
      icon: Sparkles,
      link: "/free-trial",
      cta: "Book Free Trial →"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-foreground/[0.01] relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Our Advantages</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Why Choose OQTutor?
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-muted-text">
            We provide a world-class online platform dedicated to helping you or your children master Quran reading, Tajweed rules, and Islamic values from the comfort of your home.
          </p>
        </div>

        {/* Feature Grid with Stretched Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-x-12 sm:gap-y-12 max-w-6xl mx-auto">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.id} 
                className="group relative flex flex-col items-center text-center sm:items-start sm:text-left space-y-3.5 px-6 sm:px-0 w-full hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
              >
                <div className="text-primary">
                  <IconComponent className="h-7 w-7 stroke-[1.75]" />
                </div>
                <h3 className="text-lg font-bold text-foreground tracking-tight">
                  <Link 
                    href={feature.link} 
                    aria-label={`Learn more about ${feature.title}`}
                    className="after:absolute after:inset-0 focus:outline-none hover:text-primary transition-colors"
                  >
                    {feature.title}
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  {feature.description}
                </p>
                <div className="text-xs font-bold text-primary flex items-center gap-1 group-hover:text-primary-hover transition-colors">
                  <span>{feature.cta}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Action Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="/book-free-trial"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 uppercase tracking-wider cursor-pointer"
          >
            <span>Get Started & Book Free Trial</span>
            <ArrowRight className="h-4.5 w-4.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
