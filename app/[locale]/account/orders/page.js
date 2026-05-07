import OrderList from "@/components/Account/OrderList";
import React from "react";
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

async function fetchOrderData() {
  const cookieStore = await cookies();
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅
  const token = cookieStore.get("token")?.value;
  try {
    const { data: order } = await axiosInstance.get(`/user-orders`, {
      headers: {
        Lang: langValue,
        Authorization: token ? `Bearer ${token}` : "",
      },
      cache: "no-store",
    });
    return order;
  } catch (error) {
    throw error;
  }
}

const page = async () => {
  const t = await getTranslations();
  const orders = await fetchOrderData();

  return (
    <div>
      <OrderList t={t} orders={orders} />
    </div>
  );
};

export default page;
