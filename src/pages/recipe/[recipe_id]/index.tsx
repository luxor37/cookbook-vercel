import Page from "@/components/shared/page";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from "react";
import { getRecipeById, getRecipeIds } from 'lib/api'
import Lang from "@/components/shared/lang";
import imageUrlBuilder from '@sanity/image-url'
import client from 'lib/sanity'
import { useTranslation } from 'next-i18next';
import BlockContent from '@sanity/block-content-to-react'
import { translate } from "@/components/shared/lang"
import { useRouter } from 'next/router'

const Recipe = ({ _id, recipe }) => {

    console.log(_id)

    const router = useRouter()

    if (router.isFallback || !recipe) {
        return <div>Loading...</div>
    }
    else {

        const { t } = useTranslation('common');

        const { title, subtitle, servings, time, tags, categories, ingredients, instructions, picture, source } = recipe

        function urlFor(source) {
            return imageUrlBuilder(client).image(source)
        }

        const list = (props) => {
            return <ol className="list-decimal">{props.children}</ol>
        }

        return (
            <Page>
                <div className="flex min-h-screen flex-row rounded-lg shadow-md md:m-5 m-2 p-3">
                    <div className="flex flex-1 flex-col ">
                        <div className="flex flex-1 flex-col flex-grow-0">
                            <h1 className=" text-primary font-bold"><Lang>{title}</Lang></h1>
                        </div>
                        <img className="rounded-lg md:hidden flex" src={urlFor(picture) + ""} />
                        <p className="inline-flex">
                            {t('Servings')}: {servings}  &nbsp; - &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" className=" h-7 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            &nbsp; {time} min
                        </p>
                        {/* <p>Source: <Lang>{source}</Lang></p> */}
                        <div className="flex flex-wrap flex-1 flex-grow-0">
                            {tags.map(
                                ({ name }) => {
                                    return (
                                        <span key={name} className=" my-1 mx-1 bg-primary text-white px-2 rounded-full">
                                            <Lang>{name.en}</Lang>
                                        </span>
                                    )
                                }
                            )}

                        </div>

                        <div className=" mt-5">
                            <h3 className="pb-3">
                                {t('Ingredients')} :
                            </h3>
                            <div className="flex flex-row ">
                                <table>
                                    <tbody>
                                        {ingredients.map(
                                            ({ name, quantity, unit }) => {
                                                const bullet = quantity != " " ? " :" : " "
                                                return (
                                                    <tr key={name.en} className="pb-3">
                                                        <td className=" text-right pr-3">
                                                            <Lang>{name}</Lang>{bullet}
                                                        </td>
                                                        <td>
                                                            {quantity} <Lang>{unit.name}</Lang>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        )}
                                    </tbody>
                                </table>
                                {/* <div className="flex flex-col md:text-right">
                                    <ul >
                                        
                                    </ul>
                                </div>
                                <div className="flex flex-col ">
                                    <ul className=" ml-3 pl-0">
                                        {ingredients.map(
                                            ({ quantity, unit }) => {
                                                return (
                                                    <li className="pb-3">
                                                        {quantity} <Lang>{unit.name}</Lang>
                                                    </li>
                                                )
                                            }
                                        )}
                                    </ul>
                                </div> */}
                            </div>
                        </div>

                        <div className=" mt-5">
                            <h3 className="pb-3">
                                {t('Preparation')} :
                            </h3>
                            <div className="flex flex-row ">
                                <BlockContent
                                    blocks={translate(instructions)}
                                    serializers={{ list: list }}
                                    renderContainerOnSingleChild={true}
                                    {...client.config()}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-1/4 md:block hidden">
                        <img className=" rounded-lg" src={urlFor(picture) + ""} />
                    </div>
                </div>
            </Page>
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
        revalidate: 5
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
        fallback: true,
    }
}

export default Recipe