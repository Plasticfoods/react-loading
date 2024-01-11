import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li> <Link to={'/'} className="nav-item">Home</Link> </li>
                <li> <Link to={'/page1'} className="nav-item">Page1</Link> </li>
                <li> <Link to={'/page2'} className="nav-item">Page2</Link> </li>
                <li> <Link to={'/page3'} className="nav-item">Page3</Link> </li>
            </ul>
        </nav>
    )
}