import React from "react";
import LoginForm from "./LoginForm";
import LoggedInApp from "./LoggedInApp";


function LoggedOutApp({ user, setUser }) {
  return ( <>
    {user ? (
    <LoggedInApp user={user} setUser={setUser} />
    ) : (
    <LoginForm setUser={setUser} />
    )}
    </>
  );
}

export default LoggedOutApp;


