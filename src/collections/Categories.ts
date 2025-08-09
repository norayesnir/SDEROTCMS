import type { CollectionConfig } from 'payload'
import { icon } from '../fields'
import { ButtonTypeEnum, ColorEnum } from '../enumerations'

const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: {
      en: 'Category',
      nl: 'Categorie',
    },
    plural: {
      en: 'Categories',
      nl: 'Categorieën',
    },
  },
  typescript: {
    interface: 'Categories',
  },
  access: {
    read: (_) => true,
  },
  admin: {
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'label',
      label: {
        en: 'Label',
        nl: 'Label',
      },
      type: 'text',
    },
    {
      name: 'color',
      label: {
        en: 'Color',
        nl: 'Kleur',
      },
      type: 'select',
      options: ColorEnum,
    },
    {
      name: 'type',
      label: {
        en: 'Type',
        nl: 'Type',
      },
      type: 'select',
      options: ButtonTypeEnum,
    },
  ],
}

export default Categories
