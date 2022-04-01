import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/petition-page.module.scss'
import React from "react";

const SignPetition = () => {
    return (
        <>
            <section className={styles.main__intro}>
                <div>
                    <h1>Sign petitions!<br/>
                        Fight for democracy!</h1>
                    <p>End political games! Make your leaders act! Stop people suffering!</p>
                </div>
            </section>
        </>
    )
}

export default SignPetition