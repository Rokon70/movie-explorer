export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-cream">🎬 MovieExplorer</p>
          <p className="text-sm text-muted">© {year} MovieExplorer. All rights reserved.</p>
        </div>

        <div className="flex gap-5 text-sm text-muted">
          <a
            href="https://github.com/Rokon70"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-marquee"
          >
            GitHub
          </a>
          <a
            href="https://www.tvmaze.com/api"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-marquee"
          >
            Powered by TVMaze
          </a>
        </div>
      </div>
    </footer>
  )
}
