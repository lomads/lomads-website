import './Contributors.style.css';

import nishant from '../../../../assets/nishant.png';
import { useEffect } from 'react';

const Contributors = () => {

    useEffect(() => {
        if (window.innerWidth >= 426) {
            setTimeout(() => {
                window.ScrollTrigger.create({
                    trigger: '.contributors-container',
                    start: "top top",
                    pin: true,
                    pinSpacing: false
                });

                window.gsap.to(".scale", {
                    transform: "scale(0.95)",
                    scrollTrigger: {
                        trigger: ".contributors-container",
                        start: "top top",
                        toggleActions: "play none none reverse"
                    },
                });

            }, 50)
        }
    }, [])

    return (
        <section className='contributors-container'>
            <div className="overlay"></div>
            <div className="scale">
                <h1 className='contributors-title'>{`We <3 `}<span>web3</span></h1>
                <p className='contributors-p'>Meet our core contributors and backers.</p>

                <div className='contributor-row'>

                    <div className='contributor-card' style={{ transform: 'rotate(-10.65deg)', zIndex: '1' }}>
                        <img src={nishant} alt="nishant" />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Nishant<br />Bhaskar</h1>
                            <p>Co founder</p>
                        </div>
                    </div>

                    <div className='contributor-card' style={{ transform: 'rotate(5.84deg)', zIndex: '2' }}>
                        <img src={nishant} alt="nishant" />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Nishant<br />Bhaskar</h1>
                            <p>Co founder</p>
                        </div>
                    </div>

                    <div className='contributor-card' style={{ transform: 'rotate(-4.26deg)', zIndex: '3' }}>
                        <img src={nishant} alt="nishant" />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Nishant<br />Bhaskar</h1>
                            <p>Co founder</p>
                        </div>
                    </div>

                    <div className='contributor-card' style={{ transform: 'rotate(5.84deg)', zIndex: '4' }}>
                        <img src={nishant} alt="nishant" />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Nishant<br />Bhaskar</h1>
                            <p>Co founder</p>
                        </div>
                    </div>

                    <div className='contributor-card' style={{ transform: 'rotate(13.48deg)', zIndex: '5' }}>
                        <img src={nishant} alt="nishant" />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Nishant<br />Bhaskar</h1>
                            <p>Co founder</p>
                        </div>
                    </div>

                    <div className='contributor-card' style={{ transform: 'rotate(5.84deg)', zIndex: '6' }}>
                        <img src={nishant} alt="nishant" />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Nishant<br />Bhaskar</h1>
                            <p>Co founder</p>
                        </div>
                    </div>

                    <div className='contributor-card' style={{ transform: 'rotate(-0.71deg)', zIndex: '7' }}>
                        <img src={nishant} alt="nishant" />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Nishant<br />Bhaskar</h1>
                            <p>Co founder</p>
                        </div>
                    </div>

                    <div className='contributor-card' style={{ transform: 'rotate(11.81deg)', zIndex: '8' }}>
                        <img src={nishant} alt="nishant" />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Nishant<br />Bhaskar</h1>
                            <p>Co founder</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contributors;