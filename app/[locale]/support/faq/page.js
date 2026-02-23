import FAQs from '@/components/SupportPaegs/FAQs'
import React from 'react'
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";


async function fetchFaqPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data: brand } = await axiosInstance.get(`/page-data/faq`, {
      headers: { Lang: lang.value },
      cache: "no-store",
    });
    return brand;
  } catch (error) {
    throw error;
  }
}

const page = async () => {
  const faqPageData = await fetchFaqPageData();
  const faqData = faqPageData.data.data;

  return (
    <div>
      <FAQs faqData={faqData} />
    </div>
  )
}

export default page