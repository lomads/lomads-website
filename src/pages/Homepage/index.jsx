import React from "react";
import './Homepage.style.css';
import Banner from "./sections/Banner";
import Dashboard from "./sections/Dashboard";
import Power from "./sections/Power";
import Sound from "./sections/Sound";

const Homepage = () => {
    return (
        <div className="homepage">
            <Banner />
            <Sound />
            <Dashboard />
            <Power />
        </div>
    )
}

export default Homepage;