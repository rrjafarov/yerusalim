import React from "react";
import Link from "next/link";

const BlogDetailPageBreadcrumbs = ({blogData,t}) => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">{t?.breadcrumbs}</Link>
          </li>
          <span>/</span>
          <li>
            <Link href="/blogs">{t?.blogs}</Link>
          </li>
          <span>/</span>
          <li>{blogData.title}</li>
        </ul>
      </nav>
    </div>
  );
};
export default BlogDetailPageBreadcrumbs;
