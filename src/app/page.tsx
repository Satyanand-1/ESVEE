import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { company } from '@/content/company';
import { capabilities } from '@/content/services';
import { ContactCTA } from '@/components/ContactCTA';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';
import ShaderHero from '@/components/ui/hero';
import { CinematicLogoCloud } from '@/components/ui/cinematic-logo-cloud';
import { Services3DCarousel } from '@/components/ui/services-3d-carousel';
import {
  ArrowRight,
  Building2,
  Globe2,
  Users,
  UserCheck,
  UsersRound,
  Workflow,
  SearchCheck,
  BadgeCheck,
  SlidersHorizontal,
  MessagesSquare,
  HeartPulse,
  Users2,
  HeadphonesIcon,
  Truck,
  Shield,
} from 'lucide-react';

import { clientsAndPartners } from '@/content/clients';

export const metadata: Metadata = {
  title: { absolute: 'Esvee Technologies | Technology Consulting and Workforce Solutions' },
  description: 'Esvee helps organizations move technology initiatives forward with experienced consultants, flexible delivery teams, and practical technology solutions.',
};

const clientBrands = clientsAndPartners.map((c) => ({
  name: c.name,
  logo: c.logo,
}));

const supportModels = [
  {
    title: 'Technology Consultants',
    icon: UserCheck,
    desc: 'Experienced professionals who can join your team and contribute to specific technology initiatives.',
  },
  {
    title: 'Project and Team Augmentation',
    icon: UsersRound,
    desc: 'Flexible support when you need additional skills, delivery capacity, or an extended project team.',
  },
  {
    title: 'Technology Consulting and Delivery',
    icon: Workflow,
    desc: 'Practical support from planning and architecture through implementation, testing, and ongoing improvement.',
  },
];

const industries = [
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'HR Management', icon: Users2 },
  { name: 'Customer Management', icon: HeadphonesIcon },
  { name: 'Logistics', icon: Truck },
  { name: 'Insurance', icon: Shield },
];

const reasons = [
  {
    title: 'Requirement Understanding',
    icon: SearchCheck,
    desc: 'We take time to understand the work, environment, expectations, and practical constraints before presenting a consultant or delivery approach.',
  },
  {
    title: 'Relevant Professionals',
    icon: BadgeCheck,
    desc: 'We focus on people whose experience aligns with the actual requirement, not only the keywords in a job description.',
  },
  {
    title: 'Flexible Engagement',
    icon: SlidersHorizontal,
    desc: 'Engagements can support an individual requirement, an extended team, or a defined technology initiative.',
  },
  {
    title: 'Dependable Communication',
    icon: MessagesSquare,
    desc: 'Clients and partners receive clear updates, realistic expectations, and consistent follow-through throughout the engagement.',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* A) MAIN SHADER HERO SECTION (Mesh Gradient & Dynamic Interactive Shaders) */}
      <ShaderHero />

      {/* B) HOW WE SUPPORT CLIENTS */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="How We Support Clients"
              title="Flexible support for real technology needs"
              description="Some clients need one experienced consultant. Others need additional capacity across a project or support delivering an initiative from planning through implementation. Esvee adapts the engagement to the work."
              className="mb-14"
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportModels.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 100} className="h-full">
                <div className="card card-hover group h-full p-8">
                  <div className="icon-tile mb-5 group-hover:bg-primary group-hover:text-white">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink mb-2">{item.title}</h3>
                  <p className="leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* C) COMPANY INTRO */}
      <section className="section-padding bg-white border-t border-line">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <RevealOnScroll>
              <div>
                <span className="eyebrow mb-4">
                  <Building2 className="w-4 h-4" />
                  About {company.name}
                </span>
                <h2 className="heading-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-6">
                  Technology work succeeds when the right people understand the goal
                </h2>
                <p className="text-lg leading-relaxed mb-8">
                  Esvee Technologies Inc is a technology consulting and workforce solutions company based in Chantilly, Virginia. We support organizations with experienced consultants, flexible delivery teams, and practical technology services across the project lifecycle. Our work begins with the requirement, the working environment, and the outcome the client needs.
                </p>
                <p className="flex items-start gap-2.5 text-sm font-medium text-primary-dark mb-8">
                  <Globe2 className="w-5 h-5 flex-shrink-0" />
                  Delivery and consulting support across the United States, Peru, and India
                </p>
                <Link href="/about" className="btn-secondary group">
                  More About Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div className="relative">
                <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary-soft to-accent-soft" />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white shadow-card-hover group">
                  <Image
                    src="/images/tech-services.jpg"
                    alt="Engineers working together in a bright office"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* D) CORE SERVICES CAROUSEL */}
      <Services3DCarousel />

      {/* E) TECHNOLOGY CAPABILITIES */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="Where We Can Help"
              title="Technology Capabilities"
              description="Our consultants and delivery teams support a broad range of technology environments. We focus on understanding the requirement and bringing together the skills needed for the work."
              className="mb-14"
            />
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {capabilities.map((item, i) => (
              <RevealOnScroll key={item.id} delay={i * 60} className="h-full">
                <Link
                  href={`/services#${item.id}`}
                  className="card card-hover group flex flex-col items-center text-center h-full px-4 py-7 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <div className="icon-tile mb-4 group-hover:bg-primary group-hover:text-white">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-base font-bold text-ink leading-snug">{item.shortTitle}</h3>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* F) INDUSTRIES */}
      <section className="py-20 bg-surface-alt border-y border-line">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="Industries"
              title="Industries We Serve"
              className="mb-10"
            />
          </RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {industries.map((industry, i) => (
              <RevealOnScroll key={industry.name} delay={i * 60}>
                <div className="flex items-center gap-2.5 px-5 py-3 bg-white border border-line rounded-full text-ink font-medium shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary">
                  <industry.icon className="w-5 h-5 text-primary" /> {industry.name}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* G) WHY ESVEE */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="Why Esvee"
              title="Why Work With Us"
              className="mb-14"
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 90} className="h-full">
                <div className="group h-full text-center p-6 rounded-2xl transition-colors duration-300 hover:bg-surface-alt">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:scale-105 ${i % 2 === 0 ? 'bg-primary-soft text-primary' : 'bg-accent-soft text-accent'}`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* H) CLIENT REFERENCE - CINEMATIC LOGO CLOUD */}
      <section className="py-20 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="container mx-auto px-4 md:px-6">
          <CinematicLogoCloud
            clients={clientBrands}
            variant="grid"
            eyebrow="Organizations We Have Worked With"
            description="Our experience includes client, technology, delivery, and business relationships across different industries."
          />

          {/* Compact, well-proportioned CTA card */}
          <div className="max-w-md mx-auto text-center mt-12">
            <div className="px-6 py-4 bg-white/90 backdrop-blur-xs rounded-full border border-gray-200 shadow-2xs hover:shadow-xs transition-shadow flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#0f1b2d] pl-2">
                Ready to build your next solution?
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2563eb] hover:bg-blue-700 text-white text-xs font-semibold rounded-full transition-all shrink-0 shadow-xs hover:shadow-sm"
              >
                Contact our team <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* I) CAREERS PREVIEW */}
      <section className="pt-20 bg-white">
        <div className="section-container max-w-6xl">
          <RevealOnScroll>
            <div className="card overflow-hidden grid grid-cols-1 md:grid-cols-5">
              <div className="relative md:col-span-2 min-h-[220px] group overflow-hidden">
                <Image
                  src="/images/careers-team.jpg"
                  alt="A team gathered for a discussion in an open office"
                  fill
                  sizes="(min-width: 768px) 440px, 100vw"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
              </div>
              <div className="md:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                <span className="eyebrow mb-3">
                  <Users className="w-4 h-4" /> Careers
                </span>
                <h2 className="heading-display text-2xl sm:text-3xl mb-3">Build your next opportunity with Esvee</h2>
                <p className="leading-relaxed mb-6">
                  Esvee works with technology professionals across consulting assignments, project teams, and client opportunities.
                </p>
                <div>
                  <Link href="/careers" className="btn-secondary group">
                    View Opportunities
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* J) CONTACT CTA */}
      <ContactCTA />
    </div>
  );
}
