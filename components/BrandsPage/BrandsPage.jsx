import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrandsPage = ({ brandsData,t }) => {
  console.log("brandsData:", brandsData.data);
  return (
    <div className="brandsPage">
      <div className="container">
        <div className="brandsPageItems">
          {brandsData.data?.data.map((brandItem, index) => (
            <>
              <div className="brandsPageItem">
                <div className="row">
                  <div className="xl-6 lg-6 md-6 sm-12">
                    <div className="brandsPageImg">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${brandItem.image}`}
                        alt="brands"
                        width={620}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="xl-6 lg-6 md-6 sm-12">
                    <div className="brandsPageContent">
                      <span>{brandItem.name}</span>
                      <div
                      className="brandDescription"
                        dangerouslySetInnerHTML={{ __html: brandItem.description }}
                      />
                      <Link href="#">
                        <button>{t?.shopAll}</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brandsPageLine"></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;
