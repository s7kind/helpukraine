import React from 'react';
import styles from "../../styles/donation-page.module.scss";
import Link from "next/link";

const MilitaryFunds = () => {
    return(
        <>
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
                        <Link href="https://twitter.com/Ukraine/status/1497594592438497282">
                            <a target="_blank">
                                <span>BTC</span>
                            </a>
                        </Link><br/>
                        <Link href="https://twitter.com/Ukraine/status/1497594592438497282">
                            <a target="_blank">
                                <span>ETH</span>
                            </a>
                        </Link><br/>
                        <Link href="https://twitter.com/Ukraine/status/1497594592438497282">
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
        </>
    );
};

export default MilitaryFunds;