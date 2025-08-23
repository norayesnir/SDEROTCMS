import type { CollectionConfig } from 'payload'
import { HeroBlock, ContentBlock, RichTextBlock } from '../blocks'

const Blogs: CollectionConfig = {
    slug: 'blogs',
    access: {
        read: (_) => true,
    },
    admin: {
        useAsTitle: 'interfaceTitle',
    },
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
    ]
}

export default Blogs
