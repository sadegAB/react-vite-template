interface StatusBadgeProps {
  status: string
}

const statusClassMap: Record<string, string> = {
  pending: 'badge-warning',
  confirmed: 'badge-success',
  cancelled: 'badge-error',
  active: 'badge-success',
  inactive: 'badge-ghost',
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const statusKey = status.toLowerCase()
  const statusClass = statusClassMap[statusKey] ?? 'badge-neutral'

  return <span className={`badge badge-sm ${statusClass}`}>{status}</span>
}
