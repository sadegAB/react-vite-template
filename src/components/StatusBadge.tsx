interface Props {
  status: string
}

const statusMap: Record<string, string> = {
  pending: 'badge-pending',
  confirmed: 'badge-confirmed',
  cancelled: 'badge-cancelled',
  active: 'badge-active',
  inactive: 'badge-inactive',
}

export default function StatusBadge({ status }: Props) {
  const cls = statusMap[status.toLowerCase()] || 'badge badge-ghost badge-sm'
  return <span className={cls}>{status}</span>
}