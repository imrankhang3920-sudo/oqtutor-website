'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    id: "usa-faq-1",
    question: "How do online Quran classes work in the USA?",
    answer: "Our Online Quran Classes USA work through a highly secure, interactive virtual portal that brings private 1-on-1 classrooms directly to your home. When you register, you are matched with a certified Online Quran Tutor USA who conducts live, interactive sessions using HD video, clear audio, and digital whiteboards. Students and teachers can read from the same digital Quran pages, annotate text, and interact in real-time. This virtual setup eliminates the need for daily commuting to physical Islamic centers, allowing your family to study from home with absolute safety and comfort. Each class is adapted to the student's unique learning speed."
  },
  {
    id: "usa-faq-2",
    question: "Do you offer a free trial class?",
    answer: "Yes, we offer a risk-free Free Trial Quran Class spanning three consecutive days to let families experience our teaching style before subscribing. During this free trial, you will be paired with a certified male or female tutor who will assess your current reading level (whether you are starting from Noorani Qaida basics or advanced Tajweed rules). The tutor demonstrates how our interactive software functions, sets initial educational goals, and customizes a syllabus. There is absolutely no credit card required to register for the trial sessions, and you are under no commitment to continue if it is not the perfect fit for your child."
  },
  {
    id: "usa-faq-3",
    question: "Are female Quran tutors available?",
    answer: "Yes, OQTutor has a large pool of certified and highly experienced Female Quran Tutors available for young kids and sisters. We understand that modesty, privacy, and personal comfort are essential for many families in the USA. Our female tutors hold verified Islamic degrees, possess deep expertise in teaching Noorani Qaida and Tajweed rules, and are fluent in English. They build a patient, caring, and encouraging virtual learning environment, ensuring sisters and young children can ask questions and correct their pronunciation with absolute ease and confidence."
  },
  {
    id: "usa-faq-4",
    question: "What age can children start Quran classes?",
    answer: "Children can start their learning journey at our academy around the age of 4 to 5 years. For young learners, our Quran Classes for Kids are designed to be engaging, visual, and fun. Tutors use colorful resources and interactive games to teach the fundamentals of Noorani Qaida, ensuring kids learn letter recognition and correct pronunciation (Makhraj) without feeling overwhelmed. Tutors keep these initial sessions short and friendly, focusing on building a positive, long-term relationship with the Holy Quran, while parents receive regular progress reports to follow their child's improvements."
  },
  {
    id: "usa-faq-5",
    question: "How long is each class?",
    answer: "Each session in our One-to-One Quran Classes typically lasts 30 minutes. Through years of teaching experience, we have found that 30 minutes is the optimal duration for students, especially children, to maintain focus and retain information without feeling exhausted. For advanced adult students or those enrolled in our intensive Hifz memorization course, we offer customized options to extend sessions to 45 or 60 minutes based on their learning capacity and schedule. The one-on-one setup ensures that not a single minute is wasted on group distractions."
  },
  {
    id: "usa-faq-6",
    question: "Do you teach adults as well as children?",
    answer: "Yes, we offer comprehensive programs for adult learners of all levels, alongside our popular Quran Classes for Kids. Whether you are a beginner looking to read the Quran fluently, an adult wanting to master advanced Tajweed rules, or a busy professional who wishes to start Hifz memorization, we customize our lessons for you. We provide flexible schedules to fit your university or work routine. Sisters can study in absolute privacy with our certified Female Quran Tutors, while brothers can select from qualified male scholars."
  },
  {
    id: "usa-faq-7",
    question: "Which US time zones do you support?",
    answer: "We support all time zones across the United States, including Eastern (EST), Central (CST), Mountain (MST), and Pacific (PST) times. Since OQTutor operates 24 hours a day, 7 days a week, you can easily schedule your One-to-One Quran Classes at any time that suits your routine. Whether you prefer early morning sessions before school or work, late evening slots, or dedicated weekend timings, our scheduling system adapts to your calendar. You can also easily manage and reschedule classes through our parental dashboard."
  },
  {
    id: "usa-faq-8",
    question: "What courses do you offer?",
    answer: "Our online academy offers a complete range of programs tailored for all age groups. Our core offerings include: (1) Foundational Noorani Qaida for absolute beginners, (2) Fluent Quran Reading with correct pronunciation, (3) Online Tajweed Classes to perfect recitation flow, (4) Structured Hifz program for memorizing the Quran, and (5) Islamic Studies covering basic Fiqh, Duas, Wudu, and Salah. We also provide classical Arabic language classes. You can experience any of these courses by booking a risk-free Free Trial Quran Class today."
  },
  {
    id: "usa-faq-9",
    question: "Can beginners learn Noorani Qaida online?",
    answer: "Yes, absolute beginners of all ages can easily learn Noorani Qaida online through our platform. Our introductory course is specifically structured to teach the Arabic alphabet, letter shapes, compound connections, and articulation points from scratch. Our certified Online Quran Tutor USA utilizes interactive whiteboards and visual aids to make letter shapes clear and memorable. Completing this foundational course is essential, as it prepares students to read the actual Quranic text with speed, accuracy, and correct pronunciation rules."
  },
  {
    id: "usa-faq-10",
    question: "Do you provide Tajweed classes?",
    answer: "Yes, we provide highly specialized online Tajweed classes for kids and adults. Tajweed ensures the correct pronunciation and articulation of Arabic words, which is a spiritual obligation when reciting the Quran. Our tutors guide you through rules of stops, nasalization (Ghunnah), extensions (Madd), and pronunciation qualities (Sifat). In our One-to-One Quran Classes, the tutor listens closely to your recitation and provides immediate, private corrections, helping you master the rules and recite beautifully."
  },
  {
    id: "usa-faq-11",
    question: "Is Hifz available online?",
    answer: "Yes, we offer a highly structured online Hifz (Quran memorization) program led by certified Huffaz. The tutor designs a personalized memorization path matching the student's capacity. Each session involves memorizing new verses (Sabaq), reviewing recently memorized lines (Sabqi), and revising older parts (Manzil) to ensure retention. With 1-on-1 guidance, the tutor ensures that memorization is done with correct Tajweed rules, providing regular feedback to help you commit the verses to memory permanently."
  },
  {
    id: "usa-faq-12",
    question: "How do parents track their child's progress?",
    answer: "We prioritize transparency and active parent involvement. Through our secure portal dashboard, parents can monitor daily attendance records, view lesson summaries, and read specific teacher comments after every session. At the end of every month, we compile a comprehensive progress report summarizing the child's advancements in Noorani Qaida, Tajweed pronunciation, or Hifz memorization. This ensures parents stay fully informed of their child's performance and can encourage their studies at home."
  },
  {
    id: "usa-faq-13",
    question: "What technology is required for online classes?",
    answer: "The technological requirements to join our Online Quran Classes USA are very minimal. You only need a stable high-speed internet connection and a device such as a laptop, desktop computer, tablet, or smartphone. We highly recommend using a working webcam and a pair of headphones with a built-in microphone to ensure clear, distraction-free audio communication between the student and the Online Quran Tutor USA. Our virtual portal is accessible directly through web browsers, meaning you do not need to download complex software."
  },
  {
    id: "usa-faq-14",
    question: "How do I book my first class?",
    answer: "Booking your first class is simple and takes less than two minutes. Go to our registration page or fill out the booking form on this page. Choose your preferred course, such as Noorani Qaida, Tajweed, or Islamic Studies, and specify whether you prefer a male or certified Female Quran Tutor. We will contact you via email or WhatsApp to schedule your 3-day Free Trial Quran Class at a time that fits your schedule."
  },
  {
    id: "usa-faq-15",
    question: "Why should families choose OQTutor?",
    answer: "Families choose OQTutor because we are a dedicated, premium online Quran academy focused on quality education, convenience, and safety. Unlike typical online schools, we offer personalized One-to-One Quran Classes where the teacher is 100% focused on one student. We recruit highly qualified scholars who hold official Ijazahs. With flexible timings across all US time zones, secure monitored portals, and dedicated female tutors, we provide a safe, convenient, and spiritually enriching environment for your entire household."
  }
];

export default function USAFaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="usa-faq" className="py-16 md:py-24 relative overflow-hidden bg-background">
      {/* Background radial spotlights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* H2 Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block mb-4">
            Learn More
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Frequently Asked Questions About Online Quran Classes in USA
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-muted-text">
            Get comprehensive answers about timings, tutors, syllabus details, and tech setup for our USA Quran classes.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-16">
          {faqList.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass rounded-2xl border border-card-border overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-sm sm:text-base font-bold leading-snug">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-text/60 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-0 border-t border-card-border/50">
                        <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Strong CTA Section below FAQs */}
        <div className="relative glass border border-primary/20 rounded-3xl p-8 md:p-12 text-center overflow-hidden bg-primary/5 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
            Ready to Start Learning the Quran?
          </h3>
          <p className="mt-4 text-xs sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed font-normal">
            Book your FREE 3-Day Trial today and meet one of our certified male or female Quran tutors. Experience one-to-one live Quran classes designed for children and adults across the USA.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm"
            >
              <span>Book Free Trial</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full glass border-card-border hover:bg-foreground/5 text-foreground font-semibold transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
