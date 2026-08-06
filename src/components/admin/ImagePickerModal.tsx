'use client';

import React from 'react';
import { MediaItemData } from '@/data/db';
import MediaLibrary from './MediaLibrary';
import { X, Image as ImageIcon } from 'lucide-react';

interface ImagePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectImage: (url: string) => void;
  mediaList: MediaItemData[];
  onMediaUpdated: (updatedMedia: MediaItemData[]) => void;
}

export default function ImagePickerModal({
  isOpen,
  onClose,
  onSelectImage,
  mediaList,
  onMediaUpdated,
}: ImagePickerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-background border border-card-border rounded-3xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-card-border flex items-center justify-between bg-card-bg">
          <div className="flex items-center space-x-2">
            <ImageIcon className="h-5 w-5 text-primary" />
            <h3 className="text-base font-bold text-foreground">Select or Upload Image</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-foreground/10 text-muted-text hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <MediaLibrary
            mediaList={mediaList}
            onMediaUpdated={onMediaUpdated}
            onSelectImage={(url) => {
              onSelectImage(url);
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
}
