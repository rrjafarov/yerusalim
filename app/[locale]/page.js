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
  const imageAlt = seo?.data?.meta_title || "Yerusalim18";
  const canonicalUrl = "https://yerusalim18.com";

  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  return {
    title: seo?.data?.meta_title,
    description: seo?.data?.meta_description,

    openGraph: {
      title: seo?.data?.meta_title || "Yerusalim18",
      description: seo?.data?.meta_description,
      url: canonicalUrl,
      images: [
        {
          url: `https://admin.yerusalim18.com/storage${imageUrl}`,
          alt: imageAlt,
          width: 1200,
          height: 630,
        },
      ],
      site_name: "yerusalim18.com",
      type: "website",
      locale: lang?.value,
    },

    twitter: {
      card: "summary_large_image",
      title: seo?.data?.meta_title || "Yerusalim18",
      description: seo?.data?.meta_description || "Yerusalim18",
      creator: "@yerusalim18",
      site: "@yerusalim18",
      images: [`https://admin.yerusalim18.com/storage${imageUrl}`],
    },

    alternates: {
      canonical: canonicalUrl,
    },
  };
}

async function fetchPageData(endpoint) {
  const cookieStore = await cookies();
  // const lang = cookieStore.get("NEXT_LOCALE");
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅

  try {
    const { data } = await axiosInstance.get(endpoint, {
      headers: { Lang: langValue },
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

  const quickLink = await fetchPageData(`/page-data/quick-link`);
  const quickLinkData = quickLink?.data?.data || [];

  const brands = await fetchPageData(`/page-data/brand-list`);
  const brandsData = brands.data.data;

  const benefit = await fetchPageData(`/page-data/benefit-craft`);

  const benefitData =
    benefit?.data?.data?.filter((item) => item.page_section === "benefit") ||
    [];

  const t = await axiosInstance
    .get(`/translation-list`, {
      // headers: { Lang: (await cookies()).get("NEXT_LOCALE")?.value },
      headers: { Lang: (await cookies()).get("NEXT_LOCALE")?.value || "az" }, // ✅
      cache: "no-store",
    })
    .then((res) => res.data)
    .catch(() => ({}));

  return (
    <div>
      <HeroSlider homeBannerData={homeBannerData} />
      <HomePageCategory t={t} categoryData={categoryData} />
      {bestSellerData?.length > 0 && (
        <MostPopularProduct
          t={t}
          bestSellerData={bestSellerData}
          categoryData={categoryData}
        />
      )}
      <Advantages benefitData={benefitData} t={t} />
      {newProductsData?.length > 0 && (
        <NewProducts newProductsData={newProductsData} t={t} />
      )}
      <ShopCategory t={t} quickLinkData={quickLinkData} />
      <div className="homepageBrandAndBlog">
        {brandsData?.length > 0 && (
          <HomePageBrands brandsData={brandsData} t={t} />
        )}
        {blogsData?.length > 0 && <HomePageBlogs blogsData={blogsData} t={t} />}
      </div>

      <SeoContent t={t} homeData={homeData} />
    </div>
  );
};

export default page;
