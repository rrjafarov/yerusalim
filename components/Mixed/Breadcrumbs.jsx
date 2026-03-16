import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ selectedCategory,t }) => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">{t?.breadcrumbs}</Link>
          </li>
          <span>/</span>
          <li>
            <Link href="/products">{t?.products}</Link>
          </li>
          {selectedCategory?.name && (
            <>
              <span>/</span>
              <li>{selectedCategory.name}</li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
export default Breadcrumbs;
