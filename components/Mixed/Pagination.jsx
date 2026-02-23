// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// const Pagination = () => {
//   const [activePage, setActivePage] = useState(1);

//   const handlePageClick = (page) => {
//     setActivePage(page);
//   };
//   return (
//     <div className="productPageLayoutRightCardsPaginationItem">
//       <div className="paginationArrow paginationArrowPrev">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="16"
//           viewBox="0 0 16 16"
//           fill="none"
//         >
//           <path
//             d="M10 2.66699L4.66667 8.00032L10 13.3337"
//             stroke="black"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </div>

//       {/* Səhifə nömrələri ayrıca div içində */}
//       <div className="paginationPages">
//         <button
//           type="button"
//           className={`paginationItem ${activePage === 1 ? "active" : ""}`}
//           onClick={() => handlePageClick(1)}
//         >
//           1
//         </button>

//         <button
//           type="button"
//           className={`paginationItem ${activePage === 2 ? "active" : ""}`}
//           onClick={() => handlePageClick(2)}
//         >
//           2
//         </button>

//         <span className="paginationDots">...</span>

//         <button
//           type="button"
//           className={`paginationItem ${activePage === 43 ? "active" : ""}`}
//           onClick={() => handlePageClick(43)}
//         >
//           43
//         </button>

//         <button
//           type="button"
//           className={`paginationItem ${activePage === 44 ? "active" : ""}`}
//           onClick={() => handlePageClick(44)}
//         >
//           44
//         </button>
//       </div>

//       {/* Sağ ox */}
//       <div className="paginationArrow paginationArrowNext">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="16"
//           viewBox="0 0 16 16"
//           fill="none"
//         >
//           <path
//             d="M6 13.333L11.3333 7.99968L6 2.66634"
//             stroke="black"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Pagination;









"use client";
import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const Pagination = ({ meta }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Əgər meta data yoxdursa və ya cəmi 1 səhifə varsa, pagination göstərmə
  if (!meta || meta.last_page <= 1) return null;

  // Laravel API-nin qaytardığı links array-ini parçalayırıq
  // links[0] həmişə "Previous", sonuncu isə "Next" olur.
  const links = meta.links || [];
  const prevLink = links[0];
  const nextLink = links[links.length - 1];
  // Ortadakı nömrələr (1, 2, ..., 44)
  const pageLinks = links.slice(1, -1);

  // Səhifə dəyişmə funksiyası
  const handlePageChange = (url) => {
    if (!url) return;

    // API-dən gələn URL tam olur (http://api.../product-list?page=2)
    // Bizə sadəcə 'page' parametri lazımdır.
    const urlObj = new URL(url);
    const pageParam = urlObj.searchParams.get("page");

    // Mövcud filtrləri (category, sort və s.) qorumaq üçün
    const currentParams = new URLSearchParams(searchParams.toString());
    
    if (pageParam) {
      currentParams.set("page", pageParam);
    }

    // Yeni URL yaradıb ora keçid edirik
    router.push(`${pathname}?${currentParams.toString()}`, { scroll: false });
  };

  return (
    <div className="productPageLayoutRightCardsPaginationItem">
      {/* Əvvəlki (Previous) Oxu */}
      <div 
        className={`paginationArrow paginationArrowPrev ${!prevLink.url ? "disabled" : ""}`}
        onClick={() => handlePageChange(prevLink.url)}
        style={{ cursor: prevLink.url ? "pointer" : "not-allowed", opacity: prevLink.url ? 1 : 0.5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M10 2.66699L4.66667 8.00032L10 13.3337"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Səhifə nömrələri */}
      <div className="paginationPages">
        {pageLinks.map((link, index) => {
          // Laravel bəzən "..." (dots) qaytarır, url null olur
          const isDots = link.label === "...";
          
          return isDots ? (
            <span key={index} className="paginationDots">...</span>
          ) : (
            <button
              key={index}
              type="button"
              className={`paginationItem ${link.active ? "active" : ""}`}
              onClick={() => handlePageChange(link.url)}
              // HTML entity-ləri (məsələn &laquo;) düzgün göstərmək üçün
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          );
        })}
      </div>

      {/* Növbəti (Next) Oxu */}
      <div 
        className={`paginationArrow paginationArrowNext ${!nextLink.url ? "disabled" : ""}`}
        onClick={() => handlePageChange(nextLink.url)}
        style={{ cursor: nextLink.url ? "pointer" : "not-allowed", opacity: nextLink.url ? 1 : 0.5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6 13.333L11.3333 7.99968L6 2.66634"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;