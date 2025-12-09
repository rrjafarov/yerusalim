import React from "react";
import BlogCard from "../Mixed/BlogCard";

const OtherBlogs = () => {
  return (
    <div className="otherBlogs">
      <div className="container">
        <div className="otherBlog">
          <h3>Explore Next Blog </h3>
          <div className="otherBlogCards">
            <div className="row">
              <div className="xl-6 lg-6 md-6 sm-12">
                <BlogCard />
              </div>
              <div className="xl-6 lg-6 md-6 sm-12">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherBlogs;
