import React, { useEffect, useState } from "react";
import '../style.css';

import logo from '../../../../assets/logo.svg';

import { IoCloseOutline } from 'react-icons/io5'
import { FiCheck } from 'react-icons/fi'
import { HiOutlinePlus } from 'react-icons/hi'
import { FaDiscord, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { isValidUrl } from '../../../../utils';

const EarlyAccessForm = () => {
    const navigate = useNavigate();
    const [check, setCheck] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [orgName, setOrgName] = useState('');
    const [orgAim, setOrgAim] = useState('');
    const [role, setRole] = useState('');
    const [contributorCount, setContributorCount] = useState('');
    const [priorities, setPriorities] = useState('');
    const [tool, setTool] = useState('');
    const [how, setHow] = useState('');

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [resourceList, setResourceList] = useState([]);
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

    const [cryptoTransaction, setCryptoTransaction] = useState('');
    const [projectMilestones, setProjectMilestones] = useState('');
    const [bounties, setBounties] = useState('');
    const [contributionTrack, setContributionTrack] = useState('');
    const [accessControl, setAccessControl] = useState('');
    const [governance, setGovernance] = useState('');
    const [tokenLaunch, setTokenLaunch] = useState('');


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

    const handleEraseForm = () => {
        setCheck("");
        setName("");
        setEmail("");
        setAddress("");
        setOrgName("");
        setOrgAim("");
        setRole("");
        setContributorCount("");
        setTool("");
        setPriorities("");
        setHow("");
        setResourceList([]);
        setTitle("");
        setLink("");
        setCryptoTransaction("");
        setProjectMilestones("");
        setBounties("");
        setContributionTrack("");
        setAccessControl("");
        setGovernance("");
        setTokenLaunch("");
    }

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

    const handleSubmitForm = (e) => {

        if (name === '') {
            const element = document.getElementById('name-error');
            element.innerHTML = 'Enter name';
            element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
            setLoading(false);
            return;
        }
        else if (email === '') {
            const element = document.getElementById('email-error');
            element.innerHTML = 'Enter email';
            element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
            setLoading(false);
            return;
        }
        else if (address === '') {
            const element = document.getElementById('address-error');
            element.innerHTML = 'Enter eth address';
            element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
            setLoading(false);
            return;
        }
        else if (orgAim === '') {
            const element = document.getElementById('orgAim-error');
            element.innerHTML = 'Enter appropriate answer';
            element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
            setLoading(false);
            return;
        }
        else if (role === '') {
            const element = document.getElementById('role-error');
            element.innerHTML = 'Enter your role in the organisation';
            element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
            setLoading(false);
            return;
        }
        else if (contributorCount === '') {
            const element = document.getElementById('count-error');
            element.innerHTML = 'Enter number of active contributors';
            element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
            setLoading(false);
            return;
        }
        else {
            e.preventDefault();
            setLoading(true);
            let formData = {};
            formData.Name = name;
            formData.Tools = tool;
            formData.Funding = check;
            formData.Email = email;
            formData.Eth_address = address;
            formData.Organisation = orgName;
            formData.Organisation_function = orgAim;
            formData.Role = role;
            formData.Contributors = contributorCount;
            formData.Crypto_Transaction = cryptoTransaction;
            formData.Project_Milestones = projectMilestones;
            formData.Bounties = bounties;
            formData.Contribution_Track = contributionTrack;
            formData.Access_control = accessControl;
            formData.Governance = governance;
            formData.Token_launch = tokenLaunch;
            formData.Other_priorities = priorities;
            formData.Links = resourceList;
            formData.Contact_reference = how;

            console.log("Formdata : ", formData);

            // axios.post("https://sheetdb.io/api/v1/nzz0npcvh322j", formData)
            //     .then((data) => { handleEraseForm(); setLoading(false); setSuccess(true); })
            //     .catch((error) => console.error("Error : ", error));

            axios.post("https://sheetdb.io/api/v1/baw8f8ftnxj6k", formData)
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
                    <h1>GET <span>EARLY ACCESS</span></h1>
                </div>
                <div className="form-title" style={{ marginBottom: '60px' }}>
                    <h1>TO LOMADS BETA</h1>
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
                                    <h1>Your ETH address</h1>
                                    <div className="form-tag required">
                                        <p>Required</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={address} onChange={(e) => { setAddress(e.target.value); document.getElementById('address-error').innerHTML = '' }} />
                                </div>
                                <span className="error-msg" id="address-error"></span>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Your organisation's name</h1>
                                    <div className="form-tag">
                                        <p>Optional</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={orgName} onChange={(e) => { setOrgName(e.target.value); document.getElementById('orgName-error').innerHTML = '' }} />
                                </div>
                                <span className="error-msg" id="orgName-error"></span>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>What does your organisation do, or wants to achieve?</h1>
                                    <div className="form-tag required">
                                        <p>Required</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={orgAim} onChange={(e) => { setOrgAim(e.target.value); document.getElementById('orgAim-error').innerHTML = '' }} />
                                </div>
                                <span className="error-msg" id="orgAim-error"></span>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>What is your role in the organisation? (eg. contributor, co-founder, core team member)</h1>
                                    <div className="form-tag required">
                                        <p>Required</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={role} onChange={(e) => { setRole(e.target.value); document.getElementById('role-error').innerHTML = '' }} />
                                </div>
                                <span className="error-msg" id="role-error"></span>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Number of contributors who contribute at least 1 day per week.</h1>
                                    <div className="form-tag required">
                                        <p>Required</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={contributorCount} onChange={(e) => { setContributorCount(e.target.value); document.getElementById('count-error').innerHTML = '' }} />
                                </div>
                                <span className="error-msg" id="count-error"></span>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Which web2 and/or web3 tools are you using for your
                                        organisation/community?</h1>
                                    <div className="form-tag">
                                        <p>Optional</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={tool} onChange={(e) => setTool(e.target.value)} />
                                </div>
                            </div>

                            <div className="form-input-wrapper">
                                <div className="form-input-row">
                                    <h1>Has your organisation received any external funding?</h1>
                                    <div className="form-tag required">
                                        <p>Required</p>
                                    </div>
                                </div>
                                <div className="form-input-row flex-column">
                                    <div className="form-checkbox-row">
                                        <div className="form-checkbox" onClick={() => setCheck("YES")}>
                                            {
                                                check === 'YES' ? <div className="checked"><FiCheck color="#FFF" /></div> : <div className="unchecked"></div>
                                            }
                                        </div>
                                        <label>YES</label>
                                    </div>
                                    <div className="form-checkbox-row">
                                        <div className="form-checkbox" onClick={() => setCheck("NO")}>
                                            {
                                                check === 'NO' ? <div className="checked"><FiCheck color="#FFF" /></div> : <div className="unchecked"></div>
                                            }
                                        </div>
                                        <label>NO</label>
                                    </div>
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
                                    <h1>How did you hear about us?<br />(If referred by someone, please include the name)</h1>
                                    <div className="form-tag">
                                        <p>Optional</p>
                                    </div>
                                </div>
                                <div className="form-input-row">
                                    <input type="text" placeholder="Answer" value={how} onChange={(e) => setHow(e.target.value)} />
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

export default EarlyAccessForm;
