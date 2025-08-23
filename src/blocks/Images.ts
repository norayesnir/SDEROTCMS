import type { Block } from 'payload'
import { content, image } from '../fields'

import { BackgroundColorsEnum, ColorEnum } from '../enumerations'

const Images: Block = {
  slug: 'imagesBlock',
  labels: {
    singular: {
      en: 'Image(s) Block',
      nl: 'Afbeelding(en) Blok',
    },
    plural: {
      en: 'Image(s) Blocks',
      nl: 'Afbeelding(en) Blokken',
    },
  },
  interfaceName: 'ImagesBlock',
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
          fields: [
            content(),
            {
              name: 'images',
              label: {
                en: 'Images',
                nl: 'Afbeeldingen',
              },
              type: 'array',
              fields: [image()],
              maxRows: 6,
            },
          ],
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

export default Images
