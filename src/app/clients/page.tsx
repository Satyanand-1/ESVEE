import { Metadata } from 'next';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactCTA from '@/components/ui/ContactCTA';
import { CheckCircle2, ShieldCheck, Globe, Sparkles } from 'lucide-react';
import { clientsAndPartners } from '@/content/clients';

import PageHeaderHero from '@/components/ui/page-header-hero';

export const metadata: Metadata = {
  title: 'Clients & Partners',
  description: 'Explore the global enterprises, public institutions, and technology partners that trust Esvee Technologies.',
};

const highlights = [
  {
    title: 'Enterprise Compliance',
    icon: ShieldCheck,
    desc: 'Delivery practices built around security, healthcare data standards, and high-availability requirements.',
  },
  {
    title: 'Global Delivery',
    icon: Globe,
    desc: 'Teams in Virginia (USA), Hyderabad (India), and Lima (Peru) ensuring responsive delivery.',
  },
  {
    title: 'Deep Domain Knowledge',
    icon: CheckCircle2,
    desc: 'Experience in SAP implementations, cloud data lakes, mobile apps, and enterprise legacy modernizations.',
  },
];

export default function ClientsPage() {
  return (
    <div className="flex flex-col">
      {/* Animated Shader Hero Section */}
      <PageHeaderHero
        badge="Proven Track Record"
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
        title="Our Clients and"
        highlightTitle="Partners"
        description="We are proud to collaborate with global enterprises, public institutions, and industry pioneers, delivering resilient technology solutions and enterprise consulting."
        align="left"
      />

      {/* Clients & Partners Grid Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <SectionHeader
                centered={false}
                label="Clients & Partners"
                title="Enterprise Clients & Strategic Partners"
                description="Capabilities across cloud engineering, SAP consulting, big data platforms, healthcare informatics, and digital government services."
              />
              <div className="shrink-0 self-start md:self-auto inline-flex items-center gap-2 text-sm font-semibold text-primary-dark bg-primary-soft px-4 py-2 rounded-full">
                <span className="font-display text-base">{clientsAndPartners.length}</span> organizations
              </div>
            </div>
          </RevealOnScroll>

          {/* Grid of clients */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clientsAndPartners.map((client, index) => (
              <RevealOnScroll key={client.id} delay={(index % 4) * 70} className="h-full">
                <div className="card card-hover group flex flex-col p-6 h-full">
                  <div className="h-24 flex items-center justify-center p-4 bg-surface-alt rounded-xl mb-5 transition-colors duration-300 group-hover:bg-primary-soft/60">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      loading="lazy"
                      className="max-h-14 max-w-full object-contain transition-transform duration-500 ease-out-expo group-hover:scale-105"
                    />
                  </div>
                  {client.category && (
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-primary block mb-1.5">
                      {client.category}
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold text-ink mb-2 transition-colors duration-300 group-hover:text-primary">
                    {client.name}
                  </h3>
                  {client.description && (
                    <p className="text-sm leading-relaxed">
                      {client.description}
                    </p>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Value Highlights */}
      <section className="section-padding bg-surface-alt border-t border-line">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="Why Partner With Us"
              title="What Our Clients Rely On"
              className="mb-14"
            />
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
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

      <ContactCTA />
    </div>
  );
}
