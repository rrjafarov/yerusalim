import Address from "@/components/Account/Address";
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
      <Address delveryRegions={delveryRegions} t={t} />
    </div>
  );
};

export default page;
