import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en" className="bg-page w-screen h-screen flex-1 flex flew-col">
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body className="w-full h-full relative">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument