import type { Field } from 'payload'
import { HeroBlock } from '../../blocks'

const Archive: Field = {
  name: 'archive',
  label: ' ',
  type: 'group',
  admin: {
    condition: (data) => data.template === 'Archive',
  },
  fields: [
    {
      name: 'blocks',
      label: 'Blocks',
      type: 'blocks',
      blocks: [HeroBlock],
    },
  ],
}

export default Archive
