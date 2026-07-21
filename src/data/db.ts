import fs from 'fs';
import path from 'path';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

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

export interface TutorReview {
  studentName: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
}

export interface TutorData {
  id: string;
  name: string;
  experience: string;
  languages: string[];
  specialization: string;
  photo: string;
  gender: 'male' | 'female';
  country?: string;
  city?: string;
  countryFlag?: string;
  rating?: number;
  reviewsCount?: number;
  isOnline?: boolean;
  isAvailableToday?: boolean;
  subjects?: string[];
  studentsTaught?: number;
  lessonsCompleted?: number;
  responseTime?: string;
  nextAvailableSlot?: string;
  bio?: string;
  education?: string;
  ijazahCertifications?: string[];
  teachingStyle?: string;
  reviewsList?: TutorReview[];
  faqs?: { question: string; answer: string }[];
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
  content?: string;
}

export interface SEOData {
  siteTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
}

export interface SettingsData {
  siteName: string;
  logoUrl: string;
  faviconUrl: string;
  googleAnalyticsId: string;
  enableTrialForm: boolean;
  enableWhatsAppWidget: boolean;
  adminRole: 'super_admin' | 'editor';
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
  seo?: SEOData;
  settings?: SettingsData;
}

let inMemoryCache: DatabaseSchema | null = null;

// Synchronous read from memory cache or local db.json
export function readDB(): DatabaseSchema {
  if (inMemoryCache) {
    return inMemoryCache;
  }
  try {
    const fileContent = fs.readFileSync(DB_PATH, 'utf-8');
    const data = JSON.parse(fileContent);
    inMemoryCache = data;
    return data;
  } catch (error) {
    console.error('Error reading database file:', error);
    if (inMemoryCache) return inMemoryCache;
    throw new Error('Could not read data from database');
  }
}

// Async read: fetches from Supabase if configured, otherwise falls back to readDB()
export async function getDBAsync(): Promise<DatabaseSchema> {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from('content_store')
        .select('data')
        .eq('id', 'main')
        .single();

      if (data && data.data && !error) {
        inMemoryCache = data.data as DatabaseSchema;
        return inMemoryCache;
      }
    } catch (e) {
      console.warn('Supabase fetch failed, falling back to local storage:', e);
    }
  }
  return readDB();
}

// Synchronous/Safe write to memory cache and local db.json (gracefully handling Vercel EROFS)
export function writeDB(data: DatabaseSchema): void {
  inMemoryCache = data;
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.warn('Local file system write skipped (Vercel read-only or permission error):', error);
  }
}

// Async write: updates memory cache, attempts local db.json write, and syncs directly to Supabase cloud
export async function writeDBAsync(data: DatabaseSchema): Promise<void> {
  writeDB(data);

  if (isSupabaseConfigured() && supabase) {
    try {
      const { error } = await supabase
        .from('content_store')
        .upsert({
          id: 'main',
          data: data,
          updated_at: new Date().toISOString(),
        });

      if (error) {
        console.error('Error writing to Supabase content_store:', error);
      }
    } catch (e) {
      console.error('Failed to sync to Supabase:', e);
    }
  }
}
