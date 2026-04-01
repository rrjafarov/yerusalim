import StoreProvider from "@/redux/StoreProvider";
import GuestUUIDProvider from "@/utils/GuestUUIDProvider";
import { NextIntlClientProvider } from "next-intl";
import FormValidationProvider from "@/utils/FormValidationProvider";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import NavigationProgress from "@/components/NavigationProgress";
import NotFound from "@/components/NotFound";

import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound as nextNotFound } from "next/navigation";

import "../app/[locale]/globals.scss";

/* ---------------- FETCH ---------------- */

async function fetchCategoryPageData(locale) {
  try {
    const cookieStore = await cookies();
    const lang = cookieStore.get("NEXT_LOCALE");

    const { data } = await axiosInstance.get(
      `/page-data/product-categoires?per_page=999`,
      {
        headers: { Lang: lang?.value || locale },
        cache: "no-store",
      },
    );

    return data;
  } catch {
    return null;
  }
}

async function fetchContactPageData(locale) {
  try {
    const cookieStore = await cookies();
    const lang = cookieStore.get("NEXT_LOCALE");

    const { data } = await axiosInstance.get(`/page-data/contact`, {
      headers: { Lang: lang?.value || locale },
      cache: "no-store",
    });

    return data;
  } catch {
    return null;
  }
}

async function getTranslations(locale) {
  try {
    const cookieStore = await cookies();
    const lang = cookieStore.get("NEXT_LOCALE");

    const { data } = await axiosInstance.get(`/translation-list`, {
      headers: { Lang: lang?.value || locale },
      cache: "no-store",
    });

    return data;
  } catch {
    return null;
  }
}

async function fetchSupportData(locale) {
  try {
    const cookieStore = await cookies();
    const lang = cookieStore.get("NEXT_LOCALE");

    const { data } = await axiosInstance.get(`/page-data/support-list`, {
      headers: { Lang: lang?.value || locale },
      cache: "no-store",
    });

    return data;
  } catch {
    return { data: [] };
  }
}

async function fetchTopLinkPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: about } = await axiosInstance.get(`/page-data/top-banner`, {
      headers: { Lang: lang.value },
      cache: "no-store",
    });
    return about;
  } catch (error) {
    throw error;
  }
}

/* ---------------- NOT FOUND ---------------- */

export default async function NotFoundPage({ params }) {
  const locale = params?.locale || "az";

  if (!routing.locales.includes(locale)) {
    nextNotFound();
  }

  const [messages, t, categoryPageData, contactPageData, supportData] =
    await Promise.all([
      getMessages(),
      getTranslations(locale),
      fetchCategoryPageData(locale),
      fetchContactPageData(locale),
      fetchSupportData(locale),
    ]);

  const categoryData = categoryPageData;
  const contactData = contactPageData?.data;
  const topLinkData = await fetchTopLinkPageData();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <StoreProvider>
          <GuestUUIDProvider />

          <NextIntlClientProvider messages={messages} locale={locale}>
            <FormValidationProvider />
            <NavigationProgress />

            <Header
              topLinkData={topLinkData}
              t={t}
              contactData={contactData}
              categoryData={categoryData}
            />

            <NotFound t={t} />

            <Footer
              t={t}
              contactData={contactData}
              categoryData={categoryData}
              supportData={supportData}
            />
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
