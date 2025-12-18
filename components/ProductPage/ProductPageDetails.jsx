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
















"use client";
import React, { useState, useEffect } from "react";
import SortBy from "./SortBy";
import Image from "next/image";
import ProductCard from "@/components/Mixed/ProductCard";
import Pagination from "@/components/Mixed/Pagination";
import FilterAccordion from "@/components/ProductPage/FilterAccordion";

const ProductPageDetails = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openMobileFilter = () => {
    setIsMobileFilterOpen(true);
  };

  const closeMobileFilter = () => {
    // play closing animation then remove overlay
    setIsClosing(true);
    // duration must match SCSS animation-duration (300ms)
    setTimeout(() => {
      setIsMobileFilterOpen(false);
      setIsClosing(false);
    }, 300);
  };

  // ESC ilə bağlanma
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
        <div className="productPageDetailsHeader">
          <div className="productPageDetailsHeaderLeft">
            {/* burada open funksiyasını çağırırıq */}
            <span onClick={openMobileFilter}>Filter</span>
            <p>
              <strong>888</strong> Results
            </p>
          </div>
          <div className="productPageDetailsHeaderRight">
            <SortBy />
          </div>
        </div>

        <div className="productPageLayout">
          <div className="row">
            {/* Desktop Filter */}
            <div className="xl-3 lg-4 md-6 sm-0">
              <div className="productPageLayoutLeft">
                <FilterAccordion />
              </div>
            </div>

            {/* Mobile Filter Overlay */}
            {isMobileFilterOpen && (
              <div
                className="mobileFilterOverlay"
                onClick={closeMobileFilter} // overlay kliklənəndə bağlansın
              >
                <div
                  className={`mobileFilterContent ${isClosing ? "closing" : "open"}`}
                  onClick={(e) => e.stopPropagation()} // içəridəklik overlay-i bağlatmasın
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
                <div className="productPageLayoutRightBanner">
                  <Image
                    src="/img/productPageImg.png"
                    alt="banner"
                    width={1000}
                    height={350}
                  />
                </div>
                <div className="productPageLayoutRightCards">
                  <div className="row">
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                  </div>
                  <div className="productPageLayoutRightCardsPagination">
                    <Pagination />
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

































// "use client";
// import React, { useState } from "react";
// import SortBy from "./SortBy";
// import Image from "next/image";
// import ProductCard from "@/components/Mixed/ProductCard";
// import Pagination from "@/components/Mixed/Pagination";
// import FilterAccordion from "@/components/ProductPage/FilterAccordion";

// const ProductPageDetails = () => {
//   const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

//   const toggleMobileFilter = () => {
//     setIsMobileFilterOpen((prev) => !prev);
//   };

//   return (
//     <div className="productPageDetails">
//       <div className="container">
//         <div className="productPageDetailsHeader">
//           <div className="productPageDetailsHeaderLeft">
//             <span onClick={toggleMobileFilter}>Filter</span>
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
//                 <FilterAccordion />
//               </div>
//             </div>

//             {/* Mobile Filter Overlay */}
//             {isMobileFilterOpen && (
//               <div className="mobileFilterOverlay">
//                 <div className="mobileFilterContent">
//                   <button
//                     className="closeButton"
//                     onClick={toggleMobileFilter}
//                   >
//                     ×
//                   </button>
//                   <FilterAccordion />
//                 </div>
//               </div>
//             )}

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
