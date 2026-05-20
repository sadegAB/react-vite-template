// Template: Detail Page
// Replace: {{FEATURE_NAME}}, {{FEATURE_NAME_SINGULAR}}, {{API_GET_FN}}, {{DETAIL_FIELDS}}, {{STATUS_FIELD}}
import { useParams, useNavigate } from 'react-router-dom'
import { useApi } from '../../hooks/useApi'
import { {{API_GET_FN}} } from '../../api/{{FEATURE_NAME}}'
import PageHeader from '../../components/PageHeader'
import LoadingSpinner from '../../components/LoadingSpinner'
import ErrorMessage from '../../components/ErrorMessage'
import StatusBadge from '../../components/StatusBadge'

export default function {{FEATURE_NAME}}DetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data, loading, error } = useApi(() => {{API_GET_FN}}(id!), [id])

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error || 'An error occurred'} />

  const item = data as any

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title={item?.name || item?.full_name || '{{FEATURE_NAME_SINGULAR}} Details'}
        subtitle="View details"
        action={
          <div className="flex gap-2">
            <button
              onClick={() => navigate(`/{{FEATURE_NAME}}/${id}/edit`)}
              className="btn btn-outline btn-sm"
            >
              Edit
            </button>
            <button
              onClick={() => navigate('/{{FEATURE_NAME}}')}
              className="btn btn-ghost btn-sm"
            >
              Back
            </button>
          </div>
        }
      />

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          {{DETAIL_FIELDS}}
        </div>
      </div>
    </div>
  )
}
