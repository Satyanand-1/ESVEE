import React from 'react';
import { HONEYPOT_FIELD } from '@/content/forms';

interface FieldShellProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}

function FieldShell({ id, label, required, error, hint, children }: FieldShellProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink mb-1.5">
        {label}{required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="text-xs text-muted mt-1.5">{hint}</p>}
      {error && <p id={`${id}-error`} className="text-red-600 text-xs mt-1.5">{error}</p>}
    </div>
  );
}

function describedBy(id: string, error?: string, hint?: string) {
  if (error) return `${id}-error`;
  return hint ? `${id}-hint` : undefined;
}

const fieldClass = (error?: string) =>
  `field ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/15' : ''}`;

type SharedProps = Omit<FieldShellProps, 'children'>;

export function TextField({
  id, label, required, error, hint, ...input
}: SharedProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'className'>) {
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint}>
      <input
        id={id}
        name={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={describedBy(id, error, hint)}
        className={fieldClass(error)}
        {...input}
      />
    </FieldShell>
  );
}

export function TextAreaField({
  id, label, required, error, hint, ...textarea
}: SharedProps & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'id' | 'className'>) {
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint}>
      <textarea
        id={id}
        name={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={describedBy(id, error, hint)}
        className={fieldClass(error)}
        {...textarea}
      />
    </FieldShell>
  );
}

export function SelectField({
  id, label, required, error, hint, options, placeholder, ...select
}: SharedProps & {
  options: readonly (string | { value: string; label: string })[];
  placeholder?: string;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'id' | 'className'>) {
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint}>
      <select
        id={id}
        name={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={describedBy(id, error, hint)}
        className={fieldClass(error)}
        {...select}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => {
          const { value, label: text } = typeof option === 'string' ? { value: option, label: option } : option;
          return <option key={value} value={value}>{text}</option>;
        })}
      </select>
    </FieldShell>
  );
}

/** Off-screen trap for bots; hidden from sighted users, keyboards, and screen readers. */
export function Honeypot({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
      <label htmlFor={`hp-${HONEYPOT_FIELD}`}>Leave this field empty</label>
      <input
        id={`hp-${HONEYPOT_FIELD}`}
        name={HONEYPOT_FIELD}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export function FormAlert({ message }: { message: string }) {
  return (
    <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
      {message}
    </div>
  );
}
