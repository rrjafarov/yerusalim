
// "use client"
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useRef, useState } from "react";

// const ShopCategory = ({quickLinkData}) => {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (!sectionRef.current) return;
//     let timeoutId = null;

//     const observer = new IntersectionObserver(
//       (entries, obs) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // bir az gec başlasın
//             timeoutId = setTimeout(() => {
//               setIsVisible(true);
//             }, 300);

//             obs.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.3,
//       }
//     );

//     observer.observe(sectionRef.current);

//     return () => {
//       if (timeoutId) clearTimeout(timeoutId);
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div
//       className={`shopCategory ${isVisible ? "is-visible" : ""}`}
//       ref={sectionRef}
//     >
//       <div className="container">
//         <div className="shopCategoryItem">
//           <div className="row">
//             <div className="xl-6 lg-6 md-6 sm-12">
//               <div className="shopCategoryImg">
//                 <Image
//                   src="/img/shopCategory01.png"
//                   alt="shop"
//                   width={1020}
//                   height={1080}
//                 />
//                 <div className="shopCategoryImgAbsolute">
//                   <Link href="#">
//                     <span>Shop by Fragrance</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div className="xl-6 lg-6 md-6 sm-12">
//               <div className="shopCategoryImg">
//                 <Image
//                   src="/img/shopCategory02.png"
//                   alt="shop"
//                   width={1020}
//                   height={1080}
//                 />
//                 <div className="shopCategoryImgAbsolute">
//                   <Link href="#">
//                     <span>Shop by Look</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;


















"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const ShopCategory = ({ quickLinkData = [] }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    let timeoutId = null;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeoutId = setTimeout(() => {
              setIsVisible(true);
            }, 300);

            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`shopCategory ${isVisible ? "is-visible" : ""}`}
    >
      <div className="container">
        <div className="shopCategoryItem">
          <div className="row">
            {quickLinkData?.slice(0, 2).map((item, index) => (
              <div key={item?.id || index} className="xl-6 lg-6 md-6 sm-12">
                <div className="shopCategoryImg">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${item.card_image}`}
                    alt={item.title || "shop category"}
                    width={1020}
                    height={1080}
                  />

                  <div className="shopCategoryImgAbsolute">
                    <Link href={item.redirect_url || "#"}>
                      <span>{item.title}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;

