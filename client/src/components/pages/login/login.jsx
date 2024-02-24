import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLesftDiv">
            <h1>Lama Social</h1>
            <p>Connect your friend and the world around on LamaSocial</p>
          </div>
        </div>
        <div className="loginRight">
          <div className="loginForm">
            <input type="text" className="inputB " placeholder="Username" />
            <input type="text" className="inputB" placeholder="Password" />
            <button className="inputB buttonB">Login</button>
            <button className="inputB buttonS">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
