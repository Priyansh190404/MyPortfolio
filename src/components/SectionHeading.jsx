export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-14 text-center">
      {eyebrow && (
        <span className="inline-block text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
