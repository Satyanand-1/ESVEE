import { MailNotConfiguredError } from './mailer';

const MIN_FILL_TIME_MS = 3000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX_SUBMISSIONS = 5;

// Per-instance memory is enough to blunt bursts from one address; it resets on restart.
const submissionsByIp = new Map<string, number[]>();

function clientIp(request: Request): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX_SUBMISSIONS) {
    submissionsByIp.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissionsByIp.set(ip, recent);
  return false;
}

export type GuardResult =
  | { ok: true }
  /** Pretend success so a bot gets no signal that it was caught. */
  | { ok: false; silent: true }
  | { ok: false; silent: false; response: Response };

export function checkSubmission(request: Request, honeypot: string, startedAt: string): GuardResult {
  if (honeypot.trim() !== '') return { ok: false, silent: true };

  const started = Number(startedAt);
  if (!Number.isFinite(started) || Date.now() - started < MIN_FILL_TIME_MS) {
    return {
      ok: false,
      silent: false,
      response: errorResponse('That was a little quick. Please wait a moment and send again.', 400),
    };
  }

  if (isRateLimited(clientIp(request))) {
    return {
      ok: false,
      silent: false,
      response: errorResponse('Too many submissions from this connection. Please try again in a few minutes.', 429),
    };
  }

  return { ok: true };
}

/** Trims, caps length, and strips line breaks from single-line values so they are safe in mail headers. */
export function clean(value: unknown, maxLength: number, multiline = false): string {
  if (typeof value !== 'string') return '';
  const trimmed = value.trim().slice(0, maxLength);
  return multiline ? trimmed : trimmed.replace(/[\r\n]+/g, ' ');
}

export function errorResponse(message: string, status: number, fieldErrors?: Record<string, string>): Response {
  return Response.json({ ok: false, message, fieldErrors }, { status });
}

export function successResponse(): Response {
  return Response.json({ ok: true });
}

/** Maps a failed send to a response without leaking provider details to the visitor. */
export function sendFailureResponse(error: unknown): Response {
  console.error('[forms] Could not send submission:', error);
  if (error instanceof MailNotConfiguredError) {
    return errorResponse(
      'Our online form is not available right now. Please email us at us@esveetech.com.',
      503,
    );
  }
  return errorResponse(
    'We could not send your message. Please try again, or email us at us@esveetech.com.',
    502,
  );
}
