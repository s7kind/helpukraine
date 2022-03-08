import React from 'react';
import styles from "../../styles/main-page.module.scss";
import Link from "next/link";

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className="container">
                <div className={styles.banner__text}>
                    <p>With your actions, you can stand up for Ukraine and the very future of democracy.</p>
                    <Link href="/donation">
                        <a className="button button__blue">
                            <span>Donate</span>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;