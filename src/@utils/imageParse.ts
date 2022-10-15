import imageUrlBuilder from '@sanity/image-url'
import client from 'lib/sanity'

export function urlFor(source) {
    return imageUrlBuilder(client).image(source) + ""
}