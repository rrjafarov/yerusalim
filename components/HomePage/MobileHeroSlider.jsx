"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const MobileHeroSlider = ({ homeBannerData }) => {
  return (
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
      {homeBannerData.map((data) => (
        <SwiperSlide key={data.id}>
          <div className="mobileHeroSlider">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${data.banner_image}`}
              alt="banner"
              width={1440}
              height={670}
            />
            <div className="container">
              <div className="mobileHeroSlider">
                <h1>{data.title}</h1>
                <p>
                  {data.description}
                </p>
                <Link href={data.button_url}>
                  <span>{data.button_name}</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileHeroSlider;
