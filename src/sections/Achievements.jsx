import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import FadeInView from '../components/FadeInView'

const achievements = [
  {
    icon: '🏆',
    title: 'National Level Technical Fest — 3rd Position',
    description: 'Secured 3rd position in a National Level Technical Fest organised at SRMSCET, Bareilly.',
    badge: '3rd Place',
    badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  },
  {
    icon: '🎯',
    title: 'Technical Quiz — 3rd Position',
    description: 'Secured 3rd position in a Technical Quiz organised at SRMSCETR, Bareilly.',
    badge: '3rd Place',
    badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  },
  {
    icon: '🎓',
    title: 'Academic Excellence Scholarship',
    description: 'Received a scholarship worth ₹20,000 in B.Tech for outstanding academic performance.',
    badge: '₹20,000 Scholarship',
    badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
  },
]

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <FadeInView>
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition & Awards"
          subtitle="Milestones and recognition I've earned along the way."
        />
      </FadeInView>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(124,58,237,0.1)' }}
            className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-6 flex flex-col gap-4 hover:border-violet-500/30 transition-colors text-center"
          >
            <div className="text-5xl">{item.icon}</div>

            <span className={`inline-block self-center px-3 py-1 rounded-full text-xs font-semibold border ${item.badgeColor}`}>
              {item.badge}
            </span>

            <h3 className="text-white font-semibold text-base leading-snug">{item.title}</h3>

            <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
