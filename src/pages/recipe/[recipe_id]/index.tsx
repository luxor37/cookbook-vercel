import Page from "@/components/shared/page";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from "react";
import { getRecipeById, getRecipeIds } from 'lib/api'
import Lang from "@/components/shared/lang";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import Nullable from "@/components/shared/undefinable";
import Ingredients from "@/components/modules/ingredients";
import Clock from "@/components/shared/clock-svg";
import Tags from "@/components/modules/tags";
import Preparation from "@/components/modules/preparation";
import SanityImage from "@/components/shared/sanityImage";

const Recipe = ({ _id, recipe }) => {
    const router = useRouter()

    if (router.isFallback || !recipe) {
        return <div>Loading...</div>
    }
    else {

        const { t } = useTranslation('common');

        let { title, subtitle, servings, time, tags, ingredients, instructions, picture, source } = recipe

        return (
            <Page>
                <div className="flex min-h-screen flex-row rounded-lg shadow-md md:m-5 m-2 p-3">
                    <div className="flex flex-1 flex-col ">

                        <div className="flex flex-1 flex-col flex-grow-0">
                            <h1 className=" text-primary font-bold"><Lang>{title}</Lang></h1>
                            <Nullable obj={subtitle}> <h3> <Lang>{subtitle}</Lang> </h3> </Nullable>
                        </div>

                        <SanityImage className="rounded-lg md:hidden flex" picture={picture} />

                        <p className="inline-flex">
                            <Nullable obj={servings}> {t('Servings')}: {servings}  &nbsp; - &nbsp; </Nullable>
                            <Clock /> &nbsp; {time} min
                        </p>

                        <Nullable obj={source}> <p>Source: <Lang>{source}</Lang></p> </Nullable>

                        <div className="flex flex-wrap flex-1 flex-grow-0">
                            <Tags tags={tags} />
                        </div>

                        <div className=" mt-5">
                            <Ingredients ingredients={ingredients} />
                        </div>

                        <div className=" mt-5">
                            <Preparation instructions={instructions} />
                        </div>
                    </div>

                    <div className="w-1/4 md:block hidden">
                        <SanityImage className="rounded-lg" picture={picture} />
                    </div>
                </div>
            </Page >
        )
    }
}

export async function getStaticProps({ locale, params }) {
    const id = params.recipe_id
    let recipe = await getRecipeById(id)
    return {
        props: {
            _id: id,
            recipe: recipe,
            locale,
            ...await serverSideTranslations(locale, ['common']),
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    const ids = await getRecipeIds()
    let paths = ids.map(({ _id }) => ({
        params: { recipe_id: _id }
    }))

    let pathsFR = [...paths]

    pathsFR = pathsFR.map((path) => path = {
        params: { recipe_id: path.params.recipe_id },
        locale: 'fr'
    })

    paths = paths.concat(pathsFR)

    return {
        paths: paths,
        fallback: 'blocking',
    }
}

export default Recipe