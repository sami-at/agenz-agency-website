import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function EmailIcon() {
  return (
    <svg className="ch-svg ch-svg-email" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="3" stroke="url(#cEmailGrad)" strokeWidth="1.5"/>
      <path d="M2 8l10 7 10-7" stroke="url(#cEmailGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="cEmailGrad" x1="2" y1="4" x2="22" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a78bfa"/>
          <stop offset="100%" stopColor="#00f5d4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="ch-svg ch-svg-instagram" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#cIgGrad)" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4.5" stroke="url(#cIgGrad)" strokeWidth="1.5"/>
      <circle cx="17.5" cy="6.5" r="1.25" fill="#f09433"/>
      <defs>
        <linearGradient id="cIgGrad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f09433"/>
          <stop offset="35%" stopColor="#dc2743"/>
          <stop offset="70%" stopColor="#cc2366"/>
          <stop offset="100%" stopColor="#bc1888"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

const channels = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'agenz.dev@gmail.com',
    href: 'mailto:agenz.dev@gmail.com',
  },
  {
    icon: <InstagramIcon />,
    label: 'Instagram',
    value: '@agenz.dev',
    href: 'https://www.instagram.com/agenz.dev/',
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [focused, setFocused] = useState(null);
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText('agenz.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSending(true);

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setSending(false);
        setSent(true);
        formRef.current?.reset();
        setTimeout(() => setSent(false), 5000);
      })
      .catch((err) => {
        setSending(false);
        setError('Something went wrong. Please try again or email us directly.');
        console.error('EmailJS error:', err);
      });
  }

  return (
    <section className="contact-section" id="contact">
      {/* ambient orbs */}
      <div className="contact-ambient" aria-hidden="true">
        <div className="contact-orb contact-orb-a" />
        <div className="contact-orb contact-orb-b" />
      </div>

      <div className="contact-inner">
        {/* ── Left column ── */}
        <div className="contact-left reveal">
          <span className="contact-eyebrow">Get in touch</span>
          <h2 className="contact-title">
            <span className="ct-w1">Let's</span>
            <span className="ct-w2">build</span>
            <span className="ct-w3">together</span>
          </h2>
          <p className="contact-desc">
            Have a project in mind? Tell us about it — we'll get back to you
            within one business day.
          </p>

          <div className="contact-channels">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="contact-channel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ch-icon">{c.icon}</span>
                <span className="ch-text">
                  <span className="ch-label">{c.label}</span>
                  <span className="ch-value">{c.value}</span>
                </span>
                {c.label === 'Email' ? (
                  <button
                    className={`ch-copy${copied ? ' ch-copy--done' : ''}`}
                    aria-label="Copy email"
                    onClick={(e) => { e.preventDefault(); copyEmail(); }}
                  >
                    {copied ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    )}
                  </button>
                ) : (
                  <span className="ch-arrow">↗</span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right column — Form ── */}
        <div className="contact-right reveal" style={{ transitionDelay: '.1s' }}>
          <div className="contact-form-wrap">
            <div className="cfm-border" />
            <div className="cfm-glow" />

            {sent ? (
              <div className="cfm-success">
                <span className="cfm-success-icon">✓</span>
                <p className="cfm-success-title">Message received!</p>
                <p className="cfm-success-sub">We'll be in touch soon.</p>
              </div>
            ) : (
              <form
                ref={formRef}
                className="cfm-inner"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="cfm-row">
                  <div
                    className={`cfm-field${focused === 'name' ? ' cfm-field--focus' : ''}`}
                  >
                    <label htmlFor="cf-name" className="cfm-label">
                      Name
                    </label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      className="cfm-input"
                      placeholder="Your name"
                      required
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div
                    className={`cfm-field${focused === 'email' ? ' cfm-field--focus' : ''}`}
                  >
                    <label htmlFor="cf-email" className="cfm-label">
                      Email
                    </label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      className="cfm-input"
                      placeholder="you@example.com"
                      required
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div
                  className={`cfm-field${focused === 'subject' ? ' cfm-field--focus' : ''}`}
                >
                  <label htmlFor="cf-subject" className="cfm-label">
                    Subject
                  </label>
                  <input
                    id="cf-subject"
                    name="subject"
                    type="text"
                    className="cfm-input"
                    placeholder="Project type or topic"
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div
                  className={`cfm-field cfm-field--grow${focused === 'message' ? ' cfm-field--focus' : ''}`}
                >
                  <label htmlFor="cf-message" className="cfm-label">
                    Message
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    className="cfm-input cfm-textarea"
                    placeholder="Tell us about your project…"
                    rows={5}
                    required
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <button type="submit" className="btn-primary cfm-submit" disabled={sending}>
                  <span className="btn-glow-text">
                    {sending ? 'Sending…' : 'Send message'}
                    {!sending && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    )}
                  </span>
                </button>
                {error && <p className="cfm-error">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
