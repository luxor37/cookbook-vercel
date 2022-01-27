import { createClient } from 'next-sanity'

export const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: true
})

export default client