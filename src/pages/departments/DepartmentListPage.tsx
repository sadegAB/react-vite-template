import { useApi } from '../../hooks/useApi'
import { getDepartments } from '../../api/departments'
import PageHeader from '../../components/PageHeader'
import LoadingSpinner from '../../components/LoadingSpinner'
import ErrorMessage from '../../components/ErrorMessage'
import DataTable from '../../components/DataTable'
import type { Department } from '../../types/departments'

export default function DepartmentListPage() {
  const { data, loading, error } = useApi(getDepartments, [])

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Hospital ID', accessor: 'hospital_id' },
    { header: 'Actions', accessor: (_row: Department) => <button className="btn btn-primary">View</button> }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Departments" subtitle="Manage departments" />
      <DataTable data={(data ?? []) as any[]} columns={columns as any} onRowClick={() => {}} />
    </div>
  )
}