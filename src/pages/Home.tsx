import { useState } from 'react'
import DataTable, { type DataTableColumn } from '../components/DataTable'
import ErrorMessage from '../components/ErrorMessage'
import FormField from '../components/FormField'
import LoadingSpinner from '../components/LoadingSpinner'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'

interface ExampleItem {
  id: string
  name: string
  category: string
  status: string
}

const exampleItems: ExampleItem[] = [
  {
    id: '1',
    name: 'Example record',
    category: 'Template',
    status: 'active',
  },
  {
    id: '2',
    name: 'Pending item',
    category: 'Demo',
    status: 'pending',
  },
  {
    id: '3',
    name: 'Inactive item',
    category: 'Archive',
    status: 'inactive',
  },
]

const exampleColumns: DataTableColumn<ExampleItem>[] = [
  {
    header: 'Name',
    accessor: 'name',
  },
  {
    header: 'Category',
    accessor: 'category',
  },
  {
    header: 'Status',
    accessor: (row) => <StatusBadge status={row.status} />,
  },
]

export default function Home() {
  const [exampleName, setExampleName] = useState('')

  return (
    <div className="space-y-8">
      <PageHeader
        title="React Vite Template"
        subtitle="A clean starter template using React, Vite, TypeScript, Tailwind, and DaisyUI."
        action={<button className="btn btn-primary">Primary action</button>}
      />

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Create features</h2>
            <p className="text-sm text-base-content/70">
              Add feature pages, API files, and types using the documented template pattern.
            </p>
          </div>
        </div>

        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Use shared UI</h2>
            <p className="text-sm text-base-content/70">
              Reuse components from src/components instead of repeating page-level UI.
            </p>
          </div>
        </div>

        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Connect APIs</h2>
            <p className="text-sm text-base-content/70">
              Use the Axios client and typed hooks to connect frontend pages to backend endpoints.
            </p>
          </div>
        </div>
      </section>

      <section className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Buttons and badges</h2>

          <div className="flex flex-wrap gap-3">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-outline">Outline</button>
            <button className="btn btn-ghost">Ghost</button>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <StatusBadge status="active" />
            <StatusBadge status="pending" />
            <StatusBadge status="inactive" />
            <StatusBadge status="cancelled" />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Form example</h2>

            <FormField label="Example name">
              <input
                className="input input-bordered w-full"
                value={exampleName}
                onChange={(event) => setExampleName(event.target.value)}
                placeholder="Type a name"
              />
            </FormField>

            <FormField label="Example select">
              <select className="select select-bordered w-full" defaultValue="">
                <option value="" disabled>
                  Choose an option
                </option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
              </select>
            </FormField>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>

        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">States example</h2>

            <LoadingSpinner label="Loading component example" />

            <ErrorMessage message="Error component example" />

            <div className="alert alert-info">
              <span>Use DaisyUI alert classes for simple user feedback.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Data table example</h2>
          <DataTable data={exampleItems} columns={exampleColumns} />
        </div>
      </section>
    </div>
  )
}
