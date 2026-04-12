import React from 'react'

type IntroHeroProps = {
  title: string
  description: React.ReactNode
}

export const IntroHero: React.FC<IntroHeroProps> = ({ title, description }) => {
  return (
    <section className="bg-gradient-to-br from-[#0B2E24] to-[#174D3E] py-[3.5rem] px-8 text-center relative overflow-hidden">
      <h2 className="font-[Montserrat,sans-serif] font-extrabold text-[#EDD5A8] mb-6 leading-[1.15]"
        style={{ fontSize: 'clamp(1.75rem,4vw,3rem)' }}
      >
        {title}
      </h2>
      <p className="max-w-[800px] mx-auto text-lg text-white/95 leading-[1.75] font-medium">
        {description}
      </p>
    </section>
  )
}
