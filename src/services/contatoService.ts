import { apiGet, apiPost, apiPut, apiDelete } from './api'
import type { Contato, ContatoForm } from '../types'

const PATH = '/contato'

export async function getContatos(): Promise<Contato[]> {
  return apiGet<Contato[]>(PATH)
}

export async function getContatoById(id: number): Promise<Contato> {
  return apiGet<Contato>(`${PATH}/${id}`)
}

export async function createContato(contato: ContatoForm): Promise<void> {
  return apiPost<void>(PATH, contato)
}

export async function updateContato(contato: Contato): Promise<void> {
  return apiPut<void>(PATH, contato)
}

export async function deleteContato(id: number): Promise<void> {
  return apiDelete(`${PATH}/${id}`)
}
