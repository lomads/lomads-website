import React, { useCallback } from "react";
import "./Navbar.style.css";

import logo from "../../assets/logo.svg";
import logolight from "../../assets/logo-light.svg";
// import menu from '../../assets/menu.svg';

import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

/**
 *
 * @param {{ useBlogLogo: boolean }} param0
 * @returns
 */
const Navbar = ({ useBlogLogo }) => {
  // const handleSlideDownAnimation = () => {
  //     const menu = document.getElementById('full-screen-menu');
  //     menu.classList.remove('slideUp');
  //     menu.classList.add('slideDown');
  // }

  const handleSlideUpAnimation = useCallback(() => {
    const menu = document.getElementById("full-screen-menu");
    menu.classList.remove("slideDown");
    menu.classList.add("slideUp");
  }, []);

  return (
    <>
      <section className="navbar-container">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" />
          {useBlogLogo && <p className="blog-logo">Blog</p>}
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
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
          {/* <button onClick={handleSlideDownAnimation}><img className="menu" src={menu} alt="logo" /></button> */}
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
            <h1>
              <span>What</span> we do?
            </h1>
          </div>
          <div className="menu-row">
            <h1>
              <span>How</span> we do it?{" "}
            </h1>
          </div>
          <div className="menu-row">
            <h1>
              Our <span>partners</span>
            </h1>
          </div>
          <div className="menu-row">
            <h1>
              Lomads <span>and you</span>
            </h1>
          </div>
          <div className="menu-row">
            <h1>
              <span>Contact</span> us
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
