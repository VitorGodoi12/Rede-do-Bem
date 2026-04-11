import React from 'react'
import { Link } from 'react-router-dom'

const FOOTER_LINKS = [
  { label: 'Início',      href: '/' },
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Sobre',       href: '/sobre' },
  { label: 'Programas',  href: '/programas' },
  { label: 'Solução',    href: '/solucao' },
  { label: 'FAQ',         href: '/faq' },
  { label: 'Contato',    href: '/contato' },
]

type FooterProps = {
  copyright?: string
}

export const Footer: React.FC<FooterProps> = ({ 
  copyright = "© 2025 Turma do Bem — Todos os direitos reservados" 
}) => {
  return (
    <footer className="bg-[#0B2E24] text-white py-8 px-8">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-white/85 font-medium">{copyright}</p>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-bold text-white/90 px-2 py-1 rounded transition-colors duration-150 hover:text-[#D4A96A]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
 
