import { useEffect, useRef, useState } from 'react'

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 700,
  threshold = 0.15,
  className = '',
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <Tag
      ref={ref}
      {...rest}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        opacity: visible ? 1 : 0,
      }}
      className={`transition-[transform,opacity] ease-out will-change-transform ${className}`}
    >
      {children}
    </Tag>
  )
}
