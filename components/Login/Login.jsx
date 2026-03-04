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

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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
      console.log("login response:", res.status, data);

      if (res.ok && data.token) {
        // Token cookie-də saxlanır
        Cookies.set("token", data.token, { expires: 1 / 24 }); // 1 saatlıq
        // Ana səhifəyə yönləndir
        router.push("/");
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
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder=" "
                  required
                />
                <label htmlFor="password">Password</label>

                <Link href="/forgot-password" className="forgotPasswordInside">
                  Forgot your password?
                </Link>
              </div>
            </div>

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
    </div>
  );
};

export default Login;









// ! validation var 

