import logo from "./assets/she-logo.png"
import { useNavigate } from "react-router-dom"
const NavBar = ({user, handleLogout}) => {
    const navigate = useNavigate()
    
    return (
        <div className="nav-bar">
        <img className="logo" src={logo} alt="logo" />
        <div className="search-container">
        <span className="material-symbols-outlined" id="search-icon">
        search
        </span>
        <input className="search" type="text" placeholder="Search" />
        </div>
        <div className="links">

        <h2 id="welcome">Welcome, {user ? user.name : navigate('/') }!</h2>
        <h2 onClick={handleLogout}>Logout</h2>
        </div>
        </div>
    )
}

export default NavBar