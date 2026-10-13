import nodemailer from 'nodemailer';

export interface MailAttachment {
  filename: string;
  content: Buffer;
  contentType: string;
}

export interface OutgoingMail {
  subject: string;
  text: string;
  replyTo: string;
  attachments?: MailAttachment[];
}

/** Thrown when no mail provider credentials are present in the server environment. */
export class MailNotConfiguredError extends Error {
  constructor() {
    super('No mail provider is configured. Set RESEND_API_KEY or SMTP_HOST (see .env.example).');
    this.name = 'MailNotConfiguredError';
  }
}

const DEFAULT_RECIPIENT = 'us@esveetech.com';

/**
 * Sends a website submission to the Esvee mailbox.
 * Credentials are read from server-only environment variables and never reach the browser.
 */
export async function sendToEsvee(mail: OutgoingMail): Promise<void> {
  const to = process.env.CONTACT_TO_EMAIL || DEFAULT_RECIPIENT;
  const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;

  if (process.env.RESEND_API_KEY && from) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: mail.subject,
        text: mail.text,
        reply_to: mail.replyTo,
        attachments: mail.attachments?.map((a) => ({
          filename: a.filename,
          content: a.content.toString('base64'),
        })),
      }),
    });
    if (!res.ok) {
      throw new Error(`Resend responded with ${res.status}: ${await res.text()}`);
    }
    return;
  }

  if (process.env.SMTP_HOST && from) {
    const port = Number(process.env.SMTP_PORT || 587);
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    });
    await transport.sendMail({
      from,
      to,
      subject: mail.subject,
      text: mail.text,
      replyTo: mail.replyTo,
      attachments: mail.attachments,
    });
    return;
  }

  throw new MailNotConfiguredError();
}
