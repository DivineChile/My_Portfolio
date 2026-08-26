import React, { useState } from 'react'
import { HiOutlineClipboard, HiOutlineCheck, HiOutlineExclamationTriangle } from 'react-icons/hi2'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import emailjs from '@emailjs/browser'
import { personalInfo } from '../data/projects'
import { EMAILJS } from '../lib/emailjs'

const SOCIALS = [
  { name: 'GitHub', href: personalInfo.socials.github, Icon: FaGithub },
  { name: 'LinkedIn', href: personalInfo.socials.linkedin, Icon: FaLinkedin },
  { name: 'X', href: personalInfo.socials.twitter, Icon: FaXTwitter },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      /* clipboard unavailable — the mailto link beside it still works */
    }
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS.publicKey }
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
    }
  }

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    // Clear a prior result once the visitor starts a new message.
    if (status === 'sent' || status === 'error') setStatus('idle')
  }

  const sending = status === 'sending'

  return (
    <section id="contact" className="scroll-mt-24 border-t border-rule bg-paper-2">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="border-b border-rule pb-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Contact</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Letter */}
          <div className="lg:col-span-6">
            <h2 className="font-display text-[clamp(1.9rem,3.5vw+0.4rem,3rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-ink">
              Let&rsquo;s build something worth shipping.
            </h2>
            <p className="mt-5 max-w-md font-body text-lg leading-relaxed text-ink-2">
              Open to front-end and full-stack work, freelance or full-time. Write directly or use
              the form — both land in the same inbox.
            </p>

            <div className="mt-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Email
              </span>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="border-b-2 border-ink font-display text-xl font-medium text-ink transition-colors hover:border-accent hover:text-accent sm:text-2xl"
                >
                  {personalInfo.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                  className="flex h-8 w-8 items-center justify-center rounded-ctl border border-rule text-muted transition-colors hover:text-ink"
                >
                  {copied ? (
                    <HiOutlineCheck className="h-4 w-4 text-accent" />
                  ) : (
                    <HiOutlineClipboard className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-rule pt-6 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  Based in
                </dt>
                <dd className="mt-1 font-body text-base text-ink-2">{personalInfo.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  Phone
                </dt>
                <dd className="mt-1 font-body text-base text-ink-2">
                  <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="hover:text-accent">
                    {personalInfo.phone}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex items-center gap-5 border-t border-rule pt-6">
              {SOCIALS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-muted transition-colors hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Send form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={sendMessage}
              aria-busy={sending}
              className="border border-rule bg-paper p-6 sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="c-name"
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    disabled={sending}
                    autoComplete="name"
                    className="mt-2 w-full rounded-ctl border border-rule bg-paper-2 px-3 py-2.5 font-body text-base text-ink placeholder:text-muted/70 disabled:opacity-60"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="c-email"
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    disabled={sending}
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-ctl border border-rule bg-paper-2 px-3 py-2.5 font-body text-base text-ink placeholder:text-muted/70 disabled:opacity-60"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="c-msg"
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="c-msg"
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    disabled={sending}
                    required
                    className="mt-2 w-full resize-none rounded-ctl border border-rule bg-paper-2 px-3 py-2.5 font-body text-base text-ink placeholder:text-muted/70 disabled:opacity-60"
                    placeholder="What are you building?"
                  />
                </div>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="rounded-ctl bg-accent px-5 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-accent-ink transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? 'Sending…' : 'Send message'}
                  </button>
                  {status === 'idle' && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      Goes straight to my inbox
                    </span>
                  )}
                </div>

                <p
                  role="status"
                  aria-live="polite"
                  className="mt-3 min-h-[1.25rem] font-mono text-[11px] leading-relaxed"
                >
                  {status === 'sent' && (
                    <span className="inline-flex items-center gap-1.5 text-ink-2">
                      <HiOutlineCheck className="h-4 w-4 shrink-0 text-accent" />
                      Message sent — thanks. I&rsquo;ll get back to you shortly.
                    </span>
                  )}
                  {status === 'error' && (
                    <span className="inline-flex items-start gap-1.5 text-accent">
                      <HiOutlineExclamationTriangle className="mt-px h-4 w-4 shrink-0" />
                      <span>
                        Couldn&rsquo;t send just now. Please email me directly at{' '}
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="underline decoration-2 underline-offset-2"
                        >
                          {personalInfo.email}
                        </a>
                        .
                      </span>
                    </span>
                  )}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
