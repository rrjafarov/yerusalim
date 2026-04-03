import "./globals.scss";
import StoreProvider from "@/redux/StoreProvider";
import GuestUUIDProvider from "@/utils/GuestUUIDProvider";
import { NextIntlClientProvider } from "next-intl";
import FormValidationProvider from "@/utils/FormValidationProvider";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import NavigationProgress from "@/components/NavigationProgress";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const metadata = {
  title: "Yerusalim18",
  description: "Yerusalim18",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

async function fetchCategoryPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: about } = await axiosInstance.get(
      `/page-data/product-categoires?per_page=999`,
      {
        headers: { Lang: lang.value },
        cache: "no-store",
      },
    );
    return about;
  } catch (error) {
    throw error;
  }
}

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

async function fetchSupportData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "en";
  try {
    const { data } = await axiosInstance.get(`/page-data/support-list`, {
      headers: { Lang: lang },
      cache: "no-store",
    });
    return data;
  } catch (err) {
    console.error(err);
    return { data: { data: [] } };
  }
}

export default async function RootLayout({ children, params }) {
  const t = await getTranslations();

  const categoryPageData = await fetchCategoryPageData();
  const categoryData = categoryPageData;

  const contactPageData = await fetchContactPageData();
  const contactData = contactPageData.data;

  const topLinkData = await fetchTopLinkPageData();

  const supportData = await fetchSupportData();

  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale || "az"}>
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
            {children}
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
