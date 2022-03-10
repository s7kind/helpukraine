import React from 'react';
import styles from "../../styles/main-page.module.scss";

const More = () => {
    return (
        <section className={styles.more}>
            <div className="container">
                <h2 className={styles.more__title}>Want to do more?</h2>
                <div className={styles.more__box}>
                    <div className={styles.more__item}>
                        <div className={styles.more__item_wrap}>
                            <h5 className={styles.more__item_title}>
                                Join the IT Army
                            </h5>
                            <div className={styles.more__item_text}>
                                <p>Ukraine is an IT hotspot, which is bad news for Russia. Thousands of citizens
                                    are helping to wage war on the Kremlin and its corrupt state security
                                    services from their computers. The best part is, you can join too!</p>
                            </div>
                            <a href="https://t.me/itarmyofukraine2022" target="_blank"
                               className="button button__blue"><span>Join the Ukrainian IT Army</span></a>
                        </div>
                        <div className={styles.more__item_image}>
                            <img src="/static/more__it.webp" alt="Help Ukraine"/>
                        </div>
                    </div>

                    <div className={styles.more__item}>
                        <div className={styles.more__item_wrap}>
                            <h5 className={styles.more__item_title}>
                                Join the Ukrainian foreign legion
                            </h5>
                            <div className={styles.more__item_text}>
                                <p>Ukrainian forces are strong, but they can only defend their homeland with
                                    your help! Be 1 of the 20,000 who have already joined the Ukrainian Foreign
                                    Legion and are fighting to defend the free world!</p>
                            </div>

                            <a href="https://fightforua.org/" target="_blank" className="button button__blue"><span>Join the Ukrainian foreign legion</span></a>
                        </div>
                        <div className={styles.more__item_image}>
                            <img src="/static/more__legion.webp" alt="Help Ukraine"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default More;