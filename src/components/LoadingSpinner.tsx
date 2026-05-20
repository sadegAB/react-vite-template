interface LoadingSpinnerProps {
  label?: string
}

export default function LoadingSpinner({ label = 'Loading...' }: LoadingSpinnerProps) {
  return (
    <div className="flex items-center justify-center gap-3 p-8 text-base-content/70">
      <span className="loading loading-spinner loading-md" />
      <span>{label}</span>
    </div>
  )
}
