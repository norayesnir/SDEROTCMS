import type { CollectionConfig } from 'payload'
import { image } from '../fields'

const TeamMembers: CollectionConfig = {
  slug: 'teamMembers',
  labels: {
    singular: {
      en: 'Team member',
      nl: 'Team lid',
    },
    plural: {
      en: 'Team members',
      nl: 'Team leden',
    },
  },
  typescript: {
    interface: 'TeamMembers',
  },
  access: {
    read: (_) => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: {
        en: 'Name',
        nl: 'Naam',
      },
      type: 'text',
    },
    {
      name: 'role',
      label: {
        en: 'Role',
        nl: 'Rol',
      },
      type: 'text',
    },
    {
      name: 'introduction',
      label: {
        en: 'Introduction text',
        nl: 'Introductie tekst',
      },
      type: 'richText',
    },
    image(),
  ],
}

export default TeamMembers
