import Head from 'next/head'
import Link from 'next/link'
import pet_styles from '../styles/petition-page.module.scss'
import React from "react";

export default function TrustedSources() {
    const meta = {
        "title": "Read about Ukraine in trusted sources",
        "description": "Ukrainians are dying. Keep track of the current situation in Ukraine from trusted and verified sources. Avoid fake information. Stop Russian violence now!",
        "og:image": "https://files.slack.com/files-pri/T685AV266-F035QC3F0Q5/huo_logo.png"
    }

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content={meta["og:image"]}/>
                <meta property="og:url" content="https://helpukraineonline.com/trusted-sources"/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:site_name" content="Help Ukraine Online"/>
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
                    <div className="flex_table">
                        <div className="flex_table__row">
                            <div className="flex_table__col">Ukraine NOW</div>
                            <div className="flex_table__col">Official Ukrainian media updates.</div>
                            <div className="flex_table__col">
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
                            </div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Ukrainian Parliament</div>
                            <div className="flex_table__col">Official media account of the Ukrainian Parliament.</div>
                            <div className="flex_table__col">
                                <Link href="https://t.me/verkhovnaradaofukraine">
                                    <a>
                                        <span>Telegram</span>
                                    </a>
                                </Link>

                            </div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">The Kyiv Independent</div>
                            <div className="flex_table__col">On-the-ground reporting from Ukraine. News, analyses, investigations, opinions, podcasts and more.</div>
                            <div className="flex_table__col">
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
                            </div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Ukraine Twitter</div>
                            <div className="flex_table__col">Official Twitter account of Ukraine.</div>
                            <div className="flex_table__col">
                                <Link href="https://twitter.com/ukraine">
                                    <a>
                                        <span>Twitter</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Volodymyr Zelenskyy Official Twitter</div>
                            <div className="flex_table__col">Official Twitter account of the President of Ukraine Volodymyr Zelenskyy.
                            </div>
                            <div className="flex_table__col">
                                <Link href="https://twitter.com/ZelenskyyUa">
                                    <a>
                                        <span>Twitter</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">BBC News</div>
                            <div className="flex_table__col">Live updates on Russia’s war against Ukraine.</div>
                            <div className="flex_table__col">
                                <Link href="https://www.bbc.com/news/world-60525350">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">CNN</div>
                            <div className="flex_table__col">Live updates on Russia’s war against Ukraine.</div>
                            <div className="flex_table__col">
                                <Link href="https://edition.cnn.com/europe/live-news/ukraine-russia-putin-news-03-05-22/index.html">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">The Guardian</div>
                            <div className="flex_table__col">Live updates on Russia’s war against Ukraine.</div>
                            <div className="flex_table__col">
                                <Link href="https://www.theguardian.com/world/live/2022/mar/05/russia-ukraine-war-latest-news-nato-gives-green-light-to-bombing-with-lack-of-no-fly-zone-says-zelenskiy">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">EuroNews</div>
                            <div className="flex_table__col">Live updates on Russia’s war against Ukraine.</div>
                            <div className="flex_table__col">
                                <Link href="https://www.euronews.com/news/europe/ukraine">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Ukrayinska Pravda</div>
                            <div className="flex_table__col">A leading Ukrainian independent media source - operating since 2001.</div>
                            <div className="flex_table__col">
                                <Link href="https://www.pravda.com.ua/eng/">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Kyiv Post</div>
                            <div className="flex_table__col">Ukraine's Global Voice since 1995.</div>
                            <div className="flex_table__col">
                                <Link href="https://www.kyivpost.com/ukraine-politics">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">UKRINFORM</div>
                            <div className="flex_table__col">UKRINFORM is the only national news agency of Ukraine.</div>
                            <div className="flex_table__col">
                                <Link href="https://www.ukrinform.net/block-lastnews">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Ukraine World</div>
                            <div className="flex_table__col">Ukraine in English: news, analysis, podcasts, videos.</div>
                            <div className="flex_table__col">
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
                            </div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Zaborona - Twitter</div>
                            <div className="flex_table__col">Ukrainian indie media.</div>
                            <div className="flex_table__col">
                                <Link href="https://twitter.com/zaborona_media">
                                    <a>
                                        <span>Twitter</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Ukraine World</div>
                            <div className="flex_table__col">Ukraine in English: news, analysis, podcasts, videos.</div>
                            <div className="flex_table__col">
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
                            </div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Ukraїner</div>
                            <div className="flex_table__col">An educational, multimedia and Ukrainian studies resource.</div>
                            <div className="flex_table__col">
                                <Link href="https://ukrainer.net/russian-wars/">
                                    <a>
                                        <span>Link</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex_table">
                            <div className="flex_table__row">
                                <div className="flex_table__col">Svidomi</div>
                                <div className="flex_table__col">News, analysis and human stories about Russia’s war against Ukraine.</div>
                                <div className="flex_table__col">
                                    <Link href="https://twitter.com/svidomi_en/">
                                        <a>
                                            <span>Twitter</span>
                                        </a>
                                    </Link><br/>
                                    <Link href="https://www.instagram.com/svidomi_eng/">
                                        <a>
                                            <span>Instagram</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>

    )
}