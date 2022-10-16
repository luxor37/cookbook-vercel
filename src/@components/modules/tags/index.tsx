import { Box, HStack } from "@chakra-ui/react";
import Lang from "../../shared/lang";

export interface ITags {
    tags: { name: string }[]
}

export default function Tags({ tags }: ITags) {
    return (
        <HStack>
            {tags.map(({ name }, index) => {
                return (
                    <Box
                        cursor={"pointer"}
                        key={index}
                        ml={index !== 0 && "0.25rem"}
                        mr={"0.25rem"}
                        px={"0.5rem"}
                        pb={'0.2rem'}
                        rounded={"full"}
                        textColor={"white"}
                        className="bg-primary"
                    >
                        <Lang>{name}</Lang>
                    </Box>
                )
            })}
        </HStack>
    )
}