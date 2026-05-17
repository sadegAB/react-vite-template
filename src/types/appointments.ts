export interface AppointmentCreate {
  doctor_id: string
  patient_name: string
  patient_phone: string
  appointment_date: string
  appointment_time: string
  status: string
}

export interface Appointment extends AppointmentCreate {
  id: string
  created_at?: string
  updated_at?: string
}