import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/donation-page.module.scss'

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
                    <table>
                        <tr>
                            <th>Ukraine Ministry of
                                Defence - bank donation
                            </th>
                            <th>Donate directly to the Ukrainian army.</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Ukraine Ministry of Defence - cryptocurrency donation</th>
                            <th>Donate directly to the Ukrainian army using cryptocurrency. Wallets with verified
                                addresses have been set up by the Ukrainian Ministry of Digital Transformation.
                            </th>
                            <th>
                                <Link href="/">
                                    <a>
                                        <span>BTC</span>
                                    </a>
                                </Link><br/>
                                <Link href="/">
                                    <a>
                                        <span>ETH</span>
                                    </a>
                                </Link><br/>
                                <Link href="/">
                                    <a>
                                        <span>USDT</span>
                                    </a>
                                </Link></th>
                        </tr>
                        <tr>
                            <th>Come Back Alive</th>
                            <th>A large charity that has helped the Ukrainian army with military gear, training, and
                                psychological help since 2014.
                            </th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Army SOS</th>
                            <th>Army SOS is a citizens initiative that coordinates people’s efforts to assist the
                                soldiers of Ukraine. This includes purchasing ammunition, shields, communication
                                equipment, uniforms and food. The goods are delivered directly to the units in need.
                            </th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Phoenix Wings</th>
                            <th>Provides the Ukrainian army with uniforms, personal non-lethal protection (such as vests
                                and helmets), first aid kits, and other resources for soldiers’ living quarters.
                            </th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>People’s Project</th>
                            <th>A site that compiles different crowdfunding projects; from the purchase of drones for
                                the military to efforts aimed at removing mines from the Donbass region.
                            </th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                    </table>
                    <div className={styles.main__container__main_content}>
                        <h2>Humanitarian donation funds</h2>
                    </div>
                    <table>
                        <tr>
                            <th>VOSTOK SOS</th>
                            <th>A volunteer initiative whose activists provide assistance to victims of military
                                aggression in the east of the country and in Crimea. They help to evacuate and find
                                shelter for internally displaced persons (IDPs), as well as distribute humanitarian aid
                                and provide counselling services.
                            </th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Ministry of Social Policy of Ukraine</th>
                            <th>National Bank of Ukraine (NBU) has opened a fundraising account to provide humanitarian
                                assistance to Ukrainians affected by Russian aggression.
                            </th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Ukrainian Red Cross</th>
                            <th>Ukraine’s Ministry of Health together with the Red Cross has opened a special account to
                                meet the emergency needs of health care institutions, some of which have been targeted
                                by Russian forces.
                            </th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Palianytsia</th>
                            <th>Palianytsia helps refugees and war victims.
                                They collect humanitarian aid, food, medication, and provide humanitarian help, as well
                                as shelter to those in need.
                            </th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Hospitallers</th>
                            <th>Hospitallers is a volunteer paramedic organization that has been operating since 2014.
                                Its key goals are to help the wounded on the battlefield, evacuating them to hospitals
                                and helping them rehabilitate.
                            </th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>Razom for Ukraine</th>
                            <th>Razom for Ukraine purchases medical supplies to assist in critical humanitarian
                                situations. The charity also works with governments and embassies on establishing
                                humanitarian corridors.
                            </th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>UNICEF Ukraine
                                Emergency Appeal
                            </th>
                            <th>UNICEF’s Ukraine emergency appeal aims to assist children and families who have been
                                displaced by this war, trucking safe water and prepositioning health, hygiene and
                                emergency education supplies to the most vulnerable.
                            </th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                        <tr>
                            <th>United Help Ukraine</th>
                            <th>United Help Ukraine, Inc. is a charitable organization that distributes food and medical
                                supplies to Ukrainian IDPs.
                            </th>
                            <th>
                                <Link href="/">
                                    <a>
                                        <span>Website</span>
                                    </a>
                                </Link><br/>
                                <Link href="/">
                                    <a>
                                        <span>Facebook</span>
                                    </a>
                                </Link></th>
                        </tr>
                        <tr>
                            <th>Nova Ukraine</th>
                            <th>Nova Ukraine provides direct aid to frontline workers, citizens currently in war zones, and refugees throughout Ukraine.</th>
                            <th><Link href="/">
                                <a>
                                    <span>Link</span>
                                </a>
                            </Link></th>
                        </tr>
                    </table>
                </section>
            </main>
        </>
    )
}