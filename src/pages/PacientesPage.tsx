import React, { useState } from 'react'
import { Header }       from '../components/Header'
import { Footer }       from '../components/Footer'
import { IntroHero }    from '../components/IntroHero'
import { usePacientes } from '../hooks/usePacientes'
import type { Paciente, PacienteForm } from '../types'

// Estado inicial do formulário
const FORM_VAZIO: PacienteForm = {
  nome: '',
  cpf: '',
  dataNascimento: '',
}

export const PacientesPage: React.FC = () => {
  const { pacientes, loading, error, criar, atualizar, remover } = usePacientes()

  const [form, setForm]               = useState<PacienteForm>(FORM_VAZIO)
  const [editando, setEditando]       = useState<Paciente | null>(null)
  const [salvando, setSalvando]       = useState(false)
  const [removendoId, setRemovendoId] = useState<number | null>(null)
  const [sucesso, setSucesso]         = useState<string | null>(null)
  const [erroForm, setErroForm]       = useState<string | null>(null)

  const mostrarSucesso = (msg: string) => {
    setSucesso(msg)
    setTimeout(() => setSucesso(null), 3500)
  }

  // Preenche form ao clicar em Editar
  const handleEditar = (p: Paciente) => {
    setEditando(p)
    setForm({ nome: p.nome, cpf: p.cpf, dataNascimento: p.dataNascimento })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCancelar = () => {
    setEditando(null)
    setForm(FORM_VAZIO)
    setErroForm(null)
  }

  // Submete POST ou PUT dependendo se está editando
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErroForm(null)
    setSalvando(true)
    try {
      if (editando) {
        await atualizar({ ...editando, ...form })
        mostrarSucesso('Paciente atualizado com sucesso!')
      } else {
        await criar(form)
        mostrarSucesso('Paciente cadastrado com sucesso!')
      }
      handleCancelar()
    } catch {
      setErroForm('Não foi possível salvar. Verifique os dados e tente novamente.')
    } finally {
      setSalvando(false)
    }
  }

  // DELETE
  const handleRemover = async (id: number) => {
    if (!confirm('Tem certeza que deseja remover este paciente?')) return
    setRemovendoId(id)
    try {
      await remover(id)
      mostrarSucesso('Paciente removido com sucesso!')
    } catch {
      // erro já tratado pelo hook
    } finally {
      setRemovendoId(null)
    }
  }

  return (
    <div className="font-[Inter,sans-serif] text-base leading-[1.7] bg-[#FAFAF8] text-[#1A1A1A] antialiased">
      <Header logoText="Rede do Bem" />
      <main>
        <IntroHero
          title="Pacientes"
          description="Gerencie os pacientes cadastrados na plataforma — consulte, adicione, edite ou remova registros."
        />

        <div className="max-w-[1000px] mx-auto px-4 sm:px-8 py-14">

          {/* Feedback de sucesso global */}
          {sucesso && (
            <div className="mb-6 p-4 bg-[#e6f4ef] border border-[#1E7A5F] rounded-xl text-[#1E7A5F] font-bold flex items-center gap-3">
              <span>✓</span> {sucesso}
            </div>
          )}

          {/* Erro da API */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-xl text-red-700 font-medium">
              ⚠️ {error}
            </div>
          )}

          {/* ── FORMULÁRIO POST / PUT ── */}
          <section className="bg-white rounded-2xl shadow-md border-t-4 border-t-[#1E7A5F] px-6 sm:px-8 py-8 mb-10">
            <h2 className="font-[Montserrat,sans-serif] font-extrabold text-[#0B2E24] text-xl mb-6">
              {editando ? '✏️ Editar Paciente' : '➕ Novo Paciente'}
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-[#0B2E24] mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João da Silva"
                  value={form.nome}
                  onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                  className="w-full px-4 py-3 border-2 border-[#F4F2EE] rounded-xl text-[#2D3748] bg-[#FAFAF8] outline-none focus:border-[#1E7A5F] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-[#0B2E24] mb-2">
                  CPF
                </label>
                <input
                  type="text"
                  required
                  maxLength={11}
                  placeholder="Somente números (11 dígitos)"
                  value={form.cpf}
                  onChange={e => setForm(f => ({ ...f, cpf: e.target.value.replace(/\D/g, '') }))}
                  className="w-full px-4 py-3 border-2 border-[#F4F2EE] rounded-xl text-[#2D3748] bg-[#FAFAF8] outline-none focus:border-[#1E7A5F] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-[#0B2E24] mb-2">
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  required
                  value={form.dataNascimento}
                  onChange={e => setForm(f => ({ ...f, dataNascimento: e.target.value }))}
                  className="w-full px-4 py-3 border-2 border-[#F4F2EE] rounded-xl text-[#2D3748] bg-[#FAFAF8] outline-none focus:border-[#1E7A5F] focus:bg-white transition-all"
                />
              </div>

              {erroForm && (
                <p className="sm:col-span-2 text-red-600 font-medium text-sm">{erroForm}</p>
              )}

              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={salvando}
                  className="px-8 py-3 rounded-full bg-[#1E7A5F] text-white font-bold hover:bg-[#0B2E24] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {salvando ? 'Salvando...' : editando ? 'Atualizar Paciente' : 'Cadastrar Paciente'}
                </button>
                {editando && (
                  <button
                    type="button"
                    onClick={handleCancelar}
                    className="px-8 py-3 rounded-full border-2 border-[#1E7A5F] text-[#1E7A5F] font-bold hover:bg-[#1E7A5F] hover:text-white transition-all"
                  >
                    Cancelar
                  </button>
                )}
              </div>
            </form>
          </section>

          {/* ── TABELA GET ── */}
          <section>
            <h2 className="font-[Montserrat,sans-serif] font-extrabold text-[#0B2E24] text-xl mb-6">
              📋 Pacientes Cadastrados
            </h2>

            {loading ? (
              <div className="text-center py-16 text-[#1E7A5F] font-bold">
                <div className="w-10 h-10 border-4 border-[#1E7A5F] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                Carregando pacientes...
              </div>
            ) : pacientes.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-[#F4F2EE]">
                <p className="text-[#2D3748] font-medium">Nenhum paciente cadastrado ainda.</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl shadow-md">
                <table className="w-full bg-white text-sm">
                  <thead className="bg-[#0B2E24] text-white">
                    <tr>
                      <th className="px-5 py-4 text-left font-black uppercase tracking-widest text-xs">ID</th>
                      <th className="px-5 py-4 text-left font-black uppercase tracking-widest text-xs">Nome</th>
                      <th className="px-5 py-4 text-left font-black uppercase tracking-widest text-xs hidden sm:table-cell">CPF</th>
                      <th className="px-5 py-4 text-left font-black uppercase tracking-widest text-xs hidden md:table-cell">Nascimento</th>
                      <th className="px-5 py-4 text-center font-black uppercase tracking-widest text-xs">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pacientes.map((p, i) => (
                      <tr
                        key={p.id}
                        className={`border-b border-[#F4F2EE] transition-colors hover:bg-[#F7EDD8]/40 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}`}
                      >
                        <td className="px-5 py-4 font-bold text-[#1E7A5F]">#{p.id}</td>
                        <td className="px-5 py-4 font-medium text-[#0B2E24]">{p.nome}</td>
                        <td className="px-5 py-4 text-[#2D3748] hidden sm:table-cell">{p.cpf}</td>
                        <td className="px-5 py-4 text-[#2D3748] hidden md:table-cell">{p.dataNascimento}</td>
                        <td className="px-5 py-4">
                          <div className="flex gap-2 justify-center">
                            {/* PUT — editar */}
                            <button
                              onClick={() => handleEditar(p)}
                              className="px-4 py-1.5 rounded-full border-2 border-[#1E7A5F] text-[#1E7A5F] text-xs font-bold hover:bg-[#1E7A5F] hover:text-white transition-all"
                            >
                              Editar
                            </button>
                            {/* DELETE — remover */}
                            <button
                              onClick={() => p.id !== undefined && handleRemover(p.id)}
                              disabled={removendoId === p.id}
                              className="px-4 py-1.5 rounded-full border-2 border-red-400 text-red-500 text-xs font-bold hover:bg-red-500 hover:text-white transition-all disabled:opacity-50"
                            >
                              {removendoId === p.id ? '...' : 'Remover'}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
