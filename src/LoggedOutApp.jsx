import React from "react";
import { Routes, Route} from "react-router-dom";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import Home from "./Home";

function LoggedOutApp({ user, setUser }) {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={<LoginForm setUser={setUser} />}
        />
        <Route
          exact
          path="/signup"
          element={<Signup setUser={setUser} />}
        />
        <Route
        exact
        path="/home"
        element={<Home />}
        />)
      </Routes>
    </div>
  );
}

export default LoggedOutApp;