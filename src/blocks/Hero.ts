import type { Block } from 'payload'
import { content, image } from '../fields'

const Hero: Block = {
  slug: 'heroBlock',
  labels: {
    singular: {
      en: 'Hero Block',
      nl: 'Hero Blok',
    },
    plural: {
      en: 'Hero Blocks',
      nl: 'Hero Blokken',
    },
  },
  interfaceName: 'HeroBlock',
  imageURL: 'https://picsum.photos/200',
  fields: [content(), image()],
}

export default Hero
