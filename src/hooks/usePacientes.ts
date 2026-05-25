import { useState, useEffect } from 'react'
import type { Paciente, PacienteForm } from '../types'
import {
  getPacientes,
  createPaciente,
  updatePaciente,
  deletePaciente,
} from '../services/pacienteService'

interface UsePacientesReturn {
  pacientes: Paciente[]
  loading: boolean
  error: string | null
  criar: (p: PacienteForm) => Promise<void>
  atualizar: (p: Paciente) => Promise<void>
  remover: (id: number) => Promise<void>
  recarregar: () => void
}

export function usePacientes(): UsePacientesReturn {
  const [pacientes, setPacientes] = useState<Paciente[]>([])
  const [loading, setLoading]     = useState<boolean>(true)
  const [error, setError]         = useState<string | null>(null)

  const carregar = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getPacientes()
      setPacientes(data)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar pacientes')
    } finally {
      setLoading(false)
    }
  }

  // useEffect para buscar ao montar o componente
  useEffect(() => {
    carregar()
  }, [])

  const criar = async (p: PacienteForm) => {
    setError(null)
    try {
      await createPaciente(p)
      await carregar()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erro ao criar paciente')
      throw err
    }
  }

  const atualizar = async (p: Paciente) => {
    setError(null)
    try {
      await updatePaciente(p)
      await carregar()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erro ao atualizar paciente')
      throw err
    }
  }

  const remover = async (id: number) => {
    setError(null)
    try {
      await deletePaciente(id)
      setPacientes(prev => prev.filter(p => p.id !== id))
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erro ao remover paciente')
      throw err
    }
  }

  return { pacientes, loading, error, criar, atualizar, remover, recarregar: carregar }
}
