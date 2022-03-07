import styles from "../../styles/main-page.module.scss";
import Link from "next/link";
import React from "react";

export default function WhatCan() {
    return (
        <>
            <section className={styles.what__can}>
                <div className="container">
                    <h2 className={styles.what__can_title}>What you can do</h2>
                    <div className={styles.what__can_box}>

                        <div className={styles.what__can_petition}>
                            <div className={styles.box__wrap}>
                                <h4 className={styles.box__title}>Sign a petition</h4>
                                <div className={styles.box__info}>
                                    <p>Go to the government website in your country and sign a petition, urging your
                                        government to provide further support to the Ukrainian government.</p>
                                </div>
                                <Link href="/">
                                    <a className="button button__blue">
                                        <span>Sign</span>
                                    </a>
                                </Link>
                            </div>

                            <img src="/static/petition__image.png" alt="" className={styles.petition__image}/>
                        </div>

                        <div className={styles.what__can_email}>
                            <div className={styles.email__box}>
                                <p>Letter/email template:</p>
                                <p>Dear &laquo;NAME&raquo;</p>

                                <p>On 24 February, Russia started a war with Ukraine. With each passing day, we see
                                    more
                                    civilian deaths, despicable war crimes, and a mounting humanitarian crisis.
                                    Ukraine
                                    does not have the resources to fight back on its own. Only with the help of
                                    strong
                                    democratic countries can Russian aggression be repelled.</p>

                                <p>We ask that your sign our country up to Boris Johnson’s proposed international
                                    humanitarian coalition, as well as supporting Ukraine in its efforts to provide
                                    for
                                    its own self-defence.</p>

                                <p>We know that xxxx has provided significant support to Ukraine already. But we
                                    need
                                    to go further with financial assistance, military equipment, humanitarian aid
                                    and
                                    diplomatic efforts to end this war.</p>

                                <p>The fate of Ukraine and the free world is counting on your actions. Thank you for
                                    your consideration.</p>

                                <p>Regards,
                                    <br/>
                                    &laquo;NAME&raquo;
                                </p>
                            </div>
                            <div className={styles.box__wrap}>
                                <h4 className={styles.box__title}>Write to your government</h4>
                                <div className={styles.box__info}>
                                    <p>Write to your local member of parliament or to your country’s leader,
                                        demanding urgent action! Ukraine needs three specific things:</p>
                                    <ul>
                                        <li>Manpower</li>
                                        <li>Weapons and army provisions</li>
                                        <li>Humanitarian corridors for citizens caught up in the fighting</li>
                                    </ul>
                                    <p>You can use our template which addresses these concerns.</p>
                                </div>
                                <Link href="/">
                                    <a className="button button__blue">
                                        <span>How to contact your MP</span>
                                    </a>
                                </Link>
                            </div>
                        </div>


                        <div className={styles.what__can_donate}>
                            <div className={styles.box__wrap}>
                                <h4 className={styles.box__title}>Donate</h4>
                                <div className={styles.box__info}>
                                    <p>Russia has spent ≈US$60 billion a year over the last 5 years on its military,
                                        as opposed to ≈US$6 billion a year spent in Ukraine. The only way Ukraine
                                        can continue fighting is with your help.</p>
                                    <small>No matter the size, every donation helps.</small>
                                </div>
                                <Link href="/">
                                    <a className="button button__blue">
                                        <span>Make a donation</span>
                                    </a>
                                </Link>
                            </div>

                            <img src="/static/donate__image.png" alt="" className={styles.donate__image}/>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}