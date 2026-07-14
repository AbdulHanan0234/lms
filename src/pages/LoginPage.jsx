// import React from 'react';
import "../css/LoginPage.css";
import kfueitlogo from "../assets/kfueit-Logo.png";

export const LoginPage = () => {
  return (
    <div className="login-page d-flex justify-content-center align-items-center vh-100">
      <div className="col-3 login-box h-75 rounded">
        <div className="row login-logo justify-content-center pt-3 ">
          <img src={kfueitlogo} alt="logo" />
        </div>
        <div className="row text-center login-welcome">
          <p>Welcome to My KFUEIT</p>
        </div>
        <div className="row text-center login-text">
          <p>Please enter username and password </p>
        </div>
        <div className="row justify-content-center user-pass ">
          <input type="text" placeholder="Username" />
        </div>
        <div className="row justify-content-center user-pass mt-3">
          <input type="password" placeholder="Password" />
        </div>

        <div className="row  login-test mt-4">
          <p className="fs-5 col-7 text-center pt-2">4+7 = </p>
          <input type="number" className="col-3" />
        </div>
        

        <div className="row text-center login-clue login-text fw-bold mt-3">
          <p>Example: If 2+2 = 4, then Write only 4 in the box</p>
        </div>
        <div className="row  justify-content-center login-text login-btn  ">
          <button className="btn rounded-1 text-white">
            <i class="fa fa-sign-in pe-1 " aria-hidden="true"></i>
            <p className="d-inline">Login</p>
          </button>
        </div>
        <div className="row text-center login-text bottom-text mt-3">
          <p>Reset Password</p>
        </div>
        <div className="row text-center login-text ">
          <p>
            Copyright © 2026 Developed by{" "}
            <span className="bottom-text">KFUEIT</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
