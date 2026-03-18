import ProductDetailPage from "@/components/ProductDetailPage/ProductDetailPage";
import React from "react";
import "../products.scss";
import Advantages from "@/components/HomePage/Advantages";
import ProductDetailPageSimilars from "@/components/ProductDetailPage/ProductDetailPageSimilars";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
import ProductDetailPageBreadcrumbs from "@/components/ProductDetailPage/ProductDetailPageBreadcrumbs";

/* ================= FETCH ================= */
async function fetchProductById(id) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "az";

  try {
    const { data } = await axiosInstance.get(`/first-page-data/${id}`, {
      headers: { Lang: lang },
      cache: "no-store",
    });

    return data?.data || data;
  } catch (error) {
    console.error("Product fetch error:", error);
    return null;
  }
}

async function fetchSimilarProducts(categoryId, currentProductId) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "az";

  try {
    const { data } = await axiosInstance.get(
      `/page-data/product-list?per_page=12&filters[0][key]=category&filters[0][operator]=IN&filters[0][value][]=${categoryId}`,
      {
        headers: { Lang: lang },
        cache: "no-store",
      },
    );

    // 🔹 Düzgün array-i götürürük
    const productsArray = data?.data?.data || [];

    // hazırki məhsulu çıxarırıq
    const filtered = productsArray.filter(
      (item) => item.id !== Number(currentProductId),
    );

    return filtered; // indi array 0 deyil, real məhsullar olacaq
  } catch (error) {
    console.error("Similar products fetch error:", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.id;

  if (!slug) {
    return {
      title: "Yerusalim18",
      description: "Yerusalim18",
    };
  }

  const id = slug.split("-").pop();
  const productDetail = await fetchProductById(id);

  const pageTitle = productDetail?.meta_title || "Yerusalim18";
  const pageDescription = productDetail?.meta_description || "Yerusalim18";
  const imageUrl = productDetail?.image_gallery?.[0] || "/favicon.ico";
  const imageAlt = productDetail?.name || "Yerusalim18";
  const canonicalUrl = `https://adentta.az/products/${slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
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
      description: pageDescription,
      creator: "@Yerusalim18",
      site: "@Yerusalim18",
      images: [`https://admin.adentta.az/storage${imageUrl}`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
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

/* ================= PAGE ================= */
const page = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.id;
  const t = await getTranslations();

  if (!slug) {
    return <div>Product not found</div>;
  }
  const id = slug.split("-").pop();
  const productDetail = await fetchProductById(id);

  const categoryId = productDetail?.category?.[0]?.id;
  const similarProducts = categoryId
    ? await fetchSimilarProducts(categoryId, id)
    : [];

  const benefit = await fetchCraftPageData();
  const benefitData =
    benefit?.data?.data?.filter((item) => item.page_section === "benefit") ||
    [];

    console.log(productDetail || "dwe")

  return (
    <div>
      <div className="productPageBackground">
        <ProductDetailPageBreadcrumbs t={t} productDetail={productDetail} />
        <ProductDetailPage t={t} productDetail={productDetail} />
      </div>

      <Advantages t={t} benefitData={benefitData} />

      <ProductDetailPageSimilars t={t} products={similarProducts} />
    </div>
  );
};

export default page;
