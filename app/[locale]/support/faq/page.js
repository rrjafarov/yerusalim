import FAQs from '@/components/SupportPaegs/FAQs'
import React from 'react'
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";


async function fetchFaqPageData() {
  const cookieStore = await cookies();
  // const lang = cookieStore.get("NEXT_LOCALE");
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅


  try {
    const { data: brand } = await axiosInstance.get(`/page-data/faq`, {
      headers: { Lang: langValue },
      cache: "no-store",
    });
    return brand;
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

const page = async () => {
  const faqPageData = await fetchFaqPageData();
  const faqData = faqPageData.data.data;
  const t = await getTranslations();


  return (
    <div>
      <FAQs t={t} faqData={faqData} />
    </div>
  )
}

export default page