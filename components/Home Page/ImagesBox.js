import React from 'react';
import styles from "../../styles/main-page.module.scss";

const ImagesBox = () => {
    return (
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
    );
};

export default ImagesBox;