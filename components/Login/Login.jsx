
import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        <p>Enter your email and password to login:</p>

        <div className="loginForm">
          <form>
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

            {/* Password + Forgot password (inputun içində) */}
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

                <Link
                  href="/forgot-password"
                  className="forgotPasswordInside"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            {/* I'm not robot */}
            <div className="loginFormCheckbox">
              <label>
                <input type="checkbox" name="notRobot" />
                <span>I’m not robot</span>
              </label>
            </div>

            {/* Submit button */}
            <button type="submit" className="loginSubmitBtn">
              LOGIN NOW
            </button>

            {/* Bottom text */}
            <div className="loginFormBottom">
              <p>
                Don’t have an account ?{" "}
                <Link href="/sign-up" className="signupLink">
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
