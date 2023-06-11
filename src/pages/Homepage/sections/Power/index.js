import React, { useEffect } from "react";

import './Power.style.css';

import powerimg from '../../../../assets/power.svg'

const Power = () => {

    useEffect(() => {

    }, [])

    return (
        <section className="power-container">
            <img data-speed={window.innerWidth > 1024 ? "0.9" : "1"}  src={powerimg} data-scroll data-scroll-speed={-1} />
            <h1 className="power-title" data-scroll data-scroll-speed={2}>
                one <span> power-packed</span><br />
                Token
            </h1>

            <div className="power-content-container">
                <p className="power-content" data-scroll data-scroll-speed={1}>With SBTs, your members will no longer be passive passengers.<br/>Instead, they can take command of their personal data and credentials.</p>
            </div>
            <div className="power-section-container">
                <div className="power-section" data-scroll data-scroll-speed={1}>
                    <h1>Flexible Membership Choices</h1>
                    <p>Choose between free or one-time payment, and open access or whitelisted entry.</p>
                </div>
                <div className="power-section" data-scroll data-scroll-speed={1}>
                    <h1>Inclusive <br/>Onboarding </h1>
                    <p>Embrace newcomers by accepting social login and credit card payments (if applicable).</p>
                </div>
                <div className="power-section" data-scroll data-scroll-speed={1}>
                    <h1>Gas Fee <br/>Coverage</h1>
                    <p>Go the extra mile by offering free minting of SBTs.</p>
                </div>
            </div>
        </section>
    )
}

export default Power;
