import {ParallaxBanner} from "react-scroll-parallax";
import styles from "../../styles/main-page.module.scss";
import Link from "next/link";
import {useState} from "react";
import action from "../../styles/main-page.module.scss";
import ReactPlayer from 'react-player/youtube'

export default function Hero() {

    const [popup, setPopup] = useState(false);

    const handlePopup = (event) => {
        event.preventDefault();
        setPopup(!popup)
    }

    const Player = (props) => {
        const videoURL = "https://www.youtube.com/watch?v=" + props.videoId
        return (
            <ReactPlayer
                url={videoURL}
                playing={props.play}
                width='100%'
                height='100%'
                config={{
                    youtube: {
                        playerVars: {
                            controls: 1
                        }
                    }
                }}
            />
        )
    }


    return (

        <>

            {/* HERO */}
            <ParallaxBanner
                layers={[
                    {image: '/static/hero__bg.webp', speed: -15},
                    {
                        speed: -15,
                        children: (
                            <img src="/static/hero__image.webp" className={styles.hero__image} alt="Help Ukraine"/>
                        ),
                    },
                ]}
                className={styles.hero}
            >
                <div className="container">
                    <div className={styles.hero__info}>
                        <h1>Stop Putin Stop War</h1>
                        <p>On February 24, Russia started war with Ukraine. Each passing day brings more death and
                            destruction, with an increasing threat to the world as we know it. With your help, we
                            can stop Putin, end suffering, and avoid global catastrophe.</p>
                        <div className={styles.hero__buttons}>
                            <Link href="#petition">
                                <a className="button button__red">
                                    <span>Advocate</span>
                                </a>
                            </Link>
                            <Link href="#donate">
                                <a className="button button__blue">
                                    <span>Donate</span>
                                </a>
                            </Link>
                            <Link href="#take_action">
                                <a className="button button__blue">
                                    <span>Participate online</span>
                                </a>
                            </Link>
                            <div className={styles.banner__videoBtn}>
                                <a href="" onClick={(event) => handlePopup(event)} class="button button__blue"> <span>Watch video</span></a>
                            </div>
                        </div>

                    </div>
                </div>
            </ParallaxBanner>
            <div className={`popup ${popup === true ? 'active' : ''}`} style={{zIndex: '156'}}>
                <div className="popup__wrap video__wrap">
                    <div className="popup__close" onClick={(event) => handlePopup(event)}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L26 26" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M26 6L6 26" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className="popup__info">
                        <div className={action.take__action_info} style={{justifyContent: 'center'}}>
                            <div className={action.take__action_info_box} style={{alignItems: 'unset'}}>
                                {/*<h2 className={action.take__action_title} style={{textAlign: 'center'}}>&#128249;&nbsp;Video&nbsp;&#128249;</h2>*/}
                                <div className="popup-video" style={{width: '800px', height: '400px'}}>
                                    <Player videoId={"QpqbiZvoPBI&t"} play={popup} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* END HERO */}
        </>
    )
}