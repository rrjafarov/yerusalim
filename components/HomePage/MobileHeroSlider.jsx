"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const MobileHeroSlider = () => {
  return (
    // <div className="mobileHeroSlider">
    <Swiper
      navigation={true}
      loop
      modules={[Navigation, Autoplay]}
      className="mySwiper mobileHeroSliderSwiper"
      spaceBetween={20}
      speed={900}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className="mobileHeroSlider">
          <Image src="/img/banner.png" alt="banner" width={1440} height={670} />
          <div className="container">
            <div className="mobileHeroSlider">
              <h1>Bring Autumn’s Golden Glow Home with Yerusalim</h1>
              <p>
                Cozy spice, apple, and warm wood notes crafted to soften
                evenings and lift the mood.
              </p>
              <Link href="/">
                <span>Shop All Products</span>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mobileHeroSlider">
          <Image src="/img/banner.png" alt="banner" width={1440} height={670} />
          <div className="container">
            <div className="mobileHeroSlider">
              <h1>Bring Autumn’s Golden Glow Home with Yerusalim</h1>
              <p>
                Cozy spice, apple, and warm wood notes crafted to soften
                evenings and lift the mood.
              </p>
              <Link href="/">
                <span>Shop All Products</span>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    // </div>
  );
};

export default MobileHeroSlider;
