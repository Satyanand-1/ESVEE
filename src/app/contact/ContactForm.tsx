"use client";

import { useState } from 'react';
import { ArrowRight, MailCheck } from 'lucide-react';

const CONTACT_EMAIL = 'us@esveetech.com';

const initialForm = {
  type: 'General Inquiry',
  name: '',
  email: '',
  company: '',
  phone: '',
  message: ''
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Business Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // There is no backend for this form, so the message is handed to the visitor's email app.
  const buildMailto = () => {
    const body = [
      formData.message.trim(),
      '',
      '—',
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      ...(formData.company.trim() ? [`Company: ${formData.company.trim()}`] : []),
      ...(formData.phone.trim() ? [`Phone: ${formData.phone.trim()}`] : []),
    ].join('\n');

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${formData.type} - ${formData.name.trim()}`)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      window.location.href = buildMailto();
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="card p-8 text-center" role="status">
        <div className="mx-auto mb-5 flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-soft text-primary">
          <MailCheck className="w-7 h-7" />
        </div>
        <h3 className="font-display text-2xl font-bold text-ink mb-3">Your email is ready to send</h3>
        <p className="mb-6 leading-relaxed">
          We opened your email app with the message filled in. Press send there to reach us. If nothing opened, email us directly at{' '}
          <a href={buildMailto()} className="text-primary font-semibold hover:underline">{CONTACT_EMAIL}</a>.
        </p>
        <button
          onClick={() => { setIsSubmitted(false); setFormData({ ...formData, message: '' }); }}
          className="btn-secondary"
        >
          Write Another Message
        </button>
      </div>
    );
  }

  const fieldClass = (name: string) => `field ${errors[name] ? 'border-red-500 focus:border-red-500 focus:ring-red-500/15' : ''}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 md:p-8">
      <div className="space-y-5">
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-ink mb-1.5">Inquiry Type</label>
          <select
            id="type"
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value})}
            className="field"
          >
            <option>General Inquiry</option>
            <option>Project Discussion</option>
            <option>Staffing Request</option>
            <option>Partnership</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">Name *</label>
          <input
            type="text"
            id="name"
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={fieldClass('name')}
          />
          {errors.name && <p id="name-error" className="text-red-600 text-xs mt-1.5">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">Business Email *</label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={fieldClass('email')}
            />
            {errors.email && <p id="email-error" className="text-red-600 text-xs mt-1.5">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">Phone</label>
            <input
              type="tel"
              id="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="field"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-ink mb-1.5">Company</label>
          <input
            type="text"
            id="company"
            autoComplete="organization"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="field"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">Message *</label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={fieldClass('message')}
          ></textarea>
          {errors.message && <p id="message-error" className="text-red-600 text-xs mt-1.5">{errors.message}</p>}
        </div>

        <button type="submit" className="btn-primary group w-full py-3.5">
          Send Message
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
        <p className="text-xs text-muted text-center">
          Sending opens your email app with this message addressed to {CONTACT_EMAIL}.
        </p>
      </div>
    </form>
  );
}
