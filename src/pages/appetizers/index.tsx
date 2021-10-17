import Page from "@/components/shared/page";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from "react";
import { getAppetizers } from 'lib/api'
import RecipeCard from "@/components/shared/recipe-card";


export default function Appetizers(props) {
    // console.log
    return (

        <Page>
            {props.appetizers.map(
                ({ _id, title, subtitle, servings, time, tags, categories,
                    ingredients, instructions, picture, source }) => {
                    return (
                        <RecipeCard title={title} time={time} servings={servings}
                            image={picture} tags={tags} />
                    )
                }
            )}
        </Page>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            appetizers: await getAppetizers(),
            locale,
            ...await serverSideTranslations(locale, ['common']),
        },
        revalidate: 5
    }
}