"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Advantages = ({ benefitData, t }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let timeoutId = null;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeoutId = setTimeout(() => {
              setIsVisible(true);
            }, 300);

            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
      },
    );

    observer.observe(containerRef.current);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`advantages ${isVisible ? "is-visible" : ""}`}
      ref={containerRef}
    >
      <div className="container">
        <div className="advantagesItems">
          <h2>{t?.homePageBenefitTitle}</h2>

          <div className="advantagesItemsCards">
            <div className="row">
              {benefitData?.map((item) => (
                <div className="xl-3 lg-3 md-6 sm-6" key={item.id}>
                  <div className="advantagesItemsCard">
                    <div className="advantagesItemsCardContent">
                      <div className="advantagesItemsCardContentImg">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${item.icon}`}
                          alt={item.title}
                          width="64"
                          height="64"
                        />
                      </div>

                      <div className="advantagesItemsCardContentTitle">
                        <p>{item.title}</p>
                        <span>{item.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
