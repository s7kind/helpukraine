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
                            destruction, with an increasing threat to the world as we know it. With your help, we can
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
                            territory, Russia will only grow in strength. Russian planes are already threatening Sweden
                            and Finland over NATO membership. It is naive to think Putin will be satisfied with just
                            Ukraine.
                        </p>
                        <p>
                            Then there are nuclear threats on multiple fronts — Putin is already threatening the US and
                            NATO with nuclear weapons, and who knows what he will do if Europe’s largest nuclear power
                            station falls into his hands.
                        </p>
                    </div>
                    <div className={styles.why__big}>
                        <p>With your actions, you can stand up for Ukraine and the very future of the free world.</p>
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

                    </div>
                </div>
            </section>
        </main>
    </>);
}
