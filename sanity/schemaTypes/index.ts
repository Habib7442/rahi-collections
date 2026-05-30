import { type SchemaTypeDefinition } from 'sanity'
import { category } from './category'
import { product } from './product'
import { subCategory } from './subCategory'

export const schemaTypes: SchemaTypeDefinition[] = [
  category,
  product,
  subCategory
]
