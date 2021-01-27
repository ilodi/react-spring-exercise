import React from "react";

export default function Login() {
  return (
    <div className="main-container">
      <div className="main-container__option-viewport">
        <div className="main-container__option-form">
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="Password"></input>
          <button type="button" className="button-action">
            Login
          </button>
        </div>

        <div className="main-container__option-form">
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Full name"></input>
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="Password"></input>
          <button type="button" className="button-action">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
