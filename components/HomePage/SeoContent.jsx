// "use client";

// import React from "react";

// const SeoContent = ({selectedCategory}) => {
//   const [isExpanded, setIsExpanded] = React.useState(false);

//   const handleToggle = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   return (
//     <div className="seoMain">
//       <div className="container">
//         <div className="seoMainItem">
//           <div className="seoMainItemTop">
//             <p>YERUSALIM 18 –</p>
//             <h2>{selectedCategory.page_title}</h2>
//           </div>
//           <div className="seoMainItemContent">
//             <p>
//               Discover thoughtfully crafted scented candles made with premium
//               natural wax blends for a clean, even burn. From everyday jar
//               candles to sculptural pillar & taper pieces,
//               <strong>Yerusalim 18</strong> brings
//               <strong>
//                 {" "}
//                 woody & warm, gourmand & spice, fresh & clean, and floral
//                 fragrance families{" "}
//               </strong>
//               to life. Explore gift sets and discovery kits to sample our
//               most-loved scents, or shop seasonal candles inspired by cozy
//               evenings, festive gatherings, and slow weekend mornings. Each
//               candle is hand-poured for balanced scent throw, longer burn time,
//               and an elegant minimalist look that suits any interior.
//               <br />
//               <br />
//               Looking for the perfect match? Shop by Fragrance to browse cedar,
//               sandalwood, amber, vanilla, cinnamon, sea salt, citrus, rose, and
//               jasmine notes. Enhance your ritual with home fragrance
//               essentials—reed diffusers and room sprays—and keep your candles in
//               top shape with wick ..
//             </p>

//             {/* Açılanda görünəcək əlavə SEO kontenti */}
//             <div className={`seoMoreText ${isExpanded ? "open" : ""}`}>
//               <p>
//                 Extend the ambiance of your home with layered fragrance rituals
//                 designed to complement every room—from living spaces and
//                 bedrooms to bathrooms and entryways. <strong>Yerusalim 18</strong>{" "}
//                 candles are crafted with a focus on clean formulations, using
//                 carefully selected ingredients to minimize soot and maximize
//                 scent clarity. Thoughtful vessel designs make each candle a
//                 decorative object, whether styled alone or grouped in sets.
//                 <br />
//                 <br />
//                 For gifting, choose from curated candle duos, trio collections,
//                 and limited-edition boxes that arrive ready to present. Whether
//                 you’re setting the mood for a calm evening, celebrating a special
//                 occasion, or simply elevating your daily routine,{" "}
//                 <strong>Yerusalim 18</strong> offers timeless fragrances that
//                 feel modern, warm, and deeply inviting.
//               </p>
//             </div>

//             <div className="readMoreSeo">
//               <button onClick={handleToggle}>
//                 <span>{isExpanded ? "Read Less" : "Read More"}</span>
//                 <p>{isExpanded ? "-" : "+"}</p>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SeoContent;









"use client";

import React, { useRef, useState, useEffect } from "react";

const SeoContent = ({ selectedCategory, productsPageInfo, homeData, t }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(200);

  const contentRef = useRef(null);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (!contentRef.current) return;

    if (isExpanded) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(200);
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
            <p>YERUSALIM 18 –</p>
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









// !  ISLEYIRRRR ANA SEHIFE NOT
// "use client";

// import React, { useRef, useState, useEffect } from "react";

// const SeoContent = ({ selectedCategory, productsPageInfo, homeData }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [height, setHeight] = useState(200);

//   const contentRef = useRef(null);

//   const handleToggle = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   useEffect(() => {
//     if (!contentRef.current) return;

//     if (isExpanded) {
//       setHeight(contentRef.current.scrollHeight);
//     } else {
//       setHeight(200);
//     }
//   }, [isExpanded, selectedCategory, productsPageInfo]);

//   // ✅ Əvvəl category yoxlanır, yoxdursa products page info
//   const pageTitle =
//     selectedCategory?.page_title ||
//     productsPageInfo?.page_title ||
//     "";

//   const htmlContent =
//     selectedCategory?.page_description ||
//     productsPageInfo?.page_description ||
//     "";

//   if (!pageTitle && !htmlContent) return null;

//   return (
//     <div className="seoMain">
//       <div className="container">
//         <div className="seoMainItem">
//           <div className="seoMainItemTop">
//             <p>YERUSALIM 18 –</p>
//             <h2>{pageTitle}</h2>
//           </div>

//           <div className="seoMainItemContent">
//             <div
//               style={{
//                 height: height,
//                 overflow: "hidden",
//                 transition: "height 0.4s ease"
//               }}
//             >
//               <div
//                 ref={contentRef}
//                 dangerouslySetInnerHTML={{ __html: htmlContent }}
//               />
//             </div>

//             {htmlContent && (
//               <div className="readMoreSeo">
//                 <button onClick={handleToggle}>
//                   <span>{isExpanded ? "Read Less" : "Read More"}</span>
//                   <p>{isExpanded ? "-" : "+"}</p>
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SeoContent;
