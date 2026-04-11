import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Icons } from './Icons'

const NAV_LINKS = [
  { label: 'Início',      href: '/' },
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Sobre',       href: '/sobre' },
  { label: 'Programas',  href: '/programas' },
  { label: 'Solução',    href: '/solucao' },
  { label: 'FAQ',         href: '/faq' },
  { label: 'Contato',    href: '/contato' },
]

type HeaderProps = {
  logoText: string
}

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-bold px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-1 whitespace-nowrap tracking-wide ${
    isActive
      ? 'text-[#0B2E24] bg-[#EDD5A8]'
      : 'text-white/90 hover:text-[#0B2E24] hover:bg-[#EDD5A8]'
  }`

const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-lg font-bold px-6 py-4 rounded-xl flex items-center gap-2 transition-all duration-300 ${
    isActive
      ? 'text-[#0B2E24] bg-[#EDD5A8]'
      : 'text-white/90 hover:text-[#0B2E24] hover:bg-[#EDD5A8]'
  }`

export const Header: React.FC<HeaderProps> = ({ logoText }) => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[900]"
          onClick={closeMenu}
        />
      )}

      <header className="bg-[#0B2E24] sticky top-0 z-[1000] shadow-lg h-[80px] flex items-center w-full border-b border-white/10">
        <div className="max-w-[1120px] mx-auto px-8 flex justify-between items-center h-full w-full">

          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group no-underline"
          >
            <div className="w-10 h-10 bg-[#1E7A5F] text-white rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md">
              <Icons.Logo size={24} />
            </div>
            <span className="font-[Montserrat,sans-serif] text-xl text-[#EDD5A8] font-black tracking-tight whitespace-nowrap group-hover:text-white transition-colors duration-200">
              {logoText}
            </span>
          </NavLink>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink to={link.href} end={link.href === '/'} className={linkClass}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="flex lg:hidden flex-col justify-center gap-[6px] w-10 h-10 p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all z-[1100] shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
            aria-expanded={isOpen}
          >
            <span className={`block w-full h-0.5 bg-[#EDD5A8] rounded transition-all duration-300 origin-center ${isOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
            <span className={`block w-full h-0.5 bg-[#EDD5A8] rounded transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-full h-0.5 bg-[#EDD5A8] rounded transition-all duration-300 origin-center ${isOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
          </button>
        </div>

        <nav
          className="fixed top-0 h-dvh w-[min(320px,85vw)] bg-[#0B2E24] z-[1000] pt-[calc(80px+2rem)] px-8 pb-8 overflow-y-auto shadow-2xl transition-all duration-300 border-l border-white/10"
          style={{ right: isOpen ? 0 : '-100%' }}
        >
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end={link.href === '/'}
                  className={mobileLinkClass}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
