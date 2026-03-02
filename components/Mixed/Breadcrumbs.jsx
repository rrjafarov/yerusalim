import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ selectedCategory }) => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span>/</span>
          <li>
            <Link href="/products">Products</Link>
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
