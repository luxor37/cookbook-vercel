// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import localeBlockContent from './types/localeBlockContent'
import localeText from './types/localeString'
import blockContent from './types/blockContent'

import recipe from './recipe'
import tag from './tag'
import unit from './unit'
import ingredient from './ingredient'
import category from './category'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    localeText,
    localeBlockContent,
    blockContent,

    category,
    unit,
    ingredient,
    tag,
    recipe,
  ])
})
