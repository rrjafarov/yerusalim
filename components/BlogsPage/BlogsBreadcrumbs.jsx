import Link from "next/link";
import React from "react";

const BlogsBreadcrumbs = () => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span>/</span>
          <li>Blogs</li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogsBreadcrumbs;
