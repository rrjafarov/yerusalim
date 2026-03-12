"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const HomePageBrands = ({ brandsData }) => {
  return (
    <div className="homePageBrands">
      <div className="homePageBrandsItem">
        <h2>Our brands</h2>

        <div className="brandsLogos">
          <div className="container">
            <Swiper
              // navigation={true}
              loop
              modules={[Autoplay, Navigation]}
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
              {brandsData?.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="brandsLogo">
                    <Link href="#">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${data.logo}`}
                        alt={data.name || "brand"}
                        width={1000}
                        height={1000}
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBrands;
