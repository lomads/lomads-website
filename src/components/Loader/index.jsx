import React from "react";
import logo from '../../assets/logo.svg'
import './Loader.style.css';

const LogoLoader = () => {
  return (
    <div id='logoLoader'>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default LogoLoader;