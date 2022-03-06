import '../styles/app.scss'
import Header from "../components/header";
import Footer from "../components/footer";
import Head from 'next/head'

function MyApp({Component, pageProps}) {
    return (
        <div className="main__app">
            <Head>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </div>

    )
}

export default MyApp