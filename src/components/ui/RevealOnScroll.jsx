import { motion } from 'framer-motion'

// Thin wrapper around Framer Motion's whileInView pattern.
// Use as the outer element of any block that should fade/slide in on scroll.
export default function RevealOnScroll({
  children,
  delay = 0,
  y = 16,
  duration = 0.6,
  as: Component = 'div',
  className,
  style,
  once = true,
  amount = 0.2,
}) {
  const MotionComponent = motion[Component] || motion.div
  return (
    <MotionComponent
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionComponent>
  )
}
