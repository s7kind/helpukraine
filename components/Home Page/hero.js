import {ParallaxBanner} from "react-scroll-parallax";
import styles from "../../styles/main-page.module.scss";
import Link from "next/link";
import React from "react";

export default function Hero() {
    return (
        <>
            {/* HERO */}
            <ParallaxBanner
                layers={[
                    {image: '/static/hero__bg.png', speed: -15},
                    {
                        speed: -15,
                        children: (
                            <img src="/static/hero__image.png" className={styles.hero__image} alt="Help Ukraine"/>
                        ),
                    },
                ]}
                className={styles.hero}
            >
                <div className="container">
                    <div className={styles.hero__info}>
                        <h1>Stop Putin Stop War</h1>
                        <p>On February 24, Russia started war with Ukraine. Each passing day brings more death and
                            destruction, with an increasing threat to the world as we know it. With your help, we
                            can stop Putin, end suffering, and avoid global catastrophe.</p>
                        <div className={styles.hero__buttons}>
                            <Link href="/">
                                <a className="button button__red">
                                    <span>Advocate</span>
                                </a>
                            </Link>
                            <Link href="/">
                                <a className="button button__blue">
                                    <span>Donate</span>
                                </a>
                            </Link>
                            <Link href="/">
                                <a className="button button__blue">
                                    <span>Participate online</span>
                                </a>
                            </Link>
                        </div>

                    </div>
                </div>
            </ParallaxBanner>
            {/* END HERO */}
        </>
    )
}