import { useState, useEffect } from 'react'
import type { Dentista, DentistaForm } from '../types'
import {
  getDentistas,
  createDentista,
  updateDentista,
  deleteDentista,
} from '../services/dentistaService'

interface UseDentistasReturn {
  dentistas: Dentista[]
  loading: boolean
  error: string | null
  criar: (d: DentistaForm) => Promise<void>
  atualizar: (d: Dentista) => Promise<void>
  remover: (id: number) => Promise<void>
  recarregar: () => void
}

export function useDentistas(): UseDentistasReturn {
  const [dentistas, setDentistas] = useState<Dentista[]>([])
  const [loading, setLoading]     = useState<boolean>(true)
  const [error, setError]         = useState<string | null>(null)

  const carregar = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getDentistas()
      setDentistas(data)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar dentistas')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    carregar()
  }, [])

  const criar = async (d: DentistaForm) => {
    setError(null)
    try {
      await createDentista(d)
      await carregar()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erro ao criar dentista')
      throw err
    }
  }

  const atualizar = async (d: Dentista) => {
    setError(null)
    try {
      await updateDentista(d)
      await carregar()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erro ao atualizar dentista')
      throw err
    }
  }

  const remover = async (id: number) => {
    setError(null)
    try {
      await deleteDentista(id)
      setDentistas(prev => prev.filter(d => d.id !== id))
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erro ao remover dentista')
      throw err
    }
  }

  return { dentistas, loading, error, criar, atualizar, remover, recarregar: carregar }
}
