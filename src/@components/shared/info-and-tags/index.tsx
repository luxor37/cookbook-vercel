import Tags from "@/components/modules/tags";
import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Clock from "../clock-svg";

export interface IInfoAndTags {
    servings: number,
    time: string,
    tags: { name: string }[]
    inline?: boolean
}

const InfoAndTags = ({ servings, time, tags, inline }: IInfoAndTags) => {

    const { t } = useTranslation()

    return (
        <Stack direction={inline ? 'row' : 'column'} alignItems={inline ? "center" : "start"} w={'full'}>
            <HStack>
                {servings && (
                    <Box p={'0.5rem'} rounded={"0.5rem"} shadow={'md'}>
                        <Text>{servings} {t('Servings')}</Text>
                    </Box>
                )}
                {time && (
                    <HStack p={'0.5rem'} rounded={"0.5rem"} shadow={'md'}>
                        <Clock /><Text> {time} min</Text>
                    </HStack>
                )}
            </HStack>

            <Tags tags={tags} />
        </Stack>
    )
}

export default InfoAndTags