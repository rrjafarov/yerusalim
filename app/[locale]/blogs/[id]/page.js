import BlogsDetailHero from "@/components/BlogsDetailPage/BlogsDetailHero";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import React from "react";
import "../blogs.scss";
import BlogDetailDescription from "@/components/BlogsDetailPage/BlogDetailDescription";
import PhotoGallery from "@/components/Mixed/PhotoGallery";
import BlogDetailVideo from "@/components/BlogsDetailPage/BlogDetailVideo";
import OtherBlogs from "@/components/BlogsDetailPage/OtherBlogs";
import BlogGallery from "@/components/BlogsDetailPage/BlogGallery";

const page = () => {
  return (
    <div>
      <Header />
      <div className="productPageBackground">
        <Breadcrumbs />
        <BlogsDetailHero />
      </div>
      <BlogDetailDescription />

      <div className="blogDpColor">
        {/* <PhotoGallery /> */}
        <BlogGallery />
        <BlogDetailVideo />
        <OtherBlogs />
      </div>
      <Footer />
    </div>
  );
};

export default page;
