import { apiGet, apiPost, apiPut, apiDelete } from './api'
import type { Dentista, DentistaForm } from '../types'

const PATH = '/dentista'

// GET /dentista — lista todos
export async function getDentistas(): Promise<Dentista[]> {
  return apiGet<Dentista[]>(PATH)
}

// GET /dentista/:id — busca por ID
export async function getDentistaById(id: number): Promise<Dentista> {
  return apiGet<Dentista>(`${PATH}/${id}`)
}

// POST /dentista — cria novo
export async function createDentista(dentista: DentistaForm): Promise<void> {
  return apiPost<void>(PATH, dentista)
}

// PUT /dentista — atualiza existente
export async function updateDentista(dentista: Dentista): Promise<void> {
  return apiPut<void>(PATH, dentista)
}

// DELETE /dentista/:id — remove
export async function deleteDentista(id: number): Promise<void> {
  return apiDelete(`${PATH}/${id}`)
}
