"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ForgotPassword = ({ t }) => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({}); // 🔥 əlavə

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      setStep(3);
    }
  }, [token]);

  // 🔥 VALIDATION
  const validateEmail = (form) => {
    const newErrors = {};

    if (!form.email.value.trim()) {
      newErrors.email = t?.formValidationEmail;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearError = (field) => {
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    const form = e.target.closest("form");

    if (step === 1) {
      if (!validateEmail(form)) return; // 🔥 CHECK
      setStep(2);
    } else if (step === 3) {
      // reset password logic
    }
  };

  return (
    <div className="forgotPassword">
      <div className="container">

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h1>{t?.recoverPass}</h1>
            <p>{t?.forgotPassSubTitle}:</p>

            <div className="forgotPasswordForm">
              <form>
                <div className="forgotPasswordFormGroup">

                  {/* 🔥 ERROR MESSAGE */}
                  {errors.email && (
                    <div className="validationMessage">
                      {errors.email}
                    </div>
                  )}

                  <div className={`floatingInput ${errors.email ? "inputError" : ""}`}>
                    <input
                      type="email"
                      id="forgotEmail"
                      name="email"
                      placeholder=" "
                      onFocus={() => clearError("email")} // 🔥 clear
                    />
                    <label htmlFor="forgotEmail">{t?.email}</label>
                  </div>
                </div>

                <button
                  type="button"
                  className="forgotPasswordSubmitBtn"
                  onClick={handleButtonClick}
                >
                  {t?.recoverPass}
                </button>

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
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="recoveryMailSent">
            <h1>{t?.recoveryMailSent || "RECOVERY MAIL SENT"}</h1>
            <p>
              {t?.recoveryMailSentDesc ||
                "Click the link in the email to create a new password."}
            </p>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h1>{t?.setnewpass}</h1>
            <p>{t?.forgotPassSubTitle}:</p>

            <div className="forgotPasswordForm">
              <form>
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

                <button
                  type="button"
                  className="forgotPasswordSubmitBtn"
                  onClick={handleButtonClick}
                >
                  {t?.save}
                </button>

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
        )}

      </div>
    </div>
  );
};

export default ForgotPassword;
