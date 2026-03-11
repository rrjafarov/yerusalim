import "./globals.scss";
import StoreProvider from "@/redux/StoreProvider";
import GuestUUIDProvider from "@/utils/GuestUUIDProvider";
import FormValidationProvider from "@/utils/FormValidationProvider";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import NavigationProgress from "@/components/NavigationProgress";

export const metadata = {
  title: "Yerusalim18",
  description: "Yerusalim18",
  icons: "/favicon.png",
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
      `/page-data/product-categoires`,
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

export default async function RootLayout({ children }) {
  // const t = await getTranslations();
  const categoryPageData = await fetchCategoryPageData();
  const categoryData = categoryPageData;

  const contactPageData = await fetchContactPageData();
  const contactData = contactPageData.data;

  const supportData = await fetchSupportData();

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <StoreProvider>
          <GuestUUIDProvider />
          <FormValidationProvider />
          <NavigationProgress />
          <Header contactData={contactData} categoryData={categoryData} />
          {children}
          <Footer
            contactData={contactData}
            categoryData={categoryData}
            supportData={supportData}
          />
        </StoreProvider>
      </body>
    </html>
  );
}
