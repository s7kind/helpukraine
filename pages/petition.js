import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/petition-page.module.scss'
import React from "react";

export default function Petition() {
    return (
        <>
            <Head>
                <title>Help Ukraine Online - Petition</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.main__intro}>
                    <div>
                        <h1>Sign petitions!<br/>
                            Fight for democracy!</h1>
                        <p>End political games! Make your leaders act! Stop people suffering!</p>
                    </div>
                </section>
                <section className={styles.main__container}>
                    <div className={styles.main__container__entry_content}>
                        <h2>Force your leaders to act!<br/>
                            Spend <b>5 minutes</b>. Save <b>5+ lives!</b></h2>
                        <p>Every minute that passes in this conflict represents another historical building bombed,
                            another family displaced, another civilian life lost. With your help, Ukraine can continue
                            to stand strong in the face of Russian attacks and end this war.</p>
                        <div>
                            <Link href="#make-your-voice-heard">
                                <a className="button button__blue">
                                    <span>Make your voice heard</span>
                                </a>
                            </Link>
                            <Link href="#social-media">
                                <a className="button button__blue">
                                    <span>Write to your leader</span>
                                </a>
                            </Link>
                            <Link href="#social-media">
                                <a className="button button__blue">
                                    <span>Post on social media</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.main__container__fraped} id="make-your-voice-heard">
                        <h2>Make your voice heard</h2>
                        <p>The Ukrainian government is urgently calling out for:</p>
                        <ul>
                            <li>Both lethal and non-lethal military assistance</li>
                            <li>Humanitarian aid</li>
                            <li>Evacuation corridors to safeguard the lives of innocent civilians</li>
                        </ul>
                        <span>You can sign as many global petitions as you want.</span>
                    </div>
                </section>
                <section className={styles.main__full_width_container}>
                    <div className={styles.main__container__citizen}>
                        <h2>Citizens of the UK and Canada!</h2>
                        <p>You can sign government petitions below. These will go directly to your elected leaders.
                            Force them to do more!</p>
                        <Link href="#canada">
                            <a className="button button__blue">
                                <span>UK and Canada petitions</span>
                            </a>
                        </Link>
                    </div>
                </section>
                <section className={styles.main__container}>
                    <div className={styles.main__container__content}>
                        <h3>Global</h3>
                    </div>
                    <table>
                        <tr>
                            <th>Create humanitarian corridors in Ukraine</th>
                            <th>A petition to create humanitarian corridors out of cities to evacuate innocent
                                civilians.
                            </th>
                            <th><Link href="https://www.openpetition.eu/petition/online/create-humanitarian-corridors-in-ukraine">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Humanitarian Airlift to Ukraine</th>
                            <th>Ukrainians ask the US to provide military humanitarian airlift as they did in Georgia in
                                2008.
                            </th>
                            <th><Link href="https://www.change.org/p/president-of-the-united-states-humanitarian-airlift-to-ukraine">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Exclude Russia from the UN Security Council</th>
                            <th>To the UN: Exclude Russia from the UN Security Council</th>
                            <th><Link href="https://www.openpetition.eu/petition/unterzeichner/people-around-the-world-are-appealing-to-the-un-to-exclude-russia-from-the-un-security-council#petition-main">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Close the airspace over Ukraine</th>
                            <th>To NATO member states and Ukraine-friendly countries:

                                Close the airspace over Ukraine.
                                Deploy peacekeeping troops to Ukraine.
                                Provide military assistance to Kyiv and support the Ukrainian people.
                            </th>
                            <th><Link href="https://www.openpetition.eu/petition/online/people-around-the-world-ask-nato-to-close-the-airspace-over-ukraine">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Terminate any relationships with any companies with Russian ties</th>
                            <th>To global businesses and the VC Investor Community: Immediately cease any business
                                transactions with companies who have ties to Russian-paying citizens or entities.
                            </th>
                            <th><Link href="https://www.change.org/p/terminate-any-relationships-with-any-companies-with-russian-ties-a05bf76a-20ef-40b4-9eb9-167c450a5092">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Together, for children in Ukraine!</th>
                            <th>World Vision’s call for the protection of children and the prevention of further death,
                                suffering, displacement and the long-lasting impacts of conflict on children and their
                                families.
                            </th>
                            <th><Link href="https://www.wvi.org/emergencies/ukraine/petition">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>EU & world leaders: sanction Putin over war in Ukraine</th>
                            <th>To the EU and world leaders: Show what side of history you are on and immediately impose
                                increased sanctions on Russia to stop the war.
                            </th>
                            <th><Link href="https://secure.avaaz.org/community_petitions/en/eu_world_leaders_eu_world_leaders_sanction_putin_over_war_in_ukraine/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                    </table>
                    <div className={styles.main__container__two_blocks} id="social-media">
                        <div className={styles.main__container__two_blocks__first}>
                            <div>
                                <span>Letter/email template:</span><br/><br/>

                                <p> Dear &#60;NAME&#62; </p><br/><br/>

                                <p>On 24 February, Russia started a war with Ukraine. With each passing day, we see more
                                    civilian deaths, despicable war crimes, and a mounting humanitarian crisis. Ukraine
                                    does not have the resources to fight back on its own. Only with the help of strong
                                    democratic countries can Russian aggression be repelled.
                                </p><br/><br/>
                                <p>We ask that your sign our country up to Boris Johnson’s proposed international
                                    humanitarian coalition, as well as supporting Ukraine in its efforts to provide for
                                    its own self-defense.
                                </p><br/><br/>
                                <p>We know that xxxx has provided significant support to Ukraine already. But we need to
                                    go further with financial assistance, military equipment, humanitarian aid and
                                    diplomatic efforts to end this war.
                                </p><br/><br/>
                                <p>The fate of Ukraine and the free world is counting on your actions. Thank you for
                                    your consideration.
                                </p><br/><br/>
                                <p>Regards, <br/>&#60;NAME&#62;</p>
                            </div>
                        </div>
                        <div className={styles.main__container__two_blocks__second}>
                            <h3>Be heard by your government</h3>
                            <p>Write an email to your local politician or President/Prime Minister, or post a comment to their Facebook page, Instagram, or other social media!
                                <br/><br/>
                                You can use our template which addresses these concerns.
                            </p>
                            <div className={styles.main__container__two_blocks__second__media}>
                                <div className={styles.main__container__two_blocks__second__media__cover}>
                                    <span>Social media comment template:</span>
                                    <p>The situation in Ukraine is worsening, with the same aerial bombing tactics used in the Syrian war. Children and vulnerable civilians are being targeted. Ukraine needs urgent assistance, including military and humanitarian aid. Please do more!</p>
                                    <div>
                                        <img src="/petition/Instagram-Logo.wine 1.svg"/>
                                        <img src="/petition/brandico_facebook-rect.svg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.main__container__content}>
                        <h3>Citizens of Canada and the UK</h3>
                        <p>Take direct action and sign the petitions on your respective government websites below.</p>
                    </div>
                    <div className={styles.main__container__content} id="canada">
                        <h3>Canada</h3>
                    </div>
                    <table>
                        <tr>
                            <th>Grant all Ukrainian citizens a visa-free entry to Canada</th>
                            <th>Grant all Ukrainian citizens a visa-free entry to Canada and provide refugee assistance
                                to those in the war zone.
                            </th>
                            <th><Link href="https://petitions.ourcommons.ca/en/Petition/Details?Petition=e-3898">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                    </table>
                    <div className={styles.main__container__content}>
                        <h3>United Kingdom</h3>
                    </div>
                    <table>
                        <tr>
                            <th>Pledge any necessary military support to defend Ukraine</th>
                            <th>A call to the UK Government to pledge to defend Ukraine, up to and including full-scale
                                military intervention if required.
                            </th>
                            <th><Link href="https://petition.parliament.uk/petitions/607314">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Waive visa requirement for Ukrainian refugees</th>
                            <th>Join other nations in providing a route to safety for refugees. Waive all visa
                                requirements for Ukrainian passport holders arriving in the UK.
                            </th>
                            <th><Link href="https://petition.parliament.uk/petitions/609530">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Oxfam petition for Ukrainian victims of war</th>
                            <th>Provide adequate safe routes for people fleeing war and bloodshed to seek sanctuary in
                                the UK.
                                Rethink the harmful Nationality and Borders Bill which will flagrantly undermine our
                                obligation to give all those who seek asylum a fair hearing.
                            </th>
                            <th><Link href="https://actions.oxfam.org/great-britain/ukraine/petition/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                    </table>
                </section>
            </main>
        </>
    )
}
