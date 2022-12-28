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

import LocomotiveScroll from 'locomotive-scroll';

const Homepage = () => {

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
        });
        new ResizeObserver(() => scroll.update()).observe(
            document.querySelector("[data-scroll-container]")
        );
    }, []);

    return (
        <div className="homepage" data-scroll-container>
            <Navbar />
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