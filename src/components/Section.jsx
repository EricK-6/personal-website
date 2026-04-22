export default function Section({ id, kicker, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`}>
      <div className="container-page">
        {(kicker || title) && (
          <div className="mb-10 max-w-2xl">
            {kicker && <div className="section-kicker">{kicker}</div>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && (
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
