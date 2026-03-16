// "use client";
// import React from "react";
// import { Select } from "antd";

// const SortBy = () => {
//   const handleChange = (value) => {
//     // handle sort change
//   };

//   return (
//     <div className="sortBy">
//       <span>
//         <p>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//           >
//             <path
//               d="M7 16.25C7.41421 16.25 7.75 16.5858 7.75 17C7.75 17.4142 7.41421 17.75 7 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17C2.25 16.5858 2.58579 16.25 3 16.25H7ZM15 11.25C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H15ZM21 6.25C21.4142 6.25 21.75 6.58579 21.75 7C21.75 7.41421 21.4142 7.75 21 7.75H3C2.58579 7.75 2.25 7.41421 2.25 7C2.25 6.58579 2.58579 6.25 3 6.25H21Z"
//               fill="#22282F"
//             />
//           </svg>
//         </p>
//         Sort by:
//       </span>

//       <Select
//         defaultValue="priceLowToHigh"
//         onChange={handleChange}
//         bordered={false}
//         /* Render dropdown inside the .sortBy wrapper so it aligns and won't overflow */
//         getPopupContainer={() => document.querySelector(".sortBy") || document.body}
//         /* make dropdown width equal to the select (prevents unexpected overflow) */
//         dropdownMatchSelectWidth={true}
//         suffixIcon={
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="14"
//             height="14"
//             viewBox="0 0 16 16"
//             fill="none"
//           >
//             <g opacity="0.4">
//               <path
//                 d="M2.66699 6L8.00032 11.3333L13.3337 6"
//                 stroke="black"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </g>
//           </svg>
//         }
//         options={[
//           {
//             value: "priceLowToHigh",
//             label: "Price low to high",
//           },
//           {
//             value: "priceHighToLow",
//             label: "Price high to low",
//           },
//           {
//             value: "a-z",
//             label: "A-Z",
//           },
//           {
//             value: "z-a",
//             label: "Z-A",
//           },
//         ]}
//       />
//     </div>
//   );
// };

// export default SortBy;
















"use client";
import React from "react";
import { Select } from "antd";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const SortBy = ({t}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());

    let sortBy = "";
    let sortOrder = "";

    if (value === "a-z") {
      sortBy = "name"; // dili backend özü həll edir
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

    params.delete("page"); // pagination reset

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
        placeholder=""
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

