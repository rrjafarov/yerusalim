"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Loading from "@/components/Loading";
import ProductCard from "../Mixed/ProductCard";
import axiosInstance from "@/lib/axios";

const MostPopularProduct = ({ categoryData, bestSellerData }) => {
  const [activeCategory, setActiveCategory] = useState("All categories");
  const [products, setProducts] = useState(bestSellerData || []);
  const [loading, setLoading] = useState(false);

  // const topCategories =
  //   categoryData?.data?.data?.filter((item) => !item.fk_id_page) || [];



  const topCategories =
  categoryData?.data?.data?.filter(
    (item) => !item.fk_id_page && !item.top_category
  ) || [];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = `/page-data/product-list?per_page=12&filters[0][key]=special_badge&filters[0][operator]=IN&filters[0][value][]=best_seller`;

        if (activeCategory !== "All categories") {
          url += `&filters[1][key]=category&filters[1][operator]=IN&filters[1][value]=${activeCategory}`;
        }

        const { data } = await axiosInstance.get(url);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setProducts(data.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [activeCategory]);

  return (
    <div className="mostPopularProduct">
      <div className="container">
        <div className="mostPopularProductItem">
          <h2>Most Popular</h2>

          {/* {topCategories.length > 0 && (
            <div className="mostPopularCategory">
              <ul>
                <li
                  className={activeCategory === "All categories" ? "activeCategory" : ""}
                  onClick={() => setActiveCategory("All categories")}
                >
                  All categories
                </li>
                {topCategories.map((category) => (
                  <li
                    key={category.id}
                    className={activeCategory === category.id ? "activeCategory" : ""}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
          )} */}




          {topCategories.length > 0 && (
  <div className="mostPopularCategory">
    <ul style={{ display: "flex", alignItems: "center" }}>
      
      {/* SABİT - All categories */}
      <li
        className={activeCategory === "All categories" ? "activeCategory" : ""}
        onClick={() => setActiveCategory("All categories")}
        style={{ flexShrink: 0, marginRight: "8px" }}
      >
        All categories
      </li>

      {/* SLIDER - digər kateqoriyalar */}
      <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={10}
          loop={true}
          loopAdditionalSlides={topCategories.length}
          speed={3000}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: false,
          }}
        >
          {topCategories.map((category) => (
            <SwiperSlide key={category.id} style={{ width: "auto", paddingRight: "8px" }}>
              <li
                className={activeCategory === category.id ? "activeCategory" : ""}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </ul>
  </div>
)}









          {loading ? (
            <div style={{ padding: "3rem 0" }}>
              <Loading />
            </div>
          ) : (
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
          )}

          <div className="mostPopularProductButton">
            <Link href="/products?status=is_bestseller">
              <button>Shop All Products</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularProduct;