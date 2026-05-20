// Template: Create/Edit Page
// Replace: {{FEATURE_NAME}}, {{FEATURE_NAME_SINGULAR}}, {{API_CREATE_FN}}, {{API_UPDATE_FN}}, {{FORM_FIELDS}}, {{REDIRECT_PATH}}
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation } from '../../hooks/useMutation'
import { useApi } from '../../hooks/useApi'
import { {{API_CREATE_FN}}, {{API_UPDATE_FN}} } from '../../api/{{FEATURE_NAME}}'
import PageHeader from '../../components/PageHeader'
import FormField from '../../components/FormField'
import ErrorMessage from '../../components/ErrorMessage'

const initialFormData = {
  {{FORM_FIELDS_INITIAL}}
}

export default function {{FEATURE_NAME}}CreatePage() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const isEdit = !!id
  const [formData, setFormData] = useState(initialFormData)

  // If editing, load existing data
  const { data: existing } = useApi(
    () => (id ? {{API_UPDATE_FN}}(id) : Promise.resolve(null)),
    [id]
  )
  useEffect(() => {
    if (existing) setFormData(existing as any)
  }, [existing])

  const { loading, error, mutate } = useMutation(
    isEdit ? (data: any) => {{API_UPDATE_FN}}(id!, data) : {{API_CREATE_FN}}
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate(formData, () => navigate('{{REDIRECT_PATH}}'))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title={isEdit ? 'Edit {{FEATURE_NAME_SINGULAR}}' : 'Create {{FEATURE_NAME_SINGULAR}}'}
        subtitle={isEdit ? 'Update details' : 'Add a new {{FEATURE_NAME_SINGULAR}}'}
      />
      {error && <ErrorMessage message={error || 'An error occurred'} />}
      <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="form-grid">
            {{FORM_FIELDS}}
          </div>
          <div className="flex gap-4 mt-6">
            <button type="submit" disabled={loading} className="btn btn-primary">
              {loading ? 'Saving...' : isEdit ? 'Update' : 'Create'}
            </button>
            <button type="button" onClick={() => navigate(-1)} className="btn btn-ghost">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
