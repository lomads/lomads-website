import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import './Sound.style.css';

import useOnScreen from "../../../../hooks/useOnScreen";

const Sound = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        setTimeout(() => {
            window.gsap.to('.right_to_left', {
                duration: 10, x: 800, ease: "none",
                scrollTrigger: {
                    trigger: ".sound-container",
                    scrub: true,
                    pin: false,
                    start: "-=100%",
                    end: "+=3000"
                }
            })
            window.gsap.to(".left_to_right", {
                duration: 40, x: -1200, ease: "none",
                scrollTrigger: {
                    trigger: ".sound-container",
                    scrub: true,
                    pin: false,
                    start: "-=100%",
                    end: "+=3000",
                },
            });

            window.gsap.timeline({
                scrollTrigger: {
                    trigger: "#sound-container",
                    start: "top",
                    end: "bottom",
                    pin: true,
                }
            })

            window.gsap.to(".sound-footer", {
                scrollTrigger: {
                    trigger: "#sound-container",
                    scrub: true,
                    pin: false,
                    start: "top center",
                    end: "bottom"
                },
                duration: 20,
                x: -300,
                ease: "none"
            });

            window.gsap.to(".overlay", {
                opacity: 0.2,
                scrollTrigger: {
                    trigger: ".dashboard-container",
                    start: "-=40%",
                    toggleActions: "play none none reverse"
                },
            });

            window.gsap.to(".left_to_right", {
                transform: "scale(0.9)",
                scrollTrigger: {
                    trigger: ".dashboard-container",
                    start: "top-=40%",
                    toggleActions: "play none none reverse"
                },
            });

            window.gsap.to(".right_to_left", {
                transform: "scale(0.9)",
                scrollTrigger: {
                    trigger: ".dashboard-container",
                    start: "top-=40%",
                    toggleActions: "play none none reverse"
                },
            });

            window.gsap.to(".scale-down", {
                transform: "scale(0.9)",
                scrollTrigger: {
                    trigger: ".dashboard-container",
                    start: "top-=40%",
                    toggleActions: "play none none reverse"
                },
            });

        }, 50)
    }, [])

    return (
        <section className="sound-container" id="sound-container">
            <div className="overlay"></div>
            <div className="sound-header-container">
                <div className="sound-header">
                    <h1 className="right_to_left" id="right_to_left" >Why hear just <span>sounds</span></h1>
                </div>
                <div className="sound-header">
                    <h1 className="left_to_right">when you can listen to <span>music?</span></h1>
                </div>
            </div>

            <div ref={ref} className="sound-content scale-down">
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