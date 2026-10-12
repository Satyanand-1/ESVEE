import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services, industries } from '@/content/services';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactCTA from '@/components/ui/ContactCTA';
import { Check, ArrowRight, Shield, Code, Building2, Users, Phone, Truck, Heart, type LucideIcon } from 'lucide-react';

import PageHeaderHero from '@/components/ui/page-header-hero';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Technologies, Products, and Services offered by Esvee Technologies.',
};

const industryIcons: Record<string, LucideIcon> = {
  'Healthcare': Heart,
  'Human Resources Management': Users,
  'Customer Management': Phone,
  'Logistics': Truck,
  'Insurance': Shield,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Animated Shader Hero Section */}
      <PageHeaderHero
        badge="Enterprise Solutions"
        badgeIcon={<Code className="w-3.5 h-3.5 text-cyan-400" />}
        title="Technologies, Products, and"
        highlightTitle="Services"
        description="Delivering high-quality, scalable, and innovative IT solutions tailored to meet the evolving needs of your business. We empower organizations with modern technologies to drive growth and efficiency."
        align="left"
      />

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const Icon = service.icon;
              return (
                <RevealOnScroll key={service.id}>
                  <article
                    id={service.id}
                    className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center scroll-mt-28 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                  >
                    <div className="w-full lg:w-1/2">
                      <div className="relative">
                        <div
                          aria-hidden="true"
                          className={`absolute -inset-3 rounded-[2rem] bg-gradient-to-br ${isEven ? 'from-primary-soft to-accent-soft' : 'from-accent-soft to-primary-soft'}`}
                        />
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white shadow-card-hover group">
                          <Image
                            src={service.image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 580px, 100vw"
                            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="icon-tile w-14 h-14">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="font-display text-sm font-semibold text-muted tabular-nums">
                          {String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                        </span>
                      </div>
                      <h2 className="heading-display text-3xl md:text-4xl leading-[1.15] mb-4">{service.title}</h2>
                      <p className="text-lg leading-relaxed mb-8">{service.fullDescription}</p>

                      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink mb-4">Key Features</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-ink/90">
                            <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-primary-soft text-primary flex-shrink-0">
                              <Check className="w-3.5 h-3.5" strokeWidth={3} />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {service.useCases.length > 0 && (
                        <>
                          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink mb-4">Use Cases</h3>
                          <ul className="flex flex-wrap gap-2 mb-8">
                            {service.useCases.map((useCase) => (
                              <li key={useCase} className="px-3.5 py-1.5 rounded-full bg-surface-alt border border-line text-sm text-body">
                                {useCase}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      <Link href="/contact" className="btn-primary group">
                        Discuss This Service
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                </RevealOnScroll>
              );
            })}
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
              description="Providing specialized technology solutions across diverse sectors to address unique industry challenges."
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
