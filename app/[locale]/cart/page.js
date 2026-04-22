import React from "react";
import "./cart.scss";
import CartHero from "@/components/Cart/CartHero";
import Cart from "@/components/Cart/Cart";
import CartBreadcrumbs from "@/components/Cart/CartBreadcrumbs";
import CartNotProduct from "@/components/Cart/CartNotProduct";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

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

async function fetchRegionPageData() {
  const cookieStore = await cookies();
  // const lang = cookieStore.get("NEXT_LOCALE");
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅

  try {
    const { data: about } = await axiosInstance.get(
      `/page-data/delivery-regions`,
      {
        headers: { Lang: langValue },
        cache: "no-store",
      },
    );
    return about;
  } catch (error) {
    throw error;
  }
}


const page = async () => {
  const t = await getTranslations();
  const regionData = await fetchRegionPageData();
  const delveryRegions = regionData?.data?.data || [];

  return (
    <div>
      <CartHero t={t} />
      <div className="productPageBackground">
        <CartBreadcrumbs t={t} />
        <Cart delveryRegions={delveryRegions} t={t} />
      </div>
    </div>
  );
};

export default page;
