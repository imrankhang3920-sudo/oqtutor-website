import { NextRequest } from 'next/server';
import crypto from 'crypto';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'; // Default fallback
const EDITOR_USERNAME = process.env.EDITOR_USERNAME || 'editor';
const EDITOR_PASSWORD = process.env.EDITOR_PASSWORD || 'editor123';
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'oqtutor_token_secret_key_12345';

export interface AdminPayload {
  username: string;
  role: 'super_admin' | 'editor';
  exp: number;
}

export function verifyAdminTokenPayload(token: string): AdminPayload | null {
  try {
    const [payload, signature] = token.split('.');
    if (!payload || !signature) return null;
    
    const expectedSignature = crypto
      .createHmac('sha256', TOKEN_SECRET)
      .update(payload)
      .digest('hex');
      
    if (signature !== expectedSignature) return null;
    
    const decoded: AdminPayload = JSON.parse(Buffer.from(payload, 'base64').toString('utf-8'));
    
    // Check expiration (24 hours)
    if (Date.now() > decoded.exp) return null;
    
    return decoded;
  } catch {
    return null;
  }
}

export function verifyAdminToken(token: string): boolean {
  return verifyAdminTokenPayload(token) !== null;
}

export function generateAdminToken(username: string, role: 'super_admin' | 'editor' = 'super_admin'): string {
  const payload: AdminPayload = {
    username,
    role,
    exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  };
  
  const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
  const signature = crypto
    .createHmac('sha256', TOKEN_SECRET)
    .update(base64Payload)
    .digest('hex');
    
  return `${base64Payload}.${signature}`;
}

export function isAdminAuthorized(req: NextRequest): boolean {
  const token = req.cookies.get('admin_token')?.value;
  if (!token) return false;
  return verifyAdminToken(token);
}

export function getAdminUserFromReq(req: NextRequest): AdminPayload | null {
  const token = req.cookies.get('admin_token')?.value;
  if (!token) return null;
  return verifyAdminTokenPayload(token);
}

export function checkCredentials(username: string, password: string): { valid: boolean; role: 'super_admin' | 'editor' } {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    return { valid: true, role: 'super_admin' };
  }
  if (username === EDITOR_USERNAME && password === EDITOR_PASSWORD) {
    return { valid: true, role: 'editor' };
  }
  return { valid: false, role: 'editor' };
}
