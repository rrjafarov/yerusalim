import React from "react";
import "./brands.scss";
import BrandsHero from "@/components/BrandsPage/BrandsHero";
import BrandsPage from "@/components/BrandsPage/BrandsPage";
import BrandsBreadcrumbs from "@/components/BrandsPage/BrandsBreadcrumbs";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";


async function fetchBrandsPageData() {
  const cookieStore = await cookies();
  // const lang = cookieStore.get("NEXT_LOCALE");
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅

  try {
    const { data: brand } = await axiosInstance.get(`/page-data/brand-list`, {
      headers: { Lang: langValue },
      cache: "no-store",
    });
    return brand;
  } catch (error) {
    throw error;
  }
}
async function getTranslations() {
  const cookieStore = await cookies();
  // const lang = cookieStore.get("NEXT_LOCALE");
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅
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
async function fetchBrandsSeoPageData() {
  const cookieStore = await cookies();
  // const lang = cookieStore.get("NEXT_LOCALE");
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅

  try {
    const { data: info } = await axiosInstance.get(`/page-data/brand-info`, {
      headers: { Lang: langValue },
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
  const imageAlt = brandInfo?.data?.meta_title || "Yerusalim18";
  const canonicalUrl = "https://yerusalim18.com/brands";

  return {
    title: brandInfo?.data?.meta_title,
    description: brandInfo?.data?.meta_description,

    openGraph: {
      title: brandInfo?.data?.meta_title || "Yerusalim18",
      description: brandInfo?.data?.meta_description,
      url: canonicalUrl,
      images: [
        {
          url: imageUrl
            ? `https://admin.yerusalim18.com/storage${imageUrl}`
            : "https://yerusalim18.com/default-og.png",
          alt: imageAlt,
          width: 1200,
          height: 630,
        },
      ],
      site_name: "Yerusalim18",
      type: "website",
      locale: lang,
    },

    twitter: {
      card: "summary_large_image",
      title: brandInfo?.data?.meta_title || "Yerusalim18",
      description: brandInfo?.data?.meta_description || "Yerusalim18",
      creator: "@yerusalim18",
      site: "@yerusalim18",
      images: [
        imageUrl
          ? `https://admin.yerusalim18.com/storage${imageUrl}`
          : "https://yerusalim18.com/default-og.png",
      ],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        az: "https://yerusalim18.com/az/brands",
        ru: "https://yerusalim18.com/ru/brands",
        en: "https://yerusalim18.com/en/brands",
      },
    },
  };
}
const page = async () => {
  const brandsName = await fetchBrandsSeoPageData()
  const brandsNameData = brandsName;
  const brandsPageData = await fetchBrandsPageData();
  const brandsData = brandsPageData;
  const t = await getTranslations();

  return (
    <div>
      <BrandsHero brandsNameData={brandsNameData} />
      <div className="productPageBackground">
        <BrandsBreadcrumbs t={t} brandsNameData={brandsNameData} />
        <BrandsPage t={t} brandsData={brandsData} />
      </div>
    </div>
  );
};

export default page;
