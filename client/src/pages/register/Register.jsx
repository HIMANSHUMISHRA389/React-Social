import "./register.css";
import {  useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const BASEURL = "http://localhost:8800/api/";
export default function Register() {
  const navigate=useNavigate()
  const username = useRef();
  const email = useRef();
  const password1 = useRef();
  const password2 = useRef();
  const [register, setRegister] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    console.log(
      username.current.value,
      email.current.value,
      password1.current.value,
      password2.current.value
    );
    if (password1.current.value !== password2.current.value) {
      console.log("hello");
      await password2.target.setCustomValidity("password does not match");
    } else {
      const post = await fetch(BASEURL + "auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.current.value,
          email: email.current.value,
          password: password1.current.value,
        }),
      });
      const post1 = await post.json();
      console.log(post1);
      if (post1.username) {
           navigate("/login");
        
      } else {
        setRegister(false)
        alert("something went wrong!");
      }
    }
  };
  
  const login=()=>{
    navigate("/login");
  }
   
  return (
    <form className="login" onSubmit={submit}>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Username"
              className="loginInput"
              required
              ref={username}
            />
            <input
              placeholder="Email"
              className="loginInput"
              required
              type="email"
              ref={email}
            />
            <input
              placeholder="Password"
              className="loginInput"
              required
              type="password"
              minLength="6"
              ref={password1}
            />
            <input
              placeholder="Password Again"
              className="loginInput"
              required
              type="password"
              minLength="6"
              ref={password2}
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton" onClick={login}>Log into Account</button>
          </div>
        </div>
      </div>
    </form>
  );
}
