// import Link from "next/link";
// import React from "react";

// const AccountTopLinks = () => {
//   return (
//     <div className="accountLinks">
//       <ul>
//         <li>
//           <Link href="/account/profile">My accoount</Link>
//         </li>
//         <li>
//           <Link href="/account/address">My address</Link>
//         </li>
//         <li>
//           <Link href="/account/orders">My orders</Link>
//         </li>
//         <li>
//           <Link href="/account/change-password">Change Password</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default AccountTopLinks;







"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const AccountTopLinks = () => {
  const pathname = usePathname();

  const isActive = (href) => {
    if (!pathname) return false;
    // Məs: /en/account/profile → /account/profile ilə bitir
    return pathname.endsWith(href);
  };

  return (
    <div className="accountLinks">
      <ul>
        <li className={isActive("/account/profile") ? "active" : ""}>
          <Link href="/account/profile">My accoount</Link>
        </li>
        <li className={isActive("/account/address") ? "active" : ""}>
          <Link href="/account/address">My address</Link>
        </li>
        <li className={isActive("/account/orders") ? "active" : ""}>
          <Link href="/account/orders">My orders</Link>
        </li>
        <li className={isActive("/account/change-password") ? "active" : ""}>
          <Link href="/account/change-password">Change Password</Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountTopLinks;
