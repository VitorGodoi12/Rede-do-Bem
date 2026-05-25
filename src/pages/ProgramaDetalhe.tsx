import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Header }    from '../components/Header'
import { Footer }    from '../components/Footer'
import { Button }    from '../components/Button'
import { Icons }     from '../components/Icons'

// Intersection Type: combina dados do programa com metadados de navegação
type ProgramaBase = {
  slug: string
  title: string
  tag: string
  accentColor: 'green' | 'sand'
}

type ProgramaDetalhes = {
  description: string
  fullDescription: string[]
  beneficiarios: string
  impacto: string
  requisitos: string[]
}

type ProgramaData = ProgramaBase & ProgramaDetalhes

interface ProgramaDetalheParams {
  slug: string
  [key: string]: string | undefined
}

const PROGRAMAS_MAP: Record<string, ProgramaData> = {
  'dentista-do-bem': {
    slug: 'dentista-do-bem',
    title: 'Dentista do Bem',
    tag: 'Jovens · 11 a 17 anos',
    accentColor: 'green',
    description:
      'Conecta jovens de baixa renda a dentistas voluntários para tratamento bucal completo e gratuito.',
    fullDescription: [
      'O principal programa da Turma do Bem conecta jovens de baixa renda em situação de vulnerabilidade social (11 a 17 anos) a dentistas voluntários que realizam o tratamento bucal completo sem custo algum.',
      'Cada beneficiário recebe acompanhamento integral, do diagnóstico à conclusão do tratamento, diretamente no consultório do dentista voluntário.',
      'O programa foi criado em 2002 pelo dentista Fábio Bibancos e hoje está presente em todos os estados do Brasil e em mais de 10 países da América Latina.',
    ],
    beneficiarios: 'Jovens entre 11 e 17 anos em situação de vulnerabilidade social',
    impacto: 'Mais de 100.000 jovens atendidos desde a fundação do programa',
    requisitos: [
      'Idade entre 11 e 17 anos',
      'Situação de vulnerabilidade social comprovada',
      'Encaminhamento por escola pública ou entidade social parceira',
      'Comprometimento com todas as etapas do tratamento',
    ],
  },
  'apolonias-do-bem': {
    slug: 'apolonias-do-bem',
    title: 'Apolônias do Bem',
    tag: 'Mulheres · Reabilitação',
    accentColor: 'sand',
    description:
      'Oferece reabilitação odontológica completa para mulheres cis e trans que sofreram violência.',
    fullDescription: [
      'Voltado para mulheres cis e trans que sofreram violência e apresentam sequelas bucais, o programa oferece reabilitação odontológica completa.',
      'Muitas vezes incluindo procedimentos complexos como implantes e próteses, o programa vai muito além do tratamento físico, devolvendo não apenas o sorriso, mas também a autoestima e a dignidade a essas mulheres.',
      'O nome é uma homenagem a Santa Apolônia, padroeira dos dentistas, e representa a força e a resiliência das mulheres atendidas pelo programa.',
    ],
    beneficiarios: 'Mulheres cis e trans vítimas de violência com sequelas bucais',
    impacto: 'Reabilitação total da saúde bucal e da autoestima das beneficiárias',
    requisitos: [
      'Ser mulher cis ou trans',
      'Ter sofrido alguma forma de violência com sequelas bucais',
      'Encaminhamento por delegacia, casa abrigo ou entidade de apoio à mulher',
      'Participação nas consultas de acompanhamento',
    ],
  },
}

export const ProgramaDetalhe: React.FC = () => {
  const { slug } = useParams<ProgramaDetalheParams>()
  const programa = slug ? PROGRAMAS_MAP[slug] : undefined

  if (!programa) {
    return (
      <div className="font-[Inter,sans-serif] text-base leading-[1.7] bg-[#FAFAF8] text-[#1A1A1A] antialiased">
        <Header logoText="Rede do Bem" />
        <main className="min-h-[60vh] flex flex-col items-center justify-center px-8 py-20 text-center">
          <div className="text-[#1E7A5F] mb-6">
            <Icons.X size={64} />
          </div>
          <h1
            className="font-[Montserrat,sans-serif] font-extrabold text-[#0B2E24] mb-4"
            style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)' }}
          >
            Programa não encontrado
          </h1>
          <p className="text-[#2D3748] max-w-[500px] mb-8 font-medium">
            O programa que você está procurando não existe ou foi removido.
          </p>
          <Button label="Ver todos os programas" href="/programas" variant="primary" />
        </main>
        <Footer />
      </div>
    )
  }

  const borderColor = programa.accentColor === 'sand' ? '#D4A96A' : '#1E7A5F'

  return (
    <div className="font-[Inter,sans-serif] text-base leading-[1.7] bg-[#FAFAF8] text-[#1A1A1A] antialiased">
      <Header logoText="Rede do Bem" />
      <main>
        {/* Hero do Programa */}
        <section className="bg-gradient-to-br from-[#0B2E24] to-[#174D3E] py-14 px-8 text-center relative overflow-hidden">
          <div className="max-w-[800px] mx-auto">
            <span
              className="inline-block text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full mb-6"
              style={{ backgroundColor: borderColor + '33', color: borderColor }}
            >
              {programa.tag}
            </span>
            <h1
              className="font-[Montserrat,sans-serif] font-extrabold text-[#EDD5A8] mb-6 leading-[1.15]"
              style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}
            >
              {programa.title}
            </h1>
            <p className="text-lg text-white/95 leading-[1.75] font-medium">
              {programa.description}
            </p>
          </div>
        </section>

        {/* Descrição Completa */}
        <section className="py-14 px-8 max-w-[860px] mx-auto">
          <h2
            className="font-[Montserrat,sans-serif] font-extrabold text-[#0B2E24] mb-8"
            style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}
          >
            Sobre o Programa
          </h2>
          {programa.fullDescription.map((paragraph, i) => (
            <p key={i} className="text-[#2D3748] leading-[1.85] mb-5 font-medium text-base sm:text-lg">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Impacto e Beneficiários */}
        <section className="bg-[#F7EDD8] py-14 px-8">
          <div className="max-w-[860px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-2xl px-8 py-8 shadow-sm border-l-4"
              style={{ borderLeftColor: borderColor }}
            >
              <div className="text-[#1E7A5F] mb-4">
                <Icons.Social size={32} />
              </div>
              <h3 className="font-[Montserrat,sans-serif] font-bold text-[#0B2E24] text-lg mb-3">
                Beneficiários
              </h3>
              <p className="text-[#2D3748] font-medium leading-[1.75]">{programa.beneficiarios}</p>
            </div>
            <div
              className="bg-white rounded-2xl px-8 py-8 shadow-sm border-l-4"
              style={{ borderLeftColor: borderColor }}
            >
              <div className="text-[#1E7A5F] mb-4">
                <Icons.Check size={32} />
              </div>
              <h3 className="font-[Montserrat,sans-serif] font-bold text-[#0B2E24] text-lg mb-3">
                Impacto
              </h3>
              <p className="text-[#2D3748] font-medium leading-[1.75]">{programa.impacto}</p>
            </div>
          </div>
        </section>

        {/* Requisitos */}
        <section className="py-14 px-8 max-w-[860px] mx-auto">
          <h2
            className="font-[Montserrat,sans-serif] font-extrabold text-[#0B2E24] mb-8"
            style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}
          >
            Requisitos para Participação
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {programa.requisitos.map((req, i) => (
              <li
                key={i}
                className="bg-[#F4F2EE] rounded-xl px-6 py-4 flex items-start gap-3 font-medium text-[#2D3748] shadow-sm border-l-4"
                style={{ borderLeftColor: borderColor }}
              >
                <span className="text-[#1E7A5F] mt-0.5 shrink-0">
                  <Icons.Check size={18} />
                </span>
                {req}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#174D3E] to-[#0B2E24] py-14 px-8 text-center">
          <div className="max-w-[600px] mx-auto">
            <h2
              className="font-[Montserrat,sans-serif] font-extrabold text-[#EDD5A8] mb-4"
              style={{ fontSize: 'clamp(1.25rem,2.5vw,1.75rem)' }}
            >
              Quer fazer parte?
            </h2>
            <p className="text-white/90 font-medium mb-8 leading-[1.75]">
              Entre em contato conosco para mais informações sobre como participar ou indicar alguém para este programa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button label="Fale Conosco" href="/contato" variant="primary" />
              <Button label="Ver todos os Programas" href="/programas" variant="secondary" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
