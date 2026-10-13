import { Metadata } from 'next';
import Image from 'next/image';
import { careersBenefits, jobListings } from '@/content/careers';
import ContactCTA from '@/components/ContactCTA';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';
import JobCard from './JobCard';
import CandidateForm from './CandidateForm';

import PageHeaderHero from '@/components/ui/page-header-hero';
import { ArrowRight, Briefcase, Globe2, TrendingUp, Users, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: { absolute: 'Technology Consulting Careers and Opportunities | Esvee' },
  description: 'Esvee works with technology professionals across consulting assignments, project teams, and client opportunities.',
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
        title="Build your next opportunity with"
        highlightTitle="Esvee"
        description="Esvee works with technology professionals across consulting assignments, project teams, and client opportunities. We are interested in people who communicate clearly, understand their field, and can contribute effectively in real delivery environments."
        align="center"
      />

      {/* How it works */}
      <section className="py-14 md:py-16 bg-white border-b border-line">
        <div className="section-container max-w-4xl text-center">
          <RevealOnScroll>
            <p className="text-lg leading-relaxed mb-8">
              Share your experience and availability with our team. When a suitable client requirement becomes available, we will discuss the role, engagement terms, work arrangement, and submission process with you. Submitting a resume does not guarantee an assignment or employment offer.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#submit-resume" className="btn-primary group">
                Submit Your Resume
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#current-openings" className="btn-secondary">
                View Current Openings
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

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
                  label="Working with Esvee"
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
      <section id="current-openings" className="section-padding bg-surface-alt border-y border-line scroll-mt-20">
        <div className="section-container max-w-4xl">
          <RevealOnScroll>
            <SectionHeader
              label="Open Roles"
              title="Current Openings"
              description="Active roles we are recruiting for now. Each listing shows the date it was posted."
              className="mb-10"
            />
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
              <p className="text-lg">
                There are no open positions at this time. You can still share your resume below for future requirements.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* General Resume Submission */}
      <section id="submit-resume" className="section-padding bg-white scroll-mt-20">
        <div className="section-container max-w-4xl">
          <RevealOnScroll>
            <SectionHeader
              label="General Submission"
              title="Share your resume"
              description="Not applying for a specific opening? Tell us about your experience and availability, and we will contact you when a suitable client requirement comes up."
              className="mb-10"
            />
          </RevealOnScroll>
          <RevealOnScroll>
            <CandidateForm />
          </RevealOnScroll>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
