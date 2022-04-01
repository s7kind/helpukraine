import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/petition-page.module.scss'
import React from "react";
import SignPetition from "../components/Petition/SignPetition";
import ForceToAct from "../components/Petition/ForceToAct";
import Citizen from "../components/Petition/Citizen";
import Global from "../components/Petition/Global";
import CanadaUk from "../components/Petition/Canada&Uk";
import Australia from "../components/Petition/Australia";


export default function Petition() {
    const meta = {
        "title": "Sign a petition! Stop war!",
        "description": "Ukrainians are dying. Nuclear catastrophe is a real threat. Russian troops are committing war crimes. Stop Russian violence now!",
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
                <meta property="og:url" content="https://helpukraineonline.com/petition"/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:site_name" content="Help Ukraine Online"/>
            </Head>

            <main className={styles.main}>
                <SignPetition/>
                <ForceToAct/>
                <Citizen/>
                <section className={styles.main__container}>
                    <Global/>
                    <CanadaUk/>
                    <Australia/>
                </section>
            </main>
        </>
    )
}
