import client from './client'
import type { Hospital } from '../types/hospitals'

export const getHospitals = () =>
  client.get<Hospital[]>('/hospitals').then(r => r.data)

export const getHospital = (id: string) =>
  client.get<Hospital>(`/hospitals/${id}`).then(r => r.data)

export const createHospital = (data: Omit<Hospital, 'id'>) =>
  client.post<Hospital>('/hospitals', data).then(r => r.data)

export const updateHospital = (id: string, data: Partial<Omit<Hospital, 'id'>>) =>
  client.patch<Hospital>(`/hospitals/${id}`, data).then(r => r.data)

export const deleteHospital = (id: string) =>
  client.delete(`/hospitals/${id}`).then(r => r.data)