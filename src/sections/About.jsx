import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import FadeInView from '../components/FadeInView'

const stats = [
  { value: '3+', label: 'Projects Built' },
  { value: '98%', label: 'ML Model Accuracy' },
  { value: '7.57', label: 'B.Tech CGPA' },
  { value: '10+', label: 'Technologies' },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <FadeInView>
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          subtitle="A little bit about my background and what drives me."
        />
      </FadeInView>

      <div className="grid md:grid-cols-2 gap-14 items-center">
        {/* Profile Photo */}
        <FadeInView direction="right">
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-600/40 to-indigo-600/40 blur-md -z-10" />

              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-violet-500/20 shadow-2xl shadow-violet-500/10"
              >
                <img
                  src="/profile.jpg"
                  alt="Priyansh Saxena"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 bg-[#12121a] border border-[#1e1e2e] rounded-xl px-3 py-2 text-xs text-violet-300 font-medium shadow-xl"
              >
                Available for hire ✨
              </motion.div>
            </div>
          </div>
        </FadeInView>

        {/* Bio */}
        <FadeInView direction="left" delay={0.1}>
          <div className="flex flex-col gap-6">
            <p className="text-slate-400 leading-relaxed">
              👋 Hey! I'm <span className="text-white font-medium">Priyansh Saxena</span> — a React Developer
              & Data Analytics Enthusiast based in <span className="text-white font-medium">Bareilly, India</span>.
             I’m a recent Computer Science graduate from Dr. APJ Abdul Kalam Technical University, Lucknow.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I specialise in building responsive, performant web applications with React.js and full-stack
              technologies, while also leveraging Python, SQL, and Power BI to turn raw data into actionable business insights.
              I love the intersection of clean code and intelligent data.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ scale: 1.04 }}
                  className="bg-[#12121a] border border-[#1e1e2e] hover:border-violet-500/30 rounded-xl p-4 text-center transition-colors cursor-default"
                >
                  <div className="text-2xl font-bold text-violet-400">{stat.value}</div>
                  <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <a
              href="/Priyansh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start px-5 py-2.5 border border-[#1e1e2e] hover:border-violet-500/50 text-slate-300 hover:text-white text-sm font-medium rounded-xl transition-all bg-[#12121a] hover:bg-[#1a1a2e] hover:-translate-y-0.5 mt-2"
            >
              Download Resume
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </FadeInView>
      </div>
    </SectionWrapper>
  )
}
