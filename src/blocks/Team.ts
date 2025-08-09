import type { Block } from 'payload'
import { content } from '../fields'

const Team: Block = {
  slug: 'teamBlock',
  labels: {
    singular: {
      en: 'Team Block',
      nl: 'Team Blok',
    },
    plural: {
      en: 'Team Blocks',
      nl: 'Team Blokken',
    },
  },
  interfaceName: 'TeamBlock',
  imageURL: 'https://picsum.photos/200',
  fields: [
    content(),
    {
      name: 'members',
      label: {
        en: 'Members',
        nl: 'Leden',
      },
      type: 'relationship',
      relationTo: 'teamMembers',
      hasMany: true,
    },
  ],
}

export default Team
