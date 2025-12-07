import React from "react";
import SortBy from "./SortBy";
import Image from "next/image";
import ProductCard from "@/components/Mixed/ProductCard";
import Pagination from "@/components/Mixed/Pagination";
import FilterAccordion from "@/components/ProductPage/FilterAccordion";

const ProductPageDetails = () => {
  
  return (
    <div className="productPageDetails">
      <div className="container">
        <div className="productPageDetailsHeader">
          <div className="productPageDetailsHeaderLeft">
            <span>Filter</span>
            <p>
              <strong>888</strong> Results
            </p>
          </div>
          <div className="productPageDetailsHeaderRight">
            <SortBy />
          </div>
        </div>

        <div className="productPageLayout">
          <div className="row">
            <div className="xl-3 lg-4 md-6 sm-0">
              <div className="productPageLayoutLeft">
                <FilterAccordion />
              </div>
            </div>
            <div className="xl-9 lg-8 md-6 sm-12">
              <div className="productPageLayoutRight">
                <div className="productPageLayoutRightBanner">
                  <Image
                    src="/img/productPageImg.png"
                    alt="banner"
                    width={1000}
                    height={350}
                  />
                </div>
                <div className="productPageLayoutRightCards">
                  <div className="row">
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                    <div className="xl-4 lg-4 md-6 sm-6">
                      <ProductCard />
                    </div>
                  </div>
                  <div className="productPageLayoutRightCardsPagination">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageDetails;
