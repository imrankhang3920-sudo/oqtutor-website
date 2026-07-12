import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'src/data/db.json');

export interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  whatsappText: string;
  whatsappNumber: string;
  backgroundImage: string;
}

export interface AboutData {
  title: string;
  content: string;
  image: string;
}

export interface MissionData {
  title: string;
  content: string;
  image: string;
}

export interface FeatureData {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CourseData {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  duration: string;
  suitableFor: string;
  overview: string;
  learningOutcomes: string[];
  classStructure: string;
  recommendedAge: string;
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  whoShouldJoin: string;
  benefits: string[];
  curriculumSteps: { title: string; description: string }[];
  teachingMethod: string;
  faqs: { question: string; answer: string }[];
}

export interface PricingData {
  id: string;
  title: string;
  price: string;
  frequency: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface TutorData {
  id: string;
  name: string;
  experience: string;
  languages: string[];
  specialization: string;
  photo: string;
  gender: 'male' | 'female';
}

export interface TestimonialData {
  id: string;
  name: string;
  relation: string;
  location: string;
  rating: number;
  text: string;
}

export interface ContactData {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  aboutText: string;
}

export interface FAQData {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'classes' | 'tutors';
}

export interface BlogData {
  id: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  slug: string;
}

export interface DatabaseSchema {
  hero: HeroData;
  about: AboutData;
  mission: MissionData;
  features: FeatureData[];
  courses: CourseData[];
  pricing: PricingData[];
  tutors: TutorData[];
  testimonials: TestimonialData[];
  contact: ContactData;
  faqs: FAQData[];
  blogs: BlogData[];
}

export function readDB(): DatabaseSchema {
  try {
    const fileContent = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading database file:', error);
    throw new Error('Could not read data from database');
  }
}

export function writeDB(data: DatabaseSchema): void {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing database file:', error);
    throw new Error('Could not write data to database');
  }
}
