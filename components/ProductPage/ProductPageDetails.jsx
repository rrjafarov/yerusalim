// "use client"
// import React, { useState } from "react";

// import SortBy from "./SortBy";
// import Image from "next/image";
// import ProductCard from "@/components/Mixed/ProductCard";
// import Pagination from "@/components/Mixed/Pagination";
// import FilterAccordion from "@/components/ProductPage/FilterAccordion";

// const ProductPageDetails = () => {
//   const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
//   const toggleMobileFilter = () => {
//   setIsMobileFilterOpen((prev) => !prev);
// };

//   return (
//     <div className="productPageDetails">
//       <div className="container">
//         <div className="productPageDetailsHeader">
//           <div className="productPageDetailsHeaderLeft">
//             <span onClick={toggleMobileFilter} >Filter</span>
//             <p>
//               <strong>888</strong> Results
//             </p>
//           </div>
//           <div className="productPageDetailsHeaderRight">
//             <SortBy />
//           </div>
//         </div>

//         <div className="productPageLayout">
//           <div className="row">
//             <div className="xl-3 lg-4 md-6 sm-0">
//               <div className="productPageLayoutLeft">
//                 <FilterAccordion />
//               </div>
//             </div>
//             <div className="xl-9 lg-8 md-6 sm-12">
//               <div className="productPageLayoutRight">
//                 <div className="productPageLayoutRightBanner">
//                   <Image
//                     src="/img/productPageImg.png"
//                     alt="banner"
//                     width={1000}
//                     height={350}
//                   />
//                 </div>
//                 <div className="productPageLayoutRightCards">
//                   <div className="row">
//                     <div className="xl-4 lg-4 md-6 sm-6">
//                       <ProductCard />
//                     </div>
//                     <div className="xl-4 lg-4 md-6 sm-6">
//                       <ProductCard />
//                     </div>
//                     <div className="xl-4 lg-4 md-6 sm-6">
//                       <ProductCard />
//                     </div>
//                     <div className="xl-4 lg-4 md-6 sm-6">
//                       <ProductCard />
//                     </div>
//                     <div className="xl-4 lg-4 md-6 sm-6">
//                       <ProductCard />
//                     </div>
//                     <div className="xl-4 lg-4 md-6 sm-6">
//                       <ProductCard />
//                     </div>
//                     <div className="xl-4 lg-4 md-6 sm-6">
//                       <ProductCard />
//                     </div>
//                     <div className="xl-4 lg-4 md-6 sm-6">
//                       <ProductCard />
//                     </div>
//                     <div className="xl-4 lg-4 md-6 sm-6">
//                       <ProductCard />
//                     </div>
//                   </div>
//                   <div className="productPageLayoutRightCardsPagination">
//                     <Pagination />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPageDetails;
// !YUXARIDA OLAN KODDA HECBIR DATA YOXDUR 










// "use client";
// import React, { useState, useEffect } from "react";
// import SortBy from "./SortBy";
// import Image from "next/image";
// import ProductCard from "@/components/Mixed/ProductCard";
// import Pagination from "@/components/Mixed/Pagination";
// import FilterAccordion from "@/components/ProductPage/FilterAccordion";
// import { GiCandleLight } from "react-icons/gi";

// const ProductPageDetails = ({ productsData, selectedCategory }) => {
//   // Datadan məhsulları və paginasiya məlumatlarını ayırırıq
//   // API strukturuna görə: productsData.data içində həm 'data' (array), həm də 'links', 'current_page' var.
//   const products = productsData?.data?.data ?? [];
//   const paginationData = productsData?.data; // current_page, last_page, links burada yerləşir
  
//   const categoryBanner = products?.[0]?.category?.[0]?.banner;

//   const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);

//   const openMobileFilter = () => setIsMobileFilterOpen(true);
  
//   const closeMobileFilter = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setIsMobileFilterOpen(false);
//       setIsClosing(false);
//     }, 300);
//   };

//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape" && isMobileFilterOpen) closeMobileFilter();
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [isMobileFilterOpen]);

//   return (
//     <div className="productPageDetails">
//       <div className="container">
//         <div className="productPageDetailsHeader">
//           <div className="productPageDetailsHeaderLeft">
//             <span onClick={openMobileFilter}>Filter</span>
//             <p>
//               {/* Total sayı göstərmək üçün */}
//               <strong>{paginationData?.total || 0}</strong> Results
//             </p>
//           </div>
//           <div className="productPageDetailsHeaderRight">
//             <SortBy />
//           </div>
//         </div>
//         <div className="productPageLayout">
//           <div className="row">
//             <div className="xl-3 lg-4 md-6 sm-0">
//               <div className="productPageLayoutLeft">
//                 <FilterAccordion selectedCategory={selectedCategory} />
//               </div>
//             </div>
//             {isMobileFilterOpen && (
//               <div className="mobileFilterOverlay" onClick={closeMobileFilter}>
//                 <div
//                   className={`mobileFilterContent ${isClosing ? "closing" : "open"}`}
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <button className="closeButton" onClick={closeMobileFilter}>×</button>
//                   <FilterAccordion />
//                 </div>
//               </div>
//             )}
//             <div className="xl-9 lg-8 md-6 sm-12">
//               <div className="productPageLayoutRight">
//                 {categoryBanner && (
//                   <div className="productPageLayoutRightBanner">
//                     <Image
//                       src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${categoryBanner}`}
//                       alt="banner"
//                       width={1000}
//                       height={350}
//                     />
//                   </div>
//                 )}
//                 <div className="productPageLayoutRightCards">
//                   <div className="row">
//                     {products.length === 0 ? (
//                       <div className="xl-12 lg-12 md-12 sm-12" id="noProductFound">
//                         <GiCandleLight id="noProductFoundIcon" /> No products found
//                       </div>
//                     ) : (
//                       products.map((item) => (
//                         <div className="xl-4 lg-4 md-6 sm-6" key={item.id}>
//                           <ProductCard
//                             id={item.id}
//                             name={item.name}
//                             price={item.price}
//                             oldPrice={item.old_price}
//                             image={item.image_gallery?.[0]}
//                             slug={item.url_slug}
//                           />
//                         </div>
//                       ))
//                     )}
//                   </div>
                  
//                   {/* Pagination komponentinə meta datanı ötürürük */}
//                   {products.length > 0 && (
//                     <div className="productPageLayoutRightCardsPagination">
//                        <Pagination meta={paginationData} />
//                     </div>
//                   )}
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPageDetails;
// ! smmoth scrool yoxudur yuxarida























"use client";
import React, { useState, useEffect } from "react";
import SortBy from "./SortBy";
import Image from "next/image";
import ProductCard from "@/components/Mixed/ProductCard";
import Pagination from "@/components/Mixed/Pagination";
import FilterAccordion from "@/components/ProductPage/FilterAccordion";
import { GiCandleLight } from "react-icons/gi";
// 1. Hook-u import edirik
import { useSearchParams } from "next/navigation"; 

const ProductPageDetails = ({ productsData, selectedCategory }) => {
  const categoryBanner = productsData?.data?.data?.[0]?.category?.[0]?.banner;
  const products = productsData?.data?.data ?? [];
  const paginationData = productsData?.data; 

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  // 2. Search params-ı çağırırıq
  const searchParams = useSearchParams();
  // 3. Sürüşdürmə effekti üçün useEffect
  useEffect(() => {
    // URL-dən page parametrini yoxlayırıq
    const page = searchParams.get("page");
    // Əgər page parametri varsa (yəni səhifə dəyişibsə) işə düşsün.
    // İlk yüklənişdə də işləməsini istəyirsinizsə, if şərtini çıxara bilərsiniz.
    if (page) {
      const element = document.getElementById("product-section-start");
      
      if (element) {
        // Elementin yerini tapırıq
        const headerOffset = 20; // "Biraz yuxarı" məsafəsi (px ilə) - bunu zövqə görə dəyiş
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }, [searchParams]); // Hər dəfə URL (searchParams) dəyişəndə işləyəcək

  const openMobileFilter = () => {
    setIsMobileFilterOpen(true);
  };
  
  const closeMobileFilter = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMobileFilterOpen(false);
      setIsClosing(false);
    }, 300);
  };
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isMobileFilterOpen) {
        closeMobileFilter();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMobileFilterOpen]);

  return (
    <div className="productPageDetails">
      <div className="container">
        <div id="product-section-start" className="productPageDetailsHeader">
          <div className="productPageDetailsHeaderLeft">
            <span onClick={openMobileFilter}>Filter</span>
            <p>
              <strong>{paginationData?.total || 0}</strong> Results
            </p>
          </div>
          <div className="productPageDetailsHeaderRight">
            <SortBy />
          </div>
        </div>
        
        <div className="productPageLayout">
             {/* ... qalan kodlar olduğu kimi ... */}
             <div className="row">
            {/* Desktop Filter */}
            <div className="xl-3 lg-4 md-6 sm-0">
              <div className="productPageLayoutLeft">
                <FilterAccordion selectedCategory={selectedCategory} />
              </div>
            </div>
            {/* Mobile Filter Overlay */}
            {isMobileFilterOpen && (
              <div
                className="mobileFilterOverlay"
                onClick={closeMobileFilter} 
              >
                <div
                  className={`mobileFilterContent ${isClosing ? "closing" : "open"}`}
                  onClick={(e) => e.stopPropagation()} 
                >
                  <button
                    className="closeButton"
                    onClick={closeMobileFilter}
                    aria-label="Close filter"
                  >
                    ×
                  </button>
                  <FilterAccordion />
                </div>
              </div>
            )}
            <div className="xl-9 lg-8 md-6 sm-12">
              <div className="productPageLayoutRight">
                {categoryBanner && (
                  <div className="productPageLayoutRightBanner">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${categoryBanner}`}
                      alt="banner"
                      width={1000}
                      height={350}
                    />
                  </div>
                )}
                <div className="productPageLayoutRightCards">
                  <div className="row">                    
                    {products.length === 0 ? (
                      <div className="xl-12 lg-12 md-12 sm-12 " id="noProductFound"><GiCandleLight id="noProductFoundIcon" />No products found</div>
                    ) : (
                      products.map((item) => (
                        <div className="xl-4 lg-4 md-6 sm-6" key={item.id}>
                          <ProductCard
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            oldPrice={item.old_price}
                            image={item.image_gallery?.[0]}
                            slug={item.url_slug}
                          />
                        </div>
                      ))
                    )}
                  </div>
                  <div className="productPageLayoutRightCardsPagination">
                   {/* Paginationa datanı ötürürük */}
                    <Pagination meta={paginationData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageDetails;
































// !ASAGIDA OLAN KODDA PAGINAATION MENTIQI YOXDUR >
// "use client";
// import React, { useState, useEffect } from "react";
// import SortBy from "./SortBy";
// import Image from "next/image";
// import ProductCard from "@/components/Mixed/ProductCard";
// import Pagination from "@/components/Mixed/Pagination";
// import FilterAccordion from "@/components/ProductPage/FilterAccordion";
// import { GiCandleLight } from "react-icons/gi";

// const ProductPageDetails = ({ productsData,selectedCategory }) => {
//   const categoryBanner = productsData?.data?.data?.[0]?.category?.[0]?.banner;
//   const products = productsData?.data?.data ?? [];

//   const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);

//   const openMobileFilter = () => {
//     setIsMobileFilterOpen(true);
//   };

//   const closeMobileFilter = () => {
//     // play closing animation then remove overlay
//     setIsClosing(true);
//     // duration must match SCSS animation-duration (300ms)
//     setTimeout(() => {
//       setIsMobileFilterOpen(false);
//       setIsClosing(false);
//     }, 300);
//   };

//   // ESC ilə bağlanma
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape" && isMobileFilterOpen) {
//         closeMobileFilter();
//       }
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [isMobileFilterOpen]);

//   return (
//     <div className="productPageDetails">
//       <div className="container">
//         <div className="productPageDetailsHeader">
//           <div className="productPageDetailsHeaderLeft">
//             {/* burada open funksiyasını çağırırıq */}
//             <span onClick={openMobileFilter}>Filter</span>
//             <p>
//               <strong>888</strong> Results
//             </p>
//           </div>
//           <div className="productPageDetailsHeaderRight">
//             <SortBy />
//           </div>
//         </div>

//         <div className="productPageLayout">
//           <div className="row">
//             {/* Desktop Filter */}
//             <div className="xl-3 lg-4 md-6 sm-0">
//               <div className="productPageLayoutLeft">
//                 <FilterAccordion selectedCategory={selectedCategory} />
//               </div>
//             </div>

//             {/* Mobile Filter Overlay */}
//             {isMobileFilterOpen && (
//               <div
//                 className="mobileFilterOverlay"
//                 onClick={closeMobileFilter} // overlay kliklənəndə bağlansın
//               >
//                 <div
//                   className={`mobileFilterContent ${isClosing ? "closing" : "open"}`}
//                   onClick={(e) => e.stopPropagation()} // içəridəklik overlay-i bağlatmasın
//                 >
//                   <button
//                     className="closeButton"
//                     onClick={closeMobileFilter}
//                     aria-label="Close filter"
//                   >
//                     ×
//                   </button>

//                   <FilterAccordion />
//                 </div>
//               </div>
//             )}

//             <div className="xl-9 lg-8 md-6 sm-12">
//               <div className="productPageLayoutRight">
//                 {categoryBanner && (
//                   <div className="productPageLayoutRightBanner">
//                     <Image
//                       src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${categoryBanner}`}
//                       alt="banner"
//                       width={1000}
//                       height={350}
//                     />
//                   </div>
//                 )}

//                 <div className="productPageLayoutRightCards">
//                   <div className="row">                    
//                     {products.length === 0 ? (
//                       <div className="xl-12 lg-12 md-12 sm-12 " id="noProductFound"><GiCandleLight id="noProductFoundIcon" />No products found</div>
//                     ) : (
//                       products.map((item) => (
//                         <div className="xl-4 lg-4 md-6 sm-6" key={item.id}>
//                           <ProductCard
//                             id={item.id}
//                             name={item.name}
//                             price={item.price}
//                             oldPrice={item.old_price}
//                             image={item.image_gallery?.[0]}
//                             slug={item.url_slug}
//                           />
//                         </div>
//                       ))
//                     )}
//                   </div>
//                   <div className="productPageLayoutRightCardsPagination">
//                     <Pagination />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPageDetails;
