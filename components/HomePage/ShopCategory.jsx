import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopCategory = () => {
  return (
    <div className="shopCategory">
      <div className="container">
        <div className="shopCategoryItem">
          <div className="row">
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="shopCategoryImg">
                <Image
                  src="/img/shopCategory01.png"
                  alt="shop"
                  width={1020}
                  height={1080}
                />
                <div className="shopCategoryImgAbsolute">
                  <Link href="#">
                    <span>Shop by Fragrance</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="shopCategoryImg">
                <Image
                  src="/img/shopCategory02.png"
                  alt="shop"
                  width={1020}
                  height={1080}
                />
                <div className="shopCategoryImgAbsolute">
                  <Link href="#">
                    <span>Shop by Look</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
