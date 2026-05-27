import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import FadeInView from '../components/FadeInView'

const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5 & CSS3', 'Tailwind CSS', 'REST API Integration'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    category: 'Data Analytics',
    icon: '📊',
    skills: ['Python', 'Pandas', 'NumPy', 'Power BI', 'Jupyter Notebook', 'EDA & Data Visualization', 'SQL'],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Git & GitHub', 'VS Code', 'Postman'],
  },
]

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-[#0d0d14]">
      <FadeInView>
        <SectionHeading
          eyebrow="Skills"
          title="What I Work With"
          subtitle="Technologies and tools I use to build products and derive data insights."
        />
      </FadeInView>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(124,58,237,0.12)' }}
            className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-6 hover:border-violet-500/30 transition-colors group cursor-default"
          >
            <div className="text-3xl mb-3">{cat.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-4 group-hover:text-violet-300 transition-colors">
              {cat.category}
            </h3>
            <ul className="flex flex-col gap-2">
              {cat.skills.map((skill, j) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                  className="flex items-center gap-2 text-slate-400 text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
