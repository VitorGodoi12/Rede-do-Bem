import React from 'react'
import { Header }    from '../components/Header'
import { IntroHero } from '../components/IntroHero'
import { FAQ }       from '../components/FAQ'
import { Button }    from '../components/Button'
import { Footer }    from '../components/Footer'

const FAQ_ITEMS = [
  {
    question: 'Quem pode utilizar o sistema da Turma do Bem?',
    answer:
      'O sistema é voltado para dois tipos de usuários: os membros administrativos da ONG e os dentistas voluntários cadastrados. Cada perfil tem acesso apenas às funcionalidades relacionadas ao seu papel.',
  },
  {
    question: 'As informações dos pacientes e dentistas ficam seguras no sistema?',
    answer:
      'Sim. Todos os dados são armazenados em um banco de dados protegido, garantindo a confidencialidade e integridade das informações registradas.',
  },
  {
    question: 'É possível acessar o sistema de diferentes lugares ou computadores?',
    answer:
      'Sim. Como o sistema foi desenvolvido com estrutura escalável, ele pode ser adaptado para uso em diversas unidades da ONG ou em ambiente online, permitindo acesso remoto e seguro.',
  },
  {
    question: 'Como posso me tornar voluntário dentista?',
    answer:
      'Para se cadastrar como dentista voluntário, entre em contato conosco pela página de Contato ou acesse o site oficial da Turma do Bem para conhecer o processo de cadastro.',
  },
]

const FAQ_CTA = {
  title: 'Ainda tem dúvidas?',
  description:
    'Não encontrou a resposta que procurava? Entre em contato conosco diretamente pelos nossos canais de comunicação.',
  ctaLabel: 'Fale Conosco',
  ctaHref: '/contato',
  ctaIcon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
    </svg>
  ),
}

export const FAQPageRoute: React.FC = () => (
  <div className="font-[Inter,sans-serif] text-base leading-[1.7] bg-[#FAFAF8] text-[#1A1A1A] antialiased">
    <Header logoText="Rede do Bem" />
    <main>
      <IntroHero
        title="Perguntas Frequentes"
        description="Encontre respostas para as dúvidas mais comuns sobre o sistema e a Turma do Bem."
      />
      <section className="py-14 px-8 max-w-[800px] mx-auto">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <section className="bg-[#F7EDD8] py-14 px-8 text-center">
        <div className="max-w-[1120px] mx-auto">
          <h2
            className="font-[Montserrat,sans-serif] font-extrabold text-[#0B2E24] mb-4"
            style={{ fontSize: 'clamp(1.25rem,2vw,1.5rem)' }}
          >
            {FAQ_CTA.title}
          </h2>
          <p className="text-[#2D3748] max-w-[600px] mx-auto mb-8 font-medium">{FAQ_CTA.description}</p>
          <Button label={FAQ_CTA.ctaLabel} href={FAQ_CTA.ctaHref} variant="primary" icon={FAQ_CTA.ctaIcon} />
        </div>
      </section>
    </main>
    <Footer />
  </div>
)
