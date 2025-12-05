"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const HeroSlider = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        loop
        modules={[Navigation, Autoplay]}
        className="mySwiper heroSliderSwiper"
        spaceBetween={20}
        speed={900}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
      >
        <SwiperSlide>
          <div className="heroSlider">
            <Image
              src="/img/banner.png"
              alt="banner"
              width={1440}
              height={670}
            />
            <div className="container">
              <div className="heroSliderContent">
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
          <div className="heroSlider">
            <Image
              src="/img/banner.png"
              alt="banner"
              width={1440}
              height={670}
            />
            <div className="container">
              <div className="heroSliderContent">
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
    </div>
  );
};

export default HeroSlider;
