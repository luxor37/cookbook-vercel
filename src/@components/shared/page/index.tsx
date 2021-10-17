import Head from "next/head";
import { Navbar } from '@/components/shared/nav'

export default function Page({ children, className = "" }) {
    return (
        <div className={` ${className}`}>
            <Head>
                <title>MyCookbook</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Navbar />
            <div className=" mt-10 md:mx-80">
                {children}
            </div>


            <footer>

            </footer>
        </div>
    )
}