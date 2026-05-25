
export interface Contato {
  id?: number
  telefone: string
  email: string
}

export interface Endereco {
  id?: number
  rua: string
  numero: number
  cidade: string
  estado: string
}

export interface Paciente {
  id?: number
  nome: string
  cpf: string
  dataNascimento: string
  endereco?: Endereco
  contato?: Contato
}

export interface Dentista {
  id?: number
  nome: string
  cro: string
  especialidade: string
  disponibilidade: string
  endereco?: Endereco
  contato?: Contato
}

export interface Consulta {
  id?: number
  data: string
  hora: string
  local: string
  descricao: string
  observacoes: string
  paciente?: Paciente
  dentista?: Dentista
}

export interface Tratamento {
  id?: number
  nome: string
  descricao: string
  valor: number
  consultaId?: number
  consulta?: Consulta
}

export interface HistoricoClinico {
  id?: number
  dataRegistro: string
  observacoes: string
  conteudo: string
  descricao: string
  pacienteId?: number
  consulta?: Consulta
  paciente?: Paciente
}

// Tipos utilitários para formulários
export type PacienteForm = Omit<Paciente, 'id'>
export type DentistaForm = Omit<Dentista, 'id'>
export type ConsultaForm = Omit<Consulta, 'id'>
export type TratamentoForm = Omit<Tratamento, 'id'>
export type HistoricoClinicoForm = Omit<HistoricoClinico, 'id'>
export type ContatoForm = Omit<Contato, 'id'>
export type EnderecoForm = Omit<Endereco, 'id'>
