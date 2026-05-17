import { useApi } from '../../hooks/useApi'
import { getHospitals } from '../../api/hospitals'
import PageHeader from '../../components/PageHeader'
import LoadingSpinner from '../../components/LoadingSpinner'
import ErrorMessage from '../../components/ErrorMessage'
import DataTable from '../../components/DataTable'
import { Hospital } from '../../types/hospitals'
import { useState } from 'react'

export default function HospitalListPage() {
  const { data, loading, error } = useApi(getHospitals, [])
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = (data || []).filter((hospital: Hospital) =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Address', accessor: 'address' },
    { header: 'Phone', accessor: 'phone' }
  ]

  const handleClick = (row: Hospital) => {
    // Handle row click, e.g., navigate to detail page
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Hospitals" subtitle="Manage hospitals" action={<button className="btn btn-primary">Add</button>} />
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search hospitals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      <DataTable data={filteredData} columns={columns} onRowClick={handleClick} />
    </div>
  )
}