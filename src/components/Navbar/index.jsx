import React, { useCallback } from "react";
import "./Navbar.style.css";

import logo from "../../assets/logo.svg";
import logolight from "../../assets/logo-light.svg";
import menu from '../../assets/menu.svg';

import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


/**
 *
 * @param {{ useBlogLogo: boolean }} param0
 * @returns
 */
const Navbar = ({ useBlogLogo }) => {
       const handleSlideDownAnimation = () => {
       const menu = document.getElementById('full-screen-menu');
       menu.classList.remove('slideUp');
       menu.classList.add('slideDown');
   }

  const handleSlideUpAnimation = useCallback(() => {
    const menu = document.getElementById("full-screen-menu");
    menu.classList.remove("slideDown");
    menu.classList.add("slideUp");
  }, []);

  return (
    <>
      <section className="navbar-container">
 {/*        <div className="logo-wrapper">
        <Link to="/">
        <img src={logo} alt="logo" />
        </Link>
        {useBlogLogo && <p className="blog-logo">Blog</p>}
        
        </div> */}
        

        <div style={{ display: "flex", alignItems: "center" }}>
        <div className="logo-wrapper">
        <Link to="/">
        <img style={{ width:'200px'}} src={logo} alt="logo" />
        </Link>
        {useBlogLogo && <p className="blog-logo">Blog</p>}
        
        </div>

        <a
            className="menu-p"
            href="https://www.notion.so/lomads/Lomads-Key-Features-Roadmap-0f0fbc49d063436f95c97f26c57479d8"
            target="_blank"
            rel="noreferrer"
          >
            FEATURES
          </a>

          <Link className="menu-p" to="/blog">
            BLOG
          </Link>
          
          <a
            className="menu-p"
            href="https://lomads-1.gitbook.io/lomads/"
            target="_blank"
            rel="noreferrer"
          >
            DOCS
          </a>
          <a
            className="menu-p"
            href="https://lomads.notion.site/Join-Lomads-as-a-Contributor-9678cce3e06744568cf722a09891a5cd"
            target="_blank"
            rel="noreferrer"
          >
            CONTRIBUTE
          </a>
          
        </div>
        <div style={{ display: "flex", alignItems: "center"}}>

        <button className="access-btn" style={{marginRight:'20px'}} onClick={() => { window.open("https://app.lomads.xyz/login")}}>Launch App</button>

        <button className="access-btn" style={{ backgroundColor:'#C94B32', color:'white' }} onClick={() => { window.open("https://calendly.com/lomads-nishant/lomads-intro")}}>Book a Demo</button>

        <button onClick={handleSlideDownAnimation}><img className="menu" src={menu} alt="logo" /></button>
  
        </div>

      </section>

      {/* open menu  */}
      <div className="full-screen-menu" id="full-screen-menu">
        <div className="menu-header">
          <img src={logolight} alt="logo" />
          <button onClick={handleSlideUpAnimation}>
            <IoCloseOutline size={30} color="#FFF" />
          </button>
        </div>
        <div className="menu-contents">
          <div className="menu-row">
          <a
            className="menu-p"
            href="https://www.notion.so/lomads/Lomads-Key-Features-Roadmap-0f0fbc49d063436f95c97f26c57479d8"
            target="_blank"
            rel="noreferrer"
          >
          <h1>
              FEATURES
          </h1>
          </a>

          </div>
          <div className="menu-row">
          <Link className="menu-p" to="/blog">
          <h1>
              BLOG
          </h1>
          </Link>
          </div>
          <div className="menu-row">
          <a
            className="menu-p"
            href="https://lomads-1.gitbook.io/lomads/"
            target="_blank"
            rel="noreferrer"
          >
          <h1>
              DOCS
          </h1>
          </a>
          </div>

          <div className="menu-row">
          <a
            className="menu-p"
            href="https://app.lomads.xyz/login"
            target="_blank"
            rel="noreferrer"
          >
          <h1>
              Launch App
          </h1>
          </a>
          </div>

          <div className="menu-row">
          <a
            className="menu-p"
            href="https://calendly.com/lomads-nishant/nishant-lomads-reg"
            target="_blank"
            rel="noreferrer"
          >
          <h1>
              Book a Demo
          </h1>
          </a>
          </div>


        </div>
      </div>
    </>
  );
};

export default Navbar;
