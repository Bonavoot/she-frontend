import React, { useState } from "react";
import{ useNavigate} from 'react-router-dom'

const Signup = ({formToggle, setFormToggle, setUser}) => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate()

    function handleSubmit(e) {
      e.preventDefault();
      fetch('http://localhost:3000/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "name": name,
          "username": username,
          "password": password,
          "password_confirmation": passwordConfirmation
        }),
      })
        .then((r) => r.json())
        .then(setUser);
        navigate("/home")
    }
    return (
      <div className="signup-form-container">
        <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password_confirmation"></label>
        <input
          type="password"
          id="password_confirmation"
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button className="signup-submit" type="submit">Submit</button>
        <div onClick={() => setFormToggle(!formToggle)}>Already have an account?<span className="login-link"> Login</span></div>
      </form>
      </div>
      
    );
  }

  export default Signup