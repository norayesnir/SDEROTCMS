import type { Block } from 'payload'
import { content, image } from '../fields'

import {
  OrderEnum,
  OrientationEnum,
  BackgroundColorsEnum,
  ColorEnum,
} from '../enumerations'

const ContentImage: Block = {
  slug: 'contentImageBlock',
  labels: {
    singular: {
      en: 'Content - Image Block',
      nl: 'Inhoud - Afbeelding Blok',
    },
    plural: {
      en: 'Content - Image Blocks',
      nl: 'Inhoud - Afbeelding Blokken',
    },
  },
  interfaceName: 'ContentImageBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'Content',
            nl: 'Inhoud',
          },
          description: {
            en: 'In this tab you can modify the content of the current block',
            nl: 'In deze tab kan je de inhoud van het huidige block aanpassen',
          },
          fields: [content(), image()],
        },
        {
          label: {
            en: 'Settings',
            nl: 'Instellingen',
          },
          description: {
            en: 'In this tab you can modify the settings on how the current block is rendered',
            nl: 'In deze tab kan je de instellingen veranderen hoe het huidige block getoond wordt',
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'order',
                  label: {
                    en: 'Content Order',
                    nl: 'Inhoud Volgorde',
                  },
                  type: 'select',
                  admin: {
                    description: {
                      en: 'Change the display order of content and image in the current block',
                      nl: 'Wijzig de volgorde van de inhoud en afbeelding in het huidige blok',
                    },
                  },
                  options: OrderEnum,
                },
                {
                  name: 'orientation',
                  label: {
                    en: 'Block Orientation',
                    nl: 'Blok Orientatie',
                  },
                  type: 'select',
                  admin: {
                    description: {
                      en: 'Set the block orientation to display content horizontally or vertically',
                      nl: 'Stel de blokoriëntatie in om inhoud horizontaal of verticaal weer te geven',
                    },
                  },
                  options: OrientationEnum,
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'renderAsCard',
                  label: {
                    en: 'Render as Card',
                    nl: 'Renderen als Kaart',
                  },
                  type: 'checkbox',
                  admin: {
                    width: '50%',
                    description: {
                      en: 'Choose whether to render the content as a card or standard layout',
                      nl: 'Kies of de inhoud als kaart of standaard layout moet worden weergegeven',
                    },
                  },
                },
                {
                  name: 'cardBackgroundColor',
                  label: {
                    en: 'Background Color',
                    nl: 'Achtergrondkleur',
                  },
                  defaultValue: 'neutral-light',
                  type: 'select',
                  admin: {
                    width: '50%',
                    description: {
                      en: 'Select the background color for the card of the current block',
                      nl: 'Selecteer de achtergrondkleur voor het huidige blok',
                    },
                    condition: (_, siblingData) => siblingData.renderAsCard,
                  },
                  options: BackgroundColorsEnum,
                },
              ],
            },
            {
              name: 'backgroundColor',
              label: {
                en: 'Background Color',
                nl: 'Achtergrondkleur',
              },
              type: 'select',
              admin: {
                description: {
                  en: 'Select the background color for the current block',
                  nl: 'Selecteer de achtergrondkleur voor het huidige blok',
                },
              },
              options: BackgroundColorsEnum,
            },
            {
              name: 'textColor',
              label: {
                en: 'Text color',
                nl: 'Tekst kleur',
              },
              type: 'select',
              options: ColorEnum,
            },
          ],
        },
      ],
    },
  ],
}

export default ContentImage
