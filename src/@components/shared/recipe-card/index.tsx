import Lang from "../lang";
import imageUrlBuilder from '@sanity/image-url'
import client from 'lib/sanity'
import Link from 'next/link'
import { useTranslation } from "next-i18next";
import Column from "../column";
import Row from "../row";
import Tags from "@/components/modules/tags";
import Clock from "../clock-svg";
import Nullable from "../undefinable";

export default function RecipeCard({ _id = "", title = "This is the recipe title", servings = 0, image = "", tags = [], time = "_", className = "" }) {

    function urlFor(source) {
        return imageUrlBuilder(client).image(source)
    }

    const { t } = useTranslation('common');

    return (

        <Column width={4}>
            <Link href={"/recipe/" + _id}>
                <span>
                    <Row className="rounded-lg hover:shadow-lg shadow-md md:m-5 m-1 p-3">
                        <Column width={12}>

                            <h2 className=" cursor-default text-primary font-bold"><Lang>{title}</Lang></h2>

                            <p className="cursor-default inline-flex m-0">
                                <Nullable obj={servings}> {t('Servings')}: {servings}  &nbsp; - &nbsp; </Nullable>
                                <Clock /> &nbsp; {time} min
                            </p>

                            <div className="flex flex-wrap flex-1 flex-grow-0">
                                <Tags tags={tags} />
                            </div>
                        </Column>
                        <Column className="flex overflow-hidden" width={12}>
                            <img className="h-full rounded-lg" src={urlFor(image) + ""} />
                        </Column>
                    </Row>
                </span>
            </Link>
        </Column>

    )
}