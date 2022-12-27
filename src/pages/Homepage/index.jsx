import React from "react";
import './Homepage.style.css';
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Contributors from "./sections/Contributors";
import Dashboard from "./sections/Dashboard";
import Fit from "./sections/Fit";
import Hands from "./sections/Hands";
import Power from "./sections/Power";
import Sound from "./sections/Sound";
import Web3 from "./sections/Web3";

const Homepage = () => {
    return (
        <div className="homepage">
            <Banner />
            <Sound />
            <Dashboard />
            <Power />
            <Web3 />
            <Hands />
            <Fit />
            <Contributors />
            <Contact />
        </div>
    )
}

export default Homepage;