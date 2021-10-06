export default {
    name: 'recipe',
    title: 'Recipe',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'localeString',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'localeString',
      },
      {
        name: 'labels',
        title: 'Type',
        type: 'array',
        of: [{type: 'reference', to: {type: 'label'}}]
      },
      {
        name: 'ingredients',
        title: 'Ingredients',
        type: 'array',
        of: [{type: 'ingredient'}]
      },
      {
        name: 'instructions',
        title: 'Instructions',
        type: 'localeBlockContent',
      },
      {
        name: 'picture',
        title: 'Picture',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'source',
        title: 'Source',
        type: 'localeString',
      },
    ],
  }
  