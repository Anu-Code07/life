# Story Mirror

AI that explains your life through fiction, mythology, literature, philosophy, and history.

Describe what's weighing on your mind — not for advice, but to discover which character already lived your struggle.

## Features

- **Reflect** — Share your feelings and get a powerful story parallel powered by Groq AI
- **Explore** — Browse stories, characters, and quotes from a curated knowledge base
- **Daily Story** — A new AI-generated reflection each day
- **Random Parallel** — Discover unexpected story connections
- **Saved Reflections** — Bookmark reflections that resonate (stored locally)
- **Browse** — Books, movies, games, philosophy, and historical figures

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env.local` and add your Groq API key:

```bash
cp .env.example .env.local
```

Get a free API key at [console.groq.com](https://console.groq.com).

3. Install dependencies and run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Groq AI** (llama-3.3-70b-versatile)
- **Framer Motion** & **Lucide React**

## Pages

| Page | Description |
|------|-------------|
| `/` | Homepage with reflection prompt |
| `/reflect` | AI-generated story parallel |
| `/explore` | Browse stories, characters, quotes |
| `/characters` | Character library |
| `/quotes` | Quote collection |
| `/books` | Book recommendations |
| `/movies` | Movies & shows |
| `/games` | Video games |
| `/philosophy` | Philosophical traditions |
| `/history` | Historical figures |
| `/daily` | Daily AI story |
| `/random` | Random parallel |
| `/saved` | Saved reflections |

## Philosophy

> Not advice. Not therapy. Just the character who already lived your struggle.

Every response connects emotions to stories — making users think: *"That's exactly how I feel."*
