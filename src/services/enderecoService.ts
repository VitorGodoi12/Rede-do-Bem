import { apiGet, apiPost, apiPut, apiDelete } from './api'
import type { Endereco, EnderecoForm } from '../types'

const PATH = '/endereco'

export async function getEnderecos(): Promise<Endereco[]> {
  return apiGet<Endereco[]>(PATH)
}

export async function getEnderecoById(id: number): Promise<Endereco> {
  return apiGet<Endereco>(`${PATH}/${id}`)
}

export async function createEndereco(endereco: EnderecoForm): Promise<void> {
  return apiPost<void>(PATH, endereco)
}

export async function updateEndereco(endereco: Endereco): Promise<void> {
  return apiPut<void>(PATH, endereco)
}

export async function deleteEndereco(id: number): Promise<void> {
  return apiDelete(`${PATH}/${id}`)
}

// Busca CEP via ViaCep (endpoint especial da API Java)
export async function buscarCep(cep: string): Promise<Endereco> {
  return apiGet<Endereco>(`${PATH}/cep/${cep}`)
}
