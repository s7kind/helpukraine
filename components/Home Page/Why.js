import React from 'react';
import styles from "../../styles/main-page.module.scss";
import Link from "next/link";

const Why = () => {
    return (
        <section className={styles.why}>
            <div className="container">
                <h2 className={styles.why__title}>Why should I care?</h2>
                <div className={styles.why__info}>
                    <p>
                        This crisis doesn’t just affect Ukraine — it is a threat to the free world. With greater
                        territory, Russia will only grow in strength. Russian planes are already threatening
                        Sweden
                        and Finland over NATO membership. It is naive to think Putin will be satisfied with just
                        Ukraine.
                    </p>
                    <p>
                        Then there are nuclear threats on multiple fronts — Putin is already threatening the US
                        and
                        NATO with nuclear weapons, and who knows what he will do if Europe’s largest nuclear
                        power
                        station falls into his hands.
                    </p>
                </div>
                <video className={styles.video}
                       id='video'
                       controls="controls"
                       preload='none'
                       poster='/static/poster.png'
                >
                    <source id='mp4' src="/static/video.mp4" type='video/mp4'/>
                    <source id='webm' src="/static/video.webm" type='video/webm'/>
                    <source id='ogv' src="/static/video.ogv" type='video/ogg'/>
                    <p>Your user agent does not support the HTML5 Video element.</p>
                </video>
                <div className={styles.why__big}>
                    <p>With your actions, you can stand up for Ukraine and the very future of the free
                        world.</p>
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

export default Why;