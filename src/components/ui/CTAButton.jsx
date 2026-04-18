import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './CTAButton.css'

export default function CTAButton({
  to,
  href,
  children,
  variant = 'primary',
  size = 'md',
  withArrow = true,
  onClick,
  type,
  disabled,
  className = '',
}) {
  const classes = `cta cta--${variant} cta--${size}${className ? ' ' + className : ''}`
  const inner = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type || 'button'} className={classes} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  )
}
