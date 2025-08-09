import type { Block } from 'payload'

const RichText: Block = {
  slug: 'richTextBlock',
  labels: {
    singular: {
      en: 'Rich Text Block',
      nl: 'Rijke tekst Blok',
    },
    plural: {
      en: 'Rich Text Blocks',
      nl: 'Rich Tekst Blokken',
    },
  },
  interfaceName: 'RichTextBlock',
  fields: [
    {
      name: 'richText',
      label: {
        en: 'Content',
        nl: 'Inhoud',
      },
      type: 'richText',
    },
  ],
}

export default RichText
