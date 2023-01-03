import React, { useEffect, useState } from "react";
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
import EarlyAccessForm from "./forms/EarlyAccess";
import PartnerForm from "./forms/Partner";

const Homepage = () => {

    const [openEarlyAccess, setopenEarlyAccess] = useState(false);
    const [openPartner, setopenPartner] = useState(false);

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
            <Banner toggleModal={(value) => setopenEarlyAccess(value)} />
            <Sound />
            <Dashboard />
            <Power />
            <Web3 toggleModal={(value) => setopenPartner(value)} />
            <Hands />
            <Fit />
            <Contributors />
            <Contact />

            {/* Early access form --- full screen modal */}
            {
                openEarlyAccess && <EarlyAccessForm toggleModal={(value) => setopenEarlyAccess(value)} />
            }

            {/* Partner form --- full screen modal */}
            {
                openPartner && <PartnerForm toggleModal={(value) => setopenPartner(value)} />
            }
        </div>
    )
}

export default Homepage;