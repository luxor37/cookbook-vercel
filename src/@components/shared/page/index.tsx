import Head from "next/head";
import { Navbar } from '@/components/shared/nav'

export default function Page({ children, className = "" }) {
    return (
        <div className={`flex flex-col ${className}`}>
            <Head>
                <title>Remi Martel - Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Navbar />
            <div className="flex flex-col md:ml-72">
                {children}
            </div>


            <footer>

            </footer>
        </div>
    )
}