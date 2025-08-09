import type { CollectionConfig } from 'payload'

const Images: CollectionConfig = {
  slug: 'images',
  labels: {
    singular: 'Image',
    plural: 'Images',
  },
  access: {
    read: () => true,
  },
  admin: {
    group: 'Media',
  },
  upload: true,
  fields: [
    {
      name: 'description',
      type: 'text',
      admin: {
        description:
          'For vision-impaired users with screen readers, this is more descriptive than a caption.',
      },
    },
  ],
}

export default Images
