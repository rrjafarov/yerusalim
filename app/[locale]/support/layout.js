// "use client";

// import Link from "next/link";
// import "./support.scss";
// import SupportPageLeftLinks from "@/components/SupportPaegs/SupportPageLeftLinks";
// import SupportBreadcrumbs from "@/components/SupportPaegs/SupportBreadcrumbs";

// const SupportPage = ({ children }) => {
//   return (
//     <>
//       <div className="productPageBackground">
//         <div className="supportPages">
//           <div className="supportPageHero">
//             <h1>support</h1>
//           </div>

//           <SupportBreadcrumbs />

//           <div className="container">
//             <div className="supportPageTitle">
//               <h2>Support made simple</h2>
//             </div>
//             <div>
//               <div className="row">
//                 <div className="xl-3 lg-4 md-4 sm-12">
//                   <SupportPageLeftLinks />
//                 </div>
//                 <div className="xl-9 lg-8 md-8 sm-12">{children}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SupportPage;




















// !

// "use client";
import Link from "next/link";
import "./support.scss";
import SupportPageLeftLinks from "@/components/SupportPaegs/SupportPageLeftLinks";
import SupportBreadcrumbs from "@/components/SupportPaegs/SupportBreadcrumbs";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";


async function fetchSupportPageData() {
  const cookieStore = await cookies();
  // const lang = cookieStore.get("NEXT_LOCALE");
  const langValue = cookieStore.get("NEXT_LOCALE")?.value || "az"; // ✅


  try {
    const { data: brand } = await axiosInstance.get(`/page-data/support-list`, {
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

const SupportPage = async ({ children }) => {

  const supportPagesData = await fetchSupportPageData();
  const supportData = supportPagesData;
  const t = await getTranslations();


  return (
    <>
      <div className="productPageBackground">
        <div className="supportPages">
          <div className="supportPageHero">
            <h1>{t?.support}</h1>
          </div>
          <SupportBreadcrumbs t={t} />
          <div className="container">
            <div className="supportPageTitle">
              <h2>{t?.supportMade}</h2>
            </div>
            <div>
              <div className="row">
                <div className="xl-3 lg-4 md-4 sm-12">
                  <SupportPageLeftLinks supportData={supportData} />
                </div>
                <div className="xl-9 lg-8 md-8 sm-12">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
