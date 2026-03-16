"use client";
import React, { useEffect } from "react";
import Image from "next/image";

// Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const BlogGallery = ({ blogData,t }) => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="photo-gallery"]', {
      Thumbs: { autoStart: true },
    });
    return () => {
      Fancybox.destroy();
    };
  }, []);

  // Şəkillər yoxdursa bütün bölməni (başlıq daxil) göstərmə
  if (!blogData?.photo_gallery || blogData.photo_gallery.length === 0) return null;

  const gallery = blogData.photo_gallery;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;

  // İlk şəkil sol tərəf üçün
  const firstImage = gallery[0];
  // Digər şəkillər (maksimum 4 dənə) sağ tərəf üçün
  const sideImages = gallery.slice(1, 5);

  return (
    <div className="photoGallery">
      <div className="container">
        <div className="photoGalleryItems">
          <h3>{t?.photoGallery}</h3>

          <div className="photoGalleryItemsSlider">
            <div className="row" id="rowForced">
              {/* SOL – İlk Şəkil */}
              <div className="xl-6 lg-6 md-6 sm-12" id="rowForced">
                <div className="photoGalleryItemsSwiper">
                  <div className="productDetailPageLeftSlider">
                    <a
                      href={`${baseUrl}${firstImage}`}
                      data-fancybox="photo-gallery"
                      className="photoGalleryLink"
                    >
                      <Image
                        src={`${baseUrl}${firstImage}`}
                        alt="main-gallery-img"
                        width={720}
                        height={560}
                        style={{ objectFit: "cover" }}
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* SAĞ – Digər Şəkillər (Max 4) */}
              <div className="xl-6 lg-6 md-6 sm-12" id="rowForced">
                <div className="row" id="rowForced">
                  {sideImages.map((img, index) => (
                    <div key={index} className="xl-6 lg-6 md-6 sm-6" id="forcedXL">
                      <div className="photoGalleryGridItem">
                        <a
                          href={`${baseUrl}${img}`}
                          data-fancybox="photo-gallery"
                          className="photoGalleryLink"
                        >
                          <Image
                            src={`${baseUrl}${img}`}
                            alt={`gallery-img-${index}`}
                            width={360}
                            height={270}
                            style={{ objectFit: "cover" }}
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGallery;




