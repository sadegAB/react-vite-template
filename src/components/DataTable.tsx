interface Column {
  header: string
  accessor: string | ((row: any) => React.ReactNode)
}

interface Props {
  data: any[]
  columns: Column[]
  onRowClick?: (row: any) => void
}

export default function DataTable({ data, columns, onRowClick }: Props) {
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
          {data.map((row, i) => (
            <tr key={row.id || i} onClick={() => onRowClick?.(row)} className={onRowClick ? 'cursor-pointer' : ''}>
              {columns.map((col, j) => (
                <td key={j}>
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
