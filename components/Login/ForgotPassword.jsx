
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

const ForgotPassword = () => {
  const [isResetStep, setIsResetStep] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (!isResetStep) {
      // Burda normalda API-yə email göndərərsən
      // Email uğurlu olarsa, növbəti addıma keçirik
      setIsResetStep(true);
    } else {
      // Burda isə yeni şifrəni yadda saxlamaq üçün API call olar
      // hələlik yalnız UI mentiqi qururuq
      console.log("Save new password");
    }
  };

  return (
    <div className="forgotPassword">
      <div className="container">
        <h1>{isResetStep ? "Set new Password" : "Recover Password"}</h1>
        <p>Enter your email to recover your password:</p>

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
                  <label htmlFor="forgotEmail">E-mail</label>
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
                    <label htmlFor="newPassword">New password</label>
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
                    <label htmlFor="retypePassword">Retype password</label>
                  </div>
                </div>
              </>
            )}

            {/* Button */}
            <button
              type="button"
              className="forgotPasswordSubmitBtn"
              onClick={handleButtonClick}
            >
              {isResetStep ? "SAVE" : "RECOVER"}
            </button>

            {/* Bottom text */}
            <div className="forgotPasswordBottom">
              <p>
                Remember your password?{" "}
                <Link href="/login" className="forgotPasswordBackLink">
                  Back to login
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
