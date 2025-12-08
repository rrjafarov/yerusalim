// import React from "react";

// const BlogsPage = () => {
//   return (
//     <div className="blogsPage">
//       <div className="container">
//         <h2>Discover candle care tips, fragrance guides every day..</h2>
//         <div className="blogsPageCategories">

//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogsPage;

"use client";
import React, { useState } from "react";
import BlogCard from "@/components/Mixed/BlogCard";
import Pagination from "@/components/Mixed/Pagination";

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All posts");

  return (
    <div className="blogsPage">
      <div className="container">
        <h2>Discover candle care tips, fragrance guides every day..</h2>
        <div className="blogsPageCategories">
          <ul>
            <li
              className={activeCategory === "All posts" ? "activeCategory" : ""}
              onClick={() => setActiveCategory("All posts")}
            >
              All posts
            </li>
            <li
              className={
                activeCategory === "Candle Care" ? "activeCategory" : ""
              }
              onClick={() => setActiveCategory("Candle Care")}
            >
              Candle Care
            </li>
            <li
              className={
                activeCategory === "Fragrance Guides" ? "activeCategory" : ""
              }
              onClick={() => setActiveCategory("Fragrance Guides")}
            >
              Fragrance Guides
            </li>
            <li
              className={
                activeCategory === "Seasonal Inspiration"
                  ? "activeCategory"
                  : ""
              }
              onClick={() => setActiveCategory("Seasonal Inspiration")}
            >
              Seasonal Inspiration
            </li>
            <li
              className={
                activeCategory === "Home Decor" ? "activeCategory" : ""
              }
              onClick={() => setActiveCategory("Home Decor")}
            >
              Home Decor
            </li>
            <li
              className={
                activeCategory === "Gift Ideas" ? "activeCategory" : ""
              }
              onClick={() => setActiveCategory("Gift Ideas")}
            >
              Gift Ideas
            </li>
          </ul>
        </div>

        <div className="blogsPageCards">
          <div className="row">
            <div className="xl-6 lg-6 md-6 sm-12">
              <BlogCard />
            </div>
            <div className="xl-6 lg-6 md-6 sm-12">
              <BlogCard />
            </div>
            <div className="xl-6 lg-6 md-6 sm-12">
              <BlogCard />
            </div>
            <div className="xl-6 lg-6 md-6 sm-12">
              <BlogCard />
            </div>
            <div className="xl-6 lg-6 md-6 sm-12">
              <BlogCard />
            </div>
            <div className="xl-6 lg-6 md-6 sm-12">
              <BlogCard />
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default BlogsPage;
