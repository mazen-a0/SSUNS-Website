# SSUNS 2026 Deployment (Vercel)

1. Push the `ssuns-2026` repository to GitHub.
2. In Vercel, import the repository as a new project.
3. Keep default Next.js build settings (`npm install`, `npm run build`, output `.next`).
4. Use Vercel Preview Deployments for stakeholder review and QA before launch.
5. Use a staging domain/subdomain for testing.
6. Keep `ssuns.org` pointed to Squarespace until final launch sign-off.
7. After launch approval, flip DNS from Squarespace to Vercel production.

## How to add placeholder images

Place the following files in `public/placeholders/`:

1. `hero-1920x1080.jpg` (16:9, 1920x1080)
2. `montreal-1600x900.jpg` (16:9, 1600x900)
3. `delegates-1600x1067.jpg` (3:2, 1600x1067)
4. `hotel-1600x900.jpg` (16:9, 1600x900)
5. `committee-1200x800.jpg` (3:2, 1200x800)
6. `portrait-800x1000.jpg` (4:5, 800x1000)
