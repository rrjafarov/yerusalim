// import React from "react";
// import Link from "next/link";

// const Login = () => {
//   return (
//     <div className="login">
//       <div className="container">
//         <h1>Login</h1>
//         <p>Enter your email and password to login:</p>

//         <div className="loginForm">
//           <form>
//             {/* E-mail */}
//             <div className="loginFormGroup">
//               <div className="floatingInput">
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder=" "
//                   required
//                 />
//                 <label htmlFor="email">E-mail</label>
//               </div>
//             </div>

//             {/* Password + Forgot password (inputun içində) */}
//             <div className="loginFormGroup">
//               <div className="floatingInput floatingInputPassword">
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   placeholder=" "
//                   required
//                 />
//                 <label htmlFor="password">Password</label>

//                 <Link
//                   href="/forgot-password"
//                   className="forgotPasswordInside"
//                 >
//                   Forgot your password?
//                 </Link>
//               </div>
//             </div>

//             {/* I'm not robot */}
//             <div className="loginFormCheckbox">
//               <label>
//                 <input type="checkbox" name="notRobot" />
//                 <span>I’m not robot</span>
//               </label>
//             </div>

//             {/* Submit button */}
//             <button type="submit" className="loginSubmitBtn">
//               LOGIN NOW
//             </button>

//             {/* Bottom text */}
//             <div className="loginFormBottom">
//               <p>
//                 Don’t have an account ?{" "}
//                 <Link href="/sign-up" className="signupLink">
//                   Sign up
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// ! bismillah ya Allah

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Loading from "@/components/Loading";
import SuccessPopup from "@/components/Login/SuccessPopup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1 saniyə delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const form = e.target;
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

      // ❌ ERROR HANDLE
      if (!res.ok) {
        if (res.status === 401) {
          setError("Incorrect email or password");
        } else {
          setError("Something went wrong");
        }
        return;
      }
      // ✅ SUCCESS
      if (data.token) {
        Cookies.set("token", data.token, { expires: 1 / 24 });

        // popup aç
        setShowSuccess(true);

        // 1 saniyə sonra bağla + redirect
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
        <h1>Login</h1>
        <p>Enter your email and password to login:</p>

        <div className="loginForm">
          <form onSubmit={handleSubmit}>
            {/* E-mail */}
            <div className="loginFormGroup">
              <div className="floatingInput">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                />
                <label htmlFor="email">E-mail</label>
              </div>
            </div>

            {/* Password + Forgot password */}
            <div className="loginFormGroup">
              <div className="floatingInput floatingInputPassword">
                {/* <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder=" "
                  required
                />
                <label htmlFor="password">Password</label>

                <Link href="/forgot-password" className="forgotPasswordInside">
                  Forgot your password?
                </Link> */}

                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder=" "
                  required
                />
                <label htmlFor="password">Password</label>

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

                  <Link href="/forgot-password">Forgot your password?</Link>
                </div>
              </div>
            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <p
                style={{
                  color: "#ec1f27",
                  marginBottom: "2.2rem",
                  fontSize: "1.5rem",
                  padding: "0",
                  fontFamily: "",
                }}
              >
                {error}
              </p>
            )}

            {/* I'm not robot */}
            {/* <div className="loginFormCheckbox">
              <label>
                <input type="checkbox" name="notRobot" />
                <span>I’m not robot</span>
              </label>
            </div> */}

            {/* Submit button */}
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
                "LOGIN NOW"
              )}
            </button>

            {/* Bottom text */}
            <div className="loginFormBottom">
              <p>
                Don’t have an account ?{" "}
                <Link href="/sign-up" className="signupLink signupBottomLink">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      {showSuccess && <SuccessPopup message="Uğurla giriş edildi" />}
    </div>
  );
};

export default Login;

// ! validation var
