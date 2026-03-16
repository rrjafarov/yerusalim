import React from "react";
import Link from "next/link";

const BrandsBreadcrumbs = ({brandsNameData,t}) => {
  return (
    <div>
      <div className="container">
        <nav className="breadcrumbs">
          <ul>
            <li>
              <Link href="/">{t?.breadcrumbs}</Link>
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
