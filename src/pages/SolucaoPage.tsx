import React from 'react'
import { Header }    from '../components/Header'
import { IntroHero } from '../components/IntroHero'
import { Solucao }   from '../components/Solucao'
import { Footer }    from '../components/Footer'

const SOLUCAO_DATA = {
  title: 'Nossa Solução Digital',
  items: [
    { iconKey: 'Triagem',      title: 'Triagem Inteligente',    description: 'Automatiza a triagem de pacientes com critérios padronizados, reduzindo o tempo de espera e erros humanos.' },
    { iconKey: 'Localizacao',  title: 'Alocação por Localização', description: 'Conecta pacientes ao dentista voluntário mais próximo com base em geolocalização precisa.' },
    { iconKey: 'Dados',        title: 'Gestão de Dados',        description: 'Centraliza todas as informações de pacientes e dentistas em um único sistema seguro e confiável.' },
    { iconKey: 'Chatbot',      title: 'Chatbot 24/7',            description: 'Atendimento automatizado disponível a qualquer hora para tirar dúvidas e orientar beneficiários.' },
    { iconKey: 'Simplificada', title: 'Triagem Simplificada',    description: 'Interface intuitiva que guia a equipe passo a passo no processo de triagem clínica.' },
    { iconKey: 'Burocracia',   title: 'Redução da Burocracia',   description: 'Formulários digitais e fluxos automatizados eliminam papelada e processos manuais desnecessários.' },
  ] as const,
}

export const SolucaoPage: React.FC = () => (
  <div className="font-[Inter,sans-serif] text-base leading-[1.7] bg-[#FAFAF8] text-[#1A1A1A] antialiased">
    <Header logoText="Rede do Bem" />
    <main>
      <IntroHero
        title="Nossa Solução"
        description="Conheça a plataforma tecnológica que desenvolvemos para otimizar o impacto social da Turma do Bem, conectando quem precisa de ajuda a quem quer ajudar."
      />
      <Solucao title={SOLUCAO_DATA.title} items={SOLUCAO_DATA.items} />
    </main>
    <Footer />
  </div>
)
