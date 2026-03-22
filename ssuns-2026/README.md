# SSUNS 2026 Website

Next.js App Router + TypeScript + Tailwind project for the SSUNS 2026 public website.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Sanity

Sanity is now the primary content source for the site. The public website still falls back to the existing local content files in `src/content/en` and `src/content/fr` whenever:

1. Sanity env vars are not configured
2. Sanity is reachable but a document has not been created yet
3. A specific field has not been populated yet

That means the site remains fully renderable while Studio content is still being entered.

### Required env vars

Add these env vars locally in `.env.local` and in Vercel:

```bash
SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_VERSION=2025-01-01
SANITY_READ_TOKEN=
```

Notes:

1. `SANITY_READ_TOKEN` is optional unless you later enable draft/preview behavior.
2. `SANITY_PROJECT_ID`, `SANITY_DATASET`, and `SANITY_API_VERSION` are mirrored into the client-safe `NEXT_PUBLIC_SANITY_*` vars through `next.config.ts`, so you only need to set the `SANITY_*` versions.

### Studio

The embedded Studio lives at `/studio`.

1. Start the app with `npm run dev`
2. Open `http://localhost:3000/studio`
3. If Sanity is not configured yet, the Studio route shows a setup message instead of breaking the app

### First-time setup in Studio

Create these first to see content appear immediately:

1. `Settings` singleton: create the `siteSettings` document from the desk structure and set the site title, socials, Munager link, and hero media
2. `Pages` > `home`: create a page document with slug `home` and fill in the title, subtitle, intro, and optional sections
3. `Secretariat`: create `secretariatMember` documents to replace the local fallback roster on `/about/secretariat`

## Placeholder images

Add these files under `public/placeholders/`:

1. `hero-1920x1080.jpg` (16:9, 1920x1080) - hero background, delegates in committee
2. `montreal-1600x900.jpg` (16:9, 1600x900) - Montreal skyline/city vibe
3. `delegates-1600x1067.jpg` (3:2, 1600x1067) - delegates debating
4. `hotel-1600x900.jpg` (16:9, 1600x900) - Sheraton exterior/venue
5. `committee-1200x800.jpg` (3:2, 1200x800) - committee room/placards
6. `portrait-800x1000.jpg` (4:5, 800x1000) - executive/student portrait

## Hero video

Add homepage hero video files under `public/video/`:

1. `montreal-panorama.webm` as the primary source
2. `montreal-panorama.mp4` as the fallback source

Recommended loop duration is `6-10` seconds. Keep files compressed for fast first paint, with a target size of roughly `3-8 MB` per file when possible. To replace the video, overwrite those filenames and keep the poster image at `public/placeholders/hero-1920x1080.jpg`.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md).
