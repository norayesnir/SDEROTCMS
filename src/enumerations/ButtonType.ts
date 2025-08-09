import type { Option } from 'payload'

const ButtonType: Option[] = [
  {
    label: {
      en: 'Filled',
      nl: 'Gevuld',
    },
    value: 'filled',
  },
  {
    label: {
      en: 'Outlined',
      nl: 'Omtrokken',
    },
    value: 'outlined',
  },
  {
    label: {
      en: 'Link',
      nl: 'Link',
    },
    value: 'link',
  },
  {
    label: {
      en: 'Ghost',
      nl: 'Spook',
    },
    value: 'ghost',
  },
]

export default ButtonType
