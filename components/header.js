import styles from '../styles/header.module.scss'
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";


export default function Header() {
    const router = useRouter();

    const [scrollY, setScrollY] = useState(0);
    const [menuActive, setMenuActive] = useState(false)

    const menuHandle = () => {
        setMenuActive(!menuActive)
    }

    useEffect(() => {
        if (menuActive) {
            setMenuActive(!menuActive);
        }
    }, [router.asPath]);

    const scrollEvent = () => {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", scrollEvent);
        }

        watchScroll();
        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    });


    return (
        <header className={`${styles.header} ${scrollY > 150 ? styles.header__scroll : ''}`}>
            <div className={`container ${styles.header__container}`}>
                <Link href="/">
                    <a><img className={styles.header__logo} src="/static/logo.svg" alt="Help Ukraine Online"/></a>
                </Link>
                <div className={`${styles.header__menu} ${menuActive ? styles.header__menu__active : ''}`}>
                    <div className={styles.header__menu_burger} onClick={() => menuHandle()}>
                        <i/>
                        <i/>
                        <i/>
                    </div>
                    <div className={styles.header__menu_links}>
                        <Link href={'/'}>
                            <a><span>Home</span></a>
                        </Link>
                        <Link href={'/petition'}>
                            <a><span>Sign Petitions</span></a>
                        </Link>
                        <Link href={'/donation'}>
                            <a><span>Donate</span></a>
                        </Link>
                        <Link href={'/take-action'}>
                            <a><span>Take Action</span></a>
                        </Link>
                        <Link href={'/trusted-sources'}>
                            <a><span>Trusted News</span></a>
                        </Link>
                    </div>

                    <a href="mailto:contact@helpukraineonline.com"
                       className={styles.menu_contact}><span>Contact us</span></a>
                </div>
            </div>
        </header>
    )
}