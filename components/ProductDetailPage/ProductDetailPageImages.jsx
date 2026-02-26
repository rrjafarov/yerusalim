"use client";
import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

// Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const ProductDetailPageImages = ({ images }) => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="product-gallery"]', {
      Thumbs: {
        autoStart: true,
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <Swiper
      navigation={true}
      loop
      modules={[Navigation, Autoplay, Pagination]}
      className="mySwiper productDpSliderSwiper"
      spaceBetween={20}
      speed={900}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
    >
      {images?.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="productDetailPageLeftSlider">
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${image}`}
              data-fancybox="product-gallery"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${image}`}
                alt={`productImg-${index}`}
                width={720}
                height={720}
              />
            </a>
          </div>
        </SwiperSlide>
      ))}

      <div className="productDetailPageLeftSliderTopButtons">
        <div className="productDetailPageLeftSliderTopButtonBestSeller">
          <button>BEST SELLER</button>
        </div>
        <div className="productDetailPageLeftSliderTopButtonLimited">
          <button>LIMITED EDITION</button>
        </div>
      </div>
    </Swiper>
  );
};

export default ProductDetailPageImages;
