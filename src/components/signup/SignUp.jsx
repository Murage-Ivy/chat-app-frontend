import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { signupUser } from "./signupslice";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    password: "",
    password_confirmation: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(user, navigate));
    setUser({
      name: "",
      password: "",
      password_confirmation: "",
    });
  };
  return (
    <div className="sign-up-group">
      <form className="signup-form-group" onSubmit={handleSubmit}>
        <h2>Welcome to Chattis</h2>
        <input
          type="text"
          placeholder="Username"
          value={user.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={user.password_confirmation}
          name="password_confirmation"
          onChange={handleChange}
        />
        <input type="submit" value="Sign Up" className="signup-btn" />
        <footer>
          Already Have an Account? <Link to="/"><span className="login-option">Log In</span></Link>
        </footer>
      </form>
    </div>
  );
}

export default SignUp;
