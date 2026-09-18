import { NavLink } from 'react-router-dom'

const navLinkClasses = ({ isActive }) =>
  `text-sm tracking-wide transition-colors hover:text-marquee ${
    isActive ? 'text-marquee' : 'text-cream/80'
  }`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <NavLink to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-cream">
          <span aria-hidden="true">🎬</span>
          MovieExplorer
        </NavLink>

        <nav className="hidden items-center gap-8 sm:flex" aria-label="Primary">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/movies" className={navLinkClasses}>
            Movies
          </NavLink>
        </nav>

        <NavLink
          to="/movies"
          className="rounded-full bg-marquee px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95"
        >
          Browse Movies
        </NavLink>
      </div>
    </header>
  )
}
