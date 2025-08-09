import type { Field } from 'payload'
import { ColorEnum, ButtonTypeEnum } from '../../enumerations'

const ColorType: Field[] = [
  {
    type: 'row',
    fields: [
      {
        name: 'colorGroup',
        label: {
          en: 'Color',
          nl: 'Kleur',
        },
        type: 'group',
        fields: [
          {
            name: 'color',
            type: 'select',
            defaultValue: 'primary',
            admin: {
              description: 'Select the color of the button',
            },
            options: ColorEnum,
          },
        ],
      },
      {
        name: 'typeGroup',
        label: {
          en: 'Type',
          nl: 'Type',
        },
        type: 'group',
        fields: [
          {
            name: 'type',
            type: 'radio',
            defaultValue: 'filled',
            admin: {
              description: 'Select the type of the button',
            },
            options: ButtonTypeEnum,
          },
        ],
      },
    ],
  },
]

export default ColorType
