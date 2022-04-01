import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/petition-page.module.scss'
import React from "react";
const Australia = () => {
    return (
        <>
            <div className={styles.main__container__content} id="canada">
                <h3>Australia</h3>
            </div>
            <div className="flex_table">
                <div className="flex_table__row">
                    <div className="flex_table__col">Supply military and financial assistance to help repel Russian
                        aggression
                    </div>
                    <div className="flex_table__col">A call to the Australian government to increase assistance to
                        Ukraine, whether that be through financial help, military equipment, humanitarian aid, or
                        diplomatic efforts.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://www.aph.gov.au/e-petitions/petition/EN4051">
                            <a>
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex_table">
                <div className="flex_table__row">
                    <div className="flex_table__col">Declare Putin's United Russia a terrorist organisation and freeze
                        its assets
                    </div>
                    <div className="flex_table__col">United Russia is the ruling party that gives legislative approval
                        to oppressive laws, as well as the military invasions of not just Ukraine, but also Syria,
                        Georgia, and any other conflict Russia is a part of. This petition asks Australia to designate
                        United Russia Party as a terrorist organisation, banning members from entering Australia, and
                        freezing the party's assets in international jurisdictions.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://www.aph.gov.au/e-petitions/petition/EN4088">
                            <a>
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex_table">
                <div className="flex_table__row">
                    <div className="flex_table__col">Grant humanitarian aide and evacuation help to Ukrainian citizens
                    </div>
                    <div className="flex_table__col">A call to grant a humanitarian pathway to Ukrainian citizens,
                        include Ukraine in the list of countries eligible for refugee/ humanitarian visas, and assist
                        with the evacuation of peaceful citizens from Ukraine.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://www.aph.gov.au/e-petitions/petition/EN4034">
                            <a>
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Australia