import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/donation-page.module.scss'
import React from "react";
import MakeDonation from "../components/Donation/Make donation";
import MilitaryFunds from "../components/Donation/MilitaryFunds";
import Human from "../components/Donation/Human";
import Volunteers from "../components/Donation/Volunteers";

export default function Donation() {
    const meta = {
        "title": "Donate for Ukraine Now! Stop war!",
        "description": "Ukrainians are dying. Make a donation No matter the size, every donation helps. Stop Russian violence now!",
        "og:image": "https://drive.google.com/file/d/1DKBxS_vC4IhwnHKTztBqfH2yWKfMOwda/view"
    }


    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content={meta["og:image"]}/>
                <meta property="og:url" content="https://helpukraineonline.com/donation"/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:site_name" content="Help Ukraine Online"/>
            </Head>

            <main className={styles.main}>
                <MakeDonation/>
                <section className={styles.main__container}>
                    <Volunteers/>
                    <MilitaryFunds/>
                    <Human/>
                </section>
            </main>
        </>
    )
}