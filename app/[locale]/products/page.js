// import ProductPageHero from "@/components/ProductPage/ProductPageHero";
// import "./products.scss";
// import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
// import SeoContent from "@/components/HomePage/SeoContent";
// import ProductPageDetails from "@/components/ProductPage/ProductPageDetails";
// import axiosInstance from "@/lib/axios";
// import { cookies } from "next/headers";

// async function fetchProducts(
//   categoryId = null,
//   brandId = null,
//   page = 1,
//   perPage = 12,
//   searchText = null,
//   attributeParam = null,
//   statusParam = null,
//   sortBy = null,
//   sortOrder = null,
// ) {
//   const cookieStore = await cookies();
//   // const lang = cookieStore.get("NEXT_LOCALE");
//   const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅

//   try {
//     let url = `/page-data/product-list?page=${page}&per_page=${perPage}`;

//     if (sortBy && sortOrder) {
//       url += `&sort_by=${sortBy}&sort_order=${sortOrder}`;
//     }

//     if (searchText) {
//       url += `&search_text=${encodeURIComponent(searchText)}`;
//     }

//     let filterIndex = 0;

//     // ATTRIBUTE
//     if (attributeParam) {
//       const attributes = attributeParam.split(",");

//       url += `&filters[${filterIndex}][key]=attributes`;
//       url += `&filters[${filterIndex}][operator]=IN`;

//       attributes.forEach((attr) => {
//         url += `&filters[${filterIndex}][value][]=${attr}`;
//       });

//       filterIndex++;
//     }

//     // STATUS
//     if (statusParam === "is_bestseller") {
//       url += `&filters[${filterIndex}][key]=special_badge`;
//       url += `&filters[${filterIndex}][operator]=IN`;
//       url += `&filters[${filterIndex}][value][]=best_seller`;
//       filterIndex++;
//     }

//     if (statusParam === "is_new") {
//       url += `&filters[${filterIndex}][key]=special_badge`;
//       url += `&filters[${filterIndex}][operator]=IN`;
//       url += `&filters[${filterIndex}][value][]=is_new`;
//       filterIndex++;
//     }

//     if (statusParam === "is_discounted") {
//       url += `&filters[${filterIndex}][key]=special_badge`;
//       url += `&filters[${filterIndex}][operator]=IN`;
//       url += `&filters[${filterIndex}][value][]=is_discounted`;
//       filterIndex++;
//     }

//     // BRAND
//     if (brandId) {
//       url += `&filters[${filterIndex}][key]=brand`;
//       url += `&filters[${filterIndex}][operator]=IN`;
//       url += `&filters[${filterIndex}][value]=${brandId}`;
//       filterIndex++;
//     }

//     // CATEGORY
//     if (categoryId) {
//       url += `&filters[${filterIndex}][key]=category`;
//       url += `&filters[${filterIndex}][operator]=IN`;
//       url += `&filters[${filterIndex}][value]=${categoryId}`;
//     }

//     console.log("FINAL URL:", url);

//     const { data } = await axiosInstance.get(url, {
//       headers: { Lang: langValue },
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
//   // const lang = cookieStore.get("NEXT_LOCALE");
//   const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅

//   const { data } = await axiosInstance.get(
//     `/page-data/product-categoires?per_page=999`,
//     {
//       headers: { Lang: langValue },
//       cache: "no-store",
//     },
//   );

//   return data;
// }

// async function fetchProductsPageInfo() {
//   const cookieStore = await cookies();
//   // const lang = cookieStore.get("NEXT_LOCALE");
//   const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅

//   const { data } = await axiosInstance.get(`/page-data/page-info`, {
//     headers: { Lang: langValue },
//     cache: "no-store",
//   });

//   return data?.data || null;
// }

// async function fetchAttributesData() {
//   const cookieStore = await cookies();
//   // const lang = cookieStore.get("NEXT_LOCALE");
//   const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅

//   const { data } = await axiosInstance.get(
//     `/page-data/attributes?per_page=999`,
//     {
//       headers: { Lang: langValue },
//       cache: "no-store",
//     },
//   );

//   return data?.data || null;
// }

// async function getTranslations() {
//   const cookieStore = await cookies();
//   // const lang = cookieStore.get("NEXT_LOCALE");
//   const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅

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
//       seoData = categoriesData.data.data.find((cat) => cat.id === categoryId);
//     }
//   }

//   if (!seoData) {
//     seoData = await fetchProductsPageInfo();
//   }

//   return {
//     title: seoData?.meta_title || "Yerusalim18",
//     description: seoData?.meta_description || "Yerusalim18",
//     alternates: {
//       canonical: "https://yerusalim18.com/products",
//     },
//   };
// }

// const page = async ({ searchParams }) => {
//   const params = await searchParams;
//   const categoryParam = params?.category;
//   const searchText = params?.search_text || null;
//   const attributeParam = params?.attribute || null;
//   const statusParam = params?.status || null;
//   const sortBy = params?.sort_by || null;
//   const sortOrder = params?.sort_order || null;

//   const brandParam = params?.brand || null;
//   const brandId = brandParam ? parseInt(brandParam) : null;

//   const categoryId = categoryParam
//     ? parseInt(categoryParam.split("-").pop())
//     : null;

//   const currentPage = Number(params?.page) || 1;

//   const productsData = await fetchProducts(
//     categoryId,
//     brandId,
//     currentPage,
//     12,
//     searchText,
//     attributeParam,
//     statusParam,
//     sortBy,
//     sortOrder,
//   );

//   const categoriesData = await fetchCategoryPageData();
//   const attributesData = await fetchAttributesData();

//   let selectedCategory = null;

//   if (!searchText && categoryId && categoriesData?.data?.data) {
//     selectedCategory = categoriesData.data.data.find(
//       (cat) => cat.id === categoryId,
//     );
//   }

//   let productsPageInfo = null;

//   if (!selectedCategory) {
//     productsPageInfo = await fetchProductsPageInfo();
//   }
//   const t = await getTranslations();

//   return (
//     <div>
//       <ProductPageHero
//         t={t}
//         productsData={productsData}
//         productsPageInfo={productsPageInfo}
//         selectedCategory={selectedCategory}
//       />
//       <div className="productPageBackground">
//         <Breadcrumbs t={t} selectedCategory={selectedCategory} />
//         <ProductPageDetails
//           t={t}
//           selectedCategory={selectedCategory}
//           productsData={productsData}
//           categoriesData={categoriesData}
//           filterAttributes={attributesData?.data}
//           productsPageInfo={productsPageInfo}
//         />
//       </div>
//       <SeoContent
//         t={t}
//         selectedCategory={selectedCategory}
//         productsPageInfo={productsPageInfo}
//       />
//     </div>
//   );
// };

// export default page;

// !claude filter price

import ProductPageHero from "@/components/ProductPage/ProductPageHero";
import "./products.scss";
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import SeoContent from "@/components/HomePage/SeoContent";
import ProductPageDetails from "@/components/ProductPage/ProductPageDetails";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

async function fetchProducts(
  categoryId = null,
  brandId = null,
  page = 1,
  perPage = 12,
  searchText = null,
  attributeParam = null,
  statusParam = null,
  sortBy = null,
  sortOrder = null,
  minPriceParam = null, // ✅ YENİ
  maxPriceParam = null, // ✅ YENİ
) {
  const cookieStore = await cookies();
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az";

  try {
    let url = `/page-data/product-list?page=${page}&per_page=${perPage}`;

    if (sortBy && sortOrder) {
      url += `&sort_by=${sortBy}&sort_order=${sortOrder}`;
    }

    if (searchText) {
      url += `&search_text=${encodeURIComponent(searchText)}`;
    }

    let filterIndex = 0;

    if (attributeParam) {
      const attributes = attributeParam.split(",");
      url += `&filters[${filterIndex}][key]=attributes`;
      url += `&filters[${filterIndex}][operator]=IN`;
      attributes.forEach((attr) => {
        url += `&filters[${filterIndex}][value][]=${attr}`;
      });
      filterIndex++;
    }

    if (statusParam === "is_bestseller") {
      url += `&filters[${filterIndex}][key]=special_badge`;
      url += `&filters[${filterIndex}][operator]=IN`;
      url += `&filters[${filterIndex}][value][]=best_seller`;
      filterIndex++;
    }

    if (statusParam === "is_new") {
      url += `&filters[${filterIndex}][key]=special_badge`;
      url += `&filters[${filterIndex}][operator]=IN`;
      url += `&filters[${filterIndex}][value][]=is_new`;
      filterIndex++;
    }

    if (statusParam === "is_discounted") {
      url += `&filters[${filterIndex}][key]=special_badge`;
      url += `&filters[${filterIndex}][operator]=IN`;
      url += `&filters[${filterIndex}][value][]=is_discounted`;
      filterIndex++;
    }

    if (brandId) {
      url += `&filters[${filterIndex}][key]=brand`;
      url += `&filters[${filterIndex}][operator]=IN`;
      url += `&filters[${filterIndex}][value]=${brandId}`;
      filterIndex++;
    }

    if (minPriceParam !== null) {
      url += `&filters[${filterIndex}][key]=price`;
      url += `&filters[${filterIndex}][operator]=>=`;
      url += `&filters[${filterIndex}][value]=${minPriceParam}`;
      filterIndex++;
    }

    if (maxPriceParam !== null) {
      url += `&filters[${filterIndex}][key]=price`;
      url += `&filters[${filterIndex}][operator]=<=`;
      url += `&filters[${filterIndex}][value]=${maxPriceParam}`;
      filterIndex++;
    }

    if (categoryId) {
      url += `&filters[${filterIndex}][key]=category`;
      url += `&filters[${filterIndex}][operator]=IN`;
      url += `&filters[${filterIndex}][value]=${categoryId}`;
    }

    console.log("FINAL URL:", url);

    const { data } = await axiosInstance.get(url, {
      headers: { Lang: langValue },
      cache: "no-store",
    });

    return data;
  } catch (error) {
    console.error("Product fetch error:", error);
    return null;
  }
}

// ✅ YENİ FUNKSIYA — bütün filterlər daxil olmaqla min/max qiymət
async function fetchPriceRange(
  categoryId = null,
  brandId = null,
  searchText = null,
  attributeParam = null,
  statusParam = null,
  sortOrder = "asc",
) {
  const cookieStore = await cookies();
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az";

  try {
    let url = `/page-data/product-list?page=1&per_page=1&sort_by=price&sort_order=${sortOrder}`;

    if (searchText) {
      url += `&search_text=${encodeURIComponent(searchText)}`;
    }

    let filterIndex = 0;

    if (attributeParam) {
      const attributes = attributeParam.split(",");
      url += `&filters[${filterIndex}][key]=attributes`;
      url += `&filters[${filterIndex}][operator]=IN`;
      attributes.forEach((attr) => {
        url += `&filters[${filterIndex}][value][]=${attr}`;
      });
      filterIndex++;
    }

    if (statusParam === "is_bestseller") {
      url += `&filters[${filterIndex}][key]=special_badge`;
      url += `&filters[${filterIndex}][operator]=IN`;
      url += `&filters[${filterIndex}][value][]=best_seller`;
      filterIndex++;
    }

    if (statusParam === "is_new") {
      url += `&filters[${filterIndex}][key]=special_badge`;
      url += `&filters[${filterIndex}][operator]=IN`;
      url += `&filters[${filterIndex}][value][]=is_new`;
      filterIndex++;
    }

    if (statusParam === "is_discounted") {
      url += `&filters[${filterIndex}][key]=special_badge`;
      url += `&filters[${filterIndex}][operator]=IN`;
      url += `&filters[${filterIndex}][value][]=is_discounted`;
      filterIndex++;
    }

    if (brandId) {
      url += `&filters[${filterIndex}][key]=brand`;
      url += `&filters[${filterIndex}][operator]=IN`;
      url += `&filters[${filterIndex}][value]=${brandId}`;
      filterIndex++;
    }

    if (categoryId) {
      url += `&filters[${filterIndex}][key]=category`;
      url += `&filters[${filterIndex}][operator]=IN`;
      url += `&filters[${filterIndex}][value]=${categoryId}`;
    }

    const { data } = await axiosInstance.get(url, {
      headers: { Lang: langValue },
      cache: "no-store",
    });

    const firstProduct = data?.data?.data?.[0];
    const variants = firstProduct?.product_variants;
    if (!variants) return sortOrder === "asc" ? 0 : 999;

    const prices = Object.values(variants).map((v) => parseFloat(v.price) || 0);
    return sortOrder === "asc" ? Math.min(...prices) : Math.max(...prices);
  } catch {
    return sortOrder === "asc" ? 0 : 999;
  }
}

async function fetchCategoryPageData() {
  const cookieStore = await cookies();
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az";

  const { data } = await axiosInstance.get(
    `/page-data/product-categoires?per_page=999`,
    {
      headers: { Lang: langValue },
      cache: "no-store",
    },
  );

  return data;
}

async function fetchProductsPageInfo() {
  const cookieStore = await cookies();
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az";

  const { data } = await axiosInstance.get(`/page-data/page-info`, {
    headers: { Lang: langValue },
    cache: "no-store",
  });

  return data?.data || null;
}

async function fetchAttributesData() {
  const cookieStore = await cookies();
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az";

  const { data } = await axiosInstance.get(
    `/page-data/attributes?per_page=999`,
    {
      headers: { Lang: langValue },
      cache: "no-store",
    },
  );

  return data?.data || null;
}

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

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;

  const categoryParam = params?.category;
  const categoryId = categoryParam
    ? parseInt(categoryParam.split("-").pop())
    : null;

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
      canonical: "https://yerusalim18.com/products",
    },
  };
}

const page = async ({ searchParams }) => {
  const params = await searchParams;
  const categoryParam = params?.category;
  const searchText = params?.search_text || null;
  const statusParam = params?.status || null;
  const sortBy = params?.sort_by || null;
  const sortOrder = params?.sort_order || null;

  const minPriceParam = params?.min_price ? parseFloat(params.min_price) : null;
  const maxPriceParam = params?.max_price ? parseFloat(params.max_price) : null;

  const brandParam = params?.brand || null;
  const brandId = brandParam ? parseInt(brandParam) : null;

 

  // ✅ DƏYİŞDİ — attribute array halında düzgün join edilir
  const attributeParam = params?.attribute
    ? Array.isArray(params.attribute)
      ? params.attribute.join(",")
      : params.attribute
    : null;

  const categoryId = categoryParam
    ? parseInt(categoryParam.split("-").pop())
    : null;

  const currentPage = Number(params?.page) || 1;

  // ✅ YENİ — hamısı paralel işləyir
  const [productsData, categoriesData, attributesData, minPrice, maxPrice] =
    await Promise.all([
      fetchProducts(
        categoryId,
        brandId,
        currentPage,
        12,
        searchText,
        attributeParam,
        statusParam,
        sortBy,
        sortOrder,
        minPriceParam, // ✅ YENİ
        maxPriceParam, // ✅ YENİ
      ),
      fetchCategoryPageData(),
      fetchAttributesData(),
      fetchPriceRange(
        categoryId,
        brandId,
        searchText,
        attributeParam,
        statusParam,
        "asc",
      ),
      fetchPriceRange(
        categoryId,
        brandId,
        searchText,
        attributeParam,
        statusParam,
        "desc",
      ),
    ]);

  let selectedCategory = null;

  if (!searchText && categoryId && categoriesData?.data?.data) {
    selectedCategory = categoriesData.data.data.find(
      (cat) => cat.id === categoryId,
    );
  }

  let productsPageInfo = null;

  if (!selectedCategory) {
    productsPageInfo = await fetchProductsPageInfo();
  }

  const t = await getTranslations();

  return (
    <div>
      <ProductPageHero
        t={t}
        productsData={productsData}
        productsPageInfo={productsPageInfo}
        selectedCategory={selectedCategory}
      />
      <div className="productPageBackground">
        <Breadcrumbs t={t} selectedCategory={selectedCategory} />
        <ProductPageDetails
          t={t}
          selectedCategory={selectedCategory}
          productsData={productsData}
          categoriesData={categoriesData}
          filterAttributes={attributesData?.data}
          productsPageInfo={productsPageInfo}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </div>
      <SeoContent
        t={t}
        selectedCategory={selectedCategory}
        productsPageInfo={productsPageInfo}
      />
    </div>
  );
};

export default page;
