import Lang from "../lang";
import imageUrlBuilder from '@sanity/image-url'
import client from 'lib/sanity'
import Link from 'next/link'

export default function RecipeCard({ _id="", title = "This is the recipe title", servings = 0, image = "", tags = [], time = "45", className = "" }) {

    function urlFor(source) {
        return imageUrlBuilder(client).image(source)
    }

    return (
        <div className={` ${className}`}>
            <Link href={"/recipe/"+_id}>
                <div className="flex flex-row rounded-lg shadow-md m-5 p-3">
                    <div className="flex flex-1 flex-col ">
                        <div className="flex flex-1 flex-col flex-grow-0">
                            <h1 className=" text-primary font-bold"><Lang>{title}</Lang></h1>
                        </div>
                        <p className="inline-flex">
                            Servings: {servings}  &nbsp; - &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" className=" h-7 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            &nbsp; {time} min
                        </p>
                        <div className="flex flex-wrap flex-1 flex-grow-0">
                            {tags.map(
                                ({ name }) => {
                                    return (
                                        <span className=" my-1 mx-1 bg-primary text-white px-2 rounded-full">
                                            <Lang>{name}</Lang>
                                        </span>
                                    )
                                }
                            )}

                        </div>
                    </div>
                    <img className="w-1/4 rounded-lg" src={urlFor(image) + ""} />

                </div>
            </Link>
        </div>
    )
}