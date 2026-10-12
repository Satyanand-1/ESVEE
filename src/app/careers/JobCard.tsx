"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Briefcase, Building, ChevronDown } from 'lucide-react';
import type { JobListing } from '@/content/careers';

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display font-semibold text-ink mb-2">{title}</h4>
      <ul className="list-disc pl-5 space-y-1.5 marker:text-primary">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function JobCard({ job }: { job: JobListing }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const panelId = `job-panel-${job.id}`;

  return (
    <div className={`card overflow-hidden transition-colors duration-300 ${isExpanded ? 'border-primary/40' : 'hover:border-primary/30'}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        className="w-full text-left p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-surface-alt/70 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary"
      >
        <div>
          <h3 className="font-display text-xl font-bold text-ink">{job.title}</h3>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-2 text-sm text-muted">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> {job.location}</span>
            <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-primary" /> {job.type}</span>
            <span className="flex items-center gap-1.5"><Building className="w-4 h-4 text-primary" /> {job.department}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-primary text-sm font-semibold shrink-0">
          <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="p-6 border-t border-line bg-surface-alt/60 space-y-6">
              <p className="leading-relaxed">{job.description}</p>

              <DetailList title="Responsibilities" items={job.responsibilities} />
              <DetailList title="Requirements" items={job.requirements} />
              {job.preferredQualifications.length > 0 && (
                <DetailList title="Preferred Qualifications" items={job.preferredQualifications} />
              )}

              <div className="rounded-xl border border-line bg-white p-4">
                <p className="font-display font-semibold text-ink">How to Apply</p>
                <p className="mt-1">
                  Send your resume to{' '}
                  <a
                    href={`mailto:${job.applicationEmail}?subject=${encodeURIComponent(`Application - ${job.title}`)}`}
                    className="text-primary hover:underline font-semibold"
                  >
                    {job.applicationEmail}
                  </a>{' '}
                  with the subject line: <span className="font-semibold text-ink">Application - {job.title}</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
