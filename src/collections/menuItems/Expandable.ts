import type { Field } from 'payload'

const Default: Field = {
  name: 'expandable',
  label: {
    en: 'Expandable Menu Item',
    nl: 'Uitklapbaar menu-item',
  },
  type: 'group',
  admin: {
    condition: (data) => data.template === 'Expandable',
  },
  fields: [
    {
      name: 'icon',
      label: {
        en: 'Icon',
        nl: 'Icoon',
      },
      type: 'group',
      fields: [
          {
              name: 'icon',
              type: 'text'
          }
      ],
    },
    {
      name: 'children',
      label: {
        en: 'Submenu Items',
        nl: 'Submenu-items',
      },
      type: 'relationship',
      relationTo: 'menu_item',
      hasMany: true,
    },
  ],
}

export default Default
