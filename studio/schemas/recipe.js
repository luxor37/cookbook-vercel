export default {
    name: 'recipe',
    title: 'Recipe',
    type: 'document',
    fields: [
      {
        name: 'cms_title',
        title: 'Title (cms only)',
        type: 'string',
      },
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
        name: 'servings',
        title: 'Servings',
        type: 'string',
      },
      {
        name: 'time',
        title: 'Preparation time (in min.)',
        type: 'number',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'tag'}]
      },
      {
        name: 'categories',
        title: 'Category',
        type: 'reference', to: {type: 'category'}
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
  