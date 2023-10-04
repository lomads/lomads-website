import React from "react";

import './Power.style.css';

import powerimg from '../../../../assets/power.svg'
// import { HiOutlineArrowRight } from 'react-icons/hi'

const Power = () => {


    return (
        <section className="power-container">
            <img data-speed={window.innerWidth > 1024 ? "0.9" : "1"} src={powerimg} data-scroll data-scroll-speed={-1} alt="" />
            <h1 className="power-title" data-scroll data-scroll-speed={2}>
                one <span> power-packed</span><br />
                Token
            </h1>

            <div className="power-content-container">
                <p className="power-content" data-scroll data-scroll-speed={1}>With Soulbound Tokens, members become active participants, <br />controlling their personal data and credentials.</p>
            </div>
            <div className="power-section-container">
                <div className="power-section" data-scroll data-scroll-speed={1}>
                    <h1>Flexible Membership Choices</h1>
                    <p>Opt for free or one-time payments, and open or whitelisted membership.</p>
                </div>
                <div className="power-section" data-scroll data-scroll-speed={1}>
                    <h1>Inclusive <br />Onboarding </h1>
                    <p>Welcome all with social logins and credit card payments.</p>
                </div>
                <div className="power-section" data-scroll data-scroll-speed={1}>
                    <h1>Secure Data<br />Encryption</h1>
                    <p>Member contact information and details are safely encrypted.</p>
                </div>
            </div>
            </section>
    )
}

export default Power;
