import React from 'react';
import styles from "../../styles/donation-page.module.scss";
import Link from "next/link";

const MakeDonation = () =>{
    return(
        <section className={styles.main__master_title}>
            <div>
                <h1>Make a donation</h1>
                <p>No matter the size, every donation helps.</p>
            </div>
        </section>
    );
};

export default MakeDonation;