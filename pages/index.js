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

export default function Home() {

    return (<>
        <Head>
            <title>Help Ukraine Online</title>
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
