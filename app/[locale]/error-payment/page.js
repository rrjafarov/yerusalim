// import React from "react";
// import { TbCreditCardOff } from "react-icons/tb";
// import axiosInstance from "@/lib/axios";
// import { cookies } from "next/headers";
// import Link from "next/link";

// async function getTranslations() {
//   const cookieStore = await cookies();
//   const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az";

//   try {
//     const { data: about } = await axiosInstance.get(`/translation-list`, {
//       headers: { Lang: langValue },
//       cache: "no-store",
//     });
//     return about;
//   } catch (error) {
//     throw error;
//   }
// }
// const page = async ({ searchParams }) => {
//   const t = await getTranslations();

//   return (
//     <div className="successPaymentDesign">
//       <TbCreditCardOff className="successPayError" color="#ec1f27" />
//       <span>{t?.paymentError}</span>
//       <button>
//         <Link href="/">{t?.goToHomePage}</Link>
//       </button>
//     </div>
//   );
// };

// export default page;












// !llllllllllll



import React from "react";
import { TbCreditCardOff } from "react-icons/tb";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getTranslations() {
  const cookieStore = await cookies();
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az";

  try {
    const { data: about } = await axiosInstance.get(`/translation-list`, {
      headers: { Lang: langValue },
      cache: "no-store",
    });
    return about;
  } catch (error) {
    throw error;
  }
}

const page = async ({ searchParams }) => {
  const cookieStore = await cookies();
  const hasAccess = cookieStore.get("allow-access");

  if (!hasAccess) {
    notFound();
  }

  const t = await getTranslations();

  return (
    <div className="successPaymentDesign">
      <TbCreditCardOff className="successPayError" color="#ec1f27" />
      <span>{t?.paymentError}</span>
      <button>
        <Link href="/">{t?.goToHomePage}</Link>
      </button>
    </div>
  );
};

export default page;