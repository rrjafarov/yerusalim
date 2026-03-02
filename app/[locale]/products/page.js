// import ProductPageHero from "@/components/ProductPage/ProductPageHero";
// import "./products.scss";
// import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
// import SeoContent from "@/components/HomePage/SeoContent";
// import ProductPageDetails from "@/components/ProductPage/ProductPageDetails";
// import axiosInstance from "@/lib/axios";
// import { cookies } from "next/headers";

// async function fetchProductsByCategory(categoryId, perPage = 12) {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   try {
//     const { data } = await axiosInstance.get(
//       `/page-data/product-list?per_page=${perPage}&filters[0][operator]=IN&filters[0][key]=category&filters[0][value][]=${categoryId}`,
//       {
//         headers: { Lang: lang?.value || "az" },
//         cache: "no-store",
//       },
//     );
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

// const page = async ({ searchParams }) => {
//   // Next.js 15+ versiyalarında searchParams Promise-dir, await etməlisən
//   const params = await searchParams;

//   // URL-dən category parametrini alırıq
//   const categoryParam = params?.category;

//   // category parametrindən ID-ni çıxarırıq (format: slug-ID)
//   // const categoryId = categoryParam?.split("-").pop() || "59999";
//   const categoryId = parseInt(categoryParam?.split("-").pop() || "59999");

//   // Məhsulları fetch edirik
//   const productsData = await fetchProductsByCategory(categoryId);

//   // Kateqoriyaları fetch edirik
//   const categoriesData = await fetchCategoryPageData();

//  const subCategories =
//   categoriesData?.data?.data?.filter(
//     (cat) => Number(cat.top_category_id) === categoryId
//   ) || [];

//   // URL-dən gələn ID-yə uyğun category tapırıq
//   let selectedCategory = null;

//   if (categoriesData?.data?.data) {
//     const allCategories = categoriesData.data.data;

//     // ID-yə görə category tap (həm parent həm child-larda)
//     selectedCategory = allCategories.find(
//       (cat) => cat.id === parseInt(categoryId),
//     );
//   }

//   console.log("Category ID:", categoryId);
//   console.log("Selected Category:", selectedCategory);
//   console.log("Products Data:", productsData);

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
//         />
//       </div>
//       <SeoContent selectedCategory={selectedCategory} />
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

async function fetchProducts(categoryId = null, page = 1, perPage = 12) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    let url = `/page-data/product-list?page=${page}&per_page=${perPage}`;
    if (categoryId) {
      url += `&filters[0][operator]=IN&filters[0][key]=category&filters[0][value][]=${categoryId}`;
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
  try {
    const { data } = await axiosInstance.get(
      `/page-data/product-categoires?per-page=999`,
      {
        headers: { Lang: lang?.value || "az" },
        cache: "no-store",
      },
    );
    return data;
  } catch (error) {
    console.error("Category fetch error:", error);
    return null;
  }
}

// ✅ Products səhifəsinin SEO məlumatı
async function fetchProductsPageInfo() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data } = await axiosInstance.get(`/page-data/page-info`, {
      headers: { Lang: lang?.value || "az" },
      cache: "no-store",
    });

    return data?.data || null;
  } catch (error) {
    console.error("Page info fetch error:", error);
    return null;
  }
}




export async function generateMetadata({ searchParams }) {
  const params = await searchParams; // ← BU SƏTİR ÇATIŞMIRDI

  const categoryParam = params?.category;
  const categoryId = categoryParam
    ? parseInt(categoryParam.split("-").pop())
    : null;
  const currentPage = Number(params?.page) || 1;

  let seoData = null;

  if (categoryId) {
    const categoriesData = await fetchCategoryPageData();

    if (categoriesData?.data?.data) {
      const foundCategory = categoriesData.data.data.find(
        (cat) => cat.id === categoryId
      );
      if (foundCategory) {
        seoData = foundCategory;
      }
    }
  }

  if (!seoData) {
    seoData = await fetchProductsPageInfo();
  }

  const pageTitle =
    currentPage > 1
      ? `${seoData?.meta_title || "Yerusalim18"}`
      : seoData?.meta_title || "Yerusalim18";

  const imageUrl = seoData?.og_image || "/favicon.ico";
  const imageAlt = seoData?.meta_title || "Yerusalim18";
  const canonicalUrl = "https://adentta.az/products";

  return {
    title: pageTitle,
    description: seoData?.meta_description || "Yerusalim18",
    openGraph: {
      title: pageTitle,
      description: seoData?.meta_description || "",
      url: canonicalUrl,
      images: [
        {
          url: `https://admin.adentta.az/storage${imageUrl}`,
          alt: imageAlt,
          width: 1200,
          height: 630,
        },
      ],
      site_name: "Yerusalim18",
      type: "website",
      locale: "az",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: seoData?.meta_description || "",
      creator: "@Yerusalim18",
      site: "@Yerusalim18",
      images: [`https://admin.adentta.az/storage${imageUrl}`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}






const page = async ({ searchParams }) => {
  const params = await searchParams;

  const categoryParam = params?.category;

  const categoryId = categoryParam
    ? parseInt(categoryParam.split("-").pop())
    : null;
  const currentPage = Number(params?.page) || 1;

  const productsData = await fetchProducts(categoryId, currentPage);

  const categoriesData = await fetchCategoryPageData();

  let selectedCategory = null;

  if (categoryId && categoriesData?.data?.data) {
    selectedCategory = categoriesData.data.data.find(
      (cat) => cat.id === categoryId,
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




















// ! Asagida olan kodda sadece categoriyay gore fetch var  product_list  yoxdur
// import ProductPageHero from "@/components/ProductPage/ProductPageHero";
// import "./products.scss";
// import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
// import SeoContent from "@/components/HomePage/SeoContent";
// import ProductPageDetails from "@/components/ProductPage/ProductPageDetails";
// import axiosInstance from "@/lib/axios";
// import { cookies } from "next/headers";

// // 1. page arqumenti əlavə edildi
// async function fetchProductsByCategory(categoryId, page = 1, perPage = 12) {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
//   try {
//     // 2. API sorğusuna page parametri əlavə edildi
//     const { data } = await axiosInstance.get(
//       `/page-data/product-list?page=${page}&per_page=${perPage}&filters[0][operator]=IN&filters[0][key]=category&filters[0][value][]=${categoryId}`,
//       {
//         headers: { Lang: lang?.value || "az" },
//         cache: "no-store",
//       },
//     );
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

// const page = async ({ searchParams }) => {
//   const params = await searchParams;

//   const categoryParam = params?.category;
//   const categoryId = parseInt(categoryParam?.split("-").pop() || "59999");

//   // 3. URL-dən page parametrini alırıq (yoxdursa 1 götürür)
//   const currentPage = Number(params?.page) || 1;

//   // 4. currentPage-i fetch funksiyasına ötürürük
//   const productsData = await fetchProductsByCategory(categoryId, currentPage);

//   const categoriesData = await fetchCategoryPageData();

//   let selectedCategory = null;
//   if (categoriesData?.data?.data) {
//     const allCategories = categoriesData.data.data;
//     selectedCategory = allCategories.find(
//       (cat) => cat.id === parseInt(categoryId),
//     );
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
//         />
//       </div>
//       <SeoContent selectedCategory={selectedCategory} />
//     </div>
//   );
// };

// export default page;
