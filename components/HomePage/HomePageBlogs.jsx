"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

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
            >
              <SwiperSlide>
                <div className="blogsLogo">
                  <Link href="#">
                    <Image
                      src="/img/homeBlog.png"
                      alt="blog"
                      width={610}
                      height={350}
                    />
                  </Link>
                  <div className="blogsLogoTitle">
                    <span>How to Choose the Right Scent for Every Room..</span>
                  </div>
                  <div className="blogsLogoDate">
                    <span>Mon 20 Oct</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blogsLogo">
                  <Link href="#">
                    <Image
                      src="/img/homeBlog02.png"
                      alt="blog"
                      width={610}
                      height={350}
                    />
                  </Link>
                  <div className="blogsLogoTitle">
                    <span>How to Choose the Right Scent for Every Room..</span>
                  </div>
                  <div className="blogsLogoDate">
                    <span>Mon 20 Oct</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blogsLogo">
                  <Link href="#">
                    <Image
                      src="/img/homeBlog.png"
                      alt="blog"
                      width={610}
                      height={350}
                    />
                  </Link>
                  <div className="blogsLogoTitle">
                    <span>How to Choose the Right Scent for Every Room..</span>
                  </div>
                  <div className="blogsLogoDate">
                    <span>Mon 20 Oct</span>
                  </div>
                </div>
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
