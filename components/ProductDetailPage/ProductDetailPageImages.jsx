// // "use client";
// // import React, { useRef, useState } from "react";
// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from "swiper/react";

// // // Import Swiper styles
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";

// // import { Navigation, Autoplay, Pagination } from "swiper/modules";
// // import Link from "next/link";
// // import Image from "next/image";

// // const ProductDetailPageImages = () => {
// //   return (
// //     <Swiper
// //       navigation={true}
// //       loop
// //       modules={[Navigation, Autoplay, Pagination]}
// //       className="mySwiper productDpSliderSwiper"
// //       spaceBetween={20}
// //       speed={900}
// //       autoplay={{
// //         delay: 3000,
// //         disableOnInteraction: false,
// //       }}
// //       pagination={{
// //         clickable: true, // bullet-lar kliklenə bilsin
// //       }}
// //     >
// //       <SwiperSlide>
// //         <div className="productDetailPageLeftSlider">
// //           <Image
// //             src="/img/productDPimg.png"
// //             alt="productImg"
// //             width={720}
// //             height={720}
// //           />
// //         </div>
// //       </SwiperSlide>
// //       <SwiperSlide>
// //         <div className="productDetailPageLeftSlider">
// //           <Image
// //             src="/img/productDPimg.png"
// //             alt="productImg"
// //             width={720}
// //             height={720}
// //           />
// //         </div>
// //       </SwiperSlide>
// //       <div className="productDetailPageLeftSliderTopButtons">
// //         <div className="productDetailPageLeftSliderTopButtonBestSeller">
// //           <button>BEST SELLER</button>
// //         </div>
// //         <div className="productDetailPageLeftSliderTopButtonLimited">
// //           <button>LIMITED EDITION</button>
// //         </div>
// //       </div>
// //     </Swiper>
// //   );
// // };

// // export default ProductDetailPageImages;















// "use client";
// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Fancybox style (yalnız bu əlavədir)
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// import { Navigation, Autoplay, Pagination } from "swiper/modules";
// import Link from "next/link";
// import Image from "next/image";

// const ProductDetailPageImages = () => {
//   return (
//     <Swiper
//       navigation={true}
//       loop
//       modules={[Navigation, Autoplay, Pagination]}
//       className="mySwiper productDpSliderSwiper"
//       spaceBetween={20}
//       speed={900}
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//       }}
//     >
//       <SwiperSlide>
//         <div className="productDetailPageLeftSlider">
//           <a
//             href="/img/productDPimg.png"
//             data-fancybox="product-gallery"
//           >
//             <Image
//               src="/img/productDPimg.png"
//               alt="productImg"
//               width={720}
//               height={720}
//             />
//           </a>
//         </div>
//       </SwiperSlide>

//       <SwiperSlide>
//         <div className="productDetailPageLeftSlider">
//           <a
//             href="/img/productDPimg.png"
//             data-fancybox="product-gallery"
//           >
//             <Image
//               src="/img/productDPimg.png"
//               alt="productImg"
//               width={720}
//               height={720}
//             />
//           </a>
//         </div>
//       </SwiperSlide>

//       <div className="productDetailPageLeftSliderTopButtons">
//         <div className="productDetailPageLeftSliderTopButtonBestSeller">
//           <button>BEST SELLER</button>
//         </div>
//         <div className="productDetailPageLeftSliderTopButtonLimited">
//           <button>LIMITED EDITION</button>
//         </div>
//       </div>
//     </Swiper>
//   );
// };

// export default ProductDetailPageImages;









































"use client";
import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

// Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const ProductDetailPageImages = () => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="product-gallery"]', {
      Thumbs: {
        autoStart: true,
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <Swiper
      navigation={true}
      loop
      modules={[Navigation, Autoplay, Pagination]}
      className="mySwiper productDpSliderSwiper"
      spaceBetween={20}
      speed={900}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide>
        <div className="productDetailPageLeftSlider">
          <a
            href="/img/productDPimg.png"
            data-fancybox="product-gallery"
          >
            <Image
              src="/img/productDPimg.png"
              alt="productImg"
              width={720}
              height={720}
            />
          </a>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="productDetailPageLeftSlider">
          <a
            href="/img/productDPimg.png"
            data-fancybox="product-gallery"
          >
            <Image
              src="/img/productDPimg.png"
              alt="productImg"
              width={720}
              height={720}
            />
          </a>
        </div>
      </SwiperSlide>

      <div className="productDetailPageLeftSliderTopButtons">
        <div className="productDetailPageLeftSliderTopButtonBestSeller">
          <button>BEST SELLER</button>
        </div>
        <div className="productDetailPageLeftSliderTopButtonLimited">
          <button>LIMITED EDITION</button>
        </div>
      </div>
    </Swiper>
  );
};

export default ProductDetailPageImages;

