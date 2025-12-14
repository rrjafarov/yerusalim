import Link from "next/link";
import React from "react";

const CartBreadcrumbs = () => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span>/</span>
          <li>Basket</li>
        </ul>
      </nav>
    </div>
  );
};

export default CartBreadcrumbs;
