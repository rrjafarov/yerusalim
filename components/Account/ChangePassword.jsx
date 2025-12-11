"use client";

import React from "react";

const ChangePassword = () => {
  return (
    <div className="changePasswordPage">
      <div className="changePasswordPageItems">
        <span className="changePasswordTitle">Change password</span>

        <form className="changePasswordForm" action="">
          {/* Current password */}
          <div className="changePasswordField">
            <span className="changePasswordFieldLabel">Current password</span>
            <input type="password" />
          </div>

          {/* New password */}
          <div className="changePasswordField">
            <span className="changePasswordFieldLabel">New password</span>
            <input type="password" />
          </div>

          {/* Retype password */}
          <div className="changePasswordField">
            <span className="changePasswordFieldLabel">Retype password</span>
            <input type="password" />
          </div>

          {/* Save button */}
          <button type="submit" className="changePasswordSaveBtn">
            SAVE AN CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
