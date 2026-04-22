import Login from "@/components/Login/Login";
import React from "react";
import "../login.scss";
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

const page = async () => {
  const t = await getTranslations();

  return (
    <div>
      <div className="productPageBackground">
        <Login t={t} />
      </div>
    </div>
  );
};

export default page;
