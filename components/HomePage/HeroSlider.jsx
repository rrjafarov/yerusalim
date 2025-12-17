
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

const HeroSlider = () => {
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
        <MobileHeroSlider />
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
          <SwiperSlide>
            <div className="heroSlider">
              <Image
                src="/img/banner.png"
                alt="banner"
                width={1440}
                height={670}
              />
              <div className="container">
                <div className="heroSliderContent">
                  <h1>Bring Autumn’s Golden Glow Home with Yerusalim</h1>
                  <p>
                    Cozy spice, apple, and warm wood notes crafted to soften
                    evenings and lift the mood.
                  </p>
                  <Link href="/products">
                    <span>Shop All Products</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="heroSlider">
              <Image
                src="/img/banner.png"
                alt="banner"
                width={1440}
                height={670}
              />
              <div className="container">
                <div className="heroSliderContent">
                  <h1>Bring Autumn’s Golden Glow Home with Yerusalim</h1>
                  <p>
                    Cozy spice, apple, and warm wood notes crafted to soften
                    evenings and lift the mood.
                  </p>
                  <Link href="/">
                    <span>Shop All Products</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};

export default HeroSlider;
