import { apiGet, apiPost, apiPut, apiDelete } from './api'
import type { Paciente, PacienteForm } from '../types'

const PATH = '/paciente'

// GET /paciente — lista todos
export async function getPacientes(): Promise<Paciente[]> {
  return apiGet<Paciente[]>(PATH)
}

// GET /paciente/:id — busca por ID
export async function getPacienteById(id: number): Promise<Paciente> {
  return apiGet<Paciente>(`${PATH}/${id}`)
}

// POST /paciente — cria novo
export async function createPaciente(paciente: PacienteForm): Promise<void> {
  return apiPost<void>(PATH, paciente)
}

// PUT /paciente — atualiza existente
export async function updatePaciente(paciente: Paciente): Promise<void> {
  return apiPut<void>(PATH, paciente)
}

// DELETE /paciente/:id — remove
export async function deletePaciente(id: number): Promise<void> {
  return apiDelete(`${PATH}/${id}`)
}
