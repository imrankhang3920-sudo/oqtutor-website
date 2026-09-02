import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  category?: string;
  search?: string;
  onPageChange?: (page: number) => void;
}

export function getBlogPaginationUrl(targetPage: number, category?: string, search?: string): string {
  const params = new URLSearchParams();

  if (category && category.toLowerCase() !== 'all') {
    params.set('category', category);
  }

  if (search && search.trim()) {
    params.set('search', search.trim());
  }

  if (targetPage > 1) {
    params.set('page', targetPage.toString());
  }

  const queryString = params.toString();
  return queryString ? `/blog?${queryString}` : '/blog';
}

export default function BlogPagination({
  currentPage,
  totalPages,
  category = 'All',
  search = '',
  onPageChange,
}: BlogPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  // Calculate page numbers to display with smart ellipsis
  const getPageNumbers = (): (number | string)[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const pageNumbers = getPageNumbers();
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;
  const prevUrl = getBlogPaginationUrl(Math.max(1, currentPage - 1), category, search);
  const nextUrl = getBlogPaginationUrl(Math.min(totalPages, currentPage + 1), category, search);

  const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement>, page: number) => {
    if (onPageChange) {
      e.preventDefault();
      onPageChange(page);
    }
  };

  return (
    <nav aria-label="Blog pagination" className="mt-14 sm:mt-16 mb-4 flex justify-center items-center">
      <div className="flex items-center justify-center gap-1.5 sm:gap-3 flex-wrap max-w-full">
        {/* Previous Button */}
        {hasPrev ? (
          <Link
            href={prevUrl}
            onClick={(e) => handlePageClick(e, currentPage - 1)}
            aria-label="Go to previous page"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/20 hover:shadow-lg transition-all duration-300 group cursor-pointer shrink-0"
          >
            <ChevronLeft className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform" />
          </Link>
        ) : (
          <span
            aria-disabled="true"
            aria-label="Previous page (disabled)"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-foreground/5 text-muted-text/30 border border-card-border/60 cursor-not-allowed select-none shrink-0"
          >
            <ChevronLeft className="h-5 w-5" />
          </span>
        )}

        {/* Page Number Buttons */}
        {pageNumbers.map((pageItem, idx) => {
          if (pageItem === '...') {
            return (
              <span
                key={`ellipsis-${idx}`}
                aria-hidden="true"
                className="w-6 sm:w-8 h-10 sm:h-12 flex items-center justify-center text-muted-text font-bold select-none text-xs sm:text-base shrink-0"
              >
                …
              </span>
            );
          }

          const pageNum = Number(pageItem);
          const isActive = pageNum === currentPage;
          const pageUrl = getBlogPaginationUrl(pageNum, category, search);

          if (isActive) {
            return (
              <span
                key={pageNum}
                aria-current="page"
                aria-label={`Current page, page ${pageNum}`}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-xs sm:text-base bg-primary text-white shadow-lg shadow-primary/30 ring-2 ring-primary/40 select-none cursor-default shrink-0"
              >
                {pageNum}
              </span>
            );
          }

          return (
            <Link
              key={pageNum}
              href={pageUrl}
              onClick={(e) => handlePageClick(e, pageNum)}
              aria-label={`Go to page ${pageNum}`}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-semibold text-xs sm:text-base bg-primary/75 hover:bg-primary text-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer shrink-0"
            >
              {pageNum}
            </Link>
          );
        })}

        {/* Next Button */}
        {hasNext ? (
          <Link
            href={nextUrl}
            onClick={(e) => handlePageClick(e, currentPage + 1)}
            aria-label="Go to next page"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/20 hover:shadow-lg transition-all duration-300 group cursor-pointer shrink-0"
          >
            <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        ) : (
          <span
            aria-disabled="true"
            aria-label="Next page (disabled)"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-foreground/5 text-muted-text/30 border border-card-border/60 cursor-not-allowed select-none shrink-0"
          >
            <ChevronRight className="h-5 w-5" />
          </span>
        )}
      </div>
    </nav>
  );
}
