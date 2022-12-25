import React from "react";
import './Navbar.style.css';

import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <img src={logo} alt="logo" />
            <img className="menu" src={menu} alt="logo" />
        </div>
    )
}

export default Navbar;