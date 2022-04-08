import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        const { locale } = this.props.__NEXT_DATA__
        const dir = locale === 'ar' ? 'rtl' : 'ltr';
        return (
            <Html dir={dir} lang={locale}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Jubilee Tax and Financial Solutions, Inc</title>
                    <meta name="description" content="For saving, growing, and spending your money and protecting the things you love. We offer expert-driven advice and tools that help you make the best personal and business finance decisions." />
                    <meta name="author" content="Krotion Tech" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
                        rel="stylesheet"
                    />
                    <link rel="icon" type="image/vnd.microsoft" href="/images/favicon.ico"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;