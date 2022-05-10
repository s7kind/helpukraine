import React from 'react';
import styles from "../../styles/donation-page.module.scss";
import Link from "next/link";

const Volunteers = () => {
    return (
        <>
            <div className={styles.main__container__main_content}>
                <h2>Volunteers | The fastest way to help</h2>
                <p>A list of funds / volunteers that directly supply the essentials to the Ukrainian soldiers,
                    territorial defence and to the victims of military aggression.</p>
            </div>
            <div className="flex_table">
                <div className="flex_table__row">
                    <div className="flex_table__col">Critical Support of Ukranian Defenders</div>
                    <div className="flex_table__col">KOLO quickly supplies the essential equipment to our soldiers in
                        hot spots. Their main focus is medium-sized orders that often go overlooked by large
                        foundations. Individual volunteers can’t afford them, so KOLO is here to fill the void.
                    </div>
                    <div className="flex_table__col"><Link href="https://koloua.com/en/">
                        <a target="_blank">
                            <span>Website</span>
                        </a>
                    </Link></div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Direct help to special forces</div>
                    <div className="flex_table__col">Support of 205th battalion, 112th brigade, 3rd company - those who
                        protect right now people in Kyiv and Mariupol.
                        Equipment, weapons and medicines + partly for food, but which is canned and packaged, generally
                        suitable for the red zone.
                    </div>
                    <div className="flex_table__col"><Link
                        href="https://docs.google.com/document/d/1nqaKj6YeK-cFpPHZisiK6yq8lSyash-stfpLMmetJn4/edit#">
                        <a target="_blank">
                            <span>Link</span>
                        </a>
                    </Link></div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">IT Specialists Volunteer Center</div>
                    <div className="flex_table__col">They provide assistance to residents and soldiers of our hometown
                        Zaporizhzhia and the Zaporizhzhia region.
                        They are engaged in the search, purchase and distribution medicines, communication equipment,
                        uniforms and food among those in need of help.
                    </div>
                    <div className="flex_table__col"><Link
                        href="https://docs.google.com/document/d/1b9jm_3PPoy5BhHrSjNuTB1tyIBx0eGfbYtL_a8s5rSE/edit#">
                        <a target="_blank">
                            <span>Link</span>
                        </a>
                    </Link></div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Ukraine volunteers in Budapest</div>
                    <div className="flex_table__col">They are a group of IT-specialists who, by the will of fate, ended
                        up in Budapest and decided to organize themselves to help the army. In a short period of time,
                        they delivered to Ukraine more than 100 walkie-talkies, 40 thermal imagers and countless
                        military vests, gloves, sleeping bags, etc.
                    </div>
                    <div className="flex_table__col"><Link
                        href="https://docs.google.com/document/d/1E7Tev1kbr5lnKln_IljAcaPFup76ryW4-5KmmPsFXW0/edit#">
                        <a target="_blank">
                            <span>Link</span>
                        </a>
                    </Link></div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Army support DNIPRO</div>
                    <div className="flex_table__col">They are engaged in the provision of the National Guard, the Armed
                        Forces of Ukraine, the Troops, and the hospital on the spot. Some things go straight to the
                        front, and some go to be provided locally.
                        They find and deliver to the addresses such different stuff (e.g. turnstiles for stopping blood,
                        mats, knives, action cameras, gasoline, chainsaws, knee pads, backpacks, cables, power banks,
                        flashlights, batteries, crutches for the hospital, etc.).
                    </div>
                    <div className="flex_table__col"><Link
                        href="https://docs.google.com/document/d/1FHm3bNsOIMFksB_z1fCiyuFQd43yQprvQ5KdliYj6SM/edit#">
                        <a target="_blank">
                            <span>Link</span>
                        </a>
                    </Link></div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Donation for SUVs for Ukraine Army</div>
                    <div className="flex_table__col">Purchasing of SUVs for Ukraine army and territorial defense.
                    </div>
                    <div className="flex_table__col"><Link
                        href="https://docs.google.com/document/d/1WyP3G6BC27GSKuhn-Dq71kQrZwZ8hg0vYSPOdqZ26CQ/edit#">
                        <a target="_blank">
                            <span>Link</span>
                        </a>
                    </Link></div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Defense equipment from Warsaw</div>
                    <div className="flex_table__col">Team of volunteers that are crowdfunding money for defense
                        equipment for Ukrainian territorial defense units.
                    </div>
                    <div className="flex_table__col"><Link
                        href="https://standwithukraine.in.ua">
                        <a target="_blank">
                            <span>Website</span>
                        </a>
                    </Link></div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Charitable Foundation «I am not alone»</div>
                    <div className="flex_table__col">Foundation that collects and integrates humanitarian goods for
                        people needs in warehouses in the EU and the USA.
                        They organize humanitarian aid logistics from Europe and distribute within Ukrainian cities,
                        deliver goods to Ukrainian towns, and provide warehouse system management.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://alternativeway.help">
                            <a target="_blank">
                                <span>Website</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Ukrainian Volunteer Service</div>
                    <div className="flex_table__col">
                        A non-profit organization devoted to the development of the culture of volunteering in Ukraine.
                        Now operating as a coordinating center for 50,000 volunteers and are collecting donations for
                        two purposes: humanitarian needs and support for Ukrainian Armed Forces.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://secure.wayforpay.com/payment/uvs_support">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">People’s Project.com</div>
                    <div className="flex_table__col">People’s Project is a non-commercial and nonprofit organization. It
                        is an association made up of volunteers and caring people who coordinate their efforts for
                        social initiatives aimed to support the People of Ukraine. Thousands of volunteers and
                        benefactors from throughout Ukraine and abroad are engaged in activities carried out by People’s
                        Project.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://www.peoplesproject.com/en/">
                            <a target="_blank">
                                <span>Website</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">STAVNITSER</div>
                    <div className="flex_table__col">Their focus is on buying bulletproof vests and helmets of high
                        quality: today it is a huge problem as there isn’t enough of this equipment in stock in the
                        whole world and the process of its legal purchase is slow and full of bureaucracy.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://stavnitser.com/en#donate">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Serhii Prytula</div>
                    <div className="flex_table__col">Serhiy Dmytrovych Prytula is a Ukrainian TV presenter, actor,
                        author and co-producer who raised money for military needs.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://www.facebook.com/serhiyprytula/posts/504219621062643">
                            <a target="_blank">
                                <span>Facebook</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">CF «Treasury of Hope»</div>
                    <div className="flex_table__col">They help children with cancer. Blood donation / Military medicine
                        supports.
                    </div>
                    <div className="flex_table__col">
                        <Link
                            href="https://docs.google.com/document/d/1ECfAuLWc_wWBjh6ttSz6DeSLpg_P8VA2gBDJr9RVfqw/edit?usp=sharing">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Convictus</div>
                    <div className="flex_table__col">In connection with the hostilities in Ukraine, this organization is
                        launching a fundraiser to help those in need and those who are in a critical situation.
                    </div>
                    <div className="flex_table__col">
                        <Link href="http://www.convictus.org.ua/en/our-organization-is-launching-a-fundraiser/">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Deti zp ua</div>
                    <div className="flex_table__col">Charity foundation Happy Child was created by volunteers of
                        www.deti.zp.ua for further implementation of projects supporting orphans and children diagnosed
                        with cancer. Now volonteers try to satisfy the needs of children in safety and support.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://deti.zp.ua/eng/a.php?n=193600">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">CO «Community Foundation of Kherson Zakhust»</div>
                    <div className="flex_table__col">Humanitarian aid to Kherson for hospital, social institutions,
                        families, adults with disabilities, and for lonely Kherson residents who have nowhere to expect
                        support.
                    </div>
                    <div className="flex_table__col">
                        <Link
                            href="https://docs.google.com/document/d/1KwsT6L5UhI0CN1Oa-Q4tkCtarxswn0vcP2VZzs74KlE/edit?usp=sharing">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">CF Anna-Maria</div>
                    <div className="flex_table__col">Humanitarian help to refugees - assistance thier needs in
                        humanitarian support.
                    </div>
                    <div className="flex_table__col">
                        <Link
                            href="https://docs.google.com/document/d/1woY9cxAKXHMw8_URHU-NNHmXXtbCF3SRfXSghy7lrkk/edit?usp=sharing">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Dobrobut</div>
                    <div className="flex_table__col">Targeted fundraising for the purchase of medicines and emergency
                        operations.
                    </div>
                    <div className="flex_table__col">
                        <Link
                            href="https://docs.google.com/document/d/1UGbKNA0RpZyEUtHumpVE3FnRcITAI4bwbDYxMihZB-k/edit?usp=sharing">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Рumanitarian-aid.macpaw</div>
                    <div className="flex_table__col">Help Ukrainians who are stranded in the war zone. The fund is able
                        to quickly purchase abroad and deliver to Ukraine a large amount of humanitarian aid (food,
                        medical supplies, hygiene products, etc.)
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://humanitarian-aid.macpaw.com/#donate">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Dobrodiy Club</div>
                    <div className="flex_table__col">Dobrodiy Club promptly responds to urgent requests and help
                        children and families who are running away from war.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://www.patreon.com/dobrodiy_club">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">CF «Tvoya-Opora»</div>
                    <div className="flex_table__col">The fund exists to help seriously ill children and orphans.
                    </div>
                    <div className="flex_table__col">
                        <Link
                            href="https://docs.google.com/document/d/18XiyW-T0VwVnRrJc-YcVYU6BhZMRbQ0VgoNMk9FWwGM/edit?usp=sharing">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Stabilization Support Services</div>
                    <div className="flex_table__col">Supporting the civilian population is our second front, become our
                        allies!
                        The team of Charity Foundation Stabilization Support Services in Ukraine initiated a fundraiser
                        to help people affected by the war.
                        Our foundation is almost 100 dedicated people in all regions of Ukraine. We have experience in
                        coordinating humanitarian operations since 2015, particularly in other countries.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://en.sss-ua.org/news/charitable-fundraising/">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Starenki</div>
                    <div className="flex_table__col">A charitable organization devoted to issues of elderly people in
                        Ukraine. Together with Volunteering communities and State social service workers, Starenki
                        supports the vulnerable and helpless elderly with basic food and hygiene packages and organizes
                        help and assistance.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://starenki.com.ua/en/donate/">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">CF Kryla Nadiyi</div>
                    <div className="flex_table__col">The main priority of the fund is to support children with cancer
                        and children in need of organ transplants.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://www.liqpay.ua/uk/checkout/card/i12274216434">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">CF Volunteer Battalion</div>
                    <div className="flex_table__col">From the first days of the war, their team has been providing
                        material support to the Armed Forces, battalions of the Ministry of Internal Affairs, and
                        volunteer battalions.
                    </div>
                    <div className="flex_table__col">
                        <Link
                            href="https://docs.google.com/document/d/1QzBJ6sNiK4p9O45eeK4D93GDoSoh65uR/edit?usp=sharing&ouid=118192279732998640382&rtpof=true&sd=true">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">CF Volunteers of Podillya</div>
                    <div className="flex_table__col">Raising funds for military needs.
                    </div>
                    <div className="flex_table__col">
                        <Link
                            href="https://docs.google.com/document/d/1p-hVHkEEDVJpSG19XIfZDrmR9iavmMHCoUVdZAetMKM/edit?usp=sharing">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Help and care fund</div>
                    <div className="flex_table__col">A non-profit organization that raises funds to help the Armed
                        Forces of Ukraine and territorial defense bodies.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://dt-fond.org/">
                            <a target="_blank">
                                <span>Website</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">«Shelter for people who lost their homes from the war» in Lviv
                    </div>
                    <div className="flex_table__col">Helping refugees in western Ukraine survive the war and overcome
                        the humanitarian crisis.
                    </div>
                    <div className="flex_table__col">
                        <Link
                            href="https://docs.google.com/document/d/1ew7mtyDPVRJAZvEJbbDhR8R8XwYySvkAlyfkti9tnbg/edit?usp=sharing">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">International Charity Foundation «EverybodyCan»</div>
                    <div className="flex_table__col">This charity foundation, together with philanthropists and
                        volunteers, keeps in touch with the hospitals and procures medicines and supplies at their
                        request. All donations help support children, the elderly and hospitals.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://en.everybodycan.com.ua/dopomogti-zaraz">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Ukrainian Association of Medical Tourism – UAMT</div>
                    <div className="flex_table__col">Officially registered non-profit association in Ukraine, which has
                        been operating since 2013 and helping ukrainians with medical aids, humanitarian cargos etc.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://uamt.com.ua/en/help-ukraine.html">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">The Humanitarian Centre Mizhhiria</div>
                    <div className="flex_table__col">This centre arranges the collection and delivery of humanitarian aid to Ukraine.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://www.humanitarian-mizhhirya.com/">
                            <a target="_blank">
                                <span>Website</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Odessa volunteers help armed forces</div>
                    <div className="flex_table__col">
                        At the moment there is a need to buy bunch of different stuff (from food & medicine to body
                        armor) for the Armed Forces, located in the Odessa region.
                    </div>
                    <div className="flex_table__col">
                        <Link
                            href="https://docs.google.com/document/d/1KAxJv0BQd9vbNathLM5Bbe8SU-Btv3mUDyarchp2t90/edit#">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Medicine purchase in Kharkiv</div>
                    <div className="flex_table__col">
                        Money is urgently required to purchase a batch of turnstiles and medicine equipment.
                    </div>
                    <div className="flex_table__col">
                        <Link
                            href="https://docs.google.com/document/d/1Hz2F30mSlqLnwnz7_onNLpSIgzyFP3HNyfdGYr2WUkY/edit">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Help civilians in Kherson</div>
                    <div className="flex_table__col">
                        Money is urgently required to buy and deliver food, baby food, hygiene, and medicines directly
                        to Kherson and Kherson region for civilians. A photo report will be provided.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://docs.google.com/document/d/1rf1c4EmQX2L1z7bpT4RRN62kjV8wz0wyF9N6DZfCsWk/edit#">
                            <a target="_blank">
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Kyiv Headquarters of Volunteers</div>
                    <div className="flex_table__col">
                        The volunteer organization that supports both civilians (mostly Chernihiv, Kharkiv, Zaporizhia, and Mykolaiv regions) and the military (Battalion Aidar east of Ukraine, the army in Donetsk, Mykolaiv area, and Azov).
                        They find and deliver food, medicine, ammunition, and hygiene products for all in need.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://kyivhq.org.ua/en/">
                            <a target="_blank">
                                <span>Website</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Volunteers;