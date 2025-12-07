"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "../Mixed/ProductCard";

const MostPopularProduct = () => {
  const [activeCategory, setActiveCategory] = useState("All categories");

  return (
    <div className="mostPopularProduct">
      <div className="container">
        <div className="mostPopularProductItem">
          <h2>Most Popular</h2>
          <div className="mostPopularCategory">
            <ul>
              <li
                className={
                  activeCategory === "All categories" ? "activeCategory" : ""
                }
                onClick={() => setActiveCategory("All categories")}
              >
                All categories
              </li>
              <li
                className={
                  activeCategory === "Jar Candles" ? "activeCategory" : ""
                }
                onClick={() => setActiveCategory("Jar Candles")}
              >
                Jar Candles
              </li>
              <li
                className={
                  activeCategory === "Pillar & Taper 1" ? "activeCategory" : ""
                }
                onClick={() => setActiveCategory("Pillar & Taper 1")}
              >
                Pillar & Taper
              </li>
              <li
                className={
                  activeCategory === "Pillar & Taper 2" ? "activeCategory" : ""
                }
                onClick={() => setActiveCategory("Pillar & Taper 2")}
              >
                Pillar & Taper
              </li>
              <li
                className={
                  activeCategory === "Seasonal Scents" ? "activeCategory" : ""
                }
                onClick={() => setActiveCategory("Seasonal Scents")}
              >
                Seasonal Scents
              </li>
              <li
                className={
                  activeCategory === "Home Fragrance" ? "activeCategory" : ""
                }
                onClick={() => setActiveCategory("Home Fragrance")}
              >
                Home Fragrance
              </li>
            </ul>
          </div>
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

          
          <div className="mostPopularProductButton">
            <Link href="#">
              <button>Shop All Products</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularProduct;
