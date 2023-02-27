import './Contact.style.css';

import logo from '../../../../assets/logo.svg'

import { HiOutlineArrowRight } from 'react-icons/hi'
import { FaDiscord, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import axios from "axios";

// https://sheetdb.io/api/v1/x4sjofyeerfgg

const Contact = () => {
    const [showInput, setShowInput] = useState(false);
    const [email, setEmail] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (email === '') {
                const element = document.getElementById('email-error');
                element.innerHTML = 'Enter valid email';
            }
            else {
                let formData = {};
                formData.Email = email;

                axios.post("https://sheetdb.io/api/v1/x4sjofyeerfgg", formData)
                    .then((data) => { setEmail(""); setShowInput(false); })
                    .catch((error) => console.error("Error : ", error));
            }
        }
    }

    return (
        <section className='contact-container' data-scroll-section style={{ perspective: '1px' }}>
            <img src={logo} alt="logo" />
            <h1><span>CONTACT</span> US</h1>
            <p>The best is yet to come! Be a part of our journey.</p>

            <div className='contact-row'>
                <div className='contact-wrapper'>
                    <div className='logo-container'>
                        {/* <div className='logo-box'>
                        <a href="mailto:hello@lomads.co" rel="noopener noreferrer" target={"_blank"}>
                            <HiMail size={22} color="#FFF" />
                        </a>
                    </div> */}
                        <div className='logo-box' onClick={() => { window.open("https://discord.com/invite/szqhfekbTy") }}>
                            <FaDiscord size={22} color="#FFF" />
                        </div>
                        <div className='logo-box' onClick={() => { window.open("https://twitter.com/lomads_co") }}>
                            <FaTwitter size={22} color="#FFF" />
                        </div>
                        <div className='logo-box' onClick={() => { window.open("https://www.linkedin.com/company/lomads/") }}>
                            <FaLinkedinIn size={22} color="#FFF" />
                        </div>
                    </div>
                    <div className='newsletter-container'>
                        {
                            showInput
                                ?
                                <input
                                    placeholder='Enter your email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                                :
                                <div className='newsletter' onClick={() => setShowInput(true)}>
                                    <p>Join our newsletter</p>
                                    <HiOutlineArrowRight size={22} color="#FFF" />
                                </div>
                        }
                    </div>
                </div>
                <span className="error-msg" id="title-error"></span>
            </div>


            <div className='contact-tnc'>
                <a href='https://docs.google.com/document/d/1OcpjNlWg2N91ixZ9jENg5SuVCJVGia2c/edit?usp=sharing&ouid=110632288440070539099&rtpof=true&sd=true' target='_blank'>PRIVACY POLICY</a>
                <div className='dash'></div>
                <a href='https://docs.google.com/document/d/1bmGfFhF-H4uCTIfDEm5RVnThvYOz1hYm/edit#heading=h.qkijrj5agehs' target='_blank'>TERMS OF SERVICE</a>
            </div>
        </section>
    )
}
export default Contact;