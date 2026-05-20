import PageHeader from '../components/PageHeader'

const starterCards = [
  {
    title: 'Create features',
    description: 'Add feature folders under src/features and connect them through routes.',
  },
  {
    title: 'Use shared UI',
    description: 'Build pages using shared components and DaisyUI classes instead of custom global CSS.',
  },
  {
    title: 'Connect APIs',
    description: 'Place API clients in src/api and call them through typed hooks or feature services.',
  },
]

export default function Home() {
  return (
    <div>
      <PageHeader
        title="React Vite Template"
        subtitle="A clean starter template using React, Vite, TypeScript, Tailwind, and DaisyUI."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {starterCards.map((card) => (
          <div key={card.title} className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p className="text-sm text-base-content/70">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
