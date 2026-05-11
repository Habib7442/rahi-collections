import { defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => 
        Rule.required().custom(async (slug, context) => {
          if (!slug?.current) return true
          const { document, getClient } = context
          const client = getClient({ apiVersion: '2023-01-01' })
          const id = document?._id?.replace(/^drafts\./, '')
          const params = { slug: slug.current, id }
          const query = `!defined(*[_type == "category" && slug.current == $slug && _id != $id][0]._id)`
          const isUnique = await client.fetch(query, params)
          return isUnique || 'Slug must be unique'
        }),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
