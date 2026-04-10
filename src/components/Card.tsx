import React from 'react'
import { Icons } from './Icons'

type CardVariant = 'turma' | 'sobre' | 'integrante' | 'programa' | 'fundamentacao'

type CardTurmaProps = {
  variant: 'turma'
  content: React.ReactNode
}

type CardSobreProps = {
  variant: 'sobre'
  number?: string
  emoji?: string
  icon?: React.ReactNode
  title: string
  description: string
}

type CardIntegranteProps = {
  variant: 'integrante'
  name: string
  rm: string
  turma?: string
  githubUrl: string
  linkedinUrl: string
  photoSrc?: string
  photoAlt?: string
}

type CardProgramaProps = {
  variant: 'programa'
  icon: React.ReactNode
  tag: string
  title: string
  description: string
  accentColor?: 'green' | 'sand'
}

type CardFundamentacaoProps = {
  variant: 'fundamentacao'
  title: string
  description: string
  badge: string
}

type CardProps =
  | CardTurmaProps
  | CardSobreProps
  | CardIntegranteProps
  | CardProgramaProps
  | CardFundamentacaoProps

export const Card: React.FC<CardProps> = (props) => {
  /* ---- card-turma (index) ---- */
  if (props.variant === 'turma') {
    return (
      <article className="bg-white rounded-xl px-8 py-8 shadow-sm border-l-4 border-l-[#1E7A5F] text-left transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-l-[#D4A96A]">
        <div className="text-[#2D3748] text-base leading-[1.7] font-medium">{props.content}</div>
      </article>
    )
  }

  /* ---- card-sobre (Sobre page) ---- */
  if (props.variant === 'sobre') {
    return (
      <article className="bg-white rounded-xl px-8 py-8 shadow-sm border-l-[5px] border-l-[#1E7A5F] text-left transition-all duration-300 hover:shadow-md hover:border-l-[#D4A96A] hover:-translate-y-1">
        {props.number && (
          <div className="text-[2.5rem] font-black text-[#1E7A5F] mb-4 leading-none">{props.number}</div>
        )}
        {props.icon ? (
          <div className="text-[#1E7A5F] mb-4">{props.icon}</div>
        ) : props.emoji && (
          <span className="text-[2.2rem] block mb-4">{props.emoji}</span>
        )}
        <h3 className="text-[#0B2E24] text-lg font-bold mb-4 font-[Montserrat,sans-serif]">{props.title}</h3>
        <p className="text-[#2D3748] text-base leading-[1.75] font-medium">{props.description}</p>
      </article>
    )
  }

  /* ---- card-integrante (QuemSomos) ---- */
  if (props.variant === 'integrante') {
    return (
      <article className="bg-white rounded-[20px] shadow-md w-[280px] max-w-full px-8 py-8 border-t-[5px] border-t-[#1E7A5F] text-center transition-all duration-300 hover:shadow-lg hover:border-t-[#D4A96A] hover:-translate-y-2">
        <div className="relative mb-6">
          <img
            src={props.photoSrc || ''}
            alt={props.photoAlt || props.name}
            className="w-[130px] h-[130px] object-cover rounded-full mx-auto border-4 border-[#EDD5A8] shadow-sm bg-[#F4F2EE]"
            onError={(e) => {
              const img = e.currentTarget
              img.style.display = 'none'
              const placeholder = img.nextSibling as HTMLElement
              if (placeholder) placeholder.style.display = 'flex'
            }}
          />
          <div
            className="w-[130px] h-[130px] rounded-full mx-auto border-4 border-[#EDD5A8] bg-[#F4F2EE] items-center justify-center text-[#1E7A5F] hidden"
            aria-hidden="true"
          >
            <Icons.Logo size={48} />
          </div>
        </div>
        <h3 className="text-[#0B2E24] text-lg font-bold mb-2 font-[Montserrat,sans-serif]">{props.name}</h3>
        <p className="text-[#1E7A5F] text-sm font-bold mb-1">{props.rm}</p>
        {props.turma && <p className="text-[#D4A96A] text-xs font-black mb-6 uppercase tracking-widest">{props.turma}</p>}
        <div className="flex justify-center gap-3">
          <a
            href={props.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#F4F2EE] flex items-center justify-center text-[#0B2E24] hover:bg-[#1E7A5F] hover:text-white transition-all duration-300 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a
            href={props.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#F4F2EE] flex items-center justify-center text-[#0B2E24] hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
      </article>
    )
  }

  /* ---- card-programa (Programas) ---- */
  if (props.variant === 'programa') {
    const borderColor = props.accentColor === 'sand' ? 'border-l-[#D4A96A]' : 'border-l-[#1E7A5F]'
    return (
      <article
        className={`bg-white rounded-[20px] shadow-md px-8 py-8 grid grid-cols-[auto_1fr] gap-8 items-start mb-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-[6px] ${borderColor}`}
      >
        <div className="text-[#1E7A5F] w-[70px] h-[70px] rounded-xl bg-[#F7EDD8] flex items-center justify-center shrink-0">
          {props.icon}
        </div>
        <div>
          <span className="inline-block bg-[#F7EDD8] text-[#174D3E] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {props.tag}
          </span>
          <h3 className="text-[#0B2E24] text-2xl font-bold mb-2 font-[Montserrat,sans-serif]">{props.title}</h3>
          <p className="text-[#2D3748] leading-[1.75] font-medium">{props.description}</p>
        </div>
      </article>
    )
  }

  /* ---- card-fundamentacao (Sobre — dark bg) ---- */
  if (props.variant === 'fundamentacao') {
    return (
      <article className="bg-white/10 border-2 border-white/20 rounded-xl px-8 py-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-[#D4A96A] hover:-translate-y-1">
        <h3 className="text-[#EDD5A8] text-lg font-bold mb-4 font-[Montserrat,sans-serif]">{props.title}</h3>
        <p className="text-white/95 text-base leading-[1.75] mb-4 font-medium">{props.description}</p>
        <span className="inline-flex items-center gap-2 bg-[#1E7A5F] text-white px-4 py-1 rounded-full text-sm font-bold">
          <Icons.Check size={14} />
          {props.badge}
        </span>
      </article>
    )
  }

  return null
}
