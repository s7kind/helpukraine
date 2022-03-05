import Head from 'next/head'
import styles from '../styles/main-page.module.scss'
import Footer from "../components/footer";

export default function Home() {
    return (
        <div className="app">
            <Head>
                <title>Help Ukraine Online</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main__page}>
                <h1 className={styles.title}>
                    Help Ukraine
                    <br/>
                    <span>Online</span>
                </h1>
            </main>

            <Footer/>

        </div>
    )
}
