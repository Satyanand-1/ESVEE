import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  technologyConsulting,
  staffing,
  capabilities,
  deliveryModels,
  industries,
} from '@/content/services';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactCTA from '@/components/ui/ContactCTA';
import { Check, ArrowRight, Shield, Briefcase, Building2, Users, Phone, Truck, Heart, type LucideIcon } from 'lucide-react';

import PageHeaderHero from '@/components/ui/page-header-hero';

export const metadata: Metadata = {
  title: { absolute: 'Technology Consulting Staffing and Delivery Services | Esvee' },
  description: 'Esvee supports organizations with experienced consultants, extended project teams, and technology delivery services.',
};

const industryIcons: Record<string, LucideIcon> = {
  'Healthcare': Heart,
  'Human Resources Management': Users,
  'Customer Management': Phone,
  'Logistics': Truck,
  'Insurance': Shield,
};

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-ink/90">
          <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-primary-soft text-primary flex-shrink-0">
            <Check className="w-3.5 h-3.5" strokeWidth={3} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ServiceImage({ src, tint }: { src: string; tint: string }) {
  return (
    <div className="relative">
      <div aria-hidden="true" className={`absolute -inset-3 rounded-[2rem] bg-gradient-to-br ${tint}`} />
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white shadow-card-hover group">
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 1024px) 580px, 100vw"
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Animated Shader Hero Section */}
      <PageHeaderHero
        badge="Consulting and Technology Services"
        badgeIcon={<Briefcase className="w-3.5 h-3.5 text-cyan-400" />}
        title="Flexible expertise for your technology"
        highlightTitle="priorities"
        description="Esvee supports organizations with experienced consultants, extended project teams, and technology delivery services. We can help fill a specialized need, add capacity to an existing team, or support a defined initiative from planning through implementation."
        align="left"
      />

      {/* Group 1: Consulting and Workforce Solutions */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="Our Primary Services"
              title="Consulting and Workforce Solutions"
              className="mb-16"
            />
          </RevealOnScroll>

          <div className="space-y-20 md:space-y-28">
            {/* Technology Consulting */}
            <RevealOnScroll>
              <article id={technologyConsulting.id} className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center scroll-mt-28">
                <div className="w-full lg:w-1/2">
                  <ServiceImage src={technologyConsulting.image} tint="from-primary-soft to-accent-soft" />
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="heading-display text-3xl md:text-4xl leading-[1.15] mb-4">{technologyConsulting.title}</h3>
                  <p className="text-lg leading-relaxed mb-8">{technologyConsulting.description}</p>
                  <FeatureList items={technologyConsulting.features} />
                  <Link href="/contact?type=consultant" className="btn-primary group mt-8">
                    Discuss Your Consulting Need
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </RevealOnScroll>

            {/* Staffing and Team Augmentation */}
            <RevealOnScroll>
              <article id={staffing.id} className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center scroll-mt-28">
                <div className="w-full lg:w-1/2">
                  <ServiceImage src={staffing.image} tint="from-accent-soft to-primary-soft" />
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="heading-display text-3xl md:text-4xl leading-[1.15] mb-4">{staffing.title}</h3>
                  <p className="text-lg leading-relaxed mb-8">{staffing.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {staffing.offerings.map((offering) => (
                      <div key={offering.title} className="rounded-2xl border border-line bg-surface-alt p-5">
                        <offering.icon className="w-6 h-6 text-primary mb-3" />
                        <h4 className="font-display font-bold text-ink mb-1.5 leading-snug">{offering.title}</h4>
                        <p className="text-sm leading-relaxed">{offering.description}</p>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact?type=team" className="btn-primary group mt-8">
                    Discuss Your Staffing Need
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Group 2: Technology Capabilities */}
      <section className="section-padding bg-surface-alt border-y border-line">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="Where We Can Help"
              title="Technology Capabilities"
              description="Our consultants and delivery teams support a broad range of technology environments. We focus on understanding the requirement and bringing together the skills needed for the work."
              className="mb-14"
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {capabilities.map((capability, i) => (
              <RevealOnScroll key={capability.id} delay={(i % 2) * 90} className="h-full">
                <article id={capability.id} className="card card-hover group h-full p-7 md:p-8 scroll-mt-28">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="icon-tile w-14 h-14 group-hover:bg-primary group-hover:text-white">
                      <capability.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-ink leading-tight">{capability.title}</h3>
                  </div>
                  <p className="leading-relaxed mb-6">{capability.description}</p>
                  <FeatureList items={capability.features} />

                  {capability.includes && (
                    <div className="mt-6 pt-6 border-t border-line space-y-4">
                      {capability.includes.map((item) => (
                        <div key={item.title}>
                          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-ink mb-1">{item.title}</h4>
                          <p className="text-sm leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Group 3: Delivery Models */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <RevealOnScroll>
                <SectionHeader
                  centered={false}
                  label="How We Engage"
                  title="Delivery Models"
                  description="The engagement follows the work. Each model can stand alone or be combined as a project grows."
                  className="mb-10"
                />
              </RevealOnScroll>
              <div className="space-y-6">
                {deliveryModels.map((model, i) => (
                  <RevealOnScroll key={model.title} delay={i * 80}>
                    <div className="flex items-start gap-4">
                      <div className="icon-tile flex-shrink-0">
                        <model.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-ink mb-1">{model.title}</h3>
                        <p className="leading-relaxed">{model.description}</p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
            <RevealOnScroll delay={150}>
              <ServiceImage src="/images/outsourcing.jpg" tint="from-primary-soft to-accent-soft" />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-surface-alt border-t border-line">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeader
              label="Industries"
              title="Industries We Serve"
              className="mb-14"
            />
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {industries.map((industry, index) => {
              const Icon = industryIcons[industry.name] ?? Building2;
              return (
                <RevealOnScroll key={industry.name} delay={index * 80} className="h-full">
                  <div className="card card-hover group h-full p-6">
                    <div className="icon-tile mb-4 group-hover:bg-primary group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink mb-2">{industry.name}</h3>
                    <p className="text-sm leading-relaxed">{industry.description}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
