// "use client";
// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Autoplay } from "swiper/modules";
// import Link from "next/link";
// import Image from "next/image";
// import ProductCard from "../Mixed/ProductCard";

// const NewProducts = ({newProductsData}) => {
//   return (
//     <div className="mostPopularProduct">
//       <div className="container">
//         <div className="mostPopularProductItem newProductsItem">
//           <h2>New Products</h2>
//           <div className="mostPopularProductSlider">
//             <Swiper
//               navigation={true}
//               loop
//               modules={[Navigation, Autoplay]}
//               className="mySwiper productSliderSwiper"
//               spaceBetween={20}
//               speed={900}
//               slidesPerView={4}
//               autoplay={{
//                 delay: 3000,
//                 disableOnInteraction: false,
//               }}
//               breakpoints={{
//                 0: {
//                   slidesPerView: 1.4,
//                   spaceBetween: 16,
//                 },
//                 480: {
//                   slidesPerView: 2,
//                   spaceBetween: 16,
//                 },
//                 640: {
//                   slidesPerView: 3,
//                   spaceBetween: 18,
//                 },
//                 1024: {
//                   slidesPerView: 4,
//                   spaceBetween: 20,
//                 },
//               }}
//             >
//               <SwiperSlide>
//                 <div className="mostPopularProductSlide">
//                   <ProductCard />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="mostPopularProductSlide">
//                   <ProductCard />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="mostPopularProductSlide">
//                   <ProductCard />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="mostPopularProductSlide">
//                   <ProductCard />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="mostPopularProductSlide">
//                   <ProductCard />
//                 </div>
//               </SwiperSlide>

              
//             </Swiper>
//           </div>
//           <div className="mostPopularProductButton">
//             <Link href="/products?status=is_new">
//               <button>Shop All Products</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewProducts;




// !

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import ProductCard from "../Mixed/ProductCard";

const NewProducts = ({ newProductsData }) => {
  const products = newProductsData || [];

  return (
    <div className="mostPopularProduct">
      <div className="container">
        <div className="mostPopularProductItem newProductsItem">
          <h2>New Products</h2>
          <div className="mostPopularProductSlider">
            <Swiper
              navigation={true}
              loop
              modules={[Navigation, Autoplay]}
              className="mySwiper productSliderSwiper"
              spaceBetween={20}
              speed={900}
              slidesPerView={4}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1.4, spaceBetween: 16 },
                480: { slidesPerView: 2, spaceBetween: 16 },
                640: { slidesPerView: 3, spaceBetween: 18 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
              }}
            >
              {products.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="mostPopularProductSlide">
                    <ProductCard
                      id={item.id}
                      name={item.name}
                      productVariants={item.product_variants}
                      image={item.image_gallery?.[0]}
                      slug={item.url_slug}
                      specialBadge={item.special_badge}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mostPopularProductButton">
            <Link href="/products?status=is_new">
              <button>Shop All Products</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;