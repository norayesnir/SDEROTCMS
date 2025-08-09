import type { CollectionConfig } from 'payload'

const Videos: CollectionConfig = {
  slug: 'videos',
  labels: {
    singular: 'Video',
    plural: 'Videos',
  },
  access: {
    read: () => true,
  },
  admin: {
    group: 'Media',
  },
  upload: true,
  fields: []
}

export default Videos
