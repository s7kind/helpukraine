import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "../../styles/take-action.module.scss"

const Slider = () => {

    return (
        <section className={styles.container}>
            <div className={styles.container__carousel_block}>
                <div className={styles.container__carousel_block__text}>
                    <h3>Build Morale Through Memes</h3>
                    <p>Ukrainian farmers taking tanks. Zelensky mocking Putin. Tanks for sale on ebay. There are so many inspiring, morale boosting images from the resistance. Share it with your friends and boost morale for Ukraine. We’ll update them regularly.</p>
                </div>
                <div className={styles.slider}>
                        <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom, ]}
                        spaceBetween={10}
                        slidesPerView={5}
                        breakpoints={{
                        320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                        },
                            600: {
                        slidesPerView: 2,
                        spaceBetween: 20
                        },
                            900: {
                        slidesPerView: 3,
                        spaceBetween: 20
                        },
                        1200: {
                        slidesPerView: 4,
                        spaceBetween: 30
                        },
                        1500: {
                        slidesPerView: 5,
                        spaceBetween: 10 }
                        }}
                        autoplay={{ delay: 2000 }}
                        zoom={{ maxRatio: 5 , toggle: true}}
                        pagination={{ clickable: true }}
                        mousewheel={true}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide><img src="/Memes/34-621e0af4375ff__700.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/36-621e1b0a88da9__700.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/274684221_4765568566845780_5105371501214536320_n.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/275167198_1067522053802861_485362728626560820_n.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/275205665_3281718418725779_6504771301076326418_n.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/275231704_507691447602832_3561561330102163721_n.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/275297769_345705480829587_2338693047451281421_n.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/1481536598760173569-png__700.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/1497950123191640070-png__700.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/1498274938037415942-png__700.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/1498547251949588482-png__700.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/FGAdpUzXMAEQSbN.jpeg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/FHnokYKWQAgSy32.jpeg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/FMXyqfOaIAEjZSL.jpeg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/image (1).png"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/image (2).png"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/image-8-621e0bbeea49b-png__700.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/ukraine-support-memes-621de510b10e6__700.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/ukraine-support-memes-621def8d32acd__700.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/ukraine-support-memes-621df480c9659__700.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/ukraine-support-memes-621df84806c53__700.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/ukraine-support-memes-621dfa6e8d25e__700.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/ukraine-support-memes-621dfb12b88f4__700.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/ukraine-support-memes-621dfd1872820__700.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/ukraine-support-memes-621dffbe2f998__700.jpg"/></SwiperSlide>
                        <SwiperSlide><img src="/Memes/ukraine-support-memes-621e02c5a414e__700.jpg"/></SwiperSlide>
                    </Swiper>
                </div>

            </div>

        </section>

    );
};

export default Slider;