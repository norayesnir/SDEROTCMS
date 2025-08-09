import type { GlobalConfig } from 'payload'
import { Legal, ContactInformation, SocialMedia, Blog, Projects } from './tabs'

const Settings: GlobalConfig = {
  slug: 'global-settings',
  typescript: {
    interface: 'GlobalSettings',
  },
  access: {
    read: (_) => true,
  },
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'siteTitle',
      type: 'text',
      label: {
        en: 'Site Title',
        nl: 'Site Titel',
      },
    },
    {
      name: 'siteLogo',
      type: 'upload',
      relationTo: 'images',
      label: {
        en: 'Site Logo',
        nl: 'Site Logo',
      },
    },
    {
      name: 'siteFavicon',
      type: 'upload',
      relationTo: 'images',
      label: {
        en: 'Site Favicon',
        nl: 'Site Favicon',
      },
    },
    {
      type: 'tabs',
      tabs: [ContactInformation, SocialMedia, Legal, Blog, Projects],
    },
  ],
}

export default Settings
