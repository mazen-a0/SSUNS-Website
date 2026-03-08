# SSUNS 2026 Website

Next.js App Router + TypeScript + Tailwind project for the SSUNS 2026 public website.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

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
