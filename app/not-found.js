// import NotFound from "@/components/NotFound";
// import React from "react";
// import axiosInstance from "@/lib/axios";
// import { cookies } from "next/headers";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
// import "../app/[locale]/globals.scss";

// async function fetchCategoryPageData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
//   try {
//     const { data: about } = await axiosInstance.get(
//       `/page-data/product-categoires`,
//       {
//         headers: { Lang: lang.value },
//         cache: "no-store",
//       },
//     );
//     return about;
//   } catch (error) {
//     throw error;
//   }
// }

// async function fetchContactPageData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
//   try {
//     const { data: about } = await axiosInstance.get(`/page-data/contact`, {
//       headers: { Lang: lang.value },
//       cache: "no-store",
//     });
//     return about;
//   } catch (error) {
//     throw error;
//   }
// }

// const notfound = async () => {
//   const categoryPageData = await fetchCategoryPageData();
//   const categoryData = categoryPageData;

//   const contactPageData = await fetchContactPageData();
//   const contactData = contactPageData.data;

//   return (
//     <html>
//       <body>
//         <Header contactData={contactData} categoryData={categoryData} />
//         <NotFound />
//         <Footer contactData={contactData} />
//       </body>
//     </html>
//   );
// };

// export default notfound;










import NotFound from "@/components/NotFound";
import React from "react";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "../app/[locale]/globals.scss";

/* STATIC MULTI-LANG META */
export function generateMetadata({ params }) {
  const locale = params.locale || "az"; // [locale] parametri router-dən gəlir

  const titles = {
    az: "Səhifə tapılmadı - 404",
    en: "Page not found - 404",
    ru: "Страница не найдена - 404",
  };

  const descriptions = {
    az: "Üzr istəyirik, tələb etdiyiniz səhifə tapılmadı.",
    en: "Sorry, the page you requested could not be found.",
    ru: "Извините, запрошенная страница не найдена.",
  };

  return {
    title: titles[locale] || titles.az,
    description: descriptions[locale] || descriptions.az,
  };
}

async function fetchCategoryPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: about } = await axiosInstance.get(
      `/page-data/product-categoires`,
      {
        headers: { Lang: lang.value },
        cache: "no-store",
      },
    );
    return about;
  } catch (error) {
    throw error;
  }
}

async function fetchContactPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: about } = await axiosInstance.get(`/page-data/contact`, {
      headers: { Lang: lang.value },
      cache: "no-store",
    });
    return about;
  } catch (error) {
    throw error;
  }
}

const notfound = async ({ params }) => {
  const categoryPageData = await fetchCategoryPageData();
  const categoryData = categoryPageData;

  const contactPageData = await fetchContactPageData();
  const contactData = contactPageData.data;

  return (
    <html>
      <body>
        <Header contactData={contactData} categoryData={categoryData} />
        <NotFound />
        <Footer contactData={contactData} />
      </body>
    </html>
  );
};

export default notfound;
