import client from './client'
import type { Appointment, AppointmentCreate } from '../types/appointments'

export const getAppointments = (): Promise<Appointment[]> =>
  client.get<Appointment[]>('/appointments').then(r => r.data)

export const getAppointment = (id: string): Promise<Appointment> =>
  client.get<Appointment>(`/appointments/${id}`).then(r => r.data)

export const createAppointment = (data: AppointmentCreate): Promise<Appointment> =>
  client.post<Appointment>('/appointments', data).then(r => r.data)

export const updateAppointment = (id: string, data: Partial<AppointmentCreate>): Promise<Appointment> =>
  client.patch<Appointment>(`/appointments/${id}`, data).then(r => r.data)

export const deleteAppointment = (id: string): Promise<void> =>
  client.delete(`/appointments/${id}`).then(() => {})