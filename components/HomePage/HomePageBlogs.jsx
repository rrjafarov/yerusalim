"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import BlogCard from "../Mixed/BlogCard";

const HomePageBlogs = () => {
  return (
    <div className="homePageBlogs"> 
      <div className="homePageBlogsItem">
        <h2>Blogroom</h2>
        <div className="blogsLogos">
          <div className="container">
            <Swiper
              navigation={true}
              loop
              modules={[Autoplay]}
              className="mySwiper"
              spaceBetween={20}
              speed={900}
              slidesPerView={2}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.1,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 18,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <BlogCard />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard />
              </SwiperSlide>
              
            </Swiper>
            <div className="allBlogsBttn">
              <Link href="/blogs">
                <p>Read blogs</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBlogs;
