import ReactPlayer from 'react-player'

import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/main-page.module.scss'
import Hero from "../components/Home Page/hero"
import WhatCan from "../components/Home Page/what-can"
import Facts from "../components/Home Page/Facts";
import TakeAction from "../components/Home Page/TakeAction";
import More from "../components/Home Page/More";
import Why from "../components/Home Page/Why";
import ImagesBox from "../components/Home Page/ImagesBox";
import Trusted from "../components/Home Page/Trusted";
import Banner from "../components/Home Page/Banner";
import React from "react";

export default function Home() {
    const meta = {
        "title": "Help Ukraine Online! Stop war!",
        "description": "Ukrainians are dying. Nuclear catastrophe is a real threat. Russian troops are committing war crimes. Stop Russian violence now!",
        "og:image": "https://files.slack.com/files-pri/T685AV266-F035QC3F0Q5/huo_logo.png"
    }

    return (<>
        <Head>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description}/>
            <meta property="og:title" content={meta.title}/>
            <meta property="og:type" content="website"/>
            <meta property="og:image" content={meta["og:image"]}/>
            <meta property="og:url" content="https://helpukraineonline.com/"/>
            <meta property="og:description" content={meta.description}/>
            <meta property="og:site_name" content="Help Ukraine Online"/>
        </Head>

        <main>
            <Hero/>
            <WhatCan/>
            <Facts/>
            <TakeAction/>
            <More/>
            <Why/>
            <ImagesBox/>
            <Trusted/>
            <Banner/>
        </main>
    </>);
}
