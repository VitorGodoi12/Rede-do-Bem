import React from 'react'
import { Header }      from '../components/Header'
import { IntroHero }   from '../components/IntroHero'
import { ContactInfo } from '../components/ContactInfo'
import { ContactForm } from '../components/ContactForm'
import { Footer }      from '../components/Footer'
import { Icons }       from '../components/Icons'

const CONTACT_CHANNELS = [
  {
    sectionLabel: 'E-mails',
    sectionIcon: <Icons.Email size={20} />,
    links: [
      { label: 'felipecuesta@exemplo.com',  href: 'mailto:felipecuesta@gmail.com' },
      { label: 'vitorgodoi@exemplo.com',    href: 'mailto:vitorgodoi@gmail.com' },
      { label: 'vitorsantos@exemplo.com',   href: 'mailto:vitorsantos@gmail.com' },
    ],
  },
  {
    sectionLabel: 'LinkedIn',
    sectionIcon: <Icons.Linkedin size={20} />,
    links: [
      { label: 'Felipe Cuesta',  href: 'https://www.linkedin.com/in/felipe-cuesta-20a813319' },
      { label: 'Vitor Santos',   href: 'https://www.linkedin.com/in/vitor-santos-domingues-87b573275/' },
      { label: 'Vitor Godoi',    href: 'https://www.linkedin.com/in/vitor-godoi-189b91380' },
    ],
  },
  {
    sectionLabel: 'GitHub',
    sectionIcon: <Icons.Github size={20} />,
    links: [
      { label: 'felipecuesta06',       href: 'https://github.com/felipecuesta06' },
      { label: 'VitorSantosDomingues', href: 'https://github.com/VitorSantosDomingues' },
      { label: 'VitorGodoi12',         href: 'https://github.com/VitorGodoi12' },
    ],
  },
]

const FORM_FIELDS = [
  { id: 'nome',     label: 'Nome',      type: 'text'     as const, placeholder: 'Seu nome completo' },
  { id: 'email',    label: 'E-mail',    type: 'email'    as const, placeholder: 'seuemail@exemplo.com' },
  { id: 'mensagem', label: 'Mensagem',  type: 'textarea' as const, placeholder: 'Escreva sua mensagem aqui...' },
]

export const ContatoPage: React.FC = () => (
  <div className="font-[Inter,sans-serif] text-base leading-[1.7] bg-[#FAFAF8] text-[#1A1A1A] antialiased">
    <Header logoText="Rede do Bem" />
    <main>
      <IntroHero
        title="Entre em Contato"
        description="Tem dúvidas, críticas ou sugestões? Preencha o formulário ao lado ou use um dos nossos canais diretos de comunicação."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1120px] mx-auto my-14 px-8 items-start">
        <ContactInfo title="Nossos Canais" channels={CONTACT_CHANNELS} />
        <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-t-[#1E7A5F]">
          <ContactForm
            title="Envie uma Mensagem"
            fields={FORM_FIELDS}
            submitLabel="Enviar Mensagem"
            successMessage="Mensagem enviada com sucesso! Entraremos em contato em breve."
          />
        </div>
      </div>
    </main>
    <Footer />
  </div>
)
