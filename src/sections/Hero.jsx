import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-600/10 rounded-full blur-[140px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, delay: 0.3, ease: 'easeOut' }}
          className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for hire
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-4"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Priyansh Saxena
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-slate-400 font-medium mb-6"
        >
          Full-Stack Developer · React · Node.js · AI Integrations
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={item}
          className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I build and ship end-to-end web apps — from real-time features with Socket.IO to AI integrations with Gemini and RAG.
          Actively seeking roles in <span className="text-violet-400">full-stack</span> and <span className="text-violet-400">React development</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 border border-[#1e1e2e] hover:border-violet-500/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 bg-[#12121a] hover:bg-[#1a1a2e] hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={item}
          className="mt-20 flex flex-col items-center gap-2 text-slate-600 animate-bounce"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
