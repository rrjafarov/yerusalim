"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const PhotoGallery = ({ aboutData,t }) => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="photo-gallery"]', {
      Thumbs: {
        autoStart: true,
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  const gallery = aboutData.photo_gallery || [];

  return (
    <div className="photoGallery">
      <div className="container">
        <div className="photoGalleryItems">
          <h3>{t?.photoGallery}</h3>

          <div className="photoGalleryItemsSlider">
            <div className="row" id="rowForced">
              {/* SOL – Slider */}
              <div className="xl-6 lg-6 md-6 sm-12" id="rowForced">
                <div className="photoGalleryItemsSwiper">
                  <Swiper
                    navigation={true}
                    loop
                    modules={[Navigation, Autoplay]}
                    className="mySwiper gallerySliderSwiper"
                    spaceBetween={20}
                    speed={900}
                    autoplay={{
                      delay: 12000,
                      disableOnInteraction: false,
                    }}
                  >
                    {gallery.map((img, index) => (
                      <SwiperSlide key={index}>
                        <div className="productDetailPageLeftSlider">
                          <a
                            href={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${img}`}
                            data-fancybox="photo-gallery"
                            className="photoGalleryLink"
                          >
                            <Image
                              src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${img}`}
                              alt="productImg"
                              width={720}
                              height={560}
                              loading="lazy"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              {/* SAĞ – Grid */}
              <div className="xl-6 lg-6 md-6 sm-12" id="rowForced">
                <div className="row" id="rowForced">
                  {gallery.slice(1, 5).map((img, index) => (
                    <div
                      className="xl-6 lg-6 md-6 sm-6"
                      id="forcedXL"
                      key={`grid-${index}`}
                    >
                      <div className="photoGalleryGridItem">
                        <a
                          href={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${img}`}
                          data-fancybox="photo-gallery"
                          className="photoGalleryLink"
                        >
                          <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${img}`}
                            alt="galleryImg"
                            width={360}
                            height={270}
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* SAĞ bitdi */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;