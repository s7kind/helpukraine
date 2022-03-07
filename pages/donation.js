import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/donation-page.module.scss'

export default function Donation() {
    return (
        <>
            <Head>
                <title>Help Ukraine Online - Donation</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.master_title}>
                    <div>
                        <h1>Make a donation</h1>
                        <p>No matter the size, every donation helps.</p>
                    </div>
                </section>
                <section className={styles.container}>
                    <div className={styles.container__main_content}>
                        <h2>Governmental | Military donation funds</h2>
                    </div>
                    <table>
                        <tr>
                            <th>Ministry of Defense of Ukraine</th>
                            <th>The main governmental donation page for Ukrainian army</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Ministry of Defense of Ukraine</th>
                            <th>The main governmental donation page for Ukrainian army</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                    </table>
                    <div className={styles.container__main_content} >
                        <h2>Humanitarian donation funds</h2>
                    </div>
                    <table>
                        <tr>
                            <th>Ministry of Defense of Ukraine</th>
                            <th>The main governmental donation page for Ukrainian army</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Ministry of Defense of Ukraine</th>
                            <th>The main governmental donation page for Ukrainian army</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                    </table>
                </section>
            </main>
        </>
    )
}