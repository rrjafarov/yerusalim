// import React from "react";
// import { FaRegCircleCheck } from "react-icons/fa6";
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
//       <FaRegCircleCheck className="successPayError" color="#39b44c" />
//       <span>{t?.paymentSuccess}</span>
//       <button>
//         <Link href="/">{t?.goToHomePage}</Link>
//       </button>
//     </div>
//   );
// };

// export default page;





// !lll



import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
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
      <FaRegCircleCheck className="successPayError" color="#39b44c" />
      <span>{t?.paymentSuccess}</span>
      <button>
        <Link href="/">{t?.goToHomePage}</Link>
      </button>
    </div>
  );
};

export default page;