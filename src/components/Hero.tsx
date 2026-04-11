import React from 'react'

type HeroProps = {
  title: string
  paragraphs: string[]
}

export const Hero: React.FC<HeroProps> = ({ title, paragraphs }) => {
  return (
    <section
      className="bg-gradient-to-br from-[#0B2E24] to-[#174D3E] py-[3.5rem] px-8 text-center relative overflow-hidden"
    >
      {/* Decorative blob */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none -top-[200px] -right-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(212,169,106,0.12) 0%, transparent 70%)',
        }}
      />

      <h2
        className="font-[Montserrat,sans-serif] font-extrabold text-[#EDD5A8] mb-6 max-w-[800px] mx-auto leading-[1.15]"
        style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}
      >
        {title}
      </h2>

      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="max-w-[750px] mx-auto mb-4 text-lg text-white/95 leading-[1.75] font-medium"
        >
          {p}
        </p>
      ))}
    </section>
  )
}
