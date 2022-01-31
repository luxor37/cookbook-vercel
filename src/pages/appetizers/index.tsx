import Page from "@/components/shared/page";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from "react";
import { getCardByCategory } from 'lib/api'
import RecipeList from "@/components/modules/reicpe-list";


export default function Appetizers(props) {
    return (
        <Page>
            <RecipeList recipes={props.recipes} />
        </Page>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            recipes: await getCardByCategory("appetizer", locale),
            locale,
            ...await serverSideTranslations(locale, ['common']),
        },
        revalidate: 5
    }
}