import React from "react";
import "../style.scss";
import Add from "../img/addAvatar.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign in</button>
          {/* {err && <span>Something went wrong</span>} */}
        </form>
        <p>
          {/* You don't have an account? <Link to="/register">Sign Up</Link>{" "} */}
        </p>
      </div>
    </div>
  );
}
