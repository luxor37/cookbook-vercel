import client from "lib/sanity";
import { useTranslation } from "next-i18next";
import { translate } from "../../shared/lang";
import BlockContent from '@sanity/block-content-to-react'
import { Box, BoxProps, Heading } from "@chakra-ui/react";

export interface IPreparation extends BoxProps {
    instructions: any
}

export default function Preparation({ instructions, ...rest }: IPreparation) {
    const { t } = useTranslation('common');
    const list = (props) => {
        return <ol className="list-decimal">{props.children}</ol>
    }
    return (
        <Box {...rest}>
            <Heading as='h3' size='md' pb={"0.75rem"}>
                {t('Preparation')} :
            </Heading>
            <Box p={"0.5rem 2rem 0"}>
                {instructions && (
                    <BlockContent
                        blocks={translate(instructions)}
                        serializers={{ list: list }}
                        renderContainerOnSingleChild={true}
                        {...client.config()}
                    />
                )}
            </Box>
        </Box>
    )
}