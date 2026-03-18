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
  const t = await getTranslations();

  return (
    <div>
      <CartHero t={t} />
      <div className="productPageBackground">
        <CartBreadcrumbs t={t} />
        <Cart t={t} />
      </div>
    </div>
  );
};

export default page;
