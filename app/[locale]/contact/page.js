import ContactPageHero from "@/components/ContactPage/ContactPageHero";
import React from "react";
import "./contact.scss";
import ContactPageMain from "@/components/ContactPage/ContactPageMain";
import ContactMap from "@/components/ContactPage/ContactMap";
import ContactBreadcrumbs from "@/components/ContactPage/ContactBreadcrumbs";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

async function fetchContactPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: about } = await axiosInstance.get(`/page-data/contact`, {
      headers: { Lang: lang.value },
      cache: "no-store",
    });
    return about;
  } catch (error) {
    throw error;
  }
}
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
export async function generateMetadata() {
  const contactPageData = await fetchContactPageData();
  const contactData = contactPageData.data;

  const lang = (await cookies()).get("NEXT_LOCALE")?.value || "az";
  const imageUrl = contactData?.og_image;
  const imageAlt = contactData?.meta_title || "Yerusalim 18";
  const canonicalUrl = "https://yerusalim18.az/contact";

  return {
    title: contactData?.meta_title,
    description: contactData?.meta_description,

    openGraph: {
      title: contactData?.meta_title || "Yerusalim 18",
      description: contactData?.meta_description,
      url: canonicalUrl,
      images: [
        {
          url: imageUrl
            ? `https://admin.yerusalim18.az/storage${imageUrl}`
            : "https://yerusalim18.az/default-og.png",
          alt: imageAlt,
          width: 1200,
          height: 630,
        },
      ],
      site_name: "Yerusalim 18",
      type: "website",
      locale: lang,
    },

    twitter: {
      card: "summary_large_image",
      title: contactData?.meta_title || "Yerusalim 18",
      description: contactData?.meta_description || "Yerusalim 18",
      creator: "@yerusalim18",
      site: "@yerusalim18",
      images: [
        imageUrl
          ? `https://admin.yerusalim18.az/storage${imageUrl}`
          : "https://yerusalim18.az/default-og.png",
      ],
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        az: "https://yerusalim18.az/az/contact",
        ru: "https://yerusalim18.az/ru/contact",
        en: "https://yerusalim18.az/en/contact",
      },
    },
  };
}

const page = async () => {
  const contactPageData = await fetchContactPageData();
  const contactData = contactPageData.data;
  const t = await getTranslations();

  return (
    <div>
      <ContactPageHero contactData={contactData} />
      <div className="productPageBackground">
        <ContactBreadcrumbs t={t} contactData={contactData} />
        <ContactPageMain t={t} contactData={contactData} />
        <ContactMap t={t} contactData={contactData} />
      </div>
    </div>
  );
};

export default page;

