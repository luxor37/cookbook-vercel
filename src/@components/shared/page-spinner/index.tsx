import { Box, Spinner } from "@chakra-ui/react";

const PageSpinner = () => {

    return (
        <Box w={'full'} display={'flex'} h={'full'} justifyContent={'center'} alignItems={'center'}>
            <Spinner />
        </Box>
    )
}

export default PageSpinner