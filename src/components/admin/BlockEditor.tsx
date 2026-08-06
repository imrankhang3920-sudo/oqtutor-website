'use client';

import React, { useState } from 'react';
import { PageBlock, MediaItemData } from '@/data/db';
import ImagePickerModal from './ImagePickerModal';
import {
  Type,
  Heading1,
  Image as ImageIcon,
  MousePointerClick,
  Layout,
  Grid,
  Code,
  ArrowUp,
  ArrowDown,
  Trash2,
  Plus,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from 'lucide-react';

interface BlockEditorProps {
  blocks: PageBlock[];
  onChange: (updatedBlocks: PageBlock[]) => void;
  mediaList: MediaItemData[];
  onMediaUpdated: (updatedMedia: MediaItemData[]) => void;
}

export default function BlockEditor({
  blocks,
  onChange,
  mediaList,
  onMediaUpdated,
}: BlockEditorProps) {
  const [pickerBlockId, setPickerBlockId] = useState<string | null>(null);

  const addBlock = (type: PageBlock['type']) => {
    const newBlock: PageBlock = {
      id: `block_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      type,
      content: {
        text: type === 'heading' ? 'New Heading' : type === 'paragraph' ? 'Enter paragraph content here...' : '',
        level: type === 'heading' ? 2 : undefined,
        imageUrl: type === 'image' ? '/logo.jpg' : undefined,
        buttonText: type === 'button' ? 'Click Here' : type === 'cta_banner' ? 'Get Started' : undefined,
        buttonUrl: type === 'button' ? '/book-free-trial' : type === 'cta_banner' ? '/book-free-trial' : undefined,
        buttonStyle: 'primary',
        align: 'left',
        items: type === 'features_grid' ? [
          { title: 'Certified Tutors', description: 'Experienced male & female Quran teachers.' },
          { title: 'Flexible Schedule', description: 'Choose class times that suit your timezone.' },
        ] : undefined,
      },
    };
    onChange([...blocks, newBlock]);
  };

  const updateBlockContent = (id: string, newContent: Partial<PageBlock['content']>) => {
    const updated = blocks.map((b) => {
      if (b.id === id) {
        return {
          ...b,
          content: { ...b.content, ...newContent },
        };
      }
      return b;
    });
    onChange(updated);
  };

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    const newBlocks = [...blocks];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newBlocks.length) return;
    const temp = newBlocks[index];
    newBlocks[index] = newBlocks[targetIndex];
    newBlocks[targetIndex] = temp;
    onChange(newBlocks);
  };

  const removeBlock = (id: string) => {
    onChange(blocks.filter((b) => b.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Block List */}
      <div className="space-y-4">
        {blocks.map((block, index) => (
          <div
            key={block.id}
            className="group relative bg-card-bg border border-card-border rounded-2xl p-4 sm:p-5 shadow-sm transition-all hover:border-primary/40"
          >
            {/* Block Controls Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-card-border/60 text-xs text-muted-text">
              <span className="font-semibold uppercase tracking-wider text-primary flex items-center space-x-1.5">
                <span className="px-2 py-0.5 bg-primary/10 rounded-md">Block {index + 1}: {block.type}</span>
              </span>

              <div className="flex items-center space-x-1">
                <button
                  type="button"
                  onClick={() => moveBlock(index, 'up')}
                  disabled={index === 0}
                  className="p-1 hover:text-primary disabled:opacity-30 rounded hover:bg-foreground/5 transition-colors"
                  title="Move Up"
                >
                  <ArrowUp className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => moveBlock(index, 'down')}
                  disabled={index === blocks.length - 1}
                  className="p-1 hover:text-primary disabled:opacity-30 rounded hover:bg-foreground/5 transition-colors"
                  title="Move Down"
                >
                  <ArrowDown className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => removeBlock(block.id)}
                  className="p-1 text-red-500 hover:text-red-600 rounded hover:bg-red-500/10 transition-colors ml-2"
                  title="Delete Block"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Heading Block */}
            {block.type === 'heading' && (
              <div className="space-y-3">
                <div className="flex gap-2 items-center">
                  <select
                    value={block.content.level || 2}
                    onChange={(e) => updateBlockContent(block.id, { level: Number(e.target.value) as 1 | 2 | 3 })}
                    className="px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg text-foreground font-semibold"
                  >
                    <option value={1}>H1 (Large)</option>
                    <option value={2}>H2 (Medium)</option>
                    <option value={3}>H3 (Small)</option>
                  </select>

                  <div className="flex border border-card-border rounded-lg overflow-hidden bg-background">
                    <button
                      type="button"
                      onClick={() => updateBlockContent(block.id, { align: 'left' })}
                      className={`p-1.5 text-xs ${block.content.align === 'left' ? 'bg-primary text-white' : 'text-muted-text hover:text-foreground'}`}
                    >
                      <AlignLeft className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => updateBlockContent(block.id, { align: 'center' })}
                      className={`p-1.5 text-xs ${block.content.align === 'center' ? 'bg-primary text-white' : 'text-muted-text hover:text-foreground'}`}
                    >
                      <AlignCenter className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => updateBlockContent(block.id, { align: 'right' })}
                      className={`p-1.5 text-xs ${block.content.align === 'right' ? 'bg-primary text-white' : 'text-muted-text hover:text-foreground'}`}
                    >
                      <AlignRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <input
                  type="text"
                  value={block.content.text || ''}
                  onChange={(e) => updateBlockContent(block.id, { text: e.target.value })}
                  placeholder="Enter heading text..."
                  className="w-full px-3 py-2 text-sm bg-background border border-card-border rounded-xl font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            {/* Paragraph Block */}
            {block.type === 'paragraph' && (
              <div className="space-y-2">
                <textarea
                  rows={4}
                  value={block.content.text || ''}
                  onChange={(e) => updateBlockContent(block.id, { text: e.target.value })}
                  placeholder="Enter paragraph text (HTML tags like <a>, <strong>, <em> allowed)..."
                  className="w-full p-3 text-sm bg-background border border-card-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                />
              </div>
            )}

            {/* Image Block */}
            {block.type === 'image' && (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  {block.content.imageUrl ? (
                    <img
                      src={block.content.imageUrl}
                      alt={block.content.altText || 'Block Image'}
                      className="h-16 w-24 object-cover rounded-lg border border-card-border"
                    />
                  ) : (
                    <div className="h-16 w-24 bg-foreground/5 rounded-lg border border-card-border flex items-center justify-center text-muted-text">
                      <ImageIcon className="h-6 w-6" />
                    </div>
                  )}

                  <div className="flex-1 space-y-2">
                    <input
                      type="text"
                      value={block.content.imageUrl || ''}
                      onChange={(e) => updateBlockContent(block.id, { imageUrl: e.target.value })}
                      placeholder="Image URL (e.g. /uploads/image.jpg)"
                      className="w-full px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg text-foreground"
                    />

                    <button
                      type="button"
                      onClick={() => setPickerBlockId(block.id)}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      Choose from Media Library
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={block.content.altText || ''}
                    onChange={(e) => updateBlockContent(block.id, { altText: e.target.value })}
                    placeholder="Alt Text (for SEO)"
                    className="w-full px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg text-foreground"
                  />
                  <input
                    type="text"
                    value={block.content.caption || ''}
                    onChange={(e) => updateBlockContent(block.id, { caption: e.target.value })}
                    placeholder="Image Caption (optional)"
                    className="w-full px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg text-foreground"
                  />
                </div>
              </div>
            )}

            {/* Button Block */}
            {block.type === 'button' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] text-muted-text font-bold uppercase">Button Text</label>
                  <input
                    type="text"
                    value={block.content.buttonText || ''}
                    onChange={(e) => updateBlockContent(block.id, { buttonText: e.target.value })}
                    placeholder="e.g. Book Free Trial"
                    className="w-full px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg font-semibold text-foreground"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-muted-text font-bold uppercase">Target Link URL</label>
                  <input
                    type="text"
                    value={block.content.buttonUrl || ''}
                    onChange={(e) => updateBlockContent(block.id, { buttonUrl: e.target.value })}
                    placeholder="e.g. /book-free-trial"
                    className="w-full px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg text-foreground"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-muted-text font-bold uppercase">Button Style</label>
                  <select
                    value={block.content.buttonStyle || 'primary'}
                    onChange={(e) => updateBlockContent(block.id, { buttonStyle: e.target.value as any })}
                    className="w-full px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg text-foreground"
                  >
                    <option value="primary">Primary Accent</option>
                    <option value="secondary">Secondary Dark</option>
                    <option value="outline">Border Outline</option>
                  </select>
                </div>
              </div>
            )}

            {/* CTA Banner Block */}
            {block.type === 'cta_banner' && (
              <div className="space-y-3">
                <input
                  type="text"
                  value={block.content.text || ''}
                  onChange={(e) => updateBlockContent(block.id, { text: e.target.value })}
                  placeholder="CTA Title (e.g. Ready to start your Quran journey?)"
                  className="w-full px-3 py-1.5 text-sm bg-background border border-card-border rounded-lg font-bold text-foreground"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={block.content.buttonText || ''}
                    onChange={(e) => updateBlockContent(block.id, { buttonText: e.target.value })}
                    placeholder="Button Text"
                    className="w-full px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg text-foreground"
                  />
                  <input
                    type="text"
                    value={block.content.buttonUrl || ''}
                    onChange={(e) => updateBlockContent(block.id, { buttonUrl: e.target.value })}
                    placeholder="Button Target URL"
                    className="w-full px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg text-foreground"
                  />
                </div>
              </div>
            )}

            {/* HTML Block */}
            {block.type === 'html' && (
              <div>
                <textarea
                  rows={4}
                  value={block.content.html || ''}
                  onChange={(e) => updateBlockContent(block.id, { html: e.target.value })}
                  placeholder="Paste raw HTML or iframe code here..."
                  className="w-full p-3 text-xs bg-background border border-card-border rounded-xl text-foreground font-mono"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Block Bar */}
      <div className="bg-background/80 border-2 border-dashed border-card-border rounded-2xl p-4 text-center">
        <p className="text-xs font-semibold text-muted-text mb-3">Add New Content Block</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => addBlock('heading')}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-card-bg hover:bg-primary/10 border border-card-border text-xs font-semibold rounded-xl text-foreground transition-all"
          >
            <Heading1 className="h-3.5 w-3.5 text-primary" />
            <span>Heading</span>
          </button>

          <button
            type="button"
            onClick={() => addBlock('paragraph')}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-card-bg hover:bg-primary/10 border border-card-border text-xs font-semibold rounded-xl text-foreground transition-all"
          >
            <Type className="h-3.5 w-3.5 text-primary" />
            <span>Paragraph</span>
          </button>

          <button
            type="button"
            onClick={() => addBlock('image')}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-card-bg hover:bg-primary/10 border border-card-border text-xs font-semibold rounded-xl text-foreground transition-all"
          >
            <ImageIcon className="h-3.5 w-3.5 text-primary" />
            <span>Image</span>
          </button>

          <button
            type="button"
            onClick={() => addBlock('button')}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-card-bg hover:bg-primary/10 border border-card-border text-xs font-semibold rounded-xl text-foreground transition-all"
          >
            <MousePointerClick className="h-3.5 w-3.5 text-primary" />
            <span>Button</span>
          </button>

          <button
            type="button"
            onClick={() => addBlock('cta_banner')}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-card-bg hover:bg-primary/10 border border-card-border text-xs font-semibold rounded-xl text-foreground transition-all"
          >
            <Layout className="h-3.5 w-3.5 text-primary" />
            <span>CTA Banner</span>
          </button>

          <button
            type="button"
            onClick={() => addBlock('html')}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-card-bg hover:bg-primary/10 border border-card-border text-xs font-semibold rounded-xl text-foreground transition-all"
          >
            <Code className="h-3.5 w-3.5 text-primary" />
            <span>Embed HTML</span>
          </button>
        </div>
      </div>

      {/* Image Picker Modal */}
      <ImagePickerModal
        isOpen={pickerBlockId !== null}
        onClose={() => setPickerBlockId(null)}
        onSelectImage={(url) => {
          if (pickerBlockId) {
            updateBlockContent(pickerBlockId, { imageUrl: url });
          }
        }}
        mediaList={mediaList}
        onMediaUpdated={onMediaUpdated}
      />
    </div>
  );
}
