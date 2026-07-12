import { NextRequest } from 'next/server';
import crypto from 'crypto';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'; // Default fallback
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'oqtutor_token_secret_key_12345';

export function verifyAdminToken(token: string): boolean {
  try {
    const [payload, signature] = token.split('.');
    if (!payload || !signature) return false;
    
    const expectedSignature = crypto
      .createHmac('sha256', TOKEN_SECRET)
      .update(payload)
      .digest('hex');
      
    if (signature !== expectedSignature) return false;
    
    const decoded = JSON.parse(Buffer.from(payload, 'base64').toString('utf-8'));
    
    // Check expiration (valid for 24 hours)
    if (Date.now() > decoded.exp) return false;
    
    return decoded.username === ADMIN_USERNAME;
  } catch {
    return false;
  }
}

export function generateAdminToken(): string {
  const payload = {
    username: ADMIN_USERNAME,
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

export function checkCredentials(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}
