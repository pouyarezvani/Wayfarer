import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const links = (
        <div className="nav-items">
            <li>
                <NavLink className="nav-li" to="/cities">Cities</NavLink>
            </li>
            <li>
                <NavLink className="nav-li" to="/profile">Profile</NavLink>
            </li>
            <li>
                <NavLink className="nav-li" to="/login">Log In</NavLink>
            </li>
            <li>
                <NavLink className="nav-li" to="/logout">Log Out</NavLink>
            </li>
        </div>
    )
    return (
        <nav>
            <div className="logo">
                <Link className="nav-li" to="/" ><h1>Wayfarer</h1></Link>
            </div>
            {links}
        </nav>
    )
}

export default NavBar;