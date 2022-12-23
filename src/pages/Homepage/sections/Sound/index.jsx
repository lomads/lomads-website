import React from "react";
import './Sound.style.css';

import soundbar from '../../../../assets/soundbar.svg';

const Sound = () => {
    return (
        <div className="sound-container">
            <div className="sound-header">
                <h1 className="right_to_left">Why hear just <span>sounds</span></h1>
            </div>
            <div className="sound-header">
                <h1 className="left_to_right">when you can listen to <span>music?</span></h1>
            </div>

            <div className="sound-content">
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

            <img src={soundbar} alt="soundbar" />
        </div>
    )
}

export default Sound;