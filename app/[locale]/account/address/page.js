import Address from '@/components/Account/Address'
import React from 'react'
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
      <Address t={t} />
    </div>
  )
}

export default page