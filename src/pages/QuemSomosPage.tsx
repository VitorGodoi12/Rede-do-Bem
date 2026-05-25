import React from 'react'
import { Header }     from '../components/Header'
import { IntroHero }  from '../components/IntroHero'
import { Card }       from '../components/Card'
import { Footer }     from '../components/Footer'

const INTEGRANTES = [
  {
    name: 'Felipe Cuesta Puerta de Oliveira',
    rm: 'RM: 567703',
    turma: '1TDSPR',
    photoSrc: './img/Felipe Cuesta.jpg',
    photoAlt: 'Foto de Felipe Cuesta',
    githubUrl: 'https://github.com/felipecuesta06',
    linkedinUrl: 'https://www.linkedin.com/in/felipe-cuesta-20a813319',
  },
  {
    name: 'Vitor Costa de Godoi',
    rm: 'RM: 568448',
    turma: '1TDSPR',
    photoSrc: './img/Vitor.jpg',
    photoAlt: 'Foto de Vitor Godoi',
    githubUrl: 'https://github.com/VitorGodoi12',
    linkedinUrl: 'https://www.linkedin.com/in/vitor-godoi-189b91380',
  },
  {
    name: 'Vitor Santos Domingues',
    rm: 'RM: 568375',
    turma: '1TDSPR',
    photoSrc: './img/Vitor Santos.jpg',
    photoAlt: 'Foto de Vitor Santos',
    githubUrl: 'https://github.com/VitorSantosDomingues',
    linkedinUrl: 'https://www.linkedin.com/in/vitor-santos-domingues-87b573275/',
  },
]

export const QuemSomosPage: React.FC = () => (
  <div className="font-[Inter,sans-serif] text-base leading-[1.7] bg-[#FAFAF8] text-[#1A1A1A] antialiased">
    <Header logoText="Rede do Bem" />
    <main>
      <IntroHero
        title="Conheça Nossa Equipe"
        description={
          <>Somos uma equipe dedicada de desenvolvedores trabalhando no projeto{' '}
          <strong>Rede do Bem</strong>, uma plataforma inovadora para facilitar a
          gestão dos atendimentos odontológicos voluntários.</>
        }
      />
      <section className="py-14 px-8 text-center">
        <h2
          className="font-[Montserrat,sans-serif] font-extrabold text-[#0B2E24] mb-14 leading-[1.2]"
          style={{ fontSize: 'clamp(1.75rem,3vw,2rem)' }}
        >
          Integrantes da Rede do Bem
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-[1000px] mx-auto">
          {INTEGRANTES.map((m, i) => (
            <Card
              key={i}
              variant="integrante"
              name={m.name}
              rm={m.rm}
              turma={m.turma}
              githubUrl={m.githubUrl}
              linkedinUrl={m.linkedinUrl}
              photoSrc={m.photoSrc}
              photoAlt={m.photoAlt}
            />
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
)
 
