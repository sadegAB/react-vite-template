import { NavLink } from 'react-router-dom'
import { APP_NAME } from '../config/app'

interface NavItem {
  label: string
  path: string
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  // Add items here as you create pages
]

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-64 border-r border-base-300 bg-base-100 p-4">
      <div className="mb-6 px-3 py-2">
        <h2 className="text-lg font-bold text-base-content">{APP_NAME}</h2>
        <p className="text-xs text-base-content/60">Frontend Template</p>
      </div>

      <nav className="menu w-full p-0">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </nav>
    </aside>
  )
}
