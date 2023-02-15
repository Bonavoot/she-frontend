import NavBar from "./NavBar"

function LoggedInApp({ user, setUser }) {
    
  const handleLogout = () => {
      setUser(null);
      fetch("/logout", { method: "DELETE" });
    };

    return (
      <div>
          <NavBar handleLogout={handleLogout} />
          <Home />
      </div>
    );
  }
  
  export default LoggedInApp;