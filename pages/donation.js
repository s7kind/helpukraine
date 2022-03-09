import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/donation-page.module.scss'
import React from "react";

export default function Donation() {
    return (
        <>
            <Head>
                <title>Help Ukraine Online - Donation</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.main__master_title}>
                    <div>
                        <h1>Make a donation</h1>
                        <p>No matter the size, every donation helps.</p>
                    </div>
                </section>
                <section className={styles.main__container}>
                    <div className={styles.main__container__main_content}>
                        <h2>Governmental | Military donation funds</h2>
                        <p>All funds to the government and military are used to help Ukraine defend itself against
                            Russian aggression.</p>
                    </div>
                    <div className="flex_table">
                        <div className="flex_table__row">
                            <div className="flex_table__col">Ukraine Ministry of
                                Defence - bank donation
                            </div>
                            <div className="flex_table__col">Donate directly to the Ukrainian army.</div>
                            <div className="flex_table__col"><Link href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi">
                                <a target="_blank">
                                    <span>Link</span>
                                </a>
                            </Link></div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Ukraine Ministry of Defence - cryptocurrency donation</div>
                            <div className="flex_table__col">Donate directly to the Ukrainian army using cryptocurrency. Wallets with verified
                                addresses have been set up by the Ukrainian Ministry of Digital Transformation.
                            </div>
                            <div className="flex_table__col">
                                <Link href="https://publish.twitter.com/?query=https%3A%2F%2Ftwitter.com%2FUkraine%2Fstatus%2F1497594592438497282&widget=Tweet">
                                    <a target="_blank">
                                        <span>BTC</span>
                                    </a>
                                </Link><br/>
                                <Link href="https://publish.twitter.com/?query=https%3A%2F%2Ftwitter.com%2FUkraine%2Fstatus%2F1497594592438497282&widget=Tweet">
                                    <a target="_blank">
                                        <span>ETH</span>
                                    </a>
                                </Link><br/>
                                <Link href="https://publish.twitter.com/?query=https%3A%2F%2Ftwitter.com%2FUkraine%2Fstatus%2F1497594592438497282&widget=Tweet">
                                    <a target="_blank">
                                        <span>USDT</span>
                                    </a>
                                </Link></div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Come Back Alive</div>
                            <div className="flex_table__col">A large charity that has helped the Ukrainian army with military gear, training, and
                                psychological help since 2014.
                            </div>
                            <div className="flex_table__col"><Link href="https://savelife.in.ua/en/donate/">
                                <a target="_blank">
                                    <span>Link</span>
                                </a>
                            </Link></div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Army SOS</div>
                            <div className="flex_table__col">Army SOS is a citizens initiative that coordinates people’s efforts to assist the
                                soldiers of Ukraine. This includes purchasing ammunition, shields, communication
                                equipment, uniforms and food. The goods are delivered directly to the units in need.
                            </div>
                            <div className="flex_table__col"><Link href="https://armysos.com.ua/en/help-the-army">
                                <a target="_blank">
                                    <span>Link</span>
                                </a>
                            </Link></div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Phoenix Wings</div>
                            <div className="flex_table__col">Provides the Ukrainian army with uniforms, personal non-lethal protection (such as vests
                                and helmets), first aid kits, and other resources for soldiers’ living quarters.
                            </div>
                            <div className="flex_table__col"><Link href="http://wings-phoenix.org.ua/en/about-fund/">
                                <a target="_blank">
                                    <span>Link</span>
                                </a>
                            </Link></div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">People’s Project</div>
                            <div className="flex_table__col">A site that compiles different crowdfunding projects; from the purchase of drones for
                                the military to efforts aimed at removing mines from the Donbass region.
                            </div>
                            <div className="flex_table__col"><Link href="https://www.peoplesproject.com/en/">
                                <a target="_blank">
                                    <span>Link</span>
                                </a>
                            </Link></div>
                        </div>
                    </div>
                    <div className={styles.main__container__main_content}>
                        <h2>Humanitarian donation funds</h2>
                        <p>Each day brings more distressing news — ordinary civilians not just caught in the firing line, but deliberately shot, assaulted, and denied necessities such as food and water by advancing Russian soldiers. You have the chance to get vital supplies to these citizens now!</p>
                    </div>
                    <div className="flex_table">
                        <div className="flex_table__row">
                            <div className="flex_table__col">VOSTOK SOS</div>
                            <div className="flex_table__col">A volunteer initiative whose activists provide assistance to victims of military
                                aggression in the east of the country and in Crimea. They help to evacuate and find
                                shelter for internally displaced persons (IDPs), as well as distribute humanitarian aid
                                and provide counselling services.
                            </div>
                            <div className="flex_table__col"><Link href="https://vostok-sos.org/en/make-a-donation/">
                                <a target="_blank">
                                    <span>Link</span>
                                </a>
                            </Link></div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Ministry of Social Policy of Ukraine</div>
                            <div className="flex_table__col">National Bank of Ukraine (NBU) has opened a fundraising account to provide humanitarian
                                assistance to Ukrainians affected by Russian aggression.
                            </div>
                            <div className="flex_table__col"><Link href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-rahunok-dlya-gumanitarnoyi-dopomogi-ukrayintsyam-postrajdalim-vid-rosiyskoyi-agresiyi">
                                <a target="_blank">
                                    <span>Link</span>
                                </a>
                            </Link></div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Ukrainian Red Cross</div>
                            <div className="flex_table__col">Ukraine’s Ministry of Health together with the Red Cross has opened a special account to
                                meet the emergency needs of health care institutions, some of which have been targeted
                                by Russian forces.
                            </div>
                            <div className="flex_table__col"><Link href="https://donate.redcrossredcrescent.org/ua/donate/~my-donation?_cv=1">
                                <a target="_blank">
                                    <span>Link</span>
                                </a>
                            </Link></div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Palianytsia</div>
                            <div className="flex_table__col">Palianytsia helps refugees and war victims.
                                They collect humanitarian aid, food, medication, and provide humanitarian help, as well
                                as shelter to those in need.
                            </div>
                            <div className="flex_table__col"><Link href="https://palianytsia.com.ua/">
                                <a target="_blank">
                                    <span>Website</span>
                                </a>
                            </Link></div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Hospitallers</div>
                            <div className="flex_table__col">Hospitallers is a volunteer paramedic organization that has been operating since 2014.
                                Its key goals are to help the wounded on the battlefield, evacuating them to hospitals
                                and helping them rehabilitate.
                            </div>
                            <div className="flex_table__col"><Link href="https://www.facebook.com/hospitallers/">
                                <a target="_blank">
                                    <span>Facebook</span>
                                </a>
                            </Link></div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Razom for Ukraine</div>
                            <div className="flex_table__col">Razom for Ukraine purchases medical supplies to assist in critical humanitarian
                                situations. The charity also works with governments and embassies on establishing
                                humanitarian corridors.
                            </div>
                            <div className="flex_table__col"><Link href="https://razomforukraine.org/donate/">
                                <a target="_blank">
                                    <span>Link</span>
                                </a>
                            </Link></div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">UNICEF Ukraine
                                Emergency Appeal
                            </div>
                            <div className="flex_table__col">UNICEF’s Ukraine emergency appeal aims to assist children and families who have been
                                displaced by this war, trucking safe water and prepositioning health, hygiene and
                                emergency education supplies to the most vulnerable.
                            </div>
                            <div className="flex_table__col"><Link href="https://www.unicef.org.au/appeals/ukraine-emergency-appeal">
                                <a target="_blank">
                                    <span>Link</span>
                                </a>
                            </Link></div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">United Help Ukraine</div>
                            <div className="flex_table__col">United Help Ukraine, Inc. is a charitable organization that distributes food and medical
                                supplies to Ukrainian IDPs.
                            </div>
                            <div className="flex_table__col">
                                <Link href="https://unitedhelpukraine.org/">
                                    <a target="_blank">
                                        <span>Website</span>
                                    </a>
                                </Link><br/>
                                <Link href="https://www.facebook.com/UnitedHelpUkraine.org">
                                    <a target="_blank">
                                        <span>Facebook</span>
                                    </a>
                                </Link></div>
                        </div>
                        <div className="flex_table__row">
                            <div className="flex_table__col">Nova Ukraine</div>
                            <div className="flex_table__col">Nova Ukraine provides direct aid to frontline workers, citizens currently in war zones, and refugees throughout Ukraine.</div>
                            <div className="flex_table__col"><Link href="https://novaukraine.org/donate/">
                                <a target="_blank">
                                    <span>Link</span>
                                </a>
                            </Link></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}