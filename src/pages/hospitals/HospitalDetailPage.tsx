import { useParams } from 'react-router-dom'
import { useApi } from '../../hooks/useApi'
import { getHospital } from '../../api/hospitals'
import PageHeader from '../../components/PageHeader'
import LoadingSpinner from '../../components/LoadingSpinner'
import ErrorMessage from '../../components/ErrorMessage'
import DataTable from '../../components/DataTable'
import StatusBadge from '../../components/StatusBadge'

export default function HospitalDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { data: hospital, loading, error } = useApi(() => getHospital(id!), [id])

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error || 'An error occurred'} />

  const columns = [
    { header: 'Day', accessor: 'day_of_week' as const },
    { header: 'Open', accessor: (wh: Record<string, unknown>) => <StatusBadge status={wh.is_open ? 'available' : 'unavailable'} /> },
    { header: 'Opens', accessor: 'open_time' as const },
    { header: 'Closes', accessor: 'close_time' as const },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title={hospital?.name || 'Hospital'} subtitle="Hospital details" />
      <div className="card bg-base-100 shadow-xl card-clean mb-6">
        <div className="card-body">
          <p><strong>Address:</strong> {hospital?.address}</p>
          <p><strong>Phone:</strong> {hospital?.phone}</p>
          <p><strong>Emergency:</strong> <StatusBadge status={hospital?.emergency_available ? 'available' : 'unavailable'} /></p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl card-clean">
        <div className="card-body">
          <h2 className="card-title">Working Hours</h2>
          <DataTable data={(hospital?.working_hours || []) as Record<string, unknown>[]} columns={columns} />
        </div>
      </div>
    </div>
  )
}
