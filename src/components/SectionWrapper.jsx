export default function SectionWrapper({ id, className = '', children }) {
  return (
    <section
      id={id}
      className={`py-24 px-6 max-w-6xl mx-auto w-full ${className}`}
    >
      {children}
    </section>
  )
}
