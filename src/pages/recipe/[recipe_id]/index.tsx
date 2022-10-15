import Page from "@/components/shared/page";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from "react";
import { getRecipeById, getRecipeIds } from 'lib/api'
import Lang from "@/components/shared/lang";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import Ingredients from "@/components/modules/ingredients";
import Clock from "@/components/shared/clock-svg";
import Tags from "@/components/modules/tags";
import Preparation from "@/components/modules/preparation";
import { Box, Heading, HStack, Text, Image, VStack } from "@chakra-ui/react";
import { urlFor } from "@/utils/imageParse";

const Recipe = ({ _id, recipe }) => {
    const router = useRouter()

    if (router.isFallback || !recipe) {
        return <Box>Loading...</Box>
    }
    else {

        const { t } = useTranslation('common');

        let { title, subtitle, servings, time, tags, ingredients, instructions, picture, source } = recipe

        return (
            <Page>
                <VStack alignItems={"start"} px={{ base: "1rem", md: "unset" }} py={"2rem"} w={'full'}>

                    <Box>
                        <Heading as='h1' size='4xl' fontWeight={"bold"} className="text-primary"><Lang>{title}</Lang></Heading>
                        {subtitle && (
                            <Heading as='h3' size='lg'><Lang>{subtitle}</Lang></Heading>
                        )}
                    </Box>

                    <HStack>
                        {servings && (
                            <Box><Text>{t('Servings')}: {servings}</Text></Box>
                        )}
                        {time && (
                            <HStack><Clock /><Text> {time} min</Text></HStack>
                        )}
                    </HStack>

                    <Tags tags={tags} />

                    <Image display={{ base: "flex", md: "none" }} rounded={"0.5rem"} src={urlFor(picture)} alt={`${title}-image`} />

                    {source && (
                        <Text>Source: <Lang>{source}</Lang></Text>
                    )}

                    <HStack alignItems={'start'} justifyContent={'space-between'} w={'full'}>
                        <Ingredients mt={"1.25rem"} ingredients={ingredients} />
                        <Image display={{ base: "none", md: "block" }} maxW={'30rem'} w={'full'} rounded={"0.5rem"} src={urlFor(picture)} alt={`${title}-image`} />
                    </HStack>

                    <Preparation mt={"1.25rem"} instructions={instructions} />


                </VStack>
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