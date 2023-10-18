import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function Logo() {
  return (
    <>
      <Swiper
        speed={3000}
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/Screenshot 2023-08-19 141117.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Screenshot 2023-08-20 185229.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Screenshot 2023-08-19 134936.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="\images\Gucci.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Screenshot 2023-08-20 185014.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Screenshot 2023-08-20 184812.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Screenshot 2023-08-20 184913.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Screenshot 2023-08-20 185126.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Screenshot 2023-08-19 141227.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Logo;
