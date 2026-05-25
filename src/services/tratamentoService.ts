import { apiGet, apiPost, apiPut, apiDelete } from './api'
import type { Tratamento, TratamentoForm } from '../types'

const PATH = '/tratamento'

export async function getTratamentos(): Promise<Tratamento[]> {
  return apiGet<Tratamento[]>(PATH)
}

export async function getTratamentoById(id: number): Promise<Tratamento> {
  return apiGet<Tratamento>(`${PATH}/${id}`)
}

export async function createTratamento(tratamento: TratamentoForm): Promise<void> {
  return apiPost<void>(PATH, tratamento)
}

export async function updateTratamento(tratamento: Tratamento): Promise<void> {
  return apiPut<void>(PATH, tratamento)
}

export async function deleteTratamento(id: number): Promise<void> {
  return apiDelete(`${PATH}/${id}`)
}
