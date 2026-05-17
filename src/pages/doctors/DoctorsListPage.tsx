import { useApi } from '../../hooks/useApi'
import { getDoctors } from '../../api/doctors'
import PageHeader from '../../components/PageHeader'
import LoadingSpinner from '../../components/LoadingSpinner'
import ErrorMessage from '../../components/ErrorMessage'
import DataTable from '../../components/DataTable'
import StatusBadge from '../../components/StatusBadge'
import type { Doctor } from '../../types/doctors'
import { Link } from 'react-router-dom'

export default function DoctorsListPage() {
  const { data, loading, error } = useApi(getDoctors, [])

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />

  const columns = [
    { header: 'Full Name', accessor: 'full_name' },
    { header: 'Specialization', accessor: 'specialization' },
    { header: 'Consultation Fee', accessor: 'consultation_fee' },
    { header: 'Status', accessor: (row: Doctor) => <StatusBadge status={row.rating >= 4 ? 'active' : 'inactive'} /> },
    { header: 'Actions', accessor: (row: Doctor) => <Link to={`/doctors/${row.id}`} className="btn btn-primary">View</Link> }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Doctors" subtitle="Manage doctors" action={<Link to="/doctors/new" className="btn btn-primary">Add Doctor</Link>} />
      <DataTable data={(data ?? []) as any[]} columns={columns as any} onRowClick={() => {}} />
    </div>
  )
}