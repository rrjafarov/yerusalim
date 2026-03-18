"use client";
import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const SortBy = ({ t }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Client-side check
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());

    let sortBy = "";
    let sortOrder = "";

    if (value === "a-z") {
      sortBy = "name";
      sortOrder = "asc";
    }
    if (value === "z-a") {
      sortBy = "name";
      sortOrder = "desc";
    }
    if (value === "priceLowToHigh") {
      sortBy = "product_variants[0].price";
      sortOrder = "asc";
    }
    if (value === "priceHighToLow") {
      sortBy = "product_variants[0].price";
      sortOrder = "desc";
    }

    params.set("sort_by", sortBy);
    params.set("sort_order", sortOrder);
    params.delete("page");

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="sortBy">
      <span>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M7 16.25H3M15 11.25H3M21 6.25H3" stroke="#22282F" />
          </svg>
        </p>
        {t?.sort}:
      </span>

      <Select
        placeholder={isMobile ? t?.sort : ""}
        onChange={handleChange}
        bordered={false}
        getPopupContainer={() =>
          document.querySelector(".sortBy") || document.body
        }
        dropdownMatchSelectWidth={true}
        options={[
          { value: "priceLowToHigh", label: t?.priceHighToLow },
          { value: "priceHighToLow", label: t?.priceLowToHigh },
          { value: "a-z", label: t?.sortAZ },
          { value: "z-a", label: t?.sortZA },
        ]}
      />
    </div>
  );
};

export default SortBy;

// ! ISLEK KODDUR

// "use client";
// import React from "react";
// import { Select } from "antd";
// import { useRouter, useSearchParams, usePathname } from "next/navigation";

// const SortBy = ({t}) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const pathname = usePathname();

//   const handleChange = (value) => {
//     const params = new URLSearchParams(searchParams.toString());

//     let sortBy = "";
//     let sortOrder = "";

//     if (value === "a-z") {
//       sortBy = "name"; // dili backend özü həll edir
//       sortOrder = "asc";
//     }

//     if (value === "z-a") {
//       sortBy = "name";
//       sortOrder = "desc";
//     }

//     if (value === "priceLowToHigh") {
//       sortBy = "product_variants[0].price";
//       sortOrder = "asc";
//     }

//     if (value === "priceHighToLow") {
//       sortBy = "product_variants[0].price";
//       sortOrder = "desc";
//     }

//     params.set("sort_by", sortBy);
//     params.set("sort_order", sortOrder);

//     params.delete("page"); // pagination reset

//     router.push(`${pathname}?${params.toString()}`);
//   };

//   return (
//     <div className="sortBy">
//       <span>
//         <p>
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
//             <path d="M7 16.25H3M15 11.25H3M21 6.25H3" stroke="#22282F" />
//           </svg>
//         </p>
//         {t?.sort}:
//       </span>

//       <Select
//         placeholder=""
//         onChange={handleChange}
//         bordered={false}
//         getPopupContainer={() =>
//           document.querySelector(".sortBy") || document.body
//         }
//         dropdownMatchSelectWidth={true}
//         options={[
//           { value: "priceLowToHigh", label: t?.priceHighToLow },
//           { value: "priceHighToLow", label: t?.priceLowToHigh },
//           { value: "a-z", label: t?.sortAZ },
//           { value: "z-a", label: t?.sortZA },
//         ]}
//       />
//     </div>
//   );
// };

// export default SortBy;
