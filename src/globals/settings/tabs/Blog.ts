import type { Tab } from 'payload'

const Blog: Tab = {
    name: 'blog',
    label: 'Blog',
    fields: [
        {
            name: 'page',
            label: {
                en: 'Blog page',
                nl: 'Blog pagina',
            },
            type: 'relationship',
            relationTo: 'pages',
        }
    ],
}

export default Blog
