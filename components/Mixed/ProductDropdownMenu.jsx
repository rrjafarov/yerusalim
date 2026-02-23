// // ! islek kod
// "use client";
// import Link from "next/link";
// import React, { useMemo, useState } from "react";

// const ProductDropdownMenu = ({ categoryData }) => {
//   // API datasını UI üçün uyğun formaya salırıq
//   const categories = useMemo(() => {
//     if (!categoryData?.data?.data) return [];

//     const data = categoryData.data.data;

//     // əsas kateqoriyalar
//     const parents = data.filter(item => !item.top_category);

//     // alt kateqoriyalar
//     const children = data.filter(item => item.top_category?.length);

//     return parents.map(parent => ({
//       id: parent.id,
//       title: parent.name,
//       slug: parent.url_slug,
//       subcategories: children
//         .filter(child => child.top_category[0].id === parent.id)
//         .map(child => ({
//           id: child.id,
//           title: child.name,
//           slug: child.url_slug,
//         })),
//     }));
//   }, [categoryData]);

//   const [selectedSlug, setSelectedSlug] = useState(
//     categories[0]?.slug
//   );

//   const selectedCategory =
//     categories.find(cat => cat.slug === selectedSlug) || null;

//   const subcategories = selectedCategory?.subcategories || [];
//   const half = Math.ceil(subcategories.length / 2);
//   const leftSub = subcategories.slice(0, half);
//   const rightSub = subcategories.slice(half);

//   if (!categories.length) return null;

//   return (
//     <div className="productDropdownMenu">
//       <div className="productDropdownMenuItem">
//         {/* LEFT SIDE */}
//         <div className="productDropdownMenuItemLeft">
//           <ul>
//             {categories.map(cat => (
//               <li
//                 key={cat.id}
//                 onClick={() => setSelectedSlug(cat.slug)}
//                 className={selectedSlug === cat.slug ? "is-active" : ""}
//               >
//                 {cat.title}
//                 <div>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="15"
//                     height="15"
//                     viewBox="0 0 15 15"
//                   >
//                     <path
//                       d="M10.4854 7.22921L4.90723 2.41867C4.69922 2.23996 4.39453 2.40109 4.39453 2.68966V12.3108C4.39453 12.5993 4.69922 12.7605 4.90723 12.5818L10.4854 7.77121C10.645 7.63351 10.645 7.36691 10.4854 7.22921Z"
//                       fill={
//                         selectedSlug === cat.slug
//                           ? "#a12b2b"
//                           : "#E0D7D7"
//                       }
//                     />
//                   </svg>
//                 </div>
//               </li>
//             ))}
//           </ul>

//           <div className="productsMenuShowAllProducts">
//             <button>
//               <span>Shop all products</span>
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         {selectedCategory && (
//           <div className="productDropdownMenuItemRight">
//             <div className="productDropdownMenuItemRightTop">
//               <Link href={`/products?category=${selectedCategory.slug}-${selectedCategory.id}`}>

//                 <span>{selectedCategory.title}</span>
//               </Link>
//             </div>

//             <div className="productDropdownMenuItemRightLinks">
//               <ul>
//                 {leftSub.map(sub => (
//                   <li key={sub.id}>
//                     <Link
//                       href={`/products?category=${sub.slug}-${sub.id}`}
//                     >
//                       {sub.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>

//               <ul>
//                 {rightSub.map(sub => (
//                   <li key={sub.id}>
//                     <Link
//                       href={`/products?category=${sub.slug}-${sub.id}`}
//                     >
//                       {sub.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <Link className="dropdownMenuAndMore" href="#">
//               and more
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductDropdownMenu;






















"use client";
import Link from "next/link";
import React, { useMemo, useState, useEffect, useRef } from "react";

const ProductDropdownMenu = ({ categoryData, onClose }) => {
  // API datasını UI üçün uyğun formaya salırıq
  const categories = useMemo(() => {
    if (!categoryData?.data?.data) return [];

    const data = categoryData.data.data;

    // əsas kateqoriyalar
    const parents = data.filter(item => !item.top_category);

    // alt kateqoriyalar
    const children = data.filter(item => item.top_category?.length);

    return parents.map(parent => ({
      id: parent.id,
      title: parent.name,
      slug: parent.url_slug,
      subcategories: children
        .filter(child => child.top_category[0].id === parent.id)
        .map(child => ({
          id: child.id,
          title: child.name,
          slug: child.url_slug,
        })),
    }));
  }, [categoryData]);

  const [selectedSlug, setSelectedSlug] = useState(
    categories[0]?.slug
  );

  const menuRef = useRef(null);

  const selectedCategory =
    categories.find(cat => cat.slug === selectedSlug) || null;

  const subcategories = selectedCategory?.subcategories || [];
  const half = Math.ceil(subcategories.length / 2);
  const leftSub = subcategories.slice(0, half);
  const rightSub = subcategories.slice(half);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!categories.length) return null;

  return (
    <div className="productDropdownMenu" ref={menuRef}>
      <div className="productDropdownMenuItem">
        {/* LEFT SIDE */}
        <div className="productDropdownMenuItemLeft">
          <ul>
            {categories.map(cat => (
              <li
                key={cat.id}
                onClick={() => setSelectedSlug(cat.slug)}
                className={selectedSlug === cat.slug ? "is-active" : ""}
              >
                {cat.title}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <path
                      d="M10.4854 7.22921L4.90723 2.41867C4.69922 2.23996 4.39453 2.40109 4.39453 2.68966V12.3108C4.39453 12.5993 4.69922 12.7605 4.90723 12.5818L10.4854 7.77121C10.645 7.63351 10.645 7.36691 10.4854 7.22921Z"
                      fill={
                        selectedSlug === cat.slug
                          ? "#a12b2b"
                          : "#E0D7D7"
                      }
                    />
                  </svg>
                </div>
              </li>
            ))}
          </ul>

          <div className="productsMenuShowAllProducts">
            <button onClick={onClose}>
              <span>Shop all products</span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        {selectedCategory && (
          <div className="productDropdownMenuItemRight">
            <div className="productDropdownMenuItemRightTop">
              <Link href={`/products?category=${selectedCategory.slug}-${selectedCategory.id}`} onClick={onClose}>

                <span>{selectedCategory.title}</span>
              </Link>
            </div>

            <div className="productDropdownMenuItemRightLinks">
              <ul>
                {leftSub.map(sub => (
                  <li key={sub.id}>
                    <Link
                      href={`/products?category=${sub.slug}-${sub.id}`}
                      onClick={onClose}
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul>
                {rightSub.map(sub => (
                  <li key={sub.id}>
                    <Link
                      href={`/products?category=${sub.slug}-${sub.id}`}
                      onClick={onClose}
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link className="dropdownMenuAndMore" href="#" onClick={onClose}>
              and more
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDropdownMenu;












