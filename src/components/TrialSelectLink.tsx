'use client';

import React from 'react';
import Link from 'next/link';
import { saveTrialSelection, CourseSlug, PlanSlug } from '@/lib/selectionState';

interface TrialSelectLinkProps {
  href?: string;
  plan?: string;
  planSlug?: PlanSlug;
  course?: string;
  courseSlug?: CourseSlug;
  gender?: 'male' | 'female';
  className?: string;
  children: React.ReactNode;
}

/**
 * Clean navigation link to /book-free-trial.
 * Emits pure, clean URL with NO query parameters in rendered HTML to prevent search crawler duplicates.
 * Stores selection state (plan, course, gender) in sessionStorage for immediate form pre-selection.
 */
export default function TrialSelectLink({
  href = '/book-free-trial',
  plan,
  planSlug,
  course,
  courseSlug,
  gender,
  className,
  children,
}: TrialSelectLinkProps) {
  const handleClick = () => {
    saveTrialSelection({
      plan,
      planSlug,
      course,
      courseSlug,
      gender,
    });
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

