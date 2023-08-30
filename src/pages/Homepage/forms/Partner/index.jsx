import React, { useState } from "react";

import logo from '../../../../assets/logo.svg';

import { IoCloseOutline } from 'react-icons/io5'
import { HiOutlinePlus } from 'react-icons/hi'
import { useNavigate } from "react-router-dom";
import { FaDiscord, FaTwitter } from 'react-icons/fa';

import { isValidUrl } from '../../../../utils';

import axios from "axios";

const PartnerForm = ({ toggleModal }) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [orgName, setOrgName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [resourceList, setResourceList] = useState([]);
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

    // useEffect(() => {
    //     if (success) {
    //         let time = setTimeout(() => {
    //             navigate(-1);
    //         }, 5000);

    //         return () => {
    //             clearTimeout(time);
    //         }
    //     }
    // }, [success]);

    const handleAddResource = () => {
        if (title === '') {
            const element = document.getElementById('title-error');
            element.innerHTML = 'Enter valid title';
            return;
        }
        else if (link === '') {
            const element = document.getElementById('link-error');
            element.innerHTML = 'Enter a link';
            return;
        }
        else if (!isValidUrl(link)) {
            const element = document.getElementById('link-error');
            element.innerHTML = 'Please enter a valid link';
            return;
        }
        else {
            let tempLink = link;
            if (tempLink.indexOf('https://') === -1 && tempLink.indexOf('http://') === -1) {
                tempLink = 'https://' + tempLink;
            }
            let resource = {};
            resource.title = title;
            resource.link = tempLink;
            setResourceList([...resourceList, resource]);
            setTitle('');
            setLink('');
        }
    }

    const handleRemoveResource = (position) => {
        setResourceList(resourceList.filter((_, index) => index !== position));
    }

    const handleEraseForm = () => {
        setName('');
        setOrgName('');
        setEmail('');
        setMsg('');
        setResourceList([]);
    }

    const handleSubmitForm = (e) => {
        if (name === '') {
            const element = document.getElementById('name-error');
            element.innerHTML = 'Enter name';
            setLoading(false);
            return;
        }
        else if (email === '') {
            const element = document.getElementById('email-error');
            element.innerHTML = 'Enter email';
            setLoading(false);
            return;
        }
        else {
            e.preventDefault();
            setLoading(true);
            let formData = {};
            formData.Name = name;
            formData.Email = email;
            formData.Organisation = orgName;
            formData.Message = msg;
            formData.Links = resourceList;

            // axios.post("https://sheetdb.io/api/v1/lf5q94x0dozl8", formData)
            //     .then((data) => { handleEraseForm(); setLoading(false); setSuccess(true); })
            //     .catch((error) => console.error("Error : ", error));

            axios.post("https://sheetdb.io/api/v1/4ewp3vp147hej", formData)
                .then((data) => { handleEraseForm(); setLoading(false); setSuccess(true); })
                .catch((error) => console.error("Error : ", error));
        }
    }

    return (
        <div className="modal-container">
            <div className="form-header">
                <img src={logo} alt="logo" />
                <button onClick={() => navigate(-1)}><IoCloseOutline size={30} color="#C94B32" /></button>
            </div>
            <div className="form-container">
                <div className="form-title">
                    <h1>JOIN US</h1>
                </div>
                <div className="form-title" style={{ marginBottom: '60px' }}>
                    <h1>AS A <span>PARTNER</span></h1>
                </div>

                {
                    success
                        ?
                        <div className="msg-container">
                            <p style={{ fontSize: 20, color: '#76808D' }}>Thank you for your interest in Lomads. You will hear from us soon.</p>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 16 }}>
                                Join us on
                                <div className='logo-box' style={{ marginLeft: 8 }} onClick={() => { window.open("https://discord.com/invite/szqhfekbTy") }}>
                                    <FaDiscord size={22} color="#C94B32" />
                                </div>
                                <div style={{ height: 20, width: 1, backgroundColor: '#444', margin: '0 16px' }}></div>
                                Follow us on
                                <div className='logo-box' style={{ marginLeft: 8 }} onClick={() => { window.open("https://twitter.com/lomads_co") }}>
                                    <FaTwitter size={22} color="#C94B32" />
                                </div>
                            </div>
                        </div>
                        :
                        <>
                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Your name or pseudonym</h1>
                                    <div className="form-tag required">
                                        <p>Required</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={name} onChange={(e) => { setName(e.target.value); document.getElementById('name-error').innerHTML = '' }} />
                                </div>
                                <span className="error-msg" id="name-error"></span>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Your email address</h1>
                                    <div className="form-tag required">
                                        <p>Required</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={email} onChange={(e) => { setEmail(e.target.value); document.getElementById('email-error').innerHTML = '' }} />
                                </div>
                                <span className="error-msg" id="email-error"></span>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Your organisation’s name</h1>
                                    <div className="form-tag">
                                        <p>Optional</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={orgName} onChange={(e) => setOrgName(e.target.value)} />
                                </div>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>{`Link(s) related to your organisation`}</h1>
                                    <div className="form-tag">
                                        <p>Optional</p>
                                    </div>
                                </div>
                                <div className="form-input-row mt-15">
                                    <div className="box-input-div md">
                                        <input className="box-input" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value); document.getElementById('title-error').innerHTML = '' }} />
                                        <span className="error-msg" id="title-error"></span>
                                    </div>
                                    <div className="box-input-div lg">
                                        <input className="box-input" placeholder="Link" value={link} onChange={(e) => { setLink(e.target.value); document.getElementById('link-error').innerHTML = '' }} />
                                        <span className="error-msg" id="link-error"></span>
                                    </div>
                                    <div className="box-input-div">
                                        <button className="form-add-btn" style={link !== '' && title !== '' ? { background: '#C84A32' } : null} onClick={handleAddResource}><HiOutlinePlus size={24} color="#FFF" /></button>
                                    </div>
                                </div>

                                {
                                    resourceList.length > 0 &&
                                    <div className="resource-list">
                                        {
                                            resourceList.map((item, index) => {
                                                return (
                                                    <div className="list-row" key={index}>
                                                        <div className="list-title">
                                                            <span>{item.title}</span>
                                                        </div>
                                                        <div className="list-link">
                                                            <span>{item.link}</span>
                                                        </div>
                                                        <button onClick={() => handleRemoveResource(index)}>X</button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                }
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Message</h1>
                                    <div className="form-tag">
                                        <p>Optional</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <textarea placeholder="Enter message" value={msg} onChange={(e) => setMsg(e.target.value)} />
                                </div>
                            </div>

                            <div className="form-footer">
                                <button onClick={handleEraseForm} disabled={loading} style={loading ? { cursor: 'not-allowed' } : null}>ERASE FORM</button>
                                <button onClick={handleSubmitForm} disabled={loading} style={loading ? { cursor: 'not-allowed' } : null}>
                                    {
                                        loading
                                            ?
                                            <i class="fa fa-spinner fa-spin"></i>
                                            :
                                            "SEND"
                                    }
                                </button>
                            </div>
                        </>
                }

            </div>
        </div>
    )
}

export default PartnerForm;