export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true">
        🔍
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie or show..."
        aria-label="Search for a movie or show"
        className="w-full rounded-full border border-white/10 bg-surface py-3 pl-11 pr-4 text-cream placeholder:text-muted focus:border-marquee/60"
      />
    </div>
  )
}
