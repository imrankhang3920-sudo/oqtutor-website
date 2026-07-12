import { NextRequest, NextResponse } from 'next/server';
import { checkCredentials, generateAdminToken, isAdminAuthorized } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const authorized = isAdminAuthorized(req);
  return NextResponse.json({ authenticated: authorized });
}

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    
    if (checkCredentials(username, password)) {
      const token = generateAdminToken();
      const response = NextResponse.json({ success: true, message: 'Logged in successfully' });
      
      // Set secure cookie
      response.cookies.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60, // 24 hours in seconds
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
  
  // Clear the cookie by setting maxAge to 0
  response.cookies.set('admin_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0,
    path: '/',
  });
  
  return response;
}
