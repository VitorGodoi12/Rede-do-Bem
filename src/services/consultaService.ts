import { apiGet, apiPost, apiPut, apiDelete } from './api'
import type { Consulta, ConsultaForm } from '../types'

const PATH = '/consulta'

// GET /consulta — lista todas
export async function getConsultas(): Promise<Consulta[]> {
  return apiGet<Consulta[]>(PATH)
}

// GET /consulta/:id — busca por ID
export async function getConsultaById(id: number): Promise<Consulta> {
  return apiGet<Consulta>(`${PATH}/${id}`)
}

// POST /consulta — cria nova
export async function createConsulta(consulta: ConsultaForm): Promise<void> {
  return apiPost<void>(PATH, consulta)
}

// PUT /consulta — atualiza existente
export async function updateConsulta(consulta: Consulta): Promise<void> {
  return apiPut<void>(PATH, consulta)
}

// DELETE /consulta/:id — remove
export async function deleteConsulta(id: number): Promise<void> {
  return apiDelete(`${PATH}/${id}`)
}
