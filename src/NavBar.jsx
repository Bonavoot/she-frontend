import logo from "./assets/she-logo.png"

const NavBar = () => {

    return (
        <div className="nav-bar">
        <img className="logo" src={logo} alt="logo" />
        <div className="links">
        <h2>PORTFOLIO</h2>
        <h2>WATCHLIST</h2>
        <h2 id="welcome">Welcome, name!</h2>
        <h2>LOGOUT</h2>
        </div>
        </div>
    )
}

export default NavBar