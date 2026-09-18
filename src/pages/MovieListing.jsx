import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar.jsx'
import MovieCard from '../components/MovieCard.jsx'
import MovieModal from '../components/MovieModal.jsx'

export default function MovieListing() {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [movies, setMovies] = useState([])
  const [status, setStatus] = useState('loading') // 'loading' | 'ready' | 'error'
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    setStatus('loading')

    // Debounce so we don't fire a request on every keystroke
    const timeoutId = setTimeout(async () => {
      try {
        const endpoint = query.trim()
          ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query.trim())}`
          : 'https://api.tvmaze.com/shows?page=0'

        const response = await fetch(endpoint, { signal: controller.signal })
        if (!response.ok) throw new Error('Request failed')
        const data = await response.json()

        // The search endpoint wraps each result as { score, show }.
        // The /shows endpoint returns show objects directly.
        const normalized = query.trim() ? data.map((entry) => entry.show) : data

        setMovies(normalized)
        setStatus('ready')
      } catch (err) {
        if (err.name !== 'AbortError') setStatus('error')
      }
    }, 350)

    return () => {
      clearTimeout(timeoutId)
      controller.abort()
    }
  }, [query])

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-xl">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="mt-10">
        {status === 'loading' && (
          <p className="text-center text-muted">Loading movies…</p>
        )}

        {status === 'error' && (
          <p className="text-center text-velvet">
            Something went wrong loading movies. Try again in a moment.
          </p>
        )}

        {status === 'ready' && movies.length === 0 && (
          <p className="text-center text-muted">
            No results for “{query}”. Try a different title.
          </p>
        )}

        {status === 'ready' && movies.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onSeeDetails={setSelectedMovie} />
            ))}
          </div>
        )}
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  )
}
