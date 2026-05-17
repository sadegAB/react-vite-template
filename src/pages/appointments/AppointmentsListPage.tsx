import { useApi } from '../../hooks/useApi'
import { getAppointments } from '../../api/appointments'
import PageHeader from '../../components/PageHeader'
import LoadingSpinner from '../../components/LoadingSpinner'
import ErrorMessage from '../../components/ErrorMessage'
import DataTable from '../../components/DataTable'
import StatusBadge from '../../components/StatusBadge'

export default function AppointmentsListPage() {
  const { data, loading, error } = useApi(getAppointments, [])

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error || 'An error occurred'} />

  const columns = [
    { header: 'Patient', accessor: 'patient_name' as const },
    { header: 'Phone', accessor: 'patient_phone' as const },
    { header: 'Date', accessor: 'appointment_date' as const },
    { header: 'Time', accessor: 'appointment_time' as const },
    { header: 'Status', accessor: (row: Record<string, unknown>) => <StatusBadge status={String(row.status || 'pending')} /> },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Appointments" subtitle="Manage appointments" />
      <DataTable data={(data || []) as any[]} columns={columns} />
    </div>
  )
}
