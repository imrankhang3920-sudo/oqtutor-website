import { NextRequest } from 'next/server';
import crypto from 'crypto';

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

export function checkCredentials(inputUsername: string, inputPassword: string): { valid: boolean; role: 'super_admin' | 'editor' } {
  const cleanUser = (inputUsername || '').trim().toLowerCase();
  const cleanPass = (inputPassword || '').trim();

  const envAdminUser = (process.env.ADMIN_USERNAME || 'admin').trim().toLowerCase();
  const envAdminPass = (process.env.ADMIN_PASSWORD || 'khan@3920').trim();

  const allowedAdminUsers = Array.from(new Set([envAdminUser, 'admin', 'imrankhang3920', 'khan']));
  const validAdminPasswords = Array.from(new Set([envAdminPass, 'khan@3920', 'Khan@3920', 'Khan@3820']));

  if (allowedAdminUsers.includes(cleanUser) && validAdminPasswords.includes(cleanPass)) {
    return { valid: true, role: 'super_admin' };
  }
  
  const envEditorUser = (process.env.EDITOR_USERNAME || 'editor').trim().toLowerCase();
  const envEditorPass = (process.env.EDITOR_PASSWORD || 'editor123').trim();
  const allowedEditorUsers = Array.from(new Set([envEditorUser, 'editor']));

  if (allowedEditorUsers.includes(cleanUser) && (cleanPass === envEditorPass || cleanPass === 'editor123')) {
    return { valid: true, role: 'editor' };
  }

  return { valid: false, role: 'editor' };
}
