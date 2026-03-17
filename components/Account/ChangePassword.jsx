"use client";
import React, { useState } from "react";
import { useUpdatePasswordMutation } from "@/redux/userService";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const isFormFilled =
    currentPassword.trim() !== "" &&
    newPassword.trim() !== "" &&
    retypePassword.trim() !== "";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== retypePassword) {
      alert("New password and retype password do not match!");
      return;
    }
    try {
      await updatePassword({
        current_password: currentPassword,
        new_password: newPassword,
      }).unwrap();

      setSuccessMessage(true);

      setCurrentPassword("");
      setNewPassword("");
      setRetypePassword("");

      // Success mesajını 3 saniyə göstərək
      setTimeout(() => setSuccessMessage(false), 3000);
    } catch (err) {
      console.error("Failed to update password:", err);
      alert("Error updating password");
    }
  };

  return (
    <div className="changePasswordPage">
      <div className="changePasswordPageItems">
        <span className="changePasswordTitle">Change password</span>
        <form className="changePasswordForm" onSubmit={handleSubmit}>
          {/* Current password */}
          <div className="changePasswordField">
            <span className="changePasswordFieldLabel">Current password</span>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          {/* New password */}
          <div className="changePasswordField">
            <span className="changePasswordFieldLabel">New password</span>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          {/* Retype password */}
          <div className="changePasswordField">
            <span className="changePasswordFieldLabel">Retype password</span>
            <input
              type="password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
            />
          </div>
          {/* Save button */}
          <button
            type="submit"
            className="changePasswordSaveBtn"
            disabled={isLoading || !isFormFilled}
            style={
              successMessage
                ? {
                    border: "2px solid #4caf50",
                    background: "#ffffff",
                    color: "#000000",
                  }
                : {}
            }
          >
            {isLoading
              ? "Saving..."
              : successMessage
              ? "Password updated!"
              : "SAVE AND CONTINUE"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;