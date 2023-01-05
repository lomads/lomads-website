import './Contact.style.css';

import logo from '../../../../assets/logo.svg'

import { HiMail } from 'react-icons/hi'
import { FaDiscord, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { useEffect } from 'react';

const Contact = () => {


    return (
        <section className='contact-container' data-scroll-section style={{ perspective: '1px' }}>
            <img src={logo} alt="logo" />
            <h1><span>CONTACT</span> US</h1>
            <p>The best is yet to come! Be a part of our journey.</p>

            <div className='contact-row'>
                <div className='logo-container'>
                    <div className='logo-box'>
                        <a href="mailto:hello@lomads.co" rel="noopener noreferrer" target={"_blank"}>
                            <HiMail size={22} color="#FFF" />
                        </a>
                    </div>
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
            </div>
        </section>
    )
}

export default Contact;