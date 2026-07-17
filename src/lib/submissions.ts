import fs from 'fs';
import path from 'path';

const SUBMISSIONS_PATH = path.join(process.cwd(), 'src/data/submissions.json');

export interface Submission {
  id: string;
  studentName: string;
  email: string;
  phone: string;
  age: string;
  country: string;
  course: string;
  preferredTime: string;
  message: string;
  createdAt: string;
  ip: string;
  emailStatus: 'sent' | 'failed';
  errorLog?: string;
}

export function readSubmissions(): Submission[] {
  try {
    if (!fs.existsSync(SUBMISSIONS_PATH)) {
      fs.writeFileSync(SUBMISSIONS_PATH, JSON.stringify([], null, 2), 'utf-8');
      return [];
    }
    const content = fs.readFileSync(SUBMISSIONS_PATH, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error reading submissions file:', error);
    return [];
  }
}

export function saveSubmission(submission: Omit<Submission, 'id' | 'createdAt'>): Submission {
  const newSubmission: Submission = {
    ...submission,
    id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
  };

  try {
    const list = readSubmissions();
    list.push(newSubmission);
    fs.writeFileSync(SUBMISSIONS_PATH, JSON.stringify(list, null, 2), 'utf-8');
    return newSubmission;
  } catch (error) {
    console.error('Error writing submission to file:', error);
    throw new Error('Failed to save submission to database');
  }
}
