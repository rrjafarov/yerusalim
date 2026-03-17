
// import React from "react";
// import Link from "next/link";

// const ForgotPassword = () => {
//   return (
//     <div className="forgotPassword">
//       <div className="container">
//         <h1>Recover Password</h1>
//         <p>Enter your email to recover your password:</p>

//         <div className="forgotPasswordForm">
//           <form>
//             {/* E-mail */}
//             <div className="forgotPasswordFormGroup">
//               <div className="floatingInput">
//                 <input
//                   type="email"
//                   id="forgotEmail"
//                   name="email"
//                   placeholder=" "
//                   required
//                 />
//                 <label htmlFor="forgotEmail">E-mail</label>
//               </div>
//             </div>

//             {/* Button */}
//             <button type="submit" className="forgotPasswordSubmitBtn">
//               RECOVER
//             </button>

//             {/* Bottom text */}
//             <div className="forgotPasswordBottom">
//               <p>
//                 Remember your password?{" "}
//                 <Link href="/login" className="forgotPasswordBackLink">
//                   Back to login
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;



















"use client"

import React, { useState } from "react";
import Link from "next/link";

const ForgotPassword = ({t}) => {
  const [isResetStep, setIsResetStep] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (!isResetStep) {
      setIsResetStep(true);
    } else {
    }
  };

  return (
    <div className="forgotPassword">
      <div className="container">
        <h1>{isResetStep ? t?.setnewpass : t?.recoverPass}</h1>
        <p>{t?.forgotPassSubTitle}:</p>

        <div className="forgotPasswordForm">
          <form>
            {/* Step 1: Email, Step 2: New password fields */}
            {!isResetStep ? (
              // 🔹 1-ci addım: Email
              <div className="forgotPasswordFormGroup">
                <div className="floatingInput">
                  <input
                    type="email"
                    id="forgotEmail"
                    name="email"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="forgotEmail">{t?.email}</label>
                </div>
              </div>
            ) : (
              <>
                {/* 🔹 2-ci addım: New password */}
                <div className="forgotPasswordFormGroup">
                  <div className="floatingInput">
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="newPassword">{t?.newPassword}</label>
                  </div>
                </div>

                {/* Retype password */}
                <div className="forgotPasswordFormGroup">
                  <div className="floatingInput">
                    <input
                      type="password"
                      id="retypePassword"
                      name="retypePassword"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="retypePassword">{t?.retypePassword}</label>
                  </div>
                </div>
              </>
            )}

            <button
              type="button"
              className="forgotPasswordSubmitBtn"
              onClick={handleButtonClick}
            >
              {isResetStep ? t?.save : t?.recoverPass}
            </button>

            {/* Bottom text */}
            <div className="forgotPasswordBottom">
              <p>
                {t?.rememberPass}{" "}
                <Link href="/login" className="forgotPasswordBackLink">
                  {t?.login}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
