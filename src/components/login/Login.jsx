import "../login/login.css";
import bag from "../../assets/login.jpeg";
import React, { useState } from "react";

const login = ({ setSignet }) => {
  const [name, setName] = useState(``);
  const [password, setPassword] = useState(``);

  const submitted = (e) => {
    e.preventDefault();
    if (name == `admin` && password == `0000`) {
      setSignet(true);
    } else {
      alert(`Parol yoki login noto'g'ri`);
    }
  };

  return (
    <div className="cyber-wrap">
      <div className="login-sec">
        <form className="login-form" onSubmit={submitted}>
          <h1>CYBER</h1>
          <h2>Log-in to your account</h2>

          <label>Username</label>
          <input
            className="username-inp"
            type="text"
            placeholder="Your username:admin"
            onChange={(e) => setName(e.target.value)}
          />

          <label>Password</label>
          <input
            className="pass-inp"
            type="text"
            placeholder="Your password:0000"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="log-in" type="submit">Log-in</button>

          <p className="res-pass">
            Reset password{" "}
            <span className="for-pass">Forgot your password ?</span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default login;
