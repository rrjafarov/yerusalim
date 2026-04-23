"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Loading from "@/components/Loading";
import SuccessPopup from "@/components/Login/SuccessPopup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = ({t}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({}); 
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // 🔥 VALIDATION
  const validateForm = (form) => {
    const newErrors = {};

    if (!form.email.value.trim()) {
      newErrors.email = t?.formValidationEmail || "Email required";
    }

    if (!form.password.value.trim()) {
      newErrors.password = t?.formValidationPassword || "Password required";
    }

    return newErrors;
  };

  const clearError = (field) => {
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    // 🔥 əvvəlcə validation
    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const formData = {
      email: form.email.value,
      password: form.password.value,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/login-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 401) {
          setError(t?.incorrectEmailOrPassword);
        } else {
          setError("Something went wrong");
        }
        return;
      }

      if (data.token) {
        Cookies.set("token", data.token, { expires: 1 / 24 });
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          router.push("/");
        }, 1500);
      }
    } catch (err) {
      console.error("login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <h1>{t?.login}</h1>
        <p>{t?.loginSubTitle}:</p>

        <div className="loginForm">
          <form onSubmit={handleSubmit}>
            
            <div className="loginFormGroup">
              {/* 🔥 EMAIL ERROR */}
              {errors.email && (
                <div className="validationMessage">{errors.email}</div>
              )}

              <div className="floatingInput">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  onFocus={() => clearError("email")}
                />
                <label htmlFor="email">{t?.email}</label>
              </div>
            </div>

            <div className="loginFormGroup">
              {/* 🔥 PASSWORD ERROR */}
              {errors.password && (
                <div className="validationMessage">{errors.password}</div>
              )}

              <div className="floatingInput floatingInputPassword">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder=" "
                  onFocus={() => clearError("password")}
                />
                <label htmlFor="password">{t?.password}</label>

                <div className="forgotPasswordInside">
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? (
                      <AiOutlineEye size={20} />
                    ) : (
                      <AiOutlineEyeInvisible size={20} />
                    )}
                  </span>

                  <Link href="/forgot-password">{t?.forgotPass}</Link>
                </div>
              </div>
            </div>

            {error && (
              <p
                style={{
                  color: "#ec1f27",
                  marginBottom: "2.2rem",
                  fontSize: "1.5rem",
                  padding: "0",
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="loginSubmitBtn"
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
                t?.login
              )}
            </button>

            <div className="loginFormBottom">
              <p>
                {t?.dontHaveAccount}{" "}
                <Link href="/sign-up" className="signupLink signupBottomLink">
                  {t?.signUp}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {showSuccess && <SuccessPopup message={t?.successLogin} />}
    </div>
  );
};

export default Login;