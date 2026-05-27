import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import FadeInView from '../components/FadeInView'

const projects = [
  {
    title: 'Early Prediction of Diabetes & Preventive System',
    description:
      'Developed a full-stack healthcare web application for early diabetes risk prediction using Machine Learning. Implemented a Random Forest model with 98% accuracy that categorises patients into Low, Medium, and High-risk levels with personalised preventive recommendations.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Python', 'Machine Learning', 'Random Forest'],
    status: 'Completed',
    demoUrl: '#',
    codeUrl: 'https://github.com/Priyansh190404/Diabetes-Prediction',
    featured: true,
    highlight: '98% ML Accuracy',
  },
  {
    title: 'OLA Sales Data Analysis',
    description:
      'Analysed OLA ride-booking sales data using SQL and Python (Jupyter Notebook) to uncover revenue trends and customer insights. Built interactive dashboards in Power BI for business reporting and strategic decision-making.',
    tags: ['Python', 'SQL', 'Power BI', 'Pandas', 'Jupyter Notebook', 'EDA'],
    status: 'Completed',
    demoUrl: '#',
    codeUrl: 'https://github.com/Priyansh190404/Ola-Sales-Analysis',
    featured: true,
    highlight: 'Power BI Dashboard',
  },
  {
    title: 'Memory Card Game',
    description:
      'A fun and interactive memory card game built and deployed as a frontend project. Demonstrates React state management, component design, and smooth game logic.',
    tags: ['React.js', 'JavaScript', 'CSS3'],
    status: 'Completed',
    demoUrl: '#',
    codeUrl: 'https://github.com/Priyansh190404',
    featured: false,
    highlight: 'Deployed',
  },
]

const statusColors = {
  Live: 'bg-green-500/10 text-green-400 border-green-500/20',
  'In Progress': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  Completed: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Archived: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(124,58,237,0.12)' }}
      className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-6 flex flex-col gap-4 hover:border-violet-500/30 transition-colors group"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/20 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <div className="flex items-center gap-2">
          {project.highlight && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
              ✦ {project.highlight}
            </span>
          )}
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusColors[project.status] || statusColors.Completed}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Title & description */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-violet-300 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 rounded-md bg-[#1a1a2e] text-slate-400 text-xs border border-[#1e1e2e]">
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-2 border-t border-[#1e1e2e]">
        <a
          href={project.demoUrl}
          className="flex items-center gap-1.5 text-slate-400 hover:text-violet-300 text-xs font-medium transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Live Demo
        </a>
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-slate-400 hover:text-violet-300 text-xs font-medium transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.87 10.95.58.1.79-.25.79-.56v-2.05c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19a11.09 11.09 0 015.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.24 2.76.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56C20.21 21.42 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
          </svg>
          GitHub
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <SectionWrapper id="projects" className="bg-[#0d0d14]">
      <FadeInView>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          subtitle="A selection of projects showcasing my full-stack and data analytics skills."
        />
      </FadeInView>

      {/* Featured */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {featured.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Rest */}
      {rest.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + 2} />
          ))}
        </div>
      )}

      <FadeInView delay={0.2}>
        <div className="mt-10 text-center">
          <a
            href="https://github.com/Priyansh190404"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
          >
            View all projects on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </FadeInView>
    </SectionWrapper>
  )
}
