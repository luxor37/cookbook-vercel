import { Box, BoxProps, Heading, Table, Tbody, Td, Tr } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Lang from "../../shared/lang";

export interface IIngredients extends BoxProps {
    ingredients: { name: any, quantity?: number, unit: any }[]
}

export default function Ingredients({ ingredients, ...rest }: IIngredients) {
    const { t } = useTranslation('common');

    return (
        <Box {...rest}>
            <Heading as='h3' size='md' pb={"0.75rem"}>
                {t('Ingredients')} :
            </Heading>
            <Table w={'unset'}>
                <Tbody>
                    {ingredients.map(
                        ({ name, quantity, unit }) => {
                            return (
                                <Tr key={name.en} pb={"0.75rem"}>
                                    <Td textAlign={"right"}>
                                        <Lang>{name}</Lang>{quantity && " :"}
                                    </Td>
                                    <Td>
                                        {quantity} <Lang>{unit.name}</Lang>
                                    </Td>
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
        </Box >
    )
}