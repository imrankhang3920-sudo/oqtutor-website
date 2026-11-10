/**
 * Client-side selection state and course/plan slug normalization.
 * Enables query-string-free internal navigation while preserving form pre-selection.
 */

export type CourseSlug =
  | 'noorani-qaida'
  | 'nazra'
  | 'tajweed'
  | 'hifz'
  | 'islamic-studies'
  | 'daily-duas'
  | 'salah'
  | 'arabic'
  | 'tafseer'
  | 'quran-for-kids'
  | 'quran-for-adults';

export type PlanSlug = 'starter' | 'standard' | 'premium';

export interface TrialSelection {
  plan?: string;
  planSlug?: PlanSlug;
  course?: string;
  courseSlug?: CourseSlug;
  gender?: 'male' | 'female';
}

export interface ContactSelection {
  source?: string;
  interest?: string;
  course?: string;
  courseSlug?: CourseSlug;
}

const TRIAL_SELECTION_KEY = 'oqtutor_trial_selection';
const CONTACT_SELECTION_KEY = 'oqtutor_contact_selection';

/**
 * Normalizes any course input (slug, display title, malformed URL parameter with \n, %0A, %26, etc.)
 * into a standardized, clean internal slug.
 */
export function normalizeCourseSlug(input?: string | null): CourseSlug | undefined {
  if (!input) return undefined;

  let cleaned = String(input);
  try {
    cleaned = decodeURIComponent(cleaned);
  } catch (e) {
    // Already decoded or malformed URI sequence
  }

  cleaned = cleaned
    .replace(/[\r\n]+/g, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/%26/gi, '&')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (cleaned.includes('qaida') || cleaned.includes('beginner')) return 'noorani-qaida';
  if (cleaned.includes('nazra') || (cleaned.includes('reading') && !cleaned.includes('arabic'))) return 'nazra';
  if (cleaned.includes('tajweed') || cleaned.includes('recitation')) return 'tajweed';
  if (cleaned.includes('hifz') || cleaned.includes('memoriz')) return 'hifz';
  if (cleaned.includes('islamic') || cleaned.includes('studies')) return 'islamic-studies';
  if (cleaned.includes('dua') || cleaned.includes('supplication')) return 'daily-duas';
  if (cleaned.includes('salah') || cleaned.includes('prayer')) return 'salah';
  if (cleaned.includes('arabic')) return 'arabic';
  if (cleaned.includes('tafseer') || cleaned.includes('translation')) return 'tafseer';
  if (cleaned.includes('kid')) return 'quran-for-kids';
  if (cleaned.includes('adult')) return 'quran-for-adults';

  return undefined;
}

/**
 * Returns the standard display name for the Book Free Trial form.
 */
export function courseSlugToDisplayName(slug?: CourseSlug): string {
  switch (slug) {
    case 'noorani-qaida':
      return 'Noorani Qaida';
    case 'nazra':
      return 'Quran Reading';
    case 'tajweed':
      return 'Quran with Tajweed';
    case 'hifz':
      return 'Hifz Program';
    case 'islamic-studies':
      return 'Islamic Studies';
    case 'daily-duas':
      return 'Daily Duas';
    case 'salah':
      return 'Salah Course';
    case 'arabic':
      return 'Arabic Reading';
    case 'tafseer':
      return 'Quran Reading'; // Fallback to closest match in BookFreeTrialClient list
    case 'quran-for-kids':
      return 'Quran Reading';
    case 'quran-for-adults':
      return 'Quran Reading';
    default:
      return 'Noorani Qaida';
  }
}

/**
 * Returns the display name for the Contact form.
 */
export function courseSlugToContactDisplayName(slug?: CourseSlug): string {
  switch (slug) {
    case 'noorani-qaida':
      return 'Noorani Qaida (Beginners & Kids)';
    case 'nazra':
      return 'Quran Reading (Nazra)';
    case 'tajweed':
      return 'Quran with Tajweed';
    case 'hifz':
      return 'Hifz-ul-Quran (Memorization)';
    case 'islamic-studies':
      return 'Islamic Studies & Daily Duas';
    case 'daily-duas':
      return 'Islamic Studies & Daily Duas';
    case 'arabic':
      return 'Arabic Language';
    case 'tafseer':
      return 'Quran Tafseer';
    case 'quran-for-kids':
      return 'Quran for Kids';
    case 'quran-for-adults':
      return 'Quran for Adults';
    default:
      return 'Noorani Qaida (Beginners & Kids)';
  }
}

/**
 * Normalizes plan names to clean slugs.
 */
export function normalizePlanSlug(input?: string | null): PlanSlug | undefined {
  if (!input) return undefined;
  const lower = String(input).toLowerCase();
  if (lower.includes('starter')) return 'starter';
  if (lower.includes('standard')) return 'standard';
  if (lower.includes('premium') || lower.includes('intensive')) return 'premium';
  return undefined;
}

export function planSlugToDisplayName(slug?: PlanSlug): string {
  switch (slug) {
    case 'starter':
      return 'Starter Plan';
    case 'standard':
      return 'Standard Plan';
    case 'premium':
      return 'Premium Plan';
    default:
      return '';
  }
}

export function saveTrialSelection(selection: TrialSelection): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(TRIAL_SELECTION_KEY, JSON.stringify(selection));
  } catch (e) {
    // Ignore storage quota / restricted browsing mode errors
  }
}

export function getTrialSelection(): TrialSelection | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(TRIAL_SELECTION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function clearTrialSelection(): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.removeItem(TRIAL_SELECTION_KEY);
  } catch (e) {}
}

export function saveContactSelection(selection: ContactSelection): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(CONTACT_SELECTION_KEY, JSON.stringify(selection));
  } catch (e) {}
}

export function getContactSelection(): ContactSelection | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(CONTACT_SELECTION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function clearContactSelection(): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.removeItem(CONTACT_SELECTION_KEY);
  } catch (e) {}
}

