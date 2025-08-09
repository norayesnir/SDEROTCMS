import type { Field } from 'payload'
import {
  HeroBlock,
  ContentImageBlock,
  ContentContentBlock,
  ImagesBlock,
  ContentContactBlock,
  TeamBlock,
} from '../../blocks'

const Default: Field = {
  name: 'fields',
  label: ' ',
  type: 'group',
  admin: {
    condition: (data) => data.template === 'Default',
  },
  fields: [
    {
      name: 'blocks',
      label: 'Blocks',
      type: 'blocks',
      blocks: [
        HeroBlock,
        ContentImageBlock,
        ContentContentBlock,
        ImagesBlock,
        ContentContactBlock,
        TeamBlock,
      ],
    },
  ],
}

export default Default
