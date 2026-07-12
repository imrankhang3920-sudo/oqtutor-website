import { NextRequest, NextResponse } from 'next/server';
import { readDB, writeDB } from '@/data/db';
import { isAdminAuthorized } from '@/lib/auth';

export async function GET() {
  try {
    const data = readDB();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!isAdminAuthorized(req)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await req.json();
    writeDB(body);
    return NextResponse.json({ success: true, data: body });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to write data' }, { status: 500 });
  }
}
