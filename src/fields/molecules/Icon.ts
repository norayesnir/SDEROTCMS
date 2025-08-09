import type { Field } from 'payload'

function icon({
    name = 'icon',
    label = {
        en: 'Icon',
        nl: 'Icoon',
    },
    admin = {},
} = {}): Field {
    return {
        name,
        ...(label && { label }),
        type: 'group',
        admin,
        fields: [
            {
                type: 'row',
                fields: [
                    {
                        name: 'icon',
                        type: 'text'
                    },
                    {
                        name: 'right',
                        label: {
                            en: 'Right',
                            nl: 'Rechts',
                        },
                        type: 'checkbox',
                        admin: {
                            width: '50%',
                            className: 'row-items__center row-items__-offset-top-4',
                        },
                    },
                ],
            },
        ],
    }
}

export default icon
