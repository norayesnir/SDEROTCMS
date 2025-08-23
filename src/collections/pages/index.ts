import type { CollectionConfig } from 'payload'
import {
    HeroBlock,
    ContentImageBlock,
    ContentContentBlock,
    ImagesBlock,
    ContentContactBlock,
    RichTextBlock,
    TeamBlock,
} from '../../blocks'

const Pages: CollectionConfig = {
    slug: 'pages',
    labels: {
        singular: 'Page',
        plural: 'Pages',
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
            name: 'blocks',
            label: 'Blocks',
            type: 'blocks',
            blocks: [
                HeroBlock,
                ContentImageBlock,
                ContentContentBlock,
                ImagesBlock,
                ContentContactBlock,
                RichTextBlock,
                TeamBlock,
            ],
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
                        if (data.slug === 'home') {
                            return '/'
                        }
                        return `/${data.title.toLowerCase().replace(/ /g, '-')}`
                    },
                ],
            },
        },
    ]
}

export default Pages

