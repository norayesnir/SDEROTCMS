import type { Tab } from 'payload'
import { buttons } from '../../../fields'

const Legal: Tab = {
    name: 'legal',
    label: {
        en: 'Legal',
        nl: 'Juridisch',
    },
    fields: [
        {
            name: 'copyright',
            label: {
                en: 'Copyright',
                nl: 'Auteursrecht',
            },
            type: 'group',
            fields: [
                {
                    name: 'companyName',
                    label: {
                        en: 'Company Name',
                        nl: 'Bedrijfsnaam',
                    },
                    type: 'text',
                },
                {
                    name: 'allRightsReservedLabel',
                    label: {
                        en: 'All Rights Reserved Label',
                        nl: 'Alle Rechten Voorbehouden Label',
                    },
                    type: 'text',
                },
            ],
        },
        {
            name: 'termsOfService',
            label: {
                en: 'Terms of Service',
                nl: 'Gebruiksvoorwaarden',
            },
            type: 'group',
            fields: [
                {
                    name: 'termsOfServiceLabel',
                    label: {
                        en: 'Terms of Service Label',
                        nl: 'Gebruiksvoorwaarden Label',
                    },
                    type: 'text',
                },
                {
                    name: 'termsOfServicePage',
                    label: {
                        en: 'Terms of Service Page',
                        nl: 'Gebruiksvoorwaarden Pagina',
                    },
                    type: 'relationship',
                    relationTo: 'pages',
                    admin: {
                        description: {
                            en: 'The page that contains the Terms of Service',
                            nl: 'De pagina die de Gebruiksvoorwaarden bevat',
                        },
                    },
                },
            ],
        },
        {
            name: 'privacyPolicy',
            label: {
                en: 'Privacy Policy',
                nl: 'Privacybeleid',
            },
            type: 'group',
            fields: [
                {
                    name: 'privacyPolicyLabel',
                    label: {
                        en: 'Privacy Policy Label',
                        nl: 'Privacybeleid Label',
                    },
                    type: 'text',
                },
                {
                    name: 'privacyPolicyPage',
                    label: {
                        en: 'Privacy Policy Page',
                        nl: 'Privacybeleid Pagina',
                    },
                    type: 'relationship',
                    relationTo: 'pages',
                    admin: {
                        description: {
                            en: 'The page that contains the Privacy Policy',
                            nl: 'De pagina die het Privacybeleid bevat',
                        },
                    },
                },
            ],
        },
        buttons({ name: 'extraButtons', label: { en: 'Extra buttons', nl: 'Extra knoppen' }})
    ],
}

export default Legal
