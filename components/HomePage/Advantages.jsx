import Image from "next/image";
import React from "react";

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="container">
        <div className="advantagesItems">
          <h2>Benefits of shopping with us</h2>
          <div className="advantagesItemsCards">
            <div className="row">
              <div className="xl-3 lg-3 md-6 sm-6">
                <div className="advantagesItemsCard">
                  <div className="advantagesItemsCardContent">
                    <div className="advantagesItemsCardContentImg">
                      <Image
                        src="/img/info01.png"
                        alt="advantages"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="advantagesItemsCardContentTitle">
                      <p>Free shipping & returns</p>
                      <span>
                        Lorem ipsum dolor sit amet, consect adipiscing elit.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl-3 lg-3 md-6 sm-6">
                <div className="advantagesItemsCard">
                  <div className="advantagesItemsCardContent">
                    <div className="advantagesItemsCardContentImg">
                      <Image
                        src="/img/info02.png"
                        alt="advantages"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="advantagesItemsCardContentTitle">
                      <p>Customers rate us 4.8</p>
                      <span>
                        Lorem ipsum dolor sit amet, consect adipiscing elit.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl-3 lg-3 md-6 sm-6">
                <div className="advantagesItemsCard">
                  <div className="advantagesItemsCardContent">
                    <div className="advantagesItemsCardContentImg">
                      <Image
                        src="/img/info03.png"
                        alt="advantages"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="advantagesItemsCardContentTitle">
                      <p>Fast, secure delivery</p>
                      <span>
                        Lorem ipsum dolor sit amet, consect adipiscing elit.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl-3 lg-3 md-6 sm-6">
                <div className="advantagesItemsCard">
                  <div className="advantagesItemsCardContent">
                    <div className="advantagesItemsCardContentImg">
                      <Image
                        src="/img/info04.png"
                        alt="advantages"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="advantagesItemsCardContentTitle">
                      <p>Secure payments</p>
                      <span>
                        Lorem ipsum dolor sit amet, consect adipiscing elit.
                      </span>
                    </div>
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

export default Advantages;
