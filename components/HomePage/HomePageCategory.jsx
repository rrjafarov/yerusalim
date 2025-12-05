"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const HomePageCategory = () => {
  return (
    <div className="homePageCategory">
      <div className="container">
        <div className="homePageCategoryTop">
          <h2>Explore More Ways to Save.</h2>
        </div>

        <div className="homePageCategoryCards">
          <Swiper
            navigation={true}
            loop
            modules={[Autoplay]}
            className="mySwiper"
            spaceBetween={20}
            speed={900}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="homePageCategoryCard">
                <div className="homePageCategoryCardImg">
                  <Image
                    src="/img/category01.png"
                    alt="category"
                    width={400}
                    height={500}
                  />
                </div>
                <div className="homePageCategoryCardTitle">
                  <Link href="#" className="homePageCategoryCardTitleItem">
                    <p>Product Category name 01</p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9.4696 5.46973C9.7625 5.17683 10.2373 5.17683 10.5302 5.46973L16.5302 11.4697C16.823 11.7626 16.823 12.2374 16.5302 12.5303L10.5302 18.5303C10.2373 18.823 9.76246 18.8231 9.4696 18.5303C9.17675 18.2374 9.17682 17.7626 9.4696 17.4697L14.9393 12L9.4696 6.53027C9.17675 6.23742 9.17682 5.76263 9.4696 5.46973Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homePageCategoryCard">
                <div className="homePageCategoryCardImg">
                  <Image
                    src="/img/category02.png"
                    alt="category"
                    width={400}
                    height={500}
                  />
                </div>
                <div className="homePageCategoryCardTitle">
                  <Link href="#" className="homePageCategoryCardTitleItem">
                    <p>Product Category name 02</p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9.4696 5.46973C9.7625 5.17683 10.2373 5.17683 10.5302 5.46973L16.5302 11.4697C16.823 11.7626 16.823 12.2374 16.5302 12.5303L10.5302 18.5303C10.2373 18.823 9.76246 18.8231 9.4696 18.5303C9.17675 18.2374 9.17682 17.7626 9.4696 17.4697L14.9393 12L9.4696 6.53027C9.17675 6.23742 9.17682 5.76263 9.4696 5.46973Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homePageCategoryCard">
                <div className="homePageCategoryCardImg">
                  <Image
                    src="/img/category01.png"
                    alt="category"
                    width={400}
                    height={500}
                  />
                </div>
                <div className="homePageCategoryCardTitle">
                  <Link href="#" className="homePageCategoryCardTitleItem">
                    <p>Product Category name 03</p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9.4696 5.46973C9.7625 5.17683 10.2373 5.17683 10.5302 5.46973L16.5302 11.4697C16.823 11.7626 16.823 12.2374 16.5302 12.5303L10.5302 18.5303C10.2373 18.823 9.76246 18.8231 9.4696 18.5303C9.17675 18.2374 9.17682 17.7626 9.4696 17.4697L14.9393 12L9.4696 6.53027C9.17675 6.23742 9.17682 5.76263 9.4696 5.46973Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homePageCategoryCard">
                <div className="homePageCategoryCardImg">
                  <Image
                    src="/img/category02.png"
                    alt="category"
                    width={400}
                    height={500}
                  />
                </div>
                <div className="homePageCategoryCardTitle">
                  <Link href="#" className="homePageCategoryCardTitleItem">
                    <p>Product Category name 02</p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9.4696 5.46973C9.7625 5.17683 10.2373 5.17683 10.5302 5.46973L16.5302 11.4697C16.823 11.7626 16.823 12.2374 16.5302 12.5303L10.5302 18.5303C10.2373 18.823 9.76246 18.8231 9.4696 18.5303C9.17675 18.2374 9.17682 17.7626 9.4696 17.4697L14.9393 12L9.4696 6.53027C9.17675 6.23742 9.17682 5.76263 9.4696 5.46973Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomePageCategory;
