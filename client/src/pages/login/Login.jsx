import "./login.css";
import { useContext, useRef } from "react";
import { LoginCall } from "../../apiCalls";
import { AuthContext } from "../../components/context/AuthContexts";


export default function Login() {
  const email = useRef();
  const password = useRef();
//  hellowrold
//phle github pr push kr
  const { 
    // user,
    // isFetching, 
    // error,
     dispatch } = useContext(AuthContext);
  const submit = (e) => {
    e.preventDefault();

    LoginCall({ email:email.current.value, password:password.current.value }, dispatch);


  
  };
  //console.log(user)
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
              name="email"
              placeholder="Email"
              type="email"
              className="loginInput"
              required
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              required
              minLength="6"
              ref={password}
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
