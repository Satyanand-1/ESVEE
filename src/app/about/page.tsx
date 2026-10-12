import { Metadata } from 'next';
import Image from 'next/image';
import { company } from '@/content/company';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactCTA from '@/components/ui/ContactCTA';
import { MapPin, Target, Users, Cpu, Database, Network, LineChart, Check } from 'lucide-react';

import PageHeaderHero from '@/components/ui/page-header-hero';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Esvee Technologies, an IT consulting and technology services company.',
};

const approach = [
  { title: 'Holistic Approach', desc: 'We look at the big picture to ensure all parts of your IT infrastructure work seamlessly together.' },
  { title: 'Practical View', desc: 'We deliver actionable, realistic solutions that provide immediate value and long-term stability.' },
  { title: 'Broad Capabilities', desc: 'From strategic consulting to implementation and support, we cover all bases.' },
];

const technologies = [
  { title: 'Event-Driven Architecture', icon: Network, desc: 'Responsive and scalable system design.' },
  { title: 'Big Data', icon: Database, desc: 'Managing and analyzing massive datasets.' },
  { title: 'IoT (Internet of Things)', icon: Cpu, desc: 'Connecting devices for smart operations.' },
  { title: 'AI & Machine Learning', icon: LineChart, desc: 'Intelligent automation and insights.' },
];

const locations = [
  { place: 'Virginia, USA', role: 'Headquarters', desc: 'Corporate strategy and central operations.' },
  { place: 'Hyderabad, India', role: 'Partner Location', desc: 'Development and technology center.' },
  { place: 'Lima, Peru', role: 'Regional Office', desc: 'Latin America operations and support.' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Animated Shader Hero Section */}
      <PageHeaderHero
        badge="Who We Are"
        badgeIcon={<Users className="w-3.5 h-3.5 text-cyan-400" />}
        title="About Esvee"
        highlightTitle="Technologies"
        description="An IT consulting and technology services company delivering comprehensive solutions across the full software development life cycle."
        align="left"
      />

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <RevealOnScroll>
              <div>
                <span className="eyebrow mb-4">
                  <Users className="w-4 h-4" />
                  Who We Are
                </span>
                <h2 className="heading-display text-3xl md:text-4xl leading-[1.15] mb-6">
                  Full Life Cycle Management and IT Consultants
                </h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>{company.about}</p>
                  <p>
                    Associated with <strong className="text-ink font-semibold">{company.partnerFull}</strong> ({company.partner}), we leverage international delivery capabilities across the Americas and Asia.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <div className="relative">
                <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary-soft to-accent-soft" />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white shadow-card-hover group">
                  <Image
                    src="/images/about-team.jpg"
                    alt="Two engineers reviewing code together at a workstation"
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

      {/* Our Approach */}
      <section className="section-padding bg-surface-alt border-y border-line">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="Our Approach"
              icon={<Target className="w-4 h-4" />}
              title="Holistic View, Practical Solutions"
              className="mb-14"
            />
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approach.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 100} className="h-full">
                <div className="card card-hover h-full p-8">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white mb-5">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink mb-2">{item.title}</h3>
                  <p className="leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Capabilities */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="Technology"
              title="Technology Capabilities"
              description="Leveraging modern technologies to build robust, scalable, and intelligent systems."
              className="mb-14"
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, i) => (
              <RevealOnScroll key={tech.title} delay={i * 90} className="h-full">
                <div className="card card-hover group h-full p-7">
                  <div className="icon-tile mb-5 group-hover:bg-primary group-hover:text-white">
                    <tech.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink mb-2">{tech.title}</h3>
                  <p className="leading-relaxed">{tech.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding bg-surface-alt border-t border-line">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="Where We Work"
              title="Global Presence"
              description="Operating internationally to serve clients worldwide with a network of offices and partners."
              className="mb-14"
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <RevealOnScroll key={loc.place} delay={i * 100} className="h-full">
                <div className="card card-hover h-full p-8 text-center flex flex-col items-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-soft text-accent mb-5">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink mb-1">{loc.place}</h3>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{loc.role}</p>
                  <p className="text-sm leading-relaxed">{loc.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
