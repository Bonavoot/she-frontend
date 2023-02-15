
import './index.css'
// import Home from './Home'
import { useState, useEffect } from 'react'
import Signup from './Signup'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return <h2>Welcome, {user.username}!</h2>;
  } else {
    return <Signup onLogin={setUser} />;
  }
}

export default App
