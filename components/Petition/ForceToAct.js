import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/petition-page.module.scss'
import React from "react";

const ForceToAct = () => {
    return (
        <>
            <section className={styles.main__container}>
                <div className={styles.main__container__entry_content}>
                    <h2>Force your leaders to act!<br/>
                        Spend <b>5 minutes</b>. Save <b>5+ lives!</b></h2>
                    <p>Every minute that passes in this conflict represents another historical building bombed,
                        another family displaced, another civilian life lost. With your help, Ukraine can continue
                        to stand strong in the face of Russian attacks and end this war.</p>
                    <div>
                        <Link href="#make-your-voice-heard">
                            <a className="button button__blue">
                                <span>Make your voice heard</span>
                            </a>
                        </Link>
                        <Link href="#social-media">
                            <a className="button button__blue">
                                <span>Write to your leader</span>
                            </a>
                        </Link>
                        <Link href="#social-media">
                            <a className="button button__blue">
                                <span>Post on social media</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.main__container__fraped} id="make-your-voice-heard">
                    <h2>Make your voice heard</h2>
                    <p>The Ukrainian government is urgently calling out for:</p>
                    <ul>
                        <li>Both lethal and non-lethal military assistance</li>
                        <li>Humanitarian aid</li>
                        <li>Evacuation corridors to safeguard the lives of innocent civilians</li>
                    </ul>
                    <span>You can sign as many global petitions as you want.</span>
                </div>
            </section>
        </>
    )
}

export default ForceToAct