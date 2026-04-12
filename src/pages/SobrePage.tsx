import React from 'react'
import { Header }    from '../components/Header'
import { IntroHero } from '../components/IntroHero'
import { Card }      from '../components/Card'
import { Footer }    from '../components/Footer'
import { Icons }     from '../components/Icons'

const PILARES = [
  { number: '01', title: 'Plataforma Web Centralizada',    description: 'Um único ponto de verdade para todos os dados de pacientes e dentistas, garantindo segurança e integridade das informações.' },
  { number: '02', title: 'Acessos Personalizados e Seguros', description: 'Dois perfis de usuário: ONG (Administrativo) e Dentista (Clínico), cada um com permissões específicas e seguras.' },
  { number: '03', title: 'Humanização e Eficiência',       description: 'Reduz a burocracia e libera o tempo da equipe para o que realmente importa: o cuidado com o paciente.' },
]

const FUNCIONALIDADES = [
  { icon: <Icons.Triagem size={32} />, title: 'Cadastro e Gerenciamento', description: 'Inserção e edição de dados de pacientes e dentistas com segurança, facilidade e interface intuitiva.' },
  { icon: <Icons.Localizacao size={32} />, title: 'Filtros Inteligentes',     description: 'Busque pacientes por endereço para otimizar o encaminhamento aos consultórios mais próximos.' },
  { icon: <Icons.Dashboard size={32} />, title: 'Relatórios Automáticos',   description: 'Receba relatórios detalhados após cada consulta, acompanhando a evolução de cada paciente.' },
]

const FUNDAMENTACOES = [
  { title: 'Arquitetura Base',    description: 'Protótipo em Python demonstra a lógica funcional de menus de acesso distintos para ONG e Dentistas.', badge: 'Prova de Conceito Validada' },
  { title: 'Estrutura de Dados',  description: 'Campos essenciais definidos: Nome, CPF, Endereço, Problema de Saúde para Pacientes; CRO para Dentistas.', badge: 'Mínimo Viável Definido' },
  { title: 'Roadmap de Evolução',      description: 'Implementação de Banco de Dados Relacional (PostgreSQL/MySQL) e interface web moderna responsiva.', badge: 'Roadmap Claro' },
]

export const SobrePage: React.FC = () => (
  <div className="font-[Inter,sans-serif] text-base leading-[1.7] bg-[#FAFAF8] text-[#1A1A1A] antialiased">
    <Header logoText="Rede do Bem" />
    <main>
      <IntroHero
        title="Sobre o Projeto"
        description="O sistema da ONG Turma do Bem (Rede do Bem) é uma plataforma digital criada para facilitar a gestão dos atendimentos odontológicos feitos por dentistas voluntários. Ele organiza informações de pacientes, profissionais e atendimentos com eficiência, segurança e transparência."
      />

      {/* Pilares */}
      <section className="py-14 px-8 max-w-[1120px] mx-auto">
        <h2
          className="font-[Montserrat,sans-serif] font-extrabold text-[#0B2E24] text-center mb-14"
          style={{ fontSize: 'clamp(1.75rem,3vw,2rem)' }}
        >
          Pilares do Projeto
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {PILARES.map((p, i) => (
            <Card key={i} variant="sobre" number={p.number} title={p.title} description={p.description} />
          ))}
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="bg-[#F7EDD8] py-14 px-8">
        <div className="max-w-[1120px] mx-auto">
          <h2
            className="font-[Montserrat,sans-serif] font-extrabold text-[#0B2E24] text-center mb-14"
            style={{ fontSize: 'clamp(1.75rem,3vw,2rem)' }}
          >
            Funcionalidades Principais
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
            {FUNCIONALIDADES.map((f, i) => (
              <Card key={i} variant="sobre" icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Fundamentação */}
      <section className="bg-gradient-to-br from-[#174D3E] to-[#0B2E24] py-14 px-8">
        <div className="max-w-[1120px] mx-auto">
          <h2
            className="font-[Montserrat,sans-serif] font-extrabold text-[#EDD5A8] text-center mb-14"
            style={{ fontSize: 'clamp(1.75rem,3vw,2rem)' }}
          >
            Fundamentação Técnica e Viabilidade
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
            {FUNDAMENTACOES.map((f, i) => (
              <Card key={i} variant="fundamentacao" title={f.title} description={f.description} badge={f.badge} />
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
)
