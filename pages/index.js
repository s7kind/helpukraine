import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/main-page.module.scss'

export default function Home() {
    return (<>
        <Head>
            <title>Help Ukraine Online</title>
        </Head>

        <main>
            {/* HERO */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.hero__info}>
                        <h1>Stop Putin Stop War</h1>
                        <p>On February 24, Russia started war with Ukraine. Each passing day brings more death and
                            destruction, with an increasing threat to the world as we know it. With your help, we
                            can stop Putin, end suffering, and avoid global catastrophe.</p>
                        <div className={styles.hero__buttons}>
                            <Link href="/">
                                <a className="button button__red">
                                    <span>Advocate</span>
                                </a>
                            </Link>
                            <Link href="/">
                                <a className="button button__blue">
                                    <span>Donate</span>
                                </a>
                            </Link>
                            <Link href="/">
                                <a className="button button__blue">
                                    <span>Participate online</span>
                                </a>
                            </Link>
                        </div>

                    </div>
                    <img src="/static/hero__image.png" className={styles.hero__image} alt="Help Ukraine"/>
                </div>
                <img src="/static/hero__bg.png" className={styles.hero__bg} alt="Help Ukraine"/>
            </section>
            {/* END HERO */}

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
                                <h4 className={styles.box__title}>Write to your government</h4>
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
                                        as opposed to ≈US$6 billion a year spent in Ukraine. The only way Ukraine
                                        can continue fighting is with your help.</p>
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
                        <p>Want to proudly tell your grandchildren you fought for freedom in a war?
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
                            <div className={styles.take__action_social}>
                                <a href="#">
                                    <svg width="30" height="25" viewBox="0 0 30 25" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_120_396)">
                                            <path
                                                d="M29.9594 3.32149C28.8376 3.81458 27.6476 4.13825 26.4291 4.28172C27.6983 3.527 28.6728 2.33188 29.1317 0.907895C27.9252 1.61824 26.6052 2.11873 25.2286 2.38773C24.1074 1.20258 22.5101 0.461914 20.7421 0.461914C17.3476 0.461914 14.5954 3.19237 14.5954 6.56005C14.5954 7.03807 14.6498 7.50345 14.7545 7.94989C9.64623 7.69549 5.11721 5.26774 2.08557 1.5782C1.5566 2.47887 1.2535 3.52654 1.2535 4.64399C1.2535 6.75976 2.33871 8.62624 3.98788 9.71988C3.0118 9.68955 2.05719 9.42799 1.20376 8.95704C1.20341 8.98258 1.20341 9.00813 1.20341 9.03379C1.20341 11.9885 3.3221 14.4533 6.13384 15.0135C5.22872 15.2577 4.27932 15.2935 3.35815 15.118C4.14025 17.5408 6.41026 19.3038 9.09982 19.3531C6.99623 20.9887 4.34587 21.9636 1.46626 21.9636C0.970054 21.9636 0.480872 21.9347 0 21.8784C2.72011 23.6087 5.95093 24.6183 9.42201 24.6183C20.7278 24.6183 26.9101 15.3258 26.9101 7.26728C26.9101 7.00278 26.9043 6.73979 26.8923 6.47831C28.0957 5.61524 29.1343 4.54624 29.9594 3.32149Z"
                                                fill="#55ACEE"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_120_396">
                                                <rect width="29.9594" height="24.2671" fill="white"
                                                      transform="translate(0 0.366455)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_120_398)">
                                            <path
                                                d="M14.152 0.885254C8.46649 0.885254 6.8037 0.891119 6.48049 0.917932C5.31373 1.01492 4.5877 1.19862 3.79673 1.59243C3.18717 1.89512 2.70643 2.24598 2.23198 2.73782C1.36791 3.63478 0.844226 4.73828 0.654654 6.04999C0.562487 6.68679 0.535674 6.81666 0.530228 10.0693C0.528133 11.1536 0.530228 12.5805 0.530228 14.4944C0.530228 20.1753 0.536512 21.8364 0.563743 22.159C0.658006 23.2943 0.836057 24.0086 1.21311 24.79C1.93369 26.2856 3.30992 27.4084 4.93123 27.8273C5.49262 27.9719 6.11265 28.0515 6.90865 28.0892C7.2459 28.1038 10.6833 28.1143 14.1229 28.1143C17.5624 28.1143 21.0019 28.1101 21.3308 28.0934C22.2525 28.05 22.7877 27.9781 23.3794 27.8252C24.1833 27.6191 24.9326 27.2399 25.5748 26.7142C26.217 26.1885 26.7366 25.5289 27.0975 24.7816C27.4673 24.0191 27.6547 23.2776 27.7396 22.2015C27.758 21.9669 27.7658 18.2264 27.7658 14.4909C27.7658 10.7547 27.7574 7.02111 27.739 6.7865C27.6531 5.69305 27.4656 4.95781 27.0839 4.18067C26.7708 3.5445 26.423 3.06942 25.9182 2.58365C25.0175 1.72314 23.9157 1.19946 22.6025 1.0101C21.9663 0.918141 21.8396 0.89091 18.5844 0.885254H14.152Z"
                                                fill="url(#paint0_radial_120_398)"/>
                                            <path
                                                d="M14.152 0.885254C8.46649 0.885254 6.8037 0.891119 6.48049 0.917932C5.31373 1.01492 4.5877 1.19862 3.79673 1.59243C3.18717 1.89512 2.70643 2.24598 2.23198 2.73782C1.36791 3.63478 0.844226 4.73828 0.654654 6.04999C0.562487 6.68679 0.535674 6.81666 0.530228 10.0693C0.528133 11.1536 0.530228 12.5805 0.530228 14.4944C0.530228 20.1753 0.536512 21.8364 0.563743 22.159C0.658006 23.2943 0.836057 24.0086 1.21311 24.79C1.93369 26.2856 3.30992 27.4084 4.93123 27.8273C5.49262 27.9719 6.11265 28.0515 6.90865 28.0892C7.2459 28.1038 10.6833 28.1143 14.1229 28.1143C17.5624 28.1143 21.0019 28.1101 21.3308 28.0934C22.2525 28.05 22.7877 27.9781 23.3794 27.8252C24.1833 27.6191 24.9326 27.2399 25.5748 26.7142C26.217 26.1885 26.7366 25.5289 27.0975 24.7816C27.4673 24.0191 27.6547 23.2776 27.7396 22.2015C27.758 21.9669 27.7658 18.2264 27.7658 14.4909C27.7658 10.7547 27.7574 7.02111 27.739 6.7865C27.6531 5.69305 27.4656 4.95781 27.0839 4.18067C26.7708 3.5445 26.423 3.06942 25.9182 2.58365C25.0175 1.72314 23.9157 1.19946 22.6025 1.0101C21.9663 0.918141 21.8396 0.89091 18.5844 0.885254H14.152Z"
                                                fill="url(#paint1_radial_120_398)"/>
                                            <path
                                                d="M14.1456 4.44629C11.4149 4.44629 11.0722 4.45823 9.99974 4.50704C8.92934 4.55605 8.1987 4.72552 7.5594 4.97416C6.89809 5.23097 6.33713 5.5745 5.77826 6.13359C5.21897 6.69246 4.87543 7.25342 4.61778 7.91452C4.36851 8.55403 4.19884 9.28488 4.15066 10.3549C4.1029 11.4274 4.09033 11.7703 4.09033 14.5009C4.09033 17.2316 4.10248 17.5733 4.15108 18.6458C4.2003 19.7162 4.36977 20.4468 4.6182 21.0861C4.87522 21.7474 5.21876 22.3084 5.77784 22.8673C6.3365 23.4265 6.89746 23.7709 7.55835 24.0277C8.19808 24.2764 8.92892 24.4458 9.99912 24.4948C11.0716 24.5437 11.4141 24.5556 14.1446 24.5556C16.8755 24.5556 17.2171 24.5437 18.2896 24.4948C19.36 24.4458 20.0915 24.2764 20.7312 24.0277C21.3923 23.7709 21.9524 23.4265 22.5111 22.8673C23.0704 22.3084 23.4139 21.7474 23.6716 21.0863C23.9187 20.4468 24.0884 19.716 24.1387 18.646C24.1869 17.5735 24.1994 17.2316 24.1994 14.5009C24.1994 11.7703 24.1869 11.4276 24.1387 10.3551C24.0884 9.28467 23.9187 8.55403 23.6716 7.91472C23.4139 7.25342 23.0704 6.69246 22.5111 6.13359C21.9518 5.5743 21.3925 5.23076 20.7306 4.97416C20.0896 4.72552 19.3585 4.55605 18.2881 4.50704C17.2156 4.45823 16.8742 4.44629 14.1427 4.44629H14.1456ZM13.2436 6.25822C13.5113 6.2578 13.81 6.25822 14.1456 6.25822C16.8302 6.25822 17.1484 6.26786 18.2085 6.31604C19.1889 6.36086 19.7209 6.52467 20.0753 6.66229C20.5446 6.84453 20.8791 7.06238 21.2308 7.4143C21.5827 7.76621 21.8006 8.10136 21.9832 8.57058C22.1208 8.92459 22.2849 9.45665 22.3295 10.437C22.3776 11.4969 22.3881 11.8153 22.3881 14.4986C22.3881 17.182 22.3776 17.5004 22.3295 18.5603C22.2846 19.5406 22.1208 20.0727 21.9832 20.4267C21.801 20.8959 21.5827 21.23 21.2308 21.5817C20.8789 21.9336 20.5448 22.1515 20.0753 22.3337C19.7213 22.472 19.1889 22.6354 18.2085 22.6802C17.1486 22.7284 16.8302 22.7388 14.1456 22.7388C11.4608 22.7388 11.1426 22.7284 10.0827 22.6802C9.10237 22.6349 8.57031 22.4711 8.21567 22.3335C7.74645 22.1513 7.4113 21.9334 7.05939 21.5815C6.70747 21.2296 6.48962 20.8953 6.30696 20.4259C6.16934 20.0718 6.00532 19.5398 5.96071 18.5595C5.91253 17.4995 5.90289 17.1811 5.90289 14.4961C5.90289 11.8111 5.91253 11.4944 5.96071 10.4345C6.00553 9.45413 6.16934 8.92208 6.30696 8.56765C6.4892 8.09843 6.70747 7.76328 7.05939 7.41136C7.4113 7.05945 7.74645 6.8416 8.21567 6.65894C8.5701 6.52069 9.10237 6.3573 10.0827 6.31227C11.0102 6.27037 11.3697 6.2578 13.2436 6.25571V6.25822ZM19.5127 7.92771C19.274 7.92771 19.0408 7.99849 18.8423 8.13108C18.6439 8.26368 18.4893 8.45214 18.3979 8.67264C18.3066 8.89313 18.2828 9.13575 18.3294 9.36981C18.3759 9.60387 18.4909 9.81886 18.6597 9.98758C18.8285 10.1563 19.0435 10.2712 19.2776 10.3177C19.5116 10.3642 19.7543 10.3403 19.9747 10.2489C20.1952 10.1575 20.3836 10.0028 20.5161 9.80429C20.6486 9.60582 20.7193 9.3725 20.7193 9.13385C20.7193 8.46773 20.1788 7.92729 19.5127 7.92729V7.92771ZM14.1456 9.33746C11.2941 9.33746 8.98213 11.6494 8.98213 14.5009C8.98213 17.3525 11.2941 19.6634 14.1456 19.6634C16.9972 19.6634 19.3085 17.3525 19.3085 14.5009C19.3085 11.6494 16.9969 9.33746 14.1454 9.33746H14.1456ZM14.1456 11.1494C15.9965 11.1494 17.4972 12.6498 17.4972 14.5009C17.4972 16.3518 15.9965 17.8525 14.1456 17.8525C12.2945 17.8525 10.7941 16.3518 10.7941 14.5009C10.7941 12.6498 12.2945 11.1494 14.1456 11.1494Z"
                                                fill="white"/>
                                        </g>
                                        <defs>
                                            <radialGradient id="paint0_radial_120_398" cx="0" cy="0" r="1"
                                                            gradientUnits="userSpaceOnUse"
                                                            gradientTransform="translate(7.76402 30.2115) rotate(-90) scale(26.986 25.1059)">
                                                <stop stopColor="#FFDD55"/>
                                                <stop offset="0.1" stopColor="#FFDD55"/>
                                                <stop offset="0.5" stopColor="#FF543E"/>
                                                <stop offset="1" stopColor="#C837AB"/>
                                            </radialGradient>
                                            <radialGradient id="paint1_radial_120_398" cx="0" cy="0" r="1"
                                                            gradientUnits="userSpaceOnUse"
                                                            gradientTransform="translate(-4.03296 2.84679) rotate(78.6776) scale(12.063 49.7366)">
                                                <stop stopColor="#3771C8"/>
                                                <stop offset="0.128" stopColor="#3771C8"/>
                                                <stop offset="1" stopColor="#6600FF" stopOpacity="0"/>
                                            </radialGradient>
                                            <clipPath id="clip0_120_398">
                                                <rect width="27.2631" height="27.2631" fill="white"
                                                      transform="translate(0.516113 0.868408)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_120_402)">
                                            <path
                                                d="M5.2046 0.167969C2.50758 0.167969 0.335938 2.33961 0.335938 5.03664V21.9632C0.335938 24.6602 2.50758 26.8319 5.2046 26.8319H14.3787V16.408H11.6223V12.655H14.3787V9.44868C14.3787 6.92961 16.0073 4.61668 19.7589 4.61668C21.2779 4.61668 22.4012 4.7625 22.4012 4.7625L22.3128 8.26715C22.3128 8.26715 21.1673 8.25633 19.9172 8.25633C18.5643 8.25633 18.3474 8.87967 18.3474 9.9145V12.655H22.4203L22.2428 16.408H18.3474V26.8319H22.1312C24.8282 26.8319 26.9998 24.6603 26.9998 21.9632V5.03666C26.9998 2.33964 24.8282 0.167995 22.1312 0.167995L5.2046 0.167969Z"
                                                fill="#005BBB"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_120_402">
                                                <rect width="26.6639" height="26.6639" fill="white"
                                                      transform="translate(0.335938 0.167969)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className={styles.take__action_item}>
                            <h5>Become an influencer!</h5>
                            <p>Assist Russian influencers in using their voice!
                                See the list of influencers below and comment on their posts with details of the war
                                and what is happening.</p>
                            <div className={styles.take__action_example}>
                                <p>
                                    <span>Example message:</span> Hey «name» I really enjoy your channel. You are
                                    probably aware of the war in Ukraine. Civilians are being targeted and people
                                    are suffering. Please use your influence to reach out to your followers and let
                                    them know the truth!
                                </p>
                                <p className={styles.example_link}><a href="#">List of top Influencers</a></p>
                            </div>
                            <div className={styles.take__action_social}>
                                <a href="#">
                                    <svg width="30" height="25" viewBox="0 0 30 25" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_120_396)">
                                            <path
                                                d="M29.9594 3.32149C28.8376 3.81458 27.6476 4.13825 26.4291 4.28172C27.6983 3.527 28.6728 2.33188 29.1317 0.907895C27.9252 1.61824 26.6052 2.11873 25.2286 2.38773C24.1074 1.20258 22.5101 0.461914 20.7421 0.461914C17.3476 0.461914 14.5954 3.19237 14.5954 6.56005C14.5954 7.03807 14.6498 7.50345 14.7545 7.94989C9.64623 7.69549 5.11721 5.26774 2.08557 1.5782C1.5566 2.47887 1.2535 3.52654 1.2535 4.64399C1.2535 6.75976 2.33871 8.62624 3.98788 9.71988C3.0118 9.68955 2.05719 9.42799 1.20376 8.95704C1.20341 8.98258 1.20341 9.00813 1.20341 9.03379C1.20341 11.9885 3.3221 14.4533 6.13384 15.0135C5.22872 15.2577 4.27932 15.2935 3.35815 15.118C4.14025 17.5408 6.41026 19.3038 9.09982 19.3531C6.99623 20.9887 4.34587 21.9636 1.46626 21.9636C0.970054 21.9636 0.480872 21.9347 0 21.8784C2.72011 23.6087 5.95093 24.6183 9.42201 24.6183C20.7278 24.6183 26.9101 15.3258 26.9101 7.26728C26.9101 7.00278 26.9043 6.73979 26.8923 6.47831C28.0957 5.61524 29.1343 4.54624 29.9594 3.32149Z"
                                                fill="#55ACEE"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_120_396">
                                                <rect width="29.9594" height="24.2671" fill="white"
                                                      transform="translate(0 0.366455)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_120_398)">
                                            <path
                                                d="M14.152 0.885254C8.46649 0.885254 6.8037 0.891119 6.48049 0.917932C5.31373 1.01492 4.5877 1.19862 3.79673 1.59243C3.18717 1.89512 2.70643 2.24598 2.23198 2.73782C1.36791 3.63478 0.844226 4.73828 0.654654 6.04999C0.562487 6.68679 0.535674 6.81666 0.530228 10.0693C0.528133 11.1536 0.530228 12.5805 0.530228 14.4944C0.530228 20.1753 0.536512 21.8364 0.563743 22.159C0.658006 23.2943 0.836057 24.0086 1.21311 24.79C1.93369 26.2856 3.30992 27.4084 4.93123 27.8273C5.49262 27.9719 6.11265 28.0515 6.90865 28.0892C7.2459 28.1038 10.6833 28.1143 14.1229 28.1143C17.5624 28.1143 21.0019 28.1101 21.3308 28.0934C22.2525 28.05 22.7877 27.9781 23.3794 27.8252C24.1833 27.6191 24.9326 27.2399 25.5748 26.7142C26.217 26.1885 26.7366 25.5289 27.0975 24.7816C27.4673 24.0191 27.6547 23.2776 27.7396 22.2015C27.758 21.9669 27.7658 18.2264 27.7658 14.4909C27.7658 10.7547 27.7574 7.02111 27.739 6.7865C27.6531 5.69305 27.4656 4.95781 27.0839 4.18067C26.7708 3.5445 26.423 3.06942 25.9182 2.58365C25.0175 1.72314 23.9157 1.19946 22.6025 1.0101C21.9663 0.918141 21.8396 0.89091 18.5844 0.885254H14.152Z"
                                                fill="url(#paint0_radial_120_398)"/>
                                            <path
                                                d="M14.152 0.885254C8.46649 0.885254 6.8037 0.891119 6.48049 0.917932C5.31373 1.01492 4.5877 1.19862 3.79673 1.59243C3.18717 1.89512 2.70643 2.24598 2.23198 2.73782C1.36791 3.63478 0.844226 4.73828 0.654654 6.04999C0.562487 6.68679 0.535674 6.81666 0.530228 10.0693C0.528133 11.1536 0.530228 12.5805 0.530228 14.4944C0.530228 20.1753 0.536512 21.8364 0.563743 22.159C0.658006 23.2943 0.836057 24.0086 1.21311 24.79C1.93369 26.2856 3.30992 27.4084 4.93123 27.8273C5.49262 27.9719 6.11265 28.0515 6.90865 28.0892C7.2459 28.1038 10.6833 28.1143 14.1229 28.1143C17.5624 28.1143 21.0019 28.1101 21.3308 28.0934C22.2525 28.05 22.7877 27.9781 23.3794 27.8252C24.1833 27.6191 24.9326 27.2399 25.5748 26.7142C26.217 26.1885 26.7366 25.5289 27.0975 24.7816C27.4673 24.0191 27.6547 23.2776 27.7396 22.2015C27.758 21.9669 27.7658 18.2264 27.7658 14.4909C27.7658 10.7547 27.7574 7.02111 27.739 6.7865C27.6531 5.69305 27.4656 4.95781 27.0839 4.18067C26.7708 3.5445 26.423 3.06942 25.9182 2.58365C25.0175 1.72314 23.9157 1.19946 22.6025 1.0101C21.9663 0.918141 21.8396 0.89091 18.5844 0.885254H14.152Z"
                                                fill="url(#paint1_radial_120_398)"/>
                                            <path
                                                d="M14.1456 4.44629C11.4149 4.44629 11.0722 4.45823 9.99974 4.50704C8.92934 4.55605 8.1987 4.72552 7.5594 4.97416C6.89809 5.23097 6.33713 5.5745 5.77826 6.13359C5.21897 6.69246 4.87543 7.25342 4.61778 7.91452C4.36851 8.55403 4.19884 9.28488 4.15066 10.3549C4.1029 11.4274 4.09033 11.7703 4.09033 14.5009C4.09033 17.2316 4.10248 17.5733 4.15108 18.6458C4.2003 19.7162 4.36977 20.4468 4.6182 21.0861C4.87522 21.7474 5.21876 22.3084 5.77784 22.8673C6.3365 23.4265 6.89746 23.7709 7.55835 24.0277C8.19808 24.2764 8.92892 24.4458 9.99912 24.4948C11.0716 24.5437 11.4141 24.5556 14.1446 24.5556C16.8755 24.5556 17.2171 24.5437 18.2896 24.4948C19.36 24.4458 20.0915 24.2764 20.7312 24.0277C21.3923 23.7709 21.9524 23.4265 22.5111 22.8673C23.0704 22.3084 23.4139 21.7474 23.6716 21.0863C23.9187 20.4468 24.0884 19.716 24.1387 18.646C24.1869 17.5735 24.1994 17.2316 24.1994 14.5009C24.1994 11.7703 24.1869 11.4276 24.1387 10.3551C24.0884 9.28467 23.9187 8.55403 23.6716 7.91472C23.4139 7.25342 23.0704 6.69246 22.5111 6.13359C21.9518 5.5743 21.3925 5.23076 20.7306 4.97416C20.0896 4.72552 19.3585 4.55605 18.2881 4.50704C17.2156 4.45823 16.8742 4.44629 14.1427 4.44629H14.1456ZM13.2436 6.25822C13.5113 6.2578 13.81 6.25822 14.1456 6.25822C16.8302 6.25822 17.1484 6.26786 18.2085 6.31604C19.1889 6.36086 19.7209 6.52467 20.0753 6.66229C20.5446 6.84453 20.8791 7.06238 21.2308 7.4143C21.5827 7.76621 21.8006 8.10136 21.9832 8.57058C22.1208 8.92459 22.2849 9.45665 22.3295 10.437C22.3776 11.4969 22.3881 11.8153 22.3881 14.4986C22.3881 17.182 22.3776 17.5004 22.3295 18.5603C22.2846 19.5406 22.1208 20.0727 21.9832 20.4267C21.801 20.8959 21.5827 21.23 21.2308 21.5817C20.8789 21.9336 20.5448 22.1515 20.0753 22.3337C19.7213 22.472 19.1889 22.6354 18.2085 22.6802C17.1486 22.7284 16.8302 22.7388 14.1456 22.7388C11.4608 22.7388 11.1426 22.7284 10.0827 22.6802C9.10237 22.6349 8.57031 22.4711 8.21567 22.3335C7.74645 22.1513 7.4113 21.9334 7.05939 21.5815C6.70747 21.2296 6.48962 20.8953 6.30696 20.4259C6.16934 20.0718 6.00532 19.5398 5.96071 18.5595C5.91253 17.4995 5.90289 17.1811 5.90289 14.4961C5.90289 11.8111 5.91253 11.4944 5.96071 10.4345C6.00553 9.45413 6.16934 8.92208 6.30696 8.56765C6.4892 8.09843 6.70747 7.76328 7.05939 7.41136C7.4113 7.05945 7.74645 6.8416 8.21567 6.65894C8.5701 6.52069 9.10237 6.3573 10.0827 6.31227C11.0102 6.27037 11.3697 6.2578 13.2436 6.25571V6.25822ZM19.5127 7.92771C19.274 7.92771 19.0408 7.99849 18.8423 8.13108C18.6439 8.26368 18.4893 8.45214 18.3979 8.67264C18.3066 8.89313 18.2828 9.13575 18.3294 9.36981C18.3759 9.60387 18.4909 9.81886 18.6597 9.98758C18.8285 10.1563 19.0435 10.2712 19.2776 10.3177C19.5116 10.3642 19.7543 10.3403 19.9747 10.2489C20.1952 10.1575 20.3836 10.0028 20.5161 9.80429C20.6486 9.60582 20.7193 9.3725 20.7193 9.13385C20.7193 8.46773 20.1788 7.92729 19.5127 7.92729V7.92771ZM14.1456 9.33746C11.2941 9.33746 8.98213 11.6494 8.98213 14.5009C8.98213 17.3525 11.2941 19.6634 14.1456 19.6634C16.9972 19.6634 19.3085 17.3525 19.3085 14.5009C19.3085 11.6494 16.9969 9.33746 14.1454 9.33746H14.1456ZM14.1456 11.1494C15.9965 11.1494 17.4972 12.6498 17.4972 14.5009C17.4972 16.3518 15.9965 17.8525 14.1456 17.8525C12.2945 17.8525 10.7941 16.3518 10.7941 14.5009C10.7941 12.6498 12.2945 11.1494 14.1456 11.1494Z"
                                                fill="white"/>
                                        </g>
                                        <defs>
                                            <radialGradient id="paint0_radial_120_398" cx="0" cy="0" r="1"
                                                            gradientUnits="userSpaceOnUse"
                                                            gradientTransform="translate(7.76402 30.2115) rotate(-90) scale(26.986 25.1059)">
                                                <stop stopColor="#FFDD55"/>
                                                <stop offset="0.1" stopColor="#FFDD55"/>
                                                <stop offset="0.5" stopColor="#FF543E"/>
                                                <stop offset="1" stopColor="#C837AB"/>
                                            </radialGradient>
                                            <radialGradient id="paint1_radial_120_398" cx="0" cy="0" r="1"
                                                            gradientUnits="userSpaceOnUse"
                                                            gradientTransform="translate(-4.03296 2.84679) rotate(78.6776) scale(12.063 49.7366)">
                                                <stop stopColor="#3771C8"/>
                                                <stop offset="0.128" stopColor="#3771C8"/>
                                                <stop offset="1" stopColor="#6600FF" stopOpacity="0"/>
                                            </radialGradient>
                                            <clipPath id="clip0_120_398">
                                                <rect width="27.2631" height="27.2631" fill="white"
                                                      transform="translate(0.516113 0.868408)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_120_402)">
                                            <path
                                                d="M5.2046 0.167969C2.50758 0.167969 0.335938 2.33961 0.335938 5.03664V21.9632C0.335938 24.6602 2.50758 26.8319 5.2046 26.8319H14.3787V16.408H11.6223V12.655H14.3787V9.44868C14.3787 6.92961 16.0073 4.61668 19.7589 4.61668C21.2779 4.61668 22.4012 4.7625 22.4012 4.7625L22.3128 8.26715C22.3128 8.26715 21.1673 8.25633 19.9172 8.25633C18.5643 8.25633 18.3474 8.87967 18.3474 9.9145V12.655H22.4203L22.2428 16.408H18.3474V26.8319H22.1312C24.8282 26.8319 26.9998 24.6603 26.9998 21.9632V5.03666C26.9998 2.33964 24.8282 0.167995 22.1312 0.167995L5.2046 0.167969Z"
                                                fill="#005BBB"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_120_402">
                                                <rect width="26.6639" height="26.6639" fill="white"
                                                      transform="translate(0.335938 0.167969)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
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
                            <div className={styles.take__action_social}>
                                <a href="#">
                                    <svg width="22" height="33" viewBox="0 0 22 33" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.06592 24.4456C6.97808 25.6618 7.80826 26.943 8.55046 28.2799C9.18416 29.5371 9.44833 30.3896 9.91145 31.9045C10.1955 32.7414 10.4522 32.9912 11.0041 32.9912C11.6055 32.9912 11.8783 32.5663 12.0891 31.9091C12.5269 30.4785 12.8704 29.3867 13.4123 28.3551C14.4757 26.3634 15.7971 24.5935 17.0954 22.8925C17.4469 22.4111 19.7194 19.6065 20.7425 17.3935C20.7425 17.3935 21.9999 14.9625 21.9999 11.5675C21.9999 8.39176 20.7599 6.18921 20.7599 6.18921L17.1896 7.18964L15.0214 13.1648L14.485 13.9887L14.3777 14.138L14.2351 14.3248L13.9846 14.6233L13.6268 14.9976L11.696 16.6435L6.86892 19.5597L6.06592 24.4456Z"
                                            fill="#34A853"/>
                                        <path
                                            d="M1.08398 16.9849C2.2621 19.8005 4.53395 22.2756 6.07102 24.4476L14.2352 14.3288C14.2352 14.3288 13.085 15.9027 10.9986 15.9027C8.67459 15.9027 6.79711 13.9609 6.79711 11.5124C6.79711 9.8334 7.76253 8.67993 7.76253 8.67993L2.22051 10.2337L1.08398 16.9848V16.9849Z"
                                            fill="#FBBC04"/>
                                        <path
                                            d="M14.3264 0.520354C17.0378 1.43509 19.3587 3.35548 20.7625 6.18727L14.2377 14.3229C14.2377 14.3229 15.2031 13.1486 15.2031 11.4799C15.2031 8.97447 13.1867 7.10273 11.0085 7.10273C8.94864 7.10273 7.76562 8.67405 7.76562 8.67405V3.54871L14.3264 0.520264V0.520354Z"
                                            fill="#4285F4"/>
                                        <path
                                            d="M2.57959 4.11511C4.19908 2.08772 7.04877 0 10.9775 0C12.8836 0 14.3196 0.523594 14.3196 0.523594L7.75947 8.67855H3.11154L2.57959 4.1152V4.11511Z"
                                            fill="#1A73E8"/>
                                        <path
                                            d="M1.08384 16.9847C1.08384 16.9847 0 14.7639 0 11.5466C0 8.50588 1.12973 5.8479 2.57941 4.11499L7.76299 8.67915L1.08384 16.9847Z"
                                            fill="#EA4335"/>
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="41" height="25" viewBox="0 0 41 25" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_120_375)">
                                            <path
                                                d="M20.4491 0.0270996C15.09 0.0270996 10.2482 1.41566 6.42986 3.98266L0.00683594 3.98867C0.00683594 3.98867 1.52235 6.07001 2.01412 8.16901C0.762765 9.91994 0.0119519 12.0731 0.0119519 14.4089C0.0119519 20.2278 4.61548 24.9539 10.2731 24.9539C13.5054 24.9539 16.3877 23.4109 18.2708 21.0017L20.4527 24.3577L22.6562 20.9732C23.6567 22.2854 24.9479 23.3321 26.422 24.0258C28.9137 25.2039 31.7 25.3189 34.2706 24.3446C39.5793 22.3286 42.3012 16.2463 40.3411 10.7898C40.0025 9.84885 39.5339 8.96303 38.9498 8.15962C39.4335 6.04708 40.9669 3.9383 40.9669 3.9383L34.1223 3.93341C30.2824 1.38145 25.6167 0.0270996 20.4483 0.0270996H20.4491Z"
                                                fill="#000A12"/>
                                            <path
                                                d="M30.3891 3.90575C29.2863 3.93768 28.1958 4.15283 27.1597 4.54289C24.588 5.5221 22.542 7.46999 21.3955 10.0321C20.8774 11.188 20.5844 12.41 20.4912 13.6396C20.1101 8.24923 15.7861 3.97303 10.4756 3.86515C13.4138 2.57207 16.7883 1.86914 20.447 1.86914C24.1298 1.86914 27.4546 2.55214 30.3895 3.90575"
                                                fill="#FCC40F"/>
                                            <path
                                                d="M10.2732 5.98438C5.75804 5.98438 2.08398 9.76251 2.08398 14.409C2.08398 19.0505 5.75841 22.829 10.2732 22.829C14.7853 22.829 18.4587 19.0502 18.4587 14.409C18.4587 9.76251 14.7857 5.98438 10.2732 5.98438ZM30.1447 6.02196C29.1852 6.02416 28.2336 6.20053 27.3336 6.54296C26.3233 6.92326 25.3962 7.506 24.6063 8.25744C23.8163 9.00888 23.1791 9.91409 22.7316 10.9206C22.2797 11.9247 22.0257 13.011 21.9843 14.1167C21.9429 15.2224 22.1149 16.3255 22.4904 17.3624V17.3639C22.8594 18.4028 23.4252 19.356 24.155 20.1681C24.8849 20.9803 25.7643 21.6352 26.7421 22.0949C27.7179 22.5617 28.7739 22.8248 29.8491 22.8689C30.9243 22.913 31.9974 22.7373 33.0062 22.352C37.2414 20.7383 39.4146 15.8821 37.8523 11.5288C36.6306 8.12322 33.483 6.01445 30.1447 6.02196Z"
                                                fill="white"/>
                                            <path
                                                d="M10.1454 9.104C7.34858 9.104 5.07422 11.4425 5.07422 14.3143C5.07422 17.1877 7.34858 19.5276 10.1454 19.5276C12.9349 19.5276 15.2056 17.1877 15.2056 14.3143C15.2056 11.4425 12.9349 9.104 10.1454 9.104ZM30.6954 9.104C27.9012 9.104 25.6279 11.4425 25.6279 14.3143C25.6279 17.1877 27.9012 19.5276 30.6954 19.5276C33.4875 19.5276 35.7589 17.1877 35.7589 14.3143C35.7589 11.4425 33.4875 9.104 30.6951 9.104H30.6954Z"
                                                fill="#000A12"/>
                                            <path
                                                d="M10.1456 10.8989C8.31037 10.8989 6.81787 12.4315 6.81787 14.3143C6.81787 16.1979 8.31037 17.7342 10.1456 17.7342C11.9724 17.7342 13.4601 16.1979 13.4601 14.3143C13.4601 12.4315 11.9724 10.8989 10.1456 10.8989ZM30.6956 10.8989C28.864 10.8989 27.3737 12.4315 27.3737 14.3143C27.3737 16.1979 28.8644 17.7342 30.6956 17.7342C32.5257 17.7342 34.0138 16.1979 34.0138 14.3143C34.0138 12.4315 32.5257 10.8989 30.6956 10.8989Z"
                                                fill="white"/>
                                            <path
                                                d="M11.8425 14.3133C11.8419 14.7784 11.6622 15.2243 11.3426 15.5533C11.0231 15.8823 10.5898 16.0675 10.1378 16.0684C9.68548 16.0681 9.25183 15.8831 8.9321 15.554C8.61237 15.2249 8.43271 14.7787 8.43262 14.3133C8.43917 13.8526 8.62169 13.413 8.94071 13.0895C9.25974 12.766 9.68966 12.5847 10.1376 12.5847C10.5855 12.5847 11.0154 12.766 11.3344 13.0895C11.6534 13.413 11.836 13.8526 11.8425 14.3133Z"
                                                fill="#EF6A45"/>
                                            <path
                                                d="M30.696 12.5603C30.4721 12.5601 30.2504 12.6053 30.0435 12.6933C29.8367 12.7814 29.6487 12.9106 29.4905 13.0736C29.3323 13.2365 29.2069 13.43 29.1214 13.6429C29.036 13.8558 28.9922 14.0839 28.9927 14.3142C28.9925 14.5445 29.0364 14.7726 29.1219 14.9854C29.2074 15.1983 29.3328 15.3917 29.491 15.5546C29.6492 15.7176 29.837 15.8469 30.0438 15.9351C30.2505 16.0234 30.4721 16.0688 30.696 16.0689C31.1421 16.0594 31.5668 15.8704 31.8791 15.5425C32.1913 15.2145 32.3662 14.7737 32.3662 14.3146C32.3662 13.8555 32.1913 13.4147 31.8791 13.0868C31.5668 12.7588 31.1421 12.5698 30.696 12.5603Z"
                                                fill="#00B087"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_120_375">
                                                <rect width="41" height="25" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className={styles.take__action_item}>
                            <h5>Be YouTube Sleuth!</h5>
                            <p>Russian disinformation is everywhere! Help track down propaganda pages on YouTube and
                                report them! See how to do it here:</p>
                            <div className={styles.take__action_example}>
                                <p className={styles.example_link}><a href="#">Guides</a></p>
                            </div>
                        </div>

                        <div className={styles.take__action_item}>
                            <h5>Get swiping on Tinder!</h5>
                            <p>Use Tinder (or another geo-based dating app) and write appropriate information in the
                                profile description. Be creative! Change your location inside Russia hourly.</p>
                            <div className={styles.take__action_example}>
                                <p><span>Example profile:</span> Hey! I like hanging out, getting drinks, and did
                                    you know that Russia is currently raging war against Ukrainian civilians?</p>
                            </div>
                        </div>

                        <div className={styles.take__action_item}>
                            <h5>Play a game!</h5>
                            <p>
                                An army of people around the world are helping to slow the output of Russia’s
                                misinformation and harmful material through coordinated attacks on offending sites.
                                You can even do it through playing an online game! Give it a go here:
                            </p>
                            <div className={styles.take__action_example}>
                                <p className={styles.example_link}><a href="#">Play</a></p>
                            </div>
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
                                        are helping to wage war on the Kremlin and its corrupt state security
                                        services from their computers. The best part is, you can join too!</p>
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
                                        your help! Be 1 of the 20,000 who have already joined the Ukrainian Foreign
                                        Legion and are fighting to defend the free world!</p>
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
                        Learn more
                    </h4>
                    <p>Stay up to date with Russia’s war against Ukraine via these trusted and verified sources.</p>
                    <Link href="/">
                        <a className="button button__blue">
                            <span>All trusted sources</span>
                        </a>
                    </Link>
                </div>
            </section>

            <section className={styles.banner}>
                <div className="container">
                    <div className={styles.banner__text}>
                        <p>With your actions, you can stand up for Ukraine and the very future of democracy.</p>
                        <Link href="/">
                            <a className="button button__blue">
                                <span>Donate</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    </>);
}
