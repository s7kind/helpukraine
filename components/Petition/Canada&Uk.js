import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/petition-page.module.scss'
import React from "react";
const CanadaUk = () => {
    return (
        <>
            <div className={styles.main__container__content}>
                <h3>Citizens of Canada and the UK</h3>
                <p>Take direct action and sign the petitions on your respective government websites below.</p>
            </div>
            <div className={styles.main__container__content} id="canada">
                <h3>Canada</h3>
            </div>
            <div className="flex_table">
                <div className="flex_table__row">
                    <div className="flex_table__col">Grant all Ukrainian citizens a visa-free entry to Canada
                    </div>
                    <div className="flex_table__col">Grant all Ukrainian citizens a visa-free entry to Canada
                        and provide refugee assistance
                        to those in the war zone.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://petitions.ourcommons.ca/en/Petition/Details?Petition=e-3898">
                            <a>
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.main__container__content}>
                <h3>United Kingdom</h3>
            </div>
            <div className="flex_table">
                <div className="flex_table__row">
                    <div className="flex_table__col">Pledge any necessary military support to defend Ukraine
                    </div>
                    <div className="flex_table__col">A call to the UK Government to pledge to defend Ukraine, up
                        to and including full-scale
                        military intervention if required.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://petition.parliament.uk/petitions/607314">
                            <a>
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Waive visa requirement for Ukrainian refugees</div>
                    <div className="flex_table__col">Join other nations in providing a route to safety for
                        refugees. Waive all visa
                        requirements for Ukrainian passport holders arriving in the UK.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://petition.parliament.uk/petitions/609530">
                            <a>
                                <span>Link</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex_table__row">
                    <div className="flex_table__col">Oxfam petition for Ukrainian victims of war</div>
                    <div className="flex_table__col">Provide adequate safe routes for people fleeing war and
                        bloodshed to seek sanctuary in
                        the UK.
                        Rethink the harmful Nationality and Borders Bill which will flagrantly undermine our
                        obligation to give all those who seek asylum a fair hearing.
                    </div>
                    <div className="flex_table__col">
                        <Link href="https://actions.oxfam.org/great-britain/ukraine/petition/">
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

export default CanadaUk