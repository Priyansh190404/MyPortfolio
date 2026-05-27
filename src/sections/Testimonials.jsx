import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import FadeInView from '../components/FadeInView'

const testimonials = [
  {
    quote:
      'Placeholder — A kind word from a colleague, client, or manager. Testimonials add credibility and a human touch to your portfolio.',
    name: 'Jane Doe',
    role: 'Product Manager @ Company',
  },
  {
    quote:
      'Placeholder — What did they say about your work ethic, technical skills, or collaboration style? A 2–3 sentence quote works great.',
    name: 'John Smith',
    role: 'CTO @ Startup',
  },
  {
    quote:
      'Placeholder — Even a LinkedIn recommendation snippet works here. Keep it short, genuine, and specific.',
    name: 'Alex Johnson',
    role: 'Senior Engineer @ Tech Co',
  },
]

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <FadeInView>
        <SectionHeading
          eyebrow="Testimonials"
          title="What People Say"
          subtitle="Kind words from people I've had the pleasure of working with."
        />
      </FadeInView>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -6 }}
            className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-6 flex flex-col gap-4 hover:border-violet-500/30 transition-colors"
          >
            <svg className="w-8 h-8 text-violet-500/40" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.654 1.346-3 3-3h1V8h-1zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.654 1.346-3 3-3h1V8h-1z" />
            </svg>

            <p className="text-slate-400 text-sm leading-relaxed italic flex-1">"{t.quote}"</p>

            <div className="flex items-center gap-3 pt-4 border-t border-[#1e1e2e]">
              <div className="w-10 h-10 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-300 font-semibold text-sm flex-shrink-0">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{t.name}</p>
                <p className="text-slate-500 text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
