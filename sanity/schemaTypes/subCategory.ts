import { defineField, defineType } from 'sanity'

export const subCategory = defineType({
  name: 'subCategory',
  title: 'Sub-Category',
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
          const query = `!defined(*[_type == "subCategory" && slug.current == $slug && _id != $id][0]._id)`
          const isUnique = await client.fetch(query, params)
          return isUnique || 'Slug must be unique'
        }),
    }),
    defineField({
      name: 'parentCategory',
      title: 'Parent Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
