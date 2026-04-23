"use client";

import React, { useRef, useState, useEffect } from "react";

const SeoContent = ({ selectedCategory, productsPageInfo, homeData, t }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(50);

  const contentRef = useRef(null);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (!contentRef.current) return;

    if (isExpanded) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(100);
    }
  }, [isExpanded, selectedCategory, productsPageInfo, homeData]);

  // 🔥 priority sırası
  const pageTitle =
    selectedCategory?.page_title ||
    productsPageInfo?.page_title ||
    homeData?.page_title ||
    "";

  const htmlContent =
    selectedCategory?.page_description ||
    productsPageInfo?.page_description ||
    homeData?.page_description ||
    "";

  if (!pageTitle && !htmlContent) return null;

  return (
    <div className="seoMain">
      <div className="container">
        <div className="seoMainItem">
          <div className="seoMainItemTop">
            <p>YERUSALIM 18</p>
            <h2>{pageTitle}</h2>
          </div>

          <div className="seoMainItemContent">
            <div
              style={{
                height: height,
                overflow: "hidden",
                transition: "height 0.4s ease",
              }}
            >
              <div
                ref={contentRef}
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>

            {htmlContent && (
              <div className="readMoreSeo">
                <button onClick={handleToggle}>
                  <span>{isExpanded ? t?.readLess : t?.readMore}</span>
                  <p>{isExpanded ? "-" : "+"}</p>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoContent;








