import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
// import Sidebar from './Sidebar'

const Layout = ({ children }) => {

    return (
        <>
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
            </Head>

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />

            {/* <Sidebar /> */}
        </>
    )
}

export default Layout