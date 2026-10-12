import { Metadata } from 'next';
import Image from 'next/image';
import { careersBenefits, jobListings } from '@/content/careers';
import ContactCTA from '@/components/ContactCTA';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';
import JobCard from './JobCard';

import PageHeaderHero from '@/components/ui/page-header-hero';
import { Briefcase, Globe2, TrendingUp, Users, Layers, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join our team at Esvee Technologies',
};

const benefitIcons = [Globe2, TrendingUp, Users, Layers];

export default function CareersPage() {
  const openings = jobListings.filter((job) => job.status === 'active');

  return (
    <div className="flex flex-col">
      {/* Animated Shader Hero Section */}
      <PageHeaderHero
        badge="Career Opportunities"
        badgeIcon={<Briefcase className="w-3.5 h-3.5 text-cyan-400" />}
        title="Join Our"
        highlightTitle="Team"
        description="Help us build the future of technology. We are always looking for passionate and talented individuals to join us in engineering impactful enterprise solutions."
        align="center"
      />

      {/* Why Work Here */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <RevealOnScroll>
              <div className="relative">
                <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-soft to-primary-soft" />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white shadow-card-hover group">
                  <Image
                    src="/images/careers-team.jpg"
                    alt="A team gathered for a discussion in an open office"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                </div>
              </div>
            </RevealOnScroll>

            <div>
              <RevealOnScroll>
                <SectionHeader
                  centered={false}
                  label="Life at Esvee"
                  title="Why Work Here"
                  className="mb-8"
                />
              </RevealOnScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                {careersBenefits.map((benefit, index) => {
                  const Icon = benefitIcons[index % benefitIcons.length];
                  return (
                    <RevealOnScroll key={benefit.title} delay={index * 80}>
                      <div className="group">
                        <div className="icon-tile mb-4 group-hover:bg-primary group-hover:text-white">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-display text-lg font-bold text-ink mb-1.5">{benefit.title}</h3>
                        <p className="text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </RevealOnScroll>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-padding bg-surface-alt border-t border-line">
        <div className="section-container max-w-4xl">
          <RevealOnScroll>
            <SectionHeader
              label="Open Roles"
              title="Current Openings"
              className="mb-8"
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary-soft px-5 py-4 mb-8 text-sm text-primary-dark">
              <Info className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <p>
                These positions are based on our current service areas. Please contact us to confirm availability before applying.
              </p>
            </div>
          </RevealOnScroll>

          {openings.length > 0 ? (
            <div className="space-y-4">
              {openings.map((job, index) => (
                <RevealOnScroll key={job.id} delay={index * 80}>
                  <JobCard job={job} />
                </RevealOnScroll>
              ))}
            </div>
          ) : (
            <div className="card text-center py-12 px-6">
              <p className="text-lg">There are no open positions at this time. Please check back later.</p>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
