import type { Tab } from 'payload'

import { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel'
import { SocialMediaPlatformEnum } from '../../../enumerations'

const SocialMedia: Tab = {
  name: 'socialMedia',
  label: {
    en: 'Social Media',
    nl: 'Sociale Media',
  },
  fields: [
    {
      name: 'socials',
      interfaceName: 'Socials',
      label: {
        en: 'Socials',
        nl: 'Sociale media links',
      },
      type: 'array',
      admin: {
        components: {
          RowLabel: ({ data, index }: RowLabelArgs) => {
            return data?.title || `Social ${index + 1}`
          },
        },
      },
      fields: [
        {
          name: 'platform',
          label: {
            en: 'Platform',
            nl: 'Platform',
          },
          type: 'select',
          options: SocialMediaPlatformEnum,
        },
        {
          name: 'title',
          label: {
            en: 'Title',
            nl: 'Titel',
          },
          type: 'text',
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
        },
      ],
    },
  ],
}

export default SocialMedia
