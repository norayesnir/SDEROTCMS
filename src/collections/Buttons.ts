import type { CollectionConfig } from 'payload'

// Molecules
import { Link } from '../fields'
import { icon } from '../fields'
import { ColorType } from '../fields'

const Buttons: CollectionConfig = {
  slug: 'buttons',
  labels: {
    singular: {
      en: 'Button',
      nl: 'Knop',
    },
    plural: {
      en: 'Buttons',
      nl: 'Knoppen',
    },
  },
  typescript: {
    interface: 'Button',
  },
  access: {
    read: (_) => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [...Link, icon(), ...ColorType],
}

export default Buttons
