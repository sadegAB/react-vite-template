import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  action?: ReactNode
}

export default function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <div className="mb-6 flex items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-base-content">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-base-content/60">{subtitle}</p>}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
