// "use client";
import "./account.scss";
import AccountHero from "@/components/Account/AccountHero";
import AccountTopLinks from "@/components/Account/AccountTopLinks";
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
const AccountPage = async ({ children }) => {
  const t = await getTranslations();

  return (
    <>
      <AccountHero t={t} />
      <div className="accountBackground">
        <div className="container">
          <div className="account">
            <div className="accountTopLinks">
              <AccountTopLinks t={t} />
            </div>
            <div className="accountTopLinks">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
