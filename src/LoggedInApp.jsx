import NavBar from "./NavBar"
import Home from "./Home"

function LoggedInApp({ user, setUser }) {
    
  const handleLogout = () => {
      setUser(null);
      fetch("/logout", { method: "DELETE" });
    };
    return (
    <div className="container">
      <NavBar user={user} handleLogout={handleLogout} />
      <Home />
    </div> 
    );
  }
  
  export default LoggedInApp;


