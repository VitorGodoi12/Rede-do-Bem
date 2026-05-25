import { apiGet, apiPost, apiPut, apiDelete } from './api'
import type { HistoricoClinico, HistoricoClinicoForm } from '../types'

const PATH = '/historico'

export async function getHistoricos(): Promise<HistoricoClinico[]> {
  return apiGet<HistoricoClinico[]>(PATH)
}

export async function getHistoricoById(id: number): Promise<HistoricoClinico> {
  return apiGet<HistoricoClinico>(`${PATH}/${id}`)
}

export async function createHistorico(historico: HistoricoClinicoForm): Promise<void> {
  return apiPost<void>(PATH, historico)
}

export async function updateHistorico(historico: HistoricoClinico): Promise<void> {
  return apiPut<void>(PATH, historico)
}

export async function deleteHistorico(id: number): Promise<void> {
  return apiDelete(`${PATH}/${id}`)
}
