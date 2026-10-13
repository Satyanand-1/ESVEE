import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { company } from '@/content/company';
import { capabilities } from '@/content/services';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactCTA from '@/components/ui/ContactCTA';
import { MapPin, Users, HeartHandshake, Check } from 'lucide-react';

import PageHeaderHero from '@/components/ui/page-header-hero';

export const metadata: Metadata = {
  title: { absolute: 'About Esvee Technologies | Consulting and Workforce Solutions' },
  description: 'Esvee Technologies Inc is a technology consulting and workforce solutions company headquartered in Chantilly, Virginia.',
};

const approach = [
  { title: 'Holistic Approach', desc: 'We look at the big picture to ensure all parts of your IT infrastructure work seamlessly together.' },
  { title: 'Practical View', desc: 'We deliver actionable, realistic solutions that provide immediate value and long-term stability.' },
  { title: 'Broad Capabilities', desc: 'From strategic consulting to implementation and support, we cover all bases.' },
];

const locations = [
  { place: 'Chantilly, Virginia, USA', role: 'Headquarters', desc: 'Corporate strategy and central operations.' },
  { place: 'Lima, Peru', role: 'Regional Office', desc: 'Latin America operations and support.' },
  { place: 'Hyderabad, India', role: 'Partner Office', desc: 'Development and technology center.' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Animated Shader Hero Section */}
      <PageHeaderHero
        badge="Who We Are"
        badgeIcon={<Users className="w-3.5 h-3.5 text-cyan-400" />}
        title="A practical partner for technology consulting and"
        highlightTitle="delivery"
        description="A technology consulting and workforce solutions company headquartered in Chantilly, Virginia."
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
                  Experienced people for important technology work
                </h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>{company.about}</p>
                  <p>
                    We work with clients, implementation partners, prime vendors, and other technology organizations through flexible engagement models. Depending on the requirement, Esvee can provide an individual consultant, additional team capacity, or support for a defined technology initiative.
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

      {/* Company Philosophy and Approach */}
      <section className="section-padding bg-surface-alt border-y border-line">
        <div className="section-container">
          <RevealOnScroll>
            <div className="card p-8 sm:p-12 text-center max-w-4xl mx-auto">
              <div className="mx-auto mb-6 flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-soft text-accent">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <span className="eyebrow mb-4">Our Philosophy</span>
              <h2 className="heading-display text-3xl md:text-4xl leading-[1.15] mb-5">
                Staffing is a people business.
              </h2>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                Behind every requirement is a business need, and behind every resume is a person. We take time to understand both. That means asking practical questions, communicating clearly, and focusing on fit beyond a list of keywords.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
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
              label="Where We Can Help"
              title="Technology Capabilities"
              description="Our consultants and delivery teams support a broad range of technology environments."
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

      {/* Locations */}
      <section className="section-padding bg-surface-alt border-t border-line">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="Where We Work"
              title="Delivery and consulting support across the United States, Peru, and India"
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
