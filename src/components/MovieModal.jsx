import { useEffect, useRef } from 'react'

function stripHtml(html) {
  if (!html) return 'No summary available.'
  return html.replace(/<[^>]*>/g, '')
}

export default function MovieModal({ movie, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    closeButtonRef.current?.focus()

    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [onClose])

  if (!movie) return null

  const { name, image, rating, premiered, genres, network, summary } = movie
  const backdrop = image?.original || image?.medium

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="thin-scroll max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-surface"
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {backdrop ? (
            <img src={backdrop} alt="" className="h-64 w-full object-cover sm:h-80" />
          ) : (
            <div className="h-40 w-full bg-surface2" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-cream transition-colors hover:bg-velvet"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 p-6 sm:p-8">
          <h2 id="movie-modal-title" className="font-display text-2xl font-semibold text-cream sm:text-3xl">
            {name}
          </h2>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            <span>⭐ Rating: {rating?.average ?? 'N/A'}</span>
            <span aria-hidden="true">|</span>
            <span>📅 Release: {premiered || 'Unknown'}</span>
            {network && (
              <>
                <span aria-hidden="true">|</span>
                <span>📺 {network}</span>
              </>
            )}
          </div>

          {genres?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-cream/80"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div>
            <h3 className="mb-1 font-display text-sm font-semibold text-marquee/90">Overview</h3>
            <p className="text-sm leading-relaxed text-cream/90 sm:text-base">{stripHtml(summary)}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-2 w-full rounded-full border border-white/10 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-velvet hover:text-velvet sm:w-auto sm:px-6"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  )
}
