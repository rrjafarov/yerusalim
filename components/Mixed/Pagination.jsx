"use client";
import React, { useState } from "react";
import Image from "next/image";

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (page) => {
    setActivePage(page);
  };
  return (
    <div className="productPageLayoutRightCardsPaginationItem">
      <div className="paginationArrow paginationArrowPrev">
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

      {/* Səhifə nömrələri ayrıca div içində */}
      <div className="paginationPages">
        <button
          type="button"
          className={`paginationItem ${activePage === 1 ? "active" : ""}`}
          onClick={() => handlePageClick(1)}
        >
          1
        </button>

        <button
          type="button"
          className={`paginationItem ${activePage === 2 ? "active" : ""}`}
          onClick={() => handlePageClick(2)}
        >
          2
        </button>

        <span className="paginationDots">...</span>

        <button
          type="button"
          className={`paginationItem ${activePage === 43 ? "active" : ""}`}
          onClick={() => handlePageClick(43)}
        >
          43
        </button>

        <button
          type="button"
          className={`paginationItem ${activePage === 44 ? "active" : ""}`}
          onClick={() => handlePageClick(44)}
        >
          44
        </button>
      </div>

      {/* Sağ ox */}
      <div className="paginationArrow paginationArrowNext">
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
