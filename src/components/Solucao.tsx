import React from 'react'
import { Card } from './Card'
import { Icons } from './Icons'

type SolucaoItem = {
  iconKey: keyof typeof Icons
  title: string
  description: string
}

type SolucaoProps = {
  id?: string
  title: string
  items: SolucaoItem[]
}

export const Solucao: React.FC<SolucaoProps> = ({ id, title, items }) => {
  return (
    <section id={id} className="bg-[#F4F2EE] py-14 px-8">
      <div className="max-w-[1120px] mx-auto">
        <h2
          className="font-[Montserrat,sans-serif] font-extrabold text-[#0B2E24] text-center mb-10 leading-[1.2]"
          style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}
        >
          {title}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {items.map((item, i) => {
            const IconComponent = Icons[item.iconKey]
            return (
              <Card
                key={i}
                variant="sobre"
                icon={<IconComponent size={32} />}
                title={item.title}
                description={item.description}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
