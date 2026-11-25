const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Priyansh190404',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.87 10.95.58.1.79-.25.79-.56v-2.05c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19a11.09 11.09 0 015.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.24 2.76.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56C20.21 21.42 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/priyansh-saxena-415056265',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:priyansh.saxena1904@gmail.com',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e2e] bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <a href="#hero" className="text-white font-bold text-xl tracking-tight hover:text-violet-400 transition-colors">
              Priyansh<span className="text-violet-500">.</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">
              Full-Stack Developer. Building end-to-end web apps with React, Node.js and AI integrations.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-8 h-8 rounded-lg bg-[#12121a] border border-[#1e1e2e] flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500/40 transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Navigation</p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-violet-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Get in Touch</p>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="mailto:priyansh.saxena1904@gmail.com" className="text-slate-500 hover:text-violet-400 text-sm transition-colors">
                  priyansh.saxena1904@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919045481067" className="text-slate-500 hover:text-violet-400 text-sm transition-colors">
                  +91 9045481067
                </a>
              </li>
              <li className="text-slate-500 text-sm">Bareilly, India 🇮🇳</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e1e2e] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Priyansh Saxena. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Designed & Built by Priyansh Saxena
          </p>
        </div>
      </div>
    </footer>
  )
}
