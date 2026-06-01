import DeliveryTerms from "@/components/SupportPaegs/DeliveryTerms";
import React from "react";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

/* ================= SUPPORT FETCH ================= */
async function fetchSupportById(id) {
  const cookieStore = await cookies();
  // const lang = cookieStore.get("NEXT_LOCALE")?.value || "az";
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅

  try {
    const { data } = await axiosInstance.get(`/first-page-data/${id}`, {
      headers: { Lang: langValue },
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
      openGraph: {
        images: [
          {
            url: "https://yerusalim18.com/og.png",
            width: 1200,
            height: 630,
          },
        ],
      },
      twitter: {
        images: ["https://yerusalim18.com/og.png"],
      },
    };
  }

  const pageTitle =
    supportData.seo_title ||
    supportData.meta_title ||
    supportData.title ||
    "Çatdırılma Şərtləri";

  const pageDescription =
    supportData.seo_description ||
    supportData.meta_description ||
    supportData.description ||
    supportData.short_description ||
    "";

  const imageUrl = "https://yerusalim18.com/og.png"; // burada API-də yoxdur, default istifadə edirik

  return {
    title: pageTitle,
    description: pageDescription,

    keywords: supportData.keywords || supportData.tags || [],

    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: "https://yerusalim18.com",
      siteName: "Yerusalim18",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },

    alternates: {
      canonical: "https://yerusalim18.com",
    },
  };
}





// export async function generateMetadata({ params }) {
//   const { id: slug } = await params;
//   const id = slug.split("-").pop();

//   const supportData = await fetchSupportById(id);

//   if (!supportData) {
//     return {
//       title: "Çatdırılma Şərtləri",
//       description: "",
//     };
//   }
//   return {
//     title:
//       supportData.seo_title ||
//       supportData.meta_title ||
//       supportData.title ||
//       "Çatdırılma Şərtləri",

//     description:
//       supportData.seo_description ||
//       supportData.meta_description ||
//       supportData.description ||
//       supportData.short_description ||
//       "",

//     keywords: supportData.keywords || supportData.tags || [],

//     openGraph: {
//       title:
//         supportData.seo_title ||
//         supportData.meta_title ||
//         supportData.title ||
//         "Çatdırılma Şərtləri",
//       description:
//         supportData.seo_description ||
//         supportData.meta_description ||
//         supportData.description ||
//         supportData.short_description ||
//         "",
//     },

//   };
// }

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
