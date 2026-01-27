import React from "react";
import "./blogs.scss";
import BlogsPageHero from "@/components/BlogsPage/BlogsPageHero";
import BlogsPage from "@/components/BlogsPage/BlogsPage";
import BlogsBreadcrumbs from "@/components/BlogsPage/BlogsBreadcrumbs";

const page = () => {
  return (
    <div>
      <BlogsPageHero />
      <div className="productPageBackground">
        <BlogsBreadcrumbs />
        <BlogsPage />
      </div>
    </div>
  );
};

export default page;
