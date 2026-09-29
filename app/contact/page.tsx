'use client';

import { useState } from 'react';
import { Mail, ArrowRight, Send } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/ui/SocialIcons';

const SOCIAL_LINKS = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    handle: '@washingtonkaranja',
    href: 'https://github.com/washingtonkaranja',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    handle: 'Washington Karanja',
    href: 'https://linkedin.com/in/washingtonkaranja',
  },
  {
    icon: XIcon,
    label: 'X / Twitter',
    handle: '@washingtonkaranja',
    href: 'https://x.com/washingtonkaranja',
  },
];

const EMAIL = 'washington@example.com';

type FormState = { name: string; email: string; message: string };
const EMPTY: FormState = { name: '', email: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (field: keyof FormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm(current => ({ ...current, [field]: event.target.value }));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSending(true);
    await new Promise(resolve => setTimeout(resolve, 900));
    setSent(true);
    setSending(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-24">
        <div>
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-4">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-[#ebebeb] mb-5 leading-tight">
              Let&apos;s work<br />together.
            </h1>
            <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-[1.7] max-w-xs mb-10">
              Open to select frontend freelance projects, design-engineering collaborations, and
              interesting conversations.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2.5 px-5 py-3 bg-accent text-white text-[13.5px] font-medium rounded-md hover:opacity-90 transition-opacity mb-14"
            >
              <Mail size={15} />
              {EMAIL}
              <ArrowRight size={14} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="font-mono text-[11px] tracking-[0.18em] uppercase text-neutral-400 dark:text-neutral-600 mb-5">
              Find me on
            </h2>
            <div className="space-y-1.5">
              {SOCIAL_LINKS.map(({ icon: Icon, label, handle, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} — ${handle}`}
                  className="flex items-center gap-3.5 py-3 px-3.5 rounded-xl border border-transparent hover:border-neutral-200 dark:hover:border-white/[0.07] hover:bg-neutral-50 dark:hover:bg-white/[0.03] transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg border border-neutral-200 dark:border-white/[0.08] flex items-center justify-center text-neutral-500 dark:text-neutral-500 group-hover:border-accent group-hover:text-accent group-hover:bg-accent/5 transition-all shrink-0">
                    <Icon size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13.5px] font-medium text-neutral-700 dark:text-neutral-300">{label}</p>
                    <p className="text-[11.5px] text-neutral-400 dark:text-neutral-600 font-mono">{handle}</p>
                  </div>
                  <ArrowRight size={13} className="text-neutral-300 dark:text-neutral-700 group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.12}>
          <div className="border border-neutral-200 dark:border-white/[0.07] rounded-2xl p-6 md:p-8 bg-neutral-50/40 dark:bg-white/[0.015]">
            {sent ? (
              <div className="py-8 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                  <Send size={18} className="text-accent" />
                </div>
                <h2 className="font-semibold text-[15px] mb-2">Message sent</h2>
                <p className="text-[13.5px] text-neutral-500 dark:text-neutral-400 max-w-[220px] leading-relaxed">
                  Thanks for reaching out — I&apos;ll be in touch shortly.
                </p>
                <button
                  onClick={() => { setSent(false); setForm(EMPTY); }}
                  className="mt-7 text-[12px] text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h2 className="font-mono text-[11px] tracking-[0.18em] uppercase text-neutral-400 dark:text-neutral-600 mb-6">
                    Send a message
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    id="name"
                    label="Name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={set('name')}
                    required
                  />
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={set('email')}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11.5px] font-medium text-neutral-500 dark:text-neutral-500 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={set('message')}
                    className="w-full px-3.5 py-2.5 text-[13.5px] bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/[0.08] rounded-lg placeholder-neutral-300 dark:placeholder-neutral-700 focus:outline-none focus:border-accent dark:focus:border-accent/70 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-white text-[13.5px] font-medium rounded-lg hover:opacity-90 disabled:opacity-60 transition-opacity"
                >
                  {sending ? (
                    <>
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

interface FieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function Field({ id, label, type, placeholder, value, onChange, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11.5px] font-medium text-neutral-500 dark:text-neutral-500 mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3.5 py-2.5 text-[13.5px] bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/[0.08] rounded-lg placeholder-neutral-300 dark:placeholder-neutral-700 focus:outline-none focus:border-accent dark:focus:border-accent/70 transition-colors"
      />
    </div>
  );
}
