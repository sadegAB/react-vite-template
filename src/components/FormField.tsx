
interface Props {
  label: string
  error?: string
  children: React.ReactNode
}

export default function FormField({ label, error, children }: Props) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      {children}
      {error && <span className="text-error text-xs">{error}</span>}
    </div>
  )
}