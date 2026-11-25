import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import FadeInView from '../components/FadeInView'

const experiences = [
  {
    type: 'work',
    role: 'Data Analytics Intern',
    company: 'CETPA Infotech Pvt. Ltd.',
    period: 'Jun 2025 – Aug 2025',
    location: 'Noida, India',
    bullets: [
      'Analysed OLA ride and sales data using SQL (joins, aggregations, filtering) to identify trends and insights, and presented findings to stakeholders.',
      'Wrote SQL queries to track revenue, bookings and cancellations, helping the team understand key metrics.',
      'Cleaned and transformed 10,000 records in Python (Pandas) and built a Power BI dashboard to summarise sales performance.',
    ],
    tags: ['SQL', 'Python', 'Pandas', 'Power BI'],
  },
]

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Shri Ram Murti Smarak College of Engineering & Technology (Dr. APJ Abdul Kalam Technical University), Lucknow',
    period: '2022 – 2026',
    detail: 'CGPA: 7.61',
    icon: '🎓',
  },
  {
    degree: 'Class XII',
    institution: 'Hartmann College, Bareilly',
    period: '2022',
    detail: 'Percentage: 78%',
    icon: '📘',
  },
  {
    degree: 'Class X',
    institution: 'Hartmann College, Bareilly',
    period: '2020',
    detail: 'Percentage: 88%',
    icon: '📗',
  },
]

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Work Experience */}
      <FadeInView>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've Worked"
          subtitle="My professional journey and academic background."
        />
      </FadeInView>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-[#1e1e2e] to-transparent" />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative pl-16 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full bg-violet-600 border-2 border-[#0a0a0f] shadow-lg shadow-violet-500/40 z-10" />

              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-6 hover:border-violet-500/30 transition-colors hover:shadow-lg hover:shadow-violet-500/5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                    <p className="text-violet-400 font-medium text-sm">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <span className="text-slate-500 text-xs px-2.5 py-1 rounded-full bg-[#1a1a2e] border border-[#1e1e2e] whitespace-nowrap">
                      {exp.period}
                    </span>
                    <span className="text-slate-600 text-xs flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="flex flex-col gap-2 mb-4">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0 mt-2" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-300 text-xs font-medium border border-violet-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-20">
        <FadeInView>
          <SectionHeading
            eyebrow="Education"
            title="Academic Background"
            subtitle="Where I've been shaped academically."
          />
        </FadeInView>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-6 hover:border-violet-500/30 transition-colors hover:shadow-lg hover:shadow-violet-500/5"
            >
              <div className="text-3xl mb-3">{edu.icon}</div>
              <p className="text-slate-500 text-xs font-medium mb-1">{edu.period}</p>
              <h3 className="text-white font-semibold text-base mb-1 leading-snug">{edu.degree}</h3>
              <p className="text-slate-500 text-xs mb-3">{edu.institution}</p>
              <span className="inline-block px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-300 text-xs font-medium border border-violet-500/20">
                {edu.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
