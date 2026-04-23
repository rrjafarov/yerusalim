import React from 'react'
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
import SignUpSuccess from '@/components/Login/SignUpSuccess';
import "../login.scss";


async function getTranslations() {
  const cookieStore = await cookies();
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; 
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
        <SignUpSuccess t={t} />
    </div>
  )
}

export default page