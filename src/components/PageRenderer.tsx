'use client';

import React from 'react';
import { PageBlock } from '@/data/db';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PageRenderer({ blocks }: { blocks: PageBlock[] }) {
  if (!blocks || blocks.length === 0) {
    return (
      <div className="py-12 text-center text-muted-text">
        <p>This page has no content yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4 sm:px-6">
      {blocks.map((block) => {
        const alignClass =
          block.content.align === 'center'
            ? 'text-center'
            : block.content.align === 'right'
            ? 'text-right'
            : 'text-left';

        switch (block.type) {
          case 'heading': {
            const level = block.content.level || 2;
            if (level === 1) {
              return (
                <h1
                  key={block.id}
                  className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight ${alignClass}`}
                >
                  {block.content.text}
                </h1>
              );
            }
            if (level === 3) {
              return (
                <h3
                  key={block.id}
                  className={`text-xl sm:text-2xl font-bold text-foreground tracking-tight ${alignClass}`}
                >
                  {block.content.text}
                </h3>
              );
            }
            return (
              <h2
                key={block.id}
                className={`text-2xl sm:text-3xl font-bold text-foreground tracking-tight ${alignClass}`}
              >
                {block.content.text}
              </h2>
            );
          }

          case 'paragraph': {
            return (
              <div
                key={block.id}
                className={`prose prose-lg dark:prose-invert max-w-none text-foreground/90 leading-relaxed [&_a]:text-primary [&_a]:font-semibold [&_a]:underline hover:[&_a]:text-primary-hover ${alignClass}`}
                dangerouslySetInnerHTML={{ __html: block.content.text || '' }}
              />
            );
          }

          case 'image': {
            if (!block.content.imageUrl) return null;
            return (
              <figure key={block.id} className={`space-y-2 ${alignClass}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-card-border">
                  <img
                    src={block.content.imageUrl}
                    alt={block.content.altText || 'Page image'}
                    className="w-full h-auto object-cover max-h-[550px]"
                  />
                </div>
                {block.content.caption && (
                  <figcaption className="text-xs text-muted-text italic text-center">
                    {block.content.caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          case 'button': {
            if (!block.content.buttonText || !block.content.buttonUrl) return null;
            const style = block.content.buttonStyle || 'primary';
            const btnClass =
              style === 'secondary'
                ? 'bg-secondary text-white hover:bg-secondary/90 shadow-secondary/20'
                : style === 'outline'
                ? 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                : 'bg-primary text-white hover:bg-primary/90 shadow-primary/20';

            return (
              <div key={block.id} className={`my-4 ${alignClass}`}>
                <Link
                  href={block.content.buttonUrl}
                  className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-md ${btnClass}`}
                >
                  <span>{block.content.buttonText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          }

          case 'cta_banner': {
            return (
              <div
                key={block.id}
                className="my-10 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-primary/10 via-card-bg to-secondary/10 border border-primary/20 text-center shadow-xl relative overflow-hidden"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                  {block.content.text}
                </h3>
                {block.content.buttonText && block.content.buttonUrl && (
                  <Link
                    href={block.content.buttonUrl}
                    className="inline-flex items-center space-x-2 px-8 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-sm"
                  >
                    <span>{block.content.buttonText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            );
          }

          case 'html': {
            if (!block.content.html) return null;
            return (
              <div
                key={block.id}
                className="my-6"
                dangerouslySetInnerHTML={{ __html: block.content.html }}
              />
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
