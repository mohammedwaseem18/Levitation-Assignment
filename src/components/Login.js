import React, { useState } from "react";
import "./login.css";
import FormPage from "../pages/FormPage";



import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      }
    );
    
    const json = await response.json();

    if (json.authToken) {
      // Login successful, navigate to form page
      navigate("/FormPage");
    } else {
      alert(json.message);
    }
  };
  return (
    <div className="login">
      <form className="loginbox" onSubmit={handlesubmit}>
        <h1 className="login-title">Welcome Back</h1>
        <p>sub-title text goes here</p>
        <div className="login-inputcontainer">
          <div>
            <label className="inp-component" htmlFor="username">
              <input
                placeholder="Email Address *"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="login-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password" className="inp-component">
              <input
                placeholder="Password *"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="login-input"
                type="password"
              />
            </label>
          </div>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        <div className="login-footer-desc">
          <div className="rem-password">
            <input type="checkbox" name="" id="" />
            <p>Remember Password</p>
          </div>
          <Link to={"forgotpassword"}>
            <p>Forgot Password ?</p>
          </Link>
        </div>
      </form>
      <div className="right-login">
        <img src="	https://lvdigital.cloudflareaccess.com/apps/img/login.1d689067.svg"></img>
      </div>
      {loggedIn && <FormPage />} {/* Render FormPage component if loggedIn state is true */}
    </div>
  );
}
