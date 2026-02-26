
// import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
// import ProductDetailPage from "@/components/ProductDetailPage/ProductDetailPage";
// import React from "react";
// import "../products.scss";
// import Advantages from "@/components/HomePage/Advantages";
// import ProductDetailPageSimilars from "@/components/ProductDetailPage/ProductDetailPageSimilars";
// import axiosInstance from "@/lib/axios";
// import { cookies } from "next/headers";


// async function fetchProductById(id) {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE")?.value || "az";
//   try {
//     const { data } = await axiosInstance.get(`/first-page-data/${id}`, {
//       headers: { Lang: lang },
//       cache: "no-store",
//     });
//     return data?.data || data;
//   } catch (error) {
//     console.error("Product fetch error:", error);
//     return null;
//   }
// }


// export async function generateMetadata({ params }) {
//   const { id: slug } = await params;
//   const id = slug.split("-").pop();
//   const product = await fetchProductById(id);
//   if (!product) {
//     return { title: "Yerusalim18", description: "Product not found." };
//   }
//   const imageUrl = product.cover_image || product.main_image || "";
//   const baseUrl = "https://yerusalim.az";
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE")?.value || "az";
//   const canonicalUrl = `${baseUrl}/${lang}/blogs/${slug}`;
//   return {
//     title: blog.meta_title || blog.title,
//     description: blog.meta_description || blog.content?.replace(/<[^>]*>/g, '').substring(0, 160),
//     openGraph: {
//       title: blog.meta_title || blog.title,
//       description: blog.meta_description,
//       url: canonicalUrl,
//       images: [
//         {
//           url: `https://admin.yerusalim.az/storage${imageUrl}`,
//           width: 1200,
//           height: 630,
//         },
//       ],
//       type: "article",
//     },
//     alternates: {
//       canonical: canonicalUrl,
//     },
//   };
// }




// const page = async ({ params }) => {
//   const { id: slug } = await params;
//   const id = slug.split("-").pop();

//   return (
//     <div>
//       <div className="productPageBackground">
//         <Breadcrumbs />
//         <ProductDetailPage />
//       </div>
//       <Advantages />
//       <ProductDetailPageSimilars />
//     </div>
//   );
// };

// export default page;





// !  ================= IMPORTS ================= */
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
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

/* ================= PAGE ================= */
const page = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.id;

  if (!slug) {
    return <div>Product not found</div>;
  }
  const id = slug.split("-").pop();
  const productDetail = await fetchProductById(id);

  console.log("========== PRODUCT DETAIL ==========");
  console.log(productDetail);

  return (
    <div>
      <div className="productPageBackground">
        <ProductDetailPageBreadcrumbs productDetail={productDetail} />
        <ProductDetailPage productDetail={productDetail} />
      </div>

      <Advantages />

      <ProductDetailPageSimilars />
    </div>
  );
};

export default page;