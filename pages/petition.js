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
                <section className={styles.main__intro}>
                    <div>
                        <h1>Sign petitions!<br/>
                            Fight for democracy!</h1>
                        <p>End political games! Make your leaders act! Stop people suffering!</p>
                    </div>
                </section>
                <section className={styles.main__container}>
                    <div className={styles.main__container__content}>
                        <h2>Sign petition.<br/>
                            Spend <b>5 minutes</b>. Save <b>5+ lives!</b> </h2>
                        <p>Sign as many petitions as you can. Sign a petition in your country first. Save democracy!</p>
                        <h3>Global</h3>
                    </div>
                    <table>
                        <tr>
                            <th>Create humanitarian corridors in Ukraine</th>
                            <th>A petition to create humanitarian corridors out of cities to evacuate innocent civilians.</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Humanitarian Airlift to Ukraine</th>
                            <th>Ukrainians ask the US to provide military humanitarian airlift as they did in Georgia in 2008.</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Exclude Russia from the UN Security Council</th>
                            <th>To the UN: Exclude Russia from the UN Security Council</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Close the airspace over Ukraine</th>
                            <th>To NATO member states and Ukraine-friendly countries:

                                Close the airspace over Ukraine.
                                Deploy peacekeeping troops to Ukraine.
                                Provide military assistance to Kyiv and support the Ukrainian people.
                            </th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Terminate any relationships with any companies with Russian ties</th>
                            <th>To global businesses and the VC Investor Community: Immediately cease any business transactions with companies who have ties to Russian-paying citizens or entities.</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Together, for children in Ukraine!</th>
                            <th>World Vision’s call for the protection of children and the prevention of further death, suffering, displacement and the long-lasting impacts of conflict on children and their families.</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>EU & world leaders: sanction Putin over war in Ukraine</th>
                            <th>To the EU and world leaders: Show what side of history you are on and immediately impose increased sanctions on Russia to stop the war.</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                    </table>
                    <div className={styles.main__container__content}>
                        <h3>Canada</h3>
                    </div>
                    <table>
                        <tr>
                            <th>Grant all Ukrainian citizens a visa-free entry to Canada</th>
                            <th>Grant all Ukrainian citizens a visa-free entry to Canada and provide refugee assistance to those in the war zone.</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                    </table>
                    <div className={styles.main__container__content}>
                        <h3>United Kingdom</h3>
                    </div>
                    <table>
                        <tr>
                            <th>Pledge any necessary military support to defend Ukraine</th>
                            <th>A call to the UK Government to pledge to defend Ukraine, up to and including full-scale military intervention if required.</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Waive visa requirement for Ukrainian refugees</th>
                            <th>Join other nations in providing a route to safety for refugees. Waive all visa requirements for Ukrainian passport holders arriving in the UK.</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Oxfam petition for Ukrainian victims of war</th>
                            <th>Provide adequate safe routes for people fleeing war and bloodshed to seek sanctuary in the UK.
                                Rethink the harmful Nationality and Borders Bill which will flagrantly undermine our obligation to give all those who seek asylum a fair hearing.
                            </th>
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
