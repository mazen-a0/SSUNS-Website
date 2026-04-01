# SSUNS 2026 Website

Public website for SSUNS 2026, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20+
- npm 10+

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app`: App Router routes and page layouts
- `src/components`: shared UI and page modules
- `src/content`: localized site content
- `src/lib`: content, utilities, and shared helpers
- `public`: images, documents, logos, and video assets

## Content source

The site supports Sanity-backed content and local content bundles.

Environment variables:

```bash
SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_VERSION=2025-01-01
SANITY_READ_TOKEN=
```

If Sanity is not configured, the site uses the local content files in `src/content/en` and `src/content/fr`.

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deployment

Deployment notes are in [DEPLOYMENT.md](./DEPLOYMENT.md).
