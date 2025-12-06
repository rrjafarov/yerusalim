// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const HeaderMain = () => {
//   return (
//     <div className="container">
//       <div className="headerMain">
//         <div className="headerMainItem">
//           <div className="headerLogo">
//             <Link href="/">
//               <img src="/icons/logo.svg" alt="logo" />
//             </Link>
//           </div>
//           <div className="headerMainRight">
//             <div className="productsMenuButton">
//               <button>
//                 <span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="23"
//                     height="24"
//                     viewBox="0 0 23 24"
//                     fill="none"
//                   >
//                     <path
//                       d="M3.7279 13C4.24262 13 4.65987 12.5523 4.65987 12C4.65987 11.4477 4.24262 11 3.7279 11C3.21319 11 2.79593 11.4477 2.79593 12C2.79593 12.5523 3.21319 13 3.7279 13Z"
//                       fill="#F3F3F3"
//                     />
//                     <path
//                       d="M18.6954 11H7.39986C6.91603 11 6.5238 11.4209 6.5238 11.94V12.06C6.5238 12.5791 6.91603 13 7.39986 13H18.6954C19.1792 13 19.5714 12.5791 19.5714 12.06V11.94C19.5714 11.4209 19.1792 11 18.6954 11Z"
//                       fill="#F3F3F3"
//                     />
//                     <path
//                       d="M18.6954 16H3.67198C3.18815 16 2.79593 16.4209 2.79593 16.94V17.06C2.79593 17.5791 3.18815 18 3.67198 18H18.6954C19.1792 18 19.5714 17.5791 19.5714 17.06V16.94C19.5714 16.4209 19.1792 16 18.6954 16Z"
//                       fill="#F3F3F3"
//                     />
//                     <path
//                       d="M18.6954 6H3.67198C3.18815 6 2.79593 6.42085 2.79593 6.94V7.06C2.79593 7.57915 3.18815 8 3.67198 8H18.6954C19.1792 8 19.5714 7.57915 19.5714 7.06V6.94C19.5714 6.42085 19.1792 6 18.6954 6Z"
//                       fill="#F3F3F3"
//                     />
//                   </svg>
//                 </span>
//                 <p>Products</p>
//               </button>
//             </div>
//             <div className="headerSearch">
//               <input
//                 type="text"
//                 placeholder="Search products, brands, anything .."
//               />
//               <Link href="#">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="17"
//                   height="17"
//                   viewBox="0 0 17 17"
//                   fill="none"
//                 >
//                   <path
//                     d="M15.25 15.25L11.8855 11.8795M13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
//                     stroke="#232323"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                   />
//                 </svg>
//               </Link>
//             </div>
//             <div className="salesOff">
//               <Link href="#">
//                 <img src="/icons/sales.svg" alt="sales" />
//                 <span>Sales Off</span>
//               </Link>
//             </div>
//             <div className="headerMainLinks">
//               <Link href="#">
//                 <div className="userProfile">
//                   <span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="18"
//                       height="18"
//                       viewBox="0 0 18 18"
//                       fill="none"
//                     >
//                       <path
//                         d="M4.5 12.0498H6.27344C7.11174 12.4075 8.03047 12.6123 9 12.6123C9.968 12.6123 10.8892 12.4076 11.7256 12.0498H13.5C15.5437 12.0498 17.2002 13.7063 17.2002 15.75V16.3125C17.2002 16.8023 16.8023 17.2002 16.3125 17.2002H1.6875C1.19769 17.2002 0.799805 16.8023 0.799805 16.3125V15.75C0.799805 13.7063 2.45628 12.0498 4.5 12.0498ZM9 0.799805C11.3531 0.799805 13.2627 2.70941 13.2627 5.0625C13.2627 7.41559 11.3531 9.3252 9 9.3252C6.64691 9.3252 4.7373 7.41559 4.7373 5.0625C4.7373 2.70941 6.64691 0.799805 9 0.799805Z"
//                         stroke="black"
//                         stroke-width="1.6"
//                       />
//                     </svg>
//                   </span>
//                   <p>Login/Sign Up</p>
//                   <span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                     >
//                       <g opacity="0.5">
//                         <path
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                           d="M6.31307 3.64644C6.50834 3.45119 6.82485 3.45118 7.0201 3.64644L11.0201 7.64644C11.2154 7.8417 11.2154 8.15821 11.0201 8.35347L7.0201 12.3535C6.82485 12.5487 6.50834 12.5487 6.31307 12.3535C6.11781 12.1582 6.11781 11.8417 6.31307 11.6464L9.95956 7.99996L6.31307 4.35347C6.11781 4.15821 6.11781 3.8417 6.31307 3.64644Z"
//                           fill="#22282F"
//                         />
//                       </g>
//                     </svg>
//                   </span>
//                 </div>
//               </Link>
//               <Link href="#">
//                 <div className="userProfile">
//                   <span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="19"
//                       height="19"
//                       viewBox="0 0 19 19"
//                       fill="none"
//                     >
//                       <path
//                         d="M1.02599 8.49492C0.993847 8.33832 0.991485 8.17489 1.01909 8.01702C1.04669 7.85915 1.10353 7.711 1.18529 7.5838C1.26705 7.45661 1.37159 7.35371 1.49097 7.28293C1.61035 7.21215 1.74143 7.17534 1.87427 7.17529H17.1257C17.2586 7.17534 17.3896 7.21215 17.509 7.28293C17.6284 7.35371 17.7329 7.45661 17.8147 7.5838C17.8965 7.711 17.9533 7.85915 17.9809 8.01702C18.0085 8.17489 18.0062 8.33832 17.974 8.49492L16.3903 16.1906C16.2957 16.6503 16.0773 17.0584 15.77 17.3501C15.4626 17.6418 15.0837 17.8002 14.6937 17.8003H4.30628C3.91626 17.8002 3.53745 17.6418 3.23005 17.3501C2.92265 17.0584 2.70431 16.6503 2.60973 16.1906L1.02599 8.49598V8.49492Z"
//                         stroke="black"
//                         stroke-width="2"
//                         stroke-linejoin="round"
//                       />
//                       <path
//                         d="M6.87646 11.4253V13.5503M12.1235 11.4253V13.5503M4.25293 7.17529L7.75097 0.800293M14.7471 7.17529L11.249 0.800293"
//                         stroke="black"
//                         stroke-width="1.6"
//                         stroke-linecap="round"
//                       />
//                     </svg>
//                   </span>
//                   <p>
//                     Basket <strong>(2)</strong>
//                   </p>
//                   <span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                     >
//                       <g opacity="0.5">
//                         <path
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                           d="M6.31307 3.64644C6.50834 3.45119 6.82485 3.45118 7.0201 3.64644L11.0201 7.64644C11.2154 7.8417 11.2154 8.15821 11.0201 8.35347L7.0201 12.3535C6.82485 12.5487 6.50834 12.5487 6.31307 12.3535C6.11781 12.1582 6.11781 11.8417 6.31307 11.6464L9.95956 7.99996L6.31307 4.35347C6.11781 4.15821 6.11781 3.8417 6.31307 3.64644Z"
//                           fill="#22282F"
//                         />
//                       </g>
//                     </svg>
//                   </span>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderMain;















"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import SearchResults from "@/components/Mixed/SearchResults";

const HeaderMain = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("typing");
  const [idx, setIdx] = useState(0);

  // 🔹 input-un real dəyəri
  const [searchValue, setSearchValue] = useState("");

  // 🔹 Statik placeholder mətnləri
  const placeholders = [
    "Search products, brands, anything ..",
    "phone, golden, candle axtar...",
  ];

  // 🔹 Placeholder üçün typewriter animasiyası
  useEffect(() => {
    let timeout;
    const full = placeholders[idx] || "";

    if (mode === "typing") {
      timeout = setTimeout(() => {
        setText(full.slice(0, text.length + 1));
        if (text.length + 1 === full.length) {
          setMode("pausing");
        }
      }, 150); // yazma sürəti
    } else if (mode === "pausing") {
      timeout = setTimeout(() => {
        setMode("deleting");
      }, 1000); // tam mətn olanda gözləmə
    } else if (mode === "deleting") {
      timeout = setTimeout(() => {
        setText(full.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIdx((prev) => (prev + 1) % placeholders.length);
          setMode("typing");
        }
      }, 50); // silmə sürəti
    }

    return () => clearTimeout(timeout);
  }, [text, mode, idx, placeholders]);

  return (
    <div className="container">
      <div className="headerMain">
        <div className="headerMainItem">
          <div className="headerLogo">
            <Link href="/">
              <img src="/icons/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="headerMainRight">
            <div className="productsMenuButton">
              <button>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                  >
                    <path
                      d="M3.7279 13C4.24262 13 4.65987 12.5523 4.65987 12C4.65987 11.4477 4.24262 11 3.7279 11C3.21319 11 2.79593 11.4477 2.79593 12C2.79593 12.5523 3.21319 13 3.7279 13Z"
                      fill="#F3F3F3"
                    />
                    <path
                      d="M18.6954 11H7.39986C6.91603 11 6.5238 11.4209 6.5238 11.94V12.06C6.5238 12.5791 6.91603 13 7.39986 13H18.6954C19.1792 13 19.5714 12.5791 19.5714 12.06V11.94C19.5714 11.4209 19.1792 11 18.6954 11Z"
                      fill="#F3F3F3"
                    />
                    <path
                      d="M18.6954 16H3.67198C3.18815 16 2.79593 16.4209 2.79593 16.94V17.06C2.79593 17.5791 3.18815 18 3.67198 18H18.6954C19.1792 18 19.5714 17.5791 19.5714 17.06V16.94C19.5714 16.4209 19.1792 16 18.6954 16Z"
                      fill="#F3F3F3"
                    />
                    <path
                      d="M18.6954 6H3.67198C3.18815 6 2.79593 6.42085 2.79593 6.94V7.06C2.79593 7.57915 3.18815 8 3.67198 8H18.6954C19.1792 8 19.5714 7.57915 19.5714 7.06V6.94C19.5714 6.42085 19.1792 6 18.6954 6Z"
                      fill="#F3F3F3"
                    />
                  </svg>
                </span>
                <p>Products</p>
              </button>
            </div>
            <div className="headerSearch">
              <input
                type="text"
                placeholder={text} // 🔹 animasiyalı placeholder
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M15.25 15.25L11.8855 11.8795M13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                    stroke="#232323"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </Link>

              {/* 🔹 Inputda mətn olduqda nəticə paneli açılsın */}
              {searchValue.trim().length > 0 && (
                <div className="headerSearchResults">
                  <SearchResults />
                </div>
              )}
            </div>

            <div className="salesOff">
              <Link href="#">
                <img src="/icons/sales.svg" alt="sales" />
                <span>Sales Off</span>
              </Link>
            </div>
            <div className="headerMainLinks">
              <Link href="#">
                <div className="userProfile">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M4.5 12.0498H6.27344C7.11174 12.4075 8.03047 12.6123 9 12.6123C9.968 12.6123 10.8892 12.4076 11.7256 12.0498H13.5C15.5437 12.0498 17.2002 13.7063 17.2002 15.75V16.3125C17.2002 16.8023 16.8023 17.2002 16.3125 17.2002H1.6875C1.19769 17.2002 0.799805 16.8023 0.799805 16.3125V15.75C0.799805 13.7063 2.45628 12.0498 4.5 12.0498ZM9 0.799805C11.3531 0.799805 13.2627 2.70941 13.2627 5.0625C13.2627 7.41559 11.3531 9.3252 9 9.3252C6.64691 9.3252 4.7373 7.41559 4.7373 5.0625C4.7373 2.70941 6.64691 0.799805 9 0.799805Z"
                        stroke="black"
                        stroke-width="1.6"
                      />
                    </svg>
                  </span>
                  <p>Login/Sign Up</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g opacity="0.5">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.31307 3.64644C6.50834 3.45119 6.82485 3.45118 7.0201 3.64644L11.0201 7.64644C11.2154 7.8417 11.2154 8.15821 11.0201 8.35347L7.0201 12.3535C6.82485 12.5487 6.50834 12.5487 6.31307 12.3535C6.11781 12.1582 6.11781 11.8417 6.31307 11.6464L9.95956 7.99996L6.31307 4.35347C6.11781 4.15821 6.11781 3.8417 6.31307 3.64644Z"
                          fill="#22282F"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </Link>
              <Link href="#">
                <div className="userProfile">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M1.02599 8.49492C0.993847 8.33832 0.991485 8.17489 1.01909 8.01702C1.04669 7.85915 1.10353 7.711 1.18529 7.5838C1.26705 7.45661 1.37159 7.35371 1.49097 7.28293C1.61035 7.21215 1.74143 7.17534 1.87427 7.17529H17.1257C17.2586 7.17534 17.3896 7.21215 17.509 7.28293C17.6284 7.35371 17.7329 7.45661 17.8147 7.5838C17.8965 7.711 17.9533 7.85915 17.9809 8.01702C18.0085 8.17489 18.0062 8.33832 17.974 8.49492L16.3903 16.1906C16.2957 16.6503 16.0773 17.0584 15.77 17.3501C15.4626 17.6418 15.0837 17.8002 14.6937 17.8003H4.30628C3.91626 17.8002 3.53745 17.6418 3.23005 17.3501C2.92265 17.0584 2.70431 16.6503 2.60973 16.1906L1.02599 8.49598V8.49492Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.87646 11.4253V13.5503M12.1235 11.4253V13.5503M4.25293 7.17529L7.75097 0.800293M14.7471 7.17529L11.249 0.800293"
                        stroke="black"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                  <p>
                    Basket <strong>(2)</strong>
                  </p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g opacity="0.5">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.31307 3.64644C6.50834 3.45119 6.82485 3.45118 7.0201 3.64644L11.0201 7.64644C11.2154 7.8417 11.2154 8.15821 11.0201 8.35347L7.0201 12.3535C6.82485 12.5487 6.50834 12.5487 6.31307 12.3535C6.11781 12.1582 6.11781 11.8417 6.31307 11.6464L9.95956 7.99996L6.31307 4.35347C6.11781 4.15821 6.11781 3.8417 6.31307 3.64644Z"
                          fill="#22282F"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;





























// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import SearchResults from "@/components/Mixed/SearchResults";

// const HeaderMain = () => {
//   const [text, setText] = useState("");
//   const [mode, setMode] = useState("typing"); 
//   const [idx, setIdx] = useState(0);

//   // 🔹 Statik placeholder mətnləri
//   const placeholders = [
//     "Search products, brands, anything ..",
//     "phone, golden, candle axtar...",
//   ];

//   // 🔹 Placeholder üçün typewriter animasiyası
//   useEffect(() => {
//     let timeout;
//     const full = placeholders[idx] || "";

//     if (mode === "typing") {
//       timeout = setTimeout(() => {
//         setText(full.slice(0, text.length + 1));
//         if (text.length + 1 === full.length) {
//           setMode("pausing");
//         }
//       }, 150); // yazma sürəti
//     } else if (mode === "pausing") {
//       timeout = setTimeout(() => {
//         setMode("deleting");
//       }, 1000); // tam mətn olanda gözləmə
//     } else if (mode === "deleting") {
//       timeout = setTimeout(() => {
//         setText(full.slice(0, text.length - 1));
//         if (text.length - 1 === 0) {
//           setIdx((prev) => (prev + 1) % placeholders.length);
//           setMode("typing");
//         }
//       }, 50); // silmə sürəti
//     }

//     return () => clearTimeout(timeout);
//   }, [text, mode, idx, placeholders]);

//   return (
//     <div className="container">
//       <div className="headerMain">
//         <div className="headerMainItem">
//           <div className="headerLogo">
//             <Link href="/">
//               <img src="/icons/logo.svg" alt="logo" />
//             </Link>
//           </div>
//           <div className="headerMainRight">
//             <div className="productsMenuButton">
//               <button>
//                 <span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="23"
//                     height="24"
//                     viewBox="0 0 23 24"
//                     fill="none"
//                   >
//                     <path
//                       d="M3.7279 13C4.24262 13 4.65987 12.5523 4.65987 12C4.65987 11.4477 4.24262 11 3.7279 11C3.21319 11 2.79593 11.4477 2.79593 12C2.79593 12.5523 3.21319 13 3.7279 13Z"
//                       fill="#F3F3F3"
//                     />
//                     <path
//                       d="M18.6954 11H7.39986C6.91603 11 6.5238 11.4209 6.5238 11.94V12.06C6.5238 12.5791 6.91603 13 7.39986 13H18.6954C19.1792 13 19.5714 12.5791 19.5714 12.06V11.94C19.5714 11.4209 19.1792 11 18.6954 11Z"
//                       fill="#F3F3F3"
//                     />
//                     <path
//                       d="M18.6954 16H3.67198C3.18815 16 2.79593 16.4209 2.79593 16.94V17.06C2.79593 17.5791 3.18815 18 3.67198 18H18.6954C19.1792 18 19.5714 17.5791 19.5714 17.06V16.94C19.5714 16.4209 19.1792 16 18.6954 16Z"
//                       fill="#F3F3F3"
//                     />
//                     <path
//                       d="M18.6954 6H3.67198C3.18815 6 2.79593 6.42085 2.79593 6.94V7.06C2.79593 7.57915 3.18815 8 3.67198 8H18.6954C19.1792 8 19.5714 7.57915 19.5714 7.06V6.94C19.5714 6.42085 19.1792 6 18.6954 6Z"
//                       fill="#F3F3F3"
//                     />
//                   </svg>
//                 </span>
//                 <p>Products</p>
//               </button>
//             </div>
//             <div className="headerSearch">
//               <input
//                 type="text"
//                 placeholder={text} // 🔹 animasiyalı placeholder
//               />
//               <Link href="#">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="17"
//                   height="17"
//                   viewBox="0 0 17 17"
//                   fill="none"
//                 >
//                   <path
//                     d="M15.25 15.25L11.8855 11.8795M13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
//                     stroke="#232323"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                   />
//                 </svg>
//               </Link>
//               <SearchResults />
//             </div>





//             <div className="salesOff">
//               <Link href="#">
//                 <img src="/icons/sales.svg" alt="sales" />
//                 <span>Sales Off</span>
//               </Link>
//             </div>
//             <div className="headerMainLinks">
//               <Link href="#">
//                 <div className="userProfile">
//                   <span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="18"
//                       height="18"
//                       viewBox="0 0 18 18"
//                       fill="none"
//                     >
//                       <path
//                         d="M4.5 12.0498H6.27344C7.11174 12.4075 8.03047 12.6123 9 12.6123C9.968 12.6123 10.8892 12.4076 11.7256 12.0498H13.5C15.5437 12.0498 17.2002 13.7063 17.2002 15.75V16.3125C17.2002 16.8023 16.8023 17.2002 16.3125 17.2002H1.6875C1.19769 17.2002 0.799805 16.8023 0.799805 16.3125V15.75C0.799805 13.7063 2.45628 12.0498 4.5 12.0498ZM9 0.799805C11.3531 0.799805 13.2627 2.70941 13.2627 5.0625C13.2627 7.41559 11.3531 9.3252 9 9.3252C6.64691 9.3252 4.7373 7.41559 4.7373 5.0625C4.7373 2.70941 6.64691 0.799805 9 0.799805Z"
//                         stroke="black"
//                         stroke-width="1.6"
//                       />
//                     </svg>
//                   </span>
//                   <p>Login/Sign Up</p>
//                   <span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                     >
//                       <g opacity="0.5">
//                         <path
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                           d="M6.31307 3.64644C6.50834 3.45119 6.82485 3.45118 7.0201 3.64644L11.0201 7.64644C11.2154 7.8417 11.2154 8.15821 11.0201 8.35347L7.0201 12.3535C6.82485 12.5487 6.50834 12.5487 6.31307 12.3535C6.11781 12.1582 6.11781 11.8417 6.31307 11.6464L9.95956 7.99996L6.31307 4.35347C6.11781 4.15821 6.11781 3.8417 6.31307 3.64644Z"
//                           fill="#22282F"
//                         />
//                       </g>
//                     </svg>
//                   </span>
//                 </div>
//               </Link>
//               <Link href="#">
//                 <div className="userProfile">
//                   <span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="19"
//                       height="19"
//                       viewBox="0 0 19 19"
//                       fill="none"
//                     >
//                       <path
//                         d="M1.02599 8.49492C0.993847 8.33832 0.991485 8.17489 1.01909 8.01702C1.04669 7.85915 1.10353 7.711 1.18529 7.5838C1.26705 7.45661 1.37159 7.35371 1.49097 7.28293C1.61035 7.21215 1.74143 7.17534 1.87427 7.17529H17.1257C17.2586 7.17534 17.3896 7.21215 17.509 7.28293C17.6284 7.35371 17.7329 7.45661 17.8147 7.5838C17.8965 7.711 17.9533 7.85915 17.9809 8.01702C18.0085 8.17489 18.0062 8.33832 17.974 8.49492L16.3903 16.1906C16.2957 16.6503 16.0773 17.0584 15.77 17.3501C15.4626 17.6418 15.0837 17.8002 14.6937 17.8003H4.30628C3.91626 17.8002 3.53745 17.6418 3.23005 17.3501C2.92265 17.0584 2.70431 16.6503 2.60973 16.1906L1.02599 8.49598V8.49492Z"
//                         stroke="black"
//                         stroke-width="2"
//                         stroke-linejoin="round"
//                       />
//                       <path
//                         d="M6.87646 11.4253V13.5503M12.1235 11.4253V13.5503M4.25293 7.17529L7.75097 0.800293M14.7471 7.17529L11.249 0.800293"
//                         stroke="black"
//                         stroke-width="1.6"
//                         stroke-linecap="round"
//                       />
//                     </svg>
//                   </span>
//                   <p>
//                     Basket <strong>(2)</strong>
//                   </p>
//                   <span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                     >
//                       <g opacity="0.5">
//                         <path
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                           d="M6.31307 3.64644C6.50834 3.45119 6.82485 3.45118 7.0201 3.64644L11.0201 7.64644C11.2154 7.8417 11.2154 8.15821 11.0201 8.35347L7.0201 12.3535C6.82485 12.5487 6.50834 12.5487 6.31307 12.3535C6.11781 12.1582 6.11781 11.8417 6.31307 11.6464L9.95956 7.99996L6.31307 4.35347C6.11781 4.15821 6.11781 3.8417 6.31307 3.64644Z"
//                           fill="#22282F"
//                         />
//                       </g>
//                     </svg>
//                   </span>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderMain;
