import client, { previewClient } from './sanity'
import {groq} from 'next-sanity'

export async function getJobs() {
  let results = await client
    .fetch(groq `*[_type == "job"] | order(publishedAt desc){
      _id,
      title,
      subtitle,
      logo,
      description,
      job_date,
      jobtype[]->{name},
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