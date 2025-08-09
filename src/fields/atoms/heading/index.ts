import type { Field } from 'payload'
import headingTypes from './headingTypes'

function heading({
  name = 'heading',
  label = {
    en: 'Heading',
    nl: 'Kop',
  },
  admin = {},
} = {}): Field {
  return {
    name,
    ...(label && { label }),
    type: 'group',
    interfaceName: 'Heading',
    admin,
    fields: [
      {
        name: 'value',
        label: {
          en: 'Heading',
          nl: 'Kop',
        },
        type: 'text',
      },
      {
        name: 'type',
        label: {
          en: 'Type',
          nl: 'Type',
        },
        type: 'select',
        defaultValue: 'h2',
        admin: {
          description: 'Select the type of the heading',
        },
        options: [...headingTypes],
      },
    ],
  }
}

export default heading
