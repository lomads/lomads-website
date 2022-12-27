import './Contact.style.css';

import logo from '../../../../assets/logo.svg'

import { HiMail } from 'react-icons/hi'
import { FaDiscord, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='contact-container'>
            <img src={logo} alt="logo" />
            <h1><span>CONTACT</span> US</h1>
            <p>The best is yet to come! Be a part of our journey.</p>

            <div className='contact-row'>
                <div className='logo-container'>
                    <div className='logo-box'>
                        <HiMail size={22} color="#FFF" />
                    </div>
                    <div className='logo-box'>
                        <FaDiscord size={22} color="#FFF" />
                    </div>
                    <div className='logo-box'>
                        <FaTwitter size={22} color="#FFF" />
                    </div>
                    <div className='logo-box'>
                        <FaLinkedinIn size={22} color="#FFF" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;