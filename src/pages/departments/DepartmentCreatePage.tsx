import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApi } from '../../hooks/useApi'
import { useMutation } from '../../hooks/useMutation'
import { createDepartment } from '../../api/departments'
import PageHeader from '../../components/PageHeader'
import FormField from '../../components/FormField'
import ErrorMessage from '../../components/ErrorMessage'
import LoadingSpinner from '../../components/LoadingSpinner'
import type { Hospital } from '../../types/hospitals'
import { getHospitals } from '../../api/hospitals'

export default function DepartmentCreatePage() {
  const navigate = useNavigate()
  const { data: hospitals, loading: hospitalsLoading, error: hospitalsError } = useApi(getHospitals, [])
  const { loading, error, mutate } = useMutation(createDepartment)
  const [formData, setFormData] = useState({
    name: '',
    hospital_id: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(formData, () => navigate('/departments'))
  }

  if (hospitalsLoading) return <LoadingSpinner />
  if (hospitalsError) return <ErrorMessage message={hospitalsError} />

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Departments" subtitle="Create New Department" />
      <form onSubmit={handleSubmit} className="form-card">
        <FormField label="Name" error="">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </FormField>
        <FormField label="Hospital" error="">
          <select
            name="hospital_id"
            value={formData.hospital_id}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>Select a hospital</option>
            {(hospitals || []).map((hospital: Hospital) => (
              <option key={hospital.id} value={hospital.id}>
                {hospital.name}
              </option>
            ))}
          </select>
        </FormField>
        {error && <ErrorMessage message={error} />}
        <button type="submit" className="btn btn-primary mt-4">
          {loading ? 'Creating...' : 'Create Department'}
        </button>
      </form>
    </div>
  )
}