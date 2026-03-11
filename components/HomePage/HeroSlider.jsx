"use client";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import MobileHeroSlider from "./MobileHeroSlider";

const HeroSlider = ({ homeBannerData }) => {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Ekran ölçüsünə görə mobil / desktop ayrımı
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };

    handleResize(); // ilk yüklənəndə yoxla
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        // ✅ 768-dən kiçik ekranlarda bu komponent görsənəcək
        <MobileHeroSlider homeBannerData={homeBannerData} />
      ) : (
        // ✅ 768 və daha böyük ekranlarda bu Swiper işləyəcək
        <Swiper
          navigation={true}
          loop
          modules={[Navigation, Autoplay]}
          className="mySwiper heroSliderSwiper"
          spaceBetween={20}
          speed={900}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {homeBannerData.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="heroSlider">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${data.banner_image}`}
                  alt={data.title}
                  width={1440}
                  height={670}
                />

                <div className="container">
                  <div className="heroSliderContent">
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>

                    <Link href={data.button_url}>
                      <span>{data.button_name}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default HeroSlider;
