import type { Field } from 'payload'

const Link: Field[] = [
  {
    name: 'title',
    label: {
      en: 'Title',
      nl: 'Titel',
    },
    type: 'text',
    required: true,
  },
  {
    type: 'row',
    fields: [
      {
        name: 'referenceToPage',
        label: {
          en: 'Reference to Page',
          nl: 'Verwijzing naar pagina',
        },
        type: 'relationship',
        relationTo: ['pages', 'articles'],
        required: true,
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
        required: true,
        admin: {
          placeholder: 'https://example.com',
          condition: (_, siblingData) => siblingData.externalLink,
        },
      },
      {
        type: 'row',
        admin: {
          // Render options at the same height of the TextInput field
          className: 'row-items__center row-items__offset-top-3',
        },
        fields: [
          {
            name: 'externalLink',
            label: {
              en: 'Link to External URL',
              nl: 'Link naar externe URL',
            },
            type: 'checkbox',
          },
          {
            name: 'openInNewTab',
            label: {
              en: 'Open in new tab',
              nl: 'Openen in nieuw tabblad',
            },
            type: 'checkbox',
          },
        ],
      },
    ],
  },
]

export default Link
