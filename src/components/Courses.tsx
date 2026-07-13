'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Volume2, Heart, Compass, Users, UserCheck, 
  GraduationCap, Smile, Languages, Sparkles, ChevronDown, ArrowUpRight 
} from 'lucide-react';
import { CourseData } from '@/data/db';
import Image from 'next/image';
import Link from 'next/link';

const iconMap: Record<string, React.ComponentType<any>> = {
  BookOpen,
  Volume2,
  Heart,
  Compass,
  Users,
  UserCheck,
  GraduationCap,
  Smile,
  Languages,
  Sparkles,
};

export default function Courses({ data }: { data: CourseData[] }) {
  const [showAll, setShowAll] = useState(false);
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 12 } },
  };

  return (
    <section id="courses" className="py-16 md:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Our Curriculum</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Explore Our Quran Programs
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-muted-text">
            Tailored programs suitable for children and adults at all stages. Click on any course to register and schedule your trial classes.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.slice(0, showAll ? data.length : 3).map((course) => {
            const IconComponent = iconMap[course.icon] || BookOpen;
            return (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-3xl border-card-border overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1 relative"
              >
                {/* Course Image Header */}
                <div className="relative h-44 w-full bg-foreground/5 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={350}
                    height={176}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-background/80 backdrop-blur-md text-secondary border border-card-border">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <Link
                    href={`/course/${course.slug}`}
                    className="absolute top-4 right-4 text-foreground/80 hover:text-primary transition-colors p-2 rounded-full bg-background/80 backdrop-blur-md border border-card-border"
                    aria-label="View course details"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      <Link href={`/course/${course.slug}`}>
                        {course.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-3 font-normal">
                      {course.description}
                    </p>

                    <Link
                      href={`/course/${course.slug}`}
                      className="text-xs font-semibold text-primary hover:text-primary-hover hover:underline inline-flex items-center space-x-1 mb-6"
                    >
                      <span>Learn More</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>

                <div className="mt-auto border-t border-card-border pt-5 flex items-center justify-between text-xs text-muted-text">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text/60">Duration</span>
                    <span className="font-semibold text-foreground mt-0.5">{course.duration}</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text/60">Suitable For</span>
                    <span className="font-semibold text-foreground mt-0.5">{course.suitableFor}</span>
                  </div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>

        {/* More Courses Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all cursor-pointer inline-flex items-center space-x-2"
          >
            <span>{showAll ? 'Show Less' : 'More Courses'}</span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
