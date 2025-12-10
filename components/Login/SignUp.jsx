import React from "react";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container">
        <h1>Sign up</h1>
        <p>Please fill in the information below:</p>

        <div className="signupForm">
          <form>
            {/* Name surname */}
            <div className="signupFormGroup">
              <div className="floatingInput">
                <input
                  type="text"
                  id="signupName"
                  name="name"
                  placeholder=" "
                  required
                />
                <label htmlFor="signupName">Name surname</label>
              </div>
            </div>

            {/* E-mail */}
            <div className="signupFormGroup">
              <div className="floatingInput">
                <input
                  type="email"
                  id="signupEmail"
                  name="email"
                  placeholder=" "
                  required
                />
                <label htmlFor="signupEmail">E-mail</label>
              </div>
            </div>

            {/* Password */}
            <div className="signupFormGroup">
              <div className="floatingInput">
                <input
                  type="password"
                  id="signupPassword"
                  name="password"
                  placeholder=" "
                  required
                />
                <label htmlFor="signupPassword">Password</label>
              </div>
            </div>

            {/* Retype Password */}
            <div className="signupFormGroup">
              <div className="floatingInput">
                <input
                  type="password"
                  id="signupPasswordConfirm"
                  name="passwordConfirm"
                  placeholder=" "
                  required
                />
                <label htmlFor="signupPasswordConfirm">Retype Password</label>
              </div>
            </div>

            {/* I'm not robot */}
            <div className="signupFormCheckbox">
              <label>
                <input type="checkbox" name="notRobot" />
                <span>I’m not robot</span>
              </label>
            </div>

            {/* Button */}
            <button type="submit" className="signupSubmitBtn">
              CREATE ACCOUNT
            </button>

            {/* Bottom text */}
            <div className="signupFormBottom">
              <p>
                Do you have an account ?{" "}
                <Link href="/login" className="signupBottomLink">
                  Login now
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
