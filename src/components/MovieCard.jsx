const FALLBACK_POSTER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="450">
      <rect width="100%" height="100%" fill="#1E2233"/>
      <text x="50%" y="50%" font-family="sans-serif" font-size="18" fill="#9CA0B5"
        text-anchor="middle" dominant-baseline="middle">No poster</text>
    </svg>
  `)

export default function MovieCard({ movie, onSeeDetails }) {
  const { name, image, rating, premiered } = movie
  const year = premiered ? premiered.slice(0, 4) : 'TBA'
  const ratingValue = rating?.average ?? null

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface transition-colors hover:border-marquee/40">
      <div className="aspect-[2/3] w-full overflow-hidden bg-surface2">
        <img
          src={image?.medium || FALLBACK_POSTER}
          alt={`Poster for ${name}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="font-display text-lg font-semibold leading-snug text-cream line-clamp-2">
          {name}
        </h3>

        <div className="flex items-center gap-3 text-sm text-muted">
          <span>⭐ {ratingValue ? ratingValue.toFixed(1) : 'N/A'}</span>
          <span aria-hidden="true">•</span>
          <span>📅 {year}</span>
        </div>

        <button
          type="button"
          onClick={() => onSeeDetails(movie)}
          className="mt-auto rounded-full border border-marquee/50 py-2 text-sm font-semibold text-marquee transition-colors hover:bg-marquee hover:text-ink"
        >
          See Details
        </button>
      </div>
    </div>
  )
}
