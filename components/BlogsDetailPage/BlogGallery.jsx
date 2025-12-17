"use client";
import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

// Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const BlogGallery = () => {
  useEffect(() => {
    // bütün şəkilləri eyni qalereyaya bağlayırıq
    Fancybox.bind('[data-fancybox="photo-gallery"]', {
      Thumbs: {
        autoStart: true,
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="photoGallery">
      <div className="container">
        <div className="photoGalleryItems">
          <h3>Photo Gallery</h3>

          <div className="photoGalleryItemsSlider">
            <div className="row" id="rowForced">
              {/* SOL – Slider */}
              <div className="xl-6 lg-6 md-6 sm-12" id="rowForced">
                <div className="photoGalleryItemsSwiper">


                    <div className="productDetailPageLeftSlider">
                        <a
                          href="/img/photoGallery01.png"
                          data-fancybox="photo-gallery"
                          className="photoGalleryLink"
                        >
                          <Image
                            src="/img/photoGallery01.png"
                            alt="productImg"
                            width={720}
                            height={560}
                          />
                        </a>
                      </div>










                  {/* <Swiper
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
                    <SwiperSlide>
                      <div className="productDetailPageLeftSlider">
                        <a
                          href="/img/photoGallery01.png"
                          data-fancybox="photo-gallery"
                          className="photoGalleryLink"
                        >
                          <Image
                            src="/img/photoGallery01.png"
                            alt="productImg"
                            width={720}
                            height={560}
                          />
                        </a>
                      </div>
                    </SwiperSlide>
                  </Swiper> */}
                </div>
              </div>

              {/* SAĞ – 4-lü grid */}
              <div className="xl-6 lg-6 md-6 sm-12" id="rowForced">
                <div className="row" id="rowForced">
                  {/* 1 */}
                  <div className="xl-6 lg-6 md-6 sm-6" id="forcedXL">
                    <div className="photoGalleryGridItem">
                      <a
                        href="/img/photoGallery02.png"
                        data-fancybox="photo-gallery"
                        className="photoGalleryLink"
                      >
                        <Image
                          src="/img/photoGallery02.png"
                          alt="galleryImg"
                          width={360}
                          height={270}
                        />
                      </a>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="xl-6 lg-6 md-6 sm-6" id="forcedXL">
                    <div className="photoGalleryGridItem">
                      <a
                        href="/img/photoGallery01.png"
                        data-fancybox="photo-gallery"
                        className="photoGalleryLink"
                      >
                        <Image
                          src="/img/photoGallery01.png"
                          alt="galleryImg"
                          width={360}
                          height={270}
                        />
                      </a>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="xl-6 lg-6 md-6 sm-6" id="forcedXL">
                    <div className="photoGalleryGridItem">
                      <a
                        href="/img/photoGallery01.png"
                        data-fancybox="photo-gallery"
                        className="photoGalleryLink"
                      >
                        <Image
                          src="/img/photoGallery01.png"
                          alt="galleryImg"
                          width={360}
                          height={270}
                        />
                      </a>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="xl-6 lg-6 md-6 sm-6" id="forcedXL">
                    <div className="photoGalleryGridItem">
                      <a
                        href="/img/photoGallery02.png"
                        data-fancybox="photo-gallery"
                        className="photoGalleryLink"
                      >
                        <Image
                          src="/img/photoGallery02.png"
                          alt="galleryImg"
                          width={360}
                          height={270}
                        />
                      </a>
                    </div>
                  </div>
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

export default BlogGallery;
