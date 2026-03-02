# SSUNS 2026 Deployment (Vercel)

1. Push the `ssuns-2026` repository to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Keep the default Next.js build settings (`npm install`, `npm run build`, output `.next`).
4. Configure environment variables in Vercel if/when the project adds them.
5. Use Vercel Preview Deployments for QA and stakeholder review on every pull request.
6. Use a dedicated staging domain/subdomain for pre-launch testing.
7. Keep `ssuns.org` pointed at Squarespace until final launch approval.
8. At launch, update DNS to point `ssuns.org` to Vercel production.
