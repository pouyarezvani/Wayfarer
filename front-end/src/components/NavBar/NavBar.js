import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const links = (
        <div className="nav-items">
            <li>
                <NavLink to="/cities">Cities</NavLink>
            </li>
            <li>
                <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
                <NavLink to="/logout">Log Out</NavLink>
            </li>
        </div>
    )
    return (
        <nav>
            <div className="logo">
                <Link to="/" ><h1>Wayfarer</h1></Link>
            </div>
            {links}
        </nav>
    )
}

export default NavBar;