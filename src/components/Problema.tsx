import React from 'react'
import { Button } from './Button'
import { Icons } from './Icons'

type ProblemaProps = {
  title: string
  description: string
  problems: string[]
  callout: string
  ctaLabel: string
  ctaHref?: string
}

export const Problema: React.FC<ProblemaProps> = ({
  title,
  description,
  problems,
  callout,
  ctaLabel,
  ctaHref = '#solucao',
}) => {
  return (
    <section className="bg-white py-14 px-8">
      <div className="max-w-[1120px] mx-auto text-center">
        <h2
          className="font-[Montserrat,sans-serif] font-extrabold text-[#0B2E24] mb-8 leading-[1.2]"
          style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}
        >
          {title}
        </h2>

        <p className="text-[#2D3748] text-lg leading-[1.75] max-w-[750px] mx-auto mb-10 font-medium">
          {description}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12 max-w-[900px] mx-auto">
          {problems.map((problem, i) => (
            <li
              key={i}
              className="bg-[#F4F2EE] border-l-4 border-l-[#1E7A5F] rounded-2xl px-6 py-5 shadow-sm text-[#2D3748] font-semibold leading-[1.7] flex items-start gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-l-[#D4A96A]"
            >
              <div className="text-[#1E7A5F] mt-1 shrink-0">
                <Icons.X size={18} />
              </div>
              {problem}
            </li>
          ))}
        </ul>

        <div className="bg-[#F7EDD8] p-8 rounded-2xl max-w-[750px] mx-auto mb-10 border-2 border-dashed border-[#D4A96A]">
          <p className="text-[#0B2E24] font-black text-xl font-[Montserrat,sans-serif]">{callout}</p>
        </div>

        <Button label={ctaLabel} href={ctaHref} variant="primary" />
      </div>
    </section>
  )
}
