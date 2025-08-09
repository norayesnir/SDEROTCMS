import type { CollectionConfig } from 'payload'
import * as MenuItemTemplates from '../menuItems'

const MenuItem: CollectionConfig = {
  slug: 'menu_item',
  labels: {
    singular: {
      en: 'Menu Item',
      nl: 'Menu Item',
    },
    plural: {
      en: 'Menu Items',
      nl: 'Menu Items',
    },
  },
  typescript: {
    interface: 'MenuItem',
  },
  access: {
    read: (_) => true,
  },
  admin: {
    useAsTitle: 'title',
    hidden: true,
  },
  fields: [
    {
      name: 'title',
      label: {
        en: 'Title',
        nl: 'Titel',
      },
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'template',
      label: {
        en: 'Template',
        nl: 'Sjabloon',
      },
      type: 'select',
      required: true,
      options: Object.keys(MenuItemTemplates),
      admin: {
        description: {
          en: 'Select a template for this menu item',
          nl: 'Selecteer een sjabloon voor dit menu-item',
        },
        position: 'sidebar',
      },
    },
    ...Object.values(MenuItemTemplates),
  ],
}

export default MenuItem
