import React from "react";
import './Navbar.style.css';

import logo from '../../assets/logo.svg'
import logolight from '../../assets/logo-light.svg'
import menu from '../../assets/menu.svg';

import { IoCloseOutline } from 'react-icons/io5'

const Navbar = () => {

    const handleSlideDownAnimation = () => {
        const menu = document.getElementById('full-screen-menu');
        menu.classList.remove('slideUp');
        menu.classList.add('slideDown');
    }

    const handleSlideUpAnimation = () => {
        const menu = document.getElementById('full-screen-menu');
        menu.classList.remove('slideDown');
        menu.classList.add('slideUp');
    }

    return (
        <>
            <section className="navbar-container">
                <img src={logo} alt="logo" />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a className="menu-p" href="https://lomads.medium.com/" target="_blank">BLOG</a>
                    <a className="menu-p" href="https://lomads-1.gitbook.io/lomads/" target="_blank">DOCS</a>
                    {/* <button onClick={handleSlideDownAnimation}><img className="menu" src={menu} alt="logo" /></button> */}
                </div>
            </section>

            {/* open menu  */}
            <div className="full-screen-menu" id="full-screen-menu">
                <div className="menu-header">
                    <img src={logolight} alt="logo" />
                    <button onClick={handleSlideUpAnimation}><IoCloseOutline size={30} color="#FFF" /></button>
                </div>
                <div className="menu-contents">
                    <div className="menu-row"><h1><span>What</span> we do?</h1></div>
                    <div className="menu-row"><h1><span>How</span> we do it? </h1></div>
                    <div className="menu-row"><h1>Our <span>partners</span></h1></div>
                    <div className="menu-row"><h1>Lomads <span>and you</span></h1></div>
                    <div className="menu-row"><h1><span>Contact</span> us</h1></div>
                </div>
            </div>
        </>
    )
}

export default Navbar;