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
        <div className="logo-wrapper">
        <Link to="/">
        <img src={logo} alt="logo" />
        </Link>
        {useBlogLogo && <p className="blog-logo">Blog</p>}
        </div>
        

        <div style={{ display: "flex", alignItems: "center" }}>

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


        </div>
      </div>
    </>
  );
};

export default Navbar;
