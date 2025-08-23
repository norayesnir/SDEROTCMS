import type { CollectionConfig } from 'payload'
import { image } from '../fields'
import { HeroBlock, ContentBlock, RichTextBlock } from '../blocks'

const Articles: CollectionConfig = {
    slug: 'articles',
    labels: {
        singular: {
            en: 'Article',
            nl: 'Artiekel',
        },
        plural: {
            en: 'Articles',
            nl: 'Artiekelen',
        },
    },
    admin: {
        useAsTitle: 'interfaceTitle',
    },
    access: {
        read: () => true,
    },
    versions: true,
    fields: [
        {
            name: 'interfaceTitle',
            label: {
                en: 'Interface title',
                nl: 'Gebruikersinterface titel'
            },
            type: 'text',
            unique: true,
            required: true,
            admin: {
                description: {
                    en: 'The interface title will be displayed in the dashboard. Give it a unique name for easy identification.',
                    nl: 'De gebruikersinterface titel wordt in het dashboard weergegeven. Geef het een unieke naam voor gemakkelijke identificatie.'
                }
            }
        },
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'slug',
            type: 'text',
            unique: true,
            admin: {
                position: 'sidebar',
                readOnly: true,
                description:
                    'This field is automatically generated based on the title. To change it, edit the title field.',
            },
            hooks: {
                beforeChange: [
                    ({ siblingData }) => {
                        siblingData.slug = siblingData.title
                            .toLowerCase()
                            .replace(/ /g, '-')
                    },
                ],
                beforeValidate: [
                    ({ data, siblingData }) => {
                        if (!data) return;
                        if (!siblingData.slug && siblingData.title) {
                            data.slug = siblingData.title.toLowerCase().replace(/ /g, '-')
                        }
                    },
                ],
            },
        },
        {
            name: 'blog',
            type: 'relationship',
            relationTo: 'blogs',
            admin: {
                position: 'sidebar',
                description: {
                    en: 'Select the blog this article belongs to.',
                    nl: 'Selecteer de blog waar dit artiekel bij hoort.'
                }
            }
        },
        {
            name: 'excerpt',
            label: {
                en: 'Excerpt',
                nl: 'Uittreksel',
            },
            type: 'text',
            admin: {
                position: 'sidebar',
            },
        },
        image({
            name: 'featuredImage',
            label: {
                en: 'Featured Image',
                nl: 'Uitgelichte Afbeelding',
            },
            admin: {
                position: 'sidebar',
            },
        }),
        {
            name: 'categories',
            label: {
                en: 'Categories',
                nl: 'Categorieën',
            },
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'route',
            type: 'text',
            hidden: true,
            hooks: {
                beforeChange: [
                    ({ siblingData }) => {
                        delete siblingData['route']
                    },
                ],
                afterRead: [
                    ({ data }) => {
                        if (!data) return;
                        return `/${data.title.toLowerCase().replace(/ /g, '-')}`
                    },
                ],
            },
        },
        {
            name: 'blocks',
            label: 'Blocks',
            type: 'blocks',
            blocks: [HeroBlock, ContentBlock, RichTextBlock],
        },
    ],
}

export default Articles
