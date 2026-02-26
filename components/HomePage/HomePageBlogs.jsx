"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import BlogCard from "../Mixed/BlogCard";

const HomePageBlogs = ({ blogsData }) => {
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
              {blogsData.map((blogItem) => (
                <SwiperSlide key={blogItem.id}>
                  <BlogCard
                    title={blogItem.title}
                    image={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${blogItem.main_image}`}
                    date={blogItem.published_date}
                    url={blogItem.url_slug}
                    id={blogItem.id}
                  />
                </SwiperSlide>
              ))}





              {/* {filteredBlogs.map((blogItem) => (
                <div key={blogItem.id} className="xl-6 lg-6 md-6 sm-12">
                  <BlogCard
                    title={blogItem.title}
                    image={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${blogItem.main_image}`}
                    date={blogItem.published_date}
                    url={blogItem.url_slug}
                    id={blogItem.id}
                  />
                </div>
              ))} */}
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
