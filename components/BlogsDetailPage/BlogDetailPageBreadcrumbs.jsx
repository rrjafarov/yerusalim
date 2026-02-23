import React from "react";
import Link from "next/link";

const BlogDetailPageBreadcrumbs = ({blogData}) => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span>/</span>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <span>/</span>
          <li>{blogData.title}</li>
        </ul>
      </nav>
    </div>
  );
};
export default BlogDetailPageBreadcrumbs;
