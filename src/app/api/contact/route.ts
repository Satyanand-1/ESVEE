import { EMAIL_PATTERN, HONEYPOT_FIELD, STARTED_AT_FIELD, inquiryTypes, isInquiryKey } from '@/content/forms';
import {
  checkSubmission,
  clean,
  errorResponse,
  sendFailureResponse,
  successResponse,
} from '@/lib/form-guard';
import { sendToEsvee } from '@/lib/mailer';

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return errorResponse('We could not read your message. Please try again.', 400);
  }

  const guard = checkSubmission(request, clean(body[HONEYPOT_FIELD], 200), clean(body[STARTED_AT_FIELD], 20));
  if (!guard.ok) return guard.silent ? successResponse() : guard.response;

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const company = clean(body.company, 160);
  const phone = clean(body.phone, 40);
  const message = clean(body.message, 5000, true);

  const fieldErrors: Record<string, string> = {};
  if (!isInquiryKey(body.type)) fieldErrors.type = 'Please choose an inquiry type';
  if (!name) fieldErrors.name = 'Name is required';
  if (!email) fieldErrors.email = 'Business email is required';
  else if (!EMAIL_PATTERN.test(email)) fieldErrors.email = 'Invalid email address';
  if (!message) fieldErrors.message = 'Message is required';
  if (Object.keys(fieldErrors).length > 0) {
    return errorResponse('Please check the highlighted fields.', 400, fieldErrors);
  }

  const inquiry = inquiryTypes.find((t) => t.key === body.type)!.label;

  try {
    await sendToEsvee({
      subject: `Website inquiry: ${inquiry} - ${name}`,
      replyTo: email,
      text: [
        `Inquiry type: ${inquiry}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || '-'}`,
        `Phone: ${phone || '-'}`,
        '',
        message,
      ].join('\n'),
    });
  } catch (error) {
    return sendFailureResponse(error);
  }

  return successResponse();
}
