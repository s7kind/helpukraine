import React from 'react';
import styles from "../../styles/main-page.module.scss";
import Link from "next/link";

const ImagesBox = () => {
    return (<>
            <section className={styles.images__box}>
                <div className={styles.images__box_item}>
                    <img src="/static/image__box--1.webp" alt="Help Ukraine"/>
                </div>
                <div className={styles.images__box_item}>
                    <img src="/static/image__box--2.webp" alt="Help Ukraine"/>
                </div>
                <div className={styles.images__box_item}>
                    <img src="/static/image__box--3.webp" alt="Help Ukraine"/>
                </div>
                <div className={styles.images__box_item}>
                    <img src="/static/image__box--4.webp" alt="Help Ukraine"/>
                </div>
            </section>
            <section className={styles.why}>
                <div className="container">
                    <h2 className={styles.why__title}>Helping from abroad!</h2>
                    <div className={styles.why__info}>
                        <p>
                            Inna Nelson, a Ukrainian living in Sydney, Australia, has helped to create a website that
                            shows all the creative ways people can assist Ukrainians and counter Russian propaganda.
                        </p>
                    </div>
                    <video className={styles.video}
                           id='video'
                           controls="controls"
                           preload='none'
                           poster='/static/Inna.webp'
                    >
                        <source id='mp4' src="/static/ABC_News.mp4" type='video/mp4'/>
                        <source id='webm' src="/static/ABC_News.webm" type='video/webm'/>
                        <source id='ogv' src="/static/ABC_News.ogv" type='video/ogg'/>
                        <p>Your user agent does not support the HTML5 Video element.</p>
                    </video>
                </div>
            </section>
        </>
    );
};

export default ImagesBox;