import React, { useEffect, useRef, useState } from "react";
import './Sound.style.css';

import useOnScreen from "../../../../hooks/useOnScreen";

const Sound = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    return (
        <section className="sound-container" id="sound-container" data-scroll-section style={{ perspective: '1px' }}>
            <div className="sound-header-container">
                <div className="sound-header" data-scroll data-scroll-direction="horizontal">
                    <h1 className="right_to_left" id="right_to_left" >Why hear just <span>sounds</span></h1>
                </div>
                <div className="sound-header">
                    <h1 className="left_to_right" data-scroll data-scroll-direction="horizontal">when you can listen to <span>music?</span></h1>
                </div>
            </div>

            <div ref={ref} className={isVisible ? "sound-content animate__animated animate__fadeIn animate__delay-1s" : "sound-content"}>
                <div className="sound-section">
                    <h1>Deploy capital efficiently</h1>
                    <p>Deploy capital to create maximum impact through batch transactions, recurring payments, task-based and milestone-based compensations.<br />
                        <span>Say goodbye to repetition and hello to automation!</span></p>
                </div>
                <div className="sound-section">
                    <h1>Build accountability</h1>
                    <p>Capture the work and time contribution of your organization’s members. Utilize these metrics to automatically assign shares of voice in decision-making, permissions and rewards.<br />
                        <span>Sweat counts!</span></p>
                </div>
                <div className="sound-section">
                    <h1>Streamline decisions</h1>
                    <p>Cultivate an efficient and autonomous decision-making environment by clearly defining the scope of decision-making across various groups and levels in the organization.<br />
                        <span>And, implement decisions in a heartbeat.</span></p>
                </div>
            </div>

            <div className="sound-footer"></div>

            {/* <img src={soundbar} alt="soundbar" /> */}
        </section>
    )
}

export default Sound;