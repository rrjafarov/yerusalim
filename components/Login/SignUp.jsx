// import React from "react";
// import Link from "next/link";

// const SignUp = () => {
//   return (
//     <div className="signup">
//       <div className="container">
//         <h1>Sign up</h1>
//         <p>Please fill in the information below:</p>

//         <div className="signupForm">
//           <form>
//             {/* Name surname */}
//             <div className="signupFormGroup">
//               <div className="floatingInput">
//                 <input
//                   type="text"
//                   id="signupName"
//                   name="name"
//                   placeholder=" "
//                   required
//                 />
//                 <label htmlFor="signupName">Name surname</label>
//               </div>
//             </div>

//             {/* E-mail */}
//             <div className="signupFormGroup">
//               <div className="floatingInput">
//                 <input
//                   type="email"
//                   id="signupEmail"
//                   name="email"
//                   placeholder=" "
//                   required
//                 />
//                 <label htmlFor="signupEmail">E-mail</label>
//               </div>
//             </div>

//             {/* Password */}
//             <div className="signupFormGroup">
//               <div className="floatingInput">
//                 <input
//                   type="password"
//                   id="signupPassword"
//                   name="password"
//                   placeholder=" "
//                   required
//                 />
//                 <label htmlFor="signupPassword">Password</label>
//               </div>
//             </div>

//             {/* Retype Password */}
//             <div className="signupFormGroup">
//               <div className="floatingInput">
//                 <input
//                   type="password"
//                   id="signupPasswordConfirm"
//                   name="passwordConfirm"
//                   placeholder=" "
//                   required
//                 />
//                 <label htmlFor="signupPasswordConfirm">Retype Password</label>
//               </div>
//             </div>

//             {/* I'm not robot */}
//             <div className="signupFormCheckbox">
//               <label>
//                 <input type="checkbox" name="notRobot" />
//                 <span>I’m not robot</span>
//               </label>
//             </div>

//             {/* Button */}
//             <button type="submit" className="signupSubmitBtn">
//               CREATE ACCOUNT
//             </button>

//             {/* Bottom text */}
//             <div className="signupFormBottom">
//               <p>
//                 Do you have an account ?{" "}
//                 <Link href="/login" className="signupBottomLink">
//                   Login now
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

// ! bismillah ya Allah <><><><><><><><><><><><><><><><><><><><><><><><><>

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import Loading from "@/components/Loading";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// const SignUp = () => {
//   const router = useRouter();

//   const [phone, setPhone] = useState(""); // Input dəyəri
//   const [phoneTouched, setPhoneTouched] = useState(false); // Kliklənib-blur olunub

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [messageType, setMessageType] = useState("");
//   const [showMessage, setShowMessage] = useState(false);

//   const [errors, setErrors] = useState({});

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const validateForm = (form) => {
//     const newErrors = {};

//     if (!form.name.value.trim()) {
//       newErrors.name = "Name boş qala bilməz";
//     }

//     if (!form.email.value.trim()) {
//       newErrors.email = "Email boş qala bilməz";
//     }
//     if (!form.phone.value.trim()) {
//       newErrors.phone = "Phone boş qala bilməz";
//     }

//     if (!form.password.value.trim()) {
//       newErrors.password = "Password boş qala bilməz";
//     }

//     if (!form.passwordConfirm.value.trim()) {
//       newErrors.passwordConfirm = "Password təkrarı boş qala bilməz";
//     }

//     if (
//       form.password.value &&
//       form.passwordConfirm.value &&
//       form.password.value !== form.passwordConfirm.value
//     ) {
//       newErrors.passwordConfirm = "Passwordlər uyğun deyil";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = e.target;

//     if (!validateForm(form)) return;

//     setLoading(true);
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     const rawPhone = form.phone.replace(/\D/g, "");

//     const formData = {
//       name: form.name.value,
//       email: form.email.value,
//       phone: rawPhone,
//       password: form.password.value,
//       password_confirmation: form.passwordConfirm.value,
//     };

//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/register-email`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         },
//       );

//       const data = await res.json();

//       if (res.ok) {
//         setMessage("Successfully registered!");
//         setMessageType("success");
//       } else {
//         setMessage(data.message || "Something went wrong!");
//         setMessageType("error");
//       }

//       setShowMessage(true);

//       setTimeout(() => {
//         setShowMessage(false);
//         if (res.ok) router.push("/login");
//       }, 2000);
//     } catch {
//       setMessage("Something went wrong!");
//       setMessageType("error");
//       setShowMessage(true);
//       setTimeout(() => setShowMessage(false), 2000);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const clearError = (field) => {
//     setErrors((prev) => {
//       const newErrors = { ...prev };
//       delete newErrors[field];
//       return newErrors;
//     });
//   };

//   return (
//     <div className="signup">
//       <div className="container">
//         <h1>Sign up</h1>
//         <p>Please fill in the information below:</p>

//         <div className="signupForm">
//           <form onSubmit={handleSubmit}>
//             {/* Name */}
//             <div className="signupFormGroup">
//               {errors.name && (
//                 <div className="validationMessage">{errors.name}</div>
//               )}

//               <div
//                 className={`floatingInput ${errors.name ? "inputError" : ""}`}
//               >
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder=" "
//                   onFocus={() => clearError("name")}
//                 />
//                 <label>Name surname</label>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="signupFormGroup">
//               {errors.email && (
//                 <div className="validationMessage">{errors.email}</div>
//               )}

//               <div
//                 className={`floatingInput ${errors.email ? "inputError" : ""}`}
//               >
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder=" "
//                   onFocus={() => clearError("email")}
//                 />
//                 <label>E-mail</label>
//               </div>
//             </div>

//             <div className="signupFormGroup">
//               {errors.phone && (
//                 <div className="validationMessage">{errors.phone}</div>
//               )}

//               <div
//                 className={`floatingInput ${
//                   errors.phone ? "inputError" : ""
//                 } ${phone || phoneTouched ? "floating" : ""}`}
//               >
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder=" "
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   onFocus={() => {
//                     setPhoneTouched(true);
//                     if (!phone) setPhone("+994 ");
//                     clearError("phone");
//                   }}
//                   onBlur={() => {
//                     // Əgər user heç nə yazmayıbsa və sadəcə +994 var
//                     if (phone === "+994 ") {
//                       setPhone(""); // inputu boşalt
//                       setPhoneTouched(false); // label geri düşəcək
//                     }
//                   }}
//                 />
//                 <label>Phone</label>
//               </div>
//             </div>

//             {/* Password */}
//             <div className="signupFormGroup">
//               {errors.password && (
//                 <div className="validationMessage">{errors.password}</div>
//               )}

//               <div
//                 className={`floatingInput floatingInputPassword ${
//                   errors.password ? "inputError" : ""
//                 }`}
//               >
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   placeholder=" "
//                   onFocus={() => clearError("password")}
//                 />
//                 <label>Password</label>

//                 <span
//                   className="passwordToggleIcon"
//                   onClick={() => setShowPassword((p) => !p)}
//                 >
//                   {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                 </span>
//               </div>
//             </div>

//             {/* Confirm Password */}
//             <div className="signupFormGroup">
//               {errors.passwordConfirm && (
//                 <div className="validationMessage">
//                   {errors.passwordConfirm}
//                 </div>
//               )}

//               <div
//                 className={`floatingInput floatingInputPassword ${
//                   errors.passwordConfirm ? "inputError" : ""
//                 }`}
//               >
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   name="passwordConfirm"
//                   placeholder=" "
//                   onFocus={() => clearError("passwordConfirm")}
//                 />
//                 <label>Retype Password</label>

//                 <span
//                   className="passwordToggleIcon"
//                   onClick={() => setShowConfirmPassword((p) => !p)}
//                 >
//                   {showConfirmPassword ? (
//                     <AiOutlineEyeInvisible />
//                   ) : (
//                     <AiOutlineEye />
//                   )}
//                 </span>
//               </div>
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               className="signupSubmitBtn"
//               style={{
//                 backgroundColor: loading ? "transparent" : undefined,
//                 border: loading ? "1px solid #e0d5e2" : undefined,
//                 pointerEvents: loading ? "none" : undefined,
//               }}
//             >
//               {loading ? (
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     width: "100%",
//                     height: "100%",
//                   }}
//                 >
//                   <Loading />
//                 </div>
//               ) : (
//                 "CREATE ACCOUNT"
//               )}
//             </button>

//             {/* Bottom */}
//             <div className="signupFormBottom">
//               <p>
//                 Do you have an account ?{" "}
//                 <Link className="signupBottomLink" href="/login">
//                   Login now
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Success/Error */}
//       {showMessage && (
//         <div
//           style={{
//             position: "fixed",
//             top: "30px",
//             right: "30px",
//             padding: "10px 20px",
//             backgroundColor: messageType === "success" ? "#21c063" : "#ec1f27",
//             color: "#fff",
//             borderRadius: "5px",
//             fontSize: "1.6rem",
//           }}
//         >
//           {message}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignUp;

// ! phone gonderirem

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUp = ({ t }) => {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = (form) => {
    const newErrors = {};

    if (!form.name.value.trim()) {
      newErrors.name = t?.formValidationName;
    }

    if (!form.email.value.trim()) {
      newErrors.email = t?.formValidationEmail;
    }

    if (!phone.trim() || phone === "+994") {
      newErrors.phone = t?.formValidationPhone;
    }

    if (!form.password.value.trim()) {
      newErrors.password = t?.formValidationPassword;
    }

    if (!form.passwordConfirm.value.trim()) {
      newErrors.passwordConfirm = t?.formValidationPasswordRepeat;
    }

    if (
      form.password.value &&
      form.passwordConfirm.value &&
      form.password.value !== form.passwordConfirm.value
    ) {
      newErrors.passwordConfirm = t?.passwordNotMatch;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    if (!validateForm(form)) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Telefon dəyərini state-dən alırıq
    const rawPhone = phone.replace(/\D/g, "");

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: rawPhone,
      password: form.password.value,
      password_confirmation: form.passwordConfirm.value,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/register-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (res.ok) {
        setMessage("Successfully registered!");
        setMessageType("success");
      } else {
        setMessage(data.message || "Something went wrong!");
        setMessageType("error");
      }

      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
        if (res.ok) router.push("/login");
      }, 2000);
    } catch {
      setMessage("Something went wrong!");
      setMessageType("error");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    } finally {
      setLoading(false);
    }
  };

  const clearError = (field) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  return (
    <div className="signup">
      <div className="container">
        <h1>{t?.signUp}</h1>
        <p>{t?.signUpSubTitle}</p>

        <div className="signupForm">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="signupFormGroup">
              {errors.name && (
                <div className="validationMessage">{errors.name}</div>
              )}
              <div
                className={`floatingInput ${errors.name ? "inputError" : ""}`}
              >
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  onFocus={() => clearError("name")}
                />
                <label>{t?.namesurname}</label>
              </div>
            </div>

            {/* Email */}
            <div className="signupFormGroup">
              {errors.email && (
                <div className="validationMessage">{errors.email}</div>
              )}
              <div
                className={`floatingInput ${errors.email ? "inputError" : ""}`}
              >
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  onFocus={() => clearError("email")}
                />
                <label>{t?.email}</label>
              </div>
            </div>

            {/* Phone */}
            <div className="signupFormGroup">
              {errors.phone && (
                <div className="validationMessage">{errors.phone}</div>
              )}
              <div
                className={`floatingInput ${
                  errors.phone ? "inputError" : ""
                } ${phone || phoneTouched ? "floating" : ""}`}
              >
                <input
                  type="tel"
                  name="phone"
                  placeholder=" "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onFocus={() => {
                    setPhoneTouched(true);
                    if (!phone) setPhone("+994 ");
                    clearError("phone");
                  }}
                  onBlur={() => {
                    if (phone === "+994 ") {
                      setPhone("");
                      setPhoneTouched(false);
                    }
                  }}
                />
                <label>{t?.phone}</label>
              </div>
            </div>

            {/* Password */}
            <div className="signupFormGroup">
              {errors.password && (
                <div className="validationMessage">{errors.password}</div>
              )}
              <div
                className={`floatingInput floatingInputPassword ${
                  errors.password ? "inputError" : ""
                }`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder=" "
                  onFocus={() => clearError("password")}
                />
                <label>{t?.password}</label>
                <span
                  className="passwordToggleIcon"
                  onClick={() => setShowPassword((p) => !p)}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="signupFormGroup">
              {errors.passwordConfirm && (
                <div className="validationMessage">
                  {errors.passwordConfirm}
                </div>
              )}
              <div
                className={`floatingInput floatingInputPassword ${
                  errors.passwordConfirm ? "inputError" : ""
                }`}
              >
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="passwordConfirm"
                  placeholder=" "
                  onFocus={() => clearError("passwordConfirm")}
                />
                <label>{t?.retypePassword}</label>
                <span
                  className="passwordToggleIcon"
                  onClick={() => setShowConfirmPassword((p) => !p)}
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </span>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="signupSubmitBtn"
              style={{
                backgroundColor: loading ? "transparent" : undefined,
                border: loading ? "1px solid #e0d5e2" : undefined,
                pointerEvents: loading ? "none" : undefined,
              }}
            >
              {loading ? (
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
                t?.createAccount
              )}
            </button>

            {/* Bottom */}
            <div className="signupFormBottom">
              <p>
                {t?.haveAccount} {" "}
                <Link className="signupBottomLink" href="/login">
                  {t?.loginNow}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Success/Error */}
      {showMessage && (
        <div
          style={{
            position: "fixed",
            top: "30px",
            right: "30px",
            padding: "10px 20px",
            backgroundColor: messageType === "success" ? "#21c063" : "#ec1f27",
            color: "#fff",
            borderRadius: "5px",
            fontSize: "1.6rem",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default SignUp;
