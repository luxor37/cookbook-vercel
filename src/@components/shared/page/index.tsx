import Head from "next/head";
import { Navbar } from '@/components/shared/nav'

export default function Page({ children, className = "" }) {
    return (
        <div className={` ${className} h-full flex flex-col`}>
            <Head>
                <title>MyCookbook</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Navbar />
            <div className="xl:mx-80 h-full">
                {children}
            </div>


            <footer className="xl:px-80 bg-primary pb-5 pt-3 bottom-0 text-white text-center">
                Remi Martel - <a href="mailto:remi.martel.37@gmail.com?subject=MyCookbook" className=" text-gray-300 hover:text-white">remi.martel.37@gmail.com</a>
                <br />
                &copy; 2022 Remi Martel
            </footer>
        </div>
    )
}