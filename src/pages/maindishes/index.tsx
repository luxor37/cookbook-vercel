import Page from "@/components/shared/page";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from "react";
import { getCardByCategory } from 'lib/api'
import RecipeCard from "@/components/shared/recipe-card";


export default function Dishes(props) {
    if (props.appetizers.length == 0) {
        return (
            <Page>
                Aucune recette trouvée
            </Page>
        );
    }

    return (

        <Page>
            {props.appetizers.map(
                ({ _id, title, servings, time, tags, picture, source }) => {
                    return (
                        <RecipeCard _id={_id} title={title} time={time} servings={servings}
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
            appetizers: await getCardByCategory("dish"),
            locale,
            ...await serverSideTranslations(locale, ['common']),
        },
        revalidate: 5
    }
}