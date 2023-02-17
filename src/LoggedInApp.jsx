import NavBar from "./NavBar"
import Home from "./Home"

function LoggedInApp({ user, setUser }) {
  console.log(user)
  const handleLogout = () => {
    setUser(null)
    fetch('http://localhost:3000/logout', {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          navigate('/')
        }
    })
  }
    return (
    <div className="container">
      <NavBar user={user} handleLogout={handleLogout} />
      <Home />
    </div> 
    );
  }
  
  export default LoggedInApp;