import imageUrlBuilder from '@sanity/image-url'
import client from 'lib/sanity'

export default function SanityImage({ picture, className="" }) {
    function urlFor(source) {
        return imageUrlBuilder(client).image(source)
    }
    
    return (
        <>
            <img className={className} src={urlFor(picture) + ""} />
        </>
    )
}