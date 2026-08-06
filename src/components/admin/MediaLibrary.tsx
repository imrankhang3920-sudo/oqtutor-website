'use client';

import React, { useState } from 'react';
import { MediaItemData } from '@/data/db';
import { Upload, Trash2, Copy, Check, Search, Image as ImageIcon, ExternalLink } from 'lucide-react';

interface MediaLibraryProps {
  mediaList: MediaItemData[];
  onMediaUpdated: (updatedMedia: MediaItemData[]) => void;
  onSelectImage?: (url: string) => void;
}

export default function MediaLibrary({
  mediaList,
  onMediaUpdated,
  onSelectImage,
}: MediaLibraryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [uploading, setUploading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const filteredMedia = mediaList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setUploadError(null);

    const formData = new FormData();
    formData.append('file', files[0]);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        if (data.mediaItem) {
          onMediaUpdated([data.mediaItem, ...mediaList]);
          if (onSelectImage) {
            onSelectImage(data.url);
          }
        }
      } else {
        const err = await res.json();
        setUploadError(err.error || 'Failed to upload image');
      }
    } catch {
      setUploadError('Network error during file upload');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this media item?')) return;

    try {
      const res = await fetch(`/api/upload?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        const updated = mediaList.filter((item) => item.id !== id);
        onMediaUpdated(updated);
      }
    } catch {
      alert('Failed to delete media item');
    }
  };

  const copyToClipboard = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Upload Zone & Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-card-bg p-4 rounded-2xl border border-card-border shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-muted-text" />
          <input
            type="text"
            placeholder="Search media by filename..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm bg-background border border-card-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          />
        </div>

        <label className="flex items-center justify-center space-x-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all cursor-pointer shadow-md shadow-primary/20 shrink-0">
          <Upload className="h-4 w-4" />
          <span>{uploading ? 'Uploading...' : 'Upload Image'}</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>
      </div>

      {uploadError && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-600 rounded-xl text-xs">
          {uploadError}
        </div>
      )}

      {/* Media Grid */}
      {filteredMedia.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-card-border rounded-2xl bg-background/50">
          <ImageIcon className="mx-auto h-12 w-12 text-muted-text/50 mb-3" />
          <p className="text-sm font-medium text-muted-text">No images in Media Library yet.</p>
          <p className="text-xs text-muted-text/70 mt-1">Upload images to use them across your pages and header/footer.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="group relative bg-card-bg border border-card-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="aspect-square bg-foreground/5 relative overflow-hidden flex items-center justify-center">
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Media Info & Actions */}
              <div className="p-2.5 bg-card-bg border-t border-card-border">
                <p className="text-xs font-medium text-foreground truncate" title={item.name}>
                  {item.name}
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-card-border/50">
                  <div className="flex items-center space-x-1">
                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.url, item.id)}
                      className="p-1 text-muted-text hover:text-primary rounded hover:bg-foreground/5 transition-colors"
                      title="Copy URL"
                    >
                      {copiedId === item.id ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 text-muted-text hover:text-primary rounded hover:bg-foreground/5 transition-colors"
                      title="View full image"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {onSelectImage ? (
                    <button
                      type="button"
                      onClick={() => onSelectImage(item.url)}
                      className="text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded transition-colors"
                    >
                      Select
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="p-1 text-muted-text hover:text-red-500 rounded hover:bg-foreground/5 transition-colors"
                      title="Delete image"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
