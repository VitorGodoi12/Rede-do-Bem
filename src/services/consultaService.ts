import { apiGet, apiPost, apiPut, apiDelete } from './api'
import type { Consulta, ConsultaForm } from '../types'

const PATH = '/consulta'


export async function getConsultas(): Promise<Consulta[]> {
  return apiGet<Consulta[]>(PATH)
}


export async function getConsultaById(id: number): Promise<Consulta> {
  return apiGet<Consulta>(`${PATH}/${id}`)
}


export async function createConsulta(consulta: ConsultaForm): Promise<void> {
  return apiPost<void>(PATH, consulta)
}

export async function updateConsulta(consulta: Consulta): Promise<void> {
  return apiPut<void>(PATH, consulta)
}


export async function deleteConsulta(id: number): Promise<void> {
  return apiDelete(`${PATH}/${id}`)
}
