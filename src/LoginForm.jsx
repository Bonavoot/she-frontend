import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup"
import logo from "./assets/she-logo.png"



function LoginForm({ setUser }) {
  const navigate = useNavigate()

  const [userArray, setUserArray] = useState([])
  const [formToggle, setFormToggle] = useState(false)
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleToggle = () => {
    setFormToggle(!formToggle);
}

const fetchUsers = async () => {
    const req = await fetch('http://localhost:3000/users')
    const res = await req.json()
    setUserArray(res)
}

useEffect(() => {
    fetchUsers()
}, [])


function handleLogin() {
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( { "username": usernameInput, "password": passwordInput })
    }).then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
            navigate('/home');
        }
    });
  }

    return (
      <div className="login">
      <img id="login-logo" src={logo} alt="logo" />
      {!formToggle ? 
      <div className="login-form">
        <form onSubmit={(e) => {
          e.preventDefault()
          handleLogin()
          }}>
          <h1>Log In</h1>
          <p>
            <label htmlFor="username"></label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
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

