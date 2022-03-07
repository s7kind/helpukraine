import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/petition-page.module.scss'

export default function Petition() {
    return (
        <>
            <Head>
                <title>Help Ukraine Online - Petition</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.sec_header}>
                    <div>
                        <h1>Sign petitions!<br/>
                            Fight for democracy!</h1>
                        <p>End political games! Make your leaders act! Stop people suffering!</p>
                    </div>
                </section>
                <section className={styles.container}>
                    <div className={styles.main_content}>
                        <h2>Sign petition.<br/>
                            Spend <b>5 minutes</b>. Save <b>5+ lives!</b> </h2>
                        <p>Sign as many petitions as you can. Sign a petition in your country first. Save democracy!</p>
                    </div>
                    <table>
                        <tr>
                            <th>Waive visa requirement for Ukrainian refugees</th>
                            <th>UK</th>
                            <th>Join other nations in providing a route to safety for refugees. Waive all visa requirements for Ukrainian passport holders arriving in the UK.</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Waive visa requirement for Ukrainian refugees</th>
                            <th>UK</th>
                            <th>Join other nations in providing a route to safety for refugees. Waive all visa requirements for Ukrainian passport holders arriving in the UK.</th>
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
