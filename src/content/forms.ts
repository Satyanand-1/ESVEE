/** Options shared by the forms in the browser and the route handlers that validate them. */

/** Hidden field real visitors never fill in; bots that complete every input do. */
export const HONEYPOT_FIELD = 'website';
/** Timestamp (ms) set when the form mounts, used to reject instant submissions. */
export const STARTED_AT_FIELD = 'startedAt';

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const inquiryTypes = [
  { key: 'consultant', label: 'Need a Technology Consultant' },
  { key: 'team', label: 'Need a Project Team' },
  { key: 'project', label: 'Discuss a Technology Project' },
  { key: 'partnership', label: 'Staffing or Vendor Partnership' },
  { key: 'career', label: 'Career Inquiry' },
  { key: 'general', label: 'General Inquiry' },
] as const;

export type InquiryKey = (typeof inquiryTypes)[number]['key'];

export const DEFAULT_INQUIRY: InquiryKey = 'general';

export function isInquiryKey(value: unknown): value is InquiryKey {
  return inquiryTypes.some((t) => t.key === value);
}

export const skillAreas = [
  'Cloud and Infrastructure',
  'Software Engineering',
  'Data and Integration',
  'Cybersecurity',
  'Telecom',
  'Enterprise Platforms and SAP',
  'Project or Program Management',
  'Other',
];

export const experienceRanges = [
  'Less than 2 years',
  '2 to 5 years',
  '5 to 10 years',
  '10 to 15 years',
  'More than 15 years',
];

export const workAuthorizations = [
  'Authorized to work in the United States',
  'Will require visa sponsorship for the United States',
  'Authorized to work in another country',
  'Prefer to discuss',
];

export const engagementTypes = [
  'Contract',
  'Contract to hire',
  'Direct placement',
  'Open to any',
];

export const availabilityOptions = [
  'Immediately',
  'Within 2 weeks',
  'Within 1 month',
  'More than 1 month',
];

export const relocationOptions = [
  'Remote only',
  'Open to hybrid or on site locally',
  'Open to travel',
  'Open to relocation',
];

export const RESUME_MAX_BYTES = 5 * 1024 * 1024;
export const RESUME_EXTENSIONS = ['.pdf', '.doc', '.docx'];
