// "use client"
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";

// const ForgotPassword = ({ t }) => {
//   const [step, setStep] = useState(1);
//   const [errors, setErrors] = useState({}); // 🔥 əlavə

//   const searchParams = useSearchParams();
//   const token = searchParams.get("token");

//   useEffect(() => {
//     if (token) {
//       setStep(3);
//     }
//   }, [token]);

//   // 🔥 VALIDATION
//   const validateEmail = (form) => {
//     const newErrors = {};

//     if (!form.email.value.trim()) {
//       newErrors.email = t?.formValidationEmail;
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const clearError = (field) => {
//     setErrors((prev) => {
//       const copy = { ...prev };
//       delete copy[field];
//       return copy;
//     });
//   };

//   const handleButtonClick = (e) => {
//     e.preventDefault();

//     const form = e.target.closest("form");

//     if (step === 1) {
//       if (!validateEmail(form)) return; // 🔥 CHECK
//       setStep(2);
//     } else if (step === 3) {
//       // reset password logic
//     }
//   };

//   return (
//     <div className="forgotPassword">
//       <div className="container">

//         {/* STEP 1 */}
//         {step === 1 && (
//           <>
//             <h1>{t?.recoverPass}</h1>
//             <p>{t?.forgotPassSubTitle}:</p>

//             <div className="forgotPasswordForm">
//               <form>
//                 <div className="forgotPasswordFormGroup">

//                   {/* 🔥 ERROR MESSAGE */}
//                   {errors.email && (
//                     <div className="validationMessage">
//                       {errors.email}
//                     </div>
//                   )}

//                   <div className={`floatingInput ${errors.email ? "inputError" : ""}`}>
//                     <input
//                       type="email"
//                       id="forgotEmail"
//                       name="email"
//                       placeholder=" "
//                       onFocus={() => clearError("email")} // 🔥 clear
//                     />
//                     <label htmlFor="forgotEmail">{t?.email}</label>
//                   </div>
//                 </div>

//                 <button
//                   type="button"
//                   className="forgotPasswordSubmitBtn"
//                   onClick={handleButtonClick}
//                 >
//                   {t?.recoverPass}
//                 </button>

//                 <div className="forgotPasswordBottom">
//                   <p>
//                     {t?.rememberPass}{" "}
//                     <Link href="/login" className="forgotPasswordBackLink">
//                       {t?.login}
//                     </Link>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </>
//         )}

//         {/* STEP 2 */}
//         {step === 2 && (
//           <div className="recoveryMailSent">
//             <h1>{t?.recoveryMailSent || "RECOVERY MAIL SENT"}</h1>
//             <p>
//               {t?.recoveryMailSentDesc ||
//                 "Click the link in the email to create a new password."}
//             </p>
//           </div>
//         )}

//         {/* STEP 3 */}
//         {step === 3 && (
//           <>
//             <h1>{t?.setnewpass}</h1>
//             <p>{t?.forgotPassSubTitle}:</p>

//             <div className="forgotPasswordForm">
//               <form>
//                 <div className="forgotPasswordFormGroup">
//                   <div className="floatingInput">
//                     <input
//                       type="password"
//                       id="newPassword"
//                       name="newPassword"
//                       placeholder=" "
//                       required
//                     />
//                     <label htmlFor="newPassword">{t?.newPassword}</label>
//                   </div>
//                 </div>

//                 <div className="forgotPasswordFormGroup">
//                   <div className="floatingInput">
//                     <input
//                       type="password"
//                       id="retypePassword"
//                       name="retypePassword"
//                       placeholder=" "
//                       required
//                     />
//                     <label htmlFor="retypePassword">{t?.retypePassword}</label>
//                   </div>
//                 </div>

//                 <button
//                   type="button"
//                   className="forgotPasswordSubmitBtn"
//                   onClick={handleButtonClick}
//                 >
//                   {t?.save}
//                 </button>

//                 <div className="forgotPasswordBottom">
//                   <p>
//                     {t?.rememberPass}{" "}
//                     <Link href="/login" className="forgotPasswordBackLink">
//                       {t?.login}
//                     </Link>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </>
//         )}

//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;











// ! succes forgot










"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import SuccessPopup from "@/components/Login/SuccessPopup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ForgotPassword = ({ t }) => {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [sentEmail, setSentEmail] = useState("");

  // ── STEP 1 STATE ──────────────────────────────────────────────
  const [step1Loading, setStep1Loading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  // ── STEP 2 STATE ──────────────────────────────────────────────
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [step2Errors, setStep2Errors] = useState({});
  const [step2ServerError, setStep2ServerError] = useState("");
  const [step2Loading, setStep2Loading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // ── STEP 1 VALIDATION ─────────────────────────────────────────
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
    setServerError("");
  };

  // ── STEP 1 SUBMIT ─────────────────────────────────────────────
  const handleStep1Submit = async (e) => {
    e.preventDefault();
    const form = e.target.closest("form");

    if (!validateEmail(form)) return;

    setStep1Loading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/forgot-password-with-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email.value }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setSentEmail(form.email.value);
        setStep(2);
      } else {
        setServerError(data.message || "Something went wrong!");
      }
    } catch {
      setServerError("Something went wrong!");
    } finally {
      setStep1Loading(false);
    }
  };

  // ── STEP 2 VALIDATION ─────────────────────────────────────────
  const validateStep2 = () => {
    const newErrors = {};

    if (!otp.trim()) {
      newErrors.otp = t?.formValidationOtp;
    }

    if (!newPassword.trim()) {
      newErrors.newPassword = t?.formValidationPassword;
    }

    if (!retypePassword.trim()) {
      newErrors.retypePassword = t?.formValidationPasswordRepeat;
    }

    if (newPassword && retypePassword && newPassword !== retypePassword) {
      newErrors.retypePassword = t?.passwordNotMatch;
    }

    setStep2Errors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearStep2Error = (field) => {
    setStep2Errors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
    setStep2ServerError("");
  };

  // ── STEP 2 SUBMIT ─────────────────────────────────────────────
  const handleStep2Submit = async () => {
    if (!validateStep2()) return;

    setStep2Loading(true);
    setStep2ServerError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password-with-email-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: sentEmail,
            otp_code: otp,
            password: newPassword,
            password_confirmation: retypePassword,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          router.push("/login");
        }, 1500);
      } else {
        setStep2ServerError(t?.invalidOtp || data.message || "Something went wrong!");
      }
    } catch {
      setStep2ServerError("Something went wrong!");
    } finally {
      setStep2Loading(false);
    }
  };

  return (
    <div className="forgotPassword">
      <div className="container">

        {/* ── STEP 1: Email göndər ── */}
        {step === 1 && (
          <>
            <h1>{t?.recoverPass}</h1>
            <p>{t?.forgotPassSubTitle}:</p>

            <div className="forgotPasswordForm">
              <form>
                <div className="forgotPasswordFormGroup">
                  {errors.email && (
                    <div className="validationMessage">{errors.email}</div>
                  )}
                  <div className={`floatingInput ${errors.email ? "inputError" : ""}`}>
                    <input
                      type="email"
                      id="forgotEmail"
                      name="email"
                      placeholder=" "
                      onFocus={() => clearError("email")}
                    />
                    <label htmlFor="forgotEmail">{t?.email}</label>
                  </div>
                </div>

                {serverError && (
                  <p
                    style={{
                      color: "#ec1f27",
                      marginBottom: "2.2rem",
                      fontSize: "1.5rem",
                      padding: "0",
                    }}
                  >
                    {serverError}
                  </p>
                )}

                <button
                  type="button"
                  className="forgotPasswordSubmitBtn"
                  onClick={handleStep1Submit}
                  style={{
                    backgroundColor: step1Loading ? "transparent" : undefined,
                    border: step1Loading ? "1px solid #e0d5e2" : undefined,
                    pointerEvents: step1Loading ? "none" : undefined,
                  }}
                >
                  {step1Loading ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Loading />
                    </div>
                  ) : (
                    t?.recoverPass
                  )}
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

        {/* ── STEP 2: OTP + Yeni şifrə ── */}
        {step === 2 && (
          <>
            <h1>{t?.setnewpass}</h1>
            <p>{t?.forgotPassSubTitle}:</p>

            <div className="forgotPasswordForm">
              <form onSubmit={(e) => e.preventDefault()}>

                {/* Email — readonly */}
                <div className="forgotPasswordFormGroup">
                  <div className="floatingInput floating">
                    <input
                      type="email"
                      value={sentEmail}
                      readOnly
                      placeholder=" "
                      style={{ cursor: "not-allowed", opacity: 0.7 }}
                    />
                    <label>{t?.email}</label>
                  </div>
                </div>

                {/* OTP */}
                <div className="forgotPasswordFormGroup">
                  {step2Errors.otp && (
                    <div className="validationMessage">{step2Errors.otp}</div>
                  )}
                  <div className={`floatingInput ${step2Errors.otp ? "inputError" : ""}`}>
                    <input
                      type="text"
                      placeholder=" "
                      value={otp}
                      onChange={(e) => {
                        setOtp(e.target.value);
                        clearStep2Error("otp");
                      }}
                      maxLength={6}
                    />
                    <label>{t?.otpCode}</label>
                  </div>
                </div>

                {/* Yeni şifrə */}
                <div className="forgotPasswordFormGroup">
                  {step2Errors.newPassword && (
                    <div className="validationMessage">{step2Errors.newPassword}</div>
                  )}
                  <div
                    className={`floatingInput floatingInputPassword ${
                      step2Errors.newPassword ? "inputError" : ""
                    }`}
                  >
                    <input
                      type={showNewPassword ? "text" : "password"}
                      placeholder=" "
                      value={newPassword}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                        clearStep2Error("newPassword");
                      }}
                    />
                    <label>{t?.newPassword}</label>
                    <span
                      className="passwordToggleIcon"
                      onClick={() => setShowNewPassword((p) => !p)}
                    >
                      {showNewPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                  </div>
                </div>

                {/* Təkrar şifrə */}
                <div className="forgotPasswordFormGroup">
                  {step2Errors.retypePassword && (
                    <div className="validationMessage">{step2Errors.retypePassword}</div>
                  )}
                  <div
                    className={`floatingInput floatingInputPassword ${
                      step2Errors.retypePassword ? "inputError" : ""
                    }`}
                  >
                    <input
                      type={showRetypePassword ? "text" : "password"}
                      placeholder=" "
                      value={retypePassword}
                      onChange={(e) => {
                        setRetypePassword(e.target.value);
                        clearStep2Error("retypePassword");
                      }}
                    />
                    <label>{t?.retypePassword}</label>
                    <span
                      className="passwordToggleIcon"
                      onClick={() => setShowRetypePassword((p) => !p)}
                    >
                      {showRetypePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                  </div>
                </div>

                {step2ServerError && (
                  <p
                    style={{
                      color: "#ec1f27",
                      marginBottom: "2.2rem",
                      fontSize: "1.5rem",
                      padding: "0",
                    }}
                  >
                    {step2ServerError}
                  </p>
                )}

                <button
                  type="button"
                  className="forgotPasswordSubmitBtn"
                  onClick={handleStep2Submit}
                  style={{
                    backgroundColor: step2Loading ? "transparent" : undefined,
                    border: step2Loading ? "1px solid #e0d5e2" : undefined,
                    pointerEvents: step2Loading ? "none" : undefined,
                  }}
                >
                  {step2Loading ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Loading />
                    </div>
                  ) : (
                    t?.save
                  )}
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

      {showSuccess && <SuccessPopup message={t?.forgotPassSuccess} />}
    </div>
  );
};

export default ForgotPassword;