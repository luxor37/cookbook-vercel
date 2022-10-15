import Head from "next/head";
import { Navbar } from '@/components/shared/nav'
import { Box, Link } from "@chakra-ui/react";

export default function Page({ children, className = "" }) {
    return (
        <Box className={` ${className} h-full flex flex-col`}>
            <Head>
                <title>MyCookbook</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Navbar />
            <Box className="xl:mx-80 h-full">
                {children}
            </Box>


            <Box className="xl:px-80 bg-primary pb-5 pt-3 bottom-0 text-white text-center">
                Remi Martel - <Link href="mailto:remi.martel.37@gmail.com?subject=MyCookbook">remi.martel.37@gmail.com</Link>
                <br />
                &copy; 2022 Remi Martel
            </Box>
        </Box>
    )
}