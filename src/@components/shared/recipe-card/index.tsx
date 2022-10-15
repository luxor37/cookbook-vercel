import Lang from "../lang";
import { useTranslation } from "next-i18next";
import Tags from "@/components/modules/tags";
import Clock from "../clock-svg";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { Box, BoxProps, Image, VStack, Text, Heading } from "@chakra-ui/react";
import { urlFor } from "@/utils/imageParse";

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
        <Box cursor={"pointer"} onClick={clickRecipe} {...rest} >
            <Box rounded={"1rem"} className="hover:shadow-lg shadow-md md:m-5 m-1 p-3">
                <VStack>
                    <Heading as='h2' size='2xl' className="text-primary font-bold">
                        <Lang>{title}</Lang>
                    </Heading>
                    <VStack alignItems={"start"} w={'full'}>
                        <Text display={"inline-flex"}>
                            {servings && (
                                <>{t('Servings')}: {servings}  &nbsp; - &nbsp;</>
                            )}
                            <Clock /> &nbsp; {time} min
                        </Text>

                        <Tags tags={tags} />
                    </VStack>
                </VStack>
                <Box overflow={"hidden"} display={"flex"}>
                    <Image
                        cursor={"pointer"}
                        rounded={"1rem"}
                        h={'full'}
                        src={urlFor(image)}
                        alt={`${title}-image`}
                    />
                </Box>
            </Box>
        </Box>

    )
}