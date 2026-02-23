import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrandsPage = ({ brandsData }) => {
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
                        // src="/img/homeBlog.png"
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
                      {/* <p>
                        Yerusalim 18 pairs natural wax blends with balanced
                        fragrance notes for a clean, even burn and a minimalist
                        look that fits any room. Hand-poured in small batches
                        and quality-tested, every piece is made to glow
                        beautifully—night after night.
                      </p> */}

                      <div
                      className="brandDescription"
                        dangerouslySetInnerHTML={{ __html: brandItem.description }}
                      />

                      <Link href="#">
                        <button>Shop all</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brandsPageLine"></div>
            </>
          ))}

          {/* <div className="brandsPageItem">
            <div className="row">
              <div className="xl-6 lg-6 md-6 sm-12">
                <div className="brandsPageImg">
                  <Image
                    src="/img/homeBlog.png"
                    alt="brands"
                    width={620}
                    height={300}
                  />
                </div>
              </div>
              <div className="xl-6 lg-6 md-6 sm-12">
                <div className="brandsPageContent">
                  <span>Brand name 01</span>
                  <p>
                    Yerusalim 18 pairs natural wax blends with balanced
                    fragrance notes for a clean, even burn and a minimalist look
                    that fits any room. Hand-poured in small batches and
                    quality-tested, every piece is made to glow
                    beautifully—night after night.
                  </p>

                  <button>Shop all</button>
                </div>
              </div>
            </div>
          </div>
          <div className="brandsPageLine"></div>
          <div className="brandsPageItem">
            <div className="row">
              <div className="xl-6 lg-6 md-6 sm-12">
                <div className="brandsPageImg">
                  <Image
                    src="/img/homeBlog.png"
                    alt="brands"
                    width={620}
                    height={300}
                  />
                </div>
              </div>
              <div className="xl-6 lg-6 md-6 sm-12">
                <div className="brandsPageContent">
                  <span>Brand name 01</span>
                  <p>
                    Yerusalim 18 pairs natural wax blends with balanced
                    fragrance notes for a clean, even burn and a minimalist look
                    that fits any room. Hand-poured in small batches and
                    quality-tested, every piece is made to glow
                    beautifully—night after night.
                  </p>

                  <button>Shop all</button>
                </div>
              </div>
            </div>
          </div>
          <div className="brandsPageLine"></div>
          <div className="brandsPageItem">
            <div className="row">
              <div className="xl-6 lg-6 md-6 sm-12">
                <div className="brandsPageImg">
                  <Image
                    src="/img/homeBlog.png"
                    alt="brands"
                    width={620}
                    height={300}
                  />
                </div>
              </div>
              <div className="xl-6 lg-6 md-6 sm-12">
                <div className="brandsPageContent">
                  <span>Brand name 01</span>
                  <p>
                    Yerusalim 18 pairs natural wax blends with balanced
                    fragrance notes for a clean, even burn and a minimalist look
                    that fits any room. Hand-poured in small batches and
                    quality-tested, every piece is made to glow
                    beautifully—night after night.
                  </p>

                  <button>Shop all</button>
                </div>
              </div>
            </div>
          </div>
          <div className="brandsPageLine"></div> */}
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;
