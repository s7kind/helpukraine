import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/main-page.module.scss'

export default function Home() {
    return (<>
            <Head>
                <title>Help Ukraine Online</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.hero__info}>
                            <h1>Stop Putin Stop War</h1>
                            <p>On February 24, Russia started war with Ukraine. Each passing day brings more death and
                                destruction, with an increasing threat to the world as we know it. With your help, we
                                can
                                stop Putin, end suffering, and avoid global catastrophe.</p>
                            <Link href="/">
                                <a className="button button__red">
                                    <span>How to Help</span>
                                </a>
                            </Link>
                        </div>
                        <img src="/static/hero__image.png" className={styles.hero__image} alt="Help Ukraine"/>
                    </div>
                    <img src="/static/hero__bg.png" className={styles.hero__bg} alt="Help Ukraine"/>
                </section>

                <section className={styles.why}>
                    <div className="container">
                        <h2 className={styles.why__title}>Why should I care?</h2>
                        <div className={styles.why__info}>
                            <p>
                                This crisis doesn’t just affect Ukraine — it is a threat to the free world. With greater
                                territory, Russia will only grow in strength. Russian planes are already threatening
                                Sweden
                                and Finland over NATO membership. It is naive to think Putin will be satisfied with just
                                Ukraine.
                            </p>
                            <p>
                                Then there are nuclear threats on multiple fronts — Putin is already threatening the US
                                and
                                NATO with nuclear weapons, and who knows what he will do if Europe’s largest nuclear
                                power
                                station falls into his hands.
                            </p>
                        </div>
                        <div className={styles.why__big}>
                            <p>With your actions, you can stand up for Ukraine and the very future of the free
                                world.</p>
                            <Link href="/">
                                <a className="button button__blue">
                                    <span>Donate</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className={styles.images__box}>
                    <div className={styles.images__box_item}>
                        <img src="/static/image__box--1.png" alt="Help Ukraine"/>
                    </div>
                    <div className={styles.images__box_item}>
                        <img src="/static/image__box--2.png" alt="Help Ukraine"/>
                    </div>
                    <div className={styles.images__box_item}>
                        <img src="/static/image__box--3.png" alt="Help Ukraine"/>
                    </div>
                    <div className={styles.images__box_item}>
                        <img src="/static/image__box--4.png" alt="Help Ukraine"/>
                    </div>
                </section>
                <section className={styles.what__can}>
                    <div className="container">
                        <h2 className={styles.what__can_title}>What you can do</h2>
                        <div className={styles.what__can_box}>

                            <div className={styles.what__can_petition}>
                                <div className={styles.box__wrap}>
                                    <h4 className={styles.box__title}>Sign a petition</h4>
                                    <div className={styles.box__info}>
                                        <p>Go to the government website in your country and sign a petition, urging your
                                            government to provide further support to the Ukrainian government.</p>
                                    </div>
                                    <Link href="/">
                                        <a className="button button__blue">
                                            <span>Sign</span>
                                        </a>
                                    </Link>
                                </div>

                                <img src="/static/petition__image.png" alt="" className={styles.petition__image}/>
                            </div>

                            <div className={styles.what__can_email}>
                                <div className={styles.email__box}>
                                    <p>Letter/email template:</p>
                                    <p>Dear NAME</p>

                                    <p>On 24 February, Russia started a war with Ukraine. With each passing day, we see
                                        more
                                        civilian deaths, despicable war crimes, and a mounting humanitarian crisis.
                                        Ukraine
                                        does not have the resources to fight back on its own. Only with the help of
                                        strong
                                        democratic countries can Russian aggression be repelled.</p>

                                    <p>We ask that your sign our country up to Boris Johnson’s proposed international
                                        humanitarian coalition, as well as supporting Ukraine in its efforts to provide
                                        for
                                        its own self-defence.</p>

                                    <p>We know that xxxx has provided significant support to Ukraine already. But we
                                        need
                                        to go further with financial assistance, military equipment, humanitarian aid
                                        and
                                        diplomatic efforts to end this war.</p>

                                    <p>The fate of Ukraine and the free world is counting on your actions. Thank you for
                                        your consideration.</p>

                                    <p>Regards,
                                        <br/>
                                        NAME
                                    </p>
                                </div>
                                <div className={styles.box__wrap}>
                                    <h4 className={styles.box__title}>Write to <br/> your government</h4>
                                    <div className={styles.box__info}>
                                        <p>Write to your local member of parliament or to your country’s leader,
                                            demanding
                                            urgent action! You can use our template below as is, or modify it according
                                            to
                                            your wishes!</p>
                                    </div>
                                    <Link href="/">
                                        <a className="button button__blue">
                                            <span>Write</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>


                            <div className={styles.what__can_donate}>
                                <div className={styles.box__wrap}>
                                    <h4 className={styles.box__title}>Donate</h4>
                                    <div className={styles.box__info}>
                                        <p>Russia has spent ≈US$60 billion a year over the last 5 years on its military,
                                            as opposed to ≈US$6 billion a year in Ukraine. The only way Ukraine can
                                            continue fighting is with your help.</p>
                                        <small>No matter the size, every donation helps.</small>
                                    </div>
                                    <Link href="/">
                                        <a className="button button__blue">
                                            <span>Make a donation</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
