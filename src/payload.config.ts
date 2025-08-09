import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import * as Collections from './collections';
import * as Globals from './globals';

const validatedCollections = Object.values(Collections).filter(
    collection => collection && typeof collection === 'object' && 'slug' in collection
);

const validatedGlobals = Object.values(Globals).filter(
    global => global && typeof global === 'object' && 'slug' in global
);

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Collections.Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: validatedCollections,
  globals: validatedGlobals,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
