import Page from "@/components/shared/page";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from "react";
import { getRecipeById } from 'lib/api'
import Lang from "@/components/shared/lang";
import imageUrlBuilder from '@sanity/image-url'
import client from 'lib/sanity'
import { useTranslation } from 'next-i18next';
import BlockContent from '@sanity/block-content-to-react'
import { translate } from "@/components/shared/lang"
import { useRouter } from 'next/router'

const Recipe = ({ recipe }) => {

    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    else 
    {

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
                <div className="flex min-h-screen flex-row rounded-lg shadow-md m-5 p-3">
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
                        {/* <p>Source: <Lang>{source}</Lang></p> */}
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

                        <div className=" mt-5">
                            <h3 className="pb-3">
                                {t('Ingredients')} :
                            </h3>
                            <div className="flex flex-row ">
                                <div className="flex flex-col text-right">
                                    <ul >
                                        {ingredients.map(
                                            ({ name, quantity, unit }) => {
                                                const bullet = quantity != " " ? " :" : " "
                                                return (
                                                    <li className="pb-3">
                                                        <Lang>{name}</Lang>{bullet}
                                                    </li>
                                                )
                                            }
                                        )}
                                    </ul>
                                </div>
                                <div className="flex flex-col ">
                                    <ul className=" ml-3 pl-0">
                                        {ingredients.map(
                                            ({ quantity, unit }) => {
                                                console.log(unit)
                                                return (
                                                    <li className="pb-3">
                                                        {quantity} <Lang>{unit.name}</Lang>
                                                    </li>
                                                )
                                            }
                                        )}
                                    </ul>
                                </div>
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

                    <div className="w-1/4">
                        <img className=" rounded-lg" src={urlFor(picture) + ""} />
                    </div>
                </div>
            </Page>
        )
    }
}

export async function getStaticProps({ locale, params }) {
    const id = params.recipe_id
    return {
        props: {
            _id: id,
            recipe: await getRecipeById(id + ""),
            locale,
            ...await serverSideTranslations(locale, ['common']),
        },
        revalidate: 5
    }
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { recipe_id: 'a346712c-7f19-44a0-9ce3-2f04b3e9e29c' } }],
        fallback: true,
    }
}

export default Recipe