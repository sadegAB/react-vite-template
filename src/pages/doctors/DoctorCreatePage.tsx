import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '../../hooks/useMutation'
import { createDoctor } from '../../api/doctors'
import PageHeader from '../../components/PageHeader'
import FormField from '../../components/FormField'
import ErrorMessage from '../../components/ErrorMessage'

export default function DoctorCreatePage() {
  const navigate = useNavigate()
  const { loading, error, mutate } = useMutation(createDoctor)
  const [formData, setFormData] = useState({
    full_name: '', specialization: '', hospital_id: '', department_id: '',
    consultation_fee: 0, rating: 0, gender: '', languages: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate(formData as any, () => navigate('/doctors'))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Create Doctor" subtitle="Add a new doctor" />
      {error && <ErrorMessage message={error || 'An error occurred'} />}
      <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl card-clean">
        <div className="card-body space-y-4">
          <FormField label="Full Name">
            <input name="full_name" value={formData.full_name} onChange={handleChange} className="input input-bordered w-full" required />
          </FormField>
          <FormField label="Specialization">
            <input name="specialization" value={formData.specialization} onChange={handleChange} className="input input-bordered w-full" required />
          </FormField>
          <FormField label="Hospital ID">
            <input name="hospital_id" value={formData.hospital_id} onChange={handleChange} className="input input-bordered w-full" required />
          </FormField>
          <FormField label="Department ID">
            <input name="department_id" value={formData.department_id} onChange={handleChange} className="input input-bordered w-full" required />
          </FormField>
          <button type="submit" disabled={loading} className="btn btn-primary">
            {loading ? 'Creating...' : 'Create Doctor'}
          </button>
        </div>
      </form>
    </div>
  )
}
