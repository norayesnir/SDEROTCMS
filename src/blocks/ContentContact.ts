import type { Block } from 'payload'
import { content } from '../fields'

import {
  OrderEnum,
  OrientationEnum,
  BackgroundColorsEnum,
  ColorEnum,
} from '../enumerations'

const ContentContact: Block = {
  slug: 'contentContactBlock',
  labels: {
    singular: {
      en: 'Content - Contact Block',
      nl: 'Inhoud - Contact Blok',
    },
    plural: {
      en: 'Content - Contact Blocks',
      nl: 'Inhoud - Contact Blokken',
    },
  },
  interfaceName: 'ContentContactBlock',
  imageURL: 'https://picsum.photos/200',
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
          fields: [content()],
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
                  name: 'cardBgColor',
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

export default ContentContact
