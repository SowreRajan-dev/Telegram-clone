import React from "react";
import "./Login.css";
export default function Login() {
  return (
    <div className="loginPage">
      <div className="centerBox">
        <div className="upperCenterPart">
          <img src="/Images/tgLogo.png" alt="logo" />
          <div className="upperTexts">
            <h2>Sign in to Telegram</h2>
            <div className="confirmationPara">
              <p>Please confirm your country and</p>
              <p>enter your phone number.</p>
            </div>
          </div>
        </div>
        <div className="lowerCenterPart"></div>
      </div>
    </div>
  );
}
