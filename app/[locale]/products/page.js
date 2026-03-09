// import ProductPageHero from "@/components/ProductPage/ProductPageHero";
// import "./products.scss";
// import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
// import SeoContent from "@/components/HomePage/SeoContent";
// import ProductPageDetails from "@/components/ProductPage/ProductPageDetails";
// import axiosInstance from "@/lib/axios";
// import { cookies } from "next/headers";

// // ✅ SEARCH ADDED (searchText parametri əlavə olundu)
// async function fetchProducts(
//   categoryId = null,
//   page = 1,
//   perPage = 12,
//   searchText = null,
// ) {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   try {
//     let url = `/page-data/product-list?page=${page}&per_page=${perPage}`;

//     // 🔎 SEARCH LOGIC
//     if (searchText) {
//       url += `&search_text=${encodeURIComponent(searchText)}`;
//     } else if (categoryId) {
//       url += `&filters[0][operator]=IN&filters[0][key]=category&filters[0][value][]=${categoryId}`;
//     }

//     const { data } = await axiosInstance.get(url, {
//       headers: { Lang: lang?.value || "az" },
//       cache: "no-store",
//     });

//     return data;
//   } catch (error) {
//     console.error("Product fetch error:", error);
//     return null;
//   }
// }

// async function fetchCategoryPageData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   try {
//     const { data } = await axiosInstance.get(
//       `/page-data/product-categoires?per-page=999`,
//       {
//         headers: { Lang: lang?.value || "az" },
//         cache: "no-store",
//       },
//     );
//     return data;
//   } catch (error) {
//     console.error("Category fetch error:", error);
//     return null;
//   }
// }

// async function fetchProductsPageInfo() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   try {
//     const { data } = await axiosInstance.get(`/page-data/page-info`, {
//       headers: { Lang: lang?.value || "az" },
//       cache: "no-store",
//     });

//     return data?.data || null;
//   } catch (error) {
//     console.error("Page info fetch error:", error);
//     return null;
//   }
// }

// async function fetchAttributesData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   try {
//     const { data } = await axiosInstance.get(`/page-data/attributes`, {
//       headers: { Lang: lang?.value || "az" },
//       cache: "no-store",
//     });

//     return data?.data || null;
//   } catch (error) {
//     console.error("Page info fetch error:", error);
//     return null;
//   }
// }

// // ❗ BURAYA TOXUNMURUQ (generateMetadata olduğu kimi qalır)
// export async function generateMetadata({ searchParams }) {
//   const params = await searchParams;

//   const categoryParam = params?.category;
//   const categoryId = categoryParam
//     ? parseInt(categoryParam.split("-").pop())
//     : null;
//   const currentPage = Number(params?.page) || 1;

//   let seoData = null;

//   if (categoryId) {
//     const categoriesData = await fetchCategoryPageData();

//     if (categoriesData?.data?.data) {
//       const foundCategory = categoriesData.data.data.find(
//         (cat) => cat.id === categoryId,
//       );
//       if (foundCategory) {
//         seoData = foundCategory;
//       }
//     }
//   }

//   if (!seoData) {
//     seoData = await fetchProductsPageInfo();
//   }

//   const pageTitle =
//     currentPage > 1
//       ? `${seoData?.meta_title || "Yerusalim18"}`
//       : seoData?.meta_title || "Yerusalim18";

//   const imageUrl = seoData?.og_image || "/favicon.ico";
//   const imageAlt = seoData?.meta_title || "Yerusalim18";
//   const canonicalUrl = "https://adentta.az/products";

//   return {
//     title: pageTitle,
//     description: seoData?.meta_description || "Yerusalim18",
//     openGraph: {
//       title: pageTitle,
//       description: seoData?.meta_description || "",
//       url: canonicalUrl,
//       images: [
//         {
//           url: `https://admin.adentta.az/storage${imageUrl}`,
//           alt: imageAlt,
//           width: 1200,
//           height: 630,
//         },
//       ],
//       site_name: "Yerusalim18",
//       type: "website",
//       locale: "az",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: pageTitle,
//       description: seoData?.meta_description || "",
//       creator: "@Yerusalim18",
//       site: "@Yerusalim18",
//       images: [`https://admin.adentta.az/storage${imageUrl}`],
//     },
//     alternates: {
//       canonical: canonicalUrl,
//     },
//   };
// }

// // ==========================
// // ✅ PAGE COMPONENT
// // ==========================
// const page = async ({ searchParams }) => {
//   const params = await searchParams;

//   const categoryParam = params?.category;
//   const searchText = params?.search_text || null; // ✅ SEARCH ADDED

//   const categoryId = categoryParam
//     ? parseInt(categoryParam.split("-").pop())
//     : null;

//   const currentPage = Number(params?.page) || 1;

//   // ✅ searchText ötürülür
//   const productsData = await fetchProducts(
//     categoryId,
//     currentPage,
//     12,
//     searchText,
//   );

//   const categoriesData = await fetchCategoryPageData();
//   const attributesData = await fetchAttributesData();



//   let selectedCategory = null;

//   // 🔎 search varsa category deaktiv
//   if (!searchText && categoryId && categoriesData?.data?.data) {
//     selectedCategory = categoriesData.data.data.find(
//       (cat) => cat.id === categoryId,
//     );
//   }

//   let productsPageInfo = null;

//   if (!selectedCategory) {
//     productsPageInfo = await fetchProductsPageInfo();
//   }

//   return (
//     <div>
//       <ProductPageHero
//         productsData={productsData}
//         selectedCategory={selectedCategory}
//       />
//       <div className="productPageBackground">
//         <Breadcrumbs selectedCategory={selectedCategory} />
//         <ProductPageDetails
//           selectedCategory={selectedCategory}
//           productsData={productsData}
//           categoriesData={categoriesData}
//           filterAttributes={attributesData.data}
//         />
//       </div>
//       <SeoContent
//         selectedCategory={selectedCategory}
//         productsPageInfo={productsPageInfo}
//       />
//     </div>
//   );
// };

// export default page;


















import ProductPageHero from "@/components/ProductPage/ProductPageHero";
import "./products.scss";
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import SeoContent from "@/components/HomePage/SeoContent";
import ProductPageDetails from "@/components/ProductPage/ProductPageDetails";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

async function fetchProducts(
  categoryId = null,
  page = 1,
  perPage = 12,
  searchText = null,
  attributeParam = null
) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    let url = `/page-data/product-list?page=${page}&per_page=${perPage}`;

    if (searchText) {
      url += `&search_text=${encodeURIComponent(searchText)}`;
    } else {

      let filterIndex = 0;

      // ATTRIBUTE
      if (attributeParam) {
        const attributes = attributeParam.split(",");

        url += `&filters[${filterIndex}][key]=attributes`;
        url += `&filters[${filterIndex}][operator]=IN`;

        attributes.forEach((attr) => {
          url += `&filters[${filterIndex}][value][]=${attr}`;
        });

        filterIndex++;
      }

      // CATEGORY
      if (categoryId) {
        url += `&filters[${filterIndex}][key]=category`;
        url += `&filters[${filterIndex}][operator]=IN`;
        url += `&filters[${filterIndex}][value]=${categoryId}`;
      }
    }

    const { data } = await axiosInstance.get(url, {
      headers: { Lang: lang?.value || "az" },
      cache: "no-store",
    });

    return data;
  } catch (error) {
    console.error("Product fetch error:", error);
    return null;
  }
}

async function fetchCategoryPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  const { data } = await axiosInstance.get(
    `/page-data/product-categoires?per-page=999`,
    {
      headers: { Lang: lang?.value || "az" },
      cache: "no-store",
    }
  );

  return data;
}

async function fetchProductsPageInfo() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  const { data } = await axiosInstance.get(`/page-data/page-info`, {
    headers: { Lang: lang?.value || "az" },
    cache: "no-store",
  });

  return data?.data || null;
}

async function fetchAttributesData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  const { data } = await axiosInstance.get(`/page-data/attributes`, {
    headers: { Lang: lang?.value || "az" },
    cache: "no-store",
  });

  return data?.data || null;
}

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;

  const categoryParam = params?.category;
  const categoryId = categoryParam
    ? parseInt(categoryParam.split("-").pop())
    : null;

  const currentPage = Number(params?.page) || 1;

  let seoData = null;

  if (categoryId) {
    const categoriesData = await fetchCategoryPageData();

    if (categoriesData?.data?.data) {
      seoData = categoriesData.data.data.find((cat) => cat.id === categoryId);
    }
  }

  if (!seoData) {
    seoData = await fetchProductsPageInfo();
  }

  return {
    title: seoData?.meta_title || "Yerusalim18",
    description: seoData?.meta_description || "Yerusalim18",
    alternates: {
      canonical: "https://adentta.az/products",
    },
  };
}

const page = async ({ searchParams }) => {
  const params = await searchParams;

  const categoryParam = params?.category;
  const searchText = params?.search_text || null;
  const attributeParam = params?.attribute || null;

  const categoryId = categoryParam
    ? parseInt(categoryParam.split("-").pop())
    : null;

  const currentPage = Number(params?.page) || 1;

  const productsData = await fetchProducts(
    categoryId,
    currentPage,
    12,
    searchText,
    attributeParam
  );

  const categoriesData = await fetchCategoryPageData();
  const attributesData = await fetchAttributesData();

  let selectedCategory = null;

  if (!searchText && categoryId && categoriesData?.data?.data) {
    selectedCategory = categoriesData.data.data.find(
      (cat) => cat.id === categoryId
    );
  }

  let productsPageInfo = null;

  if (!selectedCategory) {
    productsPageInfo = await fetchProductsPageInfo();
  }

  return (
    <div>
      <ProductPageHero
        productsData={productsData}
        selectedCategory={selectedCategory}
      />

      <div className="productPageBackground">
        <Breadcrumbs selectedCategory={selectedCategory} />

        <ProductPageDetails
          selectedCategory={selectedCategory}
          productsData={productsData}
          categoriesData={categoriesData}
          filterAttributes={attributesData?.data}
        />
      </div>

      <SeoContent
        selectedCategory={selectedCategory}
        productsPageInfo={productsPageInfo}
      />
    </div>
  );
};

export default page;



























// !attribbute


// import ProductPageHero from "@/components/ProductPage/ProductPageHero";
// import "./products.scss";
// import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
// import SeoContent from "@/components/HomePage/SeoContent";
// import ProductPageDetails from "@/components/ProductPage/ProductPageDetails";
// import axiosInstance from "@/lib/axios";
// import { cookies } from "next/headers";

// async function fetchProducts(
//   categoryId = null,
//   page = 1,
//   perPage = 12,
//   searchText = null,
//   attributeParam = null
// ) {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   try {
//     let url = `/page-data/product-list?page=${page}&per_page=${perPage}`;

//     // 🔎 SEARCH PRIORITY
//     if (searchText) {
//       url += `&search_text=${encodeURIComponent(searchText)}`;
//     }

//     // 🎯 ATTRIBUTE FILTER
//     else if (attributeParam) {
//       const attributes = attributeParam.split(",");

//       url += `&filters[0][key]=attributes&filters[0][operator]=IN`;

//       attributes.forEach((attr) => {
//         url += `&filters[0][value][]=${attr}`;
//       });
//     }

//     // 📂 CATEGORY FILTER
//     else if (categoryId) {
//       url += `&filters[0][operator]=IN&filters[0][key]=category&filters[0][value][]=${categoryId}`;
//     }

//     const { data } = await axiosInstance.get(url, {
//       headers: { Lang: lang?.value || "az" },
//       cache: "no-store",
//     });

//     return data;
//   } catch (error) {
//     console.error("Product fetch error:", error);
//     return null;
//   }
// }

// async function fetchCategoryPageData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   try {
//     const { data } = await axiosInstance.get(
//       `/page-data/product-categoires?per-page=999`,
//       {
//         headers: { Lang: lang?.value || "az" },
//         cache: "no-store",
//       }
//     );
//     return data;
//   } catch (error) {
//     console.error("Category fetch error:", error);
//     return null;
//   }
// }

// async function fetchProductsPageInfo() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   try {
//     const { data } = await axiosInstance.get(`/page-data/page-info`, {
//       headers: { Lang: lang?.value || "az" },
//       cache: "no-store",
//     });

//     return data?.data || null;
//   } catch (error) {
//     console.error("Page info fetch error:", error);
//     return null;
//   }
// }

// async function fetchAttributesData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   try {
//     const { data } = await axiosInstance.get(`/page-data/attributes`, {
//       headers: { Lang: lang?.value || "az" },
//       cache: "no-store",
//     });

//     return data?.data || null;
//   } catch (error) {
//     console.error("Attribute fetch error:", error);
//     return null;
//   }
// }

// export async function generateMetadata({ searchParams }) {
//   const params = await searchParams;

//   const categoryParam = params?.category;
//   const categoryId = categoryParam
//     ? parseInt(categoryParam.split("-").pop())
//     : null;

//   const currentPage = Number(params?.page) || 1;

//   let seoData = null;

//   if (categoryId) {
//     const categoriesData = await fetchCategoryPageData();

//     if (categoriesData?.data?.data) {
//       const foundCategory = categoriesData.data.data.find(
//         (cat) => cat.id === categoryId
//       );

//       if (foundCategory) {
//         seoData = foundCategory;
//       }
//     }
//   }

//   if (!seoData) {
//     seoData = await fetchProductsPageInfo();
//   }

//   const pageTitle =
//     currentPage > 1
//       ? `${seoData?.meta_title || "Yerusalim18"}`
//       : seoData?.meta_title || "Yerusalim18";

//   const imageUrl = seoData?.og_image || "/favicon.ico";
//   const imageAlt = seoData?.meta_title || "Yerusalim18";
//   const canonicalUrl = "https://adentta.az/products";

//   return {
//     title: pageTitle,
//     description: seoData?.meta_description || "Yerusalim18",
//     alternates: {
//       canonical: canonicalUrl,
//     },
//   };
// }

// const page = async ({ searchParams }) => {
//   const params = await searchParams;

//   const categoryParam = params?.category;
//   const searchText = params?.search_text || null;
//   const attributeParam = params?.attribute || null;

//   const categoryId = categoryParam
//     ? parseInt(categoryParam.split("-").pop())
//     : null;

//   const currentPage = Number(params?.page) || 1;

//   const productsData = await fetchProducts(
//     categoryId,
//     currentPage,
//     12,
//     searchText,
//     attributeParam
//   );

//   const categoriesData = await fetchCategoryPageData();
//   const attributesData = await fetchAttributesData();

//   let selectedCategory = null;

//   if (!searchText && !attributeParam && categoryId && categoriesData?.data?.data) {
//     selectedCategory = categoriesData.data.data.find(
//       (cat) => cat.id === categoryId
//     );
//   }

//   let productsPageInfo = null;

//   if (!selectedCategory) {
//     productsPageInfo = await fetchProductsPageInfo();
//   }

//   return (
//     <div>
//       <ProductPageHero
//         productsData={productsData}
//         selectedCategory={selectedCategory}
//       />

//       <div className="productPageBackground">
//         <Breadcrumbs selectedCategory={selectedCategory} />

//         <ProductPageDetails
//           selectedCategory={selectedCategory}
//           productsData={productsData}
//           categoriesData={categoriesData}
//           filterAttributes={attributesData?.data}
//         />
//       </div>

//       <SeoContent
//         selectedCategory={selectedCategory}
//         productsPageInfo={productsPageInfo}
//       />
//     </div>
//   );
// };

// export default page;