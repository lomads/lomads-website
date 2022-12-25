import React from "react";
import './Homepage.style.css';
import Banner from "./sections/Banner";
import Dashboard from "./sections/Dashboard";
import Sound from "./sections/Sound";

const Homepage = () => {
    return (
        <div className="homepage">
            <Banner />
            {/* <Sound />
            <Dashboard /> */}
        </div>
    )
}

export default Homepage;