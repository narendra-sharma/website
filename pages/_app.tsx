import {AppProps} from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/index.css'
import Layout from "../components/ui/layout/layout";
import Meta from "../components/_meta/meta";
import React from "react";

export default function ExpanseServices({Component, pageProps}: AppProps) {
    return (
        <>
            <Meta/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
