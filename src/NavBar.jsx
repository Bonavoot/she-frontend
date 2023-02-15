import logo from "./assets/she-logo.png"

const NavBar = () => {

    return (
        <div className="nav-bar">
        <img className="logo" src={logo} alt="logo" />
        <div className="search-container">
        <span class="material-symbols-outlined" id="search-icon">
search
</span>
<input className="search" type="text" placeholder="Search" />
        </div>
        <div className="links">
        <h2>Portfolio</h2>
        <h2>Watchlist</h2>
        <h2 id="welcome">Welcome, name!</h2>
        <h2>Logout</h2>
        </div>
        </div>
    )
}

export default NavBar