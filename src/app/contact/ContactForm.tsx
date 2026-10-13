"use client";

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Loader2, MailCheck } from 'lucide-react';
import { EMAIL_PATTERN, HONEYPOT_FIELD, STARTED_AT_FIELD, inquiryTypes, type InquiryKey } from '@/content/forms';
import { FormAlert, Honeypot, SelectField, TextAreaField, TextField } from '@/components/ui/form-fields';

const inquiryOptions = inquiryTypes.map((t) => ({ value: t.key, label: t.label }));

export default function ContactForm({ initialType }: { initialType: InquiryKey }) {
  const [formData, setFormData] = useState({
    type: initialType as string,
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const set = (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFormData({ ...formData, [field]: e.target.value });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!validate()) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          [HONEYPOT_FIELD]: honeypot,
          [STARTED_AT_FIELD]: String(startedAt.current),
        }),
      });
      const result = await res.json().catch(() => null);
      if (res.ok && result?.ok) {
        setStatus('sent');
        return;
      }
      // Entered values stay in state so the visitor can correct and resend.
      setErrors(result?.fieldErrors ?? {});
      setFormError(result?.message ?? 'We could not send your message. Please try again, or email us at us@esveetech.com.');
    } catch {
      setFormError('We could not reach the server. Please check your connection and try again.');
    }
    setStatus('idle');
  };

  if (status === 'sent') {
    return (
      <div className="card p-8 text-center" role="status">
        <div className="mx-auto mb-5 flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-soft text-primary">
          <MailCheck className="w-7 h-7" />
        </div>
        <h3 className="font-display text-2xl font-bold text-ink mb-3">Thank you.</h3>
        <p className="leading-relaxed">
          Your message has been sent to the Esvee team. We will review your inquiry and respond using the contact information you provided.
        </p>
      </div>
    );
  }

  const sending = status === 'sending';

  return (
    <form onSubmit={handleSubmit} noValidate className="card relative p-6 md:p-8">
      <Honeypot value={honeypot} onChange={setHoneypot} />

      <div className="space-y-5">
        <SelectField
          id="type"
          label="Inquiry Type"
          options={inquiryOptions}
          value={formData.type}
          onChange={set('type')}
          error={errors.type}
        />

        <TextField
          id="name"
          label="Name"
          required
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={set('name')}
          error={errors.name}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <TextField
            id="email"
            label="Business Email"
            required
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={set('email')}
            error={errors.email}
          />
          <TextField
            id="phone"
            label="Phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={set('phone')}
          />
        </div>

        <TextField
          id="company"
          label="Company"
          type="text"
          autoComplete="organization"
          value={formData.company}
          onChange={set('company')}
        />

        <TextAreaField
          id="message"
          label="Message"
          required
          rows={5}
          value={formData.message}
          onChange={set('message')}
          error={errors.message}
        />

        {formError && <FormAlert message={formError} />}

        <button type="submit" disabled={sending} className="btn-primary group w-full py-3.5 disabled:opacity-70 disabled:pointer-events-none">
          {sending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
