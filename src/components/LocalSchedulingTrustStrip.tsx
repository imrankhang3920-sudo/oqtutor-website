import React from 'react';
import { Clock, Users, ShieldCheck } from 'lucide-react';

interface LocalSchedulingTrustStripProps {
  timezoneText: string;
  tutorText?: string;
  trialText?: string;
  className?: string;
}

export default function LocalSchedulingTrustStrip({
  timezoneText,
  tutorText = "Choice of Ijazah-Certified Male or Female Quran Tutors",
  trialText = "100% Free 1-on-1 Assessment & Trial Class",
  className = "",
}: LocalSchedulingTrustStripProps) {
  return (
    <div className={`relative z-20 -mt-6 sm:-mt-8 mb-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="glass p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border border-card-border shadow-xl bg-card-bg/85 backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-card-border/60">
          {/* Badge 1: Local Timezone Alignment */}
          <div className="flex items-center space-x-3.5 p-1 md:px-3">
            <div className="p-2.5 rounded-2xl bg-primary/10 text-primary shrink-0">
              <Clock className="h-5 w-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text block">
                Local Scheduling
              </span>
              <span className="text-xs sm:text-sm font-bold text-foreground leading-snug block">
                {timezoneText}
              </span>
            </div>
          </div>

          {/* Badge 2: Tutor Selection */}
          <div className="flex items-center space-x-3.5 p-1 pt-4 md:pt-1 md:px-4">
            <div className="p-2.5 rounded-2xl bg-secondary/10 text-secondary shrink-0">
              <Users className="h-5 w-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text block">
                Tutor Selection
              </span>
              <span className="text-xs sm:text-sm font-bold text-foreground leading-snug block">
                {tutorText}
              </span>
            </div>
          </div>

          {/* Badge 3: Risk-Free Start */}
          <div className="flex items-center space-x-3.5 p-1 pt-4 md:pt-1 md:px-4">
            <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text block">
                Risk-Free Start
              </span>
              <span className="text-xs sm:text-sm font-bold text-foreground leading-snug block">
                {trialText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
