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











// app/.../page.js

import ProductPageHero from "@/components/ProductPage/ProductPageHero";
import "./products.scss";
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import SeoContent from "@/components/HomePage/SeoContent";
import ProductPageDetails from "@/components/ProductPage/ProductPageDetails";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

// 1. page arqumenti əlavə edildi
async function fetchProductsByCategory(categoryId, page = 1, perPage = 12) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    // 2. API sorğusuna page parametri əlavə edildi
    const { data } = await axiosInstance.get(
      `/page-data/product-list?page=${page}&per_page=${perPage}&filters[0][operator]=IN&filters[0][key]=category&filters[0][value][]=${categoryId}`,
      {
        headers: { Lang: lang?.value || "az" },
        cache: "no-store",
      },
    );
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

const page = async ({ searchParams }) => {
  const params = await searchParams;
  
  const categoryParam = params?.category;
  const categoryId = parseInt(categoryParam?.split("-").pop() || "59999");
  
  // 3. URL-dən page parametrini alırıq (yoxdursa 1 götürür)
  const currentPage = Number(params?.page) || 1;

  // 4. currentPage-i fetch funksiyasına ötürürük
  const productsData = await fetchProductsByCategory(categoryId, currentPage);
  
  const categoriesData = await fetchCategoryPageData();

  let selectedCategory = null;
  if (categoriesData?.data?.data) {
    const allCategories = categoriesData.data.data;
    selectedCategory = allCategories.find(
      (cat) => cat.id === parseInt(categoryId),
    );
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
      <SeoContent selectedCategory={selectedCategory} />
    </div>
  );
};

export default page;