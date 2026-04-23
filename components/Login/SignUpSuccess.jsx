import React from "react";
import { IoIosCheckmark } from "react-icons/io";

const SignUpSuccess = ({ t }) => {
  return (
    <div className="signUpSuccessPage">
      <div className="container">
        <div className="signUpSuccessPageMain">
          <strong>
            <IoIosCheckmark style={{ color: "#4CAF50" }} />
          </strong>
          <span>{t?.signUpSuccessTitle}</span>
          <p>{t?.signUpSuccessSubTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpSuccess;
