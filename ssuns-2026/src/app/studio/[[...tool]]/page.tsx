import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'
import { isSanityConfigured } from '@/sanity/env'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="theme-panel-strong rounded-[8px] p-8">
          <p className="section-kicker">Sanity Studio</p>
          <h1 className="mt-4 font-display text-4xl leading-none text-[var(--accent)]">Studio not configured yet</h1>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            Add <code>SANITY_PROJECT_ID</code> and <code>SANITY_DATASET</code> to enable the embedded Studio at <code>/studio</code>.
          </p>
        </div>
      </main>
    )
  }

  return <NextStudio config={config} />
}
