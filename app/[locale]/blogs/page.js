import React from "react";
import "./blogs.scss";
import BlogsPageHero from "@/components/BlogsPage/BlogsPageHero";
import BlogsPage from "@/components/BlogsPage/BlogsPage";
import BlogsBreadcrumbs from "@/components/BlogsPage/BlogsBreadcrumbs";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

async function fetchBlogsPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: blog } = await axiosInstance.get(`/page-data/blog-list`, {
      headers: { Lang: lang.value },
      cache: "no-store",
    });
    return blog;
  } catch (error) {
    throw error;
  }
}


async function fetchBlogsCategoriesData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: blog } = await axiosInstance.get(`/page-data/blog-categories`, {
      headers: { Lang: lang.value },
      cache: "no-store",
    });
    return blog;
  } catch (error) {
    throw error;
  }
}

async function fetchBlogsSeoPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: info } = await axiosInstance.get(`/page-data/blog-info`, {
      headers: { Lang: lang.value },
      cache: "no-store",
    });
    return info;
  } catch (error) {
    throw error;
  }
}
// generateMetadata üçün çağırılır
async function fetchBlogInfo() {
  try {
    const data = await fetchBlogsSeoPageData();
    return data;
  } catch (error) {
    return null;
  }
}
export async function generateMetadata() {
  const blogInfo = await fetchBlogInfo();
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "az";
  const imageUrl = blogInfo?.data?.og_image;
  const imageAlt = blogInfo?.data?.meta_title || "Yerusalim 18";
  const canonicalUrl = "https://adentta.az";
  return {
    title: blogInfo?.data?.meta_title,
    description: blogInfo?.data?.meta_description,

    openGraph: {
      title: blogInfo?.data?.meta_title || "Yerusalim 18",
      description: blogInfo?.data?.meta_description,
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
      site_name: "Yerusalim 18",
      type: "website",
      locale: lang,
    },

    twitter: {
      card: "summary_large_image",
      title: blogInfo?.data?.meta_title || "Yerusalim 18",
      description: blogInfo?.data?.meta_description || "Yerusalim 18",
      creator: "@yerusalim18",
      site: "@yerusalim18",
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

const page = async () => {
  const blogName = await fetchBlogsSeoPageData();
  const blogNameData = blogName;
  const blogsPageData = await fetchBlogsPageData();
  const blogsData = blogsPageData;
  const t = await getTranslations();
  const blogsCategories = await fetchBlogsCategoriesData();
  const blogsCategoryData = blogsCategories;
  return (
    <div>
      <BlogsPageHero blogNameData={blogNameData} />
      <div className="productPageBackground">
        <BlogsBreadcrumbs t={t} blogNameData={blogNameData} />
        <BlogsPage t={t} blogsCategoryData={blogsCategoryData} blogsData={blogsData} />
      </div>
    </div>
  );
};

export default page;
