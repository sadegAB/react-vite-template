import React, { useState } from 'react'
import { useMutation } from '../../hooks/useMutation'
import { createAppointment } from '../../api/appointments'
import PageHeader from '../../components/PageHeader'
import FormField from '../../components/FormField'
import ErrorMessage from '../../components/ErrorMessage'
import { useNavigate } from 'react-router-dom'
import type { AppointmentCreate } from '../../types/appointments'

export default function AppointmentsCreatePage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<AppointmentCreate>({
    doctor_id: '',
    patient_name: '',
    patient_phone: '',
    appointment_date: '',
    appointment_time: '',
    status: 'pending',
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const { loading, error, mutate } = useMutation(createAppointment)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple validation
    const newErrors: { [key: string]: string } = {}
    if (!formData.doctor_id) newErrors.doctor_id = 'Doctor is required'
    if (!formData.patient_name) newErrors.patient_name = 'Patient name is required'
    if (!formData.patient_phone) newErrors.patient_phone = 'Patient phone is required'
    if (!formData.appointment_date) newErrors.appointment_date = 'Appointment date is required'
    if (!formData.appointment_time) newErrors.appointment_time = 'Appointment time is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    mutate(formData, () => navigate('/appointments'))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="New Appointment" subtitle="Create a new appointment" />
      <form onSubmit={handleSubmit} className="form-card">
        {error && <ErrorMessage message={error} />}
        <FormField label="Doctor ID" error={errors.doctor_id}>
          <input
            type="text"
            name="doctor_id"
            value={formData.doctor_id}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </FormField>
        <FormField label="Patient Name" error={errors.patient_name}>
          <input
            type="text"
            name="patient_name"
            value={formData.patient_name}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </FormField>
        <FormField label="Patient Phone" error={errors.patient_phone}>
          <input
            type="text"
            name="patient_phone"
            value={formData.patient_phone}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </FormField>
        <FormField label="Appointment Date" error={errors.appointment_date}>
          <input
            type="date"
            name="appointment_date"
            value={formData.appointment_date}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </FormField>
        <FormField label="Appointment Time" error={errors.appointment_time}>
          <input
            type="time"
            name="appointment_time"
            value={formData.appointment_time}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </FormField>
        <FormField label="Status">
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </FormField>
        <button type="submit" className="btn btn-primary mt-4" disabled={loading}>
          {loading ? 'Creating...' : 'Create Appointment'}
        </button>
      </form>
    </div>
  )
}