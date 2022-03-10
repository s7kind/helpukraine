import Head from 'next/head'
import React, {useState} from "react";
import Link from 'next/link'
import styles from '../styles/take-action.module.scss'
import action from "../styles/main-page.module.scss";
import Slider from "../components/Take action/Slider";


export default function TakeAction() {
    const [popup, setPopup] = useState(false);
    const [text, setMsg] = useState('');

    const handlePopup = (event ,msg) => {
        event.preventDefault();
        setPopup(!popup);
        setMsg(msg);
    }
    return (
        <>
            <Head>
                <title>Help Ukraine Online - Take Action</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.main__header_action}>
                    <div className={styles.container}>
                        <h1>Fight for Ukraine — every action helps</h1>
                        <p>You can fight Putin from the comfort of your own home, with every action you take saving
                            lives.
                            Leave restaurant reviews, use Tinder, speak with Russians. We’ll show you how you can do
                            it.</p>
                        <div className={styles.main__header_action__wrapp_social}>
                            <Link href="#">
                                <a>
                                    <img src="/take-action/icons/Subtract-1.svg" alt=""/>
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img src="/take-action/icons/Subtract.svg" alt=""/>
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img src="/take-action/icons/bxl_instagram-alt.svg" alt=""/>
                                </a>
                            </Link>
                        </div>

                    </div>
                </section>

                <section className={styles.main__section_act}>
                    <div className={styles.container}>
                        <h2>Choose your weapon</h2>
                        <div className={action.take__action_box}>
                            <div className={action.take__action_item}>
                                <div className={styles.main__section_act__take__action_social}>
                                    <a href="https://www.google.com/maps/" target="_blank">
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
                                </div>
                                <h3>Take a Trip through Russia </h3>
                                <span className={styles.main__section_act__subtitle}>(it will be a while before the next one)</span>
                                <p className={styles.main__section_act__text}>Open Google Maps and go to Russia (use a
                                    VPN if you have one). Find a business and
                                    write a 5-star review to any tourist attractions or public institutions, posting
                                    pictures about the war. We recommend the cities of Perm, Ufa, Vladivostok and
                                    Arkhangelsk. You can be a bit cheeky with your words too! Here are some good
                                    examples:</p>
                                <div className={action.take__action_example}>
                                    <p className={action.example_link}>
                                        <a onClick={(event) => handlePopup(event, 'Russia invaded Ukraine and Russian troops are shooting civilians. Russian soldier activate vacuum bombs and utilize carpet bombing tactics in residential areas. They do not allow green corridors and shell trucks that are carrying humanitarian aid.')} href="#">Example Message [EN]</a>
                                    </p>
                                    <p className={action.example_link}><a onClick={(event) => handlePopup(event, 'Россия начала войну в Украине, и российские войска расстреливают мирных жителей. Русские солдаты используют тактику ковровой бомбардировки жилых районах. Они мешают созданию зеленых коридоры и обстреливают грузовики с гуманитарной помощью.')} href="#">Example message [RU]</a></p>
                                </div>

                            </div>

                            <div className={action.take__action_item}>
                                <div className={styles.main__section_act__take__action_social}>
                                    <a href="https://www.avito.ru/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36"
                                             viewBox="0 0 35 36" fill="none">
                                            <path
                                                d="M25.5388 35.5004C30.764 35.5004 34.9999 31.2645 34.9999 26.0393C34.9999 20.814 30.764 16.5781 25.5388 16.5781C20.3135 16.5781 16.0776 20.814 16.0776 26.0393C16.0776 31.2645 20.3135 35.5004 25.5388 35.5004Z"
                                                fill="#97CF26"/>
                                            <path
                                                d="M7.77083 30.4294C10.1956 30.4294 12.1613 28.4637 12.1613 26.0389C12.1613 23.6141 10.1956 21.6484 7.77083 21.6484C5.34605 21.6484 3.38037 23.6141 3.38037 26.0389C3.38037 28.4637 5.34605 30.4294 7.77083 30.4294Z"
                                                fill="#A169F7"/>
                                            <path
                                                d="M25.5387 14.3518C28.897 14.3518 31.6194 11.6294 31.6194 8.27111C31.6194 4.91284 28.897 2.19043 25.5387 2.19043C22.1804 2.19043 19.458 4.91284 19.458 8.27111C19.458 11.6294 22.1804 14.3518 25.5387 14.3518Z"
                                                fill="#FF6163"/>
                                            <path
                                                d="M7.77091 16.0418C12.0627 16.0418 15.5418 12.5627 15.5418 8.2709C15.5418 3.97915 12.0627 0.5 7.77091 0.5C3.47915 0.5 0 3.97915 0 8.2709C0 12.5627 3.47915 16.0418 7.77091 16.0418Z"
                                                fill="#00AAFF"/>
                                        </svg>
                                    </a>

                                </div>
                                <h3>Sell something fake on a Russian website!</h3>
                                <p className={styles.main__section_act__text}>Go to one of the websites for sellers
                                    listed below. Create an account and advertise a
                                    product; TV, washing machine, car, get creative! In the product description, explain
                                    what is happening in Ukraine. For the product picture, use one of the photos we have
                                    supplied below (or similar).</p>
                                <div className={action.take__action_example}>
                                    <p className={action.example_link}><a onClick={(event) => handlePopup(event, 'Russian soldiers have killed over 350 civilians in the first nine days of the Russian invasion of Ukraine. They used indiscriminate weapons and destroyed the critical infrastructure of the cities. ')} href="#">Example Message [EN]</a></p>
                                    <p className={action.example_link}><a onClick={(event) => handlePopup(event, 'Российские солдаты убили более 350 мирных жителей за первые девять дней вторжения в Украину. Они применяли неизбирательное оружие и уничтожали фундаментальную инфраструктуру городов.')} href="#">Example message [RU]</a></p>
                                </div>
                            </div>

                            <div className={action.take__action_item}>
                                <div className={styles.main__section_act__take__action_social}>
                                    <a href="https://www.tripadvisor.com/" target="_blank">
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
                                <h3>Write some restaurant reviews
                                    on Trip Advisor!</h3>
                                <p className={styles.main__section_act__text}>Find a restaurant in Russia on Trip
                                    Advisor. Be courteous, leave a 5 star review, and
                                    explain what is happening in Ukraine at this time.</p>
                                <div className={action.take__action_example}>
                                    <p>
                                        <span>Example message:</span> Friends, Ukraine is facing a crisis that threatens
                                        to destabilize the world as we know it. Luckily, there are loads of ways you can
                                        help. Go to Help Ukraine Online, help fight Putin, and stop the war!
                                    </p>
                                </div>
                                <div className={action.take__action_example}>
                                    <p className={action.example_link}><a onClick={(event) => handlePopup(event, 'Russian troops are committing crimes against humanity, democracy, and peace in Ukraine. They have killed more than 350 civilians, including women and children in the first 9 days of the war.')} href="#">Example Message [EN]</a></p>
                                    <p className={action.example_link}><a onClick={(event) => handlePopup(event, 'Российские войска совершают преступления против человечества, демократии и мира. За первые 9 дней войны они убили более 350 мирных жителей, в том числе женщин и детей. ')} href="#">Example message [RU]</a></p>
                                </div>


                            </div>

                            <div className={action.take__action_item}>
                                <div className={styles.main__section_act__take__action_social}>
                                    <a href="https://tinder.com/" target="_blank">
                                        <svg width="29" height="34" viewBox="0 0 29 34" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.7 13.7248C8.65029 13.7248 8.61714 13.7248 8.584 13.691C7.45714 12.1697 7.17543 9.54975 7.10914 8.55247C7.09257 8.35808 6.87714 8.25667 6.71143 8.34963C3.23143 10.3357 0 15.0517 0 19.5986C0 27.4332 5.32771 34 14.5 34C23.0923 34 29 27.2388 29 19.6071C29 9.62581 22.0151 3.01672 15.7926 0.0248854C15.6269 -0.0596299 15.4446 0.084046 15.4611 0.261528C16.2731 5.64515 15.1629 11.4851 8.69171 13.7417L8.7 13.7248Z"
                                                fill="url(#paint0_radial_217_51)"/>
                                            <defs>
                                                <radialGradient id="paint0_radial_217_51" cx="0" cy="0" r="1"
                                                                gradientUnits="userSpaceOnUse"
                                                                gradientTransform="translate(14.5 34) scale(29 34)">
                                                    <stop stopColor="#FF7854"/>
                                                    <stop offset="1" stopColor="#FD267D"/>
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                                <h3>Get swiping on Tinder!</h3>
                                <p className={styles.main__section_act__text}>Use Tinder (or another geo-based dating
                                    app) and write appropriate information in the
                                    profile description. Change your location inside Russia hourly. And use this photo
                                    next to your sexiest pics, it tells Russians the true story!</p>
                                <div className={action.take__action_example}>
                                    <p className={action.example_link}><a onClick={(event) => handlePopup(event, 'Russia invaded Ukraine and Russian troops are shooting civilians. Russian soldiershey activate vacuum bombs and utilize carpet bombimg tactics in residential areas. They do not allow green corridors and shell trucks that are carrying humanitarian aid.')} href="#">Example Message [EN]</a></p>
                                    <p className={action.example_link}><a onClick={(event) => handlePopup(event, ' Россия начала войну в Украине, и российские войска расстреливают мирных жителей. Русские солдаты используют тактику ковровой бомбардировки жилых районах. Они мешают созданию зеленых коридоры и обстреливают грузовики с гуманитарной помощью.')} href="#">Example message [RU]</a></p>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                <Slider/>
                <section className={styles.main__section_photo}>
                    <div className={styles.main__section_photo__wrapp_photo}>
                        <img src="/take-action/Mask%20group.jpg" alt=""/>
                        <img src="/take-action/Mask%20group-1.jpg" alt=""/>
                        <img src="/take-action/Mask%20group-2.jpg" alt=""/>
                        <img src="/take-action/Mask%20group-3.jpg" alt=""/>
                    </div>
                </section>

                <section className={styles.main__section_tips}>
                    <div className={styles.container}>
                        <h2>Tips for posting</h2>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.main__section_tips__line}>
                            <div className={styles.main__section_tips__line__text}>
                                <h3>If you have a VPN</h3>
                                <p>Vary your words, and be careful. Do not leave any personal information (using a new
                                    account is a great option for privacy reasons) and consider to vary the text
                                    templates provided below (otherwise they can be easily filtered automatically).</p>
                            </div>
                            <div className={styles.main__section_tips__line__image_right}>
                                <img src="/take-action/Group%2010.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.container_left}>
                        <div className={styles.main__section_tips__line}>
                            <div className={styles.main__section_tips__line__image_left_absolute}>
                                <img src="/take-action/Photo_group.png" alt=""/>
                            </div>
                            <div className={styles.main__section_tips__line__text}>
                                <h3>Use Photos</h3>
                                <p>It is also worth adding images of your “trip” to the location too, in case they start
                                    censoring keywords from false reviews. Harder to do with images! Even just a
                                    screenshot of text will do. We've posted some in an album below.</p>
                                <span className={styles.main__section_tips__line__text__button_padding}>
                                <Link href="https://drive.google.com/drive/folders/19PoE_TMoxwcCARXl9BHWcjaN__MdUOu5">
                                    <a className="button button__blue">
                                        <span>Download pictures</span>
                                    </a>
                                </Link>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.main__section_tips__line}>
                            <div className={styles.main__section_tips__line__text}>
                                <h3>Use Yandex</h3>
                                <p>As an alternative to Google or Instagram, Russians use Yandex. Feel free to create an
                                    account there. Again, consider using a different name.</p>
                            </div>
                            <div className={styles.main__section_tips__line__image_right}>
                                <img src="/take-action/Group 9.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.main__section_tips__line}>
                            <div className={styles.main__section_tips__line__image_left}>
                                <img src="/take-action/Group 8.png" alt=""/>
                            </div>
                            <div className={styles.main__section_tips__line__text}>
                                <h3>Use Orbot</h3>
                                <p>You can also disguise your handy/tablet network with the 'Orbot' app so that your
                                    phone thinks you are in Russia. You can also access Russian groups and leave
                                    Ukrainian news via Telegram.</p>
                                <span className={styles.main__section_tips__line__text__button_padding}>
                                <Link
                                    href="https://play.google.com/store/apps/details?id=org.torproject.android&hl=ru&gl=US">
                                    <a className="button button__blue">
                                        <span>Download Orbot</span>
                                    </a>
                                </Link>
                                </span>
                            </div>

                        </div>
                    </div>
                </section>

                <section className={styles.main__section_learn_more}>
                    <div className={styles.container}>
                        <h3>Learn more</h3>
                        <p>Stay up to date with Russia’s war against Ukraine via these trusted and verified sources.</p>
                        <span className={styles.main__section_learn_more__button}>
                        <Link
                            href="/trusted-sources">
                            <a className="button button__blue">
                                <span>All trusted sources</span>
                            </a>
                        </Link>
                        </span>
                    </div>
                </section>

                <section>
                    <div className={styles.main__section_photo__wrapp_photo}>
                        <img src="/take-action/Mask%20group(1).jpg" alt=""/>
                        <img src="/take-action/Mask%20group-1(1).jpg" alt=""/>
                        <img src="/take-action/Mask%20group-2(1).jpg" alt=""/>
                        <img src="/take-action/Mask%20group-3(1).jpg" alt=""/>
                    </div>
                </section>

            </main>

            <div className={`popup ${popup === true ? 'active' : ''}`} style={{zIndex: '156'}}>
                <div className="popup__wrap">
                    <div className="popup__close" onClick={(event) => handlePopup(event)}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L26 26" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M26 6L6 26" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className="popup__info">
                        <div className={action.take__action_info}>
                            <div className={action.take__action_info_box}>
                                <h2 className={action.take__action_title} style={{textAlign: 'left'}}>Example</h2>
                                <p className="popup-msg" style={{lineHeight: '1.5'}}>{text}</p>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
