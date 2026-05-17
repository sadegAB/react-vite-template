interface Column<T> {
  header: string
  accessor: keyof T | ((row: T) => React.ReactNode)
}

interface Props<T> {
  data: T[]
  columns: Column<T>[]
  onRowClick?: (row: T) => void
}

export default function DataTable<T extends { id: string }>({ data, columns, onRowClick }: Props<T>) {
  return (
    <div className="card-clean overflow-x-auto">
      <table className="table-clean w-full">
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={i}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} onClick={() => onRowClick?.(row)} className={onRowClick ? 'cursor-pointer' : ''}>
              {columns.map((col, i) => (
                <td key={i}>
                  {typeof col.accessor === 'function'
                    ? col.accessor(row)
                    : String(row[col.accessor] ?? '')}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="text-center py-12 text-base-content/40">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}