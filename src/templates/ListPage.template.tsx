// Template: List Page
// Replace: {{FEATURE_NAME}}, {{FEATURE_NAME_SINGULAR}}, {{API_GET_FN}}, {{COLUMNS}}, {{SEARCH_PLACEHOLDER}}
import { useApi } from '../../hooks/useApi'
import { {{API_GET_FN}} } from '../../api/{{FEATURE_NAME}}'
import PageHeader from '../../components/PageHeader'
import LoadingSpinner from '../../components/LoadingSpinner'
import ErrorMessage from '../../components/ErrorMessage'
import DataTable from '../../components/DataTable'
import StatusBadge from '../../components/StatusBadge'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function {{FEATURE_NAME}}ListPage() {
  const { data, loading, error } = useApi({{API_GET_FN}}, [])
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error || 'An error occurred'} />

  const filtered = search
    ? (data || []).filter((item: any) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(search.toLowerCase())
        )
      )
    : (data || [])

  const columns = {{COLUMNS}}

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="{{FEATURE_NAME}}"
        subtitle="Manage {{FEATURE_NAME}}"
        action={
          <button
            onClick={() => navigate('/{{FEATURE_NAME}}/new')}
            className="btn btn-primary"
          >
            + Add {{FEATURE_NAME_SINGULAR}}
          </button>
        }
      />

      <div className="card bg-base-100 shadow-xl mb-6">
        <div className="card-body">
          <div className="form-control w-full max-w-xs mb-4">
            <input
              type="text"
              placeholder="{{SEARCH_PLACEHOLDER}}"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <DataTable
            data={filtered as any[]}
            columns={columns}
            onRowClick={(row: any) => navigate(`/{{FEATURE_NAME}}/${row.id}`)}
          />
        </div>
      </div>
    </div>
  )
}
