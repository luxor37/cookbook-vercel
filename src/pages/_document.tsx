import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en" className="bg-page h-screen flex-1 flex flew-col">
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body className="flex flex-1">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument