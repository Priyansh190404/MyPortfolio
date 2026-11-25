import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import FadeInView from '../components/FadeInView'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const socialLinks = [
  {
    name: 'GitHub',
    handle: '@Priyansh190404',
    href: 'https://github.com/Priyansh190404',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.87 10.95.58.1.79-.25.79-.56v-2.05c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19a11.09 11.09 0 015.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.24 2.76.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56C20.21 21.42 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'priyansh-saxena-415056265',
    href: 'https://linkedin.com/in/priyansh-saxena-415056265',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    handle: 'priyansh.saxena1904@gmail.com',
    href: 'mailto:priyansh.saxena1904@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Phone',
    handle: '+91 9045481067',
    href: 'tel:+919045481067',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <SectionWrapper id="contact" className="bg-[#0d0d14]">
      <FadeInView>
        <SectionHeading
          eyebrow="Contact"
          title="I'm Available for Hire"
          subtitle="Looking for a Full-Stack or React Developer? Let's talk — I'd love to be part of your team."
        />
      </FadeInView>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left — social links */}
        <FadeInView direction="right">
          <div className="flex flex-col gap-8">
            <p className="text-slate-400 leading-relaxed">
              I'm actively looking for full-time, internship, or freelance opportunities in
              <span className="text-white font-medium"> full-stack</span> and
              <span className="text-white font-medium"> React development</span>.
              If you think I'd be a good fit for your team, I'd love to hear from you — drop a message and I'll get back to you promptly.
            </p>

            <div className="flex flex-col gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 bg-[#12121a] border border-[#1e1e2e] rounded-xl hover:border-violet-500/30 transition-colors group"
                >
                  <span className="text-violet-400 group-hover:text-violet-300 transition-colors flex-shrink-0">
                    {link.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-white text-sm font-medium">{link.name}</p>
                    <p className="text-slate-500 text-xs truncate">{link.handle}</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-600 ml-auto flex-shrink-0 group-hover:text-violet-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Right — EmailJS form */}
        <FadeInView direction="left" delay={0.1}>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* EmailJS requires these name attributes to match your template variables */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-400 text-xs font-medium">Name</label>
                <input
                  type="text"
                  name="from_name"          /* maps to {{from_name}} in EmailJS template */
                  value={form.name}
                  onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                  placeholder="Your name"
                  required
                  className="bg-[#12121a] border border-[#1e1e2e] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/20 transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-400 text-xs font-medium">Email</label>
                <input
                  type="email"
                  name="reply_to"           /* maps to {{reply_to}} in EmailJS template */
                  value={form.email}
                  onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="your@email.com"
                  required
                  className="bg-[#12121a] border border-[#1e1e2e] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/20 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-slate-400 text-xs font-medium">Subject</label>
              <input
                type="text"
                name="subject"              /* maps to {{subject}} in EmailJS template */
                value={form.subject}
                onChange={(e) => setForm(p => ({ ...p, subject: e.target.value }))}
                placeholder="What's this about?"
                className="bg-[#12121a] border border-[#1e1e2e] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/20 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-slate-400 text-xs font-medium">Message</label>
              <textarea
                name="message"              /* maps to {{message}} in EmailJS template */
                value={form.message}
                onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                placeholder="Tell me about your project or idea..."
                rows={5}
                required
                className="bg-[#12121a] border border-[#1e1e2e] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/20 transition-all resize-none"
              />
            </div>

            {/* Status messages */}
            {status === 'sent' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Message sent! I'll get back to you soon. 🎉
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Something went wrong. Please try emailing me directly at priyansh.saxena1904@gmail.com
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              whileHover={{ scale: status === 'sent' ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors duration-200 hover:shadow-lg hover:shadow-violet-500/25 flex items-center justify-center gap-2"
            >
              {status === 'sending' && (
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
              )}
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent ✓' : 'Send Message'}
            </motion.button>
          </form>
        </FadeInView>
      </div>
    </SectionWrapper>
  )
}
