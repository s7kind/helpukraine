import React from 'react';
import styles from "../../styles/main-page.module.scss";

const ImagesBox = () => {
    return (
        <section className={styles.images__box}>
            <div className={styles.images__box_item}>
                <img src="/static/image__box--1.png" alt="Help Ukraine"/>
            </div>
            <div className={styles.images__box_item}>
                <img src="/static/image__box--2.png" alt="Help Ukraine"/>
            </div>
            <div className={styles.images__box_item}>
                <img src="/static/image__box--3.png" alt="Help Ukraine"/>
            </div>
            <div className={styles.images__box_item}>
                <img src="/static/image__box--4.png" alt="Help Ukraine"/>
            </div>
        </section>
    );
};

export default ImagesBox;