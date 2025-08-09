import dotenv from 'dotenv'
import type { CollectionConfig } from 'payload'

dotenv.config()

const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'User',
    plural: 'Users',
  },
  auth: true,
  admin: {
    group: 'Admin',
    useAsTitle: 'fullName',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
    },
  ]
}

export default Users
