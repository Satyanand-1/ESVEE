import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="section-container max-w-6xl">
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-primary-soft via-white to-accent-soft p-8 sm:p-10 md:p-14 shadow-card">
            <div aria-hidden="true" className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-cyan-200/50 blur-3xl animate-float-slow" />
            <div aria-hidden="true" className="absolute -bottom-28 -left-16 w-72 h-72 rounded-full bg-orange-200/40 blur-3xl animate-float-slow [animation-delay:-4s]" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl leading-tight mb-3">
                  Need additional technology expertise?
                </h2>
                <p className="text-body text-base sm:text-lg leading-relaxed">
                  Tell us about the requirement, project, or delivery challenge. We will discuss the skills, engagement model, and next steps that make sense for your organization.
                </p>
              </div>

              <div className="shrink-0">
                <Link href="/contact" className="btn-primary group w-full md:w-auto px-7 py-3.5">
                  Talk to Our Team
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
