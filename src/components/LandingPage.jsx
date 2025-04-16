import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import styles from './LandingPage.module.css';
import Slide1 from '../assets/Slide1.jpg';
import Slide2 from '../assets/Slide2.jpg';
import Slide3 from '../assets/Slide3.jpg';

const LandingPage = () => {
    return(
        <div className={styles.landingPage}>
            <div className={styles.landingPageContent}>
                <div className={styles.swiperContent}>
                    <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    speed={2500}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide>
                        <img src={Slide1} />
                        <div className={styles.overlay}></div>
                        <div className={styles.slideText}>
                            <h2>GRACE CINEMAS INTERNATIONAL</h2>
                            <h3>Your Story. Our Vision</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slide2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slide3} />
                    </SwiperSlide>
                    </Swiper>
                </div>
                <div className={styles.header}>
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        A creative collective focused on building unforgettable brand experiences and timeless moments.
                    </motion.p>
                </div>
                <div className={styles.header2}>
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        LET'S CREATE MAGIC TOGETHER
                    </motion.h1>
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        At Grace Cinemas International, we believe in telling stories that resonate, elevate, and inspire. 
                        Whether it’s creating powerful brand identities or capturing unforgettable moments, we bring vision to life with passion and precision.
                    </motion.p>
                </div>
                {/* <div className={styles.subdiv}>
                    <h1>What we Do</h1>
                    <motion.div>
                        <h1>Brands By GCI</h1>
                        <h3>Crafting compelling brand stories through design, advertising, and creative strategies.</h3>
                        <ul>
                            <li>Brand Identity</li>
                            <li>Ad Films & Commercials</li>
                            <li>Campaign Design</li>
                        </ul>
                        <button>Explore Branding Work</button>
                    </motion.div>
                    <motion.div>
                        <h1>Moments By GCI</h1>
                        <h3>Designing and managing unforgettable events that leave a lasting impression.</h3>
                        <ul>
                            <li>Corporate Events</li>
                            <li>Launches & Promotions</li>
                            <li>Personal Celebrations</li>
                        </ul>
                        <button>Explore Events Portfolio</button>
                    </motion.div>
                </div> */}
            </div>
        </div>
    );
};

export default LandingPage;