import React from "react";
import Link from "next/link";

const BrandsBreadcrumbs = ({brandsNameData}) => {
  return (
    <div>
      <div className="container">
        <nav className="breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <span>/</span>
            <li>{brandsNameData.data.page_name}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BrandsBreadcrumbs;
