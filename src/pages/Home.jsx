import { Link } from 'react-router-dom'

const trending = ['Breaking Bad', 'Girls', 'The Crown', 'Fargo', 'Chernobyl']

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-gradient-to-b from-[#1a0f14] via-ink to-ink">
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(closest-side, #C1443C, transparent)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-32">
          <p className="font-display text-sm italic text-marquee">Now screening</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream sm:text-6xl">
            Discover your next favorite watch
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
            Search thousands of movies and TV shows, compare ratings, and line up
            what to watch tonight — all from one clean, fast library.
          </p>
          <Link
            to="/movies"
            className="mt-9 rounded-full bg-marquee px-8 py-3 text-sm font-semibold tracking-wide text-ink transition-transform hover:scale-[1.03] active:scale-95"
          >
            Explore Now
          </Link>
        </div>
      </section>

      {/* Trending strip */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <p className="text-center text-sm text-muted">Popular searches</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {trending.map((title) => (
            <Link
              key={title}
              to={`/movies?q=${encodeURIComponent(title)}`}
              className="rounded-full border border-white/10 bg-surface px-4 py-2 text-sm text-cream/90 transition-colors hover:border-marquee/60 hover:text-marquee"
            >
              {title}
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
