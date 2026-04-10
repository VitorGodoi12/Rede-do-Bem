import React from 'react'
import { Card } from './Card'

type DiferencialItem = {
  title: string
  description: string
  badge: string
}

type DiferenciaisProps = {
  id?: string
  title: string
  items: DiferencialItem[]
}

export const Diferenciais: React.FC<DiferenciaisProps> = ({ id, title, items }) => {
  return (
    <section
      id={id}
      className="py-14 px-8 bg-gradient-to-br from-[#174D3E] to-[#0B2E24]"
    >
      <div className="max-w-[1120px] mx-auto">
        <h2
          className="font-[Montserrat,sans-serif] font-extrabold text-[#EDD5A8] text-center mb-10 leading-[1.2]"
          style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}
        >
          {title}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {items.map((item, i) => (
            <Card
              key={i}
              variant="fundamentacao"
              title={item.title}
              description={item.description}
              badge={item.badge}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
