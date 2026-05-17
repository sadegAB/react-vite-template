import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '../../hooks/useMutation'
import { createHospital } from '../../api/hospitals'
import PageHeader from '../../components/PageHeader'
import FormField from '../../components/FormField'
import ErrorMessage from '../../components/ErrorMessage'

export default function HospitalCreatePage() {
  const navigate = useNavigate()
  const { loading, error, mutate } = useMutation(createHospital)
  const [formData, setFormData] = useState({ name: '', address: '', phone: '', emergency_available: false })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate(formData as any, () => navigate('/hospitals'))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Create Hospital" subtitle="Add a new hospital" />
      {error && <ErrorMessage message={error || 'An error occurred'} />}
      <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl card-clean">
        <div className="card-body space-y-4">
          <FormField label="Name">
            <input name="name" value={formData.name} onChange={handleChange} className="input input-bordered w-full" required />
          </FormField>
          <FormField label="Address">
            <input name="address" value={formData.address} onChange={handleChange} className="input input-bordered w-full" required />
          </FormField>
          <FormField label="Phone">
            <input name="phone" value={formData.phone} onChange={handleChange} className="input input-bordered w-full" required />
          </FormField>
          <button type="submit" disabled={loading} className="btn btn-primary">
            {loading ? 'Creating...' : 'Create Hospital'}
          </button>
        </div>
      </form>
    </div>
  )
}
