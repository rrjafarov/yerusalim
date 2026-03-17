import React from "react";
import "../login.scss";
import SignUp from "@/components/Login/SignUp";
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
      <div className="productPageBackground">
        <SignUp t={t} />
      </div>
    </div>
  );
};

export default page;
