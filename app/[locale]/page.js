import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
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
      <Header />
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
      <Footer />
    </div>
  );
};

export default page;
