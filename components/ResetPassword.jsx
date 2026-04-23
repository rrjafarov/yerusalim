"use client"
import React, { useState } from "react";
import Link from "next/link";

const ForgotPassword = ({ t }) => {
  const [isResetStep, setIsResetStep] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (!isResetStep) {
      setIsResetStep(true);
    }
  };

  return (
    <div className="forgotPassword">
      <div className="container">
        {!isResetStep ? (
          <>
            <h1>{t?.recoverPass}</h1>
            <p>{t?.forgotPassSubTitle}:</p>
            <div className="forgotPasswordForm">
              <form>
                {/* 🔹 1-ci addım: Email */}
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

                {/* 🔹 2-ci addım: New password — hazırda istifadə edilmir, saxlanılır
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
                */}

                <button
                  type="button"
                  className="forgotPasswordSubmitBtn"
                  onClick={handleButtonClick}
                >
                  {t?.recoverPass}
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
          </>
        ) : (
          /* 🔹 Mail göndərildikdən sonra göstərilən mesaj */ 
          <div className="recoveryMailSent">
            <h1>{t?.recoveryMailSent || "RECOVERY MAIL SENT"}</h1>
            <p>
              {t?.recoveryMailSentDesc ||
                "Click the link in the email to create a new password."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;