import Advantages from "@/components/HomePage/Advantages";
import HeroSlider from "@/components/HomePage/HeroSlider";
import HomePageBlogs from "@/components/HomePage/HomePageBlogs";
import HomePageBrands from "@/components/HomePage/HomePageBrands";
import HomePageCategory from "@/components/HomePage/HomePageCategory";
import MostPopularProduct from "@/components/HomePage/MostPopularProduct";
import NewProducts from "@/components/HomePage/NewProducts";
import SeoContent from "@/components/HomePage/SeoContent";
import ShopCategory from "@/components/HomePage/ShopCategory";
import ProductCard from "@/components/Mixed/ProductCard";
import React from "react";

import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";


async function fetchCategoryPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data: about } = await axiosInstance.get(
      `/page-data/product-categoires`,
      {
        headers: { Lang: lang.value },
        cache: "no-store",
      },
    );
    return about;
  } catch (error) {
    throw error;
  }
}


async function fetchBlogsHomeData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: blog } = await axiosInstance.get(`/page-data/blog-list`, {
      headers: { Lang: lang.value },
      cache: "no-store",
    });
    return blog;
  } catch (error) {
    throw error;
  }
}



const page = async () => {
  const categoryPageData = await fetchCategoryPageData();
  const categoryData = categoryPageData;

  const blogsHomePageData = await fetchBlogsHomeData();
  const blogsData = blogsHomePageData.data.data;

  return (
    <div>
      <HeroSlider />
      <HomePageCategory categoryData={categoryData} />
      <MostPopularProduct />
      <Advantages />
      <NewProducts />
      <ShopCategory />
      <div className="homepageBrandAndBlog">
        <HomePageBrands />
        <HomePageBlogs blogsData={blogsData} />
      </div>
      <SeoContent />
    </div>
  );
};

export default page;
