import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/take-action.module.scss'
import React, {useState, useCallback} from "react";
import Gallery from "react-photo-gallery-next"
import Carousel, {Modal, ModalGateway} from "react-images"
import action from "../styles/main-page.module.scss";


export default function RussianWarCrimes() {

    const [popup, setPopup] = useState(true);
    const [text, setMsg] = useState('');

    const handlePopup = (event, msg) => {
        event.preventDefault();
        setPopup(!popup);
        setMsg(msg);
    }

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, {photo, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const meta = {
        "title": "Evidence of Russian war crimes in Ukraine",
        "description": "More evidence is coming to light of war crimes committed by Russian forces in civilian areas of Ukraine. Although it is hard to watch, the world needs to see this footage.",
        "og:image": "https://scontent.flwo5-1.fna.fbcdn.net/v/t39.30808-6/277757745_344009057764824_1250859348883603651_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=0et5kUgtO-oAX-NjXBi&_nc_ht=scontent.flwo5-1.fna&oh=00_AT8dS0G4HTsaUXBkCgQ6xZ5mHykB3o7Ts5Xlwjfj770OCw&oe=625377EA"
    }

    const photos = [
        {
            src: '/static/big__image_bg.webp',
            width: 4,
            height: 4
        },
        {
            src: '/static/big__image_bg.webp',
            width: 4,
            height: 4
        },
        {
            src: '/static/big__image_bg.webp',
            width: 4,
            height: 4
        },
        {
            src: '/static/big__image_bg.webp',
            width: 4,
            height: 4
        },
        {
            src: '/static/big__image_bg.webp',
            width: 4,
            height: 4
        },
        {
            src: '/static/big__image_bg.webp',
            width: 4,
            height: 4
        },
        {
            src: '/static/big__image_bg.webp',
            width: 4,
            height: 4
        },
        {
            src: '/static/big__image_bg.webp',
            width: 4,
            height: 4
        }
    ];


    return (
        <>

            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content={meta["og:image"]}/>
                <meta property="og:url" content="https://helpukraineonline.com/"/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:site_name" content="Help Ukraine Online"/>
            </Head>

            <main className={styles.main}>
                <section className={styles.main__header_action}>
                    <div className={styles.container}>
                        <h1>Russians ARE war criminals!</h1>
                        <p class={styles.container__title_descr}>Here is Evidence of Russian War Crimes Committed in
                            Ukraine!</p>
                    </div>
                </section>
                <section className={styles.main__section_act}>
                    <div className={styles.container}>
                        <h2>The guilty must be punished!</h2>
                    </div>
                    <Gallery photos={photos} onClick={openLightbox}/>
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
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
                    <img src="/crimes/18.png" style={{width: "55px",position: "absolute",top: "10px",left: "45%"}}/>

                    <div className="popup__info">
                        <div className={action.take__action_info}>
                            <div className={action.take__action_info_box} style={{textAlign: "center"}}>
                                <h2 className={action.take__action_title}>Warning! Severely
                                    distressing content!</h2>
                                <p className="popup-msg" style={{lineHeight: '1.5'}}>We do not recommend those under 18
                                    years of age to view these photos. There are no adequate words to describe what took
                                    place.</p>
                                <div className={action.take__action_buttons}>
                                    <button onClick={(event) => handlePopup(event)} className="button button__blue"
                                       style={{cursor: 'pointer', marginRight: "30px"}}>
                                        <span>Okey</span>
                                    </button>
                                    <a href="/" className="button button__blue">
                                        <span>Return to Homepage</span>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}