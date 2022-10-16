import Head from "next/head";
import { Navbar } from '@/components/shared/nav'
import { Box, Link, VStack } from "@chakra-ui/react";

export default function Page({ children }) {
    return (
        <VStack h={'full'} display={'flex'} flexDir={'column'} justifyContent={'center'}>
            <Head>
                <title>MyCookbook</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Navbar />

            <Box mx={{ base: '', lg: '20rem !important' }} h={'full'} maxW={'1920px'}>
                {children}
            </Box>


            <Box w={'full'} px={{ base: 'unset', xl: '20rem' }} pb={'1.25rem'} pt={'0.75rem'} textColor={'white'} textAlign={'center'} className="bg-primary">
                Remi Martel - <Link href="mailto:remi.martel.37@gmail.com?subject=MyCookbook">remi.martel.37@gmail.com</Link>
                <br />
                &copy; 2022 Remi Martel
            </Box>
        </VStack>
    )
}