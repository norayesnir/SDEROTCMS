import type { Field } from 'payload'

function buttons({
  name = 'buttons',
  label = {
    en: 'Buttons',
    nl: 'Knoppen',
  },
  required = false,
  admin = {},
} = {}): Field {
  return {
    name,
    ...(label && { label }),
    type: 'relationship',
    relationTo: 'buttons',
    hasMany: true,
    maxRows: 2,
    required,
    admin,
  }
}

export default buttons
