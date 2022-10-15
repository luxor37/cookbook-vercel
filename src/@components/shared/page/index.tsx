import Head from "next/head";
import { Navbar } from '@/components/shared/nav'

export default function Page({ children, className = "" }) {
    return (
        <div className={` ${className} h-full`}>
            <Head>
                <title>MyCookbook</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Navbar />
            <div className=" mt-10 xl:mx-80 min-h-full">
                {children}
            </div>


            <footer className="xl:px-80 bg-primary bottom-0 text-white text-center">
                Remi Martel
            </footer>
        </div>
    )
}