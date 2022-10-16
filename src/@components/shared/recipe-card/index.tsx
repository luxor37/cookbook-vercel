import Lang from "../lang";
import { useTranslation } from "next-i18next";
import Tags from "@/components/modules/tags";
import Clock from "../clock-svg";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { Box, BoxProps, Image, VStack, Text, Heading } from "@chakra-ui/react";
import { urlFor } from "@/utils/imageParse";
import InfoAndTags from "../info-and-tags";

export interface IRecipeCard extends BoxProps {
    _id: string
    title?: string
    servings?: number
    image?: string
    tags?: { name: string }[]
    time?: string
    setIsLoading: Dispatch<SetStateAction<boolean>>
}

export default function RecipeCard({
    _id,
    title = "This is the recipe title",
    servings = 0,
    image,
    tags,
    time,
    setIsLoading,
    ...rest
}: IRecipeCard
) {

    const router = useRouter()

    function clickRecipe() {
        setIsLoading(true)
        router.push("/recipe/" + _id)
    }

    const { t } = useTranslation('common');

    return (
        <VStack
            rounded={"1rem"}
            m={{ base: '0.25rem', md: '1.25rem' }}
            p={'0.75rem'}
            className="hover:shadow-lg shadow-md"
            justifyContent={'space-between'}
            cursor={"pointer"}
            onClick={clickRecipe}
            alignItems={'start'}
            bgColor={'white'}
            {...rest}>

            <VStack justifyContent={'space-between'} maxH={'full'} >
                <Heading as='h2' size='2xl' className="text-primary font-bold">
                    <Lang>{title}</Lang>
                </Heading>

                <InfoAndTags servings={servings} time={time} tags={tags} />
            </VStack>

            <Image
                cursor={"pointer"}
                rounded={"1rem"}
                w={'full'}
                src={urlFor(image)}
                alt={`${title}-image`}
            />
        </VStack>

    )
}