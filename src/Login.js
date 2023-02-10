import { useRef, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { login, logout, useAuth } from "./firebase";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      alert("sucessfull signin");
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      alert("sucessfull signout");
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            className="login_logo"
            src="./images/logo_1-removebg-preview.png "
            alt=""
          />
        </Link>

        <div className="login_container">
          {/*<div>
            <p> Current logged in as: {currentUser?.email} </p>{" "}
                     </div>
          */}
          <h1>Sign in</h1>
          <form>
            <h5>E-mail</h5>
            <input ref={emailRef} placeholder="enter your e-mail" />
            <h5>Password</h5>
            <input
              ref={passwordRef}
              type="password"
              placeholder="At least 6 characters"
            />

            <button
              className="login_signButton"
              disabled={loading || currentUser}
              onClick={handleLogin}
            >
              Sign in
            </button>

            <button
              className="login_signoutButton"
              disabled={loading || !currentUser}
              onClick={handleLogout}
            >
              Sign out
            </button>
          </form>
          <p>
            By continuing, you agree to Amazon's Fake clone of use Conditions
            and Privacy Notice.
          </p>

          <p> __________ New to Amazon? __________</p>
          {/*  
          <button
            className="login_registerButton"
            disabled={loading || currentUser}
            onClick={handleSignup}
          >
            Create account
          </button>

          */}

          <Link to="/register">
            <div className="register_btn">
              <span>Create Your Amazon account</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
