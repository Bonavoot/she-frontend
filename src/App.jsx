import './index.css'
import { useState, useEffect } from 'react'
import LoggedOutApp from './LoggedOutApp';
import LoggedInApp from './LoggedInApp';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log(user)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoggedOutApp user={user} setUser={setUser} />,
    },
    {
      path: "/home",
      element: <LoggedInApp user={user} setUser={setUser} />,
    },
  ]);

return (
<RouterProvider router={router} />
)}

export default App

