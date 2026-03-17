"use client";

import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const SuccessPopup = ({ message }) => {
  return (
    <div className="successPopupOverlay">
      <div className="successPopupBox">
        <div className="successIcon">
          <IoMdCheckmarkCircleOutline color="#25D366" />
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SuccessPopup;
