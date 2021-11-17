import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import useAuth from "../Hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, signInUsingGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const userEmail = (e) => {
    setEmail(e.target.value);
  };

  const userPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    login(email, password, history, redirect_uri);
  };

  const handleGoogleLogin = () => {
    signInUsingGoogle(history, redirect_uri);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container w-50 mt-5 pt-5">
        <h1 className="fs-1 pb-5 text-center">
          <u>Login</u>
        </h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input type="email" onChange={userEmail} className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              onChange={userPassword}
              className="form-control"
            />
          </div>

          <h6 className="fw-normal pb-3 pt-2">
            New Here? <Link to="/register">Register Here</Link>
          </h6>

          <button
            type="button"
            onClick={handleLogin}
            className="btn btn-info mt-2"
            style={{ width: "180px" }}
          >
            Submit
          </button>
          <br />
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-secondary mt-2"
          >
            <img
              style={{ width: "150px" }}
              src="https://i.ibb.co/Jv9Gv9y/btn-google-signin-dark-focus-web-2x.png"
              alt=""
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
