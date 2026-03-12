// import Advantages from "@/components/HomePage/Advantages";
// import HeroSlider from "@/components/HomePage/HeroSlider";
// import HomePageBlogs from "@/components/HomePage/HomePageBlogs";
// import HomePageBrands from "@/components/HomePage/HomePageBrands";
// import HomePageCategory from "@/components/HomePage/HomePageCategory";
// import MostPopularProduct from "@/components/HomePage/MostPopularProduct";
// import NewProducts from "@/components/HomePage/NewProducts";
// import SeoContent from "@/components/HomePage/SeoContent";
// import ShopCategory from "@/components/HomePage/ShopCategory";
// import React from "react";
// import axiosInstance from "@/lib/axios";
// import { cookies } from "next/headers";

// async function fetchCategoryPageData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   try {
//     const { data: about } = await axiosInstance.get(
//       `/page-data/product-categoires?per-page=999`,
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
// async function fetchBestSellerData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   try {
//     const { data: about } = await axiosInstance.get(
//       `/page-data/product-list?per_page=12&filters[0][key]=special_badge&filters[0][operator]=IN&filters[0][value][]=best_seller`,
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
// async function fetchNewProductsData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   try {
//     const { data: about } = await axiosInstance.get(
//       `/page-data/product-list?per_page=12&filters[0][key]=special_badge&filters[0][operator]=IN&filters[0][value][]=is_new`,
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
// async function fetchBrandsData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   try {
//     const { data: brands } = await axiosInstance.get(`/page-data/brand-list`, {
//       headers: { Lang: lang.value },
//       cache: "no-store",
//     });
//     return brands;
//   } catch (error) {
//     throw error;
//   }
// }
// async function fetchBlogsHomeData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
//   try {
//     const { data: blog } = await axiosInstance.get(`/page-data/blog-list`, {
//       headers: { Lang: lang.value },
//       cache: "no-store",
//     });
//     return blog;
//   } catch (error) {
//     throw error;
//   }
// }

// const page = async () => {
//   const categoryPageData = await fetchCategoryPageData();
//   const categoryData = categoryPageData;

//   const blogsHomePageData = await fetchBlogsHomeData();
//   const blogsData = blogsHomePageData.data.data;

//   const bestSeller = await fetchBestSellerData();
//   const bestSellerData = bestSeller.data.data;

//   const newProducts = await fetchNewProductsData();
//   const newProductsData = newProducts.data.data;

//   const brands = await fetchBrandsData();
//   const brandsData = brands.data;

//   return (
//     <div>
//       <HeroSlider />
//       <HomePageCategory categoryData={categoryData} />
//       {bestSellerData?.length > 0 && (
//         <MostPopularProduct
//           bestSellerData={bestSellerData}
//           categoryData={categoryData}
//         />
//       )}
//       <Advantages />
//       {newProductsData?.length > 0 && (
//         <NewProducts newProductsData={newProductsData} />
//       )}
//       <ShopCategory />
//       <div className="homepageBrandAndBlog">
//         {brandsData?.length > 0 && <HomePageBrands brandsData={brandsData} />}
//         {blogsData?.length > 0 && <HomePageBlogs blogsData={blogsData} />}
//       </div>
//       <SeoContent />
//     </div>
//   );
// };

// export default page;








// !  1 funksiyada endpointler
import Advantages from "@/components/HomePage/Advantages";
import HeroSlider from "@/components/HomePage/HeroSlider";
import HomePageBlogs from "@/components/HomePage/HomePageBlogs";
import HomePageBrands from "@/components/HomePage/HomePageBrands";
import HomePageCategory from "@/components/HomePage/HomePageCategory";
import MostPopularProduct from "@/components/HomePage/MostPopularProduct";
import NewProducts from "@/components/HomePage/NewProducts";
import SeoContent from "@/components/HomePage/SeoContent";
import ShopCategory from "@/components/HomePage/ShopCategory";
import React from "react";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

export async function generateMetadata() {
  const seo = await fetchPageData(`/page-data/home`);

  const imageUrl = seo?.data?.og_image;
  const imageAlt = seo?.data?.meta_title || "Adentta";
  const canonicalUrl = "https://adentta.az";

  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  return {
    title: seo?.data?.meta_title,
    description: seo?.data?.meta_description,

    openGraph: {
      title: seo?.data?.meta_title || "Adentta",
      description: seo?.data?.meta_description,
      url: canonicalUrl,
      images: [
        {
          url: `https://admin.adentta.az/storage${imageUrl}`,
          alt: imageAlt,
          width: 1200,
          height: 630,
        },
      ],
      site_name: "adentta.az",
      type: "website",
      locale: lang?.value,
    },

    twitter: {
      card: "summary_large_image",
      title: seo?.data?.meta_title || "Adentta",
      description: seo?.data?.meta_description || "Adentta",
      creator: "@adentta",
      site: "@adentta",
      images: [`https://admin.adentta.az/storage${imageUrl}`],
    },

    alternates: {
      canonical: canonicalUrl,
    },
  };
}

async function fetchPageData(endpoint) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data } = await axiosInstance.get(endpoint, {
      headers: { Lang: lang.value },
      cache: "no-store",
    });

    return data;
  } catch (error) {
    throw error;
  }
}

const page = async () => {
  const categoryPageData = await fetchPageData(
    `/page-data/product-categoires?per_page=999`,
  );
  const categoryData = categoryPageData;

  const home = await fetchPageData(`/page-data/home`);
  const homeData = home.data;

  const homeBanner = await fetchPageData(`/page-data/home-banner`);
  const homeBannerData = homeBanner.data.data;

  const blogsHomePageData = await fetchPageData(`/page-data/blog-list`);
  const blogsData = blogsHomePageData.data.data;

  const bestSeller = await fetchPageData(
    `/page-data/product-list?per_page=12&filters[0][key]=special_badge&filters[0][operator]=IN&filters[0][value][]=best_seller`,
  );
  const bestSellerData = bestSeller.data.data;

  const newProducts = await fetchPageData(
    `/page-data/product-list?per_page=12&filters[0][key]=special_badge&filters[0][operator]=IN&filters[0][value][]=is_new`,
  );
  const newProductsData = newProducts.data.data;

  const brands = await fetchPageData(`/page-data/brand-list`);
  const brandsData = brands.data.data;

  const benefit = await fetchPageData(`/page-data/benefit-craft`);

  const benefitData =
    benefit?.data?.data?.filter((item) => item.page_section === "benefit") || [];


  return (
    <div>
      <HeroSlider homeBannerData={homeBannerData} />
      <HomePageCategory categoryData={categoryData} />
      {bestSellerData?.length > 0 && (
        <MostPopularProduct
          bestSellerData={bestSellerData}
          categoryData={categoryData}
        />
      )}
      <Advantages benefitData={benefitData} />
      {newProductsData?.length > 0 && (
        <NewProducts newProductsData={newProductsData} />
      )}
      <ShopCategory />
      <div className="homepageBrandAndBlog">
        {brandsData?.length > 0 && <HomePageBrands brandsData={brandsData} />}
        {blogsData?.length > 0 && <HomePageBlogs blogsData={blogsData} />}
      </div>

      <SeoContent homeData={homeData} />
    </div>
  );
};

export default page;
