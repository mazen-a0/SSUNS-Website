'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/desk/structure'

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || 'ssuns',
  dataset: dataset || 'production',
  schema,
  plugins: [
    structureTool({ structure }),
    ...(process.env.NODE_ENV !== 'production' ? [visionTool({ defaultApiVersion: apiVersion })] : []),
  ],
})
