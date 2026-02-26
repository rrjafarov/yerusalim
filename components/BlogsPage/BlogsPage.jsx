"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "@/components/Mixed/BlogCard";
import Pagination from "@/components/Mixed/Pagination";
import Loading from "@/components/Loading";

const BlogsPage = ({ blogsData, blogsCategoryData }) => {
  const blogsCategories = blogsCategoryData?.data?.data || [];
  const allBlogs = blogsData?.data?.data || [];

  const [activeCategory, setActiveCategory] = useState("All posts");
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFilteredBlogs(allBlogs);
  }, [allBlogs]);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    setLoading(true);

    setTimeout(() => {
      if (categoryName === "All posts") {
        setFilteredBlogs(allBlogs);
      } else {
        const filtered = allBlogs.filter((blogItem) => {
          const cats = blogItem.categories || [];
          return cats.some((c) => c?.name === categoryName);
        });
        setFilteredBlogs(filtered);
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="blogsPage">
      <div className="container">
        <h2>Discover candle care tips, fragrance guides every day..</h2>

        <div className="blogsPageCategories">
          <ul>
            <li
              className={activeCategory === "All posts" ? "activeCategory" : ""}
              onClick={() => handleCategoryClick("All posts")}
            >
              All posts
            </li>

            {blogsCategories.map((category) => (
              <li
                key={category.id || category.name}
                className={activeCategory === category.name ? "activeCategory" : ""}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <>
            {filteredBlogs.length === 0 ? (
              <div className="noBlogFound" id="noProductFound">Blog not found</div>
            ) : (
              <div className="blogsPageCards">
                <div className="row">
                  {filteredBlogs.map((blogItem) => (
                    <div key={blogItem.id} className="xl-6 lg-6 md-6 sm-12">
                      <BlogCard
                        title={blogItem.title}
                        image={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${blogItem.main_image}`}
                        date={blogItem.published_date}
                        url={blogItem.url_slug}
                        id={blogItem.id}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        <Pagination />
      </div>
    </div>
  );
};

export default BlogsPage;
