import type { Field } from 'payload'

const Default: Field = {
    name: 'default',
    label: {
        en: 'Menu Item',
        nl: 'Menu Item',
    },
    type: 'group',
    admin: {
        condition: (data) => data.template === 'Default',
    },
    fields: [
        {
            name: 'externalLink',
            label: {
                en: 'External Link',
                nl: 'Externe link',
            },
            type: 'checkbox',
            admin: {
                description: {
                    en: 'Check this box if the link is external',
                    nl: 'Vink dit vakje aan als de link extern is',
                },
                position: 'sidebar',
            },
        },
        {
            name: 'referenceToPage',
            label: {
                en: 'Reference to Page',
                nl: 'Verwijzing naar pagina',
            },
            type: 'relationship',
            relationTo: 'pages',
            hasMany: false,
            admin: {
                condition: (_, siblingData) => !siblingData.externalLink,
            },
        },
        {
            name: 'externalUrl',
            label: {
                en: 'External URL',
                nl: 'Externe URL',
            },
            type: 'text',
            admin: {
                placeholder: {
                    en: 'https://example.com',
                    nl: 'https://voorbeeld.nl',
                },
                condition: (_, siblingData) => siblingData.externalLink,
            },
        },
        {
            name: 'newTab',
            label: {
                en: 'Open in New Tab?',
                nl: 'Openen in nieuw tabblad?',
            },
            type: 'checkbox',
            admin: {
                description: {
                    en: 'Check this box if the link should open in a new tab',
                    nl: 'Vink dit vakje aan als de link in een nieuw tabblad moet worden geopend',
                },
                position: 'sidebar',
            },
        },
        {
            name: 'icon',
            label: {
                en: 'Icon',
                nl: 'Icoon',
            },
            type: 'group',
            fields: [
                {
                    type: 'text',
                    name: 'icon'
                },
                {
                    name: 'right',
                    label: {
                        en: 'Icon Right',
                        nl: 'Icoon rechts',
                    },
                    type: 'checkbox',
                },
            ],
        },
    ],
}

export default Default
