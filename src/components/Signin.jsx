import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="bg-primary p-5 vh-100">
      <div className=" container  d-flex justify-content-center  align-items-center">
        <div className="shadow forming shadow-lg mt-5 p-5 bg-info rounded rounded-3">
          <p className="text-center text-primary fs-3 fw-bold">Welcome back!</p>
          <p className="title">Sign In</p>
          <form className="form">
            <input type="text" className="input" placeholder="Username" />
            <input type="password" className="input" placeholder="Password" />
            <button className="form-btn">Create account</button>
          </form>
          <p className="sign-up-label text-white">
            Don't have an account?
            <Link to={"/dasboard"} className="sign-up-link text-danger">
              Sign Up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
