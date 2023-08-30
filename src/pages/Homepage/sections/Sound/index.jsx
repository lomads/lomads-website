import React, { useEffect, useRef } from "react";
import './Sound.style.css';

// import useOnScreen from "../../../../hooks/useOnScreen";

const Sound = () => {
    const ref = useRef();
    // const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (window.innerWidth > 768) {
            setTimeout(() => {
                window.gsap.to('.right_to_left', {
                    duration: 30, x: 800, ease: "none",
                    scrollTrigger: {
                        trigger: ".sound-container",
                        scrub: true,
                        pin: false,
                        start: "-=100%",
                        end: "+=4000"
                    }
                })
                window.gsap.to(".left_to_right", {
                    duration: 10, x: -1200, ease: "none",
                    scrollTrigger: {
                        trigger: ".sound-container",
                        scrub: true,
                        pin: false,
                        start: "-=100%",
                        end: "+=4000",
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
                        start: "top bottom-=100",
                        end: "bottom center",
                        //markers: true
                    },
                    duration: 0.1,
                    x: -2000,
                    ease: "none"
                });

                window.gsap.to(".overlay", {
                    opacity: 0.2,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".dashboard-container",
                        start: "top bottom",
                        toggleActions: "play none none reverse"
                    },
                });

                window.gsap.to(".left_to_right", {
                    transform: "scale(0.9)",
                    duration: 0.3,
                    scrollTrigger: {
                        trigger: ".dashboard-container",
                        start: "top bottom",
                        toggleActions: "play none none reverse"
                    },
                });

                window.gsap.to(".right_to_left", {
                    transform: "scale(0.9)",
                    duration: 0.3,
                    scrollTrigger: {
                        trigger: ".dashboard-container",
                        start: "top bottom",
                        toggleActions: "play none none reverse"
                    },
                });

                window.gsap.to(".scale-down", {
                    transform: "scale(0.9)",
                    duration: 0.3,
                    scrollTrigger: {
                        trigger: ".dashboard-container",
                        start: "top bottom",
                        toggleActions: "play none none reverse"
                    },
                });

            }, 50)
        }
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
                    <h1>Streamlined Finances</h1>
                    <p>With a single, intuitive dashboard, effortlessly <span>navigate across multiple treasuries</span> and blockchains, simplifying your crypto transactions.
                    Say goodbye to cumbersome record-keeping with our <span>built-in auto-labelling</span> feature.</p>
                </div>
                <div className="sound-section">
                    <h1>Personal Data Ownership</h1>
                    <p>Embrace the future with Soul Bound Tokens (SBTs). These revolutionary tokens enable members to maintain a personal <span>record of their contributions and roles,ushering in a new era of personal data ownership</span>.</p>
                </div>
                <div className="sound-section">
                    <h1>Seamless Operations</h1>
                    <p>Integrate with popular platforms like Trello, Github, and Discord. <span>Automate permissions</span> based on roles or criteria using SBTs. Easily <span>add compensation to tasks</span> imported from these tools and facilitate payments.<br />
                        </p>
                </div>
            </div>

            <div className="sound-footer"></div>

            {/* <img src={soundbar} alt="soundbar" /> */}
        </section>
    )
}

export default Sound;
