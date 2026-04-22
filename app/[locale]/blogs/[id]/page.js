import React from "react";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
import BlogsDetailHero from "@/components/BlogsDetailPage/BlogsDetailHero";
import BlogDetailDescription from "@/components/BlogsDetailPage/BlogDetailDescription";
import BlogDetailVideo from "@/components/BlogsDetailPage/BlogDetailVideo";
import OtherBlogs from "@/components/BlogsDetailPage/OtherBlogs";
import BlogGallery from "@/components/BlogsDetailPage/BlogGallery";
import BlogDetailPageBreadcrumbs from "@/components/BlogsDetailPage/BlogDetailPageBreadcrumbs";
import "../blogs.scss";


async function fetchBlogById(id) {
  const cookieStore = await cookies();
  // const lang = cookieStore.get("NEXT_LOCALE")?.value || "az";
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅
  try {
    const { data } = await axiosInstance.get(`/first-page-data/${id}`, {
      headers: { Lang: langValue },
      cache: "no-store",
    });
    return data?.data || data;
  } catch (error) {
    console.error("Blog fetch error:", error);
    return null;
  }
}

async function fetchBlogsPageData() {
  const cookieStore = await cookies();
  // const lang = cookieStore.get("NEXT_LOCALE");
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅
  try {
    const { data: blog } = await axiosInstance.get(`/page-data/blog-list`, {
      headers: { Lang: langValue },
      cache: "no-store",
    });
    return blog;
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

export async function generateMetadata({ params }) {
  const { id: slug } = await params;
  const id = slug.split("-").pop();
  const blog = await fetchBlogById(id);
  if (!blog) {
    return { title: "Yerusalim18", description: "Blog not found." };
  }
  const imageUrl = blog.cover_image || blog.main_image || "";
  const baseUrl = "https://yerusalim.com";
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "az";
  const canonicalUrl = `${baseUrl}/${lang}/blogs/${slug}`;
  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description || blog.content?.replace(/<[^>]*>/g, '').substring(0, 160),
    openGraph: {
      title: blog.meta_title || blog.title,
      description: blog.meta_description,
      url: canonicalUrl,
      images: [
        {
          url: `https://admin.yerusalim18.com/storage${imageUrl}`,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}


/* ================= PAGE COMPONENT ================= */
const page = async ({ params }) => {
  const { id: slug } = await params;
  const id = slug.split("-").pop();
  const t = await getTranslations();
  const blogDetail = await fetchBlogById(id);
  const blogsPageData = await fetchBlogsPageData();
  const allBlogs = Array.isArray(blogsPageData?.data?.data) ? blogsPageData.data.data : [];
  const otherBlogs = allBlogs.filter(blog => blog.id !== blogDetail.id);
  
  return (
    <div>
      <div className="productPageBackground">
        <BlogDetailPageBreadcrumbs t={t} blogData={blogDetail} />
        <BlogsDetailHero blogData={blogDetail} />
      </div>
      <BlogDetailDescription blogData={blogDetail} />
      <div className="blogDpColor">
        <BlogGallery t={t} blogData={blogDetail} />
        <BlogDetailVideo t={t} blogData={blogDetail} />
        <OtherBlogs t={t} currentId={blogDetail.id} otherBlogs={otherBlogs} />
      </div>
    </div>
  );
};
export default page;
