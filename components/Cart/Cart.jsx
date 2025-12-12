// import React from "react";
// import GuestUserForm from "./GuestUserForm";
// import Address from "../Account/Address";
// import Image from "next/image";

// const Cart = () => {
//   return (
//     <div className="cartPage">
//       <div className="container">
//         <div className="row">
//           <div className="xl-8 lg-8 md-8 sm-12">
//             <div className="cartPageLeftItems">
//               <div className="cartPageLeftItemsSearch">
//                 <span>Basket</span>
//                 <p>
//                   Please fill and choose all optional forms and infos for buying
//                   products
//                 </p>

//                 {/* Input + X icon wrapper */}
//                 <div className="cartPageLeftItemsSearchInput">
//                   <input
//                     type="text"
//                     name=""
//                     id=""
//                     placeholder="Here is a message about payment delivery bla bla bla"
//                   />
//                   <button
//                     type="button"
//                     className="cartPageLeftItemsSearchClear"
//                     aria-label="Clear"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 20 20"
//                       fill="none"
//                     >
//                       <g opacity="0.7">
//                         <path
//                           d="M14.5576 4.55713C14.8015 4.3132 15.1983 4.31349 15.4424 4.55713C15.6865 4.80121 15.6865 5.19782 15.4424 5.44189L10.8848 9.99951L15.4424 14.5571C15.6865 14.8012 15.6865 15.1978 15.4424 15.4419C15.1983 15.686 14.8017 15.686 14.5576 15.4419L10 10.8843L5.44238 15.4419C5.19831 15.686 4.80169 15.686 4.55762 15.4419C4.31398 15.1978 4.31369 14.8011 4.55762 14.5571L9.11523 9.99951L4.55762 5.44189C4.31398 5.19778 4.31369 4.80106 4.55762 4.55713C4.80155 4.3132 5.19827 4.31349 5.44238 4.55713L10 9.11475L14.5576 4.55713Z"
//                           fill="#1C1C1C"
//                         />
//                       </g>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//               <div className="guesUserFormSection">
//                 <GuestUserForm />
//               </div>

//               <div className="cartPageLeftItemsProducts">
//                 <div className="cartPageLeftItemsProductsLeft">
//                   <div className="cartPageLeftItemsProductsLeftImg">
//                     <Image
//                       src="/img/cartPro.png"
//                       alt="product"
//                       width={110}
//                       height={110}
//                     />
//                   </div>
//                   <div className="cartPageLeftItemsProductsLeftTitle">
//                     <span>Product Name is here </span>
//                     <p>
//                       Size: <span>L</span>
//                     </p>

//                     <div className="cartPageLeftItemsProductsLeftTitleCountUp">

//                     </div>
//                   </div>
//                 </div>
//                 <div className="cartPageLeftItemsProductsRight">e</div>
//               </div>

//               <div className="getUserAddressSection">
//                 <Address />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

"use client";

import React, { useState } from "react";
import GuestUserForm from "./GuestUserForm";
import Address from "../Account/Address";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const [quantity, setQuantity] = useState(2);

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // 1-dən aşağı düşməsin
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="cartPage">
      <div className="container">
        <div className="row">
          <div className="xl-8 lg-8 md-8 sm-12">
            <div className="cartPageLeftItems">
              <div className="cartPageLeftItemsSearch">
                <span>Basket</span>
                <p>
                  Please fill and choose all optional forms and infos for buying
                  products
                </p>

                {/* Input + X icon wrapper */}
                <div className="cartPageLeftItemsSearchInput">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Here is a message about payment delivery bla bla bla"
                  />
                  <button
                    type="button"
                    className="cartPageLeftItemsSearchClear"
                    aria-label="Clear"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g opacity="0.7">
                        <path
                          d="M14.5576 4.55713C14.8015 4.3132 15.1983 4.31349 15.4424 4.55713C15.6865 4.80121 15.6865 5.19782 15.4424 5.44189L10.8848 9.99951L15.4424 14.5571C15.6865 14.8012 15.6865 15.1978 15.4424 15.4419C15.1983 15.686 14.8017 15.686 14.5576 15.4419L10 10.8843L5.44238 15.4419C5.19831 15.686 4.80169 15.686 4.55762 15.4419C4.31398 15.1978 4.31369 14.8011 4.55762 14.5571L9.11523 9.99951L4.55762 5.44189C4.31398 5.19778 4.31369 4.80106 4.55762 4.55713C4.80155 4.3132 5.19827 4.31349 5.44238 4.55713L10 9.11475L14.5576 4.55713Z"
                          fill="#1C1C1C"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="guesUserFormSection">
                <GuestUserForm />
              </div>

              <div className="basketProducts">
                <div className="cartPageLeftItemsProducts">
                  <div className="cartPageLeftItemsProductsLeft">
                    <div className="cartPageLeftItemsProductsLeftImg">
                      <Image
                        src="/img/cartPro.png"
                        alt="product"
                        width={110}
                        height={110}
                      />
                    </div>
                    <div className="cartPageLeftItemsProductsLeftTitle">
                      <span>Product Name is here </span>
                      <p>
                        Size: <span>L</span>
                      </p>

                      <div className="cartPageLeftItemsProductsLeftTitleCountUp">
                        <button type="button" onClick={handleDecrement}>
                          -
                        </button>
                        <span>{quantity}</span>
                        <button type="button" onClick={handleIncrement}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="cartPageLeftItemsProductsRight">
                    <div className="cartPageLeftItemsProductsRightPriceSector">
                      <Link href="#">
                        <span>show product</span>
                      </Link>
                      <div className="cartPageLeftItemsProductsRightOldPrice">
                        <span>56.50</span>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                          >
                            <path
                              d="M6.76132 3.1642V2.6023C6.76132 2.46432 6.7065 2.33199 6.60893 2.23442C6.51136 2.13685 6.37903 2.08203 6.24104 2.08203C6.10306 2.08203 5.97073 2.13685 5.87316 2.23442C5.77559 2.33199 5.72077 2.46432 5.72077 2.6023V3.1642C3.38475 3.50758 1.55859 6.15576 1.55859 9.36584C1.55859 9.50383 1.61341 9.63616 1.71098 9.73373C1.80855 9.8313 1.94088 9.88612 2.07887 9.88612C2.21685 9.88612 2.34918 9.8313 2.44675 9.73373C2.54432 9.63616 2.59914 9.50383 2.59914 9.36584C2.59914 6.76448 3.95705 4.58454 5.72077 4.22035V8.3253C5.72077 8.46328 5.77559 8.59562 5.87316 8.69319C5.97073 8.79076 6.10306 8.84557 6.24104 8.84557C6.37903 8.84557 6.51136 8.79076 6.60893 8.69319C6.7065 8.59562 6.76132 8.46328 6.76132 8.3253V4.22035C8.52504 4.58454 9.88295 6.74887 9.88295 9.36584C9.88295 9.50383 9.93776 9.63616 10.0353 9.73373C10.1329 9.8313 10.2652 9.88612 10.4032 9.88612C10.5412 9.88612 10.6735 9.8313 10.7711 9.73373C10.8687 9.63616 10.9235 9.50383 10.9235 9.36584C10.9235 6.15576 9.09734 3.50758 6.76132 3.1642Z"
                              fill="black"
                            />
                          </svg>
                        </p>
                      </div>
                      <div className="cartPageLeftItemsProductsRightNewPrice">
                        <div className="cartPageLeftItemsProductsRightDiscount">
                          <span>- 20% Discount</span>
                        </div>
                        <span>24.50</span>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12.9961 6.08195V5.00195C12.9961 4.73674 12.8907 4.48238 12.7032 4.29485C12.5157 4.10731 12.2613 4.00195 11.9961 4.00195C11.7309 4.00195 11.4765 4.10731 11.289 4.29485C11.1014 4.48238 10.9961 4.73674 10.9961 5.00195V6.08195C6.50609 6.74195 2.99609 11.832 2.99609 18.002C2.99609 18.2672 3.10145 18.5215 3.28899 18.7091C3.47652 18.8966 3.73088 19.002 3.99609 19.002C4.26131 19.002 4.51566 18.8966 4.7032 18.7091C4.89074 18.5215 4.99609 18.2672 4.99609 18.002C4.99609 13.002 7.60609 8.81195 10.9961 8.11195V16.002C10.9961 16.2672 11.1014 16.5215 11.289 16.7091C11.4765 16.8966 11.7309 17.002 11.9961 17.002C12.2613 17.002 12.5157 16.8966 12.7032 16.7091C12.8907 16.5215 12.9961 16.2672 12.9961 16.002V8.11195C16.3861 8.81195 18.9961 12.972 18.9961 18.002C18.9961 18.2672 19.1014 18.5215 19.289 18.7091C19.4765 18.8966 19.7309 19.002 19.9961 19.002C20.2613 19.002 20.5157 18.8966 20.7032 18.7091C20.8907 18.5215 20.9961 18.2672 20.9961 18.002C20.9961 11.832 17.4861 6.74195 12.9961 6.08195Z"
                              fill="black"
                            />
                          </svg>
                        </p>
                      </div>
                    </div>
                    <div className="cartPageLeftItemsProductsRightDelete">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <g opacity="0.5">
                          <path
                            d="M12.3086 2C12.6391 2 12.95 1.99876 13.209 2.02832C13.4871 2.06008 13.7798 2.13336 14.0527 2.33008C14.3256 2.52679 14.4874 2.78134 14.6055 3.03516C14.7154 3.2715 14.8125 3.56724 14.917 3.88086L15.207 4.75H19.25C19.6642 4.75 20 5.08579 20 5.5C20 5.91421 19.6642 6.25 19.25 6.25H18.1182L17.6143 13.8125C17.5308 15.065 17.4643 16.0744 17.3105 16.8672C17.1529 17.6797 16.8867 18.3626 16.3369 18.9092C16.2831 18.9627 16.2279 19.0153 16.1709 19.0654C15.5891 19.5774 14.8902 19.7971 14.0693 19.9004C13.2679 20.0011 12.2556 20 11 20C9.74437 20 8.73211 20.0011 7.93066 19.9004C7.10976 19.7971 6.41092 19.5774 5.8291 19.0654C5.77214 19.0153 5.71691 18.9627 5.66309 18.9092C5.11327 18.3626 4.84708 17.6797 4.68945 16.8672C4.53568 16.0744 4.46924 15.065 4.38574 13.8125L3.88184 6.25H2.75C2.33579 6.25 2 5.91421 2 5.5C2 5.08579 2.33579 4.75 2.75 4.75H6.79297L7.08301 3.88086C7.18755 3.56724 7.28458 3.2715 7.39453 3.03516C7.51261 2.78134 7.67437 2.52679 7.94727 2.33008C8.22019 2.13336 8.51286 2.06008 8.79102 2.02832C9.04998 1.99876 9.36086 2 9.69141 2H12.3086ZM5.88281 13.7119C5.96894 15.0038 6.03039 15.9031 6.16211 16.582C6.29003 17.2413 6.46762 17.5941 6.7207 17.8457C6.75293 17.8777 6.7862 17.9094 6.82031 17.9395C7.08819 18.1751 7.45204 18.3284 8.11816 18.4121C8.80437 18.4984 9.70526 18.5 11 18.5C12.2947 18.5 13.1956 18.4984 13.8818 18.4121C14.548 18.3284 14.9118 18.1751 15.1797 17.9395C15.2138 17.9094 15.2471 17.8777 15.2793 17.8457C15.5324 17.5941 15.71 17.2413 15.8379 16.582C15.9696 15.9031 16.0311 15.0038 16.1172 13.7119L16.6143 6.25H5.38574L5.88281 13.7119ZM9.69141 3.5C9.32634 3.5 9.11526 3.50094 8.96094 3.51855C8.89144 3.5265 8.85514 3.53629 8.83789 3.54199C8.83005 3.54459 8.82596 3.54649 8.8252 3.54688H8.82422L8.82324 3.54785C8.82245 3.54865 8.82021 3.55219 8.81543 3.55859C8.80454 3.57321 8.78437 3.60458 8.75488 3.66797C8.68938 3.80878 8.62127 4.00826 8.50586 4.35449L8.37402 4.75H13.626L13.4941 4.35449C13.3787 4.00826 13.3106 3.80878 13.2451 3.66797C13.2156 3.60458 13.1955 3.57321 13.1846 3.55859C13.1798 3.55219 13.1776 3.54865 13.1768 3.54785L13.1758 3.54688H13.1748C13.174 3.54649 13.1699 3.54459 13.1621 3.54199C13.1449 3.53629 13.1086 3.5265 13.0391 3.51855C12.8847 3.50094 12.6737 3.5 12.3086 3.5H9.69141Z"
                            fill="#22282F"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="cartPageLeftItemsProductsLine"></div>
                <div className="cartPageLeftItemsProducts">
                  <div className="cartPageLeftItemsProductsLeft">
                    <div className="cartPageLeftItemsProductsLeftImg">
                      <Image
                        src="/img/cartPro.png"
                        alt="product"
                        width={110}
                        height={110}
                      />
                    </div>
                    <div className="cartPageLeftItemsProductsLeftTitle">
                      <span>Product Name is here </span>
                      <p>
                        Size: <span>L</span>
                      </p>

                      <div className="cartPageLeftItemsProductsLeftTitleCountUp">
                        <button type="button" onClick={handleDecrement}>
                          -
                        </button>
                        <span>{quantity}</span>
                        <button type="button" onClick={handleIncrement}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="cartPageLeftItemsProductsRight">
                    <div className="cartPageLeftItemsProductsRightPriceSector">
                      <Link href="#">
                        <span>show product</span>
                      </Link>
                      <div className="cartPageLeftItemsProductsRightOldPrice">
                        <span>56.50</span>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                          >
                            <path
                              d="M6.76132 3.1642V2.6023C6.76132 2.46432 6.7065 2.33199 6.60893 2.23442C6.51136 2.13685 6.37903 2.08203 6.24104 2.08203C6.10306 2.08203 5.97073 2.13685 5.87316 2.23442C5.77559 2.33199 5.72077 2.46432 5.72077 2.6023V3.1642C3.38475 3.50758 1.55859 6.15576 1.55859 9.36584C1.55859 9.50383 1.61341 9.63616 1.71098 9.73373C1.80855 9.8313 1.94088 9.88612 2.07887 9.88612C2.21685 9.88612 2.34918 9.8313 2.44675 9.73373C2.54432 9.63616 2.59914 9.50383 2.59914 9.36584C2.59914 6.76448 3.95705 4.58454 5.72077 4.22035V8.3253C5.72077 8.46328 5.77559 8.59562 5.87316 8.69319C5.97073 8.79076 6.10306 8.84557 6.24104 8.84557C6.37903 8.84557 6.51136 8.79076 6.60893 8.69319C6.7065 8.59562 6.76132 8.46328 6.76132 8.3253V4.22035C8.52504 4.58454 9.88295 6.74887 9.88295 9.36584C9.88295 9.50383 9.93776 9.63616 10.0353 9.73373C10.1329 9.8313 10.2652 9.88612 10.4032 9.88612C10.5412 9.88612 10.6735 9.8313 10.7711 9.73373C10.8687 9.63616 10.9235 9.50383 10.9235 9.36584C10.9235 6.15576 9.09734 3.50758 6.76132 3.1642Z"
                              fill="black"
                            />
                          </svg>
                        </p>
                      </div>
                      <div className="cartPageLeftItemsProductsRightNewPrice">
                        <div className="cartPageLeftItemsProductsRightDiscount">
                          <span>- 20% Discount</span>
                        </div>
                        <span>24.50</span>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12.9961 6.08195V5.00195C12.9961 4.73674 12.8907 4.48238 12.7032 4.29485C12.5157 4.10731 12.2613 4.00195 11.9961 4.00195C11.7309 4.00195 11.4765 4.10731 11.289 4.29485C11.1014 4.48238 10.9961 4.73674 10.9961 5.00195V6.08195C6.50609 6.74195 2.99609 11.832 2.99609 18.002C2.99609 18.2672 3.10145 18.5215 3.28899 18.7091C3.47652 18.8966 3.73088 19.002 3.99609 19.002C4.26131 19.002 4.51566 18.8966 4.7032 18.7091C4.89074 18.5215 4.99609 18.2672 4.99609 18.002C4.99609 13.002 7.60609 8.81195 10.9961 8.11195V16.002C10.9961 16.2672 11.1014 16.5215 11.289 16.7091C11.4765 16.8966 11.7309 17.002 11.9961 17.002C12.2613 17.002 12.5157 16.8966 12.7032 16.7091C12.8907 16.5215 12.9961 16.2672 12.9961 16.002V8.11195C16.3861 8.81195 18.9961 12.972 18.9961 18.002C18.9961 18.2672 19.1014 18.5215 19.289 18.7091C19.4765 18.8966 19.7309 19.002 19.9961 19.002C20.2613 19.002 20.5157 18.8966 20.7032 18.7091C20.8907 18.5215 20.9961 18.2672 20.9961 18.002C20.9961 11.832 17.4861 6.74195 12.9961 6.08195Z"
                              fill="black"
                            />
                          </svg>
                        </p>
                      </div>
                    </div>
                    <div className="cartPageLeftItemsProductsRightDelete">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <g opacity="0.5">
                          <path
                            d="M12.3086 2C12.6391 2 12.95 1.99876 13.209 2.02832C13.4871 2.06008 13.7798 2.13336 14.0527 2.33008C14.3256 2.52679 14.4874 2.78134 14.6055 3.03516C14.7154 3.2715 14.8125 3.56724 14.917 3.88086L15.207 4.75H19.25C19.6642 4.75 20 5.08579 20 5.5C20 5.91421 19.6642 6.25 19.25 6.25H18.1182L17.6143 13.8125C17.5308 15.065 17.4643 16.0744 17.3105 16.8672C17.1529 17.6797 16.8867 18.3626 16.3369 18.9092C16.2831 18.9627 16.2279 19.0153 16.1709 19.0654C15.5891 19.5774 14.8902 19.7971 14.0693 19.9004C13.2679 20.0011 12.2556 20 11 20C9.74437 20 8.73211 20.0011 7.93066 19.9004C7.10976 19.7971 6.41092 19.5774 5.8291 19.0654C5.77214 19.0153 5.71691 18.9627 5.66309 18.9092C5.11327 18.3626 4.84708 17.6797 4.68945 16.8672C4.53568 16.0744 4.46924 15.065 4.38574 13.8125L3.88184 6.25H2.75C2.33579 6.25 2 5.91421 2 5.5C2 5.08579 2.33579 4.75 2.75 4.75H6.79297L7.08301 3.88086C7.18755 3.56724 7.28458 3.2715 7.39453 3.03516C7.51261 2.78134 7.67437 2.52679 7.94727 2.33008C8.22019 2.13336 8.51286 2.06008 8.79102 2.02832C9.04998 1.99876 9.36086 2 9.69141 2H12.3086ZM5.88281 13.7119C5.96894 15.0038 6.03039 15.9031 6.16211 16.582C6.29003 17.2413 6.46762 17.5941 6.7207 17.8457C6.75293 17.8777 6.7862 17.9094 6.82031 17.9395C7.08819 18.1751 7.45204 18.3284 8.11816 18.4121C8.80437 18.4984 9.70526 18.5 11 18.5C12.2947 18.5 13.1956 18.4984 13.8818 18.4121C14.548 18.3284 14.9118 18.1751 15.1797 17.9395C15.2138 17.9094 15.2471 17.8777 15.2793 17.8457C15.5324 17.5941 15.71 17.2413 15.8379 16.582C15.9696 15.9031 16.0311 15.0038 16.1172 13.7119L16.6143 6.25H5.38574L5.88281 13.7119ZM9.69141 3.5C9.32634 3.5 9.11526 3.50094 8.96094 3.51855C8.89144 3.5265 8.85514 3.53629 8.83789 3.54199C8.83005 3.54459 8.82596 3.54649 8.8252 3.54688H8.82422L8.82324 3.54785C8.82245 3.54865 8.82021 3.55219 8.81543 3.55859C8.80454 3.57321 8.78437 3.60458 8.75488 3.66797C8.68938 3.80878 8.62127 4.00826 8.50586 4.35449L8.37402 4.75H13.626L13.4941 4.35449C13.3787 4.00826 13.3106 3.80878 13.2451 3.66797C13.2156 3.60458 13.1955 3.57321 13.1846 3.55859C13.1798 3.55219 13.1776 3.54865 13.1768 3.54785L13.1758 3.54688H13.1748C13.174 3.54649 13.1699 3.54459 13.1621 3.54199C13.1449 3.53629 13.1086 3.5265 13.0391 3.51855C12.8847 3.50094 12.6737 3.5 12.3086 3.5H9.69141Z"
                            fill="#22282F"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="getUserAddressSection">
                <Address />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
