import { Metadata } from 'next';
import { offices } from '@/content/company';
import { DEFAULT_INQUIRY, isInquiryKey } from '@/content/forms';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import ContactForm from './ContactForm';
import { MapPin, Mail, Phone } from 'lucide-react';

import PageHeaderHero from '@/components/ui/page-header-hero';

export const metadata: Metadata = {
  title: { absolute: 'Contact Esvee | Consulting Staffing and Project Support' },
  description: 'Whether you need a technology consultant, additional project capacity, a delivery partner, or help with a technology initiative, share a few details and our team will follow up.',
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Links such as /contact?type=consultant preselect the matching inquiry type.
  const { type } = await searchParams;
  const initialType = isInquiryKey(type) ? type : DEFAULT_INQUIRY;

  return (
    <div className="flex flex-col">
      {/* Animated Shader Hero Section */}
      <PageHeaderHero
        badge="Start a Conversation"
        badgeIcon={<Mail className="w-3.5 h-3.5 text-cyan-400" />}
        title="Tell us what you"
        highlightTitle="need"
        description="Whether you need a technology consultant, additional project capacity, a delivery partner, or help with a technology initiative, share a few details and our team will follow up."
        align="center"
      />

      {/* Contact Content */}
      <section className="section-padding bg-surface-alt">
        <div className="section-container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <RevealOnScroll>
            <span className="eyebrow mb-3">Write to Us</span>
            <h2 className="heading-display text-2xl md:text-3xl mb-6">Send us a Message</h2>
            <ContactForm key={initialType} initialType={initialType} />
          </RevealOnScroll>

          {/* Right Column - Offices */}
          <RevealOnScroll delay={120}>
            <span className="eyebrow mb-3">Find Us</span>
            <h2 className="heading-display text-2xl md:text-3xl mb-6">Our Offices</h2>

            {/* Global Offices Map Graphic */}
            <div className="card p-6 mb-6 overflow-hidden">
              <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-3">Global Delivery Footprint</span>
              <img
                src="/images/offices-map.svg"
                alt="World map showing Esvee Technologies office locations"
                loading="lazy"
                className="w-full h-auto max-h-56 object-contain"
              />
            </div>

            <div className="space-y-4">
              {offices.map((office) => (
                <div key={office.name} className="card card-hover p-6">
                  <h3 className="font-display text-lg font-bold text-ink mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {office.name}
                  </h3>
                  <address className="not-italic text-sm leading-relaxed mb-4">
                    {office.address.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </address>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                    <a href={`mailto:${office.email}`} className="inline-flex items-center gap-2 text-primary hover:text-primary-dark hover:underline">
                      <Mail className="w-4 h-4" />
                      {office.email}
                    </a>
                    <a href={`tel:${office.phone}`} className="inline-flex items-center gap-2 text-primary hover:text-primary-dark hover:underline">
                      <Phone className="w-4 h-4" />
                      {office.phoneDisplay}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
