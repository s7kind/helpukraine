import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/petition-page.module.scss'
import React from "react";

const Citizen = () => {
    return (
        <>
            <section className={styles.main__full_width_container}>
                <div className={styles.main__container__citizen}>
                    <h2>Citizens of the UK, Canada, and Australia!</h2>
                    <p>You can sign government petitions below. These will go directly to your elected leaders.
                        Force them to do more!</p>
                    <Link href="#canada">
                        <a className="button button__blue">
                            <span>UK, CA, and AUS petitions</span>
                        </a>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Citizen