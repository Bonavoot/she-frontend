import './index.css'
import { useState, useEffect } from 'react'
import LoggedOutApp from './LoggedOutApp';
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from './NavBar';

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

return (
<div>

{/* if logged in, show info about the user */}
{/* otherwise, show the login/signup forms */}
{/* <SignupForm /> */}
<Router>
  {/* if logged in, show info about the user */}
  {user ? (
    <LoggedInApp
      user={user}
      setUser={setUser}
    />
  ) : (
    /* otherwise, show the login/signup forms */
    <>
    <NavBar user={user} />
    <LoggedOutApp setUser={setUser} />
    </>
  )}
</Router>
</div>
)  
}

export default App

