import React from "react";
import "./App.css";
import logo from "../icon/social-media.png";
import { Button, TextField } from "@mui/material";

function Login() {
  return (
    <>
      <div className="login-container">
        <div className="image-container">
          <img src={logo} alt="logo" className="welcome-image" />
        </div>
        <div className="login-box">
          <p>Login Your Account</p>
          <TextField
            id="standard-basic"
            label="Enter username"
            variant="standard"
            className="login-text"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            className="login-text"
          />
          <Button variant="outlined" className="login-button">
            Login
          </Button>
        </div>
      </div>
    </>
  );
}

export default Login;
