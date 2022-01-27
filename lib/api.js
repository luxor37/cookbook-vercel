import client from './sanity'
import {groq} from 'next-sanity'

export async function getCardByCategory(category) {
  let results = await client
    .fetch(groq `*[_type == "recipe" && "${category}" == categories->name] {
      _id,
      title {en, fr},
      servings,
      time,
      tags,
      categories-> { name, title },
      picture,
      source {en, fr},
      'date': publishedAt
    }`)
  return results
}

export async function getRecipeIds() {
  let results = await client
    .fetch(groq `*[_type == "recipe"] {
      _id
    }`)
  return results
}

export async function getRecipeById(_id) {
  console.log(_id)
  let results = await client
    .fetch(groq `*[_id == "${_id}"]{
      _id,
      title {en, fr},
      subtitle {en, fr},
      servings,
      time,
      tags,
      categories-> { name, title },
      ingredients[] {name, quantity, unit-> {name} },
      instructions,
      picture,
      source {en, fr},
      'date': publishedAt
    }`)
  return results[0]
}