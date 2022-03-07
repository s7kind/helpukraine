import {ParallaxProvider} from 'react-scroll-parallax';

import '../styles/app.scss'
import Header from "../components/header";
import Footer from "../components/footer";
import Head from 'next/head'


function MyApp({Component, pageProps}) {

    return (
        <ParallaxProvider>
            <div className="main__app" data-scroll-section>
                <Head>
                    <link rel="icon" href="/favicon.png"/>
                </Head>
                <Header/>
                <Component {...pageProps} />
                <Footer/>
            </div>
        </ParallaxProvider>
    )
}

export default MyApp