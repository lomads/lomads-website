import React from "react";

import './Power.style.css';

import powerimg from '../../../../assets/power.svg'

const Power = () => {
    return (
        <div className="power-container">
            <img src={powerimg} />
            <h1 className="power-title">
                one <span> power-packed</span><br />
                Token
            </h1>

            <p className="power-content">You will be assigned a pass token for each organization you work for.<br />This unique token has three key features.</p>
            <div className="power-section-container">
                <div className="power-section">
                    <h1>It personalizes</h1>
                    <p>the information you see on the dashboard based on your unique needs.</p>
                </div>
                <div className="power-section">
                    <h1>It personalizes</h1>
                    <p>the information you see on the dashboard based on your unique needs.</p>
                </div>
                <div className="power-section">
                    <h1>It personalizes</h1>
                    <p>the information you see on the dashboard based on your unique needs.</p>
                </div>
            </div>
        </div>
    )
}

export default Power;