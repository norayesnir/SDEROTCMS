import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
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

const {
    SITE_URL,
    BLOB_BASE_URL,
    PAYLOAD_SECRET,
    POSTGRES_URL,
    BLOB_READ_WRITE_TOKEN,
    NODE_MAILER_HOST,
    NODE_MAILER_PORT,
    NODE_MAILER_USER,
    NODE_MAILER_PASS,
    NODE_MAILER_ADDRESS,
} = process.env;

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
    secret: PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: vercelPostgresAdapter({
        pool: {
            connectionString: POSTGRES_URL || '',
        },
    }),
    email: nodemailerAdapter({
        defaultFromAddress: NODE_MAILER_ADDRESS as string,
        defaultFromName: 'SDEROT',
        transportOptions: {
            host: NODE_MAILER_HOST,
            port: NODE_MAILER_PORT,
            auth: {
                user: NODE_MAILER_USER,
                pass: NODE_MAILER_PASS
            },
        },
    }),
    sharp,
    plugins: [
        vercelBlobStorage({
            enabled: true,
            collections: { images: true },
            clientUploads: true,
            token: BLOB_READ_WRITE_TOKEN,
        })
    ],
    cors: [
        SITE_URL as string,
        BLOB_BASE_URL as string
    ]
})
