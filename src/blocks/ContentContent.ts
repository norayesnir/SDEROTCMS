import type { Block } from 'payload'
import { content } from '../fields'

import {
    OrientationEnum,
    BackgroundColorsEnum,
    ColorEnum,
} from '../enumerations'

const ContentContent: Block = {
    slug: 'contentContentBlock',
    labels: {
        singular: {
            en: 'Content - Content Block',
            nl: 'Inhoud - Inhoud Blok',
        },
        plural: {
            en: 'Content - Content Blocks',
            nl: 'Inhoud - Content Blokken',
        },
    },
    interfaceName: 'ContentContentBlock',
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
                    fields: [
                        content({
                            name: 'cl',
                        }),
                        content({
                            name: 'cr',
                        }),
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

export default ContentContent
