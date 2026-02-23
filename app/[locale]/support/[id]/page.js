// import DeliveryTerms from "@/components/SupportPaegs/DeliveryTerms";
// import React from "react";
// import axiosInstance from "@/lib/axios";
// import { cookies } from "next/headers";

// /* ================= SUPPORT FETCH ================= */
// async function fetchSupportById(id) {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE")?.value || "az";

//   try {
//     const { data } = await axiosInstance.get(`/first-page-data/${id}`, {
//       headers: { Lang: lang },
//       cache: "no-store",
//     });
//     return data?.data || data;
//   } catch (error) {
//     console.error("Support fetch error:", error);
//     return null;
//   }
// }

// const page = async ({ params }) => {
//   const { id: slug } = await params;
//   const id = slug.split("-").pop();

//   const supportData = await fetchSupportById(id);

//   return (
//     <div>
//       <DeliveryTerms supportData={supportData} />
//     </div>
//   );
// };

// export default page;










// !genrate var asagida

import DeliveryTerms from "@/components/SupportPaegs/DeliveryTerms";
import React from "react";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

/* ================= SUPPORT FETCH ================= */
async function fetchSupportById(id) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "az";

  try {
    const { data } = await axiosInstance.get(`/first-page-data/${id}`, {
      headers: { Lang: lang },
      cache: "no-store",
    });
    return data?.data || data;
  } catch (error) {
    console.error("Support fetch error:", error);
    return null;
  }
}

/* ================= GENERATE METADATA ================= */
export async function generateMetadata({ params }) {
  const { id: slug } = await params;
  const id = slug.split("-").pop();

  const supportData = await fetchSupportById(id);

  if (!supportData) {
    return {
      title: "Çatdırılma Şərtləri",
      description: "",
    };
  }
  return {
    title:
      supportData.seo_title ||
      supportData.meta_title ||
      supportData.title ||
      "Çatdırılma Şərtləri",

    description:
      supportData.seo_description ||
      supportData.meta_description ||
      supportData.description ||
      supportData.short_description ||
      "",

    keywords: supportData.keywords || supportData.tags || [],

    openGraph: {
      title:
        supportData.seo_title ||
        supportData.meta_title ||
        supportData.title ||
        "Çatdırılma Şərtləri",
      description:
        supportData.seo_description ||
        supportData.meta_description ||
        supportData.description ||
        supportData.short_description ||
        "",
    },

  };
}

const page = async ({ params }) => {
  const { id: slug } = await params;
  const id = slug.split("-").pop();

  const supportData = await fetchSupportById(id);

  return (
    <div>
      <DeliveryTerms supportData={supportData} />
    </div>
  );
};

export default page;
