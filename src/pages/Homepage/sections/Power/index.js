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
                <p className="power-content" data-scroll data-scroll-speed={1}>You can now launch Soulbound Token for the members of your organization. <br/>The unique Soulbound Token for each member performs three key roles:</p>
            </div>
            <div className="power-section-container">
                <div className="power-section" data-scroll data-scroll-speed={1}>
                    <h1>It personalizes</h1>
                    <p>the information they see on the dashboard based on their unique needs.</p>
                </div>
                <div className="power-section" data-scroll data-scroll-speed={1}>
                    <h1>It automates</h1>
                    <p>your members’ access within the platform and across various third-party tools.</p>
                </div>
                <div className="power-section" data-scroll data-scroll-speed={1}>
                    <h1>It records</h1>
                    <p>the contributions of members while giving them ownership of their data.</p>
                </div>
            </div>
        </section>
    )
}

export default Power;