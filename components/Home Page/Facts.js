import styles from "../../styles/main-page.module.scss";

export default function Facts() {
    return (
        <>
            <div className="container">
                <h2 className={styles.big__image_title}>The Facts</h2>
            </div>
            <section className={styles.big__image}>
                <div className={styles.container}>
                    <div className={styles.big__image_box}>
                        <ul>
                            <li>
                                <b>Russian troops are committing war crimes: </b>
                                <a href="https://suspilne.media/211514-russia-invades-ukraine-live-updates-suspilne/" target="_blank">Thermobaric bombs</a> have been dropped.
                                <a target="_blank" href="https://news.sky.com/story/ukraine-invasion-boy-5-dies-in-hospital-days-after-sister-and-parents-were-shot-dead-by-russian-troops-reports-12557343">Children have been shot</a> trying to escape with their families.
                                <a target="_blank" href="https://www.polskieradio.pl/395/7785/Artykul/2913606,Russian-soldiers-raping-women-in-Ukraine-report">Six women have died after experiencing sexual violence</a> at the hands
                                of Russian soldiers.
                            </li>
                            <li>
                                <b>Humanitarian aid is being restricted:</b> With each day, more families in regions
                                with
                                the heaviest fighting have had their electricity cut, and are being blockaded from
                                receiving vital supplies, such as food and water.
                            </li>
                            <li>
                                <b>Nuclear catastrophe is a real threat:</b> Ukraine is home to 15 nuclear reactors.
                                Chernobyl, the most famous, and Zaporizhzhia, the site of the largest nuclear power
                                plant in Europe, are under threat.
                            </li>
                            <li>
                                <b>Russia continues to lie to its own people:</b> Young soldiers were told they
                                would be on
                                training missions. Families are left in the dark about the fate of their sons. State
                                media denies there is a war.
                            </li>
                            <li>
                                <b>Ukraine is a democratic country:</b> Russia launched this war on the pretext of
                                getting
                                rid of Nazis in the Ukrainian government. The President Volodymyr Zelenskyy has
                                Jewish heritage, having lost relatives in the Holocaust. He is the head of a freely
                                elected government.
                            </li>
                            <li>
                                <b>Ukraine continues to fight:</b> Putin expected a quick victory, not expecting the
                                resistance and tenacity of the Ukrainian people. Citizens are putting their lives on
                                the line to provide key services and support to their fellow countrymen.
                            </li>
                        </ul>
                    </div>
                </div>

                <img src="/static/big__image_bg.webp" alt="" className={styles.big__image_bg}/>
            </section>
        </>
    )
}