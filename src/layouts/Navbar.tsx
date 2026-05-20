import { Link } from 'react-router-dom'
import { APP_NAME } from '../config/app'

export default function Navbar() {
  return (
    <nav className="navbar border-b border-base-300 bg-base-100 px-6">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-primary">
          {APP_NAME}
        </Link>
      </div>

      <div className="flex-none">
        <Link to="/" className="btn btn-ghost btn-sm">
          Home
        </Link>
      </div>
    </nav>
  )
}
