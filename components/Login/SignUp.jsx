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

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(""); 

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

    if (!validateForm(form)) {
      if (
        form.password.value &&
        form.passwordConfirm.value &&
        form.password.value !== form.passwordConfirm.value
      ) {
        setServerError(t?.passwordNotMatch);
      }
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

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
      } else if (res.status === 400 && data.errors) {
        const msgs = Object.values(data.errors)
          .flatMap((v) => (Array.isArray(v) ? v : [v]))
          .map((s) => (typeof s === "string" ? s.trim() : String(s)))
          .filter(Boolean);
        if (msgs.some((m) => m.toLowerCase().includes("email"))) {
          setServerError(t?.emailAlreadyInUse);
        } else {
          setServerError(msgs.join(" "));
        }
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
    setServerError("");
  };

  return (
    <div className="signup">
      <div className="container">
        <h1>{t?.signUp}</h1>
        <p>{t?.signUpSubTitle}</p>

        <div className="signupForm">
          <form onSubmit={handleSubmit}>
          
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

            <div className="signupFormGroup">
              {errors.passwordConfirm &&
                errors.passwordConfirm !== t?.passwordNotMatch && (
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

            <div className="signupFormBottom">
              <p>
                {t?.haveAccount}{" "}
                <Link className="signupBottomLink" href="/login">
                  {t?.loginNow}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
