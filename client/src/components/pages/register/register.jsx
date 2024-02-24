import React from "react";
import "./register.css";
const Register = () => {
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
            <input type="text" className="inputB" placeholder="Email" />
            <input type="text" className="inputB" placeholder="Password" />
            <input
              type="text"
              className="inputB"
              placeholder="Password Again"
            />
            <button className="inputB buttonB">Sign Up</button>
            <button className="inputB buttonS">Login into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
