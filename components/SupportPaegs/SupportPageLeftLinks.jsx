// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// const SupportPageLeftLinks = () => {
//   const pathname = usePathname();

//   const isActive = (target) => {
//     return pathname.endsWith(target);
//   };

//   return (
//     <div className="supportPageLeftLinks">
//       <ul>
//         <li className={isActive("/support/faq") ? "active" : ""}>
//           <Link href="/support/faq">Faq</Link>
//         </li>
//         <li className={isActive("/support/payment-support") ? "active" : ""}>
//           <Link href="/support/payment-support">Payment</Link>
//         </li>
//         <li className={isActive("/support/delivery-terms") ? "active" : ""}>
//           <Link href="/support/delivery-terms">Delivery terms</Link>
//         </li>
//         {/* <li className={isActive("/support/for-user") ? "active" : ""}>
//           <Link href="/support/for-user">For our users</Link>
//         </li> */}
//       </ul>
//     </div>
//   );
// };

// export default SupportPageLeftLinks;






// !

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SupportPageLeftLinks = ({ supportData }) => {
  const pathname = usePathname();

  const isActive = (target) => {
    // daha etibarlı yoxlama: tam uyğunluq və ya alt-yollarda aktiv hesab et
    if (!pathname) return false;
    return (
      pathname === target ||
      pathname.startsWith(target + "/") ||
      pathname.endsWith(target)
    );
  };

  return (
    <div className="supportPageLeftLinks">
      <ul>
        <li className={isActive("/support/faq") ? "active" : ""}>
          <Link href="/support/faq">Faq</Link>
        </li>

        {supportData?.data?.data?.map((item) => (
          <li
            key={item.id}
            className={
              isActive(`/support/${item.url_slug}-${item.id}`) ? "active" : ""
            }
          >
            <Link href={`/support/${item.url_slug}-${item.id}`}>
              {item.name}
            </Link>
          </li>
        ))}

        {/* <li className={isActive("/support/payment-support") ? "active" : ""}>
          <Link href="/support/payment-support">Payment</Link>
        </li>
        <li className={isActive("/support/delivery-terms") ? "active" : ""}>
          <Link href="/support/delivery-terms">Delivery terms</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default SupportPageLeftLinks;
