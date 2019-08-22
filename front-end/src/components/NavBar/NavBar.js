import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const links = (
        <div className="logo">
            <Link exact to="/"><h1>Wayfarer</h1></Link>
        </div>
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
            {links}
        </nav>
    )
}

export default NavBar;