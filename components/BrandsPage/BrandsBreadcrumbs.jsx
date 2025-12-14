import React from "react";
import Link from "next/link";

const BrandsBreadcrumbs = () => {
  return (
    <div>
      <div className="container">
        <nav className="breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <span>/</span>
            <li>Brands</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BrandsBreadcrumbs;
