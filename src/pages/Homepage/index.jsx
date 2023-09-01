import React, { useEffect } from "react";
import './Homepage.style.css';
import Navbar from '../../components/Navbar';
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Contributors from "./sections/Contributors";
import Dashboard from "./sections/Dashboard";
import Fit from "./sections/Fit";
import Hands from "./sections/Hands";
import Power from "./sections/Power";
import Sound from "./sections/Sound";
import Web3 from "./sections/Web3";

//import LocomotiveScroll from 'locomotive-scroll';

const Homepage = () => {

    useEffect(() => {
        setTimeout(() => {
            window.gsap.registerPlugin(window.ScrollTrigger, window.ScrollSmoother)
            window.ScrollSmoother.create({
                smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
                effects: true,           // looks for data-speed and data-lag attributes on elements
                smoothTouch: 0.1,
                normalizeScroll: true       // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
            });
        }, [10])

    }, []);

    return (
        <>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <div className="homepage">
                        <Navbar />
                        <Banner />
                        <Sound />
                        <Dashboard />
                        <Power />
                        <Web3 />
                        <Hands />
                        <Contributors />
                        <Contact />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage;
