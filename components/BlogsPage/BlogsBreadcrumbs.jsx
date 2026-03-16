import Link from "next/link";
import React from "react";

const BlogsBreadcrumbs = ({blogNameData,t}) => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">{t?.breadcrumbs}</Link>
          </li>
          <span>/</span>
          <li>{blogNameData.data.page_name}</li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogsBreadcrumbs;
