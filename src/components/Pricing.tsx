'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PricingData } from '@/data/db';

export default function Pricing({ data }: { data: PricingData[] }) {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-foreground/[0.01] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Affordable Plans</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Simple, Transparent Pricing
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-muted-text">
            Choose the frequency that fits your schedule and learning goals. Families get special discounts for multiple enrollments.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {data.map((plan) => {
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: plan.isPopular ? 0.1 : 0 }}
                className={`glass rounded-3xl border-card-border p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular 
                    ? 'ring-2 ring-primary bg-primary/[0.03] md:scale-105 shadow-xl shadow-primary/10 md:z-10' 
                    : 'hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.title}</h3>
                  <div className="flex items-baseline mt-4 mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-foreground">${plan.price}</span>
                    <span className="text-sm text-muted-text ml-2">/ {plan.frequency}</span>
                  </div>
                  <div className="h-px bg-card-border w-full mb-6" />

                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm text-foreground/80">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <a
                    href="#contact"
                    className={`flex items-center justify-center w-full py-3.5 px-6 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                      plan.isPopular
                        ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30'
                        : 'bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border'
                    }`}
                  >
                    {plan.ctaText}
                  </a>
                  <p className="text-[10px] text-center text-muted-text mt-3">Cancel anytime. No registration fee.</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
