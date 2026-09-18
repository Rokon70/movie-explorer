# 🎬 MovieExplorer

A responsive movie & TV show explorer built with React, Vite, and Tailwind CSS.
Browse shows, search by title, and view details in a modal — all powered by the
free [TVMaze API](https://www.tvmaze.com/api) (no API key required).

## Features

- **Home page** — hero banner with a call-to-action into the app
- **Movie Listing page** — live search (debounced) + responsive grid of results
- **Details modal** — poster, rating, release date, genres, and summary; closes
  with the ✕ button, the Escape key, or a click on the backdrop
- Fully responsive: single column on mobile, up to 4 columns on desktop

## Tech stack

- React 18 + Vite
- React Router
- Tailwind CSS
- TVMaze REST API

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/
    Navbar.jsx
    Footer.jsx
    SearchBar.jsx
    MovieCard.jsx
    MovieModal.jsx
  pages/
    Home.jsx
    MovieListing.jsx
  App.jsx
  main.jsx
  index.css
```

## API endpoints used

| Purpose        | Endpoint                                     |
| --------------- | --------------------------------------------- |
| Browse all shows | `GET https://api.tvmaze.com/shows`          |
| Search by title   | `GET https://api.tvmaze.com/search/shows?q=:query` |

## Deployment

This project deploys as-is to **Vercel** or **Netlify**:

- **Vercel:** import the repo, framework preset "Vite", build command
  `npm run build`, output directory `dist`.
- **Netlify:** same build command and publish directory `dist`.

## License

Built as a learning project. Free to use and modify.
