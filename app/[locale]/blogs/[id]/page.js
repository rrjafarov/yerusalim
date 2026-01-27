import BlogsDetailHero from "@/components/BlogsDetailPage/BlogsDetailHero";
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
      <div className="productPageBackground">
        <Breadcrumbs />
        <BlogsDetailHero />
      </div>
      <BlogDetailDescription />

      <div className="blogDpColor">
        <BlogGallery />
        <BlogDetailVideo />
        <OtherBlogs />
      </div>
    </div>
  );
};

export default page;
