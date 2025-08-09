import type { Tab } from 'payload'

const ContactInformation: Tab = {
  name: 'contactInformation',
  label: {
    en: 'Contact Information',
    nl: 'Contact Informatie',
  },
  fields: [
    {
      name: 'email',
      label: {
        en: 'Email',
        nl: 'E-mail',
      },
      type: 'text',
    },
    {
      name: 'phone',
      label: {
        en: 'Phone number',
        nl: 'Telefoon nummer',
      },
      type: 'text',
    },
    {
      name: 'address',
      label: {
        en: 'Address',
        nl: 'Adres',
      },
      type: 'textarea',
    },
    // TODO: Add ability to assign a form to the contact information
  ],
}

export default ContactInformation
