import { useParams } from 'react-router-dom'
import { useApi } from '../../hooks/useApi'
import { useMutation } from '../../hooks/useMutation'
import { getAppointment, updateAppointment } from '../../api/appointments'
import PageHeader from '../../components/PageHeader'
import LoadingSpinner from '../../components/LoadingSpinner'
import ErrorMessage from '../../components/ErrorMessage'
import StatusBadge from '../../components/StatusBadge'
import { useState } from 'react'

export default function AppointmentsDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { data: appointment, loading, error } = useApi(() => getAppointment(id!), [id])
  const { loading: updateLoading, error: updateError, mutate } = useMutation((data: any) => updateAppointment(data.id, data))
  const [status, setStatus] = useState('')

  const handleStatusUpdate = () => {
    if (status && id) {
      mutate({ id, status } as any, () => setStatus(''))
    }
  }

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error || 'An error occurred'} />

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Appointment Details" subtitle={"Booking: " + appointment?.id} />
      <div className="card bg-base-100 shadow-xl card-clean mb-6">
        <div className="card-body">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Patient Name</p>
              <p className="font-medium">{appointment?.patient_name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Patient Phone</p>
              <p className="font-medium">{appointment?.patient_phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium">{appointment?.appointment_date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Time</p>
              <p className="font-medium">{appointment?.appointment_time}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <StatusBadge status={appointment?.status || 'pending'} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Doctor ID</p>
              <p className="font-medium">{appointment?.doctor_id}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl card-clean">
        <div className="card-body">
          <h2 className="card-title">Update Status</h2>
          {updateError && <ErrorMessage message={updateError || 'An error occurred'} />}
          <div className="flex gap-4 items-end">
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="select select-bordered">
              <option value="">Select status</option>
              <option value="confirmed">Confirm</option>
              <option value="cancelled">Cancel</option>
              <option value="completed">Complete</option>
            </select>
            <button onClick={handleStatusUpdate} disabled={!status || updateLoading} className="btn btn-primary">
              {updateLoading ? 'Updating...' : 'Update'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
