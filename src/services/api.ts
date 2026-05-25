export const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080'


export interface ApiResponse<T> {
  data: T | null
  error: string | null
  loading: boolean
}


export class ApiError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}


export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  if (!res.ok) throw new ApiError(`Erro ao buscar ${path}`, res.status)
  return res.json() as Promise<T>
}


export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new ApiError(`Erro ao criar em ${path}`, res.status)
  // POST retorna 201 Created — sem body
  return (res.status === 201 ? {} : res.json()) as Promise<T>
}


export async function apiPut<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new ApiError(`Erro ao atualizar em ${path}`, res.status)
  return (res.status === 200 ? {} : res.json()) as Promise<T>
}


export async function apiDelete(path: string): Promise<void> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  if (!res.ok) throw new ApiError(`Erro ao deletar em ${path}`, res.status)
}
