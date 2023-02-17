import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup"
import logo from "./assets/she-logo.png"

function LoginForm({user, setUser }) {
  const [formToggle, setFormToggle] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user);
          navigate("/home")
        });
       } else {
          resp.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };
  return (
    <div className="login">
    <img id="login-logo" src={logo} alt="logo" />
    {!formToggle ? 
    <div className="login-form">
      <form onSubmit={(e) => {e.preventDefault(); handleSubmit()}}>
        <h1>Log In</h1>
        <p>
          <label htmlFor="username"></label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <button className="login-submit" type="submit">Log In</button>
        </p>
          <div onClick={() => setFormToggle(!formToggle)}>Don't have an account?<span className="sign-up-link"> Sign Up</span></div>
      </form>
    </div> :
  <Signup formToggle={formToggle} setUser={setUser} setFormToggle={setFormToggle} />
  }
  </div>
  );
}

export default LoginForm;