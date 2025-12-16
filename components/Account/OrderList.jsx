"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const OrderList = () => {
  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleOrder = (orderNo) => {
    setExpandedOrder(expandedOrder === orderNo ? null : orderNo);
  };

  return (
    <div className="orderList">
      <div className="order-list-container">
        <span className="order-list-title">My order List</span>

        <table className="order-table">
          <thead>
            <tr className="orderHeader">
              <th>ORDER NO.</th>
              <th>CUSTOMER NAME</th>
              <th>ORDER DATE</th>
              <th>ADDRESS</th>
              <th>PAYMENT STATUS</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            {/* MAIN ORDER ROW */}
            <tr className="orderRow" onClick={() => toggleOrder("300")}>
              <td>300</td>
              <td>Lavinia Leo</td>
              <td>13-Nov-2026</td>
              <td>Baku, Azerbaijan</td>
              <td>
                <span className="paymentStatus">Paid</span>
              </td>
              <td>$400</td>
              <td className="order-status-cell">
                <span className="orderStatus">Confirmed</span>
                <span
                  className={`chevron-icon ${
                    expandedOrder === "300" ? "open" : ""
                  }`}
                >
                  {expandedOrder === "300" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                    >
                      <path
                        d="M14.9386 10.0601L10.0486 5.71339C9.47109 5.20006 8.5261 5.20006 7.94859 5.71339L3.05859 10.0601"
                        stroke="#FF0000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                    >
                      <path
                        d="M3.06141 5.94043L7.95141 10.2871C8.52891 10.8004 9.47391 10.8004 10.0514 10.2871L14.9414 5.94043"
                        stroke="#222222"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </td>
            </tr>

            {/* ACCORDION ROW */}
            {expandedOrder === "300" && (
              <tr className="accordionRow">
                <td colSpan="7">
                  <div className="order-details">
                    <div className="order-details-grid">
                      {/* PRODUCTS */}
                      <div className="products-section">
                        <div className="product-card">
                          <div className="product-info">
                            <Image
                              src="/img/cartPro.png"
                              alt="orderImage"
                              width={110}
                              height={110}
                              className="product-image"
                            />

                            <div className="product-text">
                              <span className="product-name">
                                Product Name is here
                              </span>
                              <div className="product-specs">
                                <span>Size: L</span>
                                <span>Quantity: 1</span>
                              </div>
                            </div>
                          </div>
                          <div className="product-actions">
                            <Link
                              href="/product/id"
                              className="see-product-link"
                            >
                              see product
                            </Link>
                            <span className="product-price">37 azn</span>
                          </div>
                        </div>

                        <div className="product-cardLine"></div>

                        <div className="product-card">
                          <div className="product-info">
                            <Image
                              src="/img/cartPro.png"
                              alt="orderImage"
                              width={110}
                              height={110}
                              className="product-image"
                            />

                            <div className="product-text">
                              <span className="product-name">
                                Product Name is here
                              </span>
                              <div className="product-specs">
                                <span>Size: L</span>
                                <span>Quantity: 1</span>
                              </div>
                            </div>
                          </div>
                          <div className="product-actions">
                            <Link
                              href="/product/id"
                              className="see-product-link"
                            >
                              see product
                            </Link>
                            <span className="product-price">37 azn</span>
                          </div>
                        </div>
                        <div className="product-cardLine"></div>

                        <div className="product-card">
                          <div className="product-info">
                            <Image
                              src="/img/cartPro.png"
                              alt="orderImage"
                              width={110}
                              height={110}
                              className="product-image"
                            />

                            <div className="product-text">
                              <span className="product-name">
                                Product Name is here
                              </span>
                              <div className="product-specs">
                                <span>Size: L</span>
                                <span>Quantity: 1</span>
                              </div>
                            </div>
                          </div>
                          <div className="product-actions">
                            <Link
                              href="/product/id"
                              className="see-product-link"
                            >
                              see product
                            </Link>
                            <span className="product-price">37 azn</span>
                          </div>
                        </div>
                        <div className="product-cardLine"></div>
                        <div className="product-card">
                          <div className="product-info">
                            <Image
                              src="/img/cartPro.png"
                              alt="orderImage"
                              width={110}
                              height={110}
                              className="product-image"
                            />

                            <div className="product-text">
                              <span className="product-name">
                                Product Name is here
                              </span>
                              <div className="product-specs">
                                <span>Size: L</span>
                                <span>Quantity: 1</span>
                              </div>
                            </div>
                          </div>
                          <div className="product-actions">
                            <Link
                              href="/product/id"
                              className="see-product-link"
                            >
                              see product
                            </Link>
                            <span className="product-price">37 azn</span>
                          </div>
                        </div>
                        <div className="product-cardLine"></div>
                      </div>

                      {/* SUMMARY */}
                      <div className="order-summary">
                        <div className="order-summaryItems">
                          <p className="summary-title">Order Summary</p>
                          <div className="summary-items">
                            <div className="summary-row">
                              <span>Total item</span>
                              <span>4</span>
                            </div>
                            <div className="summary-row">
                              <span>Subtotal</span>
                              <span>148 azn</span>
                            </div>
                            <div className="summary-row">
                              <span>Delivery</span>
                              <span>1 azn</span>
                            </div>
                          </div>

                          <div className="summary-total">
                            <span>Total :</span>
                            <span>149 azn</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>






          <tbody>
            {/* MAIN ORDER ROW */}
            <tr className="orderRow" onClick={() => toggleOrder("301")}>
              <td>300</td>
              <td>Lavinia Leo</td>
              <td>13-Nov-2026</td>
              <td>Baku, Azerbaijan</td>
              <td>
                <span className="paymentStatus">Paid</span>
              </td>
              <td>$400</td>
              <td className="order-status-cell">
                <span className="orderStatus">Confirmed</span>
                <span
                  className={`chevron-icon ${
                    expandedOrder === "301" ? "open" : ""
                  }`}
                >
                  {expandedOrder === "301" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                    >
                      <path
                        d="M14.9386 10.0601L10.0486 5.71339C9.47109 5.20006 8.5261 5.20006 7.94859 5.71339L3.05859 10.0601"
                        stroke="#FF0000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                    >
                      <path
                        d="M3.06141 5.94043L7.95141 10.2871C8.52891 10.8004 9.47391 10.8004 10.0514 10.2871L14.9414 5.94043"
                        stroke="#222222"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </td>
            </tr>

            {/* ACCORDION ROW */}
            {expandedOrder === "301" && (
              <tr className="accordionRow">
                <td colSpan="7">
                  <div className="order-details">
                    <div className="order-details-grid">
                      {/* PRODUCTS */}
                      <div className="products-section">
                        <div className="product-card">
                          <div className="product-info">
                            <Image
                              src="/img/cartPro.png"
                              alt="orderImage"
                              width={110}
                              height={110}
                              className="product-image"
                            />

                            <div className="product-text">
                              <span className="product-name">
                                Product Name is here
                              </span>
                              <div className="product-specs">
                                <span>Size: L</span>
                                <span>Quantity: 1</span>
                              </div>
                            </div>
                          </div>
                          <div className="product-actions">
                            <Link
                              href="/product/id"
                              className="see-product-link"
                            >
                              see product
                            </Link>
                            <span className="product-price">37 azn</span>
                          </div>
                        </div>

                        <div className="product-cardLine"></div>

                        <div className="product-card">
                          <div className="product-info">
                            <Image
                              src="/img/cartPro.png"
                              alt="orderImage"
                              width={110}
                              height={110}
                              className="product-image"
                            />

                            <div className="product-text">
                              <span className="product-name">
                                Product Name is here
                              </span>
                              <div className="product-specs">
                                <span>Size: L</span>
                                <span>Quantity: 1</span>
                              </div>
                            </div>
                          </div>
                          <div className="product-actions">
                            <Link
                              href="/product/id"
                              className="see-product-link"
                            >
                              see product
                            </Link>
                            <span className="product-price">37 azn</span>
                          </div>
                        </div>
                        <div className="product-cardLine"></div>

                        <div className="product-card">
                          <div className="product-info">
                            <Image
                              src="/img/cartPro.png"
                              alt="orderImage"
                              width={110}
                              height={110}
                              className="product-image"
                            />

                            <div className="product-text">
                              <span className="product-name">
                                Product Name is here
                              </span>
                              <div className="product-specs">
                                <span>Size: L</span>
                                <span>Quantity: 1</span>
                              </div>
                            </div>
                          </div>
                          <div className="product-actions">
                            <Link
                              href="/product/id"
                              className="see-product-link"
                            >
                              see product
                            </Link>
                            <span className="product-price">37 azn</span>
                          </div>
                        </div>
                        <div className="product-cardLine"></div>
                        <div className="product-card">
                          <div className="product-info">
                            <Image
                              src="/img/cartPro.png"
                              alt="orderImage"
                              width={110}
                              height={110}
                              className="product-image"
                            />

                            <div className="product-text">
                              <span className="product-name">
                                Product Name is here
                              </span>
                              <div className="product-specs">
                                <span>Size: L</span>
                                <span>Quantity: 1</span>
                              </div>
                            </div>
                          </div>
                          <div className="product-actions">
                            <Link
                              href="/product/id"
                              className="see-product-link"
                            >
                              see product
                            </Link>
                            <span className="product-price">37 azn</span>
                          </div>
                        </div>
                        <div className="product-cardLine"></div>
                      </div>

                      {/* SUMMARY */}
                      <div className="order-summary">
                        <div className="order-summaryItems">
                          <p className="summary-title">Order Summary</p>
                          <div className="summary-items">
                            <div className="summary-row">
                              <span>Total item</span>
                              <span>4</span>
                            </div>
                            <div className="summary-row">
                              <span>Subtotal</span>
                              <span>148 azn</span>
                            </div>
                            <div className="summary-row">
                              <span>Delivery</span>
                              <span>1 azn</span>
                            </div>
                          </div>

                          <div className="summary-total">
                            <span>Total :</span>
                            <span>149 azn</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
