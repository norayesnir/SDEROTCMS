import type { Field } from 'payload'
import { heading, buttons } from '../'

function content({
  name = 'content',
  label = {
    en: 'Content',
    nl: 'Inhoud',
  },
  admin = {},
} = {}): Field {
  return {
    name,
    ...(label && { label }),
    type: 'group',
    admin,
    fields: [
      heading(),
      {
        name: 'subtitle',
        label: {
          en: 'Subtitle',
          nl: 'Subtitel',
        },
        type: 'text',
      },
      {
        name: 'text',
        label: {
          en: 'Text',
          nl: 'Tekst',
        },
        type: 'richText',
      },
      buttons(),
    ],
  }
}

export default content
