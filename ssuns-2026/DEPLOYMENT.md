# Deployment

## Vercel

1. Import the repository into Vercel.
2. Configure the production environment variables.
3. Use the default Next.js build settings:
   - Install command: `npm install`
   - Build command: `npm run build`
4. Confirm the production domain points to the active Vercel project.

## Production checklist

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- Review key routes after deployment:
  - `/`
  - `/about`
  - `/conference`
  - `/committees`
  - `/registration`
  - `/sponsor-us`
  - `/contact`

## Assets

All production images, documents, and video assets are served from `public/`.
