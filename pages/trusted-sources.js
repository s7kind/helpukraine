import Head from 'next/head'
import Link from 'next/link'
import pet_styles from '../styles/petition-page.module.scss'
import React from "react";

export default function TrustedSources() {
    return (
        <>
            <Head>
                <title>Help Ukraine Online - Trusted sources</title>
            </Head>

            <main className={pet_styles.main}>
                <section className={pet_styles.main__intro}>
                    <div>
                        <h1>Trusted <br/> news sources</h1>
                        <p>Keep track of the current situation in Ukraine from trusted and verified sources to avoid
                            fake information.</p>
                    </div>
                </section>
                <section className={pet_styles.main__container}>
                    <div className={pet_styles.main__container__content}>
                        <h3>Get to know the truth</h3>
                        <p>The Russian government has built an extremely powerful propaganda arm that goes beyond its borders. Here is a list of top news sources that you can browse to better understand this conflict and counter Russian disinformation.</p>
                    </div>
                    <table>
                        <tr>
                            <th>Ukraine NOW</th>
                            <th>Official Ukrainian media updates.</th>
                            <th>
                                <Link href="https://t.me/ukrainenowenglish">
                                    <a>
                                        <span>Telegram</span>
                                    </a>
                                </Link><br/>
                                <Link href="https://www.facebook.com/UkraineNOWOfficial">
                                    <a>
                                        <span>Facebook</span>
                                    </a>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>Ukrainian Parliament</th>
                            <th>Official media account of the Ukrainian Parliament.</th>
                            <th>
                                <Link href="https://t.me/verkhovnaradaofukraine">
                                    <a>
                                        <span>Telegram</span>
                                    </a>
                                </Link>

                            </th>
                        </tr>
                        <tr>
                            <th>The Kyiv Independent</th>
                            <th>On-the-ground reporting from Ukraine. News, analyses, investigations, opinions, podcasts and more.</th>
                            <th>
                                <Link href="https://kyivindependent.com/">
                                    <a>
                                        <span>Website</span>
                                    </a>
                                </Link><br/>
                                <Link href="https://www.facebook.com/kyivindependent/">
                                    <a>
                                        <span>Facebook</span>
                                    </a>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>Ukraine Twitter</th>
                            <th>Official Twitter account of Ukraine.</th>
                            <th>
                                <Link href="https://twitter.com/ukraine">
                                    <a>
                                        <span>Twitter</span>
                                    </a>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>Volodymyr Zelenskyy Official Twitter</th>
                            <th>Official Twitter account of the President of Ukraine Volodymyr Zelenskyy.
                            </th>
                            <th>
                                <Link href="https://twitter.com/ZelenskyyUa">
                                    <a>
                                        <span>Twitter</span>
                                    </a>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>BBC News</th>
                            <th>Live updates on Russia’s war against Ukraine.</th>
                            <th>
                                <Link href="https://www.bbc.com/news/world-60525350">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>CNN</th>
                            <th>Live updates on Russia’s war against Ukraine.</th>
                            <th>
                                <Link href="https://edition.cnn.com/europe/live-news/ukraine-russia-putin-news-03-05-22/index.html">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>The Guardian</th>
                            <th>Live updates on Russia’s war against Ukraine.</th>
                            <th>
                                <Link href="https://www.theguardian.com/world/live/2022/mar/05/russia-ukraine-war-latest-news-nato-gives-green-light-to-bombing-with-lack-of-no-fly-zone-says-zelenskiy">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>EuroNews</th>
                            <th>Live updates on Russia’s war against Ukraine.</th>
                            <th>
                                <Link href="https://www.euronews.com/news/europe/ukraine">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>Ukrayinska Pravda</th>
                            <th>A leading Ukrainian independent media source - operating since 2001.</th>
                            <th>
                                <Link href="https://www.pravda.com.ua/eng/">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>Kyiv Post</th>
                            <th>Ukraine's Global Voice since 1995.</th>
                            <th>
                                <Link href="https://www.kyivpost.com/ukraine-politics">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>UKRINFORM</th>
                            <th>UKRINFORM is the only national news agency of Ukraine.</th>
                            <th>
                                <Link href="https://www.ukrinform.net/block-lastnews">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>Ukraine World</th>
                            <th>Ukraine in English: news, analysis, podcasts, videos.</th>
                            <th>
                                <Link href="https://ukraineworld.org/">
                                    <a>
                                        <span>Website</span>
                                    </a>
                                </Link><br/>
                                <Link href="https://twitter.com/ukraine_world">
                                    <a>
                                        <span>Twitter</span>
                                    </a>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>Zaborona - Twitter</th>
                            <th>Ukrainian indie media.</th>
                            <th>
                                <Link href="https://twitter.com/zaborona_media">
                                    <a>
                                        <span>Twitter</span>
                                    </a>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>Ukraine World</th>
                            <th>Ukraine in English: news, analysis, podcasts, videos.</th>
                            <th>
                                <Link href="https://ukraineworld.org/">
                                    <a>
                                        <span>Website</span>
                                    </a>
                                </Link><br/>
                                <Link href="https://twitter.com/ukraine_world">
                                    <a>
                                        <span>Twitter</span>
                                    </a>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>Ukraїner</th>
                            <th>An educational, multimedia and Ukrainian studies resource.</th>
                            <th>
                                <Link href="https://ukrainer.net/russian-wars/">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </th>
                        </tr>
                    </table>
                </section>
            </main>

        </>

    )
}