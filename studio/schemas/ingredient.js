export default {
  name: 'ingredient',
  title: 'Ingredient',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'localeString',
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'string',
    },
    {
      name: 'unit',
      title: 'Unit',
      type: 'reference', to: {type: 'unit'}
    },
  ],
}
