import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemaTypes'
import { dataset, projectId } from './sanity/env'

export default defineConfig({
  name: 'default',
  title: 'Rahi Collections CMS',

  projectId,
  dataset,

  basePath: '/admin',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
