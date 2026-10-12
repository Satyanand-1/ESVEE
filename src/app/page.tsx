import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { company } from '@/content/company';
import { ContactCTA } from '@/components/ContactCTA';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';
import ShaderHero from '@/components/ui/hero';
import { CinematicLogoCloud } from '@/components/ui/cinematic-logo-cloud';
import { Services3DCarousel } from '@/components/ui/services-3d-carousel';
import {
  ArrowRight,
  Building2,
  Database,
  Cpu,
  Layout,
  Cloud,
  Layers,
  Globe2,
  Users,
  Briefcase,
  TrendingUp,
  Award,
  ShieldCheck,
  HeartPulse,
  Users2,
  HeadphonesIcon,
  Truck,
  Shield,
} from 'lucide-react';

import { clientsAndPartners } from '@/content/clients';

export const metadata: Metadata = {
  title: { absolute: 'Esvee Technologies Inc | IT Consulting & Technology Services' },
  description: 'From enterprise applications and SAP solutions to modern web development, staffing, and technology consulting.',
};

const clientBrands = clientsAndPartners.map((c) => ({
  name: c.name,
  logo: c.logo,
}));

const industries = [
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'HR Management', icon: Users2 },
  { name: 'Customer Management', icon: HeadphonesIcon },
  { name: 'Logistics', icon: Truck },
  { name: 'Insurance', icon: Shield },
];

const capabilities = [
  { title: 'Enterprise Applications', icon: Database, desc: 'Custom business applications designed for scale, security, and seamless workflow integration.' },
  { title: 'Data & Integration', icon: Layers, desc: 'Robust data pipelines, API integrations, and ETL processes that unify your business systems.' },
  { title: 'AI & Machine Learning', icon: Cpu, desc: 'Intelligent algorithms and models that extract insights and automate complex decisions.' },
  { title: 'Web & Application Engineering', icon: Layout, desc: 'Modern, responsive, and accessible user interfaces paired with powerful backend systems.' },
  { title: 'Cloud & Infrastructure', icon: Cloud, desc: 'Scalable cloud architectures, DevOps practices, and secure infrastructure deployment.' },
  { title: 'Enterprise Platforms & SAP', icon: Briefcase, desc: 'Implementation, customization, and support for SAP and other major enterprise platforms.' },
];

const reasons = [
  { title: 'Broad Technical Capabilities', icon: ShieldCheck, desc: 'Deep expertise across modern tech stacks and legacy systems.' },
  { title: 'Consulting Expertise', icon: Award, desc: 'Strategic guidance that aligns technology with business objectives.' },
  { title: 'Flexible Engagement', icon: TrendingUp, desc: 'Agile models that adapt to your project size, timeline, and budget.' },
  { title: 'International Presence', icon: Globe2, desc: 'Delivery teams across the Americas and Asia, close to where you operate.' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* A) MAIN SHADER HERO SECTION (Mesh Gradient & Dynamic Interactive Shaders) */}
      <ShaderHero />

      {/* B) COMPANY INTRO */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <RevealOnScroll>
              <div>
                <span className="eyebrow mb-4">
                  <Building2 className="w-4 h-4" />
                  About {company.name}
                </span>
                <h2 className="heading-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-6">
                  Empowering Modern Enterprises with Scalable Solutions
                </h2>
                <p className="text-lg leading-relaxed mb-8">
                  Esvee Technologies Inc is an IT consulting and technology services company associated with Sparc Group. We partner with businesses to navigate complex technological landscapes, delivering tailored solutions that drive efficiency, growth, and innovation across diverse industries.
                </p>
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-soft text-primary-dark text-sm font-medium">
                    <ShieldCheck className="w-4 h-4" /> Full Life Cycle Delivery
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft text-accent text-sm font-medium">
                    <Globe2 className="w-4 h-4" /> Teams in USA, Peru &amp; India
                  </span>
                </div>
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

      {/* C) SERVICES 3D SCROLL PERSPECTIVE CAROUSEL */}
      <Services3DCarousel />

      {/* D) INDUSTRIES */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="Industries"
              title="Industries We Serve"
              description="Domain experience that shortens the path from requirement to working software."
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

      {/* E) TECHNOLOGY CAPABILITIES */}
      <section className="section-padding bg-surface-alt border-y border-line">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="What We Build"
              title="Technology Capabilities"
              description="Our team works across a diverse technology stack to deliver robust, scalable solutions."
              className="mb-14"
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, i) => (
              <RevealOnScroll key={item.title} delay={(i % 3) * 90} className="h-full">
                <div className="card card-hover group h-full p-7">
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

      {/* F) WHY WORK WITH US */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="Why Esvee"
              title="Why Work With Us"
              description="What sets Esvee Technologies apart as a trusted partner."
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
                  <p className="leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* G) CLIENT REFERENCE - CINEMATIC LOGO CLOUD */}
      <section className="py-20 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="container mx-auto px-4 md:px-6">
          <CinematicLogoCloud
            clients={clientBrands}
            variant="grid"
            eyebrow="Trusted by Forward-Thinking Organizations"
            description="Collaborating with leading enterprises, institutions, and industry associations across the globe."
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

      {/* H) CAREERS PREVIEW */}
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
                <h2 className="heading-display text-2xl sm:text-3xl mb-3">Join Our Growing Team</h2>
                <p className="leading-relaxed mb-6">
                  We&apos;re always looking for talented technologists and consultants to help us build enterprise software that works.
                </p>
                <div>
                  <Link href="/careers" className="btn-secondary group">
                    View Open Positions
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* I) CONTACT CTA */}
      <ContactCTA />
    </div>
  );
}
