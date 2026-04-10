import React from 'react'

type ContactLink = {
  label: string
  href: string
}

type ContactChannel = {
  sectionLabel: string
  sectionIcon: React.ReactNode
  links: ContactLink[]
}

type ContactInfoProps = {
  title: string
  channels: ContactChannel[]
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ title, channels }) => {
  return (
    <aside className="bg-[#0B2E24] rounded-2xl px-8 py-10 text-white shadow-lg border-b-8 border-b-[#D4A96A]">
      <h2 className="font-[Montserrat,sans-serif] text-2xl font-extrabold text-[#EDD5A8] mb-10 leading-tight">
        {title}
      </h2>
      <div className="space-y-10">
        {channels.map((ch, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 mb-4 text-[#D4A96A]">
              {ch.sectionIcon}
              <h3 className="text-xs font-black uppercase tracking-[0.15em] font-[Inter,sans-serif]">
                {ch.sectionLabel}
              </h3>
            </div>
            <ul className="space-y-3">
              {ch.links.map((link, j) => (
                <li key={j}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-white/90 text-base transition-colors duration-150 hover:text-[#EDD5A8] font-medium flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#1E7A5F]"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  )
}
