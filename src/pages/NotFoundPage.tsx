import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Button } from '../components/Button'

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="font-[Inter,sans-serif] text-base leading-[1.7] bg-[#FAFAF8] text-[#1A1A1A] antialiased">
      <Header logoText="Rede do Bem" />
      <main className="min-h-[70vh] flex flex-col items-center justify-center px-8 py-20 text-center">
        {/* Número 404 decorativo */}
        <div
          className="font-[Montserrat,sans-serif] font-black text-[#1E7A5F] opacity-10 select-none leading-none mb-0"
          style={{ fontSize: 'clamp(8rem,20vw,14rem)' }}
          aria-hidden="true"
        >
          404
        </div>

        <div className="-mt-8 sm:-mt-12 relative z-10">
          <h1
            className="font-[Montserrat,sans-serif] font-extrabold text-[#0B2E24] mb-4 leading-[1.2]"
            style={{ fontSize: 'clamp(1.75rem,4vw,3rem)' }}
          >
            Página não encontrada
          </h1>

          <p className="text-[#2D3748] max-w-[520px] mx-auto mb-10 font-medium text-base sm:text-lg leading-[1.75]">
            Ops! A página que você está procurando não existe, foi movida ou o endereço está incorreto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button label="Voltar para o Início" href="/" variant="primary" />
            <Button
              label="Voltar à página anterior"
              variant="secondary"
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
