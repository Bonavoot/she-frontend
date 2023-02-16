import logo from "./assets/she-logo.png"
import { useNavigate } from "react-router-dom"

const NavBar = ({user}) => {
    const navigate = useNavigate()
    
    return (
        <div className="nav-bar">
        <img onClick={() => navigate("/home")} className="logo" src={logo} alt="logo" />
        <div className="search-container">
        <span className="material-symbols-outlined" id="search-icon">
        search
        </span>
        <input className="search" type="text" placeholder="Search" />
        </div>
        <div className="links">
        <h2>Portfolio</h2>
        <h2>Watchlist</h2>
        
        { user ?
        <>
        <h2 id="welcome">Welcome, name!</h2>
            <h1 onClick={() => navigate("/")}>Logout</h1> 
        </> : null
            
        
        }
        
        </div>
        </div>
    )
}

export default NavBar