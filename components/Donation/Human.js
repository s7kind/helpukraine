import React from 'react';
import styles from "../../styles/donation-page.module.scss";
import Link from "next/link";

const Human = () => {
    return(
        <>
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
        </>
    );
};

export default Human;