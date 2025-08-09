import type { CollectionConfig } from 'payload'
import * as PageTemplates from './pageTemplates'

const Pages: CollectionConfig = {
    slug: 'pages',
    labels: {
        singular: 'Page',
        plural: 'Pages',
    },
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'template', 'id'],
    },
    access: {
        read: () => true,
    },
    versions: true,
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Page',
                    fields: Object.values(PageTemplates),
                },
            ],
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
                        if (siblingData.title.toLowerCase() === 'home') {
                            siblingData.slug = ''
                        } else {
                            siblingData.slug = siblingData.title
                                .toLowerCase()
                                .replace(/ /g, '-')
                        }
                    },
                ],
                beforeValidate: [
                    ({ data, siblingData }) => {
                        if (!siblingData.slug && siblingData.title) {
                            if (siblingData.title.toLowerCase() === 'home') {
                                data.slug = ''
                            } else {
                                data.slug = siblingData.title.toLowerCase().replace(/ /g, '-')
                            }
                        }
                    },
                ],
            },
        },
        {
            name: 'template',
            type: 'select',
            required: true,
            options: Object.keys(PageTemplates),
            admin: {
                description:
                    'A template must be selected to display relevant page fields. Changing the template on existing pages will result in data loss.',
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
                        if (data.template === 'Home' || data.title.toLowerCase() === 'home') {
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

