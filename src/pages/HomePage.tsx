import React from 'react'
import { Header }       from '../components/Header'
import { Hero }         from '../components/Hero'
import { Problema }     from '../components/Problema'
import { Solucao }      from '../components/Solucao'
import { Diferenciais } from '../components/Diferenciais'
import { Section }      from '../components/Section'
import { Card }         from '../components/Card'
import { Button }       from '../components/Button'
import { Footer }       from '../components/Footer'
import { Icons }        from '../components/Icons'

const HERO_DATA = {
  title: 'Bem-Vindo à Turma do Bem',
  paragraphs: [
    'Uma ONG brasileira que reúne voluntários da odontologia para levar atendimento gratuito a pessoas em situação de vulnerabilidade — devolvendo sorrisos, autoestima e oportunidades.',
    'Fundada em 2002 pelo dentista Fábio Bibancos, presente em todos os estados do Brasil e em mais de 10 países da América Latina.',
  ],
}

const ASPECTOS = [
  {
    strongText: 'Adolescentes (11–17 anos)',
    rest: ' — Reabilitação bucal completa para jovens com graves problemas dentários, essencial para o desenvolvimento social, emocional e para a empregabilidade futura.',
  },
  {
    strongText: 'Mulheres em situação de violência',
    rest: ' — Recuperação da saúde bucal e da autoestima, com procedimentos odontológicos complexos de reabilitação total.',
  },
]

const IMPACTO = [
  'Vasta rede de dentistas voluntários que utilizam seus próprios consultórios e tempo para atender os beneficiários, sem custo algum.',
  'Presente em todo o Brasil e em mais de 10 países, a ONG já transformou a vida de milhares de jovens e mulheres, devolvendo dignidade e a capacidade de sonhar.',
  'Além do tratamento, mobiliza a classe odontológica para um impacto social positivo, mudando a percepção da sociedade sobre a saúde bucal.',
]

const PROBLEMA_DATA = {
  title: 'O Desafio da Gestão',
  description: 'A gestão manual e descentralizada dificulta o atendimento eficiente:',
  problems: [
    'Lentidão na triagem',
    'Processos burocráticos',
    'Dificuldade de localização de dentistas',
    'Risco de perda de dados importantes',
  ],
  callout: 'Conheça como o Rede do Bem resolve esses desafios',
  ctaLabel: 'Nossa solução',
  ctaHref: '/solucao',
}

const SOLUCAO_DATA = {
  title: 'Nossa Solução',
  items: [
    { iconKey: 'Triagem',      title: 'Triagem Inteligente',    description: 'Automatiza a triagem de pacientes com critérios padronizados, reduzindo o tempo de espera e erros humanos.' },
    { iconKey: 'Localizacao',  title: 'Alocação por Localização', description: 'Conecta pacientes ao dentista voluntário mais próximo com base em geolocalização precisa.' },
    { iconKey: 'Dados',        title: 'Gestão de Dados',        description: 'Centraliza todas as informações de pacientes e dentistas em um único sistema seguro e confiável.' },
    { iconKey: 'Chatbot',      title: 'Chatbot 24/7',            description: 'Atendimento automatizado disponível a qualquer hora para tirar dúvidas e orientar beneficiários.' },
    { iconKey: 'Simplificada', title: 'Triagem Simplificada',    description: 'Interface intuitiva que guia a equipe passo a passo no processo de triagem clínica.' },
    { iconKey: 'Burocracia',   title: 'Redução da Burocracia',   description: 'Formulários digitais e fluxos automatizados eliminam papelada e processos manuais desnecessários.' },
  ] as const,
}

const FOCO_DATA = [
  'A falta de saúde bucal na juventude é uma fonte intensa de vergonha, bullying e exclusão. Dentes cariados, perdidos ou quebrados se tornam uma barreira social e emocional.',
  'Essa reabilitação quebra barreiras reais no mercado de trabalho e na vida acadêmica, pois sorrir livremente está diretamente ligado à empregabilidade e ao sucesso educacional.',
  'O trabalho da Turma do Bem devolve autoestima, saúde e oportunidades para quem mais precisa.',
]

const DIFERENCIAIS_DATA = {
  title: 'Nossos Diferenciais',
  items: [
    { title: 'Eficiência Operacional',     description: 'Processos otimizados que aumentam a capacidade de atendimento sem aumentar os custos operacionais.', badge: '✓ Comprovado' },
    { title: 'Inteligência Geográfica',    description: 'Algoritmos de proximidade garantem que cada paciente seja encaminhado ao voluntário mais conveniente.', badge: '✓ Geolocalização' },
    { title: 'Segurança de Dados',         description: 'Arquitetura com banco de dados protegido, garantindo confidencialidade e conformidade com a LGPD.', badge: '✓ LGPD Ready' },
    { title: 'Atendimento Contínuo (24/7)', description: 'Chatbot integrado garante que nenhuma dúvida fique sem resposta, independentemente do horário.', badge: '✓ Sempre ativo' },
    { title: 'Impacto Social Ampliado',    description: 'Cada melhoria no sistema se traduz diretamente em mais vidas transformadas pela saúde bucal.', badge: '✓ Mensurável' },
    { title: 'Controle e Monitoramento',   description: 'Relatórios automáticos e dashboards permitem acompanhar indicadores em tempo real.', badge: '✓ Dashboard' },
  ],
}

export const HomePage: React.FC = () => (
  <div className="font-[Inter,sans-serif] text-base leading-[1.7] bg-[#FAFAF8] text-[#1A1A1A] antialiased">
    <Header logoText="Rede do Bem" />
    <main>
      <Hero title={HERO_DATA.title} paragraphs={HERO_DATA.paragraphs} />

      <Section title="Principais Aspectos" background="white">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {ASPECTOS.map((card, i) => (
            <Card key={i} variant="turma" content={<><strong>{card.strongText}</strong>{card.rest}</>} />
          ))}
        </div>
      </Section>

      <Section title="Impacto da Turma do Bem" background="white">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {IMPACTO.map((text, i) => (
            <Card key={i} variant="turma" content={text} />
          ))}
        </div>
      </Section>

      <Problema
        title={PROBLEMA_DATA.title}
        description={PROBLEMA_DATA.description}
        problems={PROBLEMA_DATA.problems}
        callout={PROBLEMA_DATA.callout}
        ctaLabel={PROBLEMA_DATA.ctaLabel}
        ctaHref={PROBLEMA_DATA.ctaHref}
      />

      <Solucao id="solucao" title={SOLUCAO_DATA.title} items={SOLUCAO_DATA.items} />

      <section className="bg-gradient-to-br from-[#174D3E] to-[#0B2E24] py-14 px-8 text-center">
        <div className="max-w-[1120px] mx-auto">
          <h2
            className="font-[Montserrat,sans-serif] font-extrabold text-[#EDD5A8] mb-10 leading-[1.2]"
            style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}
          >
            O Foco
          </h2>
          {FOCO_DATA.map((paragraph, i) => (
            <p key={i} className="max-w-[750px] mx-auto mb-4 text-lg text-white/95 leading-[1.75] font-medium">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <Diferenciais title={DIFERENCIAIS_DATA.title} items={DIFERENCIAIS_DATA.items} />

      <section className="bg-[#F7EDD8] py-14 px-8 text-center">
        <div className="max-w-[1120px] mx-auto">
          <h2
            className="font-[Montserrat,sans-serif] font-extrabold text-[#0B2E24] mb-6 leading-[1.2]"
            style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}
          >
            Programas da Turma do Bem
          </h2>
          <p className="max-w-[750px] mx-auto mb-4 text-[#2D3748] leading-[1.75] font-medium">
            O <strong>Dentista do Bem</strong> é o principal programa, voltado para crianças
            e adolescentes de 11 a 17 anos em situação vulnerável. As{' '}
            <strong>Apolônias do Bem</strong> oferecem tratamento para mulheres cis e trans
            que vivenciaram agressões.
          </p>
          <p className="mt-6">
            <Button 
              label="Saiba mais sobre os programas" 
              href="/programas" 
              variant="secondary" 
              icon={<Icons.ArrowDown className="rotate-[-90deg] w-4 h-4" />} 
            />
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
)
