
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

const page = () => {
  return (
    <div>
      <HeroSlider />
      <HomePageCategory />
      <MostPopularProduct />
      <Advantages />
      <NewProducts />
      <ShopCategory />
      <div className="homepageBrandAndBlog">
        <HomePageBrands />
        <HomePageBlogs />
      </div>
      <SeoContent />
    </div>
  );
};

export default page;
