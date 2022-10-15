import Head from "next/head";
import { Navbar } from '@/components/shared/nav'
import { Box } from "@chakra-ui/react";

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


            <footer className="xl:px-80 bg-primary pb-5 pt-3 bottom-0 text-white text-center">
                Remi Martel - <a href="mailto:remi.martel.37@gmail.com?subject=MyCookbook" className=" text-gray-300 hover:text-white">remi.martel.37@gmail.com</a>
                <br />
                &copy; 2022 Remi Martel
            </footer>
        </Box>
    )
}