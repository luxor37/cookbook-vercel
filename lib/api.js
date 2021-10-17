import client from './sanity'
import {groq} from 'next-sanity'

export async function getAppetizers() {
  let results = await client
    .fetch(groq `*[_type == "recipe"] | order(publishedAt desc){
      _id,
      title {en, fr},
      subtitle {en, fr},
      servings,
      time,
      tags,
      categories->{en, fr},
      ingredients[],
      instructions,
      picture,
      source {en, fr},
      'date': publishedAt
    }`)
  return results
}

export async function getEducations() {
  let results = await client
    .fetch(groq `*[_type == "education"] | order(publishedAt desc){
      _id,
      title {en, fr},
      subtitle {en, fr},
      logo,
      description,
      graduation_date,
      'date': publishedAt
    }`)
  return results
}

export async function getAbout() {
  let results = await client
    .fetch(groq `*[_type == "about"]{
      _id,
      firstName {en, fr},
      lastName {en, fr},
      location {en, fr},
      phoneNumber,
      linkedIn,
      github,
      email,
      body,
      profilePic
    }`)
  return results
}