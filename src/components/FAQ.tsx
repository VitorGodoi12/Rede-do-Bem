import React, { useState } from 'react'
import { Icons } from './Icons'

type FaqItem = {
  question: string
  answer: string
}

type FAQProps = {
  items: FaqItem[]
}

export const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-[800px] mx-auto">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className="rounded-2xl mb-4 overflow-hidden shadow-sm bg-white border border-[#F4F2EE] transition-all duration-300 hover:shadow-md"
          >
            <button
              className={`w-full flex justify-between items-center px-8 py-6 cursor-pointer font-bold text-[#0B2E24] text-base transition-all duration-300 gap-4 select-none text-left
                ${isOpen ? 'bg-[#F7EDD8]' : 'hover:bg-[#F7EDD8]/50'}`}
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              <span className="font-[Montserrat,sans-serif]">{item.question}</span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300
                  ${isOpen ? 'bg-[#D4A96A] text-white rotate-180' : 'bg-[#F4F2EE] text-[#1E7A5F]'}`}
              >
                <Icons.ArrowDown size={16} />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out px-8
                ${isOpen ? 'max-h-[500px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
            >
              <p className="text-[#2D3748] text-base leading-[1.75] font-medium border-l-4 border-l-[#EDD5A8] pl-6">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
