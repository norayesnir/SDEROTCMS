import type { Tab } from 'payload'

const Projects: Tab = {
    name: 'projects',
    label: 'Projects',
    fields: [
        {
            name: 'page',
            label: {
                en: 'Project page',
                nl: 'Projecten pagina',
            },
            type: 'relationship',
            relationTo: 'pages',
        }
    ],
}

export default Projects
