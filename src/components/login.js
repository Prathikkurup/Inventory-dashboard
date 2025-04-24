import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/login.css";
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/dashboard');
    };
  return (
    <div className="shree">
      <form className="form">
        <p className="title">Login</p>

        <div className="flex">
          <label>
            <input className="input" type="text" required />
            <span>Firstname</span>
          </label>

          <label>
            <input className="input" type="text" required />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input className="input" type="email" required />
          <span>Email</span>
        </label>

        <label>
          <input className="input" type="password" required />
          <span>Password</span>
        </label>

        <label>
          <input className="input" type="password" required />
          <span>Confirm password</span>
        </label>

        <button className="submit" onClick={handleButtonClick}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
