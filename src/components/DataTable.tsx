import type { ReactNode } from 'react'

export interface DataTableColumn<T> {
  header: string
  accessor: keyof T | ((row: T) => ReactNode)
}

interface DataTableProps<T> {
  data: T[]
  columns: DataTableColumn<T>[]
  emptyMessage?: string
  onRowClick?: (row: T) => void
}

export default function DataTable<T extends { id: string }>({
  data,
  columns,
  emptyMessage = 'No records found',
  onRowClick,
}: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.header}>{column.header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="py-10 text-center text-base-content/60">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr
                key={row.id}
                className={onRowClick ? 'cursor-pointer hover' : undefined}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => (
                  <td key={column.header}>
                    {typeof column.accessor === 'function'
                      ? column.accessor(row)
                      : String(row[column.accessor] ?? '')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
