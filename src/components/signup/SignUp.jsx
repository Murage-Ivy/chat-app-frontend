import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="sign-up-group">
      <form className="signup-form-group">
        <h2>Welcome to Chattis</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="submit" value="Sign Up" className="signup-btn" />
        <footer>
          Already Have an Account? <span className="login-option">Log In</span>
        </footer>
      </form>
    </div>
  );
}

export default SignUp;
