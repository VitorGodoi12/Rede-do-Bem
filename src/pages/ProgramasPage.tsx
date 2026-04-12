import React from 'react'
import { Header }    from '../components/Header'
import { IntroHero } from '../components/IntroHero'
import { Card }      from '../components/Card'
import { Button }    from '../components/Button'
import { Footer }    from '../components/Footer'

const PROGRAMAS = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 12c.5 0 1 0 1.5-.5s.5-1 .5-1.5V6c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v4c0 .5 0 1 .5 1.5s1 .5 1.5.5 1 0 1.5-.5.5-1 .5-1.5V6c0-3.3-2.7-6-6-6S7 2.7 7 6v4c0 .5 0 1 .5 1.5s1 .5 1.5.5z"/>
        <path d="M7 12c-1.1 0-2 .9-2 2v4c0 3.3 2.7 6 6 6s6-2.7 6-6v-4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2z"/>
      </svg>
    ),
    tag: 'Jovens · 11 a 17 anos',
    title: 'Dentista do Bem',
    accentColor: 'green' as const,
    description:
      'O principal programa da Turma do Bem conecta jovens de baixa renda em situação de vulnerabilidade social (11 a 17 anos) a dentistas voluntários que realizam o tratamento bucal completo sem custo algum. Cada beneficiário recebe acompanhamento integral, do diagnóstico à conclusão do tratamento, diretamente no consultório do dentista voluntário.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/>
        <path d="M12 7v10"/>
        <path d="M8 11h8"/>
      </svg>
    ),
    tag: 'Mulheres · Reabilitação',
    title: 'Apolônias do Bem',
    accentColor: 'sand' as const,
    description:
      'Voltado para mulheres cis e trans que sofreram violência e apresentam sequelas bucais. O programa oferece reabilitação odontológica completa — muitas vezes incluindo procedimentos complexos como implantes e próteses — devolvendo não apenas o sorriso, mas também a autoestima e a dignidade a essas mulheres.',
  },
]

const PROGRAMAS_CTA = {
  title: 'Quer fazer parte?',
  description:
    'Se você é dentista e quer se tornar voluntário, ou quer indicar alguém para nossos programas, entre em contato conosco.',
  ctaLabel: 'Fale Conosco',
  ctaHref: '/contato',
  ctaIcon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
    </svg>
  ),
}

export const ProgramasPage: React.FC = () => (
  <div className="font-[Inter,sans-serif] text-base leading-[1.7] bg-[#FAFAF8] text-[#1A1A1A] antialiased">
    <Header logoText="Rede do Bem" />
    <main>
      <IntroHero
        title="Nossos Programas"
        description="Conheça as iniciativas que transformam vidas por meio da saúde bucal e do voluntariado odontológico."
      />
      <section className="py-14 px-8 max-w-[1120px] mx-auto">
        <h2
          className="font-[Montserrat,sans-serif] font-extrabold text-[#0B2E24] text-center mb-14"
          style={{ fontSize: 'clamp(1.75rem,3vw,2rem)' }}
        >
          Programas da Turma do Bem
        </h2>
        {PROGRAMAS.map((p, i) => (
          <Card
            key={i}
            variant="programa"
            icon={p.icon}
            tag={p.tag}
            title={p.title}
            description={p.description}
            accentColor={p.accentColor}
          />
        ))}
      </section>

      <section className="bg-[#F7EDD8] py-14 px-8 text-center">
        <div className="max-w-[1120px] mx-auto">
          <h2
            className="font-[Montserrat,sans-serif] font-extrabold text-[#0B2E24] mb-4"
            style={{ fontSize: 'clamp(1.25rem,2vw,1.5rem)' }}
          >
            {PROGRAMAS_CTA.title}
          </h2>
          <p className="text-[#2D3748] max-w-[600px] mx-auto mb-8 font-medium">{PROGRAMAS_CTA.description}</p>
          <Button label={PROGRAMAS_CTA.ctaLabel} href={PROGRAMAS_CTA.ctaHref} variant="primary" icon={PROGRAMAS_CTA.ctaIcon} />
        </div>
      </section>
    </main>
    <Footer />
  </div>
)
