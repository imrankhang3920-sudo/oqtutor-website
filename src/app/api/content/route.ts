import { NextRequest, NextResponse } from 'next/server';
import { getDBAsync, writeDBAsync } from '@/data/db';
import { isAdminAuthorized } from '@/lib/auth';

export async function GET() {
  try {
    const data = await getDBAsync();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!isAdminAuthorized(req)) {
      return NextResponse.json({ error: 'Unauthorized access to CMS API' }, { status: 401 });
    }
    
    const body = await req.json();
    await writeDBAsync(body);
    return NextResponse.json({ success: true, data: body, message: 'Data updated successfully across cloud & local storage' });
  } catch (error) {
    console.error('API /api/content error:', error);
    return NextResponse.json({ error: 'Failed to write data' }, { status: 500 });
  }
}
