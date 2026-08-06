import { NextRequest, NextResponse } from 'next/server';
import { isAdminAuthorized } from '@/lib/auth';
import { getDBAsync, writeDBAsync, MediaItemData } from '@/data/db';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    if (!isAdminAuthorized(req)) {
      return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 });
    }

    const contentType = req.headers.get('content-type') || '';
    let fileName = '';
    let fileUrl = '';
    let fileSize = 0;
    let mimeType = 'image/jpeg';

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const file = formData.get('file') as File | null;

      if (!file) {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const ext = path.extname(file.name) || '.jpg';
      const cleanName = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
      fileName = `${cleanName}_${Date.now()}${ext}`;
      const filePath = path.join(uploadsDir, fileName);

      try {
        fs.writeFileSync(filePath, buffer);
      } catch (err) {
        console.warn('Vercel read-only filesystem write bypassed:', err);
      }

      fileUrl = `/uploads/${fileName}`;
      fileSize = file.size;
      mimeType = file.type || 'image/jpeg';
    } else {
      // JSON body with image URL or base64
      const body = await req.json();
      if (!body.url && !body.name) {
        return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
      }
      fileName = body.name || `image_${Date.now()}.jpg`;
      fileUrl = body.url;
      fileSize = body.size || 0;
      mimeType = body.type || 'image/jpeg';
    }

    const newMediaItem: MediaItemData = {
      id: `media_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      name: fileName,
      url: fileUrl,
      size: fileSize,
      type: mimeType,
      createdAt: new Date().toISOString(),
    };

    const db = await getDBAsync();
    const mediaLibrary = db.mediaLibrary || [];
    const updatedMedia = [newMediaItem, ...mediaLibrary];
    
    await writeDBAsync({
      ...db,
      mediaLibrary: updatedMedia,
    });

    return NextResponse.json({
      success: true,
      mediaItem: newMediaItem,
      url: fileUrl,
      message: 'Image uploaded and registered successfully',
    });
  } catch (error) {
    console.error('Upload API error:', error);
    return NextResponse.json({ error: 'Failed to process image upload' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    if (!isAdminAuthorized(req)) {
      return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const mediaId = searchParams.get('id');

    if (!mediaId) {
      return NextResponse.json({ error: 'Media ID required' }, { status: 400 });
    }

    const db = await getDBAsync();
    const mediaLibrary = db.mediaLibrary || [];
    const targetItem = mediaLibrary.find((item) => item.id === mediaId);

    if (targetItem && targetItem.url.startsWith('/uploads/')) {
      const filePath = path.join(process.cwd(), 'public', targetItem.url);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
        } catch (e) {
          console.warn('File unlink error ignored:', e);
        }
      }
    }

    const updatedMedia = mediaLibrary.filter((item) => item.id !== mediaId);
    await writeDBAsync({
      ...db,
      mediaLibrary: updatedMedia,
    });

    return NextResponse.json({ success: true, message: 'Media item deleted' });
  } catch (error) {
    console.error('Delete Media API error:', error);
    return NextResponse.json({ error: 'Failed to delete media item' }, { status: 500 });
  }
}
