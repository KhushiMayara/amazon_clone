import { useRef, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { signup, useAuth } from "./firebase";

function Register() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      alert("sucessfull create account");
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1> Create Account</h1>
        <form>
          <h5>E-mail</h5>
          <input ref={emailRef} placeholder="Enter your e-mail" />
          <h5>Password</h5>
          <input
            ref={passwordRef}
            type="password"
            placeholder="At least 6 characters"
          />
        </form>
        <p>
          By enrolling your mobile phone number, you consent to receive
          automated security notifications via text message from Amazon. Message
          and data rates may apply.
        </p>
        <button
          className="login_registerButton"
          disabled={loading || currentUser}
          onClick={handleSignup}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Register;
