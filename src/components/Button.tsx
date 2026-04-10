import React from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'submit'

type ButtonProps = {
  label: string
  href?: string
  variant?: ButtonVariant
  icon?: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  className?: string
}

const isExternal = (href: string) =>
  href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')

export const Button: React.FC<ButtonProps> = ({
  label,
  href,
  variant = 'primary',
  icon,
  onClick,
  type = 'button',
  fullWidth = false,
  className = '',
}) => {
  const base =
    'inline-flex items-center gap-2 font-bold text-base transition-all duration-300 cursor-pointer'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'px-7 py-3 rounded-full border-2 border-transparent bg-[#1E7A5F] text-white shadow-sm hover:bg-[#0B2E24] hover:shadow-md hover:-translate-y-0.5',
    secondary:
      'px-7 py-3 rounded-full border-2 border-[#1E7A5F] bg-transparent text-[#1E7A5F] hover:bg-[#1E7A5F] hover:text-white',
    submit:
      'w-full justify-center px-8 py-[0.85rem] rounded-full border-none bg-[#1E7A5F] text-white shadow-sm hover:bg-[#0B2E24] hover:shadow-md hover:-translate-y-0.5',
  }

  const classes = [
    base,
    variants[variant],
    fullWidth ? 'w-full justify-center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && <span>{icon}</span>}
      {label}
    </>
  )

  if (href) {
    if (isExternal(href)) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      )
    }
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
