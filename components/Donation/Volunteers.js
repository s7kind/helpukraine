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
                    <div className="flex_table__col">Support of 205th battalion, 112th brigade, 3rd company - those who protect right now people in Kyiv and Mariupol.
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
                    <div className="flex_table__col">Charitable Foundation "I am not alone"</div>
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
            </div>
        </>
    );
};

export default Volunteers;