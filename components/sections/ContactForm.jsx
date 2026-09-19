'use client';

import { useState } from 'react';
// Only UI is imported here — NO data imports.
//
// This component originally imported `services` from the data layer to build
// the dropdown. That pulled all of data/services.js (descriptions, capability
// lists, FAQs, stacks — ~28 kB) into the CLIENT bundle, and webpack then shared
// that chunk across every page: +12 kB site-wide to render a <select>.
//
// The options now arrive as plain string arrays from the server component that
// renders this form. The data stays on the server; the browser gets the labels.
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

/**
 * Qualified enquiry form.
 *
 * WHY MORE FIELDS, NOT FEWER
 * --------------------------
 * The old form asked for name, email and message. That produces enquiries like
 * "hi, need a website", which cost a round-trip of emails before anyone knows
 * whether the project is real. Service, budget and timeline let a reply be
 * useful first time. The three extra fields are optional, so they qualify
 * without becoming a barrier.
 *
 * STATUS IS INLINE, NOT A TOAST
 * -----------------------------
 * Replaces react-hot-toast. A toast disappears, can be missed, and is awkward
 * for screen readers. An inline `role="status"` region is announced, stays put,
 * and removes a dependency.
 *
 * The honeypot field below is the first line of spam defence; see
 * app/api/send/route.js for the rest.
 *
 * @param {string[]} serviceOptions  - labels only, supplied by the server
 * @param {string[]} budgetOptions   - labels only, supplied by the server
 * @param {string[]} timelineOptions - labels only, supplied by the server
 */
export default function ContactForm({
  serviceOptions = [],
  budgetOptions = [],
  timelineOptions = [],
}) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    website: '', // honeypot — must stay empty
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));

    // Clear a field's error as soon as the user starts fixing it — waiting
    // until resubmit to remove an error message feels punitive.
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Please tell us your name.';
    if (!values.email.trim()) {
      nextErrors.email = 'We need an email address to reply to.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'That email address does not look right.';
    }
    if (!values.message.trim()) {
      nextErrors.message = 'Tell us a little about what you need.';
    }
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({ state: 'idle', message: '' });
      return;
    }

    setErrors({});
    setStatus({ state: 'sending', message: '' });

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus({
          state: 'error',
          message: payload.error ?? 'Something went wrong. Please try again.',
        });
        return;
      }

      setStatus({
        state: 'success',
        message: "Thanks — your message is with us. We'll reply within one working day.",
      });

      setValues({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
        website: '',
      });
    } catch {
      setStatus({
        state: 'error',
        message:
          'We could not reach the server. Please check your connection, or email us directly.',
      });
    }
  };

  const fieldClass =
    'w-full rounded-lg border border-border-subtle bg-bg px-4 py-3 text-fg placeholder:text-fg-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          required
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          className={fieldClass}
          autoComplete="name"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          className={fieldClass}
          autoComplete="email"
        />
      </div>

      <Field
        label="Company"
        name="company"
        optional
        value={values.company}
        onChange={handleChange}
        className={fieldClass}
        autoComplete="organization"
      />

      <div className="grid gap-5 sm:grid-cols-3">
        <Select
          label="Service"
          name="service"
          optional
          value={values.service}
          onChange={handleChange}
          className={fieldClass}
          options={serviceOptions}
        />
        <Select
          label="Budget"
          name="budget"
          optional
          value={values.budget}
          onChange={handleChange}
          className={fieldClass}
          options={budgetOptions}
        />
        <Select
          label="Timeline"
          name="timeline"
          optional
          value={values.timeline}
          onChange={handleChange}
          className={fieldClass}
          options={timelineOptions}
        />
      </div>

      <div>
        <FieldLabel htmlFor="message" label="What do you need?" required />
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={handleChange}
          placeholder="A few sentences about the project, the problem, or what you are trying to work out."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={fieldClass}
        />
        {errors.message ? <FieldError id="message-error">{errors.message}</FieldError> : null}
      </div>

      {/*
        Honeypot. Hidden from sighted users and from screen readers, and removed
        from the tab order — a human cannot fill it in by accident. Bots fill
        every field they find. `left-[-9999px]` rather than `display:none`,
        because some bots skip fields that are display:none.
      */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button type="submit" size="lg" disabled={status.state === 'sending'}>
          {status.state === 'sending' ? 'Sending…' : 'Send enquiry'}
          {status.state === 'sending' ? null : <Icon name="ArrowRight" size={16} />}
        </Button>
        <p className="text-sm text-fg-subtle">We reply within one working day.</p>
      </div>

      {/*
        role="status" is announced by screen readers without stealing focus.
        Always rendered so the live region exists before the message arrives —
        regions added to the DOM at the same time as their content are often
        not announced.
      */}
      <div role="status" aria-live="polite" className="min-h-[1.5rem]">
        {status.message ? (
          <p
            className={
              status.state === 'success'
                ? 'flex items-center gap-2 text-sm font-medium text-brand'
                : 'flex items-center gap-2 text-sm font-medium text-red-400'
            }
          >
            <Icon
              name={status.state === 'success' ? 'Check' : 'TriangleAlert'}
              size={16}
            />
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/* Small local building blocks — only used by this form, so they live here     */
/* rather than in components/ui.                                              */
/* -------------------------------------------------------------------------- */

function FieldLabel({ htmlFor, label, required, optional }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-fg">
      {label}
      {required ? <span className="ml-1 text-brand">*</span> : null}
      {optional ? <span className="ml-2 text-xs text-fg-subtle">optional</span> : null}
    </label>
  );
}

function FieldError({ id, children }) {
  return (
    <p id={id} className="mt-2 text-sm text-red-400">
      {children}
    </p>
  );
}

function Field({ label, name, error, required, optional, className, ...props }) {
  return (
    <div>
      <FieldLabel htmlFor={name} label={label} required={required} optional={optional} />
      <input
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={className}
        {...props}
      />
      {error ? <FieldError id={`${name}-error`}>{error}</FieldError> : null}
    </div>
  );
}

function Select({ label, name, options, optional, className, ...props }) {
  return (
    <div>
      <FieldLabel htmlFor={name} label={label} optional={optional} />
      <select id={name} name={name} className={className} {...props}>
        <option value="">Select…</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
