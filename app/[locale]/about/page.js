import React from "react";
import "./about.scss";
import AboutPageHero from "@/components/AboutPage/AboutPageHero";
import AboutHeroUnderContent from "@/components/AboutPage/AboutHeroUnderContent";
import AboutPageOurHistory from "@/components/AboutPage/AboutPageOurHistory";
import AboutPageOurCraft from "@/components/AboutPage/AboutPageOurCraft";
import AboutMisionVision from "@/components/AboutPage/AboutMisionVision";
import PhotoGallery from "@/components/Mixed/PhotoGallery";
import AboutOurBrands from "@/components/AboutPage/AboutOurBrands";
import AboutPageDirector from "@/components/AboutPage/AboutPageDirector";
import AboutBreadcrumbs from "@/components/AboutPage/AboutBreadcrumbs";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

async function fetchAboutPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: about } = await axiosInstance.get(`/page-data/about`, {
      headers: { Lang: lang.value },
      cache: "no-store",
    });
    return about;
  } catch (error) {
    throw error;
  }
}

async function fetchBrandsPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: about } = await axiosInstance.get(`/page-data/brand-list`, {
      headers: { Lang: lang.value },
      cache: "no-store",
    });
    return about;
  } catch (error) {
    throw error;
  }
}

async function fetchCraftPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: about } = await axiosInstance.get(
      `/page-data/benefit-craft`,
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

async function getTranslations() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: about } = await axiosInstance.get(`/translation-list`, {
      headers: { Lang: lang.value },
      cache: "no-store",
    });
    return about;
  } catch (error) {
    throw error;
  }
}

export async function generateMetadata() {
  const aboutInfo = await fetchAboutPageData();
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "az";

  const imageUrl = aboutInfo?.data?.banner_image;
  const imageAlt = aboutInfo?.data?.meta_title || "Adentta";
  const canonicalUrl = "https://adentta.az";

  return {
    title: aboutInfo?.data?.meta_title,
    description: aboutInfo?.data?.meta_description,

    openGraph: {
      title: aboutInfo?.data?.meta_title || "Adentta",
      description: aboutInfo?.data?.meta_description,
      url: canonicalUrl,
      images: [
        {
          url: imageUrl
            ? `https://admin.adentta.az/storage${imageUrl}`
            : "https://adentta.az/default-og.png",
          alt: imageAlt,
          width: 1200,
          height: 630,
        },
      ],
      site_name: "Adentta",
      type: "website",
      locale: lang,
    },

    twitter: {
      card: "summary_large_image",
      title: aboutInfo?.data?.meta_title || "Adentta",
      description: aboutInfo?.data?.meta_description || "Adentta",
      creator: "@adentta",
      site: "@adentta",
      images: [
        imageUrl
          ? `https://admin.adentta.az/storage${imageUrl}`
          : "https://adentta.az/default-og.png",
      ],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        az: "https://adentta.az/az",
        ru: "https://adentta.az/ru",
        en: "https://adentta.az/en",
      },
    },
  };
}

const page = async () => {
  const aboutPageData = await fetchAboutPageData();
  const aboutData = aboutPageData.data;

  const brandsPageData = await fetchBrandsPageData();
  const brandsData = brandsPageData.data.data;

  const t = await getTranslations();


  const craftPageData = await fetchCraftPageData();
  const craftData =
    craftPageData?.data?.data?.filter(
      (item) => item.page_section === "craft",
    ) || [];


    
  return (
    <div>
      <AboutPageHero aboutData={aboutData} />
      <div className="productPageBackground">
        <AboutBreadcrumbs t={t} aboutData={aboutData} />
        <AboutHeroUnderContent aboutData={aboutData} />
        <AboutPageOurHistory aboutData={aboutData} />
        <AboutPageOurCraft t={t} craftData={craftData} />
        <AboutMisionVision t={t} aboutData={aboutData} />
        <PhotoGallery t={t} aboutData={aboutData} />
      </div>
      <AboutOurBrands t={t} brandsData={brandsData} />
      <AboutPageDirector t={t} aboutData={aboutData} />
    </div>
  );
};

export default page;
