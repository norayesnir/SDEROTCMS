import type { CollectionConfig } from 'payload'
import { livePreviewBreakpoints } from '../utils'
import { image } from '../fields'
import { HeroBlock, ContentBlock, RichTextBlock } from '../blocks'

const News: CollectionConfig = {
  slug: 'news',
  labels: {
    singular: {
      en: 'News',
      nl: 'Nieuws',
    },
    plural: {
      en: 'News',
      nl: 'Nieuws',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'template', 'id'],
    livePreview: {
      url: ({ data }) =>
        `${process.env.NEXT_PUBLIC_PAYLOAD_SITE_URL}/${data.title.toLowerCase()}`,
      breakpoints: livePreviewBreakpoints,
    },
  },
  access: {
    read: () => true,
  },
  versions: true,
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
        description:
          'This field is  automatically generated based on the title. To change it, edit the title field.',
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            siblingData.slug = siblingData.title
              .toLowerCase()
              .replace(/[\s\-_]+/g, '-') // Replace spaces, -, _ with -
              .replace(/[^\w-]/g, '') // Remove all other symbols
          },
        ],
        beforeValidate: [
          ({ data, siblingData }) => {
            if (!siblingData.slug && siblingData.title) {
              // Ensure slug is generated if it's missing and title exists
              data.slug = siblingData.title
                .toLowerCase()
                .replace(/[\s\-_]+/g, '-') // Replace spaces, -, _ with -
                .replace(/[^\w-]/g, '') // Remove all other symbols
            }
          },
        ],
      },
    },
    {
      name: 'route',
      type: 'text',
      hidden: true,
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            delete siblingData['route']
          },
        ],
        afterRead: [
          ({ data }) => {
            switch (data.template) {
              case 'Home':
                return '/'
              default:
                return `/${
                  data.title
                    .toLowerCase()
                    .replace(/[\s\-_]+/g, '-') // Replace spaces, -, _ with -
                    .replace(/[^\w-]/g, '') // Remove all other symbols
                }`
            }
          },
        ],
      },
    },
    {
      name: 'excerpt',
      label: {
        en: 'Excerpt',
        nl: 'Uittreksel',
      },
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    image({
      name: 'featuredImage',
      label: {
        en: 'Featured Image',
        nl: 'Uitgelichte Afbeelding',
      },
      admin: {
        position: 'sidebar',
      },
    }),
    {
      name: 'categories',
      label: {
        en: 'Categories',
        nl: 'Categorieën',
      },
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'blocks',
      label: 'Blocks',
      type: 'blocks',
      blocks: [HeroBlock, ContentBlock, RichTextBlock],
    },
  ],
}

export default News
