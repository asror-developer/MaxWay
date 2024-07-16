
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Gamburger from '../assets/Gamburger.jpg'
import Gamburger1 from '../assets/gamburger2.jpg'
import lavash from '../assets/lavash.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './stayle.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
const Home = () => {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);
   return (
      <div >
         <div className='home-container'>
            <Swiper
               style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
               }}
               loop={true}
               spaceBetween={10}
               navigation={true}
               thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}

               modules={[FreeMode, Navigation, Thumbs]}
               className="mySwiper2"
            >
               <SwiperSlide >
                  <img src={Gamburger} />
               </SwiperSlide>
               <SwiperSlide >
                  <img src={Gamburger1} />
               </SwiperSlide>
               <SwiperSlide >
                  <img src={lavash} />
               </SwiperSlide>
               <SwiperSlide >
                  <img src={Gamburger} />
               </SwiperSlide>

            </Swiper>
            <Swiper
               onSwiper={setThumbsSwiper}
               loop={true}
               spaceBetween={10}
               slidesPerView={4}
               freeMode={true}
               watchSlidesProgress={true}
               modules={[FreeMode, Navigation, Thumbs]}
               className="mySwiper"
            >
               <SwiperSlide >
                  <img src={Gamburger} />
               </SwiperSlide>
               <SwiperSlide >
                  <img src={Gamburger1} />
               </SwiperSlide>
               <SwiperSlide >
                  <img src={lavash} />
               </SwiperSlide>
               <SwiperSlide >
                  <img src={Gamburger} />
               </SwiperSlide>
               <SwiperSlide >
                  <img src={Gamburger} />
               </SwiperSlide>
            </Swiper>
         </div>
      </div>
   )
}

export default Home
