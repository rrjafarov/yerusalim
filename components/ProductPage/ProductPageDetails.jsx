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








"use client";
import React, { useState, useEffect } from "react";
import SortBy from "./SortBy";
import Image from "next/image";
import ProductCard from "@/components/Mixed/ProductCard";
import Pagination from "@/components/Mixed/Pagination";
import FilterAccordion from "@/components/ProductPage/FilterAccordion";
import Loading from "@/components/Loading";
import { GiCandleLight } from "react-icons/gi";
import { useSearchParams, usePathname } from "next/navigation";

const ProductPageDetails = ({
  productsData,
  selectedCategory,
  categoriesData,
  filterAttributes,
  productsPageInfo,
  t,
}) => {
  // const categoryBanner =
  //   productsData?.data?.data?.[0]?.category?.[0]?.banner;

  const categoryBanner = selectedCategory
    ? productsData?.data?.data?.[0]?.category?.[0]?.banner
    : productsPageInfo?.banner;

  const products = productsData?.data?.data ?? [];
  const paginationData = productsData?.data;

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const page = searchParams.get("page");
    if (!page) return;

    setTimeout(() => {
      const element = document.getElementById("product-section-start");

      if (element) {
        const offsetPosition =
          element.getBoundingClientRect().top + window.scrollY - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 50);
  }, [searchParams]);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchParams, pathname]);

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

  const searchText = searchParams.get("search_text");

  return (
    <div className="productPageDetails">
      <div className="container">
        <div id="product-section-start" className="productPageDetailsHeader">
          <div className="productPageDetailsHeaderLeft">
            <span onClick={openMobileFilter}>{t?.filter}</span>

            {searchText && (
              <p>
                <strong>{paginationData?.total || 0}</strong> {t?.searchResults}{" "}
                <strong>&quot;{searchText}&quot;</strong>
              </p>
            )}
          </div>

          <div className="productPageDetailsHeaderRight">
            <SortBy t={t} />
          </div>


          




        </div>


        

        <div className="productPageLayout">
          <div className="row">
            {/* Desktop Filter */}
            <div className="xl-3 lg-4 md-6 sm-0">
              <div className="productPageLayoutLeft">
                <FilterAccordion
                  t={t}
                  filterAttributes={filterAttributes}
                  selectedCategory={selectedCategory}
                  categories={categoriesData?.data?.data || []}
                  onMobileClose={closeMobileFilter}
                />
              </div>
            </div>

            {/* Mobile Filter */}
            {isMobileFilterOpen && (
              <div className="mobileFilterOverlay" onClick={closeMobileFilter}>
                <div
                  className={`mobileFilterContent ${
                    isClosing ? "closing" : "open"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="filterOverlayTitle">{t?.filter}</span>
                  <button
                    className="closeButton"
                    onClick={closeMobileFilter}
                    aria-label="Close filter"
                  >
                    ×
                  </button>
                  <FilterAccordion
                    t={t}
                    filterAttributes={filterAttributes}
                    selectedCategory={selectedCategory}
                    categories={categoriesData?.data?.data || []}
                    onMobileClose={closeMobileFilter}
                  />
                </div>
              </div>
            )}

            {/* Products */}
            <div className="xl-9 lg-8 md-6 sm-12">
              <div className="productPageLayoutRight">
                {categoryBanner && products.length > 0 &&  (
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
                  {loading ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        width: "100%",
                        minHeight: "400px",
                      }}
                    >
                      <Loading />
                    </div>
                  ) : (
                    <>
                      <div className="row">
                        {products.length === 0 ? (
                          <div
                            className="xl-12 lg-12 md-12 sm-12"
                            id="noProductFound"
                          >
                            <GiCandleLight id="noProductFoundIcon" />
                            {t?.productNotFound}
                          </div>
                        ) : (
                          products.map((item) => (
                            <div className="xl-4 lg-4 md-6 sm-6" key={item.id}>
                              <ProductCard
                                t={t}
                                id={item.id}
                                name={item.name}
                                productVariants={item.product_variants}
                                image={item.image_gallery?.[0]}
                                slug={item.url_slug}
                                specialBadge={item.special_badge}
                              />
                            </div>
                          ))
                        )}
                      </div>

                      <div className="productPageLayoutRightCardsPagination">
                        <Pagination meta={paginationData} />
                      </div>
                    </>
                  )}
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
