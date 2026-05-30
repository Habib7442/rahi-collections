import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subCategory',
      title: 'Sub-Category',
      type: 'reference',
      to: [{ type: 'subCategory' }],
      description: 'Optional sub-category (e.g. sarees, kurtis) filtered by the selected Category above',
      options: {
        filter: ({ document }) => {
          if (!document.category) {
            return {
              filter: '',
            }
          }
          return {
            filter: 'parentCategory._ref == $categoryId',
            params: {
              categoryId: (document.category as any)._ref,
            },
          }
        },
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'images',
      title: 'Photoshoot Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.max(5).warning('Maximum 5 photoshoot images allowed'),
    }),
    defineField({
      name: 'rawImage',
      title: 'Raw/Original Image',
      type: 'image',
      description: 'Standard product photo without professional editing',
      options: { hotspot: true },
    }),
    defineField({
      name: 'isNewArrival',
      title: 'New Arrival',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
