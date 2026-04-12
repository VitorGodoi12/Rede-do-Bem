import React from 'react'

type SectionBackground = 'white' | 'light' | 'sand' | 'dark-green' | 'accent-soft'

type SectionProps = {
  id?: string
  title?: string
  titleColor?: string
  background?: SectionBackground
  centered?: boolean
  children: React.ReactNode
  className?: string
  innerMaxWidth?: boolean
}

const bgMap: Record<SectionBackground, string> = {
  white: 'bg-white',
  light: 'bg-[#F4F2EE]',
  sand: 'bg-[#F7EDD8]',
  'dark-green': 'bg-gradient-to-br from-[#174D3E] to-[#0B2E24]',
  'accent-soft': 'bg-[#F7EDD8]',
}

const titleColorMap: Record<SectionBackground, string> = {
  white: 'text-[#0B2E24]',
  light: 'text-[#0B2E24]',
  sand: 'text-[#0B2E24]',
  'dark-green': 'text-[#EDD5A8]',
  'accent-soft': 'text-[#0B2E24]',
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  titleColor,
  background = 'white',
  centered = true,
  children,
  className = '',
  innerMaxWidth = true,
}) => {
  const resolvedTitleColor = titleColor ?? titleColorMap[background]

  return (
    <section id={id} className={`py-14 md:py-[3.5rem] px-8 ${bgMap[background]} ${className}`}>
      <div className={innerMaxWidth ? 'max-w-[1120px] mx-auto' : ''}>
        {title && (
          <h2
            className={`font-[Montserrat,sans-serif] font-extrabold mb-10
              text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2]
              ${centered ? 'text-center' : ''}
              ${resolvedTitleColor}`}
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
