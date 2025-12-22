// "use client";

// import Link from "next/link";
// import React, { useState } from "react";

// const ProductDropdownMenu = () => {
//   // default olaraq birinci kateqoriya aktiv olur
//   const [selected, setSelected] = useState("cat1");

//   return (
//     <div className="productDropdownMenu">
//       <div className="productDropdownMenuItem">
//         <div className="productDropdownMenuItemLeft">
//           <ul>
//             <li className={selected === "cat1" ? "is-active" : ""}>
//               <Link
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setSelected("cat1");
//                 }}
//               >
//                 Jar Candels
//               </Link>
//               <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="15"
//                   height="15"
//                   viewBox="0 0 15 15"
//                   fill="none"
//                 >
//                   <path
//                     d="M10.4854 7.22921L4.90723 2.41867C4.69922 2.23996 4.39453 2.40109 4.39453 2.68966V12.3108C4.39453 12.5993 4.69922 12.7605 4.90723 12.5818L10.4854 7.77121C10.645 7.63351 10.645 7.36691 10.4854 7.22921Z"
//                     fill={selected === "cat1" ? "#a12b2b" : "#E0D7D7"}
//                   />
//                 </svg>
//               </div>
//             </li>

//             <li className={selected === "cat2" ? "is-active" : ""}>
//               <Link
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setSelected("cat2");
//                 }}
//               >
//                 Jar Candels
//               </Link>
//               <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="15"
//                   height="15"
//                   viewBox="0 0 15 15"
//                   fill="none"
//                 >
//                   <path
//                     d="M10.4854 7.22921L4.90723 2.41867C4.69922 2.23996 4.39453 2.40109 4.39453 2.68966V12.3108C4.39453 12.5993 4.69922 12.7605 4.90723 12.5818L10.4854 7.77121C10.645 7.63351 10.645 7.36691 10.4854 7.22921Z"
//                     fill={selected === "cat2" ? "#a12b2b" : "#E0D7D7"}
//                   />
//                 </svg>
//               </div>
//             </li>

//             <li className={selected === "cat3" ? "is-active" : ""}>
//               <Link
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setSelected("cat3");
//                 }}
//               >
//                 Jar Candels
//               </Link>
//               <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="15"
//                   height="15"
//                   viewBox="0 0 15 15"
//                   fill="none"
//                 >
//                   <path
//                     d="M10.4854 7.22921L4.90723 2.41867C4.69922 2.23996 4.39453 2.40109 4.39453 2.68966V12.3108C4.39453 12.5993 4.69922 12.7605 4.90723 12.5818L10.4854 7.77121C10.645 7.63351 10.645 7.36691 10.4854 7.22921Z"
//                     fill={selected === "cat3" ? "#a12b2b" : "#E0D7D7"}
//                   />
//                 </svg>
//               </div>
//             </li>

//             <li className={selected === "cat4" ? "is-active" : ""}>
//               <Link
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setSelected("cat4");
//                 }}
//               >
//                 Jar Candels
//               </Link>
//               <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="15"
//                   height="15"
//                   viewBox="0 0 15 15"
//                   fill="none"
//                 >
//                   <path
//                     d="M10.4854 7.22921L4.90723 2.41867C4.69922 2.23996 4.39453 2.40109 4.39453 2.68966V12.3108C4.39453 12.5993 4.69922 12.7605 4.90723 12.5818L10.4854 7.77121C10.645 7.63351 10.645 7.36691 10.4854 7.22921Z"
//                     fill={selected === "cat4" ? "#a12b2b" : "#E0D7D7"}
//                   />
//                 </svg>
//               </div>
//             </li>

//             <li className={selected === "cat5" ? "is-active" : ""}>
//               <Link
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setSelected("cat5");
//                 }}
//               >
//                 Jar Candels
//               </Link>
//               <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="15"
//                   height="15"
//                   viewBox="0 0 15 15"
//                   fill="none"
//                 >
//                   <path
//                     d="M10.4854 7.22921L4.90723 2.41867C4.69922 2.23996 4.39453 2.40109 4.39453 2.68966V12.3108C4.39453 12.5993 4.69922 12.7605 4.90723 12.5818L10.4854 7.77121C10.645 7.63351 10.645 7.36691 10.4854 7.22921Z"
//                     fill={selected === "cat5" ? "#a12b2b" : "#E0D7D7"}
//                   />
//                 </svg>
//               </div>
//             </li>

//             <li className={selected === "cat6" ? "is-active" : ""}>
//               <Link
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setSelected("cat6");
//                 }}
//               >
//                 Jar Candels
//               </Link>
//               <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="15"
//                   height="15"
//                   viewBox="0 0 15 15"
//                   fill="none"
//                 >
//                   <path
//                     d="M10.4854 7.22921L4.90723 2.41867C4.69922 2.23996 4.39453 2.40109 4.39453 2.68966V12.3108C4.39453 12.5993 4.69922 12.7605 4.90723 12.5818L10.4854 7.77121C10.645 7.63351 10.645 7.36691 10.4854 7.22921Z"
//                     fill={selected === "cat6" ? "#a12b2b" : "#E0D7D7"}
//                   />
//                 </svg>
//               </div>
//             </li>

//             <li className={selected === "cat7" ? "is-active" : ""}>
//               <Link
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setSelected("cat7");
//                 }}
//               >
//                 Jar Candels
//               </Link>
//               <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="15"
//                   height="15"
//                   viewBox="0 0 15 15"
//                   fill="none"
//                 >
//                   <path
//                     d="M10.4854 7.22921L4.90723 2.41867C4.69922 2.23996 4.39453 2.40109 4.39453 2.68966V12.3108C4.39453 12.5993 4.69922 12.7605 4.90723 12.5818L10.4854 7.77121C10.645 7.63351 10.645 7.36691 10.4854 7.22921Z"
//                     fill={selected === "cat7" ? "#a12b2b" : "#E0D7D7"}
//                   />
//                 </svg>
//               </div>
//             </li>

//             <li className={selected === "cat8" ? "is-active" : ""}>
//               <Link
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setSelected("cat8");
//                 }}
//               >
//                 Jar Candels
//               </Link>
//               <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="15"
//                   height="15"
//                   viewBox="0 0 15 15"
//                   fill="none"
//                 >
//                   <path
//                     d="M10.4854 7.22921L4.90723 2.41867C4.69922 2.23996 4.39453 2.40109 4.39453 2.68966V12.3108C4.39453 12.5993 4.69922 12.7605 4.90723 12.5818L10.4854 7.77121C10.645 7.63351 10.645 7.36691 10.4854 7.22921Z"
//                     fill={selected === "cat8" ? "#a12b2b" : "#E0D7D7"}
//                   />
//                 </svg>
//               </div>
//             </li>
//           </ul>

//           <div className="productsMenuShowAllProducts">
//             <button>
//               <span>Shop all products</span>
//             </button>
//           </div>
//         </div>

//         <div className="productDropdownMenuItemRight">
//           <div className="productDropdownMenuItemRightTop">
//             {/* Başlıq — statik şərtlərlə göstərilir */}
//             {selected === "cat1" && (
//               <Link href="/products">
//                 <span>Jar Candels</span>
//               </Link>
//             )}
//             {selected === "cat2" && (
//               <Link href="/products">
//                 <span>Phones</span>
//               </Link>
//             )}
//             {selected === "cat3" && (
//               <Link href="/products">
//                 <span>Computers</span>
//               </Link>
//             )}
//             {selected === "cat4" && (
//               <Link href="/products">
//                 <span>Accessories</span>
//               </Link>
//             )}
//             {selected === "cat5" && (
//               <Link href="/products">
//                 <span>Home Appliances</span>
//               </Link>
//             )}
//             {selected === "cat6" && (
//               <Link href="/products">
//                 <span>Audio</span>
//               </Link>
//             )}
//             {selected === "cat7" && (
//               <Link href="/products">
//                 <span>Cameras</span>
//               </Link>
//             )}
//             {selected === "cat8" && (
//               <Link href="/products">
//                 <span>Beauty</span>
//               </Link>
//             )}
//           </div>

//           <div className="productDropdownMenuItemRightLinks">
//             {/* CAT1 */}
//             {selected === "cat1" && (
//               <>
//                 <ul>
//                   <li>
//                     <Link href="#">Cedar & Amber</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Vanilla Bean + Tonka</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Rose & Sandalwood</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Citrus & Sage</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Lavender Fields</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Ocean Breeze</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Spiced Orange</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Pine & Eucalyptus</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Amber Noir</Link>
//                   </li>
//                 </ul>

//                 <ul>
//                   <li>
//                     <Link href="#">Limited Editions</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Gift Sets</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Best Sellers</Link>
//                   </li>
//                   <li>
//                     <Link href="#">New Arrivals</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Fragrance Oils</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Accessories</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Refills</Link>
//                   </li>
//                 </ul>
//               </>
//             )}

//             {/* CAT2 - Phones (statik) */}
//             {selected === "cat2" && (
//               <>
//                 <ul>
//                   <li>
//                     <Link href="#">Apple</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Samsung</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Xiaomi</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Oppo</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Realme</Link>
//                   </li>
//                   <li>
//                     <Link href="#">OnePlus</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Google Pixel</Link>
//                   </li>
//                 </ul>

//                 <ul>
//                   <li>
//                     <Link href="#">Cases</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Chargers</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Earphones</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Screen Protectors</Link>
//                   </li>
//                 </ul>
//               </>
//             )}

//             {/* CAT3 - Computers */}
//             {selected === "cat3" && (
//               <>
//                 <ul>
//                   <li>
//                     <Link href="#">Laptops</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Desktops</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Monitors</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Keyboards</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Mice</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Graphic Cards</Link>
//                   </li>
//                 </ul>

//                 <ul>
//                   <li>
//                     <Link href="#">Gaming</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Ultrabooks</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Workstations</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Storage</Link>
//                   </li>
//                 </ul>
//               </>
//             )}

//             {/* CAT4 - Accessories */}
//             {selected === "cat4" && (
//               <>
//                 <ul>
//                   <li>
//                     <Link href="#">Bags</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Wallets</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Belts</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Sunglasses</Link>
//                   </li>
//                 </ul>

//                 <ul>
//                   <li>
//                     <Link href="#">Jewelry</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Hats</Link>
//                   </li>
//                 </ul>
//               </>
//             )}

//             {/* CAT5 - Home Appliances */}
//             {selected === "cat5" && (
//               <>
//                 <ul>
//                   <li>
//                     <Link href="#">Refrigerators</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Washing Machines</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Microwaves</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Air Conditioners</Link>
//                   </li>
//                 </ul>

//                 <ul>
//                   <li>
//                     <Link href="#">Small Kitchen</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Vacuum Cleaners</Link>
//                   </li>
//                 </ul>
//               </>
//             )}

//             {/* CAT6 - Audio */}
//             {selected === "cat6" && (
//               <>
//                 <ul>
//                   <li>
//                     <Link href="#">Headphones</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Speakers</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Soundbars</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Microphones</Link>
//                   </li>
//                 </ul>

//                 <ul>
//                   <li>
//                     <Link href="#">Bluetooth</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Wired</Link>
//                   </li>
//                 </ul>
//               </>
//             )}

//             {/* CAT7 - Cameras */}
//             {selected === "cat7" && (
//               <>
//                 <ul>
//                   <li>
//                     <Link href="#">DSLR</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Mirrorless</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Action Cameras</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Lenses</Link>
//                   </li>
//                 </ul>

//                 <ul>
//                   <li>
//                     <Link href="#">Tripods</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Bags & Cases</Link>
//                   </li>
//                 </ul>
//               </>
//             )}

//             {/* CAT8 - Beauty */}
//             {selected === "cat8" && (
//               <>
//                 <ul>
//                   <li>
//                     <Link href="#">Skincare</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Makeup</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Hair Care</Link>
//                   </li>
//                 </ul>

//                 <ul>
//                   <li>
//                     <Link href="#">Tools</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Fragrances</Link>
//                   </li>
//                 </ul>
//               </>
//             )}
//           </div>

//           <Link className="dropdownMenuAndMore" href="#">
//             and more
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDropdownMenu;


































"use client";

import Link from "next/link";
import React, { useState } from "react";

const categories = [
  {
    title: "Jar Candels",
    slug: "jar-candels",
    subcategories: [
      { title: "Cedar & Amber", slug: "cedar-amber" },
      { title: "Vanilla Bean + Tonka", slug: "vanilla-bean-tonka" },
      { title: "Rose & Sandalwood", slug: "rose-sandalwood" },
      { title: "Lavender Fields", slug: "lavender-fields" },
      { title: "Citrus Bloom", slug: "citrus-bloom" },
    ],
  },
  {
    title: "Scented Candels",
    slug: "scented-candels",
    subcategories: [
      { title: "Floral", slug: "floral" },
      { title: "Woody", slug: "woody" },
      { title: "Fresh", slug: "fresh" },
      { title: "Sweet", slug: "sweet" },
    ],
  },
  {
    title: "Luxury Candels",
    slug: "luxury-candels",
    subcategories: [
      { title: "Premium Collection", slug: "premium-collection" },
      { title: "Limited Edition", slug: "limited-edition" },
      { title: "Handcrafted", slug: "handcrafted" },
    ],
  },
  {
    title: "Gift Candels",
    slug: "gift-candels",
    subcategories: [
      { title: "Gift Sets", slug: "gift-sets" },
      { title: "Seasonal Gifts", slug: "seasonal-gifts" },
      { title: "Best Sellers", slug: "best-sellers" },
    ],
  },
];

const ProductDropdownMenu = () => {
  const [selectedSlug, setSelectedSlug] = useState(categories[0].slug);

  const selectedCategory =
    categories.find((cat) => cat.slug === selectedSlug) || null;

  const subcategories = selectedCategory?.subcategories || [];
  const half = Math.ceil(subcategories.length / 2);
  const leftSub = subcategories.slice(0, half);
  const rightSub = subcategories.slice(half);

  return (
    <div className="productDropdownMenu">
      <div className="productDropdownMenuItem">
        <div className="productDropdownMenuItemLeft">
          <ul>
            {categories.map((cat) => (
              <li
                key={cat.slug}
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
                      fill={selectedSlug === cat.slug ? "#a12b2b" : "#E0D7D7"}
                    />
                  </svg>
                </div>
              </li>
            ))}
          </ul>


          <div className="productsMenuShowAllProducts">
            <button>
              <span>Shop all products</span>
            </button>
          </div>
          
        </div>

        <div className="productDropdownMenuItemRight">
          <div className="productDropdownMenuItemRightTop">
            <Link href={`/categories/${selectedCategory.slug}`}>
              <span>{selectedCategory.title}</span>
            </Link>
          </div>

          <div className="productDropdownMenuItemRightLinks">
            <ul>
              {leftSub.map((sub) => (
                <li key={sub.slug}>
                  <Link
                    href={`/categories/${selectedCategory.slug}/${sub.slug}`}
                  >
                    {sub.title}
                  </Link>
                </li>
              ))}
            </ul>

            <ul>
              {rightSub.map((sub) => (
                <li key={sub.slug}>
                  <Link
                    href={`/categories/${selectedCategory.slug}/${sub.slug}`}
                  >
                    {sub.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link className="dropdownMenuAndMore" href="#">
            and more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDropdownMenu;
