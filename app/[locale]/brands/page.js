import React from "react";
import "./brands.scss";
import BrandsHero from "@/components/BrandsPage/BrandsHero";
import BrandsPage from "@/components/BrandsPage/BrandsPage";
import BrandsBreadcrumbs from "@/components/BrandsPage/BrandsBreadcrumbs";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
async function fetchBrandsPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data: brand } = await axiosInstance.get(`/page-data/brand-list`, {
      headers: { Lang: lang.value },
      cache: "no-store",
    });
    return brand;
  } catch (error) {
    throw error;
  }
}
async function fetchBrandsSeoPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: info } = await axiosInstance.get(`/page-data/brand-info`, {
      headers: { Lang: lang.value },
      cache: "no-store",
    });
    return info;
  } catch (error) {
    throw error;
  }
}
async function fetchBrandInfo() {
  try {
    const data = await fetchBrandsSeoPageData();
    return data;
  } catch (error) {
    return null;
  }
}
export async function generateMetadata() {
  const brandInfo = await fetchBrandInfo();
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "az";
  const imageUrl = brandInfo?.data?.og_image;
  const imageAlt = brandInfo?.data?.meta_title || "Yerusalim 18";
  const canonicalUrl = "https://yerusalim18.az";

  return {
    title: brandInfo?.data?.meta_title,
    description: brandInfo?.data?.meta_description,

    openGraph: {
      title: brandInfo?.data?.meta_title || "Yerusalim 18",
      description: brandInfo?.data?.meta_description,
      url: canonicalUrl,
      images: [
        {
          url: imageUrl
            ? `https://admin.yerusalim18.az/storage${imageUrl}`
            : "https://yerusalim18.az/default-og.png",
          alt: imageAlt,
          width: 1200,
          height: 630,
        },
      ],
      site_name: "Yerusalim 18",
      type: "website",
      locale: lang,
    },

    twitter: {
      card: "summary_large_image",
      title: brandInfo?.data?.meta_title || "Yerusalim 18",
      description: brandInfo?.data?.meta_description || "Yerusalim 18",
      creator: "@yerusalim18",
      site: "@yerusalim18",
      images: [
        imageUrl
          ? `https://admin.yerusalim18.az/storage${imageUrl}`
          : "https://yerusalim18.az/default-og.png",
      ],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        az: "https://yerusalim18.az/az",
        ru: "https://yerusalim18.az/ru",
        en: "https://yerusalim18.az/en",
      },
    },
  };
}
const page = async () => {
  const brandsName = await fetchBrandsSeoPageData()
  const brandsNameData = brandsName;
  const brandsPageData = await fetchBrandsPageData();
  const brandsData = brandsPageData;
  return (
    <div>
      <BrandsHero brandsNameData={brandsNameData} />
      <div className="productPageBackground">
        <BrandsBreadcrumbs brandsNameData={brandsNameData} />
        <BrandsPage brandsData={brandsData} />
      </div>
    </div>
  );
};

export default page;
