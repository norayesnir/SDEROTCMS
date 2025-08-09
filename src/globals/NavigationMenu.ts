import type { GlobalConfig } from 'payload'

const Settings: GlobalConfig = {
  slug: 'navigation-menu',
  typescript: {
    interface: 'NavigationMenu',
  },
  access: {
    read: (_) => true,
  },
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'images',
    },
    {
      name: 'uploadAlternateLogo',
      label: 'Upload Alternate Logo',
      type: 'checkbox',
      admin: {
        description:
          'When this is checked, the alternate logo will be used for the opposite theme. For example, if the main logo is used for the light theme, the alternate logo will be used for the dark theme.',
      },
    },
    {
      name: 'alternateLogo',
      label: 'Alternate Logo',
      type: 'upload',
      relationTo: 'images',
      admin: {
        condition: (_, siblingData) => siblingData.uploadAlternateLogo,
      },
    },
    {
      name: 'routes',
      label: 'Routes',
      type: 'relationship',
      relationTo: 'menu_item',
      hasMany: true,
    },
    {
      name: 'button',
      label: {
        en: 'Button',
        nl: 'Knop',
      },
      type: 'relationship',
      relationTo: 'buttons',
    },
  ],
}

export default Settings
