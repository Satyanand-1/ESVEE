import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { company, offices } from '@/content/company';
import { navigation, footerNavigation } from '@/content/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-alt text-body pt-16 pb-8 border-t border-line">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_1fr_1.3fr] gap-10 lg:gap-10 mb-12">

          {/* Company Overview */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 group outline-none focus-visible:underline">
              <svg
                fill="currentColor"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-8 h-8 text-ink transition-colors duration-300 group-hover:text-primary"
              >
                <path d="M20 20h60v12H34v16h40v12H34v16h46v12H20V20z" />
              </svg>
              <span className="font-display font-bold text-2xl text-ink tracking-tight">
                Esvee<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mt-5">
              {company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-ink font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-primary transition-colors outline-none focus-visible:text-primary focus-visible:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-ink font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerNavigation.services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-primary transition-colors outline-none focus-visible:text-primary focus-visible:underline"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-ink font-semibold mb-4">Our Offices</h3>
            <div className="space-y-5">
              {offices.map((office) => (
                <div key={office.name} className="space-y-1.5">
                  <h4 className="text-ink text-sm font-semibold">{office.name}</h4>
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                    <span className="leading-snug">{office.address.join(', ')}</span>
                  </div>
                  {office.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone size={16} className="flex-shrink-0 text-primary" />
                      <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                        {office.phoneDisplay || office.phone}
                      </a>
                    </div>
                  )}
                  {office.email && (
                    <div className="flex items-center gap-2 text-sm">
                      <Mail size={16} className="flex-shrink-0 text-primary" />
                      <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                        {office.email}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {currentYear} Esvee Technologies Inc. All rights reserved.</p>
          <Link href="/contact" className="hover:text-primary transition-colors">Privacy & Legal Inquiry</Link>
        </div>
      </div>
    </footer>
  );
}
