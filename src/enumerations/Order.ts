import type { Option } from 'payload'

const Order: Option[] = [
  {
    label: {
      en: 'Normal',
      nl: 'Normaal',
    },
    value: 'default',
  },
  {
    label: {
      en: 'Reversed',
      nl: 'Omgekeerd',
    },
    value: 'reversed',
  },
]

export default Order
