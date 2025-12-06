"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const HomePageBrands = () => {
  return (
    <div className="homePageBrands">
      <div className="homePageBrandsItem">
        <h2>Our brands</h2>
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
                slidesPerView: 3,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 4,
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

export default HomePageBrands;
