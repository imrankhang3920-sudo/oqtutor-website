import { NextRequest, NextResponse } from 'next/server';
import { checkCredentials, generateAdminToken, getAdminUserFromReq } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const user = getAdminUserFromReq(req);
  return NextResponse.json({ authenticated: user !== null, role: user?.role || null, username: user?.username || null });
}

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    const { valid, role } = checkCredentials(username, password);
    
    if (valid) {
      const token = generateAdminToken(username, role);
      const response = NextResponse.json({ 
        success: true, 
        message: `Logged in as ${role}`, 
        role, 
        username 
      });
      
      // Set secure token cookie
      response.cookies.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60, // 24 hours
        path: '/',
      });

      // Set accessible role cookie
      response.cookies.set('admin_role', role, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60,
        path: '/',
      });
      
      return response;
    } else {
      return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request payload' }, { status: 400 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: 'Logged out successfully' });
  
  response.cookies.set('admin_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0,
    path: '/',
  });
  response.cookies.set('admin_role', '', {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0,
    path: '/',
  });
  
  return response;
}
