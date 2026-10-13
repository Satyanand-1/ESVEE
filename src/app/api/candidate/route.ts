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
import {
  checkSubmission,
  clean,
  errorResponse,
  sendFailureResponse,
  successResponse,
} from '@/lib/form-guard';
import { sendToEsvee, type MailAttachment } from '@/lib/mailer';

const RESUME_MIME_TYPES: Record<string, string> = {
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return errorResponse('We could not read your submission. Please try again.', 400);
  }

  const guard = checkSubmission(request, clean(form.get(HONEYPOT_FIELD), 200), clean(form.get(STARTED_AT_FIELD), 20));
  if (!guard.ok) return guard.silent ? successResponse() : guard.response;

  const fullName = clean(form.get('fullName'), 120);
  const email = clean(form.get('email'), 200);
  const phone = clean(form.get('phone'), 40);
  const location = clean(form.get('location'), 120);
  const skillArea = clean(form.get('skillArea'), 80);
  const experience = clean(form.get('experience'), 40);
  const workAuthorization = clean(form.get('workAuthorization'), 80);
  const engagementType = clean(form.get('engagementType'), 40);
  const availability = clean(form.get('availability'), 40);
  const relocation = clean(form.get('relocation'), 60);
  const linkedin = clean(form.get('linkedin'), 300);
  const consent = form.get('consent') === 'yes';
  const resume = form.get('resume');

  const fieldErrors: Record<string, string> = {};
  const requireOption = (field: string, value: string, options: string[], label: string) => {
    if (!options.includes(value)) fieldErrors[field] = `Please select ${label}`;
  };

  if (!fullName) fieldErrors.fullName = 'Full name is required';
  if (!email) fieldErrors.email = 'Email is required';
  else if (!EMAIL_PATTERN.test(email)) fieldErrors.email = 'Invalid email address';
  if (!phone) fieldErrors.phone = 'Phone number is required';
  if (!location) fieldErrors.location = 'Current city and state is required';
  requireOption('skillArea', skillArea, skillAreas, 'a primary skill area');
  requireOption('experience', experience, experienceRanges, 'your years of experience');
  requireOption('workAuthorization', workAuthorization, workAuthorizations, 'your work authorization');
  requireOption('engagementType', engagementType, engagementTypes, 'an engagement type');
  requireOption('availability', availability, availabilityOptions, 'your availability');
  requireOption('relocation', relocation, relocationOptions, 'a relocation or travel preference');
  if (linkedin && !/^https?:\/\/([\w-]+\.)?linkedin\.com\//i.test(linkedin)) {
    fieldErrors.linkedin = 'Enter a full LinkedIn URL, starting with https://';
  }
  if (!consent) fieldErrors.consent = 'Please confirm that we may contact you';

  let attachment: MailAttachment | undefined;
  if (!(resume instanceof File) || resume.size === 0) {
    fieldErrors.resume = 'Please attach your resume';
  } else {
    const extension = resume.name.slice(resume.name.lastIndexOf('.')).toLowerCase();
    if (!RESUME_EXTENSIONS.includes(extension)) {
      fieldErrors.resume = 'Resume must be a PDF, DOC, or DOCX file';
    } else if (resume.size > RESUME_MAX_BYTES) {
      fieldErrors.resume = 'Resume must be 5 MB or smaller';
    } else {
      attachment = {
        // Named from validated fields rather than the uploaded filename.
        filename: `Resume - ${fullName.replace(/[^\w .-]/g, '')}${extension}`,
        content: Buffer.from(await resume.arrayBuffer()),
        contentType: RESUME_MIME_TYPES[extension],
      };
    }
  }

  if (Object.keys(fieldErrors).length > 0 || !attachment) {
    return errorResponse('Please check the highlighted fields.', 400, fieldErrors);
  }

  try {
    await sendToEsvee({
      subject: `Resume submission: ${fullName} - ${skillArea}`,
      replyTo: email,
      attachments: [attachment],
      text: [
        `Full name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Current city and state: ${location}`,
        `Primary skill area: ${skillArea}`,
        `Years of experience: ${experience}`,
        `Work authorization: ${workAuthorization}`,
        `Preferred engagement type: ${engagementType}`,
        `Availability: ${availability}`,
        `Relocation or travel preference: ${relocation}`,
        `LinkedIn profile: ${linkedin || '-'}`,
        'Permission to contact: Yes',
      ].join('\n'),
    });
  } catch (error) {
    return sendFailureResponse(error);
  }

  return successResponse();
}
