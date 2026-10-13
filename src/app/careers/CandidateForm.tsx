"use client";

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Loader2, MailCheck } from 'lucide-react';
import {
  EMAIL_PATTERN,
  HONEYPOT_FIELD,
  STARTED_AT_FIELD,
  RESUME_EXTENSIONS,
  RESUME_MAX_BYTES,
  availabilityOptions,
  engagementTypes,
  experienceRanges,
  relocationOptions,
  skillAreas,
  workAuthorizations,
} from '@/content/forms';
import { FormAlert, Honeypot, SelectField, TextField } from '@/components/ui/form-fields';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  skillArea: '',
  experience: '',
  workAuthorization: '',
  engagementType: '',
  availability: '',
  relocation: '',
  linkedin: '',
};

const requiredMessages: Partial<Record<keyof typeof initialForm, string>> = {
  fullName: 'Full name is required',
  email: 'Email is required',
  phone: 'Phone number is required',
  location: 'Current city and state is required',
  skillArea: 'Please select a primary skill area',
  experience: 'Please select your years of experience',
  workAuthorization: 'Please select your work authorization',
  engagementType: 'Please select an engagement type',
  availability: 'Please select your availability',
  relocation: 'Please select a relocation or travel preference',
};

export default function CandidateForm() {
  const [formData, setFormData] = useState(initialForm);
  const [resume, setResume] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const set = (field: keyof typeof initialForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setFormData({ ...formData, [field]: e.target.value });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    for (const [field, message] of Object.entries(requiredMessages)) {
      if (!formData[field as keyof typeof initialForm].trim()) newErrors[field] = message;
    }
    if (formData.email.trim() && !EMAIL_PATTERN.test(formData.email.trim())) {
      newErrors.email = 'Invalid email address';
    }
    if (!resume) {
      newErrors.resume = 'Please attach your resume';
    } else if (!RESUME_EXTENSIONS.some((ext) => resume.name.toLowerCase().endsWith(ext))) {
      newErrors.resume = 'Resume must be a PDF, DOC, or DOCX file';
    } else if (resume.size > RESUME_MAX_BYTES) {
      newErrors.resume = 'Resume must be 5 MB or smaller';
    }
    if (!consent) newErrors.consent = 'Please confirm that we may contact you';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!validate()) {
      setFormError('Please check the highlighted fields.');
      return;
    }

    const body = new FormData();
    for (const [field, value] of Object.entries(formData)) body.append(field, value);
    body.append('resume', resume!);
    body.append('consent', 'yes');
    body.append(HONEYPOT_FIELD, honeypot);
    body.append(STARTED_AT_FIELD, String(startedAt.current));

    setStatus('sending');
    try {
      const res = await fetch('/api/candidate', { method: 'POST', body });
      const result = await res.json().catch(() => null);
      if (res.ok && result?.ok) {
        setStatus('sent');
        return;
      }
      // Entered values stay in state so the candidate can correct and resend.
      setErrors(result?.fieldErrors ?? {});
      setFormError(result?.message ?? 'We could not send your details. Please try again, or email us at us@esveetech.com.');
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
          Your details have been sent to the Esvee team. When a suitable client requirement becomes available, we will contact you using the information you provided.
        </p>
      </div>
    );
  }

  const sending = status === 'sending';

  return (
    <form onSubmit={handleSubmit} noValidate className="card relative p-6 md:p-8">
      <Honeypot value={honeypot} onChange={setHoneypot} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TextField id="fullName" label="Full name" required type="text" autoComplete="name"
          value={formData.fullName} onChange={set('fullName')} error={errors.fullName} />
        <TextField id="email" label="Email" required type="email" autoComplete="email"
          value={formData.email} onChange={set('email')} error={errors.email} />
        <TextField id="phone" label="Phone number" required type="tel" autoComplete="tel"
          value={formData.phone} onChange={set('phone')} error={errors.phone} />
        <TextField id="location" label="Current city and state" required type="text" autoComplete="address-level2"
          value={formData.location} onChange={set('location')} error={errors.location} />
        <SelectField id="skillArea" label="Primary skill area" required options={skillAreas} placeholder="Select one"
          value={formData.skillArea} onChange={set('skillArea')} error={errors.skillArea} />
        <SelectField id="experience" label="Years of experience" required options={experienceRanges} placeholder="Select one"
          value={formData.experience} onChange={set('experience')} error={errors.experience} />
        <SelectField id="workAuthorization" label="Work authorization" required options={workAuthorizations} placeholder="Select one"
          value={formData.workAuthorization} onChange={set('workAuthorization')} error={errors.workAuthorization} />
        <SelectField id="engagementType" label="Preferred engagement type" required options={engagementTypes} placeholder="Select one"
          value={formData.engagementType} onChange={set('engagementType')} error={errors.engagementType} />
        <SelectField id="availability" label="Availability" required options={availabilityOptions} placeholder="Select one"
          value={formData.availability} onChange={set('availability')} error={errors.availability} />
        <SelectField id="relocation" label="Relocation or travel preference" required options={relocationOptions} placeholder="Select one"
          value={formData.relocation} onChange={set('relocation')} error={errors.relocation} />

        <div className="md:col-span-2">
          <TextField id="linkedin" label="LinkedIn profile" type="url" placeholder="https://www.linkedin.com/in/your-profile"
            value={formData.linkedin} onChange={set('linkedin')} error={errors.linkedin} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="resume" className="block text-sm font-medium text-ink mb-1.5">
            Resume upload<span aria-hidden="true"> *</span>
          </label>
          <input
            id="resume"
            name="resume"
            type="file"
            required
            accept={RESUME_EXTENSIONS.join(',')}
            onChange={(e) => setResume(e.target.files?.[0] ?? null)}
            aria-invalid={!!errors.resume}
            aria-describedby={errors.resume ? 'resume-error' : 'resume-hint'}
            className={`field py-2 file:mr-4 file:rounded-full file:border-0 file:bg-primary-soft file:px-4 file:py-1.5 file:text-sm file:font-semibold file:text-primary-dark hover:file:bg-cyan-100 ${errors.resume ? 'border-red-500' : ''}`}
          />
          {errors.resume
            ? <p id="resume-error" className="text-red-600 text-xs mt-1.5">{errors.resume}</p>
            : <p id="resume-hint" className="text-xs text-muted mt-1.5">PDF, DOC, or DOCX, up to 5 MB.</p>}
        </div>

        <div className="md:col-span-2">
          <label className="flex items-start gap-3 text-sm text-ink cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
              className="mt-0.5 w-4 h-4 rounded border-line accent-primary"
            />
            <span>
              I give Esvee Technologies permission to contact me about consulting assignments and client opportunities.<span aria-hidden="true"> *</span>
            </span>
          </label>
          {errors.consent && <p id="consent-error" className="text-red-600 text-xs mt-1.5">{errors.consent}</p>}
        </div>

        {formError && <div className="md:col-span-2"><FormAlert message={formError} /></div>}

        <div className="md:col-span-2">
          <button type="submit" disabled={sending} className="btn-primary group w-full py-3.5 disabled:opacity-70 disabled:pointer-events-none">
            {sending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending
              </>
            ) : (
              <>
                Submit Resume
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
