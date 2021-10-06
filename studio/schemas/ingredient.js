export default {
  name: 'ingredient',
  title: 'Ingredient',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'localeString',
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
    },
    {
      name: 'unit',
      title: 'Unit',
      type: 'array',
      of: [{type: 'reference', to: {type: 'unit'}}]
    },
  ],
}
