import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-group">
      <form className="login-form-group">
        <h2>Welcome Back!</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Log In" className="login-btn" />
        <footer>
          Don't Have an Account?
          <Link to="/signup">
            <span className="signup-option">Sign Up</span>
          </Link>
        </footer>
      </form>
    </div>
  );
}

export default Login;
