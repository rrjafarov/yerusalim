
"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const ShopCategory = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    let timeoutId = null;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // bir az gec başlasın
            timeoutId = setTimeout(() => {
              setIsVisible(true);
            }, 300);

            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`shopCategory ${isVisible ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="shopCategoryItem">
          <div className="row">
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="shopCategoryImg">
                <Image
                  src="/img/shopCategory01.png"
                  alt="shop"
                  width={1020}
                  height={1080}
                />
                <div className="shopCategoryImgAbsolute">
                  <Link href="#">
                    <span>Shop by Fragrance</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="shopCategoryImg">
                <Image
                  src="/img/shopCategory02.png"
                  alt="shop"
                  width={1020}
                  height={1080}
                />
                <div className="shopCategoryImgAbsolute">
                  <Link href="#">
                    <span>Shop by Look</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;

