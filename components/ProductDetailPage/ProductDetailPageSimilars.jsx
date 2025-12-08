"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "../Mixed/ProductCard";

const ProductDetailPageSimilars = () => {
  return (
    <div className="mostPopularProduct">
      <div className="container">
        <div className="mostPopularProductItem newProductsItem">
          <span className="titleSpan">Similar Products</span>
          <div className="mostPopularProductSlider">
            <Swiper
              navigation={true}
              loop
              modules={[Navigation, Autoplay]}
              className="mySwiper productSliderSwiper"
              spaceBetween={20}
              speed={900}
              slidesPerView={4}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.4,
                  spaceBetween: 16,
                },
                480: {
                  slidesPerView: 2,
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
                <div className="mostPopularProductSlide">
                  <ProductCard />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mostPopularProductSlide">
                  <ProductCard />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mostPopularProductSlide">
                  <ProductCard />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mostPopularProductSlide">
                  <ProductCard />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mostPopularProductSlide">
                  <ProductCard />
                </div>
              </SwiperSlide>

              
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPageSimilars;
