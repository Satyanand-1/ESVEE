import { Metadata } from 'next';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactCTA from '@/components/ui/ContactCTA';
import { Sparkles } from 'lucide-react';
import { clientsAndPartners } from '@/content/clients';

import PageHeaderHero from '@/components/ui/page-header-hero';

export const metadata: Metadata = {
  title: { absolute: 'Clients and Partner Relationships | Esvee' },
  description: 'Esvee has supported technology work through relationships with clients, implementation partners, technology providers, and business organizations.',
};

export default function ClientsPage() {
  return (
    <div className="flex flex-col">
      {/* Animated Shader Hero Section */}
      <PageHeaderHero
        badge="Our Experience"
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
        title="Experience built through client and partner"
        highlightTitle="relationships"
        description="Esvee has supported technology work through relationships with clients, implementation partners, technology providers, and business organizations. These experiences have helped us understand different delivery environments, technical needs, and ways of working."
        align="left"
      />

      {/* Organizations Grid Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="Relationships"
              title="Organizations We Have Worked With"
              description="Our experience includes client, technology, delivery, and business relationships across different industries."
              className="mb-14"
            />
          </RevealOnScroll>

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

      <ContactCTA />
    </div>
  );
}
