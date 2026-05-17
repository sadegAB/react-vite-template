import { useParams } from 'react-router-dom'
import { useApi } from '../../hooks/useApi'
import { getDepartment } from '../../api/departments'
import PageHeader from '../../components/PageHeader'
import LoadingSpinner from '../../components/LoadingSpinner'
import ErrorMessage from '../../components/ErrorMessage'

export default function DepartmentDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { data, loading, error } = useApi(() => getDepartment(id!), [id])

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error || 'An error occurred'} />

  const department = data as any

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title={department?.name || 'Department'} subtitle="Department details" />
      <div className="card bg-base-100 shadow-xl card-clean">
        <div className="card-body">
          <p><strong>Name:</strong> {department?.name}</p>
          <p><strong>Hospital ID:</strong> {department?.hospital_id}</p>
        </div>
      </div>
    </div>
  )
}
