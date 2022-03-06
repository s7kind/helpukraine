import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/main-page.module.scss'

export default function Home() {
    return (<>
            <Head>
                <title>Help Ukraine Online</title>
            </Head>

            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.hero__info}>
                            <h1>Stop Putin Stop War</h1>
                            <p>On February 24, Russia started war with Ukraine. Each passing day brings more death and
                                destruction, with an increasing threat to the world as we know it. With your help, we
                                can
                                stop Putin, end suffering, and avoid global catastrophe.</p>
                            <Link href="/">
                                <a className="button button__red">
                                    <span>How to Help</span>
                                </a>
                            </Link>
                        </div>
                        <img src="/static/hero__image.png" className={styles.hero__image} alt="Help Ukraine"/>
                    </div>
                    <img src="/static/hero__bg.png" className={styles.hero__bg} alt="Help Ukraine"/>
                </section>

                <section className={styles.why}>
                    <div className="container">
                        <h2 className={styles.why__title}>Why should I care?</h2>
                        <div className={styles.why__info}>
                            <p>
                                This crisis doesn’t just affect Ukraine — it is a threat to the free world. With greater
                                territory, Russia will only grow in strength. Russian planes are already threatening
                                Sweden
                                and Finland over NATO membership. It is naive to think Putin will be satisfied with just
                                Ukraine.
                            </p>
                            <p>
                                Then there are nuclear threats on multiple fronts — Putin is already threatening the US
                                and
                                NATO with nuclear weapons, and who knows what he will do if Europe’s largest nuclear
                                power
                                station falls into his hands.
                            </p>
                        </div>
                        <div className={styles.why__big}>
                            <p>With your actions, you can stand up for Ukraine and the very future of the free
                                world.</p>
                            <Link href="/">
                                <a className="button button__blue">
                                    <span>Donate</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className={styles.images__box}>
                    <div className={styles.images__box_item}>
                        <img src="/static/image__box--1.png" alt="Help Ukraine"/>
                    </div>
                    <div className={styles.images__box_item}>
                        <img src="/static/image__box--2.png" alt="Help Ukraine"/>
                    </div>
                    <div className={styles.images__box_item}>
                        <img src="/static/image__box--3.png" alt="Help Ukraine"/>
                    </div>
                    <div className={styles.images__box_item}>
                        <img src="/static/image__box--4.png" alt="Help Ukraine"/>
                    </div>
                </section>

                <section className={styles.trusted}>
                    <div className={styles.trusted__wrap}>
                        <h4 className={styles.trusted__title}>
                            Trusted News Sources
                        </h4>
                        <p>Keep track of the current situation in Ukraine from trusted and verified sources to avoid
                            fake information.</p>
                        <Link href="/">
                            <a className="button button__blue">
                                <span>All trusted sources</span>
                            </a>
                        </Link>
                    </div>
                </section>

                <section className={styles.what__can}>
                    <div className="container">
                        <h2 className={styles.what__can_title}>What you can do</h2>
                        <div className={styles.what__can_box}>

                            <div className={styles.what__can_petition}>
                                <div className={styles.box__wrap}>
                                    <h4 className={styles.box__title}>Sign a petition</h4>
                                    <div className={styles.box__info}>
                                        <p>Go to the government website in your country and sign a petition, urging your
                                            government to provide further support to the Ukrainian government.</p>
                                    </div>
                                    <Link href="/">
                                        <a className="button button__blue">
                                            <span>Sign</span>
                                        </a>
                                    </Link>
                                </div>

                                <img src="/static/petition__image.png" alt="" className={styles.petition__image}/>
                            </div>

                            <div className={styles.what__can_email}>
                                <div className={styles.email__box}>
                                    <p>Letter/email template:</p>
                                    <p>Dear &laquo;NAME&raquo;</p>

                                    <p>On 24 February, Russia started a war with Ukraine. With each passing day, we see
                                        more
                                        civilian deaths, despicable war crimes, and a mounting humanitarian crisis.
                                        Ukraine
                                        does not have the resources to fight back on its own. Only with the help of
                                        strong
                                        democratic countries can Russian aggression be repelled.</p>

                                    <p>We ask that your sign our country up to Boris Johnson’s proposed international
                                        humanitarian coalition, as well as supporting Ukraine in its efforts to provide
                                        for
                                        its own self-defence.</p>

                                    <p>We know that xxxx has provided significant support to Ukraine already. But we
                                        need
                                        to go further with financial assistance, military equipment, humanitarian aid
                                        and
                                        diplomatic efforts to end this war.</p>

                                    <p>The fate of Ukraine and the free world is counting on your actions. Thank you for
                                        your consideration.</p>

                                    <p>Regards,
                                        <br/>
                                        &laquo;NAME&raquo;
                                    </p>
                                </div>
                                <div className={styles.box__wrap}>
                                    <h4 className={styles.box__title}>Write to <br/> your government</h4>
                                    <div className={styles.box__info}>
                                        <p>Write to your local member of parliament or to your country’s leader,
                                            demanding urgent action! Ukraine needs three specific things:</p>
                                        <ul>
                                            <li>Manpower</li>
                                            <li>Weapons and army provisions</li>
                                            <li>Humanitarian corridors for citizens caught up in the fighting</li>
                                        </ul>
                                        <p>You can use our template which addresses these concerns.</p>
                                    </div>
                                    <Link href="/">
                                        <a className="button button__blue">
                                            <span>How to contact your MP</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>


                            <div className={styles.what__can_donate}>
                                <div className={styles.box__wrap}>
                                    <h4 className={styles.box__title}>Donate</h4>
                                    <div className={styles.box__info}>
                                        <p>Russia has spent ≈US$60 billion a year over the last 5 years on its military,
                                            as opposed to ≈US$6 billion a year in Ukraine. The only way Ukraine can
                                            continue fighting is with your help.</p>
                                        <small>No matter the size, every donation helps.</small>
                                    </div>
                                    <Link href="/">
                                        <a className="button button__blue">
                                            <span>Make a donation</span>
                                        </a>
                                    </Link>
                                </div>

                                <img src="/static/donate__image.png" alt="" className={styles.donate__image}/>

                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.big__image}>
                    <div className={styles.container}>
                        <div className={styles.big__image_box}>
                            <ul>
                                <li>
                                    <b>Russian troops are committing war crimes:</b>
                                    <a href="#">Thermobaric bombs</a> have been dropped.
                                    <a href="#">Children have been shot</a> trying to escape with their families.
                                    <a href="#">Six women have died after experiencing sexual violence</a> at the hands
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

                    <img src="/static/big__image_bg.png" alt="" className={styles.big__image_bg}/>
                </section>

                <section className={styles.take__action}>
                    <div className="container">
                        <h2 className={styles.take__action_title}>Take action</h2>
                        <div className={styles.take__action_description}>
                            <p>Want to proudly tell your grandchildren you fought for freedom in a war? <br/>
                                Here are some quick and easy actions you can take from home to help fight for justice
                                and peace.</p>
                        </div>
                        <div className={styles.take__action_box}>
                            <div className={styles.take__action_item}>
                                <h5>Share a message with your friends!</h5>
                                <p>The voices of people around the world are stronger than that of one authoritarian
                                    government. Raise your voice, post on social media, and let people know what is
                                    happening.</p>
                                <div className={styles.take__action_example}>
                                    <p>
                                        <span>Example message:</span> Friends, Ukraine is facing a crisis that threatens
                                        to
                                        destabilize the world as we know it. Luckily, there are loads of ways you can
                                        help. Go to Help Ukraine Online, help fight Putin, and stop the war!
                                    </p>
                                </div>
                            </div>

                            <div className={styles.take__action_item}>
                                <h5>Become an influencer!</h5>
                                <p>Assist Russian influencers in using their voice!
                                    See the list of influencers below and comment on their posts with details of the war
                                    and what is happening.</p>
                                <div className={styles.take__action_example}>
                                    <p>
                                        <span>Example message:</span> Hey name I really enjoy your channel. You are
                                        probably aware of the war in Ukraine. Civilians are being targeted and people
                                        are suffering. Please use your influence to reach out to your followers and let
                                        them know the truth!
                                    </p>
                                    <p className={styles.example_link}><a href="#">List of top Influencers</a></p>
                                </div>
                            </div>

                            <div className={styles.take__action_item}>
                                <h5>Become a Russian tourist <br/>
                                    from your computer!</h5>
                                <p>Through Google Maps, Trip Advisor, and Russian sales websites, you can reach through
                                    the propaganda, letting ordinary people know what their government is doing in their
                                    name.</p>
                                <div className={styles.take__action_example}>
                                    <p className={styles.example_link}><a href="#">See how</a></p>
                                </div>
                            </div>

                            <div className={styles.take__action_item}>
                                <h5>Be YouTube Sleuth!</h5>
                                <p>Russian disinformation is everywhere! Help track down propaganda pages on YouTube and
                                    report them! See how to do it here:</p>
                                <div className={styles.take__action_example}>
                                    <p className={styles.example_link}><a href="#">First Page</a></p>
                                    <p className={styles.example_link}><a href="#">Second Page</a></p>
                                </div>
                            </div>

                            <div className={styles.take__action_item}>
                                <h5>Get swiping on Tinder!</h5>
                                <p>Use Tinder (or another geo-based dating app) and write appropriate information in the
                                    profile description. Be creative! Change your location inside Russia hourly.</p>
                                <div className={styles.take__action_example}>
                                    <p><span>Example profile:</span> Hey! I like hanging out, getting drinks, and did
                                        you know that
                                        Russia is currently raging war against Ukrainian civilians?</p>
                                </div>
                            </div>

                            <div className={styles.take__action_item}>
                                <h5>Play a game!</h5>
                                <p>An army of people around the world are helping to slow the output of Russia’s
                                    misinformation and harmful material through coordinated attacks on offending sites.
                                    You can even do it through playing an online game! Give it a go <a href="#">here</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.more}>
                    <div className="container">
                        <h2 className={styles.more__title}>Want to do more?</h2>
                        <div className={styles.more__box}>
                            <div className={styles.more__item}>
                                <div className={styles.more__item_wrap}>
                                    <h5 className={styles.more__item_title}>
                                        Join the IT Army
                                    </h5>
                                    <div className={styles.more__item_text}>
                                        <p>Ukraine is an IT hotspot, which is bad news for Russia. Thousands of citizens
                                            are
                                            helping to wage war on the Kremlin and state security services from their
                                            computers. The best part is, you can join too!</p>
                                    </div>
                                    <Link href="#">
                                        <a className="button button__blue"><span>Join the Ukrainian IT Army</span></a>
                                    </Link>
                                </div>
                                <div className={styles.more__item_image}>
                                    <img src="/static/more__it.png" alt="Help Ukraine"/>
                                </div>
                            </div>

                            <div className={styles.more__item}>
                                <div className={styles.more__item_wrap}>
                                    <h5 className={styles.more__item_title}>
                                        Join the Ukrainian foreign legion
                                    </h5>
                                    <div className={styles.more__item_text}>
                                        <p>Ukrainian forces are strong, but they can only defend their homeland with
                                            your help! Join the Ukrainian foreign legion and help defend the free
                                            world!</p>
                                    </div>
                                    <Link href="#">
                                        <a className="button button__blue"><span>Join the Ukrainian foreign legion</span></a>
                                    </Link>
                                </div>
                                <div className={styles.more__item_image}>
                                    <img src="/static/more__legion.png" alt="Help Ukraine"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.banner}>
                    <div className={styles.banner__wrap}>
                        <div className={styles.banner__text}>
                            <p>With your actions, you can <span
                                style={{color: '#005BBB'}}>stand up for Ukraine</span> and the very <span
                                style={{color: '#FFD500'}}>future of the free
                                world</span>.</p>
                            <Link href="/">
                                <a className="button button__blue">
                                    <span>Donate</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
