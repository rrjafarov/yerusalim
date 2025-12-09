"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const AboutOurBrands = () => {
  return (
    <div className="aboutPageBrands">
      <div className="aboutPageBrandsItem">
        <h3>Our brands</h3>
        <div className="brandsLogos">
          <div className="container">
            <Swiper
              navigation={true}
              loop
              modules={[Autoplay]}
              className="mySwiper"
              spaceBetween={20}
              speed={900}
              slidesPerView={5}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
              0: {
                slidesPerView: 2.2,
                centeredSlides: true,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 3.5,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            >
              <SwiperSlide>
                <div className="brandsLogo">
                  <Link href="#">
                    <span>Logotype</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandsLogo">
                  <Link href="#">
                    <span>Logotype</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandsLogo">
                  <Link href="#">
                    <span>Logotype</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandsLogo">
                  <Link href="#">
                    <span>Logotype</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandsLogo">
                  <Link href="#">
                    <span>Logotype</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brandsLogo">
                  <Link href="#">
                    <span>Logotype</span>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurBrands;
