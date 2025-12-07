import React from "react";
import Link from "next/link";

const Breadcrumbs = () => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span>/</span>
          <li>
            <Link href="/products">Category page</Link>
          </li>
          <span>/</span>
          <li>Product</li>
        </ul>
      </nav>
    </div>
  );
};
export default Breadcrumbs;
