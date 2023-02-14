import logo from "./assets/she-logo.png"

const NavBar = () => {

    return (
        <div className="nav-bar">
        <img className="logo" src={logo} alt="logo" />
        <div className="links">
        <h2>Portfolio</h2>
        <h2>Watch List</h2>
        <h2>Welcome, name!</h2>
        <h2>Logout</h2>
        </div>
        </div>
    )
}

export default NavBar